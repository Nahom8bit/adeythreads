import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Star, Heart, Shield } from 'lucide-react'
import EmailSignupForm from '@/components/EmailSignupForm'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
          <div className="habesha-pattern absolute inset-0 opacity-10" />
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="w-20 h-20 lg:w-24 lg:h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white font-playfair font-bold text-2xl lg:text-3xl">AT</span>
            </div>
            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-playfair font-bold text-dark mb-6">
              Adey Threads
            </h1>
            <p className="text-xl lg:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Premium Habesha fashion that celebrates culture, heritage, and craftsmanship
            </p>
          </div>

          {/* Email Signup */}
          <div className="mb-8">
            <EmailSignupForm 
              placeholder="Enter your email to join the waitlist"
              buttonText="Join Waitlist"
              className="max-w-md mx-auto"
            />
          </div>

          {/* CTA Button */}
          <Link href="/about" className="btn-secondary inline-flex items-center space-x-2">
            <span>Discover Our Story</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="section-padding bg-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-dark mb-6">
                Our Heritage, Your Style
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Adey Threads draws inspiration from the rich cultural heritage of the Habesha people, 
                blending traditional motifs with contemporary design to create timeless pieces that 
                tell a story of pride, beauty, and connection.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Each garment is crafted with the finest materials and attention to detail, 
                ensuring that every piece not only looks beautiful but also honors the 
                traditions that inspire our designs.
              </p>
              <Link href="/about" className="btn-primary inline-flex items-center space-x-2">
                <span>Learn More</span>
                <ArrowRight size={16} />
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="text-primary" size={48} />
                  </div>
                  <p className="text-primary font-playfair text-lg">Cultural Heritage</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-dark mb-6">
              Why Choose Adey Threads
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              We're committed to bringing you the finest quality garments that celebrate 
              our rich cultural heritage and modern craftsmanship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-playfair font-bold text-dark mb-3">
                Premium Quality
              </h3>
              <p className="text-gray-700">
                Crafted with the finest materials and attention to detail, ensuring 
                every piece meets our high standards of excellence.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-playfair font-bold text-dark mb-3">
                Cultural Heritage
              </h3>
              <p className="text-gray-700">
                Each design is inspired by the rich traditions and beautiful motifs 
                of Habesha culture, creating pieces with deep meaning and beauty.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-playfair font-bold text-dark mb-3">
                Sustainable Practices
              </h3>
              <p className="text-gray-700">
                We're committed to ethical manufacturing and sustainable practices 
                that respect both people and the environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Preview Section */}
      <section className="section-padding bg-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-dark mb-6">
              Coming Soon
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Our exclusive collection is in development. Be the first to know when 
              we launch and get early access to our premium Habesha fashion line.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product Placeholder Cards */}
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-[3/4] bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="text-primary" size={32} />
                    </div>
                    <p className="text-primary font-playfair text-lg">Coming Soon</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-playfair font-bold text-lg text-dark mb-2">
                    Premium Collection {item}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Exquisite designs inspired by Habesha heritage and modern elegance.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-dark text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl lg:text-4xl font-playfair font-bold mb-6">
            Join Our Community
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Be among the first to experience our exclusive collection. Sign up for our waitlist 
            and get early access to premium Habesha fashion.
          </p>
          <EmailSignupForm 
            placeholder="Enter your email"
            buttonText="Join Waitlist"
            className="max-w-md mx-auto"
          />
        </div>
      </section>
    </div>
  )
}
