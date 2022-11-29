import "./styles/App.css"
import React, {useState} from "react";
import uniqid from "uniqid";

import Work from "./components/Work"
import Education from "./components/Education";
import Personal from "./components/Personal";
import EditPopup from "./components/editPopUp";
import CvApp from "./components/CvPdf";


const App = () => {
  const [works,setWorks] = useState([]);
  const [educations,setEducations] = useState([])

  const addStateItem = (state) => {

    switch(state.mode) {
      case "work":
        setWorks([...works,state])
        break;
      case "education":
        setEducations([...educations,state])
        break;
      default:
        return false;
    }

}
  
  return(
      <div className = "container">
        <form id="cv-form">
          <div id="personal"  className = "cv-section">
            <Personal />
          </div>
          <div id="education" className = "cv-section">
            <Education educations = {educations} addEducation = {addStateItem}/>
          </div>
          <div id="work" className="cv-section">
            <Work workplaces = {works} addWork = {addStateItem}/>
          </div>
          <input type="submit" id="submit-form" disabled ></input>
        </form>
      </div>
  )
}

/*

class App extends Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.validateSubmit = this.validateSubmit.bind(this)
    this.getStateItem = this.getStateItem.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.togglePop = this.togglePop.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.getPdfPage = this.getPdfPage.bind(this);
     
    this.state = {
        id : uniqid(),
        personal:  {
          name: "",
          birth_date: "",
          phone: "",
          email: "",
        },
        
        education: {
          id : uniqid(),
          name: "",
          type: "",
          course: "",
          start_date: "",
          end_date: "",
          seen: false,
        },

        work: {
          id : uniqid(),
          name: "",
          position: "",
          start_date : "",
          end_date : "",
          description: "",
          seen: false,
        },

        educations: [],
        works: [],
        ShowComponent: false,
      }  
    }

    getPdfPage(event) {
      event.preventDefault();
      this.setState({
        ShowComponent: !this.state.ShowComponent,
      })
    }



    handleAdd(event) {
      event.preventDefault();
      let new_obj
      const html_state = event.target.dataset.html_state;
      switch(html_state) {
        case "education":
          new_obj = {
          id: uniqid(),
          name: "",
          type: "",
          course: "",
          start_date: "",
          end_date: "",
          seen: false,
        };
        break;
        case "work":
          new_obj = {
          id: uniqid(),
          name: "",
          position: "",
          start_date: "",
          end_date: "",
          description: "",
          seen: false,
        };
        break;
        default:
          return false
      };
      const array_state = event.target.dataset.state_array;
      //let new_arr = [...this.state[array_state],this.state[html_state]];
      this.setState(
        prevState => ({
        [event.target.dataset.state_array]: [...prevState[array_state],prevState[html_state]],
        [html_state]: new_obj

      }),() => this.validateSubmit(this.state))

      
    }

    // Handles the changes in the form
    handleChange(event) {

      const name_html = event.target.name
      const value_html = event.target.value
      const html_state = event.target.dataset.html_state;
      
      this.setState(
        prevState =>({
        // Changes the id of the CV after each change
        id: uniqid(),
        // Grabs 3 of the main state object (Work, Personal or Experience)
        [html_state] : {
          // Inserts the last saved state
          ...prevState[html_state],
          // Updates it with the new value typed in the form
          id: uniqid(),
          [name_html]: value_html, 
        }
    }),() =>   this.validateSubmit(this.state)
    )

     }

    validateSubmit(state) {
      const submit_btn = document.getElementById("submit-form");
      if (state.personal.name && state.personal.birth_date && state.personal.phone && state.personal.email && state.works.length > 0 && state.educations.length > 0) {
        submit_btn.disabled = false
        submit_btn.className = "active"
      } else {
        submit_btn.disabled = true;
        submit_btn.className = "inactive"
      }
    }

    handleDelete(event) {
      const array = event.target.dataset.state_array;
      const id = event.target.dataset.state_id;

      const new_array = this.state[array].filter((item) => item.id != id)

      this.setState(
        prevState => ({
        [array]: new_array
      }), console.log(this.state[array])
      )
    }

    handleEdit(old_state,new_state,type) {
      const old_state_index = this.state[type].indexOf(this.getStateItem(type,old_state.id));
      const array_copy = this.state[type].slice(0);
      array_copy[old_state_index] = new_state;
      array_copy[old_state_index].seen = !array_copy[old_state_index].seen 
      this.setState({
        [type]: array_copy
      })
      console.log(this.state)

    }

    getStateItem(type,id) {
      let state_item;

      switch (type){
        case "educations":
          state_item = this.state.educations.find((item) => item.id === id)
          break;
        case "works":
          state_item = this.state.works.find((item) => item.id === id)
          break;
      }
      return state_item
    }


    // Changes the seen state
    togglePop(id,array) {

      const edited_item = this.getStateItem(array,id);

      const index = this.state[array].indexOf(edited_item)
      const ret = this.state[array].slice(0);
      edited_item.seen = !this.state[array][index].seen;

      ret[index] = edited_item;

      this.setState({
        [array]: ret,
      })
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

    if (this.state.ShowComponent) {
      return(
        <CvApp state = {this.state} />
      )

    }
    
    return(
      <div className = "container">
        <form id="cv-form" onSubmit = {this.getPdfPage}>
          <div id="personal"  className = "cv-section">
            <Personal personal = {personal} changeEvent = {this.handleChange} />
          </div>
          <div id="education" className = "cv-section">
            <Education list = {educations} education = {education} changeEvent = {this.handleChange} addEvent = {this.handleAdd} schoolTypes = {school_types} togglePop = {this.togglePop} editEvent = {this.handleEdit}/>
          </div>
          <div id="work" className="cv-section">
            <Work list = {works} work = {work} changeEvent = {this.handleChange} addEvent = {this.handleAdd} deleteEvent = {this.handleDelete} togglePop = {this.togglePop} editEvent = {this.handleEdit}  />
          </div>
          <input type="submit" id="submit-form" disabled ></input>
        </form>
      </div>
    )
  }


}

*/

export default App;
