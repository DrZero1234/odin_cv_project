import React, {useState} from "react";
import ReactDOM from "react-dom";
import uniqid from "uniqid";


const Work = (props) => {
  const [work,setWork] = useState(
    {
          id : uniqid(),
          name: "",
          position: "",
          start_date : "",
          end_date : "",
          description: "",
          mode: "work",
          edit: false,
    },
  )

  const[workEdit,setWorkEdit] = useState({
          id: "",
          name: "",
          position: "",
          start_date : "",
          end_date : "",
          description: "",
          mode: "work",
  })

  

  const handleChange = (e,edit) => {
    const {name, value} = e.target;
    if (!edit) {
          setWork((prevState) => ({
      ...prevState,
      [name]: value
    }))
    } else {
      setWorkEdit((prevState) => ({
      ...prevState,
      [name]: value
    }),console.log(workEdit))
    }

  }

  const resetWorkEdit = () => {
    setWorkEdit({
          id: "",
          name: "",
          position: "",
          start_date : "",
          end_date : "",
          description: "",
          mode: "work",
    })
  }

  const resetWork = () => {
    setWork({
          id : uniqid(),
          name: "",
          position: "",
          start_date : "",
          end_date : "",
          description: "",
          mode: "work",
          edit: false,
    })
    console.log(work)
  }

  const handleToggle = (e,state) => {
    toggleEdit(e);
    setWorkEdit({
      id : state.id,
      name: state.name,
      position: state.position,
      start_date: state.start_date,
      end_date: state.end_date,
      description: state.description,
      mode: state.work,
    })
  }

  const addWorkplace = () =>  {
    addWork(work);
    resetWork();
    validateSubmit();
  }

  const handleEdit = (e,workplace) => {
    editItem(e,workplace,workEdit);
    resetWorkEdit()
  }

  const {workplaces,addWork,deleteWork,toggleEdit,editItem,validateSubmit} = props

        return(
        <div>
          <fieldset>
            <legend>Work Experience</legend>
            <div id = "work-wrapper" class = "hidden">
              <label htmlFor="work-name">Company name:</label>
              <input type="text" id="work-name" name="name" value={work.name} onChange={handleChange}></input>

              <label htmlFor="work-position">Position:</label>
              <input type="text" id="work-position" name="position" value={work.position} onChange = {handleChange}></input>

              <label htmlFor="work-start">Start date:</label>
              <input type="date" id="work-start" name="start_date" value={work.start_date} onChange = {handleChange}></input>

              <label htmlFor="work-end">End date:</label>
              <input type="date" id="work-end" name="end_date" value={work.end_date} onChange = {handleChange}></input>

              <label htmlFor="work-desc">Description</label>
              <textarea id="work-desc" name="description" value={work.description} onChange = {handleChange}  />
            </div>
            <button type = "button" onClick={addWorkplace}>+Add</button>
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
                      !workplace.edit ? 
                      <tr key  = {workplace.id} id={workplace.id}>

                        <td>{workplace.name}</td>
                        <td>{workplace.position}</td>
                        <td>{workplace.start_date}</td>
                        <td >{workplace.end_date}</td>
                        <td>{workplace.description}</td>
                        <td><button  id = {workplace.id} data-state_array = "works" onClick = {(e) => handleToggle(e,workplace)}>Edit</button></td>
                        <td><button id = {workplace.id} data-state_array = "works" onClick={deleteWork}>Delete</button></td>
                        
                      </tr>
                      :
                      <tr key  = {workplace.id} id={workplace.id}>
                        <td><input type="text" name="name" value={workEdit.name} onChange = {(e) => handleChange(e,true)}></input></td>
                        <td><input type="text" name="position" value = {workEdit.position} onChange = {(e) => handleChange(e,true)}></input></td>
                        <td><input type="date" name="start_date" value = {workEdit.start_date} onChange = {(e) => handleChange(e,true)} /></td>
                        <td><input type="date" name="end_date" value = {workEdit.end_date} onChange = {(e) => handleChange(e,true)} /></td>
                        <td><textarea name="description" value={workEdit.description} onChange = {(e) => handleChange(e,true)}/></td>
                        <td><button id = {workplace.id} type="button" data-state_array = "works" onClick={(e) => handleEdit(e,workplace)}>Confirm</button></td>
                        <td><button  id = {workplace.id} data-state_array = "works" onClick = {(e) => handleToggle(e,workplace)}>Cancel</button></td>
                      </tr>
      )) : null}
              </table>
                </div>

            </fieldset>
      </div>
    )} 

export default Work