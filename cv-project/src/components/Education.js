import React, {useState} from "react";
import ReactDOM from "react-dom";
import uniqid from "uniqid";
import EditPopup from "./editPopUp";


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


const Education = (props) => {
  const [education,setEducation] = useState(
    {
          id : uniqid(),
          name: "",
          type: "",
          course: "",
          start_date: "",
          end_date: "",
          seen: false,
        },
  )

    const handleChange = (e) => {
    const {name,value} = e.target;
    setEducation((prevState) => ({
      ...prevState,
      [name]: value,
    }),console.log([education[name]]))
  }

  const past_education = props.educations



   return(
        <div class = "section-wrapper" id="work-wapper">
          <fieldset>
            <legend>Education</legend>
            <div id = "education-wrapper" class = "hidden">
                <label htmlFor="school-name">School name: </label>
                <input type="text" id="school-name"  name="name" value={education.name} onChange = {handleChange}></input>
                <label htmlFor="school-type">School type:</label>
                <select name="type" id="school-type" value = {education.type} onChange = {handleChange}>
                {school_types.map((school) => (
                    <option value={school.value}>{school.label}</option>
                ))}
                </select>

                <label htmlFor="school-name">Course type: </label>
                <input type="text" id="course-name"  name="course" value = {education.course} onChange = {handleChange}></input>

                <label htmlFor="school-start">Start date:</label>
                <input type="date" id="school-start"  name="start_date" value={education.start_date} onChange = {handleChange}></input>

                <label htmlFor="school-end">End Date:</label>
                <input type="date" id="school-end" name="end_date" value={education.end_date} onChange = {handleChange}></input>
            </div>
            <button type = "button">+Add</button>

                <div id="education-list" class = "cv-table">
                  <table>
                    <tr>
                      <th>School name</th>
                      <th>School type</th>
                      <th>Course</th>
                      <th>Start-date</th>
                      <th>End-date</th>
                    </tr>
                    
                    {past_education ? past_education.map((education) => (
                      <tr>
                        <td>{education.name}</td>
                        <td>{education.type}</td>
                        <td>{education.course}</td>
                        <td>{education.start_date}</td>
                        <td>{education.end_date}</td>
                        <td><button type="button">Edit</button></td>
                        <td><button type = "button">Delete</button></td>
                        
                    </tr>
                    )): null}

                  </table>

          </div>
          </fieldset>

        </div>
    )
}
    
/*
class Education extends Component {
  constructor(props) {
    super(props)
  }



  render() {

    const {changeEvent,addEvent,deleteEvent,togglePop,getStateItem,editEvent} = this.props;

    const past_education = this.props.list;
    const state = this.props.education;
    const school_types = this.props.schoolTypes;
  


      return(
        <div class = "section-wrapper" id="work-wapper">
          <fieldset>
            <legend>Education</legend>
            <div id = "education-wrapper" class = "hidden">
                <label htmlFor="school-name">School name: </label>
                <input type="text" id="school-name"  name="name" value={state.name} data-html_state = "education" onChange={changeEvent}></input>

                <label htmlFor="school-type">School type:</label>
                <select name="type" id="school-type"  value={state.type} form = "cv-form" data-html_state = "education" onChange={changeEvent}>
                {school_types.map((school) => (
                    <option value={school.value}>{school.label}</option>
                ))}
                </select>

                <label htmlFor="school-name">Course type: </label>
                <input type="text" id="course-name" value = {state.course} name="course"   data-html_state = "education" onChange={changeEvent}></input>

                <label htmlFor="school-start">Start date:</label>
                <input type="date" id="school-start" value = {state.start_date} name="start_date"  data-html_state = "education" onChange={changeEvent}></input>

                <label htmlFor="school-end">End Date:</label>
                <input type="date" id="school-end" name="end_date" value={state.end_date}  data-html_state = "education" onChange={changeEvent}></input>
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
                        <td>{education.name}</td>
                        <td>{education.type}</td>
                        <td>{education.course}</td>
                        <td>{education.start_date}</td>
                        <td>{education.end_date}</td>
                        <td><button type="button" data-state_id = {education.id} data-state_array = "educations" onClick={(e) => togglePop(education.id,"educations")}>Edit</button></td>
                        <td><button type = "button" data-state_id = {education.id} data-state_array = "educations">Delete</button></td>
                        {education.seen ? <EditPopup closePopup={(e) => togglePop(education.id,"educations")} stateItem ={education} addEvent = {addEvent} toggleEvent = {togglePop} handleEdit = {editEvent} mode = "education" /> : null}
                    </tr>
                    ))}

                  </table>

          </div>
          </fieldset>

        </div>
    )}
}

*/

export default Education