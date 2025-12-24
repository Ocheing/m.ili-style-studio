import React, { createContext, useContext, useState } from 'react';

export type Currency = 'KSH' | 'USD' | 'EUR' | 'GBP' | 'NGN' | 'ZAR' | 'TZS' | 'UGX' | 'RWF' | 'AED' | 'CNY' | 'JPY' | 'INR' | 'AUD' | 'CAD' | 'CHF' | 'BRL' | 'MXN';
export type Language = 'EN' | 'SW' | 'FR' | 'ES' | 'DE' | 'IT' | 'PT' | 'AR' | 'ZH' | 'JA' | 'HI' | 'RU' | 'KO' | 'NL' | 'PL' | 'TR';

export const languageNames: Record<Language, string> = {
  EN: 'English',
  SW: 'Swahili',
  FR: 'Français',
  ES: 'Español',
  DE: 'Deutsch',
  IT: 'Italiano',
  PT: 'Português',
  AR: 'العربية',
  ZH: '中文',
  JA: '日本語',
  HI: 'हिन्दी',
  RU: 'Русский',
  KO: '한국어',
  NL: 'Nederlands',
  PL: 'Polski',
  TR: 'Türkçe',
};

export const currencyNames: Record<Currency, string> = {
  KSH: 'Kenyan Shilling',
  USD: 'US Dollar',
  EUR: 'Euro',
  GBP: 'British Pound',
  NGN: 'Nigerian Naira',
  ZAR: 'South African Rand',
  TZS: 'Tanzanian Shilling',
  UGX: 'Ugandan Shilling',
  RWF: 'Rwandan Franc',
  AED: 'UAE Dirham',
  CNY: 'Chinese Yuan',
  JPY: 'Japanese Yen',
  INR: 'Indian Rupee',
  AUD: 'Australian Dollar',
  CAD: 'Canadian Dollar',
  CHF: 'Swiss Franc',
  BRL: 'Brazilian Real',
  MXN: 'Mexican Peso',
};

const currencySymbols: Record<Currency, string> = {
  KSH: 'KSh',
  USD: '$',
  EUR: '€',
  GBP: '£',
  NGN: '₦',
  ZAR: 'R',
  TZS: 'TSh',
  UGX: 'USh',
  RWF: 'FRw',
  AED: 'د.إ',
  CNY: '¥',
  JPY: '¥',
  INR: '₹',
  AUD: 'A$',
  CAD: 'C$',
  CHF: 'CHF',
  BRL: 'R$',
  MXN: 'MX$',
};

// Exchange rates relative to KSH (base currency)
const exchangeRates: Record<Currency, number> = {
  KSH: 1,
  USD: 0.0077, // 1 KSH = 0.0077 USD (1 USD = ~130 KSH)
  EUR: 0.0071,
  GBP: 0.0061,
  NGN: 11.92,
  ZAR: 0.14,
  TZS: 19.23,
  UGX: 28.46,
  RWF: 9.23,
  AED: 0.028,
  CNY: 0.055,
  JPY: 1.15,
  INR: 0.64,
  AUD: 0.012,
  CAD: 0.010,
  CHF: 0.0068,
  BRL: 0.037,
  MXN: 0.13,
};

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  language: Language;
  setLanguage: (language: Language) => void;
  formatPrice: (priceInKSH: number) => string;
  currencySymbol: string;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export const CurrencyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currency, setCurrency] = useState<Currency>('KSH');
  const [language, setLanguage] = useState<Language>('EN');

  const formatPrice = (priceInKSH: number) => {
    const converted = priceInKSH * exchangeRates[currency];
    const decimals = ['KSH', 'JPY', 'NGN', 'TZS', 'UGX', 'RWF'].includes(currency) ? 0 : 2;
    return `${currencySymbols[currency]}${converted.toLocaleString(undefined, { 
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals 
    })}`;
  };

  return (
    <CurrencyContext.Provider value={{ 
      currency, 
      setCurrency, 
      language, 
      setLanguage, 
      formatPrice,
      currencySymbol: currencySymbols[currency]
    }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (context === undefined) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
};
