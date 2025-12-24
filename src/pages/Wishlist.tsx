import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Heart, ShoppingBag, X, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useWishlist } from '@/contexts/WishlistContext';
import { useCart } from '@/contexts/CartContext';
import { useCurrency } from '@/contexts/CurrencyContext';
import { toast } from '@/hooks/use-toast';
import { products } from '@/data/products';

const Wishlist = () => {
  const { items, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();
  const { formatPrice } = useCurrency();

  const handleMoveToCart = (item: typeof items[0]) => {
    const product = products.find(p => p.id === item.id);
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      size: product?.sizes[0] || 'M',
      color: product?.colors[0] || 'Black',
    });
    removeFromWishlist(item.id);
    toast({
      title: "Moved to cart",
      description: `${item.name} has been added to your cart.`,
    });
  };

  if (items.length === 0) {
    return (
      <>
        <Helmet>
          <title>Wishlist | BY M.ILI</title>
        </Helmet>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1 flex items-center justify-center py-20">
            <div className="text-center">
              <Heart className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
              <h1 className="font-display text-3xl font-bold mb-2">Your wishlist is empty</h1>
              <p className="text-muted-foreground mb-8">Save items you love for later.</p>
              <Button asChild className="bg-gold text-accent-foreground hover:bg-gold-dark">
                <Link to="/">
                  Start Shopping
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </main>
          <Footer />
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Wishlist ({items.length}) | BY M.ILI</title>
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1 py-12">
          <div className="container mx-auto px-4">
            <h1 className="font-display text-3xl md:text-4xl font-bold mb-8">
              My Wishlist ({items.length})
            </h1>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {items.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative bg-card border border-border rounded-lg overflow-hidden"
                >
                  <Link to={`/product/${item.id}`}>
                    <div className="aspect-[3/4] overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  </Link>
                  
                  <button
                    onClick={() => removeFromWishlist(item.id)}
                    className="absolute top-3 right-3 p-2 bg-background/90 rounded-full hover:bg-destructive hover:text-destructive-foreground transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                  
                  <div className="p-4">
                    <h3 className="font-medium mb-1 group-hover:text-gold transition-colors">
                      {item.name}
                    </h3>
                    <p className="font-semibold mb-4">{formatPrice(item.price)}</p>
                    
                    <Button
                      onClick={() => handleMoveToCart(item)}
                      className="w-full bg-gold text-accent-foreground hover:bg-gold-dark"
                    >
                      <ShoppingBag className="w-4 h-4 mr-2" />
                      Add to Cart
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Wishlist;
