import React, { Component, useState } from 'react'; 
import ReactTooltip from "react-tooltip";
import MapChart from "../MapChartComponent";
import PlayAppGenerator from '../../components/helperComponents/PlayAppGenerator';

import i18n_iso_countries from "i18n-iso-countries/langs/en.json";
import Select from 'react-select';

class HomePage extends Component {
  // const [content, setContent] = useState("");

  constructor(props) {
    super(props);
    this.state = {
      hasRequestedData: false,
      playAppArray: new Array(),
      content: "",
      totalNumberOfApps: this.props.totalNumberOfApps,
      countrySortedApps: [],
      allCountries: [],
      checked: false,
      // setContent:this.setState({content:})
    };
  }

  componentDidMount() {
    this.setState({
      playAppArray: this.props.playAppArray,
    });
  }

  getCountryName(countryIso2) {
    const countries = require("i18n-iso-countries");
    countries.registerLocale(i18n_iso_countries);

    // Necessary because UK is not recognized in this library
    if (countryIso2 === 'UK') {
      return ('United Kingdom')
    }

    return (countries.getName(countryIso2, "en"))
  }

  componentWillReceiveProps(nextProps) {
    // console.log("made it into will receive props in Homepage")
    // console.log(nextProps.playAppArray);
    this.setState({
      playAppArray: nextProps.playAppArray,
      totalNumberOfApps: nextProps.totalNumberOfApps,
      currentFilter: nextProps.currentFilter
    });
  }

  updateMapTooltipContent = (newContent) => {
    this.setState({
      content: newContent,
    });
  };

  shareAllCountries = (countryList) => {
    if (countryList.length > 0) {
      this.setState({ allCountries: countryList });
    }
    console.log('made it into shareAllCountries!')
    
  };

  render() {
    return (
      <div>
        <div
          id="container"
          className="container w-full content-center items-center justify-center py-24 max-w-screen-md pl-6 pr-6 lg:pl-0 lg:pr-0 mx-auto"
        >
          <h1 className="text-center font-bold text-4xl lg:text-5xl">
            Learn more about the{" "}
            <span style={{ color: "#0066FF" }}>
              {this.state.totalNumberOfApps}
            </span>{" "}
            COVID-19 apps around the world.
          </h1>
        </div>
        <div>
          <MapChart
            shareTotalAppsNumber={this.props.shareTotalAppsNumber}
            setTooltipContent={this.updateMapTooltipContent}
            totalNumberOfApps={this.state.totalNumberOfApps}
            shareAllCountries={this.shareAllCountries}
          />
          <ReactTooltip>{this.state.content}</ReactTooltip>
        </div>
        {/* <div
          id="container"
          className="container w-full content-center items-center justify-center pt-16 pb-8 max-w-screen-md pl-6 pr-6 lg:pl-0 lg:pr-0 mx-auto"
        >
          <p>
            Sort By US &nbsp;
            <input
              type="checkbox"
              checked={this.state.checked}
              onChange={this.sortByCountry}
            ></input>
          </p>
        </div> */}
        <div
          id="container"
          className="container w-full content-center items-center justify-center pt-16 pb-8 max-w-screen-md pl-6 pr-6 lg:pl-0 lg:pr-0 mx-auto"
        >
          <div className="pb-6">
            <p className="pb-2">Select an Origin Country to filter by</p>
            <Select
            defaultInputValue={this.getCountryName(this.props.currentFilter)}
              onChange={this.props.updateAppFilter}
              options={this.state.allCountries}
              isClearable={true}
            />
          </div>
          <div className="headers flex items-center mx-auto mb-6 p-4">
            <div className="sm:w-2/12 sm:-mr-6"></div>
            <div className="font-bold w-8/12 sm:w-6/12 min-w-xs mr-3">
              Application Name
            </div>
            <div className="font-bold installs hidden sm:flex sm:w-2/12">
              Downloads
            </div>
            <div className="font-bold flex-auto w-4/12 sm:w-2/12 float-right text-left">
              Origin Country
            </div>
          </div>
          <div>
              {this.state.playAppArray}
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
