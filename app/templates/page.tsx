"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Search, Filter } from 'lucide-react';

// Template categories and data
const categories = [
  "All",
  "Landing Page",
  "E-commerce",
  "Portfolio",
  "Blog",
  "SaaS",
  "Agency",
];

const templates = [
  {
    id: "modern-saas-landing",
    name: "Modern SaaS Landing",
    category: "Landing Page",
    description: "Clean and modern SaaS landing page template with conversion-optimized sections.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500",
    popular: true,
    new: false,
  },
  {
    id: "ecommerce-pro",
    name: "E-commerce Pro",
    category: "E-commerce",
    description: "Feature-rich e-commerce template with product galleries and checkout flow.",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=500",
    popular: true,
    new: true,
  },
  {
    id: "creative-portfolio",
    name: "Creative Portfolio",
    category: "Portfolio",
    description: "Showcase your work with this minimalist portfolio template.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=500",
    popular: false,
    new: true,
  },
  {
    id: "blog-magazine",
    name: "Blog Magazine",
    category: "Blog",
    description: "Modern blog template with rich article layouts and category pages.",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=500",
    popular: false,
    new: false,
  },
  {
    id: "saas-dashboard",
    name: "SaaS Dashboard",
    category: "SaaS",
    description: "Complete SaaS application template with dashboard and analytics.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500",
    popular: true,
    new: false,
  },
  {
    id: "agency-website",
    name: "Agency Website",
    category: "Agency",
    description: "Professional agency website template with case studies and team sections.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=500",
    popular: false,
    new: true,
  },
  {
    id: "startup-landing",
    name: "Startup Landing",
    category: "Landing Page",
    description: "High-converting landing page template for startups and products.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500",
    popular: true,
    new: false,
  },
  {
    id: "digital-store",
    name: "Digital Store",
    category: "E-commerce",
    description: "Digital products marketplace template with secure checkout.",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=500",
    popular: true,
    new: true,
  },
];

export default function TemplatesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('newest');

  // Filter and sort templates
  const filteredTemplates = templates
    .filter(template => {
      const matchesSearch = template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          template.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || template.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sortBy === 'newest') {
        return a.new ? -1 : 1;
      } else if (sortBy === 'popular') {
        return a.popular ? -1 : 1;
      }
      return 0;
    });

  return (
    <main className="min-h-screen bg-[#1C1C1C] pt-24">
      {/* Header */}
      <div className="bg-[#2E2E2E] py-8 mb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-4">Template Library</h1>
          <p className="text-[#A3A3A3] text-lg">
            Browse our collection of professional, conversion-optimized templates
          </p>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#A3A3A3]" />
            <Input
              placeholder="Search templates..."
              className="pl-10 bg-[#2E2E2E] border-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex gap-4 w-full md:w-auto">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-[180px] bg-[#2E2E2E] border-none">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px] bg-[#2E2E2E] border-none">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="popular">Most Popular</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Templates Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTemplates.map((template) => (
            <Card 
              key={template.id} 
              className="card-hover bg-[#2E2E2E] border-none overflow-hidden cursor-pointer"
              onClick={() => window.location.href = `/templates/${template.id}`}
            >
              <div className="aspect-video relative">
                <img
                  src={template.image}
                  alt={template.name}
                  className="object-cover w-full h-full"
                />
                <div className="absolute top-4 right-4 flex gap-2">
                  {template.popular && (
                    <Badge className="bg-[#4b50e3]">Popular</Badge>
                  )}
                  {template.new && (
                    <Badge variant="secondary">New</Badge>
                  )}
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">{template.name}</h3>
                  <Badge variant="outline">{template.category}</Badge>
                </div>
                <p className="text-[#A3A3A3] mb-4">
                  {template.description}
                </p>
                <Button className="w-full bg-[#4b50e3] hover:bg-[#4b50e3]/90">
                  View Template
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}