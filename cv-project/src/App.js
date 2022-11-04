import "./styles/App.css"
import React, {Component} from "react";
import uniqid from "uniqid";




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
          <input type="text" id="person-name" name="name" required data-state = "personal"></input>

          <label htmlFor="person-birthdate">Date of Birth:</label>
          <input type="date" id="person-birthdate" name="birth_date" required data-state = "personal"></input>

          <label htmlFor="person-phone">Phone number:</label>
          <input type="tel" id="person-phone" name="phone" required data-state = "personal"></input>

          <label htmlFor="person-email">Email:</label>
          <input type="email" id="person-email" name="email" required data-state = "personal"></input>
        </fieldset>
      </div>
    )
  }
}

class Education extends Component {
  constructor(props) {
    super(props)
  }



  render() {

    const past_education = this.props.list
    const state = this.props.education
    const changeEvent = this.props.changeEvent
  
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
            <input type="text" id="school-name" required name="name" value={state.name} data-html_state = "education" onChange={changeEvent}></input>

            <label htmlFor="school-type">School type:</label>
            <select name="type" id="school-type"  value={state.type} form = "cv-form" data-html_state = "education" onChange={changeEvent}>
              {school_types.map((school) => (
                <option value={school.value}>{school.label}</option>
              ))}
            </select>

            <label htmlFor="school-name">Course type: </label>
            <input type="text" id="course-name" required data-html_state = "education"></input>

            <label htmlFor="school-start">Start date:</label>
            <input type="date" id="school-start" required data-html_state = "education"></input>

            <label htmlFor="school-end">Email:</label>
            <input type="date" id="school-end" required data-html_state = "education"></input>
            <button>+Add</button>

                <div id="education-list">
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
                                          </tr>
                    ))}

                  </table>

          </div>
          </fieldset>

        </div>
    )}
}

class Work extends Component {
  constructor(props) {
    super(props)
  }



  render() {

      const changeEvent = this.props.changeEvent;
      const work_state = this.props.work;
      const workplaces = this.props.list;

      return(
        <div>
          <fieldset>
            <legend>Work Experience</legend>
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
            <button>+Add</button>

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
                        <td>{workplace.name}</td>
                        <td>{workplace.position}</td>
                        
                        <td>{workplace.start_date}</td>
                        <td>{workplace.end_date}</td>
                        <td>{workplace.description}</td>
                      </tr>
                    ))}

                  </table>

          </div>
            </fieldset>
      </div>
    )}
}

class App extends Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this);
     
    this.state = {
        id : uniqid(),
        personal:  {
          name: "",
          birth_date: "",
          phone: "",
          email: "",
        },
        
        education: {
          name: "",
          type: "",
          course: "",
          start_date: "",
          end_date: "",
        },

        work: {
          name: "",
          position: "",
          start_date : "",
          end_date : "",
          description: "",
        },

        educations: [],
        works: []
      }  
    }

    // Handles the changes in the form
     handleChange(event) {

      const name_html = event.target.name.toString();
      const value_html = event.target.value.toString()
      const html_state = event.target.dataset.html_state.toString();

      this.setState({
        // Changes the id of the CV after each change
        id: uniqid(),
        // Grabs 3 of the main state object (Work, Personal or Experience)
        [html_state] : {
          // Inserts the last saved state
          ...this.state[html_state],
          // Updates it with the new value typed in the form
          [name_html]: value_html,
          
        }
})
      console.log(`Html State: ${html_state}`)
      console.log(name_html)
      console.log(value_html)
      console.log(this.state[html_state])
      

     }

  render() {


      const EDUCATION_MOCK = [
        {
          name: "Name1",
          type: "highschool",
          course: "electornics",
          start_date: "2004.08.12",
          end_date: "2008.06.30",
        },
        {
          name: "Name2",
          type: "College",
          course: "electornics",
          start_date: "2004.08.12",
          end_date: "2008.06.30",
        },
      ]

            const WORK_MOCK = [
        {
          name: "Example Bar",
          position: "Bartender",
          start_date: "2010.06.21",
          end_date: "2012.02.04",
          description: "",
        },
        {
          name: "Example Bar",
          position: "Bartender",
          start_date: "2010.06.21",
          end_date: "2012.02.04",
          description: "unnecessarily long description testing: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
        }
      ]
    return(
      <div className = "main-wrapper">
        <form id="cv-form">
          <div id="personal" className = "cv-section">
            <Personal />
          </div>
          <div id="education" className = "cv-section">
            <Education list = {EDUCATION_MOCK} education = {this.state.education} changeEvent = {this.handleChange}/>
          </div>
          <div id="work" className="cv-section">
            <Work list = {WORK_MOCK} work = {this.state.work} changeEvent = {this.handleChange}/>
          </div>
          <input type="submit"></input>
        </form>
      </div>
    )
  }


}

export default App;
