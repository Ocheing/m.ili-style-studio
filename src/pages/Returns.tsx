import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { RotateCcw, Package, Clock, CheckCircle } from 'lucide-react';

const Returns = () => {
  return (
    <>
      <Helmet>
        <title>Returns & Exchange | BY M.ILI</title>
        <meta name="description" content="Learn about our hassle-free return and exchange policy at BY M.ILI." />
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
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Returns & Exchange</h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                We want you to love your purchase. If not, we make returns easy.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              {/* Return Policy */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-card p-8 rounded-lg mb-8"
              >
                <h2 className="font-display text-2xl font-bold mb-6 flex items-center gap-3">
                  <RotateCcw className="w-6 h-6 text-gold" />
                  Return Policy
                </h2>
                <p className="text-muted-foreground mb-4">
                  We accept returns within <strong>30 days</strong> of delivery. Items must be:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-gold" />
                    Unworn and in original condition
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-gold" />
                    With all original tags attached
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-gold" />
                    In original packaging
                  </li>
                </ul>
              </motion.div>

              {/* How to Return */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-card p-8 rounded-lg mb-8"
              >
                <h2 className="font-display text-2xl font-bold mb-6">How to Return</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-gold text-accent-foreground flex items-center justify-center font-bold">1</div>
                    <div>
                      <h3 className="font-semibold mb-1">Contact Us</h3>
                      <p className="text-muted-foreground">Email returns@bymili.com with your order number and reason for return.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-gold text-accent-foreground flex items-center justify-center font-bold">2</div>
                    <div>
                      <h3 className="font-semibold mb-1">Receive Return Label</h3>
                      <p className="text-muted-foreground">We'll send you a prepaid return label via email.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-gold text-accent-foreground flex items-center justify-center font-bold">3</div>
                    <div>
                      <h3 className="font-semibold mb-1">Ship Your Return</h3>
                      <p className="text-muted-foreground">Pack the item securely and drop it off at the nearest courier.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-gold text-accent-foreground flex items-center justify-center font-bold">4</div>
                    <div>
                      <h3 className="font-semibold mb-1">Receive Refund</h3>
                      <p className="text-muted-foreground">Refunds are processed within 5-7 business days after we receive your return.</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Exchanges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-card p-8 rounded-lg"
              >
                <h2 className="font-display text-2xl font-bold mb-4">Exchanges</h2>
                <p className="text-muted-foreground">
                  Want a different size or color? Contact us and we'll help arrange an exchange. 
                  If the new item costs more, you'll pay the difference. If it costs less, 
                  we'll refund the difference.
                </p>
              </motion.div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Returns;
