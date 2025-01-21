import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Download, ArrowLeft, Monitor, Smartphone, Tablet, CheckCircle } from 'lucide-react';

const templates = {
  "modern-saas-landing": {
    id: "modern-saas-landing",
    name: "Modern SaaS Landing",
    category: "Landing Page",
    description: "Clean and modern SaaS landing page template with conversion-optimized sections.",
    longDescription: "A premium landing page template designed specifically for SaaS companies. Features a modern design with carefully crafted sections to maximize conversions. Perfect for showcasing your software product and driving user signups.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200",
    screenshots: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800",
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800"
    ],
    features: [
      "Responsive design for all devices",
      "Optimized for conversions",
      "Modern and clean UI",
      "Easy customization",
      "SEO optimized",
      "Fast loading speed",
      "Well-documented code",
      "Regular updates"
    ],
    popular: true,
    new: false,
    fileSize: "2.4 MB",
    lastUpdate: "2024-03-15",
    browsers: ["Chrome", "Firefox", "Safari", "Edge"],
    technologies: ["React", "Next.js", "Tailwind CSS", "TypeScript"]
  },
  "ecommerce-pro": {
    id: "ecommerce-pro",
    name: "E-commerce Pro",
    category: "E-commerce",
    description: "Feature-rich e-commerce template with product galleries and checkout flow.",
    longDescription: "A comprehensive e-commerce template with everything you need to start selling online. Includes product galleries, shopping cart, and a streamlined checkout process.",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200",
    screenshots: [
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800"
    ],
    features: [
      "Product catalog",
      "Shopping cart",
      "Secure checkout",
      "Inventory management",
      "Order tracking",
      "Customer accounts",
      "Mobile-optimized",
      "Analytics integration"
    ],
    popular: true,
    new: true,
    fileSize: "3.2 MB",
    lastUpdate: "2024-03-20",
    browsers: ["Chrome", "Firefox", "Safari", "Edge"],
    technologies: ["React", "Next.js", "Tailwind CSS", "TypeScript"]
  }
};

export default function TemplateDetailsPage({ params }: { params: { id: string } }) {
  const template = templates[params.id as keyof typeof templates];

  if (!template) {
    return (
      <div className="min-h-screen bg-[#1C1C1C] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Template not found</h1>
          <Button variant="outline">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Templates
          </Button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#1C1C1C] pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation */}
        <Button
          variant="outline"
          className="mb-8"
          onClick={() => window.history.back()}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Templates
        </Button>

        {/* Template Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="outline">{template.category}</Badge>
              {template.popular && <Badge className="bg-[#4b50e3]">Popular</Badge>}
              {template.new && <Badge variant="secondary">New</Badge>}
            </div>
            <h1 className="text-4xl font-bold mb-4">{template.name}</h1>
            <p className="text-[#A3A3A3] text-lg mb-6">{template.longDescription}</p>
            <Button className="bg-[#4b50e3] hover:bg-[#4b50e3]/90">
              <Download className="w-4 h-4 mr-2" />
              Download Template
            </Button>
          </div>
          <Card className="bg-[#2E2E2E] border-none p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-4 border-b border-[#1C1C1C]">
                <span className="text-[#A3A3A3]">File size</span>
                <span>{template.fileSize}</span>
              </div>
              <div className="flex items-center justify-between pb-4 border-b border-[#1C1C1C]">
                <span className="text-[#A3A3A3]">Last update</span>
                <span>{template.lastUpdate}</span>
              </div>
              <div className="pb-4 border-b border-[#1C1C1C]">
                <span className="text-[#A3A3A3] block mb-2">Responsive Design</span>
                <div className="flex gap-4">
                  <div className="flex items-center gap-1">
                    <Monitor className="w-4 h-4" />
                    <span>Desktop</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Tablet className="w-4 h-4" />
                    <span>Tablet</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Smartphone className="w-4 h-4" />
                    <span>Mobile</span>
                  </div>
                </div>
              </div>
              <div>
                <span className="text-[#A3A3A3] block mb-2">Technologies</span>
                <div className="flex flex-wrap gap-2">
                  {template.technologies.map((tech) => (
                    <Badge key={tech} variant="outline">{tech}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Screenshots */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Template Preview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {template.screenshots.map((screenshot, index) => (
              <div key={index} className="aspect-video bg-[#2E2E2E] rounded-lg overflow-hidden">
                <img
                  src={screenshot}
                  alt={`${template.name} screenshot ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {template.features.map((feature, index) => (
              <div key={index} className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-[#4b50e3] mt-0.5" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}