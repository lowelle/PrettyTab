import React from "react";

class Drop extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			black: true,
			white: false,
			cyan: false,
			lime: false,
			purple: false,
			orange: false,
		};

		//various color theme button bindings

		this.themeBlack = this.themeBlack.bind(this);
		this.themeWhite = this.themeWhite.bind(this);
		this.themeCyan = this.themeCyan.bind(this);
		this.themeLime = this.themeLime.bind(this);
		this.themePurple = this.themePurple.bind(this);
		this.themeOrange = this.themeOrange.bind(this);
	}
	//ignore this for now.... im keeping this in here in case i realize i do need it, but as of now i dont think i do
	//but still i don't want to delete the code in case i come back
	componentDidUpdate() {
		//current state
		let current;
		if (this.state.black) {
			current = "black";
			document.getElementById("container").style.background = "black";
		}
		if (this.state.white) {
			current = "white";
			document.getElementById("container").style.background = "white";
		}
		if (this.state.cyan) {
			current = "cyan";
			document.getElementById("container").style.background = "cyan";
		}
		if (this.state.lime) {
			current = "lime";
			document.getElementById("container").style.background = "lime";
		}
		if (this.state.purple) {
			current = "purple";
			document.getElementById("container").style.background = "purple";
		}
		if (this.state.orange) {
			current = "orange";
			document.getElementById("container").style.background = "orange";
		}
		//print current state to the console....
		console.log("current state is: ", current);
	}

	//handle changing theme to black
	themeBlack() {
		this.state.black
			? console.log("current theme is black")
			: console.log("theme is changed to black");

		this.setState({
			black: true /*change theme to black*/,
			white: false,
			cyan: false,
			lime: false,
			purple: false,
			orange: false /*makes sure all the other themes are set to false*/,
		});
	}
	//handle changing theme to white
	themeWhite() {
		this.state.white
			? console.log("current theme is white")
			: console.log("theme is changed to white");
		this.setState({
			white: true /*change theme to white*/,
			black: false,
			cyan: false,
			lime: false,
			purple: false,
			orange: false /*makes sure all the other themes are set to false*/,
		});
	}
	//handle changing theme to cyan
	themeCyan() {
		this.state.cyan
			? console.log("current theme is cyan")
			: console.log("theme is changed to cyan");

		this.setState({
			cyan: true /*change theme to white*/,
			black: false,
			white: false,
			lime: false,
			purple: false,
			orange: false /*makes sure all the other themes are set to false*/,
		});
	}
	//handle changing theme to lime
	themeLime() {
		this.state.lime
			? console.log("current theme is lime")
			: console.log("theme is changed to lime");
		this.setState({
			lime: true /*change theme to white*/,
			black: false,
			white: false,
			cyan: false,
			purple: false,
			orange: false /*makes sure all the other themes are set to false*/,
		});
	}
	//handle changing theme to purple
	themePurple() {
		this.state.purple
			? console.log("current theme is purple")
			: console.log("theme is changed to purple");
		this.setState({
			purple: true /*change theme to white*/,
			black: false,
			lime: false,
			white: false,
			cyan: false,
			orange: false /*makes sure all the other themes are set to false*/,
		});
	}
	//handle changing theme to orange
	themeOrange() {
		this.state.orange
			? console.log("current theme is orange")
			: console.log("theme is changed to orange");
		this.setState({
			orange: true /*change theme to white*/,
			black: false,
			cyan: false,
			lime: false,
			purple: false,
			white: false /*makes sure all the other themes are set to false*/,
		});
	}

	render() {
		return (
			<div className="mydrop theme">
				<div className="themetext">theme:</div>
				<button className="mydrop" onClick={this.themeBlack}>
					Black
				</button>
				<button className="mydrop" onClick={this.themeWhite}>
					White
				</button>
				<button className="mydrop" onClick={this.themeCyan}>
					Cyan
				</button>
				<button className="mydrop" onClick={this.themeLime}>
					Lime
				</button>
				<button className="mydrop" onClick={this.themePurple}>
					Purple
				</button>
				<button className="mydrop" onClick={this.themeOrange}>
					Orange
				</button>
			</div>
		);
	}
}

export default Drop;
