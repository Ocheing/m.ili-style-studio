import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import { motion } from 'framer-motion';

const BestSellers = () => {
  const bestSellers = products.filter(p => p.isBestSeller);

  return (
    <>
      <Helmet>
        <title>Best Sellers | BY M.ILI</title>
        <meta name="description" content="Shop BY M.ILI's most popular pieces. Our best-selling two-piece sets, dresses, and coordinated outfits loved by customers worldwide." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1">
          {/* Hero */}
          <section className="bg-secondary/30 py-16 md:py-24">
            <div className="container mx-auto px-4 text-center">
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-gold text-sm font-medium tracking-wider uppercase mb-4 block"
              >
                Customer Favorites
              </motion.span>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-display text-4xl md:text-5xl font-bold mb-4"
              >
                Best Sellers
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-muted-foreground max-w-2xl mx-auto"
              >
                Our most loved pieces, chosen by customers around the world
              </motion.p>
            </div>
          </section>

          {/* Products */}
          <section className="py-12 md:py-16">
            <div className="container mx-auto px-4">
              <p className="text-muted-foreground mb-8">
                {bestSellers.length} best-selling pieces
              </p>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
              >
                {bestSellers.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </motion.div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default BestSellers;
