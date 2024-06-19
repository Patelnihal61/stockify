import React from "react";
import "../../styles/Transaction.css";
import { Container, Table } from "react-bootstrap";
import Layout from "../../components/Layout";

const transactions = [
  { id: 1, date: "2024-06-19", stock: "Apple", amount: 1000, type: "Buy" },
  { id: 2, date: "2024-06-20", stock: "Microsoft", amount: 1500, type: "Sell" },
  { id: 3, date: "2024-06-21", stock: "Google", amount: 800, type: "Buy" },
  { id: 4, date: "2024-06-22", stock: "Amazon", amount: 1200, type: "Sell" },
  { id: 5, date: "2024-06-23", stock: "Tesla", amount: 2000, type: "Buy" },
];

export default function Transaction() {
  return (
    <>
      <Layout>
      <div className="transaction">
      <Container className="mt-4">
        <h2 className="mb-4">Transaction History</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Date</th>
              <th>Stock</th>
              <th>Amount ($)</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr key={transaction.id}>
                <td>{index + 1}</td>
                <td>{transaction.date}</td>
                <td>{transaction.stock}</td>
                <td>{transaction.amount}</td>
                <td>{transaction.type}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
      </div>
      </Layout>
    </>
  );
}
