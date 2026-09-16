import { useState } from "react";
import ChevronDown from "../components/Expandsvg";

const faqs = [
{
    question: "What services do you provide?",
    answer:
    "I provide frontend web development services, building modern, responsive, and performant websites.",
},
{
    question: "How do I start working with you?",
    answer:
    "It starts with a free discovery call. We’ll discuss your goals, vision, and how I can bring your ideas to life.",
},
{
    question: "How long does a project take?",
    answer:
    "Project timelines vary based on scope, but most projects take 2–4 weeks. I’ll provide a clear timeline after our initial consultation.",
},
{
    question: "Do you provide revisions?",
    answer:
    "Absolutely! I offer a set number of revisions to ensure the final result aligns with your vision.",
},
{
    question: "What industries do you work with?",
    answer:
    "From tech startups to creative agencies, I collaborate with different industries and adapt each website to the brand’s identity.",
},
{
    question: "What is your pricing structure?",
    answer:
    "Pricing depends on the project’s complexity and scope. Let’s discuss your goals, and I’ll provide a transparent quote tailored to your needs.",
},
{
    question: "Can you redesign my existing website?",
    answer:
    "Definitely! I can transform your outdated website into a modern, user-friendly experience that reflects your brand’s evolution.",
},
];

export default function AccordionUsage() {
const [openIndex, setOpenIndex] = useState(null);

const toggleAccordion = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
};

return (
    <div className="flex flex-col gap-3.5 rounded-[30px] answer">
    {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        const answerId = `faq-answer-${index}`;

        return (
        <div
            key={faq.question}
            className="overflow-hidden rounded-[30px] bg-[#0f0f0f] text-white"
        >
            <button
            type="button"
            onClick={() => toggleAccordion(index)}
            aria-expanded={isOpen}
            aria-controls={answerId}
            className="flex w-full items-center justify-between gap-5 px-5 py-4 text-left"
            >
            <span className="text-[18px] md:text-[26px]">
                {faq.question}
            </span>

            <span
                className={`shrink-0 transition-transform duration-300 ${
                isOpen ? "rotate-180" : "rotate-0"
                }`}
                aria-hidden="true"
            >
                <ChevronDown />
            </span>
            </button>

            <div
            id={answerId}
            className={`grid transition-[grid-template-rows,opacity] duration-300 ${
                isOpen
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
            >
            <div className="overflow-hidden">
                <p className="px-5 pb-5 text-[14px] leading-relaxed text-gray-400 md:text-[18px]">
                {faq.answer}
                </p>
            </div>
            </div>
        </div>
        );
    })}
    </div>
);
}