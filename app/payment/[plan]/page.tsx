import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { CreditCard, Lock } from 'lucide-react';

const plans = {
  basic: {
    name: "Basic",
    price: "19",
    features: ["20 templates", "Email support", "Monthly updates"]
  },
  pro: {
    name: "Pro",
    price: "49",
    features: ["100+ templates", "Priority support", "Webinars", "Custom CSS"]
  },
  elite: {
    name: "Elite",
    price: "99",
    features: ["Unlimited templates", "24/7 support", "Custom development", "Private forum"]
  }
};


export default function PaymentPage({ params }: { params: { plan: string } }) {
  const plan = plans[params.plan as keyof typeof plans];

  if (!plan) {
    return (
      <div className="min-h-screen bg-[#1C1C1C] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Plan not found</h1>
          <Button onClick={() => window.history.back()}>Go Back</Button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#1C1C1C] pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Payment Form */}
          <Card className="p-6 bg-[#2E2E2E] border-none">
            <h2 className="text-2xl font-bold mb-6">Payment Details</h2>
            <form>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="cardName">Name on Card</Label>
                  <Input
                    id="cardName"
                    placeholder="John Doe"
                    className="bg-[#1C1C1C] border-none mt-1"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="cardNumber">Card Number</Label>
                  <div className="relative">
                    <Input
                      id="cardNumber"
                      placeholder="1234 5678 9012 3456"
                      className="bg-[#1C1C1C] border-none mt-1 pl-10"
                      required
                      maxLength={19}
                    />
                    <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#A3A3A3] w-4 h-4" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="expiry">Expiry Date</Label>
                    <Input
                      id="expiry"
                      placeholder="MM/YY"
                      className="bg-[#1C1C1C] border-none mt-1"
                      required
                      maxLength={5}
                    />
                  </div>
                  <div>
                    <Label htmlFor="cvc">CVC</Label>
                    <Input
                      id="cvc"
                      placeholder="123"
                      className="bg-[#1C1C1C] border-none mt-1"
                      required
                      maxLength={3}
                      type="password"
                    />
                  </div>
                </div>
                <Button
                  type="submit"
                  className="w-full bg-[#4b50e3] hover:bg-[#4b50e3]/90 mt-6"
                >
                  Pay ${plan.price}
                </Button>
              </div>
            </form>
            <div className="flex items-center justify-center mt-6 text-sm text-[#A3A3A3]">
              <Lock className="w-4 h-4 mr-2" />
              Secure and encrypted payment
            </div>
          </Card>

          {/* Order Summary */}
          <Card className="p-6 bg-[#2E2E2E] border-none h-fit">
            <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-4 border-b border-[#1C1C1C]">
                <div>
                  <h3 className="font-semibold">{plan.name} Plan</h3>
                  <p className="text-sm text-[#A3A3A3]">Monthly subscription</p>
                </div>
                <span className="text-xl font-bold">${plan.price}</span>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">Includes:</h4>
                <ul className="space-y-2">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-[#A3A3A3]">
                      <span className="w-1.5 h-1.5 bg-[#4b50e3] rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </main>
  );
}