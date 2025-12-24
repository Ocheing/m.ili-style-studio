import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Music2, Mail, MapPin, Phone } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const footerLinks = {
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Press & Media', href: '/press' },
      { name: 'Contact Us', href: '/contact' },
    ],
    customerService: [
      { name: 'Help Center', href: '/help' },
      { name: 'Sizing Guide', href: '/sizing' },
      { name: 'Shipping Info', href: '/shipping' },
      { name: 'Returns & Exchange', href: '/returns' },
      { name: 'Care Instructions', href: '/care' },
      { name: 'Track Your Order', href: '/track' },
    ],
    shop: [
      { name: 'New Arrivals', href: '/new-arrivals' },
      { name: 'Best Sellers', href: '/best-sellers' },
      { name: 'Custom Suits', href: '/custom-suits' },
      { name: 'Formal Wear', href: '/formal-wear' },
      { name: 'Casual Collection', href: '/casual' },
    ],
  };

  return (
    <footer className="bg-secondary/50 border-t border-border">
      {/* Newsletter Section */}
      <div className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="font-display text-2xl md:text-3xl mb-2">Join the M.ILI Family</h3>
          <p className="text-primary-foreground/70 mb-6 max-w-md mx-auto">
            Subscribe for exclusive offers, early access to new collections, and style inspiration.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
            />
            <Button variant="secondary" className="bg-gold text-accent-foreground hover:bg-gold-dark whitespace-nowrap">
              Subscribe
            </Button>
          </form>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <h2 className="font-display text-2xl font-bold">
                BY M.<span className="text-gold">ILI</span>
              </h2>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Crafting timeless elegance since 2024. Experience the art of refined fashion with our curated collections.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4 text-gold" />
                <span>123 Fashion Avenue, New York, NY 10001</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-4 h-4 text-gold" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-4 h-4 text-gold" />
                <span>hello@bymili.com</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-secondary hover:bg-gold hover:text-accent-foreground rounded-full transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-secondary hover:bg-gold hover:text-accent-foreground rounded-full transition-all duration-300"
              >
                <Music2 className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map(link => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-gold transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-3">
              {footerLinks.customerService.map(link => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-gold transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Shop</h4>
            <ul className="space-y-3">
              {footerLinks.shop.map(link => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-gold transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2024 BY M.ILI. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-gold transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-gold transition-colors">
              Terms of Service
            </Link>
            <Link to="/cookies" className="hover:text-gold transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
