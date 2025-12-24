import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Ruler } from 'lucide-react';

const sizeChart = [
  { size: 'XS', bust: '78-82', waist: '60-64', hips: '86-90' },
  { size: 'S', bust: '82-86', waist: '64-68', hips: '90-94' },
  { size: 'M', bust: '86-90', waist: '68-72', hips: '94-98' },
  { size: 'L', bust: '90-94', waist: '72-76', hips: '98-102' },
  { size: 'XL', bust: '94-98', waist: '76-80', hips: '102-106' },
  { size: 'XXL', bust: '98-102', waist: '80-84', hips: '106-110' },
];

const SizingGuide = () => {
  return (
    <>
      <Helmet>
        <title>Sizing Guide | BY M.ILI</title>
        <meta name="description" content="Find your perfect fit with our comprehensive sizing guide. Measurements in centimeters for all BY M.ILI clothing." />
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
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Sizing Guide</h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Find your perfect fit with our comprehensive size chart.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              {/* How to Measure */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-card p-8 rounded-lg mb-12"
              >
                <h2 className="font-display text-2xl font-bold mb-6 flex items-center gap-3">
                  <Ruler className="w-6 h-6 text-gold" />
                  How to Measure
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2">Bust</h3>
                    <p className="text-muted-foreground text-sm">
                      Measure around the fullest part of your bust, keeping the tape horizontal.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Waist</h3>
                    <p className="text-muted-foreground text-sm">
                      Measure around your natural waistline, the narrowest part of your torso.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Hips</h3>
                    <p className="text-muted-foreground text-sm">
                      Measure around the fullest part of your hips and buttocks.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Size Chart */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h2 className="font-display text-2xl font-bold mb-6">Size Chart (cm)</h2>
                <div className="bg-card rounded-lg overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-secondary">
                      <tr>
                        <th className="px-6 py-4 text-left font-semibold">Size</th>
                        <th className="px-6 py-4 text-left font-semibold">Bust</th>
                        <th className="px-6 py-4 text-left font-semibold">Waist</th>
                        <th className="px-6 py-4 text-left font-semibold">Hips</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sizeChart.map((row, index) => (
                        <tr key={row.size} className={index % 2 === 0 ? '' : 'bg-secondary/50'}>
                          <td className="px-6 py-4 font-medium">{row.size}</td>
                          <td className="px-6 py-4 text-muted-foreground">{row.bust}</td>
                          <td className="px-6 py-4 text-muted-foreground">{row.waist}</td>
                          <td className="px-6 py-4 text-muted-foreground">{row.hips}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  * If you're between sizes, we recommend sizing up for a more comfortable fit.
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

export default SizingGuide;
