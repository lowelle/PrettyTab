import * as React from 'react';


export default class Today extends React.Component {
	constructor(props) {
		super(props);
    this.state = {
      date: new Date()
    };
    let today;
  }

  componentDidMount() {
    setInterval(() => this.setState({ date: new Date() }), 1000);
  }

	today = this.state.date
              .toString()
              .split(" ")
              .slice(0, 3)
              .join(" ")
              .split();

     today.splice(1,0, ',');
     today.join



	render() {
		return <div> {today} </div>
		(

			)
	}
}