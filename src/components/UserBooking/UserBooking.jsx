import Footer from "../Footer/Footer";
import HeaderBooking from "../Header/HeaderBooking";

import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import "./UserBooking.scss"
import { Stack } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from "react";
import Moment from 'moment';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function UserBooking() {
  const [bookings, setBookings] = useState([]);

  let requestConfigurationGet = {
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    },
  };
  useEffect(() => {
    fetch(`http://ec2-54-153-58-52.us-west-1.compute.amazonaws.com:9000/bookings`, requestConfigurationGet)
      .then((response) => response.json())
      .then((allBookings) => allBookings.filter((booking) => {
        return filterBookingsByCustomer(booking, localStorage.getItem('customerId'))
      }))
      .then((filteredBookings) => {
        console.log(filteredBookings);
        setBookings(filteredBookings)
      });
  }, []);


  function filterBookingsByCustomer(booking, customerId) {
    return (booking.customer.id == customerId);
  }

  return (
    <>
      <HeaderBooking />
      <div className="booking-title">
        <h1> Minhas reservas</h1>
        <div className="left">
          <Link to={"/"}>
            <BiArrowBack size={40} color="#FBC02D" className="arrowback" />
          </Link>
        </div>
      </div>
      <div className="use-bootstrap">
        <Row>
          {bookings.map((booking, index) => (
            <Col key={index}>
              <Card style={{ width: '15rem', 'borderRadius': '5px', 'border': 'solid 1px #D3D3D3' }} key={index}>
                <Card.Img variant="top" src={booking.product.images[0].url} style={{height: 105}} />
                <Card.Body>
                  <Card.Title> <strong>{booking.product.name}</strong></Card.Title>
                  <Card.Text style={{ 'fontStyle': 'none', 'fontSize': '11.5px' }}>
                    {booking.product.description}
                  </Card.Text>
                  <Card.Subtitle style={{ 'fontStyle': 'none' }} className="mb-3">
                    de <strong> {Moment(booking.pickupDate).format('DD/MM/YYYY - HH:mm')}
                    </strong>
                  </Card.Subtitle>
                  <Card.Subtitle style={{ 'fontStyle': 'none' }} className="mb-3">
                    até <strong>
                      {Moment(booking.dropoffDate).format('DD/MM/YYYY - HH:mm')}
                    </strong>
                  </Card.Subtitle>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      <Footer />
    </>
  )
}