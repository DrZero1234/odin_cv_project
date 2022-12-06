import React,{useState} from "react";
import ReactDOM from "react-dom";


const Personal = (props) => {

    const {personal,handleChange} = props;

    return(
      <div class = "section-wrapper">
        <fieldset>
          <legend>Personal Information</legend>
          <label htmlFor="person-name">Name:</label>
          <input type="text" id="person-name" name="name" value={personal.name} onChange = {handleChange}></input>

          <label htmlFor="person-birthdate">Date of Birth:</label>
          <input type="date" id="person-birthdate" name="birth_date" value={personal.birth_date} onChange = {handleChange}></input>

          <label htmlFor="person-phone">Phone number:</label>
          <input type="tel" id="person-phone" name="phone" value={personal.phone} onChange = {handleChange}></input>

          <label htmlFor="person-email">Email:</label>
          <input type="email" id="person-email" name="email" value={personal.email} onChange = {handleChange}></input>
        </fieldset>
      </div>
    )
}

/*

class Personal extends Component {
  constructor() {
    super()
  }

  


  render() {

    const state = this.props.personal;
    const changeEvent = this.props.changeEvent;

    return(
      <div class = "section-wrapper">
        <fieldset>
          <legend>Personal Information</legend>
          <label htmlFor="person-name">Name:</label>
          <input type="text" id="person-name" name="name" value={state.name} required data-html_state = "personal" onChange={(e) => changeEvent(e)}></input>

          <label htmlFor="person-birthdate">Date of Birth:</label>
          <input type="date" id="person-birthdate" name="birth_date" value={state.birth_date} required data-html_state = "personal" onChange={changeEvent}></input>

          <label htmlFor="person-phone">Phone number:</label>
          <input type="tel" id="person-phone" name="phone" value={state.phone} required data-html_state = "personal" onChange={changeEvent}></input>

          <label htmlFor="person-email">Email:</label>
          <input type="email" id="person-email" name="email" value={state.email} required data-html_state = "personal" onChange={changeEvent}></input>
        </fieldset>
      </div>
    )
  }
}

*/

export default Personal