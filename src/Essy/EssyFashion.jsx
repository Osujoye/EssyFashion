import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaEnvelope,
  FaPhone,
  FaShoppingBag,
  FaShoePrints,
  FaTshirt,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function EssyFashionHome() {
  const [isOpen, setIsOpen] = useState(false);
  const portfolio = Array.from({ length: 8 }).map((_, i) => ({
    id: i,
    title: `Design ${i + 1}`,
    img: `https://picsum.photos/600/800?random=${31 + i}`,
  }));

  return (
    <div className="w-full bg-gray-50 text-gray-900 shadow-sm top-0 left-0">
      {/* NAV */}
      <header className="sticky top-0 bg-white/80 backdrop-blur-md z-30 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="size-20">
            <img
              src="/ChatGPT Image Sep 29, 2025, 10_59_29 AM.png"
              alt="Logo"
            />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#about" className="hover:text-pink-600">
              About
            </a>
            <a href="#portfolio" className="hover:text-pink-600">
              Portfolio
            </a>
            <a href="#services" className="hover:text-pink-600">
              Services
            </a>
            <a href="#shop" className="hover:text-pink-600">
              Shop
            </a>
            <a
              href="#contact"
              className="bg-pink-600 text-white px-4 py-2 rounded-md text-sm"
            >
              Contact
            </a>
          </nav>

          {/* Mobile menu toggle */}
          <div className="md:hidden">
            <button
              className="p-2 rounded-md border"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-md">
            <nav className="flex flex-col items-center space-y-4 py-6 text-sm">
              <a href="#about" className="hover:text-pink-600">
                About
              </a>
              <a href="#portfolio" className="hover:text-pink-600">
                Portfolio
              </a>
              <a href="#services" className="hover:text-pink-600">
                Services
              </a>
              <a href="#shop" className="hover:text-pink-600">
                Shop
              </a>
              <a
                href="#contact"
                className="bg-pink-600 text-white px-4 py-2 rounded-md text-sm"
              >
                Contact
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-sm uppercase tracking-widest text-gray-500">
              Now Available
            </p>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-tight">
              Fashion, Materials, Shoes & Bags
            </h2>
            <p className="mt-6 text-gray-600 max-w-xl">
              Essy Fashion is your one-stop destination for clothing, fabrics,
              shoes, and bags. Whether you're shopping for everyday elegance or
              a standout event, we bring you timeless style with modern flair.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="#shop"
                className="inline-block bg-black text-white px-6 py-3 rounded-md"
              >
                Shop Now
              </a>
              <a
                href="#contact"
                className="inline-block border border-gray-300 px-6 py-3 rounded-md"
              >
                Book Appointment
              </a>
            </div>

            <div className="mt-8 flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-3">
                <FaPhone /> <span>+234 7025532531</span>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope /> <span>ogbeestherchika@gmail.com</span>
              </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/d3259eae-9b6a-11f0-b76c-0242ac110002-jpg-hero_image.jpeg"
              alt="hero"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl font-semibold">About</h3>
            <p className="mt-4 text-gray-600">
              Essy Fashion is driven by a passion for design and style. We sell
              all kinds of fashion items: high-quality fabrics, trendy shoes,
              elegant bags, and unique clothing designs that empower and
              inspire.
            </p>

            <ul className="mt-6 space-y-3 text-gray-700">
              <li>• Couture dresses & eveningwear</li>
              <li>• Ready-to-wear collections</li>
              <li>• Custom tailoring & styling</li>
              <li>• Materials, shoes & bags</li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img
              src="/vibrant-african-print-fabrics-colorful-geometric-textile-patterns_1147461-41956.jpg"
              alt="about1"
              className="w-full h-64 object-cover rounded-md shadow-sm"
            />
            <img
              src="/handbag.jpg"
              alt="about2"
              className="w-full h-64 object-cover rounded-md shadow-sm"
            />
            <img
              src="/one-white-sneaker-shoe-isolated-white.jpg"
              alt="about3"
              className="w-full h-64 object-cover rounded-md shadow-sm"
            />
            <img
              src="/high-angle-closeup-shot-colorful-textiles-with-beautiful-asian-patterns.jpg"
              alt="about4"
              className="w-full h-64 object-cover rounded-md shadow-sm"
            />
          </div>
        </div>
      </section>

      {/* SHOP */}
      <section id="shop" className="bg-white py-16 border-t">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-2xl font-semibold">Shop Categories</h3>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="p-6 border rounded-lg item-center">
              <img src="/1.jpeg" alt="" />
              <h4 className="mt-4 font-semibold">Monochrome Elegance Set</h4>
              <p className="mt-2 text-gray-600">
                Step into effortless sophistication with our Monochrome Elegance
                Set. Crafted with bold African prints, this wide-leg pant and
                matching top combine comfort and confidence. Perfect for casual
                outings, brunches, or statement events this look guarantees
                you’ll stand out with grace.
              </p>
            </div>
            <div className="p-6 border rounded-lg item-center">
              <img src="/crepe.jpeg" alt="" />
              <h4 className="mt-4 font-semibold">Flower Crepe Materials</h4>
              <p className="mt-2 text-gray-600">
                Our Essy Luxe Fabrics are handpicked to bring your fashion
                dreams to life. From bold Ankara prints to soft lace and
                timeless textures, each fabric is a canvas for your creativity.
                Perfect for custom tailoring, weddings, events, or everyday
                elegance — these materials define luxury in every stitch.
              </p>
            </div>
            <div className="p-6 border rounded-lg item-center">
              <img src="/2.jpeg" alt="" />
              <h4 className="mt-4 font-semibold">Flora Flow Palazzo </h4>
              <p className="mt-2 text-gray-600">
                Turn heads with the Flora Flow Palazzo, a vibrant piece that
                fuses traditional African print with a contemporary twist. The
                daring front slits add movement and flair, making it a wardrobe
                essential for those who love to make bold statements.
              </p>
            </div>
            <div className="p-6 border rounded-lg item-center">
              <img
                src="/vibrant-african-print-fabrics-colorful-geometric-textile-patterns_1147461-41956.jpg"
                alt=""
              />
              <h4 className="mt-4 font-semibold">Fabrics & Materials</h4>
              <p className="mt-2 text-gray-600">
                Discover the beauty of African tradition with our Royal Essence
                Ankara fabrics. Rich in color and bold in patterns, these
                materials are perfect for custom dresses, tops, and unique
                creations. Soft, durable, and versatile — they allow you to
                design pieces that speak your style story.
              </p>
            </div>
            <div className="p-6 border rounded-lg item-center">
              <img src="/3.jpeg" alt="" />
              <h4 className="mt-4 font-semibold"> Bloom Ankara Palazzo</h4>
              <p className="mt-2 text-gray-600">
                Our Bloom Ankara Palazzo is a vibrant celebration of African
                artistry. With bold floral patterns and stylish front slits,
                these pants are designed to flow with your every step. Pair with
                heels for a chic evening look or flats for everyday glam —
                versatility has never looked this good.
              </p>
            </div>
            <div className="p-6 border rounded-lg item-center">
              <img src="/4.jpeg" alt="" />
              <h4 className="mt-4 font-semibold">Urban Chic Two-Piece</h4>
              <p className="mt-2 text-gray-600">
                Modern, bold, and stylish — the Urban Chic Two-Piece is designed
                for women who own every room they walk into. The flowing
                wide-leg pants paired with a relaxed top create the perfect
                balance of comfort and high-end fashion. Ideal for vacations,
                weekend hangouts, and stylish city strolls.
              </p>
            </div>
            <div className="p-6 border rounded-lg text-center">
              <img src="/one-white-sneaker-shoe-isolated-white.jpg" alt="" />
              <h4 className="mt-4 font-semibold"> Street Luxe Sneakers </h4>
              <p className="mt-2 text-gray-600">
                Comfort meets fashion in our Street Luxe Sneakers. Designed for
                all-day wear, these shoes blend trendy aesthetics with
                durability. Whether you’re pairing them with jeans, casual
                dresses, or even Ankara outfits, these sneakers give you that
                effortless, modern edge.
              </p>
            </div>
            <div className="p-6 border rounded-lg text-center">
              <img src="/new-pair-white-sneakers-isolated-white.jpg" alt="" />
              <h4 className="mt-4 font-semibold">Urban Move Sneakers</h4>
              <p className="mt-2 text-gray-600">
                Step into comfort and style with our Urban Move Sneakers. Built
                for everyday wear, these sneakers combine modern design with
                durability. Whether paired with jeans, dresses, or even African
                prints, they give you the perfect mix of casual cool and
                effortless confidence.
              </p>
            </div>
            <div className="p-6 border rounded-lg text-center">
              <img src="/b1.jpeg" alt="" />
              <h4 className="mt-4 font-semibold">Essy Luxe Bag Collection</h4>
              <p className="mt-2 text-gray-600">
                Complete your outfit with timeless elegance from our Essy Luxe
                Bag Collection. From quilted classics to structured
                designer-inspired pieces, each bag is a perfect blend of
                quality, beauty, and durability. Whether you’re at work, an
                event, or a casual outing, these handbags elevate your style
                effortlessly.
              </p>
            </div>
            <div className="p-6 border rounded-lg text-center">
              <img src="/b2.jpeg" alt="" />
              <h4 className="mt-4 font-semibold">The Signature Bag</h4>
              <p className="mt-2 text-gray-600">
                Elevate your style with The Signature Bag Edit — a curated
                selection of timeless handbags designed to suit every occasion.
                From day-to-night essentials to statement pieces, these bags are
                crafted to complement your elegance and sophistication.
              </p>
            </div>
            <div className="p-6 border rounded-lg text-center">
              <img src="/b3.jpeg" alt="" />
              <h4 className="mt-4 font-semibold">Elegance Bag Collection</h4>
              <p className="mt-2 text-gray-600">
                The Elegance Bag Collection is designed for the modern woman who
                values both function and style. From structured totes to chic
                clutches, these bags are versatile companions that complete your
                outfit. Durable, stylish, and timeless — every piece is crafted
                to match your lifestyle.
              </p>
            </div>
            <div className="p-6 border rounded-lg text-center">
              <img src="/black-bag-with-scarf.jpg" alt="" />
              <h4 className="mt-4 font-semibold">Bags</h4>
              <p className="mt-2 text-gray-600">
                Elegant and functional bags that complete your look.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-semibold">Our Services</h3>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            At Essy Fashion Home, we don’t just sell clothes and accessories —
            we provide a complete fashion experience. From custom-made outfits
            to sourcing the perfect fabrics, our services are designed to meet
            the unique needs of every stylish woman.
          </p>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Service 1 */}
            <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
              <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-pink-100 text-pink-600 text-2xl">
                👗
              </div>
              <h4 className="mt-4 font-semibold text-lg">Custom Tailoring</h4>
              <p className="mt-2 text-gray-600">
                Bespoke dresses, suits, and traditional wear designed to fit
                your body, style, and occasion perfectly.
              </p>
            </div>

            {/* Service 2 */}
            <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
              <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-pink-100 text-pink-600 text-2xl">
                👜
              </div>
              <h4 className="mt-4 font-semibold text-lg">Bags & Accessories</h4>
              <p className="mt-2 text-gray-600">
                Trendy and luxury handbags, shoes, and accessories to complete
                your elegant everyday or party look.
              </p>
            </div>

            {/* Service 3 */}
            <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
              <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-pink-100 text-pink-600 text-2xl">
                🧵
              </div>
              <h4 className="mt-4 font-semibold text-lg">Fabric Sales</h4>
              <p className="mt-2 text-gray-600">
                High-quality fabrics and materials for all occasions, from
                casual wear to luxury couture.
              </p>
            </div>

            {/* Service 4 */}
            <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
              <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-pink-100 text-pink-600 text-2xl">
                👠
              </div>
              <h4 className="mt-4 font-semibold text-lg">Shoes Collection</h4>
              <p className="mt-2 text-gray-600">
                Stylish and durable shoes for both casual and formal occasions,
                curated to match your wardrobe.
              </p>
            </div>

            {/* Service 5 */}
            <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
              <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-pink-100 text-pink-600 text-2xl">
                🎨
              </div>
              <h4 className="mt-4 font-semibold text-lg">Fashion Styling</h4>
              <p className="mt-2 text-gray-600">
                Personal styling consultations to help you create a wardrobe
                that expresses confidence and elegance.
              </p>
            </div>

            {/* Service 6 */}
            <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
              <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-pink-100 text-pink-600 text-2xl">
                📦
              </div>
              <h4 className="mt-4 font-semibold text-lg">
                Nationwide Delivery
              </h4>
              <p className="mt-2 text-gray-600">
                Enjoy hassle-free shopping with fast and reliable delivery of
                all our fashion items anywhere in Nigeria.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-pink-50 py-16">
        <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-semibold">
              Get in touch with Essy Fashion
            </h3>
            <p className="mt-4 text-gray-600">
              Ask about our designs, materials, shoes, or bags — we’ll respond
              within 48 hours.
            </p>

            <div className="mt-6 space-y-3 text-sm text-gray-700">
              <div className="flex items-center gap-3">
                <FaPhone /> +234 7025532531
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope /> ogbeestherchika@gmail.com
              </div>
            </div>

            <div className="mt-6">
              <a
                href="mailto:ogbeestherchika@gmail.com"
                className="inline-block bg-black text-white px-5 py-3 rounded-md"
              >
                Email us
              </a>
              <a href="telto:+234 7025532531"
              className="ml-10 inline-block bg-black text-white px-5 py-3 rounded-md">
              Call Us
              </a>

            </div>
          </div>

          <form className="space-y-4 bg-white p-6 rounded-lg shadow">
            <div>
              <label className="text-sm">Name</label>
              <input
                className="w-full mt-1 p-3 border rounded-md"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-sm">Email</label>
              <input
                className="w-full mt-1 p-3 border rounded-md"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="text-sm">Message</label>
              <textarea
                className="w-full mt-1 p-3 border rounded-md"
                rows={4}
                placeholder="Tell us about your request, event, or product preference..."
              />
            </div>
            <div className="text-right">
              <button
                type="submit"

                className="bg-pink-600 text-black px-5 py-2 rounded-md"
              >
                Send message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white border-t mt-12">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <img
              className="size-10"
              src="/ChatGPT Image Sep 29, 2025, 10_59_29 AM.png"
              alt=""
            />
            <div>
              <div className="font-semibold">Essy Fashion</div>
              <div className="text-sm text-gray-500">
                © {new Date().getFullYear()} All rights reserved
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6 text-sm text-gray-600">
             <h3 className="text-white font-semibold mb-4 tracking-wide">
            Stay Connected
          </h3>
          <form className="flex items-center mb-5">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded-l-lg text-black focus:outline-none"
            />
            <button className="bg-white text-black px-4 py-2 rounded-r-lg font-semibold hover:bg-gray-200">
              Subscribe
            </button>
          </form>
            <div className="flex space-x-5 text-lg">
              <a href="https://www.instagram.com/essyqueency?igsh=MTJsbmtpdjE1dHFjdw==">
                <FaInstagram className="hover:text-white" />
              </a>
              <a href="https://www.tiktok.com/@essy.fashion.court?_t=ZS-908wiSSkOSQ&_r=1">
                <FaTiktok className="hover:text-white" />
              </a>

              <a href="https://www.facebook.com/share/19kVE5UyN5/?mibextid=wwXIfr">
                <FaFacebookF className="hover:text-white" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
