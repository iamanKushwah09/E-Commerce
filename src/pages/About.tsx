const About = () => {
  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="border-b bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            About ARK
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Building a modern shopping experience with trust,
            quality, and innovation at its core.
          </p>
        </div>
      </section>
            {/* FOUNDER SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* IMAGE */}
        <div className="flex justify-center">
          <img
            src="https://avatars.githubusercontent.com/u/175556651?s=400&u=c74feef7b80fd22912ca98ea81d7c867da59a9a5&v=4"   // 👈 yahan apni photo
            alt="Founder"
            className="w-72 h-72 object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* CONTENT */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Hi, I’m the Founder of ARK
          </h2>

          <p className="text-gray-600 leading-relaxed mb-4">
            The ARK was started with one simple idea — to make online
            shopping more reliable, transparent, and enjoyable.
            As a passionate developer and entrepreneur, I wanted
            to build an e-commerce platform that focuses not just
            on selling products, but on creating long-term trust
            with customers.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Every product on SHOP is carefully selected with
            quality, usability, and value in mind. This platform
            reflects my vision of combining modern technology with
            customer-first thinking.
          </p>
        </div>
      </section>
      {/* MISSION */}
      <section className="bg-gray-50 border-t">
        <div className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">

          <div>
            <h3 className="text-xl font-semibold mb-3">
              Our Mission
            </h3>
            <p className="text-gray-600">
              To deliver high-quality products with a seamless
              shopping experience powered by modern technology.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">
              Our Vision
            </h3>
            <p className="text-gray-600">
              To become a trusted digital marketplace where
              customers shop with confidence and ease.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">
              Our Values
            </h3>
            <p className="text-gray-600">
              Transparency, customer satisfaction, innovation,
              and long-term trust.
            </p>
          </div>

        </div>
      </section>
      {/* WHY CHOOSE US */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose SHOP?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div className="p-6 border rounded-xl">
            <h4 className="font-semibold mb-2">Quality First</h4>
            <p className="text-gray-600 text-sm">
              Carefully curated products that meet our standards.
            </p>
          </div>

          <div className="p-6 border rounded-xl">
            <h4 className="font-semibold mb-2">Secure Shopping</h4>
            <p className="text-gray-600 text-sm">
              Safe payments and data protection at every step.
            </p>
          </div>

          <div className="p-6 border rounded-xl">
            <h4 className="font-semibold mb-2">Fast Support</h4>
            <p className="text-gray-600 text-sm">
              Customer-first support whenever you need help.
            </p>
          </div>

          <div className="p-6 border rounded-xl">
            <h4 className="font-semibold mb-2">Modern Tech</h4>
            <p className="text-gray-600 text-sm">
              Built using modern, scalable web technologies.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;