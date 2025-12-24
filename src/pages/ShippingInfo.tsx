import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Truck, Globe, Clock, Package } from 'lucide-react';

const ShippingInfo = () => {
  return (
    <>
      <Helmet>
        <title>Shipping Information | BY M.ILI</title>
        <meta name="description" content="Learn about BY M.ILI shipping options, delivery times, and costs for Kenya and worldwide." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Shipping Information</h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                We deliver worldwide from our base in Nairobi, Kenya.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              {/* Shipping Options */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="grid md:grid-cols-2 gap-6 mb-12"
              >
                <div className="bg-card p-6 rounded-lg">
                  <Truck className="w-8 h-8 text-gold mb-4" />
                  <h3 className="font-display text-xl font-bold mb-2">Kenya Delivery</h3>
                  <p className="text-muted-foreground mb-4">
                    Fast delivery within Kenya using trusted courier partners.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex justify-between">
                      <span>Nairobi</span>
                      <span className="text-muted-foreground">1-2 days</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Other cities</span>
                      <span className="text-muted-foreground">2-5 days</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-card p-6 rounded-lg">
                  <Globe className="w-8 h-8 text-gold mb-4" />
                  <h3 className="font-display text-xl font-bold mb-2">International Delivery</h3>
                  <p className="text-muted-foreground mb-4">
                    We ship to customers worldwide with tracking included.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex justify-between">
                      <span>East Africa</span>
                      <span className="text-muted-foreground">5-10 days</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Worldwide</span>
                      <span className="text-muted-foreground">7-21 days</span>
                    </li>
                  </ul>
                </div>
              </motion.div>

              {/* Additional Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="space-y-6"
              >
                <div className="bg-card p-6 rounded-lg">
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-gold mt-1" />
                    <div>
                      <h3 className="font-display text-lg font-bold mb-2">Processing Time</h3>
                      <p className="text-muted-foreground">
                        Orders are processed within 1-3 business days. During peak seasons, 
                        processing may take an additional 1-2 days.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-card p-6 rounded-lg">
                  <div className="flex items-start gap-4">
                    <Package className="w-6 h-6 text-gold mt-1" />
                    <div>
                      <h3 className="font-display text-lg font-bold mb-2">Packaging</h3>
                      <p className="text-muted-foreground">
                        All items are carefully packaged in our signature BY M.ILI boxes to ensure 
                        they arrive in perfect condition.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default ShippingInfo;
