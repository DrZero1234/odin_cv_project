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
            <input type="text" id="school-name" required data-state = "education"></input>

            <label htmlFor="school-type">School type:</label>
            <select name="school-type" id="school-type" form = "cv-form" data-state = "education">
              {school_types.map((school) => (
                <option value={school.value}>{school.label}</option>
              ))}
            </select>

            <label htmlFor="school-name">Course type: </label>
            <input type="text" id="course-name" required data-state = "education"></input>

            <label htmlFor="school-start">Start date:</label>
            <input type="date" id="school-start" required data-state = "education"></input>

            <label htmlFor="school-end">Email:</label>
            <input type="date" id="school-end" required data-state = "education"></input>
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

      const changeEvent = this.props.changeEvent
      const work_state = this.props.work;
      const workplaces = this.props.list;

      return(
        <div>
          <fieldset>
            <legend>Work Experience</legend>
            <label htmlFor="work-name">Company name:</label>
            <input type="text" id="work-name" name="name" required data-state = "work" value={work_state.name} onChange = {changeEvent}></input>

            <label htmlFor="work-position">Position:</label>
            <input type="text" id="work-position" required data-state = "work" onChange={changeEvent}></input>

            <label htmlFor="work-start">Start date:</label>
            <input type="date" id="work-start" required data-state = "work"></input>

            <label htmlFor="work-end">End date:</label>
            <input type="date" id="work-end" required data-state = "work"></input>

            <label htmlFor="work-desc">Description</label>
            <textarea id="work-desc" data-state = "work" />
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

    this.changeWork = this.changeWork.bind(this);
     
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

    changeWork(event)  {
      const {name,value} = event.target
      const {state} = event.target.dataset;

      this.setState({
        work: {
          [name]: value,
        }
      })
      console.log(this.state)
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
            <Education list = {EDUCATION_MOCK}/>
          </div>
          <div id="work" className="cv-section">
            <Work list = {WORK_MOCK} work = {this.state.work} changeEvent = {this.changeWork}/>
          </div>
          <input type="submit"></input>
        </form>
      </div>
    )
  }


}

export default App;
