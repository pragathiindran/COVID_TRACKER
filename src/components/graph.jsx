import React, { Component } from "react";
import Choropleth from "./choropleth";
import * as Icon from "react-feather";
import { commaSeperated, timeSince } from "../utils/common-functions";
import ReactGa from "react-ga";

class Graph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      data2: [],
      tests: [],
      isLoaded: false,
      toggleActive: false,
      clickConfirmedMap: false,
      clickActiveMap: true,
      clickRecoveredMap: false,
      clickDeceasedMap: false,
      beginning: true,
      twoWeeks: false,
      oneMonth: false,
    };
    this.onToggle = this.onToggle.bind(this);
    this.onClickConfirmed = this.onClickConfirmed.bind(this);
    this.onClickActive = this.onClickActive.bind(this);
    this.onClickRecovered = this.onClickRecovered.bind(this);
    this.onClickDeceased = this.onClickDeceased.bind(this);
    this.handleBeginning = this.handleBeginning.bind(this);
    this.handleTwoWeeks = this.handleTwoWeeks.bind(this);
    this.handleOneMonth = this.handleOneMonth.bind(this);
  }
  onToggle(toggleActive) {
    this.setState({ toggleActive });
  }

  onClickConfirmed(clickConfirmedMap) {
    this.setState({ clickConfirmedMap });
  }
  onClickActive(clickActiveMap) {
    this.setState({ clickActiveMap });
  }
  onClickRecovered(clickRecoveredMap) {
    this.setState({ clickRecoveredMap });
  }
  onClickDeceased(clickDeceasedMap) {
    this.setState({ clickDeceasedMap });
  }

  handleBeginning({ beginning }) {
    this.setState({ beginning });
  }
  handleTwoWeeks({ twoWeeks }) {
    this.setState({ twoWeeks });
  }
  handleOneMonth({ oneMonth }) {
    this.setState({ oneMonth });
  }

  componentDidMount() {
    fetch("https://api.covid19india.org/data.json").then((res) =>
      res.json().then((json) => {
        this.setState({
          isLoaded: true,
          data: json.cases_time_series,
          data2: json.statewise,
          tests: json.tested,
        });
      })
    );
  }

  render() {
    const {
      isLoaded,
      data,
      data2,
      
      clickConfirmedMap,
      clickActiveMap,
      clickRecoveredMap,
      clickDeceasedMap,
    } = this.state;
    const graphClass = window.innerWidth < 767 ? "" : "container";

    const dailyConfirmed = [];
    data.map((item) => dailyConfirmed.push(Number(item.dailyconfirmed)));
    const dailyActive = [];
    data.map((item) =>
      dailyActive.push(
        Number(item.dailyconfirmed) -
          Number(item.dailyrecovered) -
          Number(item.dailydeceased)
      )
    );

    const dailyActiveJson = [];
    data.map((item) =>
      dailyActiveJson.push({
        dailyactive:
          Number(item.dailyconfirmed) -
          Number(item.dailyrecovered) -
          Number(item.dailydeceased),
        date: item.date,
      })
    );

    const dailyRecovered = [];
    data.map((item) => dailyRecovered.push(Number(item.dailyrecovered)));
    const dailyDeceased = [];
    data.map((item) => dailyDeceased.push(Number(item.dailydeceased)));

    const totalConfirmed = [];
    data.map((item) => totalConfirmed.push(Number(item.totalconfirmed)));
    const totalActive = [];
    data.map((item) =>
      totalActive.push(
        Number(item.totalconfirmed) -
          Number(item.totalrecovered) -
          Number(item.totaldeceased)
      )
    );

    const totalActiveJson = [];
    data.map((item) =>
      totalActiveJson.push({
        totalactive:
          Number(item.totalconfirmed) -
          Number(item.totalrecovered) -
          Number(item.totaldeceased),
        date: item.date,
      })
    );
    const totalRecovered = [];
    data.map((item) => totalRecovered.push(Number(item.totalrecovered)));
    const totalDeceased = [];
    data.map((item) => totalDeceased.push(Number(item.totaldeceased)));

    const date = [];
    data.map((item) => date.push(item.date));

    const confirmedStatesData = [];
    data2.map((item) =>
      confirmedStatesData.push({
        id: item.statecode,
        state: item.state,
        value: Number(item.confirmed),
      })
    );
    const activeStatesData = [];
    data2.map((item) =>
      activeStatesData.push({
        id: item.statecode,
        state: item.state,
        value:
          Number(item.confirmed) - Number(item.recovered) - Number(item.deaths),
      })
    );
    const recoveredStatesData = [];
    data2.map((item) =>
      recoveredStatesData.push({
        id: item.statecode,
        state: item.state,
        value: Number(item.recovered),
      })
    );
    const deceasedStatesData = [];
    data2.map((item) =>
      deceasedStatesData.push({
        id: item.statecode,
        state: item.state,
        value: Number(item.deaths),
      })
    );

    const grandTotal = [];

    data2.map((item) => {
      if (item.statecode === "TT") {
        grandTotal.push(item);
      }
    });
    if (isLoaded) {
      const lastUpdatedTime = timeSince(
        new Date(
          [
            grandTotal[0].lastupdatedtime.split(/\//)[1],
            grandTotal[0].lastupdatedtime.split(/\//)[0],
            grandTotal[0].lastupdatedtime.split(/\//)[2],
          ].join("/")
        ).getTime()
      );
      return (
        <React.Fragment>
          <div className={graphClass}>
            <div
              className="row"
              style={{
                justifyContent: "center",
                marginBottom: "25px",
              }}
            >
              {" "}
              
            </div>
            <div className="w-100"></div>

            <div className="row">
              <div className="col-8">
                <h4
                  className="fadeInUp"
                  style={{
                    justifyContent: "left",
                    textAlign: "left",
                    animationDelay: "2.2s",
                    marginBottom: "15px",
                  }}
                >
                  INDIA MAP
                  <h6 id="line1" style={{ fontSize: 8, color: "grey" }}>
                    Tap on a State/UT
                  </h6>
                  <h6 id="line2" style={{ fontSize: 8, color: "grey" }}>
                    Hover Over a State/UT
                  </h6>
                </h4>
              </div>
              <div className="w-100"></div>
              <div
                className="fadeInUp toggle-map container"
                style={{ animationDelay: "2.3s" }}
              >
                <div className="row row-cols-4">
                  <div
                    className="col"
                    onClick={() => {
                      this.setState({
                        clickConfirmedMap: true,
                        clickActiveMap: false,
                        clickRecoveredMap: false,
                        clickDeceasedMap: false,
                      });
                    }}
                  >
                    <h6
                      className="text-info pad"
                      style={{
                        background: `${
                          clickConfirmedMap
                            ? "rgb(189, 216, 228)"
                            : "rgba(189, 216, 228, 0.2)"
                        }`,
                      }}
                    >
                      CONFIRMED
                      <h6 style={{ fontSize: 14 }}>
                        {commaSeperated(grandTotal[0].confirmed)}
                        <h6 style={{ fontSize: 10 }}>
                          {Number(grandTotal[0].deltaconfirmed) > 0 ? (
                            <Icon.PlusCircle
                              size={9}
                              strokeWidth={3}
                              fill="rgba(23, 162, 184, 0.2)"
                              style={{ verticalAlign: -1 }}
                            />
                          ) : (
                            <Icon.Meh
                              size={9}
                              strokeWidth={3}
                              fill="rgba(23, 162, 184, 0.2)"
                              style={{ verticalAlign: -1 }}
                            />
                          )}
                          {Number(grandTotal[0].deltaconfirmed) > 0
                            ? " " + commaSeperated(grandTotal[0].deltaconfirmed)
                            : ""}
                        </h6>
                      </h6>
                    </h6>
                  </div>
                  <div
                    className="col"
                    onClick={() => {
                      this.setState({
                        clickConfirmedMap: false,
                        clickActiveMap: true,
                        clickRecoveredMap: false,
                        clickDeceasedMap: false,
                      });
                    }}
                  >
                    <h6
                      className="pad"
                      style={{
                        color: "rgb(255, 68, 106)",

                        background: `${
                          clickActiveMap
                            ? "rgba(247, 177, 177, 0.9)"
                            : "rgba(247, 177, 177, 0.2)"
                        }`,
                      }}
                    >
                      ACTIVE
                      <h6 style={{ fontSize: 14 }}>
                        {commaSeperated(grandTotal[0].active)}
                        <h6 style={{ fontSize: 10 }}>
                          {Number(grandTotal[0].deltaconfirmed) -
                            Number(grandTotal[0].deltarecovered) -
                            Number(grandTotal[0].deltadeaths) >
                          0 ? (
                            <Icon.PlusCircle
                              size={9}
                              strokeWidth={3}
                              fill="rgba(255, 68, 106, 0.2)"
                              style={{ verticalAlign: -1 }}
                            />
                          ) : (
                            <Icon.Heart
                              size={9}
                              strokeWidth={3}
                              fill="rgba(255, 68, 106, 0.4)"
                              style={{ verticalAlign: -1 }}
                            />
                          )}{" "}
                          {Number(grandTotal[0].deltaconfirmed) -
                            Number(grandTotal[0].deltarecovered) -
                            Number(grandTotal[0].deltadeaths) >
                          0
                            ? " " +
                              commaSeperated(
                                Number(grandTotal[0].deltaconfirmed) -
                                  Number(grandTotal[0].deltarecovered) -
                                  Number(grandTotal[0].deltadeaths)
                              )
                            : ""}
                        </h6>
                      </h6>
                    </h6>
                  </div>
                  <div
                    className="col"
                    onClick={() => {
                      this.setState({
                        clickActiveMap: false,
                        clickConfirmedMap: false,
                        clickRecoveredMap: true,
                        clickDeceasedMap: false,
                      });
                    }}
                  >
                    <h6
                      className="text-success pad"
                      style={{
                        background: `${
                          clickRecoveredMap
                            ? "rgb(182, 229, 182)"
                            : "rgba(182, 229, 182, 0.2)"
                        }`,
                      }}
                    >
                      RECOVERED
                      <h6 style={{ fontSize: 14 }}>
                        {commaSeperated(grandTotal[0].recovered)}
                        <h6 style={{ fontSize: 10 }}>
                          {Number(grandTotal[0].deltarecovered) > 0 ? (
                            <Icon.PlusCircle
                              size={9}
                              strokeWidth={3}
                              fill="rgba(23, 162, 184, 0.2)"
                              style={{ verticalAlign: -1 }}
                            />
                          ) : (
                            <Icon.Smile
                              size={9}
                              strokeWidth={3}
                              fill="rgba(23, 162, 184, 0.2)"
                              style={{ verticalAlign: -1 }}
                            />
                          )}
                          {Number(grandTotal[0].deltarecovered) > 0
                            ? " " + commaSeperated(grandTotal[0].deltarecovered)
                            : ""}
                        </h6>
                      </h6>
                    </h6>
                  </div>
                  <div
                    className="col"
                    onClick={() => {
                      this.setState({
                        clickActiveMap: false,
                        clickRecoveredMap: false,
                        clickConfirmedMap: false,
                        clickDeceasedMap: true,
                      });
                    }}
                  >
                    <h6
                      className="text-secondary pad"
                      style={{
                        background: `${
                          clickDeceasedMap
                            ? "rgb(179, 173, 173)"
                            : "rgba(179, 173, 173, 0.2)"
                        }`,
                        cursor: "pointer",
                      }}
                    >
                      DECEASED
                      <h6 style={{ fontSize: 14 }}>
                        {commaSeperated(grandTotal[0].deaths)}
                        <h6 style={{ fontSize: 10 }}>
                          {Number(grandTotal[0].deltadeaths) > 0 ? (
                            <Icon.PlusCircle
                              size={9}
                              strokeWidth={3}
                              fill="rgba(179, 173, 173, 0.5)"
                              style={{ verticalAlign: -1 }}
                            />
                          ) : (
                            <Icon.Meh
                              size={9}
                              strokeWidth={3}
                              fill="rgba(179, 173, 173, 0.5)"
                              style={{ verticalAlign: -1 }}
                            />
                          )}{" "}
                          {Number(grandTotal[0].deltadeaths) > 0
                            ? " " + commaSeperated(grandTotal[0].deltadeaths)
                            : ""}
                        </h6>
                      </h6>
                    </h6>
                  </div>
                </div>
              </div>

              <div className="w-100"></div>
              <div
                className="col fadeInUp"
                style={{
                  justifyContent: "left",
                  animationDelay: "2.35s",
                }}
              >
                <h1 className="lastUpdatedIndiaMap">
                  Last Updated
                  <h6>about {lastUpdatedTime}</h6>
                </h1>
                {clickConfirmedMap && (
                  <Choropleth
                    data={confirmedStatesData.slice(
                      1,
                      confirmedStatesData.length - 1
                    )}
                    colorLow="rgba(29, 141, 158, 0.85)"
                    colorHigh="rgba(29, 141, 158, 1)"
                    fill="rgb(18, 167, 190)"
                    type="Infected"
                    onMouseEnter={ReactGa.event({
                      category: "India map",
                      action: "India map clicked",
                    })}
                  />
                )}
                {clickActiveMap && (
                  <Choropleth
                    data={activeStatesData.slice(
                      1,
                      activeStatesData.length - 1
                    )}
                    colorLow="rgba(173, 28, 57, 0.85)"
                    colorHigh="rgba(173, 28, 57, 1)"
                    fill="rgb(228, 116, 138)"
                    type="Active"
                    onMouseEnter={ReactGa.event({
                      category: "India map",
                      action: "India map clicked",
                    })}
                  />
                )}
                {clickRecoveredMap && (
                  <Choropleth
                    data={recoveredStatesData.slice(
                      1,
                      recoveredStatesData.length - 1
                    )}
                    colorLow="rgba(40, 167, 69, 0.85)"
                    colorHigh="rgba(40, 167, 69, 1)"
                    fill="rgb(30, 209, 72)"
                    type="Recovered"
                    onMouseEnter={ReactGa.event({
                      category: "India map",
                      action: "India map clicked",
                    })}
                  />
                )}
                {clickDeceasedMap && (
                  <Choropleth
                    data={deceasedStatesData.slice(
                      1,
                      deceasedStatesData.length - 1
                    )}
                    colorLow="rgba(74, 79, 83, 0.6)"
                    colorHigh="rgba(74, 79, 83, 1)"
                    fill="rgb(108, 117, 125)"
                    type="Deceased"
                    onMouseEnter={ReactGa.event({
                      category: "India map",
                      action: "India map clicked",
                    })}
                  />
                )}
              </div>
              <div className="w-100"></div>
              <div
                className="col fadeInUp"
                style={{
                  textAlign: "left",
                  animationDelay: "2.3s",
                  marginBottom: "-8px",
                }}
              >
                <h6
                  className="home-title"
                  style={{
                    color: "#ff446a",
                    wordBreak: "keep-all",
                    wordWrap: "normal",
                  }}
                >

                </h6>
              </div>
              </div>
              </div>
        </React.Fragment>
      );
    } else {
      return null;
    }
  }
}

export default Graph;