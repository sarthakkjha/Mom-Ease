import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Finance.css";
import {
  CalendarCheck,
  Coins,
  Activity,
  Search,
  HelpCircle,
} from "lucide-react";

const Finance = () => {
  const navigate = useNavigate(); // Initialize navigation

  // Function to handle navigation on click
  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="finance-container">
      <h2>Finance</h2>
      <div className="finance-intro">
        <p>Empower yourself with financial knowledge and take control of your future</p>
      </div>
      <div className="finance-tools-list">
        <div
          className="finance-item"
          onClick={() => handleNavigation("/budget-recommendation")}
        >
          <CalendarCheck size={48} color="#f06688" />
          <h3>Budget Recommendation System</h3>
        </div>
        <div className="finance-item" onClick={() => handleNavigation("/learn-finance")}>
          <Coins size={48} color="#f06688" />
          <h3>Learn Finance</h3>
        </div>
        <div className="finance-item" onClick={() => handleNavigation("/coming-soon")}>
          <Activity size={48} color="#f06688" />
          <h3>Know Your Finance Status</h3>
        </div>
        <div className="finance-item" onClick={() => handleNavigation("/coming-soon")}>
          <Search size={48} color="#f06688" />
          <h3>Debt Management Assistant</h3>
        </div>
        <div className="finance-item" onClick={() => handleNavigation("/faqs")}>
          <HelpCircle size={48} color="#f06688" />
          <h3>FAQ</h3>
        </div>
      </div>
    </div>
  );
};

export default Finance;
