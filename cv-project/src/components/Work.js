import React, {Component} from "react";
import ReactDOM from "react-dom";
import uniqid from "uniqid";

import EditPopup from "./editPopUp";

class Work extends Component {
  constructor(props) {
    super(props)
  }



  render() {


      return(
        <div>
          <fieldset>
            <legend>Work Experience</legend>
            <div id = "work-wrapper" class = "hidden">
              <label htmlFor="work-name">Company name:</label>
              <input type="text" name="name"></input>

              <label htmlFor="work-position">Position:</label>
              <input type="text" name="position"></input>

              <label htmlFor="work-start">Start date:</label>
              <input type="date" name="start_date"></input>

              <label htmlFor="work-end">End date:</label>
              <input type="date" name="end_date"></input>

              <label htmlFor="work-desc">Description</label>
              <textarea name="description"/>
            </div>
            <button type = "button">+Add</button>
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

                    {/* Get through the workplaces array */}
                </table>
                </div>

            </fieldset>
      </div>
    )}
}

export default Work