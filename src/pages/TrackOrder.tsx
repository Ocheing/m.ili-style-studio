import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Search, Package, Truck, CheckCircle } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const TrackOrder = () => {
  const [orderNumber, setOrderNumber] = useState('');
  const [isTracking, setIsTracking] = useState(false);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (orderNumber) {
      setIsTracking(true);
    }
  };

  return (
    <>
      <Helmet>
        <title>Track Your Order | BY M.ILI</title>
        <meta name="description" content="Track your BY M.ILI order status and get real-time delivery updates." />
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
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Track Your Order</h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Enter your order number to see the current status of your delivery.
              </p>
            </motion.div>

            <div className="max-w-2xl mx-auto">
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                onSubmit={handleTrack}
                className="bg-card p-8 rounded-lg mb-8"
              >
                <div className="flex gap-4">
                  <Input
                    placeholder="Enter your order number (e.g., BM-12345)"
                    value={orderNumber}
                    onChange={(e) => setOrderNumber(e.target.value)}
                    className="flex-1"
                  />
                  <Button type="submit" className="bg-gold hover:bg-gold-dark text-accent-foreground">
                    <Search className="w-4 h-4 mr-2" />
                    Track
                  </Button>
                </div>
              </motion.form>

              {isTracking && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-card p-8 rounded-lg"
                >
                  <h2 className="font-display text-xl font-bold mb-6">Order Status: {orderNumber}</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-accent-foreground" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold">Order Confirmed</p>
                        <p className="text-sm text-muted-foreground">Your order has been received</p>
                      </div>
                      <span className="text-sm text-muted-foreground">Dec 20</span>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center">
                        <Package className="w-5 h-5 text-accent-foreground" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold">Processing</p>
                        <p className="text-sm text-muted-foreground">Your order is being prepared</p>
                      </div>
                      <span className="text-sm text-muted-foreground">Dec 21</span>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                        <Truck className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-muted-foreground">In Transit</p>
                        <p className="text-sm text-muted-foreground">Estimated delivery in 3-5 days</p>
                      </div>
                      <span className="text-sm text-muted-foreground">Pending</span>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mt-8">
                    For more information, please contact our support team.
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default TrackOrder;
