import "./App.css";
import Clock from "react-clock";
import React from "react";
//import Calendar from "react-calendar";
import Weather from "./Weather.js";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { usePosition } from "use-position";
import Drop from "./mydrop.js";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      //text
      text: localStorage.getItem("text") ? localStorage.getItem("text") : "",
      //weather...
      city: "",
      temp: "",
      desc: "",
      iconid: "",
      lat: "",
      long: "",
      getData: 0,
      invert: true,
    };
    this.getDate = this.getDate.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getLocation = this.getLocation.bind(this);
    this.getCoordinates = this.getCoordinates.bind(this);
    this.changeTheme = this.changeTheme.bind(this);
    this.dropDown = this.dropDown.bind(this);
  }

  // refreshes date every second so that the second hand ticks correctly on the clock...
  componentDidMount() {
    setInterval(
      () =>
        this.setState({
          date: new Date(),
          count: 1,
          getData: this.getData + 1,
          text: localStorage.getItem("text"),
        }),
      1000
    );

    console.log("requesting location...");

    this.getLocation();
    console.log("location request complete");
  }
  // creating a function to display the date on top of box 1
  getDate() {
    let today = this.state.date
      .toString()
      .split(" ")
      .slice(0, 3)
      .join(" ")
      .split(" ");

    today.splice(1, 0, ",");
    today = today.join(" ");

    //fixing space between day and ,

    today = today.replace(" ,", ",");

    return <div>{today}</div>;
  }

  changeTheme() {
    console.log("change theme function is working...");
    !this.state.invert
      ? (document.getElementById("container").style.background = "black")
      : (document.getElementById("container").style.background = "grey");
    console.log("hue is being changed");
    this.setState({ invert: !this.state.invert });
  }

  getLocation() {
    if (navigator.geolocation) {
      console.log("getting location...");
      navigator.geolocation.getCurrentPosition(this.getCoordinates);
    } else {
      alert(
        "please enable location if you would like to see current weather updates"
      );
    }
  }

  getCoordinates(position) {
    console.log("setting latitude and longitude...");
    this.setState({
      lat: position.coords.latitude,
      long: position.coords.longitude,
    });
  }

  //theme dropdown JS

  /* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
  dropDown(event) {
    console.log("dropdown function is working...");
    document.getElementById("myDropdown").classList.toggle("show");
    if (!event.target.matches(".dropbtn")) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  }

  // Close the dropdown if the user clicks outside of it

  ///for the textarea....
  handleChange(x) {
    localStorage.setItem("text", x);
  }

  render() {
    return (
      <body>
        <div id="container">
          {/*            Clock // Date             */}
          <div className="box1">
            <div className="date-title">{this.getDate()}</div>
            <Clock
              size="450"
              value={this.state.date}
              className="front"
              renderNumbers={true}
            />
            {/*<Calendar value={this.state.date} className="calendar" />*/}
          </div>
          <div className="box2">
            {/*              TEXT                */}
            <ReactQuill
              className="textbox"
              value={this.state.text}
              onChange={this.handleChange}
              theme="snow"
            />
          </div>
          <div className="box3">
            {/*               WEATHER                  */}
            <div>
              <Weather
                getData={this.state.getData}
                city={this.state.city}
                temp={this.state.temp}
                desc={this.state.desc}
                iconid={this.state.iconid}
                lat={this.state.lat}
                long={this.state.long}
              />
            </div>
            <Drop></Drop>
          </div>
        </div>
      </body>
    );
  }
}

export default Main;
