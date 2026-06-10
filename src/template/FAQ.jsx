import { useState } from "react";

const faqs = [
  {
    question: "What is PinJot?",
    answer:
      "PinJot helps you create a personalized page where you can share all your important links in one place.",
  },
  {
    question: "Is it free to use?",
    answer:
      "Yes! You can create and share your bio page for free. Premium features may be added in the future.",
  },
  {
    question: "Can I customize my page?",
    answer:
      "Absolutely. You can add your profile picture, social links, custom buttons, and more.",
  },
  {
    question: "Do I need coding knowledge?",
    answer:
      "Not at all. Everything can be managed through an easy-to-use interface.",
  },
  {
    question: "Can I update my links anytime?",
    answer:
      "Yes, you can edit your links and profile information whenever you want.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-pink-50 py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          

          <h2 className="mt-6 text-4xl font-bold text-slate-950 md:text-5xl">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-slate-400">
            Everything you need to know about our platform.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden shadow-lg rounded-2xl border border-pink-100 bg-pink-100"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >
                <span className="font-semibold text-slate-950">{faq.question}</span>

                <span className="text-2xl text-violet-400">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              <div
                className={`transition-all duration-300 ${
                  openIndex === index
                    ? "max-h-40 px-6 pb-5 opacity-100"
                    : "max-h-0 overflow-hidden opacity-0"
                }`}
              >
                <p className="text-slate-400">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
