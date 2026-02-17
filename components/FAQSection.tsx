
import React, { useState } from 'react';

const FAQSection: React.FC = () => {
  const faqs = [
    { q: "Is ProBiora safe for children?", a: "Yes, ProBiora Kids is specifically formulated for younger users. It uses the same beneficial strains but in a dosage and flavor profile tailored for children." },
    { q: "How long until I see results?", a: "Most users notice fresher breath within the first few days. For gum health and whitening improvements, clinical trials show significant results after 30 days of consistent use." },
    { q: "Does it replace brushing and flossing?", a: "No. ProBiora is an essential addition to your routine, not a replacement. Brushing removes plaque, and ProBiora populates the clean area with beneficial bacteria." },
    { q: "Can I take it if I have crowns or implants?", a: "Absolutely. ProBiora works by colonizing the gum line and soft tissues of the mouth, providing protection regardless of dental hardware." },
    { q: "Is there an expiry date on the probiotics?", a: "Our patented ProBiora3® strains are shelf-stable for 12 months. We recommend storing in a cool, dry place." }
  ];

  const [active, setActive] = useState<number | null>(0);

  return (
    <section className="py-32 bg-white reveal">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-sm font-black text-probiora-400 uppercase tracking-[0.2em] mb-6">Inquiry</h2>
          <h3 className="text-4xl lg:text-5xl font-extrabold text-probiora-800">Frequently Asked <span className="text-probiora-500 italic font-serif font-normal">Questions</span></h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-slate-100">
              <button 
                onClick={() => setActive(active === idx ? null : idx)}
                className="w-full py-8 flex items-center justify-between text-left group"
              >
                <span className={`text-lg font-bold transition-colors ${active === idx ? 'text-probiora-500' : 'text-probiora-800'}`}>
                  {faq.q}
                </span>
                <span className={`text-2xl transition-transform duration-300 ${active === idx ? 'rotate-180 text-probiora-500' : 'text-slate-300'}`}>
                  {active === idx ? '−' : '+'}
                </span>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${active === idx ? 'max-h-96 pb-8' : 'max-h-0'}`}>
                <p className="text-slate-500 text-base font-light leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 p-10 bg-probiora-50 rounded-[3rem] text-center border border-probiora-100">
          <h4 className="text-probiora-800 font-bold mb-4">Still have questions?</h4>
          <p className="text-slate-500 text-sm font-light mb-8">Our oral health consultants are available to help you find the right fit.</p>
          <button className="px-8 py-4 bg-probiora-800 text-white font-black rounded-xl hover:shadow-xl transition-all uppercase tracking-widest text-[10px]">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
