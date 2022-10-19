import React from "react";
import "./style.css";

function App() {
  return (
    <div className="main">
      <div className="bg"></div>
      <div className="f">
        <div className="f-text">
          <h1 className="f-title">Explore more places</h1>
          <h3 className="f-more">With tearex tour</h3>
          <a className="f-btn">
            More <span>→</span>
          </a>
        </div>
      </div>
      <div className="s">
        <h1 className="s-title">Places</h1>
        <div className="card s-1">
          <div className="img img-1"></div>
          <h3>Mountain</h3>
          <p>a beautiful place you can travel to and make good memories</p>
        </div>
        <div className="card s-2">
          <div className="img img-2"></div>
          <h3>Mountain</h3>
          <p>a beautiful place you can travel to and make good memories</p>
        </div>
        <div className="card s-3">
          <div className="img img-3"></div>
          <h3>Mountain</h3>
          <p>a beautiful place you can travel to and make good memories</p>
        </div>
        <div className="card s-4">
          <div className="img img-1"></div>
          <h3>Mountain</h3>
          <p>a beautiful place you can travel to and make good memories</p>
        </div>
        <div className="card s-5">
          <div className="img img-2"></div>
          <h3>Mountain</h3>
          <p>a beautiful place you can travel to and make good memories</p>
        </div>
        <div className="card s-6">
          <div className="img img-3"></div>
          <h3>Mountain</h3>
          <p>a beautiful place you can travel to and make good memories</p>
        </div>
      </div>
      <div className="t">
        <div className="t-text">
          <h1 className="t-title">Order Now</h1>
          <p className="t-more">
            If you order until Dec 18 you will get{" "}
            <span className="off">200%</span> off{" "}
          </p>
        </div>
        <div className="t-img">
          <h1 className="t-img-title">200%</h1>
        </div>
      </div>
      <div className="c">
        <h1 className="c-title">Contact Us</h1>
        <div className="contact">
          <h3 className="c-th">Name</h3>
          <input placeholder="Type Your Name" type="text" className="name" />
          <h3 className="c-th">Email</h3>
          <input
            placeholder="Type Your Email Address"
            type="text"
            className="name"
          />
          <h3 className="c-th">Message</h3>
          <textarea
            placeholder="Type Your Message"
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <a href="" className="c-btn">
            Submit
          </a>
        </div>
      </div>
      <footer>
        <h1>Made By TeaRex</h1>
        <p>tearex05@yahoo.com</p>
      </footer>
    </div>
  );
}

export default App;
