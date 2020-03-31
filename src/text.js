import { HotKeys } from "react-hotkeys";
import * as React from "react";

class Text extends React.Component {
	construcutor(props) {
		super(props);

		this.state = {
			text: ""
		};

		const handlers = {
			up: event => console.log("up key called")
		};
	}
}
