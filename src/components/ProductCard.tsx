import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, ShoppingBag, Eye } from 'lucide-react';
import { Product } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import { useWishlist } from '@/contexts/WishlistContext';
import { useCurrency } from '@/contexts/CurrencyContext';
import { toast } from '@/hooks/use-toast';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const { formatPrice } = useCurrency();
  const inWishlist = isInWishlist(product.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: product.sizes[0],
      color: product.colors[0],
    });
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    if (inWishlist) {
      removeFromWishlist(product.id);
      toast({
        title: "Removed from wishlist",
        description: `${product.name} has been removed from your wishlist.`,
      });
    } else {
      addToWishlist({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      });
      toast({
        title: "Added to wishlist",
        description: `${product.name} has been added to your wishlist.`,
      });
    }
  };

  return (
    <motion.div
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link to={`/product/${product.id}`}>
        {/* Image Container */}
        <div className="relative aspect-[3/4] overflow-hidden bg-secondary rounded-lg">
          {/* Main Image */}
          <motion.img
            src={product.image}
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover"
            animate={{ opacity: isHovered && product.hoverImage ? 0 : 1 }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Hover Image */}
          {product.hoverImage && (
            <motion.img
              src={product.hoverImage}
              alt={`${product.name} alternate`}
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            />
          )}

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.isNew && (
              <span className="bg-gold text-accent-foreground text-xs font-medium px-3 py-1 rounded-full">
                NEW
              </span>
            )}
            {product.isBestSeller && (
              <span className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                BEST SELLER
              </span>
            )}
            {product.originalPrice && (
              <span className="bg-destructive text-destructive-foreground text-xs font-medium px-3 py-1 rounded-full">
                SALE
              </span>
            )}
          </div>

          {/* Action Buttons */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.2 }}
                className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2"
              >
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleAddToCart}
                  className="icon-button"
                >
                  <ShoppingBag className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleWishlist}
                  className={`icon-button ${inWishlist ? 'bg-gold text-accent-foreground' : ''}`}
                >
                  <Heart className={`w-5 h-5 ${inWishlist ? 'fill-current' : ''}`} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="icon-button"
                >
                  <Eye className="w-5 h-5" />
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Product Info */}
        <div className="mt-4 space-y-1">
          <p className="text-xs text-muted-foreground uppercase tracking-wider">
            {product.category}
          </p>
          <h3 className="font-medium text-foreground group-hover:text-gold transition-colors">
            {product.name}
          </h3>
          <div className="flex items-center gap-2">
            <span className="font-semibold">{formatPrice(product.price)}</span>
            {product.originalPrice && (
              <span className="text-muted-foreground line-through text-sm">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
          
          {/* Color Options */}
          <div className="flex items-center gap-1 pt-2">
            {product.colors.slice(0, 4).map((color, index) => (
              <span
                key={color}
                className="w-4 h-4 rounded-full border border-border"
                style={{ 
                  backgroundColor: color.toLowerCase() === 'white' ? '#fff' 
                    : color.toLowerCase() === 'black' ? '#000'
                    : color.toLowerCase() === 'navy' ? '#001f3f'
                    : color.toLowerCase() === 'grey' || color.toLowerCase() === 'charcoal' ? '#666'
                    : color.toLowerCase() === 'camel' ? '#c19a6b'
                    : color.toLowerCase() === 'burgundy' ? '#800020'
                    : color.toLowerCase() === 'forest green' ? '#228b22'
                    : color.toLowerCase() === 'brown' ? '#8b4513'
                    : color.toLowerCase() === 'light blue' ? '#add8e6'
                    : color.toLowerCase() === 'pink' ? '#ffc0cb'
                    : color 
                }}
              />
            ))}
            {product.colors.length > 4 && (
              <span className="text-xs text-muted-foreground">+{product.colors.length - 4}</span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
