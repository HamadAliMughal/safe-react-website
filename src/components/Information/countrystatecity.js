import React, { useState, useEffect } from "react";
import countriesApi from "../APIs/countriesApi.js";
import statesApi from "../APIs/statesApi.js";
import citiesApi from "../APIs/citiesAPI.js";
import {informationObj} from '../Information/information';

export default function Countrystate() {
  const [country] = useState(countriesApi);
  const [state, setState] = useState([
    {
      state_id: "",
      state_name: "",
      country_id: "",
    },
  ]);
  const [city, setCity] = useState([
    {
      city_id: "",
      city_name: "",
      state_id: "",
    },
  ]);

  const handlecountry = (e) => {
    const getcountryId = e.target.value;
    const states = [];
    statesApi.map((getState) => {
      if (getState.country_id === getcountryId) {
        states.push(getState);
      }
    });
    states.shift();
    setState(states);
    informationObj.country = countriesApi.find((country) => country.country_id === getcountryId).country_name;
    informationObj.stat = "No State Selected";
    informationObj.city = "No City Selected";
  };

  const handlestate = (e) => {
    const getstateid = e.target.value;
    const cities = [];
    citiesApi.map((getCity) => {
      if (getCity.state_id === getstateid) {
        cities.push(getCity);
      }
    });
    cities.shift();
    setCity(cities);
    informationObj.stat = statesApi.find((state) => state.state_id === getstateid).state_name;
    informationObj.city = "No City Selected";
  };

  const handlecity = (e) => {
    const cityid = e.target.value;
    informationObj.city = citiesApi.find((city) => city.city_id === cityid).city_name;
  };

  return (
    <React.Fragment>
      <div className="content">
        <form className="row g-3">
          <div className="text-dark">
            <label for="country">Country</label>
            <select
              id="cmb1"
              name="country"
              className="form-control"
              onChange={(e) => handlecountry(e)}
            >
              {country.map((getcountry, index) => (
                <option value={getcountry.country_id} key={index}>
                  {getcountry.country_name}
                </option>
              ))}
              {<option selected value='not filled'>
                  Select Country
                </option>}
            </select>
          </div>
          <div className="text-dark">
            <label for="state">State</label>
            <select
              id = "cmb2"
              name="state"
              className="form-control"
              onChange={(e) => handlestate(e)}
            >
              {state.map((getstate, index) =>
                getstate.country_id !== "" ? (
                  <option value={getstate.state_id} key={index}>
                    {getstate.state_name}
                  </option>
                ) : null
              )}
              {<option selected value='not filled'>
                  Select State
                </option>}
            </select>
          </div>

          <div className="text-dark">
            <label for="city">City</label>
            <select
              id="cmb3"
              name="city"
              className="form-control"
              onChange={(e) => handlecity(e)}
            >
              {city.map((getcity, index) =>
                getcity.state_id !== "" ? (
                  <option value={getcity.city_id} key={index}>
                    {getcity.city_name}
                  </option>
                ) : null
              )}
              {<option selected value='not filled'>
                  Select City
                </option>}
            </select>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}