// src/components/HomePage.jsx
import React from "react";
import {
  Star,
  CreditCard,
  Users,
  Scale,
  UserCircle,
  Users2,
  ClipboardList,
  TrendingUp,
  User 
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import ImageSlider from "../components/ImageSlider";
import w5 from "../../images/w5.jpg";
import w6 from "../../images/w6.jpg";
import m1 from "../../images/m1.jpg";
// import m7 from "../../images/m7.jpg";
import "./HomePage.css";
import BlogInfo from "./BlogPage";

const HomePage = () => {
  const imagePath = "";
  const quickAccessItems = [
    { icon: <Star />, label: "Workshops" },
    { icon: <CreditCard />, label: "Finance" },
    { icon: <Users />, label: "Network" },
    { icon: <Scale />, label: "Legal Help" },
    { icon: <UserCircle />, label: "Psychologist" },
  ];

  const blogPosts = [
    {
      id: 1,
      title: "My Journey as a Single Mom",
      summary: "How I Found Joy in Single Parenting",
      image: w6,
      date: "2025-01-15",
      author: "Sarah Johnson",
      category: "Personal Story",
    },
    {
      id: 2,
      title: "Financial Freedom: A Step-by-Step Guide",
      summary: "Managing finances effectively as a single parent",
      image: m1,
      date: "2025-01-12",
      author: "Emma Thompson",
      category: "Finance",
    },
    {
      id: 3,
      title: "Building a Support Network",
      summary: "Creating meaningful connections in your community",
      image: w5,
      date: "2025-01-10",
      author: "Lisa Chen",
      category: "Community",
    },
  ];

  const navigate = useNavigate();
   
  const handleProfileClick = () => {
    navigate("/dashboard");
  };
  const handleBlogClick = (blog) => {
    navigate('/blog', { state: { blog } });
  };
  
  const handleQuickAccessClick = (label) => {
    if (label === "Workshops") {
      navigate("/workshops");
    }
    if(label === "Finance"){
      navigate("/finance");
    }
    if(label === "Network"){
      navigate("/networking-hub");
    }
    if(label === "Legal Help" || label === "Psychologist"){
      navigate('/coming-soon');
    }
    // Add other navigation cases here as needed
  };


  return (
    <div className="app-container">
      {/* Header */}
      <div className="header-section">
        <header className="header">
          <div className="profile"  onClick={handleProfileClick} >
            <div className="profile-image">
              {imagePath ? (
                <img src={imagePath} alt="Profile" />
              ) : (
                  <User  />
              )}
            </div>
            <div className="profile-text">
              <h4>Hello, Sarah</h4>
              <p>Welcome again</p>
            </div>
          </div>
          {/* <Bell className="notification-icon" color='black'/> */}
          <h3>MomEase</h3>
        </header>

        {/* Welcome Card */}
        <div className="welcome-card">
          <div className="welcome-illustration">
            <ImageSlider />
          </div>
          <div className="welcome-text">
            <h4>Nurturing You, So You Can Nurture Them.</h4>
          </div>
        </div>
      </div>

      {/* Quick Access */}
      <section className="quick-access">
        <h3>Quick Access</h3>
        <div className="quick-access-grid">
        {quickAccessItems.map((item, index) => (
            <div
              key={index}
              className="quick-access-item"
              onClick={() => handleQuickAccessClick(item.label)}
              style={{ cursor: 'pointer' }}
            >
              <div className="icon-container">{item.icon}</div>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Recent Blogs */}
      <section className="blogs">
        <div className="blogs-header">
          <h3>Recent Blogs</h3>
        </div>
        <div className="blogs-grid">
          {blogPosts.map((post) => (
            <div key={post.id} className="blog-card" onClick={() => handleBlogClick(post)}>
              <div className="blog-image">
                <img src={post.image} alt={post.title} />
              </div>
              <div className="blog-meta">
                <span className="blog-category">{post.category}</span>
                <span className="blog-date">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  })}
                </span>
              </div>
              <h4>{post.title}</h4>
              <p>{post.summary}</p>
              <div className="blog-author">By {post.author}</div>
            </div>
          ))}
        </div>

        <button>See More</button>
      </section>
    </div>
  );
};

export default HomePage;
