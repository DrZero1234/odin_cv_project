import "./styles/App.css"
import React, {useEffect, useState} from "react";
import uniqid from "uniqid";

import Work from "./components/Work"
import Education from "./components/Education";
import Personal from "./components/Personal";
import PdfFile from "./components/CvPdf"
import { subscribe } from "pubsub-js";
import ReactPDF, { PDFViewer } from "@react-pdf/renderer";


const App = () => {
  const [works,setWorks] = useState([]);
  const [educations,setEducations] = useState([])
  const [personal,setPersonal] = useState(
      {
          name: "",
          birth_date: "",
          phone: "",
          email: "",
      },
  )
  const [submitted,setSubmitted] = useState(false)

  const handleChange = (e) => {
    const {name,value} = e.target;
    setPersonal((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const validateSubmit = () => {
    const submit_btn = document.getElementById("submit-form")
    if (personal.name && personal.birth_date && personal.email && personal.phone && educations.length > 0 && works.length > 0) {
      submit_btn.className = "active";
      submit_btn.disabled = false
    } else {
      submit_btn.className = "inactive";
      submit_btn.disabled = true;
    }
  }
  

  // validating the submit
  useEffect(() => {
    validateSubmit()
  },[personal,works,educations])
  

  const addStateItem = (state) => {

    switch(state.mode) {
      case "work":
        setWorks([...works,state])
        console.log(works)
        break;
      case "education":
        setEducations([...educations,state])
        console.log(educations)
        break;
      default:
        return false;
      }
  }

  const getItem = (type,id) => {
    if (type === "works") {
        return works.find((item) => item.id === id);
    } else if (type === "educations") {
        return educations.find((item) => item.id === id)
    } 
    return false
    }

  const deleteItem = (e) => {
    e.preventDefault();

    const id = e.target.id;
    const type = e.target.dataset.state_array;
    const item = getItem(type,id);

    console.log(item)

    if (item.mode === "work") {
      const new_array = works.filter((item) => item.id !== id);
      setWorks(new_array)
    }else if (item.mode === "education") {
      const new_array = educations.filter((item) => item.id !== id)
      setEducations(new_array)
    }
  }

  const editItem = (e,oldstate,newstate) => {

    console.log(e)
    let old_state_index;
    let array_copy;
    const id = oldstate.id;
    const type = e.target.dataset.state_array;
    e.preventDefault();


    console.log(oldstate)
    console.log(newstate)

    if (type === "works") {
      old_state_index = works.indexOf(getItem("works",id));
      array_copy = works.slice(0);
    } else if (type === "educations") {
      old_state_index = educations.indexOf(getItem("educations",id));
      array_copy = educations.slice(0);
    }
    newstate.id = id;
    newstate.edit = !oldstate.edit
    console.log(works)



    array_copy[old_state_index] = newstate;
    if (type === "works") {
      setWorks(array_copy)
    } else {
      setEducations(array_copy);
    }
  }

  const toggleEdit = (e) => {
    e.preventDefault();
    let current_edit;
    const id = e.target.id;
    const type = e.target.dataset.state_array;
    const item = getItem(type,id);
    let arr;
    if (type === "works") {
      current_edit = works.find(work => work.edit === true)
      arr = works
    } else if (type === "educations") {
      current_edit = educations.find(education => education.edit === true)
      arr = educations;
    }
    let arr_copy = arr.slice(0)
    const current_index = current_edit ? arr_copy.indexOf(current_edit) : null;
    console.log(current_index)
    if (arr_copy[current_index]) {
      arr_copy[current_index].edit = !arr_copy[current_index].edit
    }
    const index = arr.indexOf(item);
    arr_copy[index].edit = !arr_copy[index].edit;
    console.log(arr_copy[index])

    if (type === "works") {
      setWorks(arr_copy);
    } else {
      setEducations(arr_copy);
    }
  }

  const renderPdfPage = (e) => {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return(
      <div className="App">
        <PdfFile personal = {personal} educations = {educations} works = {works}/>
      </div>          )
  }

  else {
  return(
      <div className = "container">
        <form id="cv-form" onSubmit={renderPdfPage}>
          <div id="personal"  className = "cv-section" p>
            <Personal personal = {personal} handleChange={handleChange}/>
          </div>
          <div id="education" className = "cv-section">
            <Education educations = {educations} addEducation = {addStateItem} deleteEducation = {deleteItem} editItem = {editItem} toggleEdit = {toggleEdit} validateSubmit = {validateSubmit}/>
          </div>
          <div id="work" className="cv-section">
            <Work workplaces = {works} addWork = {addStateItem} deleteWork = {deleteItem} toggleEdit = {toggleEdit} editItem = {editItem} validateSubmit = {validateSubmit}/>
          </div>
          <input type="submit" id="submit-form" ></input>
        </form>
      </div>
  )}
}



export default App;
