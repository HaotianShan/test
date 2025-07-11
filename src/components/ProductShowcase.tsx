import React from "react";

const ProductShowcase = () => {
  return (
    <div className="product-showcase">
      <header className="showcase-header">
        <h1>Discover Our Premium Product Collection</h1>
        <p className="subtitle">
          Innovative solutions designed for exceptional performance
        </p>
      </header>

      <section className="featured-products">
        <div className="product-card">
          <h2>Ultra HD Smart Display</h2>
          <p className="product-description">
            Our flagship 4K smart display combines stunning visuals with
            intuitive voice control. With a 98% color-accurate panel and 120Hz
            refresh rate, it&apos;s perfect for both work and entertainment.
          </p>
          <div className="product-highlights">
            <ul>
              <li>55&quot; 4K OLED Touch Display</li>
              <li>Built-in Smart Assistant</li>
              <li>Multi-device wireless connectivity</li>
              <li>Eye-comfort technology</li>
            </ul>
          </div>
        </div>

        <div className="product-card">
          <h2>Pro Wireless Earbuds</h2>
          <p className="product-description">
            Experience crystal-clear audio with our noise-cancelling wireless
            earbuds. Featuring 30-hour battery life and IPX7 waterproof rating
            for all-day comfort.
          </p>
          <div className="product-highlights">
            <ul>
              <li>Active Noise Cancellation</li>
              <li>360° Spatial Audio</li>
              <li>Fast charging (5 min = 1 hour play)</li>
              <li>Customizable touch controls</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="benefits-section">
        <h2>Why Choose Our Products?</h2>
        <div className="benefits-grid">
          <div className="benefit-item">
            <h3>Premium Materials</h3>
            <p>
              We use only the highest quality components for durability and
              performance.
            </p>
          </div>
          <div className="benefit-item">
            <h3>2-Year Warranty</h3>
            <p>
              All products come with our industry-leading warranty coverage.
            </p>
          </div>
          <div className="benefit-item">
            <h3>Eco-Friendly</h3>
            <p>Sustainably manufactured with 100% recyclable packaging.</p>
          </div>
        </div>
      </section>

      <footer className="showcase-footer">
        <p>Ready to experience the difference?</p>
        <button className="cta-button">Shop Now</button>
      </footer>
    </div>
  );
};

export default ProductShowcase;
