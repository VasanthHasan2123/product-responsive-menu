import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import logo from './1600w-koIA1HEug0Q.webp'; // Import the logo image
import bannerImage from './banner.avif'; // Import the banner image
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const App = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <style>
        {`
          /* Navbar Styles */
          .navbar {
      background: linear-gradient(90deg, #004d99, #0066cc);
      padding: 1rem 2rem;
      font-family: 'Arial', sans-serif;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
      transition: background-color 0.3s ease;
    }

          /* Center align nav items */
        .navbar-nav {
          justify-content: center;
        }

      /* Navbar Toggler Icon Styles */
          .navbar-toggler {
            border: none; /* Remove default border */
          }

          .navbar-toggler-icon {
            background-color: transparent; /* Make background transparent */
          }

          .navbar-toggler .fa {
            color: white; /* Make the icon color white */
          }

          /* Show 'X' icon when menu is open */
          .navbar-toggler.open .fa-bars {
            display: none; /* Hide hamburger icon */
          }

          .navbar-toggler.open .fa-times {
            display: block; /* Show 'X' icon */
          }

          .navbar-toggler .fa-times {
            display: none; /* Hide 'X' icon by default */
          }
            
          /* Logo Styling */
          .navbar-brand img {
            border-radius: 20%;
            transition: transform 0.3s ease;
          }

          .navbar-brand img:hover {
            transform: scale(1.1);
          }

          /* Nav Links */
        .navbar-nav .nav-link {
            color: white;
            font-size: 1.5rem; /* Increased font size */
            font-weight: bold;
            padding: 1rem 1.5rem; /* Increased padding for more space */
            margin: 0 0.5rem; /* Added margin for space between items */
            transition: all 0.3s ease-in-out;
            display: flex;
            align-items: center;
            border-radius: 5px;
            gap:10px;
          }

        .navbar-nav .nav-link:hover {
          color: #ffd700;
          background-color: rgba(255, 255, 255, 0.1);
          transform: translateY(-2px);
        }

          .navbar-nav .nav-link i {
            margin-right: 8px;
          }

          /* Banner Styles */
          .banner {
            background: url(${bannerImage}) no-repeat center center/cover;
            height: 70vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            color: white;
            text-align: center;
            position: relative;
            padding: 2rem;
          }

          .banner::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.5);
            z-index: 1;
          }

          .banner h1 {
            font-size: 3.5rem;
            margin-bottom: 1rem;
            z-index: 2;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
          }

          .banner p {
            font-size: 1.5rem;
            margin-bottom: 2rem;
            z-index: 2;
            text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
          }

          .banner button {
            padding: 0.8rem 2rem;
            border: none;
            border-radius: 5px;
            background-color: #ffd700;
            color: #004d99;
            font-size: 1.2rem;
            cursor: pointer;
            transition: background-color 0.3s ease;
            z-index: 2;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
          }

          .banner button:hover {
            background-color: #ffe600;
            box-shadow: 0 6px 8px rgba(0, 0, 0, 0.4);
          }

          /* Products Section Styles */
          .products-section {
            padding: 3rem 1rem;
            text-align: center;
            background-color: #f8f9fa;
          }

          .products-section h2 {
            margin-bottom: 2rem;
            font-size: 2.5rem;
            color: #004d99;
            text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
          }

          .products-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
          }

          .product-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            border: 1px solid #ddd;
            border-radius: 10px;
            padding: 2rem 1rem;
            margin: 1rem;
            background: white;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            position: relative;
            text-align: center;
            height: 250px; /* Set a fixed height for cards */
            width: 200px; /* Fixed width for consistency */
            display: flex;
            flex-direction: column;
            justify-content: center;
          }

          .product-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
          }

          .product-card .icon {
            font-size: 3rem; /* Size of the icon */
            color: #0066cc;
            margin-bottom: 1rem; /* Spacing between icon and text */
            transition: transform 0.3s ease;
          }

          .product-card:hover .icon {
            transform: scale(1.1); /* Slightly increase icon size on hover */
          }

          /* About Section Styles */
          .about-section {
            padding: 3rem 1rem;
            background-color: #ffc107;
            text-align: center;
          }

          .about-section h2 {
            font-size: 2.5rem;
            color: #004d99;
            margin-bottom: 1rem;
          }

          .about-section p {
            font-size: 1.2rem;
            color: #333;
            max-width: 800px;
            margin: 0 auto;
          }

          /* Services Section Styles */
          .services-section {
            padding: 3rem 1rem;
            background-color: #e9ecef;
            text-align: center;
          }

          .services-section h2 {
            margin-bottom: 2rem;
            font-size: 2.5rem;
            color: #004d99;
            text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
          }

          .services-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
          }

          .service-card {
            border: 1px solid #ddd;
            border-radius: 10px;
            padding: 2rem 1rem;
            margin: 1rem;
            background: white;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            text-align: center;
            flex: 1 0 200px; /* Flexible card width */
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .service-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
          }

          .service-card h3 {
            margin-top: 1rem;
            font-size: 1.5rem;
            color: #333;
          }

           /* Recipes Section Styles */
            .recipes-section {
              padding: 3rem 1rem;
              background-color: #f0f8ff;
              text-align: center;
            }

            .recipes-section h2 {
              font-size: 2.5rem;
              margin-bottom: 1.5rem;
              color: #004d99;
              text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
            }

            .recipes-section p {
              font-size: 1.2rem;
              color: #666;
              margin-bottom: 2rem;
            }

            .recipes-container {
              display: flex;
              flex-wrap: wrap;
              justify-content: center;
            }

            .recipe-card {
              transition: transform 0.3s ease, box-shadow 0.3s ease;
              border: 1px solid #ddd;
              border-radius: 10px;
              padding: 2rem 1rem;
              margin: 1rem;
              background: white;
              box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
              text-align: center;
              width: 250px;
            }

            .recipe-card:hover {
              transform: translateY(-5px);
              box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
            }

            .recipe-card .icon {
              font-size: 3rem;
              color: #ff6347;
              margin-bottom: 1rem;
            }

            .recipe-card h3 {
              font-size: 1.5rem;
              margin-bottom: 0.5rem;
            }

            .recipe-card p {
              font-size: 1rem;
              color: #666;
            }
      
          /* Footer Styles */
          .footer {
            background-color: #004d99;
            color: white;
            padding: 2rem 1rem;
            text-align: center;
            position: relative;
          }

          .footer h3 {
            margin-bottom: 1rem;
            font-size: 2rem;
            text-transform: uppercase;
            letter-spacing: 1px;
            text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
          }

          .footer p {
            margin: 0.5rem 0;
            font-size: 1rem;
          }

          .footer a {
            color: #ffd700;
            text-decoration: none;
            transition: color 0.3s ease;
          }

          .footer a:hover {
            text-decoration: underline;
            color: #ffeb3b; /* Change hover color */
          }

          /* Social Icons Styles */
          .social-icons {
            margin-top: 1rem;
          }

          .social-icons a {
            color: white;
            font-size: 1.5rem;
            margin: 0 1rem;
            transition: transform 0.3s ease;
          }

          .social-icons a:hover {
            transform: scale(1.2);
          }

          /* Responsive adjustments */
          @media (max-width: 768px) {
            .banner h1 {
              font-size: 2.5rem;
            }

            .banner p {
              font-size: 1.2rem;
            }

            .banner button {
              font-size: 1rem;
            }

            .product-card,
            .service-card {
              flex: 1 0 45%; /* Adjust for 2 items per row */
            }

            .about-section h2 {
              font-size: 2rem;
            }

            .services-section h2 {
              font-size: 2rem;
            }

            .footer h3 {
              font-size: 1.5rem;
            }

            .footer p {
              font-size: 0.9rem;
            }

            .social-icons a {
              font-size: 1.2rem; /* Reduce icon size on mobile */
            }

             .recipe-card {
                  flex: 1 0 45%;
                }
                    }

          @media (min-width: 768px) {
            .product-card,
            .service-card {
              flex: 1 0 21%; /* Flexbox to adjust width of cards */
              margin: 0.5rem;
            }

            .recipe-card {
        flex: 1 0 21%;
        margin: 0.5rem;
      }
          }
        `}
      </style>

      <header>
        <nav className="navbar navbar-expand-lg fixed-top">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img src={logo} alt="Brand Logo" width="50" height="50" />
            </a>
            <button
              className={`navbar-toggler ${isMobileMenuOpen ? 'open' : ''}`}
              type="button"
              onClick={toggleMobileMenu}
              aria-controls="navbarNav"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation"
            >
              <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </button>
            <div className={`collapse navbar-collapse ${isMobileMenuOpen ? 'show' : ''}`} id="navbarNav">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#banner"><i className="fas fa-home"></i> Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about"><i className="fas fa-info-circle"></i> About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#products"><i className="fas fa-utensils"></i> Products</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#services"><i className="fas fa-cogs"></i> Services</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#recipes"><i className="fas fa-utensils"></i> Recipes</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact"><i className="fas fa-envelope"></i> Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>


      <main>
        <section className="banner" id="banner">
          <h1>Welcome to Our Store</h1>
          <p>Your one-stop solution for fresh food products!</p>
          <button>Shop Now</button>
        </section>

        <section className="products-section" id="products">
          <h2>Our Products</h2>
          <div className="products-container">
            <div className="product-card">
              <div className="icon"><i className="fas fa-apple-alt"></i></div>
              <h3>Fruits</h3>
            </div>
            <div className="product-card">
              <div className="icon"><i className="fas fa-bread-slice"></i></div>
              <h3>Breads</h3>
            </div>
            <div className="product-card">
              <div className="icon"><i className="fas fa-cookie-bite"></i></div>
              <h3>Cookies</h3>
            </div>
            <div className="product-card">
              <div className="icon"><i className="fas fa-seedling"></i></div>
              <h3>Vegetables</h3>
            </div>
          </div>
        </section>

        <section className="services-section" id="services">
          <h2>Our Services</h2>
          <div className="services-container">
            <div className="service-card">
              <div className="icon"><i className="fas fa-shipping-fast"></i></div>
              <h3>Fast Delivery</h3>
              <p>We ensure quick delivery of all products to your doorstep.</p>
            </div>
            <div className="service-card">
              <div className="icon"><i className="fas fa-star"></i></div>
              <h3>Quality Assurance</h3>
              <p>We guarantee the highest quality for all our food products.</p>
            </div>
            <div className="service-card">
              <div className="icon"><i className="fas fa-headset"></i></div>
              <h3>Customer Support</h3>
              <p>Our support team is here to help you with any queries.</p>
            </div>
            <div className="service-card">
              <div className="icon"><i className="fas fa-credit-card"></i></div>
              <h3>Secure Payment</h3>
              <p>All transactions are securely processed for your peace of mind.</p>
            </div>
          </div>
        </section>

        <section className="about-section" id="about">
          <h2>About Us</h2>
          <p>We are dedicated to providing the freshest and most delicious food products. Our mission is to deliver quality and value to our customers. Whether you're looking for fruits, vegetables, or baked goods, we have you covered!</p>
        </section>
      </main>

      {/* Recipes Section */}
      <section className="recipes-section" id="recipes">
        <h2>Our Favorite Recipes</h2>
        <p>Discover delicious recipes you can make with our fresh products!</p>
        <div className="recipes-container">
          <div className="recipe-card">
            <div className="icon"><i className="fas fa-pizza-slice"></i></div>
            <h3>Fruit Salad</h3>
            <p>Fresh fruits mixed with a touch of honey and mint.</p>
          </div>
          <div className="recipe-card">
            <div className="icon"><i className="fas fa-hamburger"></i></div>
            <h3>Veggie Burger</h3>
            <p>Healthy and tasty burger made with fresh vegetables.</p>
          </div>
          <div className="recipe-card">
            <div className="icon"><i className="fas fa-cookie"></i></div>
            <h3>Chocolate Chip Cookies</h3>
            <p>Soft and chewy cookies with rich chocolate chips.</p>
          </div>
          <div className="recipe-card">
            <div className="icon"><i className="fas fa-leaf"></i></div>
            <h3>Green Smoothie</h3>
            <p>A refreshing and nutritious smoothie with spinach and fruits.</p>
          </div>
        </div>
      </section>

      <footer className="footer" id="contact">
        <h3>Get in Touch</h3>
        <p>If you have any questions, feel free to <a href="mailto:info@example.com">email us</a>.</p>
        <div className="social-icons">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
        </div>
        <p>© 2024 Your Company. All rights reserved.</p>
      </footer>
    </>
  );
};

export default App;
