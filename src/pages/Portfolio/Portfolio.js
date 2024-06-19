import React from "react";
import Layout from "../../components/Layout";
import "../../styles/Portfolio.css";
import { Container, Table } from "react-bootstrap";

const portfolio = [
  { id: 1, name: "Apple", quantity: 10, avgCost: 150, currentPrice: 145.09 },
  { id: 2, name: "Microsoft", quantity: 8, avgCost: 160, currentPrice: 265.51 },
  { id: 3, name: "Google", quantity: 5, avgCost: 300, currentPrice: 2734.87 },
  { id: 4, name: "Amazon", quantity: 6, avgCost: 2800, currentPrice: 3441.85 },
  { id: 5, name: "Tesla", quantity: 12, avgCost: 700, currentPrice: 699.1 },
];


  // Calculate overall profit and loss
  const overallProfitLoss = portfolio.reduce(
    (acc, item) => {
      const totalValue = item.quantity * item.currentPrice;
      const totalCost = item.quantity * item.avgCost;
      acc.profit += totalValue - totalCost;
      return acc;
    },
    { profit: 0 }
  );

export default function Portfolio() {
  return (
    <>
      <Layout>
        <div className="portfolio">
          <Container className="mt-4">
            <h2 className="mb-4">My Portfolio</h2>
            <div className="d-flex justify-content-end mb-2">
              <div className="text-end">
                <h3 className="mb-1">
                  Overall Profit: $
                  {overallProfitLoss.profit >= 0
                    ? overallProfitLoss.profit.toFixed(2)
                    : (0).toFixed(2)}
                </h3>
                <h3 className="mb-0">
                  Overall Loss: $
                  {overallProfitLoss.profit < 0
                    ? (-overallProfitLoss.profit).toFixed(2)
                    : (0).toFixed(2)}
                </h3>
              </div>
            </div>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Stock Name</th>
                  <th>Quantity</th>
                  <th>Avg Cost ($)</th>
                  <th>Current Price ($)</th>
                  <th>Total Value ($)</th>
                  <th>Profit/Loss ($)</th>
                </tr>
              </thead>
              <tbody>
                {portfolio.map((item, index) => {
                  // Calculate total value of holding
                  const totalValue = item.quantity * item.currentPrice;
                  // Calculate profit or loss
                  const profitLoss = totalValue - item.quantity * item.avgCost;
                  return (
                    <tr key={item.id}>
                      <td>{index + 1}</td>
                      <td>{item.name}</td>
                      <td>{item.quantity}</td>
                      <td>{item.avgCost.toFixed(2)}</td>
                      <td>{item.currentPrice.toFixed(2)}</td>
                      <td>{totalValue.toFixed(2)}</td>
                      <td
                        className={
                          profitLoss >= 0 ? "text-success" : "text-danger"
                        }
                      >
                        {profitLoss.toFixed(2)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Container>
        </div>
      </Layout>
    </>
  );
}
