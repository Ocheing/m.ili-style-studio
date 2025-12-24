import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | BY M.ILI</title>
        <meta name="description" content="Read BY M.ILI's privacy policy to understand how we collect, use, and protect your personal information." />
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
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-8">Privacy Policy</h1>
              <p className="text-muted-foreground mb-8">Last updated: December 2024</p>

              <div className="prose prose-invert max-w-none space-y-8">
                <section>
                  <h2 className="font-display text-2xl font-bold mb-4">1. Information We Collect</h2>
                  <p className="text-muted-foreground">
                    We collect information you provide directly to us, such as when you create an account, 
                    make a purchase, subscribe to our newsletter, or contact us. This may include your name, 
                    email address, postal address, phone number, and payment information.
                  </p>
                </section>

                <section>
                  <h2 className="font-display text-2xl font-bold mb-4">2. How We Use Your Information</h2>
                  <p className="text-muted-foreground">
                    We use the information we collect to process your orders, send you marketing communications 
                    (with your consent), improve our services, and comply with legal obligations.
                  </p>
                </section>

                <section>
                  <h2 className="font-display text-2xl font-bold mb-4">3. Information Sharing</h2>
                  <p className="text-muted-foreground">
                    We do not sell or rent your personal information to third parties. We may share your 
                    information with service providers who assist us in operating our business, such as 
                    payment processors and shipping carriers.
                  </p>
                </section>

                <section>
                  <h2 className="font-display text-2xl font-bold mb-4">4. Security</h2>
                  <p className="text-muted-foreground">
                    We implement appropriate security measures to protect your personal information against 
                    unauthorized access, alteration, disclosure, or destruction.
                  </p>
                </section>

                <section>
                  <h2 className="font-display text-2xl font-bold mb-4">5. Contact Us</h2>
                  <p className="text-muted-foreground">
                    If you have any questions about this Privacy Policy, please contact us at privacy@bymili.com.
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

export default Privacy;
