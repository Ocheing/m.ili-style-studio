import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | BY M.ILI</title>
        <meta name="description" content="Learn about BY M.ILI - a Kenyan-based premium fashion brand crafting timeless elegance for women worldwide." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1">
          {/* Hero */}
          <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&h=800&fit=crop"
              alt="About BY M.ILI"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-background/70" />
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative text-center px-4"
            >
              <h1 className="font-display text-4xl md:text-6xl font-bold mb-4">About Us</h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Crafting timeless elegance from the heart of Kenya
              </p>
            </motion.div>
          </section>

          {/* Story */}
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
                  <p className="text-muted-foreground mb-4">
                    Born in Nairobi, Kenya, BY M.ILI was founded with a vision to bring African elegance to the global fashion stage. Our journey began with a simple belief: that every woman deserves to feel confident and beautiful in what she wears.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    We blend contemporary design with timeless sophistication, creating pieces that transcend seasons and trends. Each garment is carefully crafted to celebrate the modern woman's multifaceted life.
                  </p>
                  <p className="text-muted-foreground">
                    From our studio in Kenya, we ship to customers worldwide, sharing our passion for refined fashion with women across the globe.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1558171813-4c088753af8f?w=600&h=800&fit=crop"
                    alt="Our Story"
                    className="rounded-lg w-full"
                  />
                </motion.div>
              </div>
            </div>
          </section>

          {/* Values */}
          <section className="py-16 md:py-24 bg-secondary/30">
            <div className="container mx-auto px-4">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-display text-3xl md:text-4xl font-bold text-center mb-12"
              >
                Our Values
              </motion.h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { title: 'Quality', description: 'We use only the finest fabrics and employ skilled artisans to ensure every piece meets our exacting standards.' },
                  { title: 'Sustainability', description: 'We are committed to ethical production practices and minimizing our environmental footprint.' },
                  { title: 'Inclusivity', description: 'Fashion is for everyone. We design for women of all sizes, backgrounds, and lifestyles.' },
                ].map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center p-8 bg-card rounded-lg"
                  >
                    <h3 className="font-display text-xl font-bold mb-4 text-gold">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default About;
