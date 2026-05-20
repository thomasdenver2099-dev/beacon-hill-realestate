'use client';

import { useState } from 'react';
import { Search, MapPin, DollarSign, Bed, Bath } from 'lucide-react';

interface SearchBarProps {
  onSearch: (query: string) => void;
  onFilter: (filters: any) => void;
}

const SearchBar = ({ onSearch, onFilter }: SearchBarProps) => {
  const [location, setLocation] = useState('');
  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(1000000);
  const [bedrooms, setBedrooms] = useState(0);
  const [bathrooms, setBathrooms] = useState(0);

  const handleSearch = () => {
    onFilter({
      location,
      priceMin,
      priceMax,
      bedrooms,
      bathrooms,
    });
  };

  return (
    <section className="bg-white py-12 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2">
            <MapPin className="w-5 h-5 text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full outline-none"
            />
          </div>

          <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2">
            <DollarSign className="w-5 h-5 text-gray-400 mr-2" />
            <input
              type="number"
              placeholder="Min Price"
              value={priceMin}
              onChange={(e) => setPriceMin(Number(e.target.value))}
              className="w-full outline-none"
            />
          </div>

          <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2">
            <DollarSign className="w-5 h-5 text-gray-400 mr-2" />
            <input
              type="number"
              placeholder="Max Price"
              value={priceMax}
              onChange={(e) => setPriceMax(Number(e.target.value))}
              className="w-full outline-none"
            />
          </div>

          <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2">
            <Bed className="w-5 h-5 text-gray-400 mr-2" />
            <select
              value={bedrooms}
              onChange={(e) => setBedrooms(Number(e.target.value))}
              className="w-full outline-none"
            >
              <option value={0}>Any Beds</option>
              <option value={1}>1+ Beds</option>
              <option value={2}>2+ Beds</option>
              <option value={3}>3+ Beds</option>
              <option value={4}>4+ Beds</option>
            </select>
          </div>

          <button
            onClick={handleSearch}
            className="bg-beacon-blue text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition"
          >
            <Search className="w-5 h-5" />
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default SearchBar;
