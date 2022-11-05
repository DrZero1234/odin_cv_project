import "./styles/App.css"
import React, {Component} from "react";
import uniqid from "uniqid";

import Work from "./components/Work"
import Education from "./components/Education";
import Personal from "./components/Personal";


class App extends Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.clearStateObject = this.clearStateObject.bind(this);
     
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
        works: [],
      }  
    }

    clearStateObject(name) {
      const state_obj = this.state.name;
      for (const key in state_obj) {
        state_obj[key] = "";
      }
      return state_obj
    }

    handleAdd(event) {
      event.preventDefault();
      let new_obj
      const html_state = event.target.dataset.html_state;
      switch(html_state) {
        case "education":
          new_obj = {
          name: "",
          type: "",
          course: "",
          start_date: "",
          end_date: "",
        };
        break;
        case "work":
          new_obj = {
          name: "",
          position: "",
          start_date: "",
          end_date: "",
          description: "",
        };
        break;
        default:
          new_obj = "lel";
      };
      const array_state = event.target.dataset.state_array;
      let new_arr = [...this.state[array_state],this.state[html_state]];
      this.setState({
        [event.target.dataset.state_array]: new_arr,
        [html_state]: new_obj

      })
      console.log(html_state)
      console.log(this.state[array_state])
      console.log(this.state)

      
    }

    // Handles the changes in the form
    handleChange(event) {

      const name_html = event.target.name
      const value_html = event.target.value
      const html_state = event.target.dataset.html_state;
      
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
    console.log(this.state)
     }

  render() {

      const {personal,education,work,educations,works} = this.state;
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
      <div className = "main-wrapper">
        <form id="cv-form">
          <div id="personal"  className = "cv-section">
            <Personal personal = {personal} changeEvent = {this.handleChange} />
          </div>
          <div id="education" className = "cv-section">
            <Education list = {educations} education = {education} changeEvent = {this.handleChange} addEvent = {this.handleAdd} schoolTypes = {school_types}/>
          </div>
          <div id="work" className="cv-section">
            <Work list = {works} work = {work} changeEvent = {this.handleChange} addEvent = {this.handleAdd}/>
          </div>
          <input type="submit"></input>
        </form>
      </div>
    )
  }


}

export default App;
