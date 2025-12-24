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
    name: 'Classic Tailored Blazer',
    price: 299,
    originalPrice: 399,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=800&fit=crop',
    category: 'Formal Wear',
    isNew: true,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Navy', 'Charcoal'],
    description: 'Impeccably tailored blazer crafted from premium wool blend fabric.'
  },
  {
    id: '2',
    name: 'Signature Slim Fit Suit',
    price: 599,
    image: 'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=600&h=800&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=600&h=800&fit=crop',
    category: 'Custom Suits',
    isBestSeller: true,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'Navy', 'Grey'],
    description: 'Our signature slim fit suit, designed for the modern gentleman.'
  },
  {
    id: '3',
    name: 'Premium Cotton Shirt',
    price: 129,
    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&h=800&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&h=800&fit=crop',
    category: 'Casual Collection',
    isNew: true,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['White', 'Light Blue', 'Pink'],
    description: 'Luxuriously soft Egyptian cotton shirt with mother-of-pearl buttons.'
  },
  {
    id: '4',
    name: 'Italian Leather Belt',
    price: 89,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=800&fit=crop',
    category: 'Best Sellers',
    isBestSeller: true,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Brown', 'Black'],
    description: 'Hand-crafted Italian leather belt with polished brass buckle.'
  },
  {
    id: '5',
    name: 'Cashmere Overcoat',
    price: 799,
    originalPrice: 999,
    image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=600&h=800&fit=crop',
    category: 'Formal Wear',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Camel', 'Black', 'Grey'],
    description: 'Sumptuous cashmere overcoat for exceptional warmth and style.'
  },
  {
    id: '6',
    name: 'Tailored Trousers',
    price: 179,
    image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&h=800&fit=crop',
    category: 'Formal Wear',
    isNew: true,
    sizes: ['28', '30', '32', '34', '36'],
    colors: ['Black', 'Navy', 'Grey'],
    description: 'Precision-cut trousers with a contemporary straight leg.'
  },
  {
    id: '7',
    name: 'Merino Wool Sweater',
    price: 159,
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&h=800&fit=crop',
    category: 'Casual Collection',
    isBestSeller: true,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Navy', 'Burgundy', 'Forest Green'],
    description: 'Ultra-fine merino wool sweater, lightweight yet warm.'
  },
  {
    id: '8',
    name: 'Silk Pocket Square',
    price: 49,
    image: 'https://images.unsplash.com/photo-1598522325074-042db73aa4e6?w=600&h=800&fit=crop',
    category: 'Best Sellers',
    sizes: ['One Size'],
    colors: ['Multi'],
    description: 'Hand-rolled silk pocket square with signature print.'
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
    title: 'Custom Tailoring',
    subtitle: 'Bespoke suits crafted to perfection',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1920&h=1080&fit=crop',
    cta: 'Book Appointment',
    link: '/custom-suits'
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
