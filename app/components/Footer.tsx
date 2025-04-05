export function Footer() {
    return (
      <footer className="bg-black-100 text-white mt-10">
        <div className="max-w-7xl mx-auto p-6 grid md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-bold text-lg mb-2">Artists Retreat</h4>
            <p>Memories and motions</p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-2">Contact Us</h4>
            <p>📞 +91-9328786874</p>
            <p>💬 <a href="https://wa.me/919328786874" className="text-white-600 underline">WhatsApp Us</a></p>
            <p>📍 Ahmedabad, India</p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-2">Our Team</h4>
            <p>We are a team of passionate storytellers capturing love and emotions through the lens.</p>
          </div>
        </div>
        <div className="text-center py-4 text-sm bg-white-200">
          © 2025 Artists Retreat. All rights reserved.
        </div>
      </footer>
    )
  }
  