import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { HelpCircle, MessageCircle, Mail, Phone } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';

const faqs = [
  {
    question: 'How long does shipping take?',
    answer: 'Shipping times vary by location. Within Kenya, orders typically arrive within 2-5 business days. International orders can take 7-21 business days depending on the destination.',
  },
  {
    question: 'What is your return policy?',
    answer: 'We accept returns within 30 days of delivery for unworn items with original tags attached. Please visit our Returns & Exchange page for more details.',
  },
  {
    question: 'How do I track my order?',
    answer: 'Once your order ships, you will receive a tracking number via email. You can use this to track your order on our Track Your Order page.',
  },
  {
    question: 'Do you offer international shipping?',
    answer: 'Yes! We ship worldwide. Shipping costs and delivery times vary by country.',
  },
  {
    question: 'How can I find my size?',
    answer: 'Please refer to our Sizing Guide for detailed measurements. If you need further assistance, contact our customer service team.',
  },
];

const HelpCenter = () => {
  return (
    <>
      <Helmet>
        <title>Help Center | BY M.ILI</title>
        <meta name="description" content="Find answers to frequently asked questions and get support from BY M.ILI customer service." />
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
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Help Center</h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Find answers to your questions or get in touch with our support team.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              {/* Quick Contact */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="grid md:grid-cols-3 gap-4 mb-12"
              >
                <div className="bg-card p-6 rounded-lg text-center">
                  <MessageCircle className="w-8 h-8 text-gold mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Live Chat</h3>
                  <p className="text-sm text-muted-foreground mb-4">Chat with our team</p>
                  <Button variant="outline" className="w-full">Start Chat</Button>
                </div>
                <div className="bg-card p-6 rounded-lg text-center">
                  <Mail className="w-8 h-8 text-gold mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Email Us</h3>
                  <p className="text-sm text-muted-foreground mb-4">support@bymili.com</p>
                  <Button variant="outline" className="w-full">Send Email</Button>
                </div>
                <div className="bg-card p-6 rounded-lg text-center">
                  <Phone className="w-8 h-8 text-gold mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Call Us</h3>
                  <p className="text-sm text-muted-foreground mb-4">+254 700 123 456</p>
                  <Button variant="outline" className="w-full">Call Now</Button>
                </div>
              </motion.div>

              {/* FAQs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h2 className="font-display text-2xl font-bold mb-6">Frequently Asked Questions</h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="bg-card rounded-lg px-6">
                      <AccordionTrigger className="text-left font-medium">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default HelpCenter;
