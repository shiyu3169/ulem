import React, { Component } from "react";
import InputGroup from "./layout/InputGroup";

export default class Member extends Component {
  state = {
    hear: false,
    ethnicity: false,
    language: false
  };

  showLanguage = e => {
    if (e.target.value === "Other") {
      this.setState({
        language: true
      });
    } else {
      this.setState({
        language: false
      });
    }
  };

  showEthnicity = e => {
    if (e.target.value === "Other") {
      this.setState({
        ethnicity: true
      });
    } else {
      this.setState({
        ethnicity: false
      });
    }
  };

  showHear = e => {
    if (
      e.target.value === "Urban League Employee" ||
      e.target.value === "One Stop Career Center Location" ||
      e.target.value === "Urban League Newspaper" ||
      e.target.value === "Other"
    ) {
      this.setState({
        hear: true
      });
    } else {
      this.setState({
        hear: false
      });
    }
  };
  render() {
    return (
      <div className="container mt-5">
        <h1 className="font-red mt-4">Become A Member</h1>

        <form
          action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8"
          method="POST">
          <input type="hidden" name="oid" value="00D50000000cxiS" />
          <input type="hidden" name="retURL" value="http://www.ulem.org" />
          <InputGroup
            id="first_name"
            required
            name="first_name"
            label="First Name"
          />
          <InputGroup
            id="last_name"
            required
            name="last_name"
            label="Last Name"
          />
          <InputGroup
            id="date"
            required
            name="date"
            label="Today's Date"
            type="date"
          />
          <InputGroup
            id="date"
            required
            name="date"
            label="Date of Birth"
            type="date"
          />
          <div className="form-group">
            <label htmlFor="age_range">
              <strong>Age Range</strong>
            </label>
            <select
              id="age_range"
              name="age_range"
              className="form-control"
              required>
              <option />
              <option>Under 21</option>
              <option>21 - 35</option>
              <option>36 - 40</option>
              <option>40 - 50</option>
              <option>51 - 55</option>
              <option>56 - 65+</option>
            </select>
          </div>
          <InputGroup required id="address" name="address" label="Address" />
          <InputGroup
            id="address2"
            name="address2"
            label="Apt. # (if applicable)"
          />
          <InputGroup required id="city" name="city" label="City" />
          <InputGroup required id="state" name="state" label="State" />
          <InputGroup required id="zip" name="zip" label="Zip" />
          <InputGroup
            required
            id="home_phone"
            name="home_phone"
            label="Hone Phone"
          />
          <InputGroup
            required
            id="cell_phone"
            name="cell_phone"
            label="Cell Phone"
          />
          <InputGroup
            required
            id="eamil"
            name="email"
            label="Email"
            type="email"
          />
          <InputGroup
            required
            id="emergency_contact_info"
            name="emergency_contact_info"
            label="Emergency Contact Info (if applicable)"
          />
          <div className="form-group">
            <label htmlFor="age_range">
              <strong>Gender</strong>
            </label>
            <select
              id="age_range"
              name="age_range"
              className="form-control"
              required>
              <option />
              <option>Male</option>
              <option>Female</option>
              <option>Rather not say</option>
            </select>
          </div>
          <div className="form-group">
            <input type="checkbox" name="veteran" value="veteran" />{" "}
            <strong>Veteran</strong>
          </div>
          <div className="form-group">
            <label htmlFor="age_range">
              <strong>How did you hear about us?</strong>
            </label>
            <select
              id="how_did_you_hear_about_us"
              name="how_did_you_hear_about_us"
              className="form-control"
              onInput={this.showHear}
              required>
              <option />
              <option>Walk-in</option>
              <option>Massachusetts Rehabilitation Commission (MRC)</option>
              <option>One Stop Career Center Location</option>
              <option>
                Department of Transitional Assistance (DTA) Location
              </option>
              <option>Urban League Employee</option>
              <option>Urban League Flyer</option>
              <option>Urban League Newspaper</option>
              <option>Friend/Family Member</option>
              <option>Other</option>
            </select>
          </div>
          {this.state.hear && (
            <div className="container">
              <InputGroup
                required
                id="how_did_you_hear_about_us_detail"
                name="how_did_you_hear_about_us_detail"
                label="Location, Name, Ad Paper or Other"
              />
            </div>
          )}
          <div className="form-group">
            <label>
              <strong>Program of Interest</strong>
            </label>
            <select
              className="form-control selectpicker"
              multiple
              data-live-search="true">
              <option>Employment Resource Center</option>
              <option>Computer Literacy and Internet Knowledge (CLIK)</option>
              <option>Financial Administration Preparatory Program</option>
              <option>Volunteer 2 Work</option>
              <option>
                Mature Workers Skills Program (45 years old and up)
              </option>
              <option>Msimbo: Code Academy</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="ethnicity">
              <strong>Ethnicity</strong>
            </label>
            <select
              id="ethnicity"
              name="ethnicity"
              className="form-control"
              onInput={this.showEthnicity}
              required>
              <option />
              <option>Multi-cultural</option>
              <option>Black/African American</option>
              <option>Latino/Hispanic</option>
              <option>Native American/Alaskan Native</option>
              <option>White</option>
              <option>Asian/Pacific Islander</option>
              <option>Other</option>
            </select>
          </div>
          {this.state.ethnicity && (
            <div className="container">
              <InputGroup
                required
                id="ethnicity_detail"
                name="ethnicity_detail"
                label="Other"
              />
            </div>
          )}
          <div className="form-group">
            <label htmlFor="language">
              <strong>Primary Language Spoken at Home</strong>
            </label>
            <select
              id="language"
              name="language"
              className="form-control"
              onInput={this.showLanguage}
              required>
              <option />
              <option>English</option>
              <option>Spanish</option>
              <option>Haitian Creole</option>
              <option>Cape Verdean Creole</option>
              <option>Cantonese</option>
              <option>Mandarin</option>
              <option>French</option>
              <option>Other</option>
            </select>
          </div>
          {this.state.language && (
            <div className="container">
              <InputGroup
                required
                id="language_detail"
                name="language_detail"
                label="Other"
              />
            </div>
          )}
        </form>
      </div>
    );
  }
}
