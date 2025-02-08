import React from 'react'
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Dashboard from './pages/Dashboard'
import HomePage from './pages/HomePage';
import FinanceScreen from "./pages/Finance";
import Workshop from './pages/Workshop';
import WorkshopDetail from './components/WorkshopDetail';
import BlogInfo from './pages/BlogPage';
import NetworkingHub from "./pages/NetworkingHub";
import ComingSoon from "./components/ComingSoon";
import FAQSection from './components/FAQsection';
import FinanceSessionDetail from './components/FinanceSessionDetails';
// import LearnFinance from './components/LearnFinance';
// import FinanceSessionTypes from './components/FinanceSessionTypes';
import FinanceLearnPage from "./pages/FinanceLearnPage"


function App() {
  
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/workshops" element={<Workshop />} />
        <Route path="/workshop-detail" element={<WorkshopDetail />} />
        <Route path="/finance" element={<FinanceScreen />} />
        <Route path="/blog" element={<BlogInfo />} />
        <Route path="/networking-hub" element={<NetworkingHub />} />
        <Route path="/coming-soon" element={<ComingSoon />}  />
        <Route path="/faqs" element={<FAQSection />}  />
        <Route path="/learn-finance" element={<FinanceLearnPage />}  />
        <Route path="/finance-session-detail" element={<FinanceSessionDetail />}  />

      </Routes>
    </Router>
    {/* <FinanceScreen /> */}

    </>
  );
}

export default App
