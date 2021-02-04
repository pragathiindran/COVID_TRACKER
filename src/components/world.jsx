import React, { Component } from "react";
import WorldChoropleth from "./worldchoropleth";
import ReactGa from "react-ga";
import { Helmet } from "react-helmet";

class World extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded1: false,
      isLoaded2: false,
      countiesTodayData: [],
      countiesYesterdayData: [],
      toggleToday: true,
      toggleYesterday: false,
    };
    this.onToggleToday = this.onToggleToday.bind(this);
    this.onToggleYesterday = this.onToggleYesterday.bind(this);
  }

  onToggleToday(toggleToday) {
    this.setState({ toggleToday });
  }
  onToggleYesterday(toggleYesterday) {
    this.setState({ toggleYesterday });
  }

  componentDidMount() {
    fetch(
      "https://corona.lmao.ninja/v2/countries?yesterday=false&sort=cases"
    ).then((res) =>
      res.json().then((json) => {
        this.setState({
          isLoaded1: true,
          countiesTodayData: json,
        });
      })
    );

    fetch(
      "https://corona.lmao.ninja/v2/countries?yesterday=true&sort=cases"
    ).then((res) =>
      res.json().then((json) => {
        this.setState({
          isLoaded2: true,
          countiesYesterdayData: json,
        });
      })
    );
  }

  render() {
    const {
      isLoaded1,
      countiesTodayData,
      isLoaded2,
      countiesYesterdayData,
      toggleToday,
      toggleYesterday,
    } = this.state;

    let countries = [];
    let isLoaded = "";

    if (toggleToday) {
      countries = countiesTodayData;
      isLoaded = isLoaded1;
    }

    if (toggleYesterday) {
      countries = countiesYesterdayData;
      isLoaded = isLoaded2;
    }
    const data = [];
    countries.map((country) =>
      data.push({
        cases: Number(country.cases),
        id: country.countryInfo.iso3,
        deaths: Number(country.deaths),
      })
    );

    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const cases = [];
    countries.map((country) => cases.push(country.cases));
    const totalCases = cases.reduce((a, b) => a + b, 0);

    const newCases = [];
    countries.map((country) => newCases.push(country.todayCases));
    const totalNewCases = newCases.reduce((a, b) => a + b, 0);

    const deaths = [];
    countries.map((country) => deaths.push(country.deaths));
    const totalDeaths = deaths.reduce((a, b) => a + b, 0);

    const newDeaths = [];
    countries.map((country) => newDeaths.push(country.todayDeaths));
    const totalNewDeaths = newDeaths.reduce((a, b) => a + b, 0);

    const recovered = [];
    countries.map((country) => recovered.push(country.recovered));
    const totalRecovered = recovered.reduce((a, b) => a + b, 0);

    const active = [];
    countries.map((country) => active.push(country.active));
    const totalActive = active.reduce((a, b) => a + b, 0);

    const critical = [];
    countries.map((country) => critical.push(country.critical));
    const totalCritical = critical.reduce((a, b) => a + b, 0);

    const countriesdata = [];
    countries.map((item) =>
      countriesdata.push({
        id: item.countryInfo.iso3,
        state: item.country,
        value: item.cases,
        active: item.active,
      })
    );

    if (isLoaded) {
      return (
        <React.Fragment>
          <div className="containerWorld">
            <Helmet>
              <title>GLOBAL COVID 19 UPDATE</title>
            </Helmet>
            <div
              className="col fadeInUp worldchoropleth"
              style={{ alignContent: "center" }}
            >
              <WorldChoropleth
                data={countriesdata}
                onMouseEnter={ReactGa.event({
                  category: "World map",
                  action: "World map clicked",
                })}
              />
            </div>
            </div>
        </React.Fragment>
      );
    } else {
      return (
        <div className="containerHome">
          <div
            className="spinner-grow"
            role="status"
            style={{ alignContent: "center" }}
          >
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      );
    }
  }
}

export default World;
