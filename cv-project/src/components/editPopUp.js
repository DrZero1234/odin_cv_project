import React, {Component} from "react";
import ReactDOM from "react-dom";

export default class EditPopup extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="modal">
                <div className="modal-content">
                    <span className="close" onClick={this.props.closePopup}>&times;</span>
                    <p>I am a popup</p>
                </div>
            </div>
        )
    }
}