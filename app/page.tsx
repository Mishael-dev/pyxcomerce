"use client";

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Layout,
  Laptop,
  Smartphone,
  Tablet,
  Star,
  CheckCircle,
  ArrowRight,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Menu,
  X
} from 'lucide-react';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    { icon: <Layout className="w-6 h-6" />, title: "High-quality templates", description: "Premium designs for every niche" },
    { icon: <CheckCircle className="w-6 h-6" />, title: "Easy customization", description: "No coding skills required" },
    { icon: <Smartphone className="w-6 h-6" />, title: "Mobile-responsive", description: "Perfect on all devices" },
    { icon: <Star className="w-6 h-6" />, title: "Regular updates", description: "Fresh designs monthly" },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
      quote: "PyxCommerce templates helped us boost conversions by 40%!"
    },
    {
      name: "Michael Chen",
      role: "Startup Founder",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
      quote: "The best investment for our landing pages. Highly recommended!"
    },
    {
      name: "Emma Williams",
      role: "E-commerce Owner",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
      quote: "Professional templates that actually convert. Amazing support team!"
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#2E2E2E]' : 'nav-blur'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold">PyxCommerce</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-[#E5E5E5] hover:text-[#4b50e3]">Home</a>
              <a href="#pricing" className="text-[#E5E5E5] hover:text-[#4b50e3]">Membership Plans</a>
              <a href="#templates" className="text-[#E5E5E5] hover:text-[#4b50e3]">Template Library</a>
              <a href="#" className="text-[#E5E5E5] hover:text-[#4b50e3]">Blog</a>
              <Button className="bg-[#4b50e3] hover:bg-[#4b50e3]/90">Sign Up</Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a href="#" className="block px-3 py-2 text-[#E5E5E5] hover:text-[#4b50e3]">Home</a>
                <a href="#pricing" className="block px-3 py-2 text-[#E5E5E5] hover:text-[#4b50e3]">Membership Plans</a>
                <a href="#templates" className="block px-3 py-2 text-[#E5E5E5] hover:text-[#4b50e3]">Template Library</a>
                <a href="#" className="block px-3 py-2 text-[#E5E5E5] hover:text-[#4b50e3]">Blog</a>
                <Button className="w-full bg-[#4b50e3] hover:bg-[#4b50e3]/90 mt-4">Sign Up</Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="gradient-bg pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Conversions Made Effortlessly with PyxCommerce
            </h1>
            <p className="text-xl md:text-2xl text-[#A3A3A3] mb-8">
              Access premium website templates and landing pages designed for maximum conversions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-[#4b50e3] hover:bg-[#4b50e3]/90">
                Get Started Today
              </Button>
              <Button size="lg" variant="outline" className="border-[#A3A3A3] text-[#E5E5E5]">
                Explore Our Templates
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Templates */}
      <section id="templates" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Explore Templates Loved by Businesses Worldwide
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Card key={item} className="card-hover bg-[#2E2E2E] border-none">
                <div className="aspect-video bg-[#1C1C1C] rounded-t-lg"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Template {item}</h3>
                  <p className="text-[#A3A3A3] mb-4">
                    Professional design optimized for conversions
                  </p>
                  <Badge className="bg-[#4b50e3]">Popular</Badge>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-[#2E2E2E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">
            Affordable Membership Plans
          </h2>
          <p className="text-center text-[#A3A3A3] mb-12">
            Flexible pricing tailored to your goals
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Basic",
                price: "19",
                features: ["20 templates", "Email support", "Monthly updates"]
              },
              {
                name: "Pro",
                price: "49",
                features: ["100+ templates", "Priority support", "Webinars", "Custom CSS"]
              },
              {
                name: "Elite",
                price: "99",
                features: ["Unlimited templates", "24/7 support", "Custom development", "Private forum"]
              }
            ].map((plan, index) => (
              <Card key={index} className={`p-8 ${index === 1 ? 'border-[#4b50e3] border-2' : 'border-none'} bg-[#1C1C1C]`}>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold mb-6">
                  ${plan.price}
                  <span className="text-lg font-normal text-[#A3A3A3]">/month</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-[#4b50e3] mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full ${index === 1 ? 'bg-[#4b50e3]' : 'bg-[#2E2E2E]'}`}
                  onClick={() => window.location.href = `/payment/${plan.name.toLowerCase()}`}
                >
                  Choose Plan
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our Members Are Saying
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 bg-[#2E2E2E] border-none">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-[#A3A3A3]">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-[#E5E5E5]">{testimonial.quote}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-[#2E2E2E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose PyxCommerce?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-block p-3 bg-[#4b50e3]/10 rounded-lg mb-4">
                  <div className="text-[#4b50e3]">{feature.icon}</div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-[#A3A3A3]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Join Thousands of Satisfied Members
          </h2>
          <p className="text-[#A3A3A3] mb-8">
            Start creating high-converting landing pages today!
          </p>
          <Button size="lg" className="bg-[#4b50e3] hover:bg-[#4b50e3]/90">
            Sign Up Now <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2E2E2E] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">PyxCommerce</h3>
              <p className="text-[#A3A3A3]">
                Premium landing page templates for maximum conversions.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-[#A3A3A3]">
                <li><a href="#" className="hover:text-[#4b50e3]">Home</a></li>
                <li><a href="#pricing" className="hover:text-[#4b50e3]">Membership Plans</a></li>
                <li><a href="#templates" className="hover:text-[#4b50e3]">Template Library</a></li>
                <li><a href="#" className="hover:text-[#4b50e3]">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-[#A3A3A3]">
                <li><a href="#" className="hover:text-[#4b50e3]">FAQs</a></li>
                <li><a href="#" className="hover:text-[#4b50e3]">Documentation</a></li>
                <li><a href="#" className="hover:text-[#4b50e3]">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-[#A3A3A3] hover:text-[#4b50e3]">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-[#A3A3A3] hover:text-[#4b50e3]">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="text-[#A3A3A3] hover:text-[#4b50e3]">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-[#A3A3A3] hover:text-[#4b50e3]">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-[#A3A3A3]/20 pt-8 text-center text-[#A3A3A3]">
            <p>© 2025 PyxCommerce. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}