'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import PropertyGrid from '@/components/PropertyGrid';
import SearchBar from '@/components/SearchBar';
import Footer from '@/components/Footer';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    location: '',
    priceMin: 0,
    priceMax: 1000000,
    bedrooms: 0,
    bathrooms: 0,
  });

  return (
    <main className="min-h-screen bg-beacon-light">
      <Header />
      <Hero />
      <SearchBar onSearch={setSearchQuery} onFilter={setFilters} />
      <PropertyGrid searchQuery={searchQuery} filters={filters} />
      <Footer />
    </main>
  );
}
