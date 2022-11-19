import React, {Component} from "react";
import ReactDOM from "react-dom";

export default class EditPopup extends Component {

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.state = this.props.stateItem
    }

    handleChange(event) {
        this.setState(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        }),console.log(this.state))
    }
    

    render() {
        const state = this.state
        const {closePopup,stateItem,addEvent,toggleEvent,handleEdit,mode} = this.props;

         const school_types = [
      {
        label: "Primary School",
        value: "primary"
      },
    
      {
        label: "High School",
        value: "highschool",
      },
    
      {
        label: "College",
        value: "college",
      },
    
      {
        label: "University",
        value: "university",
      },
    
      {
        label: "Other",
        value: "other",
      },
    ]


        if (this.props.mode==="work") {
            return(
            <div>
                <div className="modal">
                <div className="modal-content">
                    <span className="close" onClick={closePopup}>&times;</span>
                    <form>
                        <label htmlFor="work-name-edit">Company name:</label>
                        <input type="text" id="work-name-edit" name="name"  data-html_state = "work" value={state.name} onChange = {this.handleChange}></input>

                        <label htmlFor="work-position-edit">Position:</label>
                        <input type="text" id="work-position-edit" name="position" value={state.position}  data-html_state = "work" onChange = {this.handleChange}></input>

                        <label htmlFor="work-start-edit">Start date:</label>
                        <input type="date" id="work-start-edit" name="start_date" value={state.start_date}  data-html_state = "work" onChange = {this.handleChange}></input>

                        <label htmlFor="work-end-edit">End date:</label>
                        <input type="date" id="work-end-edit" name="end_date" value={state.end_date}  data-html_state = "work" onChange = {this.handleChange}></input>

                        <label htmlFor="work-desc-edit">Description</label>
                        <textarea id="work-desc-edit" name="description" value={state.description} data-html_state = "work" onChange = {this.handleChange} />

                        <input type="button" onClick={(e) => handleEdit(stateItem,state,"works")} value="Confirm"></input>
                        <input type="button" onClick = {closePopup} value="Cancel"></input>
                    </form>
                </div>
            </div>
            </div>            
        )
        } else if (mode === "education") {
            return(
                <div>
                <div className="modal">
                <div className="modal-content">
                    <span className="close" onClick={closePopup}>&times;</span>
                    <form>
                        <label htmlFor="school-name-edit">School name:</label>
                        <input type="text" id="school-name-edit" name="name"  data-html_state = "education" value={state.name} onChange = {this.handleChange}></input>

                        <select name="type" id="school-type"  value={state.type} form = "cv-form" data-html_state = "education" onChange={this.handleChange}>
                            {school_types.map((school) => (
                                <option value={school.value}>{school.label}</option>
                            ))}
                        </select>
                        
                         <label htmlFor="education-course-edit">Course:</label>
                        <input type="text" id="education-course-edit" name="course"  data-html_state = "education" value={state.course} onChange = {this.handleChange}></input>


                        <label htmlFor="education-start-edit">Start date:</label>
                        <input type="date" id="education-start-edit" name="start_date" value={state.start_date}  data-html_state = "education" onChange = {this.handleChange}></input>

                        <label htmlFor="education-end-edit">End date:</label>
                        <input type="date" id="education-end-edit" name="end_date" value={state.end_date}  data-html_state = "education" onChange = {this.handleChange}></input>

                        <input type="button" onClick={(e) => handleEdit(stateItem,state,"educations")} value="Confirm"></input>
                        <input type="button" onClick = {closePopup} value="Cancel"></input>
                    </form>
                </div>
            </div>
            </div>            
            )
        }
        
    }
}