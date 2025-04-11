
export default function Home() {
  return (
    <div className="bg-white text-gray-900 p-6 md:p-12">
      <h1 className="text-4xl font-bold text-center mb-10">Digitolla – Creative Service Packages</h1>
      <p className="text-center text-lg mb-16 italic">Event ho ya Insta, Sab Set Hai!</p>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">🎉 Event Coverage</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Basic",
              price: "₹15,000",
              features: ["4 hrs coverage", "50 edited photos", "1 Photographer"]
            },
            {
              title: "Standard",
              price: "₹30,000",
              features: ["6 hrs coverage", "100 edited photos", "1 Highlight Video"]
            },
            {
              title: "Premium",
              price: "₹50,000",
              features: ["Full-day coverage", "150+ edited photos", "Cinematic video + Drone shots"]
            }
          ].map((plan, i) => (
            <div key={i} className="border rounded-2xl p-6 shadow-sm hover:shadow-lg">
              <h3 className="text-xl font-semibold mb-2">{plan.title} Coverage</h3>
              <p className="text-2xl font-bold mb-4">{plan.price}</p>
              <ul className="list-disc pl-5 space-y-2">
                {plan.features.map((f, idx) => (
                  <li key={idx}>{f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">📱 Social Media Management</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Starter",
              price: "₹5,000/mo",
              features: ["12 Posts", "2 Reels", "Hashtag Research"]
            },
            {
              title: "Growth",
              price: "₹15,000/mo",
              features: ["20 Posts", "4 Reels", "Monthly Insights Report"]
            },
            {
              title: "Pro",
              price: "₹25,000/mo",
              features: ["30 Posts", "6 Reels", "Ad Support + Strategy"]
            }
          ].map((plan, i) => (
            <div key={i} className="border rounded-2xl p-6 shadow-sm hover:shadow-lg">
              <h3 className="text-xl font-semibold mb-2">{plan.title} Plan</h3>
              <p className="text-2xl font-bold mb-4">{plan.price}</p>
              <ul className="list-disc pl-5 space-y-2">
                {plan.features.map((f, idx) => (
                  <li key={idx}>{f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center mt-20 border-t pt-6 text-sm text-gray-600">
        For custom packages or collaboration inquiries: <br />
        📧 hello@digitolla.com | 📱 Instagram: @digitolla
      </footer>
    </div>
  );
}
