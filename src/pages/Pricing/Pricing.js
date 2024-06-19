import React, { useEffect, useState } from "react";
import "../../styles/Pricing.css";
import Layout from "../../components/Layout";
import { Card, Button, Container } from "react-bootstrap";
import Transaction from "../Transaction/Transaction";

const Pricing = () => {
  const [stockData, setStockData] = useState([]);
  const [balance, setBalance] = useState(10000);
  const [error, setError] = useState(null);
  const [transactions, setTransactions] = useState([]);

  const api_key = "cppfbopr01qi7uaihi6gcppfbopr01qi7uaihi70";
  const symbols = ["AAPL", "MSFT", "GOOGL", "AMZN", "FB", "TSLA", "NFLX", "NVDA"];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const requests = symbols.map(symbol =>
          fetch(`https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${api_key}`)
            .then(response => response.json())
            .then(data => ({
              symbol,
              price: data.c,
              logo: `${symbol.toLowerCase()}-logo.png`, // Placeholder for logos
              chart: `${symbol.toLowerCase()}-chart.png` // Placeholder for charts
            }))
        );

        const results = await Promise.all(requests);
        setStockData(results);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);


  const [ownedStocks, setOwnedStocks] = useState({}); // To track owned stocks and their amounts

  const handleBuy = (stock) => {
    if (balance >= stock.price) {
      const transaction = {
        id: transactions.length + 1,
        date: new Date().toISOString().split('T')[0],
        stock: stock.symbol,
        amount: stock.price,
        type: "Buy"
      };
      setTransactions([...transactions, transaction]);
      setBalance(balance - stock.price);

      // Update owned stocks
      const updatedOwnedStocks = { ...ownedStocks };
      if (updatedOwnedStocks[stock.symbol]) {
        updatedOwnedStocks[stock.symbol] += stock.price;
      } else {
        updatedOwnedStocks[stock.symbol] = stock.price;
      }
      setOwnedStocks(updatedOwnedStocks);
    } else {
      alert("Insufficient balance!");
    }
  };

  const handleSell = (stock) => {
    const transaction = {
      id: transactions.length + 1,
      date: new Date().toISOString().split('T')[0],
      stock: stock.symbol,
      amount: stock.price,
      type: "Sell"
    };

    // Check if user can sell this stock
    if (ownedStocks[stock.symbol] && ownedStocks[stock.symbol] >= stock.price) {
      setTransactions([...transactions, transaction]);
      setBalance(balance + stock.price);

      // Update owned stocks
      const updatedOwnedStocks = { ...ownedStocks };
      updatedOwnedStocks[stock.symbol] -= stock.price;
      setOwnedStocks(updatedOwnedStocks);
    } else {
      alert(`You can't sell ${stock.symbol} as you haven't bought it previously or you don't have enough quantity.`);
    }
  };

  return (
    <>
      <Layout>
      <div className="pricing">
          <div className="balance-info">
            <h3>Total Balance: ${balance.toFixed(2)}</h3>
          </div>
          <Container fluid>
            <div className="stock-cards-container d-flex flex-wrap justify-content-center">
              {stockData.map((stock, index) => (
                <Card className="stock-card m-2" key={index}>
                  <Card.Body>
                    <div className="stock-header d-flex justify-content-between align-items-center">
                      <h2>{stock.symbol}</h2>
                      <p>Price: ${stock.price.toFixed(2)}</p>
                    </div>
                    <div className="button-group text-center mt-3">
                      <Button variant="primary" onClick={() => handleBuy(stock)}>Buy</Button>
                      <Button variant="danger" onClick={() => handleSell(stock)}>Sell</Button>
                    </div>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </Container>
        </div>
        <Transaction transactions={transactions} />
      </Layout>
    </>
  );
};

export default Pricing;
