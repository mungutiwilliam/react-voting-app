import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    Outlet
  } from "react-router-dom";

function Landing() {
  return (
    <div className="App">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1616442830389-0ad5a8489dfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>ABC University Voting</h3>
            <button type="button" class="btn btn-warning">
                <Link to="Card">Vote</Link>
            </button>
          </Carousel.Caption>
        </Carousel.Item>
        {<Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/4669103/pexels-photo-4669103.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Third slide"
          />

          <Carousel.Caption>
          <h3>Your Vote Counts</h3>
          <button type="button" class="btn btn-warning">
                <Link to="Card">Vote</Link>
            </button>
          </Carousel.Caption>
        </Carousel.Item>}
        {/* <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/tpostr/image/upload/v1553865337/paparouna/IMG_7615-01.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item> */}
      </Carousel>

      <footer class="footer-distributed">
        <div class="footer-right">
          <a href="#">
            <i class="fa fa-facebook"></i>
          </a>
          <a href="#">
            <i class="fa fa-twitter"></i>
          </a>
          <a href="#">
            <i class="fa fa-linkedin"></i>
          </a>
          <a href="#">
            <i class="fa fa-github"></i>
          </a>
        </div>

        <div class="footer-left">
          <p>Made by Mbugua,William and Ceaser 2022</p>
        </div>
      </footer>
    </div>
  );
}
export default Landing;