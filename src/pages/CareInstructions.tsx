import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Shirt, Droplets, Wind, Flame } from 'lucide-react';

const CareInstructions = () => {
  return (
    <>
      <Helmet>
        <title>Care Instructions | BY M.ILI</title>
        <meta name="description" content="Learn how to properly care for your BY M.ILI garments to keep them looking beautiful." />
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
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Care Instructions</h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Keep your BY M.ILI pieces looking beautiful with proper care.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-card p-6 rounded-lg"
                >
                  <Droplets className="w-8 h-8 text-gold mb-4" />
                  <h3 className="font-display text-xl font-bold mb-3">Washing</h3>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Hand wash or use delicate cycle with cold water</li>
                    <li>• Turn garments inside out before washing</li>
                    <li>• Use mild, color-safe detergent</li>
                    <li>• Avoid bleach and harsh chemicals</li>
                    <li>• Wash similar colors together</li>
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-card p-6 rounded-lg"
                >
                  <Wind className="w-8 h-8 text-gold mb-4" />
                  <h3 className="font-display text-xl font-bold mb-3">Drying</h3>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Air dry flat on a clean surface</li>
                    <li>• Avoid direct sunlight to prevent fading</li>
                    <li>• Do not wring or twist garments</li>
                    <li>• Reshape while damp if needed</li>
                    <li>• Avoid tumble drying when possible</li>
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="bg-card p-6 rounded-lg"
                >
                  <Flame className="w-8 h-8 text-gold mb-4" />
                  <h3 className="font-display text-xl font-bold mb-3">Ironing</h3>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Iron on low to medium heat</li>
                    <li>• Iron inside out to protect outer fabric</li>
                    <li>• Use a pressing cloth for delicate fabrics</li>
                    <li>• Steam can help remove wrinkles gently</li>
                    <li>• Avoid ironing over prints or embellishments</li>
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="bg-card p-6 rounded-lg"
                >
                  <Shirt className="w-8 h-8 text-gold mb-4" />
                  <h3 className="font-display text-xl font-bold mb-3">Storage</h3>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Store in a cool, dry place</li>
                    <li>• Use padded hangers for delicate items</li>
                    <li>• Fold knitwear to prevent stretching</li>
                    <li>• Keep away from direct sunlight</li>
                    <li>• Use garment bags for special pieces</li>
                  </ul>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-gold/10 p-6 rounded-lg mt-8 text-center"
              >
                <p className="text-sm">
                  <strong>Pro Tip:</strong> Always check the care label on your specific garment 
                  for the most accurate care instructions.
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

export default CareInstructions;
