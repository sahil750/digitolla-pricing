import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Digitolla | Event hoo ya Social Media, sab set hai!</title>
        <meta name="description" content="Digitolla is your go-to creative agency for event coverage, social media management, video editing, and more!" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Digitolla",
          "url": "https://www.digitolla.com",
          "logo": "https://www.digitolla.com/logo.png",
          "tagline": "Event hoo ya Social Media, sab set hai!",
          "description": "Digitolla is a creative digital agency offering premium event coverage, social media management, content creation, brand promotion, video editing, and web development services.",
          "email": "admin@digitolla.com",
          "sameAs": [
            "https://www.instagram.com/digitolla",
            "https://www.linkedin.com/company/digitolla",
            "https://www.facebook.com/digitolla",
            "https://www.youtube.com/@digitolla"
          ],
          "founder": {
            "@type": "Person",
            "name": "Sahil Mohan",
            "jobTitle": "Founder & CEO"
          },
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Remote",
            "addressRegion": "India",
            "addressCountry": "IN"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "Customer Service",
            "email": "admin@digitolla.com",
            "url": "https://www.digitolla.com/contact"
          }
        }` }} />
      </Head>
      <main className="min-h-screen bg-gradient-to-br from-pink-100 via-white to-blue-100 flex items-center justify-center text-center px-4">
        <div className="bg-white/80 shadow-xl rounded-2xl p-10 max-w-xl">
          <h1 className="text-4xl font-extrabold text-purple-700 mb-4">Welcome to Digitolla</h1>
          <p className="text-lg text-gray-700 font-medium">Event hoo ya Social Media, sab set hai!</p>
        </div>
      </main>
    </>
  );
}