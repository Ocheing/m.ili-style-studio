import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const positions = [
  {
    title: 'Fashion Designer',
    location: 'Nairobi, Kenya',
    type: 'Full-time',
    description: 'We are looking for a creative fashion designer to join our team and help create stunning collections.',
  },
  {
    title: 'E-commerce Manager',
    location: 'Remote',
    type: 'Full-time',
    description: 'Manage our online presence and drive sales across multiple platforms.',
  },
  {
    title: 'Customer Service Representative',
    location: 'Nairobi, Kenya',
    type: 'Full-time',
    description: 'Provide exceptional service to our valued customers worldwide.',
  },
  {
    title: 'Social Media Manager',
    location: 'Remote',
    type: 'Part-time',
    description: 'Create engaging content and grow our social media presence.',
  },
];

const Careers = () => {
  return (
    <>
      <Helmet>
        <title>Careers | BY M.ILI</title>
        <meta name="description" content="Join the BY M.ILI team. Explore career opportunities in fashion, e-commerce, and more." />
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
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Join Our Team</h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Be part of a passionate team dedicated to redefining fashion from Kenya to the world.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-card p-8 rounded-lg mb-12"
              >
                <h2 className="font-display text-2xl font-bold mb-4">Why Work With Us?</h2>
                <p className="text-muted-foreground mb-4">
                  At BY M.ILI, we believe in nurturing talent and fostering creativity. We offer a dynamic work environment 
                  where your ideas are valued and your growth is supported.
                </p>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Competitive salaries and benefits</li>
                  <li>• Flexible work arrangements</li>
                  <li>• Professional development opportunities</li>
                  <li>• Employee discounts on our collections</li>
                </ul>
              </motion.div>

              <h2 className="font-display text-2xl font-bold mb-6">Open Positions</h2>
              <div className="space-y-4">
                {positions.map((position, index) => (
                  <motion.div
                    key={position.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="bg-card p-6 rounded-lg"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <h3 className="font-display text-xl font-bold mb-2">{position.title}</h3>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-2">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" /> {position.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" /> {position.type}
                          </span>
                        </div>
                        <p className="text-muted-foreground">{position.description}</p>
                      </div>
                      <Button className="bg-gold hover:bg-gold-dark text-accent-foreground whitespace-nowrap">
                        Apply Now
                      </Button>
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

export default Careers;
