import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  Carousel,
} from "react-bootstrap";
import "../../styles/HomeStyle.css";
import StockImage from "../../assets/stock.jpeg";

export default function Section1() {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleChange = (event) => {
    // Remove any non-numeric characters from the input
    const formattedPhoneNumber = event.target.value.replace(/\D/g, "");
    // Ensure the length does not exceed 10 digits
    if (formattedPhoneNumber.length <= 10) {
      setPhoneNumber(formattedPhoneNumber);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted phone number:", phoneNumber);
  };


  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(response => response.json())
      .then(data => {
        const fetchedReviews = data.slice(0, 9);
        setReviews(fetchedReviews);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <>
      {/* First Section */}
      <section className="first-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <h1>Welcome to Virtual Trading Plteform Stockify</h1>
              <br />
              <h4>
                Master the Art of Trading! Experience the Thrill of Live Trading
                with Zero Risk!
              </h4>
              <br />
              <Col>
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="formMobileNumber">
                    <Form.Label>Enter Mobile Number</Form.Label>
                    <div className="phone-no d-flex align-items-center">
                      <Form.Control
                      className="phone-no"
                        type="tel"
                        value={phoneNumber}
                        onChange={handleChange}
                        maxLength={10} 
                        placeholder="+91"
                        required 
                      />
                      <Form.Text className="text-muted">It's Free</Form.Text>
                    </div>
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Sign Up
                  </Button>
                </Form>
              </Col>
            </Col>
            <Col lg={6} className="text-center">
              <img
                src={StockImage}
                alt="Hero"
                className="img-fluid rounded"
                style={{ width: "500px", height: "400px" }}
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* second section */}
      <section className="full-width-section">
        <Container fluid>
          <Row className="align-items-center">
            <Col md={6} className="text-white p-5">
              <h1>Welcome to Our Platform</h1>
              <h3>Traders Practicing, Learning and Loving Us</h3>
              <br />
              <br />
              <h3>Creating Smart & Profitable Traders</h3>
              <ul>
                <li>Trade with virtual money up to 10000$</li>
                <li>
                  Trading environment with near real-time tick-by-tick price
                  data
                </li>
                <li>Trade equities, futures and options</li>
                <li>
                  Smart tools and analytics to help you every step of the way
                </li>
                <li>
                  Basket Orders, Hedge Trading, Options Chain, Screeners and
                  much more
                </li>
                <li>Easy to use platform to help you learn faster</li>
                <li>Test Your Strategies in Real-Market with Virtual Money</li>
                <li>No Fear of Losing Money</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Featured Section */}
      <section className="featured-section bg-light py-5">
        <Container>
          <h2 className="text-center mb-4">Our Features </h2>
          <h5>
            <center>
              Trade like a professional in Stockify. Stockify works as your
              assistant to help you take decisions faster with ease.
            </center>
          </h5>
          <br />
          <h5>
            <center>
              Designed and developed by stock trading veterans to help you
              analyze markets, gain insights, and trade faster for profitable
              trading.
            </center>
          </h5>
          <br />
          <Row>
            <Col md={4}>
              <Card>
                <Card.Body>
                  <Card.Title>Real-Time Market Feed</Card.Title>
                  <Card.Text>
                    Stay updated with the latest market trends and data.
                  </Card.Text>
                  <Button variant="primary">Read More</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Body>
                  <Card.Title>Measure Your Progress</Card.Title>
                  <Card.Text>
                    Track your trading performance and progress over time.
                  </Card.Text>
                  <Button variant="primary">Read More</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Body>
                  <Card.Title>No Risk Of Loss</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Card.Text>
                  <Button variant="primary">Read More</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Body>
                  <Card.Title>Service 2</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Card.Text>
                  <Button variant="primary">Read More</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Body>
                  <Card.Title>Special Offer</Card.Title>
                  <Card.Text>
                    Limited time offer lorem ipsum dolor sit amet.
                  </Card.Text>
                  <Button variant="primary">Shop Now</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Review Section */}
      <section className="testimonials-section py-5">
        <Container>
          <h2 className="text-center mb-4">What Our Clients Say About Us</h2>

          <Carousel data-bs-theme="dark">

          {[0, 3, 6].map((startIdx) => (
            <Carousel.Item key={startIdx}>
              <Row>
                {reviews.slice(startIdx, startIdx + 3).map((review) => (
                  <Col md={4} key={review.id}>
                    <Card className="mb-4">
                      <Card.Body>
                        <Card.Title>{review.name}</Card.Title>
                        <Card.Text>
                          {review.body}
                        </Card.Text>
                        <div>
                          {Array(5).fill().map((_, i) => (
                            <span key={i}>&#9733;</span> // Unicode star character
                          ))}
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
          </Carousel>
        </Container>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section text-center py-5">
        <Container>
          <h2>Ready to Get Started?</h2>
          <p>
            Contact us today to discuss your needs and get a free consultation.
          </p>
          <Button variant="primary">Contact Us</Button>
        </Container>
      </section>
    </>
  );
}
