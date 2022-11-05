import React, {Component} from "react";
import ReactDOM from "react-dom";
import uniqid from "uniqid";

class Work extends Component {
  constructor(props) {
    super(props)
  }



  render() {

      const changeEvent = this.props.changeEvent;
      const work_state = this.props.work;
      const workplaces = this.props.list;
      const addEvent = this.props.addEvent;

      return(
        <div>
          <fieldset>
            <legend>Work Experience</legend>
            <div id = "work-wrapper" class = "hidden">
              <label htmlFor="work-name">Company name:</label>
              <input type="text" id="work-name" name="name" required data-html_state = "work" value={work_state.name} onChange = {changeEvent}></input>

              <label htmlFor="work-position">Position:</label>
              <input type="text" id="work-position" name="position" value={work_state.position} required data-html_state = "work" onChange={changeEvent}></input>

              <label htmlFor="work-start">Start date:</label>
              <input type="date" id="work-start" name="start_date" value={work_state.start_date} required data-html_state = "work" onChange={changeEvent}></input>

              <label htmlFor="work-end">End date:</label>
              <input type="date" id="work-end" name="end_date" value={work_state.end_date} required data-html_state = "work" onChange={changeEvent}></input>

              <label htmlFor="work-desc">Description</label>
              <textarea id="work-desc" name="description" value={work_state.description} data-html_state = "work" onChange={changeEvent} />
            </div>
            <button type = "button" data-html_state = "work" data-state_array = "works" onClick={addEvent}>+Add</button>

                <div id="education-list"> 
                  <table>
                    <tr>
                      <th>Workplace name</th>
                      <th>Position</th>
                      <th>Start-date</th>
                      <th>End-date</th>
                      <th>Description</th>

                    </tr>
                    
                    {workplaces.map((workplace) => (
                      <tr>
                        <td key = {workplace.id}>{workplace.name}</td>
                        <td key = {workplace.id}>{workplace.position}</td>
                        <td key = {workplace.id}>{workplace.start_date}</td>
                        <td key = {workplace.id}>{workplace.end_date}</td>
                        <td key = {workplace.id}>{workplace.description}</td>
                        <button data-worplace-id = {workplace.id}>Edit</button>
                        <button data-workplace-id = {workplace.id}>Delete</button>
                      </tr>
                    ))}

                  </table>

          </div>
            </fieldset>
      </div>
    )}
}

export default Work