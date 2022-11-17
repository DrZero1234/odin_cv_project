import React, {Component} from "react";
import ReactDOM from "react-dom";
import uniqid from "uniqid";

class Education extends Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      id : uniqid(),
      name: "",
      type: "",
      course: "",
      start_date: "",
      end_date: "",
      edit: false
    }

  }

  handleChange(event) {
    const {name,value} = event.target;
    this.setState(prevState => ({
        ...prevState,
        [name]: value 
    }),console.log(this.state))
  }



  render() {

    const {handleChange} = this;

    const school_list = this.props.school_list

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
  
      return(
        <div class = "section-wrapper" id="work-wapper">
          <fieldset>
            <legend>Education</legend>
            <div id = "education-wrapper" class = "hidden">
                <label htmlFor="school-name">School name: </label>
                <input type="text" id="school-name" required name="name" onChange={handleChange}></input>

                <label htmlFor="school-type">School type:</label>
                <select name="type" id="school-type" onChange={handleChange}>
                {school_types.map((school) => (
                    <option value={school.value}>{school.label}</option>
                ))}
                </select>

                <label htmlFor="school-name">Course type: </label>
                <input type="text" name="course" onChange={handleChange}></input>

                <label htmlFor="school-start">Start date:</label>
                <input type="date"  name="start_date" onChange={handleChange}></input>

                <label htmlFor="school-end">End Date:</label>
                <input type="date"name="end_date" onChange={handleChange}></input>
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

                   {/*Get through the educations array*/}

                  </table>

          </div>
          </fieldset>

        </div>
    )}
}

export default Education