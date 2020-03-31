/* global chrome */
import "./App.css";
import Clock from "react-clock";
import React from "react";
//import Calendar from "react-calendar";
import Weather from "./Weather.js";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { usePosition } from "use-position";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      //text
      text: "",
      //weather...
      city: "",
      temp: "",
      desc: "",
      iconid: "",
      lat: "",
      long: "",
      getData: true
    };
    this.getDate = this.getDate.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getLocation = this.getLocation.bind(this);
    this.getCoordinates = this.getCoordinates.bind(this);
  }
  // refreshes date every second so that the second hand ticks correctly on the clock...
  componentDidMount() {
    setInterval(
      () => this.setState({ date: new Date(), count: 1, getData: false }),
      1000
    );
    /* let defaultText = "";
    chrome.storage.sync.get({ text: defaultText }, function(data) {
      // data.links will be either the stored value, or defaultValue if nothing is set
      chrome.storage.sync.set({ text: data.text }, function() {
        // The value is now stored, so you don't have to do this again
      });
    });*/

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
      long: position.coords.longitude
    });
  }

  ///for the textarea....
  handleChange(value) {
    this.setState({ text: value });
    chrome.storage.sync.set({ text: value }, function() {
      console.log("Value is set to " + value);
    });
  }

  render() {
    return (
      <div className="container">
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
        </div>
      </div>
    );
  }
}

export default Main;
