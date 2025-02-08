import React, { useState } from "react";
import FAQItem from "./FAQItem";
import SearchBar from "./SearchBar";
import CTAButton from "./CTAButton";
import "./FAQSection.css";

const FAQSection = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const faqData = [
    {
      question: "What is the Financial and Education Planner Tool?",
      answer:
        "The Financial and Education Planner Tool is your personal financial companion, designed specifically for single mothers. It helps you create budgets, track expenses, plan for your children's education, and set achievable financial goals. Think of it as your supportive friend who's always there to help you make smart financial decisions.",
    },
    // Add more FAQ items...
  ];

  const filteredFAQs = faqData.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="faq-section">
      <div className="faq-header">
        <h1>Here to Help You</h1>
        <p className="subtitle">
          Find answers to your financial questions and take control of your
          future
        </p>
      </div>
      <div className="decorative-elements">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
      </div>
      <SearchBar
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div className="faq-container">
        {filteredFAQs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
      <CTAButton />
    </div>
  );
};

export default FAQSection;
