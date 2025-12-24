import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const Cookies = () => {
  return (
    <>
      <Helmet>
        <title>Cookie Policy | BY M.ILI</title>
        <meta name="description" content="Learn about how BY M.ILI uses cookies on our website." />
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
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-8">Cookie Policy</h1>
              <p className="text-muted-foreground mb-8">Last updated: December 2024</p>

              <div className="prose prose-invert max-w-none space-y-8">
                <section>
                  <h2 className="font-display text-2xl font-bold mb-4">What Are Cookies</h2>
                  <p className="text-muted-foreground">
                    Cookies are small text files that are stored on your computer or mobile device when 
                    you visit our website. They help us provide you with a better experience.
                  </p>
                </section>

                <section>
                  <h2 className="font-display text-2xl font-bold mb-4">How We Use Cookies</h2>
                  <p className="text-muted-foreground mb-4">We use cookies to:</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Remember your preferences and settings</li>
                    <li>Keep you signed in to your account</li>
                    <li>Understand how you use our website</li>
                    <li>Improve our services and user experience</li>
                    <li>Show you relevant advertisements</li>
                  </ul>
                </section>

                <section>
                  <h2 className="font-display text-2xl font-bold mb-4">Managing Cookies</h2>
                  <p className="text-muted-foreground">
                    You can control and manage cookies through your browser settings. Please note that 
                    removing or blocking cookies may impact your user experience.
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

export default Cookies;
