import React, {useState} from "react";
import ReactDOM from "react-dom";
import uniqid from "uniqid";

import EditPopup from "./editPopUp";

const Work = (props) => {
  const [work,setWork] = useState(
    {
          id : uniqid(),
          name: "",
          position: "",
          start_date : "",
          end_date : "",
          description: "",
          seen: false,
    },
  )
  const workplaces = props.workplaces

  console.log(props.workplaces)

        return(
        <div>
          <fieldset>
            <legend>Work Experience</legend>
            <div id = "work-wrapper" class = "hidden">
              <label htmlFor="work-name">Company name:</label>
              <input type="text" id="work-name" name="name"></input>

              <label htmlFor="work-position">Position:</label>
              <input type="text" id="work-position" name="position"></input>

              <label htmlFor="work-start">Start date:</label>
              <input type="date" id="work-start" name="start_date"></input>

              <label htmlFor="work-end">End date:</label>
              <input type="date" id="work-end" name="end_date"></input>

              <label htmlFor="work-desc">Description</label>
              <textarea id="work-desc" name="description"  />
            </div>
            <button type = "button" >+Add</button>
                <div id="work-list" class = "cv-table">
                  
                  <table>
                    <tr>
                      <th>Workplace name</th>
                      <th>Position</th>
                      <th>Start-date</th>
                      <th>End-date</th>
                      <th>Description</th>
                      <td></td>
                      <td></td>
                    </tr>
                     {workplaces ? workplaces.map((workplace) => (
                      <tr key  = {workplace.id} id={workplace.id}>
                        <td>{workplace.name}</td>
                        <td>{workplace.position}</td>
                        <td>{workplace.start_date}</td>
                        <td >{workplace.end_date}</td>
                        <td>{workplace.description}</td>
                        <td><button >Edit</button></td>
                        <td><button>Delete</button></td>
                      </tr>
      )) : null}
              </table>
                </div>

            </fieldset>
      </div>
    )} 

/*

class Work extends Component {
  constructor(props) {
    super(props)
  }



  render() {


      const {changeEvent,addEvent,deleteEvent,togglePop,getStateItem,editEvent} = this.props;
      const work_state = this.props.work;
      const workplaces = this.props.list;

      const workplace_list = workplaces.map((workplace) => {
        const description_text = workplace ? workplace.description : "-";
        <div key = {workplace.id} class = "workplace-item" id = {workplace.id}>
          <span class = "work-detail">{workplace.name}</span>
          <span class = "work-detail">{workplace.position}</span>
          <span class = "work-detail">{workplace.start_date}</span>
          <span class = "work-detail">{workplace.end_date}</span>
          <span class = "work-detail">{description_text}</span>
          <button data-state-id = {workplace.id} type="button">Edit</button>
          <button data-state-id = {workplace.id} type="button">Delete</button>
        </div>
      }) 

      return(
        <div>
          <fieldset>
            <legend>Work Experience</legend>
            <div id = "work-wrapper" class = "hidden">
              <label htmlFor="work-name">Company name:</label>
              <input type="text" id="work-name" name="name"  data-html_state = "work" value={work_state.name} onChange = {changeEvent}></input>

              <label htmlFor="work-position">Position:</label>
              <input type="text" id="work-position" name="position" value={work_state.position}  data-html_state = "work" onChange={changeEvent}></input>

              <label htmlFor="work-start">Start date:</label>
              <input type="date" id="work-start" name="start_date" value={work_state.start_date}  data-html_state = "work" onChange={changeEvent}></input>

              <label htmlFor="work-end">End date:</label>
              <input type="date" id="work-end" name="end_date" value={work_state.end_date}  data-html_state = "work" onChange={changeEvent}></input>

              <label htmlFor="work-desc">Description</label>
              <textarea id="work-desc" name="description" value={work_state.description} data-html_state = "work" onChange={changeEvent} />
            </div>
            <button type = "button" data-html_state = "work" data-state_array = "works" onClick={addEvent}>+Add</button>
                <div id="work-list" class = "cv-table">
                  
                  <table>
                    <tr>
                      <th>Workplace name</th>
                      <th>Position</th>
                      <th>Start-date</th>
                      <th>End-date</th>
                      <th>Description</th>
                      <td></td>
                      <td></td>
                    </tr>
                    {workplaces.map((workplace) => (
                      <tr key  = {workplace.id} id={workplace.id}>
                        <td>{workplace.name}</td>
                        <td>{workplace.position}</td>
                        <td>{workplace.start_date}</td>
                        <td >{workplace.end_date}</td>
                        <td>{workplace.description}</td>
                        <td><button data-state_id = {workplace.id} type="button" data-state_array = "works" onClick={(e) => togglePop(workplace.id,"works")}>Edit</button></td>
                        <td><button data-state_id = {workplace.id} type="button" data-state_array = "works" onClick = {deleteEvent}>Delete</button></td>
                        {workplace.seen ? <EditPopup closePopup={(e) => togglePop(workplace.id,"works")} stateItem ={workplace} addEvent = {addEvent}  toggleEvent = {togglePop} handleEdit = {editEvent} mode = "work" /> : null}
                      </tr>
      ))}
                </table>
                </div>

            </fieldset>
      </div>
    )}
}

*/

export default Work