import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Heart, ShoppingBag, User, Menu, X, Sun, Moon, Globe, ChevronDown } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { useCart } from '@/contexts/CartContext';
import { useWishlist } from '@/contexts/WishlistContext';
import { useCurrency, Currency, Language } from '@/contexts/CurrencyContext';
import { motion, AnimatePresence } from 'framer-motion';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const { totalItems: cartItems } = useCart();
  const { totalItems: wishlistItems } = useWishlist();
  const { currency, setCurrency, language, setLanguage } = useCurrency();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navLinks = [
    { name: 'New Arrivals', href: '/new-arrivals' },
    { name: 'Best Sellers', href: '/best-sellers' },
    { name: 'Custom Suits', href: '/custom-suits' },
    { name: 'Formal Wear', href: '/formal-wear' },
    { name: 'Casual', href: '/casual' },
  ];

  const currencies: Currency[] = ['USD', 'EUR', 'GBP', 'NGN'];
  const languages: Language[] = ['EN', 'FR', 'ES'];

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      {/* Top Bar */}
      <div className="hidden lg:block bg-secondary/50">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center text-xs">
          <p className="text-muted-foreground">Free shipping on orders over $200</p>
          <div className="flex items-center gap-4">
            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors">
                <Globe className="w-3 h-3" />
                {language}
                <ChevronDown className="w-3 h-3" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {languages.map(lang => (
                  <DropdownMenuItem key={lang} onClick={() => setLanguage(lang)}>
                    {lang}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Currency Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors">
                {currency}
                <ChevronDown className="w-3 h-3" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {currencies.map(curr => (
                  <DropdownMenuItem key={curr} onClick={() => setCurrency(curr)}>
                    {curr}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="font-display text-2xl md:text-3xl font-bold tracking-tight">
              BY M.<span className="text-gold">ILI</span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map(link => (
              <Link
                key={link.name}
                to={link.href}
                className="nav-link"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Search */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 hover:bg-secondary rounded-full transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* User */}
            <Link
              to="/auth"
              className="p-2 hover:bg-secondary rounded-full transition-colors"
            >
              <User className="w-5 h-5" />
            </Link>

            {/* Wishlist */}
            <Link
              to="/wishlist"
              className="p-2 hover:bg-secondary rounded-full transition-colors relative"
            >
              <Heart className="w-5 h-5" />
              {wishlistItems > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-gold text-accent-foreground text-xs rounded-full flex items-center justify-center font-medium">
                  {wishlistItems}
                </span>
              )}
            </Link>

            {/* Cart */}
            <Link
              to="/cart"
              className="p-2 hover:bg-secondary rounded-full transition-colors relative"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartItems > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-gold text-accent-foreground text-xs rounded-full flex items-center justify-center font-medium">
                  {cartItems}
                </span>
              )}
            </Link>

            {/* Mobile Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="lg:hidden p-2 hover:bg-secondary rounded-full transition-colors"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="pt-4">
                <div className="relative">
                  <Input
                    type="text"
                    placeholder="Search for products..."
                    className="w-full pl-10 pr-4 py-3 bg-secondary border-none"
                  />
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden border-t border-border overflow-hidden"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map(link => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="py-2 text-lg font-medium hover:text-gold transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              
              {/* Mobile Currency/Language */}
              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm">
                      <Globe className="w-4 h-4 mr-2" />
                      {language}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {languages.map(lang => (
                      <DropdownMenuItem key={lang} onClick={() => setLanguage(lang)}>
                        {lang}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm">
                      {currency}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {currencies.map(curr => (
                      <DropdownMenuItem key={curr} onClick={() => setCurrency(curr)}>
                        {curr}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
