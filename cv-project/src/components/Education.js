import React, {Component} from "react";
import ReactDOM from "react-dom";
import uniqid from "uniqid";

class Education extends Component {
  constructor(props) {
    super(props)
  }



  render() {

    const past_education = this.props.list;
    const state = this.props.education;
    const changeEvent = this.props.changeEvent;
    const addEvent = this.props.addEvent;
    const school_types = this.props.schoolTypes;
  


      return(
        <div class = "section-wrapper">
          <fieldset>
            <legend>Education</legend>
            <div id = "education-wrapper" class = "hidden">
                <label htmlFor="school-name">School name: </label>
                <input type="text" id="school-name" required name="name" value={state.name} data-html_state = "education" onChange={changeEvent}></input>

                <label htmlFor="school-type">School type:</label>
                <select name="type" id="school-type"  value={state.type} form = "cv-form" data-html_state = "education" onChange={changeEvent}>
                {school_types.map((school) => (
                    <option value={school.value}>{school.label}</option>
                ))}
                </select>

                <label htmlFor="school-name">Course type: </label>
                <input type="text" id="course-name" value = {state.course} name="course"  required data-html_state = "education" onChange={changeEvent}></input>

                <label htmlFor="school-start">Start date:</label>
                <input type="date" id="school-start" value = {state.start_date} name="start_date" required data-html_state = "education" onChange={changeEvent}></input>

                <label htmlFor="school-end">End Date:</label>
                <input type="date" id="school-end" name="end_date" value={state.end_date} required data-html_state = "education" onChange={changeEvent}></input>
            </div>
            <button type = "button" data-html_state = "education" data-state_array = "educations" onClick = {addEvent}>+Add</button>

                <div id="education-list" class = "cv-table">
                  <table>
                    <tr>
                      <th>School name</th>
                      <th>School type</th>
                      <th>Course</th>
                      <th>Start-date</th>
                      <th>End-date</th>
                    </tr>
                    
                    {past_education.map((education) => (
                      <tr>
                        <td key = {uniqid()}>{education.name}</td>
                        <td key = {uniqid()}>{education.type}</td>
                        <td key = {uniqid()}>{education.course}</td>
                        <td key = {uniqid()}>{education.start_date}</td>
                        <td key = {uniqid()}>{education.end_date}</td>
                        <td><button type="button" data-state_id = {education.id} data-state_array = "educations">Edit</button></td>
                        <td><button type = "button" data-state_id = {education.id} data-state_array = "educations">Delete</button></td>
                    </tr>
                    ))}

                  </table>

          </div>
          </fieldset>

        </div>
    )}
}

export default Education