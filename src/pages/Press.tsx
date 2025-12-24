import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Newspaper, Download, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const pressReleases = [
  {
    date: 'December 2024',
    title: 'BY M.ILI Launches Global Shipping Initiative',
    excerpt: 'Kenyan fashion brand expands worldwide reach with new shipping partnerships.',
  },
  {
    date: 'November 2024',
    title: 'New Season Collection Unveiled',
    excerpt: 'BY M.ILI introduces its most sustainable collection yet.',
  },
  {
    date: 'October 2024',
    title: 'BY M.ILI Featured in Vogue Africa',
    excerpt: 'The brand receives recognition for innovative designs.',
  },
];

const Press = () => {
  return (
    <>
      <Helmet>
        <title>Press & Media | BY M.ILI</title>
        <meta name="description" content="Press releases, media coverage, and brand assets for BY M.ILI." />
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
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Press & Media</h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Stay updated with the latest news and media coverage about BY M.ILI.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              {/* Media Contact */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-card p-8 rounded-lg mb-12"
              >
                <h2 className="font-display text-2xl font-bold mb-4">Media Inquiries</h2>
                <p className="text-muted-foreground mb-4">
                  For press inquiries, interview requests, or brand collaborations, please contact our media team.
                </p>
                <div className="flex items-center gap-2 text-gold">
                  <Mail className="w-5 h-5" />
                  <span>press@bymili.com</span>
                </div>
              </motion.div>

              {/* Brand Assets */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-card p-8 rounded-lg mb-12"
              >
                <h2 className="font-display text-2xl font-bold mb-4">Brand Assets</h2>
                <p className="text-muted-foreground mb-6">
                  Download our official logos, brand guidelines, and press kit.
                </p>
                <Button className="bg-gold hover:bg-gold-dark text-accent-foreground">
                  <Download className="w-4 h-4 mr-2" />
                  Download Press Kit
                </Button>
              </motion.div>

              {/* Press Releases */}
              <h2 className="font-display text-2xl font-bold mb-6">Latest News</h2>
              <div className="space-y-4">
                {pressReleases.map((release, index) => (
                  <motion.div
                    key={release.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="bg-card p-6 rounded-lg"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gold/10 rounded-lg">
                        <Newspaper className="w-6 h-6 text-gold" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">{release.date}</p>
                        <h3 className="font-display text-lg font-bold mb-2">{release.title}</h3>
                        <p className="text-muted-foreground">{release.excerpt}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Press;
