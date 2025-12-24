export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  hoverImage?: string;
  category: string;
  isNew?: boolean;
  isBestSeller?: boolean;
  sizes: string[];
  colors: string[];
  description: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Elegant Two Piece Set',
    price: 8500,
    originalPrice: 12000,
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=800&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&h=800&fit=crop',
    category: 'Two Piece',
    isNew: true,
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'Navy', 'Burgundy', 'Forest Green'],
    description: 'A sophisticated two-piece set perfect for professional and formal occasions. Crafted from premium fabric with impeccable tailoring.'
  },
  {
    id: '2',
    name: 'Floral Evening Dress',
    price: 12500,
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=800&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=600&h=800&fit=crop',
    category: 'Dresses',
    isBestSeller: true,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Coral', 'Lavender', 'Peach', 'Pink'],
    description: 'An enchanting floral evening dress that captures elegance. Perfect for special occasions and memorable nights.'
  },
  {
    id: '3',
    name: 'Casual Matching Set',
    price: 6500,
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=800&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&h=800&fit=crop',
    category: 'Sets',
    isNew: true,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['White', 'Beige', 'Light Blue', 'Pink'],
    description: 'A comfortable yet stylish matching set for everyday wear. Soft, breathable fabric that moves with you.'
  },
  {
    id: '4',
    name: 'Silk Maxi Dress',
    price: 15000,
    image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&h=800&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=600&h=800&fit=crop',
    category: 'Dresses',
    isBestSeller: true,
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Cream', 'Black', 'Burgundy'],
    description: 'Luxurious silk maxi dress with flowing silhouette. A timeless piece that exudes sophistication.'
  },
  {
    id: '5',
    name: 'Power Suit Set',
    price: 18500,
    originalPrice: 24000,
    image: 'https://images.unsplash.com/photo-1551803091-e20673f15770?w=600&h=800&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=600&h=800&fit=crop',
    category: 'Two Piece',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'Navy', 'Grey', 'Camel'],
    description: 'Command attention with this impeccably tailored power suit set. Perfect for the modern professional.'
  },
  {
    id: '6',
    name: 'Bohemian Maxi Dress',
    price: 9800,
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&h=800&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=600&h=800&fit=crop',
    category: 'Dresses',
    isNew: true,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Olive', 'Terracotta', 'Navy', 'Cream'],
    description: 'Free-spirited bohemian maxi dress with flowing fabric and beautiful details.'
  },
  {
    id: '7',
    name: 'Lounge Coord Set',
    price: 5500,
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&h=800&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=600&h=800&fit=crop',
    category: 'Sets',
    isBestSeller: true,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Grey', 'Beige', 'Black', 'Pink'],
    description: 'Ultra-comfortable lounge coord set for relaxed days. Soft fabric that feels like a dream.'
  },
  {
    id: '8',
    name: 'Cocktail Party Dress',
    price: 11000,
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=800&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?w=600&h=800&fit=crop',
    category: 'Dresses',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Red', 'Black', 'Gold', 'Navy'],
    description: 'Stunning cocktail party dress designed to make you the center of attention.'
  },
];

export const heroSlides = [
  {
    id: 1,
    title: 'New Season Collection',
    subtitle: 'Discover the art of refined elegance',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1920&h=1080&fit=crop',
    cta: 'Shop Now',
    link: '/shop'
  },
  {
    id: 2,
    title: 'Elegant Dresses',
    subtitle: 'Timeless pieces for every occasion',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=1920&h=1080&fit=crop',
    cta: 'Explore Dresses',
    link: '/dresses'
  },
  {
    id: 3,
    title: 'Exclusive Offers',
    subtitle: 'Up to 40% off selected items',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&h=1080&fit=crop',
    cta: 'View Offers',
    link: '/sale'
  }
];
