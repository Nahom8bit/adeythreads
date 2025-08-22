import { Heart, Star, Users, Globe } from 'lucide-react'

export const metadata = {
  title: 'About Us - Adey Threads',
  description: 'Discover the story behind Adey Threads. Learn about our cultural inspiration, values, and commitment to premium Habesha fashion.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 bg-light">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-playfair font-bold text-dark mb-6">
              Our Story
            </h1>
            <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed">
              A journey of cultural pride, artistic expression, and timeless elegance
            </p>
          </div>
        </div>
      </section>

      {/* Cultural Heritage Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-dark mb-6">
                Celebrating Habesha Heritage
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Adey Threads is born from a deep appreciation for the rich cultural heritage 
                of the Habesha people. Our designs draw inspiration from centuries-old 
                traditions, intricate patterns, and the vibrant spirit of our ancestors.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Every piece we create tells a story - of resilience, beauty, and the 
                unbreakable connection between past and present. We honor the craftsmanship 
                of traditional weavers and artisans while embracing modern design principles.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our mission is to bring the beauty of Habesha culture to the world, 
                creating garments that are not just clothing, but expressions of identity, 
                pride, and cultural celebration.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="text-primary" size={48} />
                  </div>
                  <p className="text-primary font-playfair text-lg">Cultural Pride</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-dark mb-6">
              Our Values
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              The principles that guide every decision we make and every piece we create
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-playfair font-bold text-dark mb-3">
                Cultural Respect
              </h3>
              <p className="text-gray-700">
                We honor and celebrate the traditions and heritage that inspire our designs, 
                ensuring every piece reflects the beauty and meaning of Habesha culture.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-playfair font-bold text-dark mb-3">
                Quality Craftsmanship
              </h3>
              <p className="text-gray-700">
                Every garment is crafted with the finest materials and attention to detail, 
                ensuring exceptional quality that stands the test of time.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-playfair font-bold text-dark mb-3">
                Community
              </h3>
              <p className="text-gray-700">
                We believe in building connections and fostering a community that celebrates 
                cultural diversity and shared heritage.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-playfair font-bold text-dark mb-3">
                Global Impact
              </h3>
              <p className="text-gray-700">
                We're committed to sharing the beauty of Habesha culture with the world, 
                creating positive impact through fashion and cultural exchange.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Note Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-dark mb-8">
              A Message from Our Founder
            </h2>
            <div className="bg-light rounded-2xl p-8 lg:p-12">
              <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="text-primary" size={32} />
              </div>
              <blockquote className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-6 italic">
                "Adey Threads is more than just a fashion brand - it's a celebration of who we are, 
                where we come from, and the beautiful traditions that shape our identity. Every piece 
                we create is infused with the love, pride, and respect we have for our cultural heritage."
              </blockquote>
              <p className="text-primary font-playfair font-bold text-lg">
                - The Adey Threads Team
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="section-padding bg-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-dark mb-6">
              Our Journey
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              From inspiration to creation, discover the path that led us to Adey Threads
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-playfair font-bold text-dark mb-3">
                Inspiration
              </h3>
              <p className="text-gray-700">
                Drawing from the rich tapestry of Habesha culture, traditions, and artistic heritage 
                to create designs that honor our roots.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-playfair font-bold text-dark mb-3">
                Creation
              </h3>
              <p className="text-gray-700">
                Meticulously crafting each piece with premium materials and attention to detail, 
                ensuring every garment meets our high standards.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-playfair font-bold text-dark mb-3">
                Connection
              </h3>
              <p className="text-gray-700">
                Building a community of people who share our passion for cultural expression 
                and timeless elegance through fashion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-dark text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl lg:text-4xl font-playfair font-bold mb-6">
            Join Our Story
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Be part of our journey as we celebrate and share the beauty of Habesha culture 
            through premium fashion. Join our waitlist to be the first to experience our collection.
          </p>
          <a href="/" className="btn-primary inline-flex items-center space-x-2">
            <span>Join Waitlist</span>
            <Heart size={16} />
          </a>
        </div>
      </section>
    </div>
  )
}