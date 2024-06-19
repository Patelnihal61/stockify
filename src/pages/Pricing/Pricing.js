import React from "react";
import "../../styles/Pricing.css"
import Layout from "../../components/Layout";


export default function Pricing() {

  const stockData = [
    { name: "Apple", price: 145.09, chart: "apple-chart.png", logo: "apple-logo.png" },
    { name: "Microsoft", price: 265.51, chart: "microsoft-chart.png", logo: "microsoft-logo.png" },
    { name: "Google", price: 2734.87, chart: "google-chart.png", logo: "google-logo.png" },
    { name: "Amazon", price: 3441.85, chart: "amazon-chart.png", logo: "amazon-logo.png" },
    { name: "Facebook", price: 355.64, chart: "facebook-chart.png", logo: "facebook-logo.png" },
    { name: "Tesla", price: 699.10, chart: "tesla-chart.png", logo: "tesla-logo.png" },
    { name: "Netflix", price: 519.07, chart: "netflix-chart.png", logo: "netflix-logo.png" },
    { name: "NVIDIA", price: 751.19, chart: "nvidia-chart.png", logo: "nvidia-logo.png" },
];

  return (
    <>
      <Layout>
      <div className="pricing">
      <div className="stock-cards-container">
            {stockData.map((stock, index) => (
                <div className="stock-card" key={index}>
                    <div className="stock-header">
                        <img src={stock.logo} alt={`${stock.name} logo`} className="stock-logo" />
                        <h2>{stock.name}</h2>
                    </div>
                    <p>Price: ${stock.price.toFixed(2)}</p>
                    <div className="chart-placeholder">
                        <img src={stock.chart} alt={`${stock.name} chart`} />
                    </div>
                    <div className="button-group">
                        <button className="btn btn-primary">Buy</button>
                        <button className="btn btn-danger">Sell</button>
                        <a href={stock.link}>See More...</a>
                    </div>
                </div>
            ))}
        </div>
      </div>
      </Layout>
    </>
  );
}
