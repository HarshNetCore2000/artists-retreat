export default function ContactPage() {
    return (
      <section className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold text-center text-white mb-8">
          Contact Us
        </h1>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-gray-100">
          {/* Contact Details */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Get in Touch</h2>
            <p>Have a wedding, event, or creative shoot in mind? We'd love to hear from you.</p>
  
            <div>
              <p className="font-medium">📞 Phone:</p>
              <p>+91-9328786874</p>
            </div>
  
            <div>
              <p className="font-medium">💬 WhatsApp:</p>
              <a
                href="https://wa.me/919328786874"
                className="text-white-600 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Message Us on WhatsApp
              </a>
            </div>
  
            <div>
              <p className="font-medium">📍 Address:</p>
              <p>Artists Retreat<br />Ahmedabad, India</p>
            </div>
          </div>
  
          {/* Optional Contact Form */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Send a Message</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-gray-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-gray-500"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-gray-500"
              />
              <button
  type="submit"
  className="px-6 py-2 border border-black text-black bg-white rounded hover:bg-black hover:text-white transition-colors duration-300 cursor-pointer"
>
  Send Message
</button>

            </form>
          </div>
        </div>
      </section>
    )
  }
  