import React from "react";
import "../../styles/Transaction.css";
import { Container, Table } from "react-bootstrap";
import Layout from "../../components/Layout";

const Transaction = ({ transactions = [] }) => {
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
                {Array.isArray(transactions) && transactions.length > 0 ? (
                  transactions.map((transaction, index) => (
                    <tr key={transaction.id}>
                      <td>{index + 1}</td>
                      <td>{transaction.date}</td>
                      <td>{transaction.stock}</td>
                      <td>{transaction.amount.toFixed(2)}</td>
                      <td>{transaction.type}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="text-center">No transactions yet.</td>
                  </tr>
                )}
              </tbody>
            </Table>
          </Container>
        </div>
      </Layout>
    </>
  );
};

export default Transaction;
