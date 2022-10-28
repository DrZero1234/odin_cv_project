import "./styles/App.css"
import React, {Component} from "react";




class Personal extends Component {
  constructor() {
    super()
  }

  render() {
    return(
      <div>
        <fieldset>
          <legend>Personal Information</legend>
          <label htmlFor="person-name">Name:</label>
          <input type="text" id="person-name" required></input>

          <label htmlFor="person-birthdate">Date of Birth:</label>
          <input type="date" id="person-birthdate" required></input>

          <label htmlFor="person-phone">Phone number:</label>
          <input type="tel" id="person-phone" required></input>

          <label htmlFor="person-email">Email:</label>
          <input type="email" id="person-email" required></input>
        </fieldset>
      </div>
    )
  }
}

class Education extends Component {
  constructor() {
    super()
  }



  render() {

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
        <div>
          <fieldset>
            <legend>Education</legend>
            <label htmlFor="school-name">School name: </label>
            <input type="text" id="school-name" required></input>

            <label htmlFor="school-type">School type:</label>
            <select name="school-type" id="school-type" form = "cv-form">
              {school_types.map((school) => (
                <option value={school.value}>{school.label}</option>
              ))}
            </select>

            <label htmlFor="school-name">Course type: </label>
            <input type="text" id="course-name" required></input>

            <label htmlFor="school-start">Start date:</label>
            <input type="date" id="school-start" required></input>

            <label htmlFor="school-end">Email:</label>
            <input type="date" id="school-end" required></input>
          </fieldset>
        </div>
    )}
}

class Work extends Component {
  constructor() {
    super()
  }



  render() {

      return(
        <div>
          <fieldset>
            <legend>Work Experience</legend>
            <label htmlFor="work-name">Company name:</label>
            <input type="text" id="work-name" required></input>

            <label htmlFor="work-position">Position:</label>
            <input type="text" id="work-position" required></input>

            <label htmlFor="work-start">Start date:</label>
            <input type="date" id="work-start" required></input>

            <label htmlFor="work-end">End date:</label>
            <input type="date" id="work-end" required></input>

            <label htmlFor="work-desc">Description</label>
            <textarea id="work-desc">   </textarea>
            </fieldset>
      </div>
    )}
}

class App extends Component {
  constructor() {
    super()


  }

  render() {
    return(
      <div>
        <form id="cv-form">
          <div id="personal" class = "cv-section">
            <Personal />
          </div>
          <div id="education" class = "cv-section">
            <Education />
          </div>
          <div id="work" class="cv-section">
            <Work />
          /</div>
          <input type="submit"></input>
        </form>
      </div>
    )
  }


}

export default App;
