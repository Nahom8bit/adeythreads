import { Clock, Truck, RefreshCw, Shield, Heart } from 'lucide-react'

export const metadata = {
  title: 'Policies - Adey Threads',
  description: 'Learn about Adey Threads policies including shipping, returns, and customer service. Coming soon with our launch.',
}

export default function PoliciesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 bg-light">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-playfair font-bold text-dark mb-6">
              Our Policies
            </h1>
            <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed">
              Transparent policies designed with our customers in mind
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-8">
              <Clock className="text-primary" size={48} />
            </div>
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-dark mb-6">
              Policies Coming Soon
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              We're currently finalizing our policies to ensure the best experience for our customers. 
              All policies will be clearly outlined and available when we launch our collection.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our commitment is to provide transparent, fair, and customer-friendly policies 
              that reflect our values of quality, respect, and community.
            </p>
          </div>
        </div>
      </section>

      {/* Policy Categories */}
      <section className="section-padding bg-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-dark mb-6">
              What to Expect
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Here's what we're working on to ensure your experience with Adey Threads is exceptional
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Shipping Policy */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Truck className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-playfair font-bold text-dark mb-4 text-center">
                Shipping & Delivery
              </h3>
              <div className="space-y-3 text-gray-700">
                <p className="text-sm">
                  • Worldwide shipping to share our cultural heritage globally
                </p>
                <p className="text-sm">
                  • Fast and reliable delivery options
                </p>
                <p className="text-sm">
                  • Real-time tracking for all orders
                </p>
                <p className="text-sm">
                  • Sustainable packaging materials
                </p>
              </div>
              <div className="mt-6 p-3 bg-light rounded-lg">
                <p className="text-sm text-primary font-medium text-center">
                  Details coming with launch
                </p>
              </div>
            </div>

            {/* Returns Policy */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <RefreshCw className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-playfair font-bold text-dark mb-4 text-center">
                Returns & Exchanges
              </h3>
              <div className="space-y-3 text-gray-700">
                <p className="text-sm">
                  • Hassle-free returns within 30 days
                </p>
                <p className="text-sm">
                  • Easy exchange process for size adjustments
                </p>
                <p className="text-sm">
                  • Quality guarantee on all products
                </p>
                <p className="text-sm">
                  • Customer satisfaction priority
                </p>
              </div>
              <div className="mt-6 p-3 bg-light rounded-lg">
                <p className="text-sm text-primary font-medium text-center">
                  Details coming with launch
                </p>
              </div>
            </div>

            {/* Privacy Policy */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-playfair font-bold text-dark mb-4 text-center">
                Privacy & Security
              </h3>
              <div className="space-y-3 text-gray-700">
                <p className="text-sm">
                  • Secure payment processing
                </p>
                <p className="text-sm">
                  • Data protection and privacy
                </p>
                <p className="text-sm">
                  • Transparent data usage policies
                </p>
                <p className="text-sm">
                  • Customer data security priority
                </p>
              </div>
              <div className="mt-6 p-3 bg-light rounded-lg">
                <p className="text-sm text-primary font-medium text-center">
                  Details coming with launch
                </p>
              </div>
            </div>

            {/* Customer Service */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-playfair font-bold text-dark mb-4 text-center">
                Customer Service
              </h3>
              <div className="space-y-3 text-gray-700">
                <p className="text-sm">
                  • 24/7 customer support
                </p>
                <p className="text-sm">
                  • Personalized assistance
                </p>
                <p className="text-sm">
                  • Cultural expertise and guidance
                </p>
                <p className="text-sm">
                  • Community-focused approach
                </p>
              </div>
              <div className="mt-6 p-3 bg-light rounded-lg">
                <p className="text-sm text-primary font-medium text-center">
                  Available now via contact form
                </p>
              </div>
            </div>

            {/* Quality Guarantee */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-playfair font-bold text-dark mb-4 text-center">
                Quality Guarantee
              </h3>
              <div className="space-y-3 text-gray-700">
                <p className="text-sm">
                  • Premium materials and craftsmanship
                </p>
                <p className="text-sm">
                  • Rigorous quality control standards
                </p>
                <p className="text-sm">
                  • Sustainable and ethical production
                </p>
                <p className="text-sm">
                  • Lifetime quality assurance
                </p>
              </div>
              <div className="mt-6 p-3 bg-light rounded-lg">
                <p className="text-sm text-primary font-medium text-center">
                  Our commitment to excellence
                </p>
              </div>
            </div>

            {/* Size Guide */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-playfair font-bold text-dark mb-4 text-center">
                Size Guide
              </h3>
              <div className="space-y-3 text-gray-700">
                <p className="text-sm">
                  • Comprehensive size charts
                </p>
                <p className="text-sm">
                  • Fit recommendations
                </p>
                <p className="text-sm">
                  • Measurement guides
                </p>
                <p className="text-sm">
                  • Personalized fit assistance
                </p>
              </div>
              <div className="mt-6 p-3 bg-light rounded-lg">
                <p className="text-sm text-primary font-medium text-center">
                  Details coming with launch
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-dark mb-8">
              Our Commitment to You
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-left">
                <h3 className="text-xl font-playfair font-bold text-dark mb-4">
                  Transparency
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We believe in clear, honest communication about our policies, 
                  processes, and practices. No hidden fees, no surprises.
                </p>
              </div>
              <div className="text-left">
                <h3 className="text-xl font-playfair font-bold text-dark mb-4">
                  Customer First
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Every policy is designed with our customers' needs and satisfaction 
                  in mind. Your experience is our priority.
                </p>
              </div>
              <div className="text-left">
                <h3 className="text-xl font-playfair font-bold text-dark mb-4">
                  Cultural Respect
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Our policies reflect our respect for cultural heritage and our 
                  commitment to ethical, sustainable practices.
                </p>
              </div>
              <div className="text-left">
                <h3 className="text-xl font-playfair font-bold text-dark mb-4">
                  Quality Assurance
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We stand behind the quality of our products and the integrity 
                  of our service with comprehensive guarantees.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-dark text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl lg:text-4xl font-playfair font-bold mb-6">
            Questions About Our Policies?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            We're here to help! Contact us with any questions about our policies 
            or how we can better serve you.
          </p>
          <a href="/contact" className="btn-primary inline-flex items-center space-x-2">
            <span>Contact Us</span>
            <Heart size={16} />
          </a>
        </div>
      </section>
    </div>
  )
}