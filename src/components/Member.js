import React, { Component } from "react";
import InputGroup from "./layout/InputGroup";

export default class Member extends Component {
  state = {
    hear: false,
    ethnicity: false,
    language: false,
    housing: false,
    supplements: false,
    childCare: false,
    marital: false,
    transportation: false
  };

  showTransportation = e => {
    if (e.target.value === "Other") {
      this.setState({
        transportation: true
      });
    } else {
      this.setState({
        transportation: false
      });
    }
  };

  showMarital = e => {
    if (e.target.value === "Other") {
      this.setState({
        marital: true
      });
    } else {
      this.setState({
        marital: false
      });
    }
  };

  showChildCare = e => {
    if (e.target.value === "Other") {
      this.setState({
        childCare: true
      });
    } else {
      this.setState({
        childCare: false
      });
    }
  };

  showSupplements = e => {
    if (e.target.value === "Other") {
      this.setState({
        supplements: true
      });
    } else {
      this.setState({
        supplements: false
      });
    }
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

  showHousing = e => {
    if (e.target.value === "BHA Resident") {
      this.setState({
        housing: true
      });
    } else {
      this.setState({
        housing: false
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

  componentDidMount() {
    window.$("select[multiple]").selectpicker();
    window.$(function() {
      window.$(".datePicker").datepicker({
        showButtonPanel: true,
        changeMonth: true,
        changeYear: true
      });
    });
  }

  render() {
    return (
      <div className="container">
        <h1 className="font-red mt-4">Become a Member</h1>
        <form
          action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8"
          method="POST">
          <input type="hidden" name="oid" value="00D50000000cxiS" />
          <input type="hidden" name="retURL" value="http://" />
          <input type="hidden" name="debug" value="1" />
          <InputGroup
            label="First Name"
            id="first_name"
            name="first_name"
            required
          />
          <InputGroup
            label="Last Name"
            id="last_name"
            name="last_name"
            required
          />
          <InputGroup
            label="Today's Date"
            id="00N5000000AZD26"
            name="00N5000000AZD26"
            type="text"
            date
            autoComplete="off"
            required
          />
          <InputGroup
            label="Date of Birth"
            id="00N5000000AZD2B"
            name="00N5000000AZD2B"
            type="text"
            date
            autoComplete="off"
            required
          />
          <div className="form-group">
            <label htmlFor="00N5000000AZD2Q">
              <strong>Age Range</strong>
            </label>

            <select
              id="00N5000000AZD2Q"
              name="00N5000000AZD2Q"
              required
              className="form-control">
              <option />
              <option value="Under 21">Under 21</option>
              <option value="21-35">21-35</option>
              <option value="36-40">36-40</option>
              <option value="40-50">40-50</option>
              <option value="51-55">51-55</option>
              <option value="56-65+">56-65+</option>
            </select>
          </div>
          <InputGroup
            label="Address"
            id="00N5000000AZD2V"
            name="00N5000000AZD2V"
            required
          />
          <InputGroup
            label="Apt. # (if applicable)"
            id="00N5000000AZDIE"
            name="00N5000000AZDIE"
          />
          <div className="row">
            <div className="col-sm-6">
              <InputGroup
                label="City/State"
                id="00N5000000AZDIJ"
                name="00N5000000AZDIJ"
                required
              />
            </div>
            <div className="col-sm-6">
              <InputGroup
                label="Zip"
                id="00N5000000AZDIO"
                name="00N5000000AZDIO"
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <InputGroup
                label="Home Phone"
                id="00N5000000AZDIT"
                name="00N5000000AZDIT"
                required
              />
            </div>
            <div className="col-sm-6">
              <InputGroup
                label="Cell Phone"
                id="00N5000000AZDIY"
                name="00N5000000AZDIY"
                required
              />
            </div>
          </div>
          <InputGroup
            label="Email"
            id="00N5000000AZDId"
            name="00N5000000AZDId"
            required
          />
          <div className="form-group">
            <label htmlFor="00N5000000AZDIn">
              <strong>Gender</strong>
            </label>

            <select
              className="form-control"
              id="00N5000000AZDIn"
              name="00N5000000AZDIn"
              required>
              <option />
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div className="form-group">
            <input
              id=""
              name="00N5000000AZDIs"
              type="checkbox"
              value="1"
              className="mr-2"
            />
            <label htmlFor="00N5000000AZDIs">
              <strong>Veteran</strong>
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="00N5000000AZDJ2">
              <strong>How did you hear about us?</strong>
            </label>

            <select
              id="00N5000000AZDJ2"
              name="00N5000000AZDJ2"
              required
              className="form-control"
              onChange={this.showHear}>
              <option />
              <option value="Walk-in">Walk-in</option>
              <option value="Massachusetts Rehabilitation Commission (MRC)">
                Massachusetts Rehabilitation Commission (MRC)
              </option>
              <option value="One Stop Career Center Location">
                One Stop Career Center Location
              </option>
              <option value="Department of Transitional Assistance (DTA) Location">
                Department of Transitional Assistance (DTA) Location
              </option>
              <option value="Urban League Employee">
                Urban League Employee
              </option>
              <option value="Urban League Flyer">Urban League Flyer</option>
              <option value="Urban League Newspaper">
                Urban League Newspaper
              </option>
              <option value="Friend/Family member">Friend/Family member</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="ml-2">
            {this.state.hear && (
              <InputGroup
                required
                label="Location, Name, Ad Paper or Other"
                name="00N5000000AZDJ7"
                id="00N5000000AZDJ7"
              />
            )}
          </div>
          <div className="form-group">
            <label htmlFor="00N5000000AZDJC">
              <strong>Program of Interest</strong>
            </label>
            <div className="select-red rounded">
              <select
                id="00N5000000AZDJC"
                className="form-control"
                multiple
                name="00N5000000AZDJC">
                <option value="Employment Resource Center">
                  Employment Resource Center
                </option>
                <option value="Computer Literacy and Internet knowledge (CLIK)">
                  Computer Literacy and Internet knowledge (CLIK)
                </option>
                <option value="Financial Administration Preparatory Program">
                  Financial Administration Preparatory Program
                </option>
                <option value="Volunteer 2 Work">Volunteer 2 Work</option>
                <option value="Mature Workers Skills Program (45 years old and up)">
                  Mature Workers Skills Program (45 years old and up)
                </option>
                <option value="MSIMBO: Code Academy">
                  MSIMBO: Code Academy
                </option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="00N5000000AZDJH">
              <strong>Ethnicity</strong>
            </label>

            <select
              required
              onChange={this.showEthnicity}
              id="00N5000000AZDJH"
              name="00N5000000AZDJH"
              className="form-control">
              <option />
              <option value="Black/African American">
                Black/African American
              </option>
              <option value="Multi-Cultural">Multi-Cultural</option>
              <option value="Latino/Hispanic">Latino/Hispanic</option>
              <option value="Native American/Alaskan Native">
                Native American/Alaskan Native
              </option>
              <option value="White">White</option>
              <option value="Asian/Pacific Islander">
                Asian/Pacific Islander
              </option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="ml-2">
            {this.state.ethnicity && (
              <InputGroup
                label="Other"
                required
                name="00N5000000AZDJM"
                id="00N5000000AZDJM"
              />
            )}
          </div>
          <div className="form-group">
            <label htmlFor="00N5000000AZDJH">
              <strong>Primary Language Spoken at Home</strong>
            </label>

            <select
              onChange={this.showLanguage}
              required
              id="00N5000000AZDJR"
              name="00N5000000AZDJR"
              className="form-control">
              <option />
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
              <option value="Haitian Creole">Haitian Creole</option>
              <option value="Cape Verdean Creole">Cape Verdean Creole</option>
              <option value="Cantonese">Cantonese</option>
              <option value="Mandarin">Mandarin</option>
              <option value="French">French</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="ml-2">
            {this.state.language && (
              <InputGroup
                label="Other"
                required
                name="00N5000000AZDJW"
                id="00N5000000AZDJW"
              />
            )}
          </div>
          <div className="form-group">
            <label htmlFor="00N5000000AZDJl">
              <strong>Educational Attainment</strong>
            </label>
            <select
              id="00N5000000AZDJl"
              name="00N5000000AZDJl"
              className="form-control"
              required>
              <option />
              <option value="Below 9th Grade">Below 9th Grade</option>
              <option value="9-12 Grade">9-12 Grade</option>
              <option value="HS Diploma or GED">HS Diploma or GED</option>
              <option value="Some College">Some College</option>
              <option value="Associate Degree">Associate Degree</option>
              <option value="Bachelor&#39;s Degree">
                Bachelor&#39;s Degree
              </option>
              <option value="Master&#39;s Degree">Master&#39;s Degree</option>
              <option value="Trade School">Trade School</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="00N5000000AZDJq">
              <strong> Housing Situation</strong>
            </label>
            <select
              id="00N5000000AZDJq"
              onChange={this.showHousing}
              name="00N5000000AZDJq"
              className="form-control"
              required>
              <option />
              <option value="Rent">Rent</option>
              <option value="Own">Own</option>
              <option value="Homeless">Homeless</option>
              <option value="Live with Family or Friends">
                Live with Family or Friends
              </option>
              <option value="Live Alone">Live Alone</option>
              <option value="BHA Resident">BHA Resident</option>
            </select>
          </div>
          <div className="ml-2">
            {this.state.housing && (
              <InputGroup
                label="BHA Resident"
                required
                name="00N5000000AZDJv"
                id="00N5000000AZDJv"
              />
            )}
          </div>
          {/*
        HouseHold Size:
        <select
          id="00N5000000AZDK0"
          name="00N5000000AZDK0"
          title="HouseHold Size">
          <option value="">--None--</option>
          <option value="1 Person">1 Person</option>
          <option value="2 Persons">2 Persons</option>
          <option value="3 Persons">3 Persons</option>
          <option value="4 Persons">4 Persons</option>
          <option value="5 Persons">5 Persons</option>
          <option value="Other">Other</option>
        </select>
        <br />
        Other_Household_Size:
        <input
          id="00N5000000AZDK5"
          maxlength="50"
          name="00N5000000AZDK5"
          size="20"
          type="text"
        />
        <br />
        Annual Income:
        <select
          id="00N5000000AZDKA"
          name="00N5000000AZDKA"
          title="Annual Income">
          <option value="">--None--</option>
          <option value="Below $5,000">Below $5,000</option>
          <option value="$5,001 - $20,000">$5,001 - $20,000</option>
          <option value="$20,001 - $35,000">$20,001 - $35,000</option>
          <option value="$35,001 - $50,000">$35,001 - $50,000</option>
          <option value="$50,000+">$50,000+</option>
        </select>
        <br />
        Income Supplements:
        <select
          id="00N5000000AZDKF"
          name="00N5000000AZDKF"
          title="Income Supplements">
          <option value="">--None--</option>
          <option value="TAFDC/EAEDC">TAFDC/EAEDC</option>
          <option value="TANF/Food Stamps">TANF/Food Stamps</option>
          <option value="Workers Compensation">Workers Compensation</option>
          <option value="SSI/SSDI">SSI/SSDI</option>
          <option value="Medicaid">Medicaid</option>
          <option value="Pension/Retirement">Pension/Retirement</option>
          <option value="Unemployment">Unemployment</option>
          <option value="Alimony/Palimony">Alimony/Palimony</option>
          <option value="Survivor Benefits">Survivor Benefits</option>
          <option value="Child Support">Child Support</option>
          <option value="Veteran Benefits">Veteran Benefits</option>
          <option value="Other">Other</option>
        </select>
        <br />
        Other_Income_Supplements:
        <input
          id="00N5000000AZDKK"
          maxlength="100"
          name="00N5000000AZDKK"
          size="20"
          type="text"
        />
        <br />
        Do you have a CORI:
        <select
          id="00N5000000AZDKP"
          name="00N5000000AZDKP"
          title="Do you have a CORI">
          <option value="">--None--</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
          <option value="Decline to answer">Decline to answer</option>
        </select>
        <br />
        Employment Status:
        <select
          id="00N5000000AZDKU"
          name="00N5000000AZDKU"
          title="Employment Status">
          <option value="">--None--</option>
          <option value="Unemployed">Unemployed</option>
          <option value="Work Part Time">Work Part Time</option>
          <option value="Work Full Time">Work Full Time</option>
          <option value="Student">Student</option>
          <option value="Unemployed due to disability">
            Unemployed due to disability
          </option>
          <option value="Retired">Retired</option>
        </select>
        <br />
        Dependent Children:
        <select
          id="00N5000000AZDKZ"
          name="00N5000000AZDKZ"
          title="Dependent Children">
          <option value="">--None--</option>
          <option value="No Children">No Children</option>
          <option value="1 Child">1 Child</option>
          <option value="2 Children">2 Children</option>
          <option value="3 Children">3 Children</option>
          <option value="4 Children">4 Children</option>
          <option value="5 Children">5 Children</option>
          <option value="Other">Other</option>
        </select>
        <br />
        Other_Dependent_Children:
        <input
          id="00N5000000AZDKe"
          maxlength="50"
          name="00N5000000AZDKe"
          size="20"
          type="text"
        />
        <br />
        Childcare:
        <select id="00N5000000AZDKj" name="00N5000000AZDKj" title="Childcare">
          <option value="">--None--</option>
          <option value="Child Care Voucher (Child Care Choices)">
            Child Care Voucher (Child Care Choices)
          </option>
          <option value="DCF Slot">DCF Slot</option>
          <option value="Family Member">Family Member</option>
          <option value="None">None</option>
          <option value="Paying out of Pocket">Paying out of Pocket</option>
          <option value="DTA Slot">DTA Slot</option>
          <option value="Friend/Neighbor">Friend/Neighbor</option>
          <option value="Other">Other</option>
        </select>
        <br />
        Other_Childcare:
        <input
          id="00N5000000AZDKo"
          maxlength="100"
          name="00N5000000AZDKo"
          size="20"
          type="text"
        />
        <br />
        Marital Status:
        <select
          id="00N5000000AZDKt"
          name="00N5000000AZDKt"
          title="Marital Status">
          <option value="">--None--</option>
          <option value="Single">Single</option>
          <option value="Divorced">Divorced</option>
          <option value="Married">Married</option>
          <option value="Separated">Separated</option>
          <option value="Widowed">Widowed</option>
          <option value="Other">Other</option>
        </select>
        <br />
        Other_Marital_Status:
        <input
          id="00N5000000AZDKy"
          maxlength="100"
          name="00N5000000AZDKy"
          size="20"
          type="text"
        />
        <br />
        What form(s) of transportation do you ut:
        <select
          id="00N5000000AZDL3"
          multiple="multiple"
          name="00N5000000AZDL3"
          title="What form(s) of transportation do you ut">
          <option value="Own Vehicle">Own Vehicle</option>
          <option value="The Ride">The Ride</option>
          <option value="Public Transportation">Public Transportation</option>
          <option value="More than One">More than One</option>
          <option value="Other">Other</option>
        </select>
        <br />
        Other_Transporation:
        <input
          id="00N5000000AZDL8"
          maxlength="100"
          name="00N5000000AZDL8"
          size="20"
          type="text"
        />
        <br /> */}
          <input
            type="submit"
            className="btn btn-lg btn-outline-danger"
            name="submit"
          />
        </form>
      </div>
    );
  }
}
