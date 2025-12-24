import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroCarousel from '@/components/HeroCarousel';
import FeaturedProducts from '@/components/FeaturedProducts';
import CategoryShowcase from '@/components/CategoryShowcase';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>BY M.ILI | Premium Women's Fashion & Clothing</title>
        <meta name="description" content="Discover timeless elegance with BY M.ILI. Shop premium two-piece sets, dresses, and curated collections. Experience the art of refined fashion from Kenya to the world." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1">
          {/* Hero Carousel */}
          <HeroCarousel />
          
          {/* New Arrivals */}
          <FeaturedProducts
            title="New Arrivals"
            subtitle="Discover our latest additions to the collection"
            filter="new"
            limit={4}
            viewAllLink="/new-arrivals"
          />
          
          {/* Category Showcase */}
          <CategoryShowcase />
          
          {/* Best Sellers */}
          <FeaturedProducts
            title="Best Sellers"
            subtitle="Our most loved pieces by our customers"
            filter="bestseller"
            limit={4}
            viewAllLink="/best-sellers"
          />
          
          {/* All Products */}
          <FeaturedProducts
            title="Complete Collection"
            subtitle="Explore our full range of premium fashion"
            filter="all"
            limit={8}
            viewAllLink="/shop"
          />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Index;
