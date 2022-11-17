import React, {Component} from "react";
import ReactDOM from "react-dom";

export default class EditPopup extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {closePopup,stateItem,addEvent,changeEvent} = this.props;
        console.log(stateItem)

        return(
            <div>
                <div className="modal">
                <div className="modal-content">
                    <span className="close" onClick={closePopup}>&times;</span>
                    <form>
                        <label htmlFor="work-name-edit">Company name:</label>
                        <input type="text" id="work-name-edit" name="name"  data-html_state = "work" value={stateItem.name} onChange = {changeEvent}></input>

                        <label htmlFor="work-position-edit">Position:</label>
                        <input type="text" id="work-position-edit" name="position" value={stateItem.position}  data-html_state = "work" onChange = {changeEvent}></input>

                        <label htmlFor="work-start-edit">Start date:</label>
                        <input type="date" id="work-start-edit" name="start_date" value={stateItem.start_date}  data-html_state = "work" onChange = {changeEvent}></input>

                        <label htmlFor="work-end-edit">End date:</label>
                        <input type="date" id="work-end-edit" name="end_date" value={stateItem.end_date}  data-html_state = "work" onChange = {changeEvent}></input>

                        <label htmlFor="work-desc-edit">Description</label>
                        <textarea id="work-desc-edit" name="description" value={stateItem.description} data-html_state = "work" onChange = {changeEvent} />

                        <input type="submit" onClick={addEvent}></input>
                    </form>
                </div>
            </div>
            </div>            
        )
    }
}