import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const Terms = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service | BY M.ILI</title>
        <meta name="description" content="Read BY M.ILI's terms of service for using our website and purchasing our products." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto"
            >
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-8">Terms of Service</h1>
              <p className="text-muted-foreground mb-8">Last updated: December 2024</p>

              <div className="prose prose-invert max-w-none space-y-8">
                <section>
                  <h2 className="font-display text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
                  <p className="text-muted-foreground">
                    By accessing and using this website, you accept and agree to be bound by the terms 
                    and provision of this agreement.
                  </p>
                </section>

                <section>
                  <h2 className="font-display text-2xl font-bold mb-4">2. Products and Pricing</h2>
                  <p className="text-muted-foreground">
                    All prices are displayed in your selected currency and are subject to change without notice. 
                    We reserve the right to modify or discontinue any product without prior notice.
                  </p>
                </section>

                <section>
                  <h2 className="font-display text-2xl font-bold mb-4">3. Orders and Payment</h2>
                  <p className="text-muted-foreground">
                    By placing an order, you are offering to purchase a product. All orders are subject to 
                    availability and confirmation of the order price. We accept various payment methods as 
                    displayed during checkout.
                  </p>
                </section>

                <section>
                  <h2 className="font-display text-2xl font-bold mb-4">4. Shipping and Delivery</h2>
                  <p className="text-muted-foreground">
                    Delivery times are estimates and may vary. We are not responsible for delays caused by 
                    customs, weather, or other factors beyond our control.
                  </p>
                </section>

                <section>
                  <h2 className="font-display text-2xl font-bold mb-4">5. Returns and Refunds</h2>
                  <p className="text-muted-foreground">
                    Please refer to our Returns & Exchange policy for information about returning products 
                    and obtaining refunds.
                  </p>
                </section>

                <section>
                  <h2 className="font-display text-2xl font-bold mb-4">6. Contact</h2>
                  <p className="text-muted-foreground">
                    For any questions regarding these terms, please contact us at legal@bymili.com.
                  </p>
                </section>
              </div>
            </motion.div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Terms;
