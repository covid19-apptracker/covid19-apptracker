import React, {
    Component,
    useState,
    useEffect,
    memo
} from "react";
import {
    ZoomableGroup,
    ComposableMap,
    Geographies,
    Geography
} from "react-simple-maps";

import i18n_iso_countries from "i18n-iso-countries/langs/en.json";

const geoUrl =
process.env.PUBLIC_URL +
"/map_data/geography.json";

const totalAppsURL =
process.env.PUBLIC_URL +
"/apps_data/apps_per_country.json";


const rounded = num => {
  if (num > 1000000000) {
    return Math.round(num / 100000000) / 10 + "Bn";
  } else if (num > 1000000) {
    return Math.round(num / 100000) / 10 + "M";
  } else {
    return Math.round(num / 100) / 10 + "K";
  }
};

const setCountryColor = totalApps => {
    let color = "rgb(36, 138, 255, ";

    if (totalApps !== undefined) {
        color += (((totalApps/3)*.15)+0.3)
        color += ")"
        return ({
      default: {
        fill: color,
        outline: "none"
      },
      hover: {
        fill: "#0066FF",
        outline: "none"
      },
      pressed: {
        fill: "#0066FF",
        outline: "none"
      }
    });

        
    }


    if (totalApps != undefined && totalApps <= 2) {
    return ({
      default: {
        fill: "#a7c2f2",
        outline: "none"
      },
      hover: {
        fill: "#0066FF",
        outline: "none"
      },
      pressed: {
        fill: "#0066FF",
        outline: "none"
      }
    });
  } else if (totalApps > 2){
      return ({
          default: {
              fill: "#759eeb",
              outline: "none"
          },
          hover: {
              fill: "#0066FF",
              outline: "none"
          },
          pressed: {
              fill: "#0066FF",
              outline: "none"
          }
      })
    }else {
    return ({
      default: {
        fill: "#D6D6DA",
        outline: "none"
      },
      hover: {
        fill: "#0066FF",
        outline: "none"
      },
      pressed: {
        fill: "#0066FF",
        outline: "none"
      }
    })
}
};





class MapChartComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            totalApps: {},
            totalNumberOfApps: this.props.totalNumberOfApps,
            allCountries: []
        }
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

    calculateTotalNumberOfApps = () => {
        Object.values(this.state.totalApps).forEach(value => {
            this.state.totalNumberOfApps += value;
        })
        this.props.shareTotalAppsNumber(this.state.totalNumberOfApps);


    }

    calculateAllCountries = () => {
                let countryList = []
        Object.keys(this.state.totalApps).forEach(value => {
            countryList.push({value: value, label: this.getCountryName(value)})
        })
        if (countryList.length !== 0) {
            console.log("printing country list")
            console.log(countryList)
            this.setState({
                allCountries: countryList
            })
            this.props.shareAllCountries(countryList);
        }
        /*console.log(countryList);*/
    }



    dataHandler = () => {
        let tempThis = this;
        async function fetchData() {
            const data = await fetch(totalAppsURL);
            const parsedData = await data.json()
                .then(parsedData => tempThis.setState({
                    totalApps: parsedData
                }))
                .catch(err => tempThis.setState({
                    hasError: true
                }))
        }
        fetchData();
        return this.state.totalApps;
    }

    componentDidMount() {
        this.dataHandler();
        // .json()
        // .then(this.calculateTotalNumberOfApps())
        // .then(console.log("at caluclation"))
        // .then(console.log(this.state.totalApps))
    }

    componentWillReceiveProps(nextProps) {
        // console.log("made it into will receive props in Homepage")
        // console.log(nextProps.playAppArray);
        this.setState({
            totalNumberOfApps: nextProps.totalNumberOfApps,
        });
    }
    
    
    render() {
        if (this.state.totalNumberOfApps === 0) {
            this.calculateTotalNumberOfApps();
        }
        if (this.state.allCountries.length === 0){
            this.calculateAllCountries();
        }
        return (
            <div className="bg-gray-200">
                <ComposableMap data-tip="" height={250} projectionConfig={{ scale: 150 }}>
                    <ZoomableGroup center={[0,10]} maxZoom={2}>
                    <Geographies geography={geoUrl}>
                        {({ geographies }) =>
                        geographies.map(geo => (
                            <Geography
                            key={geo.rsmKey}
                            geography={geo}
                            onMouseEnter={() => {
                                const { NAME, ISO_A2} = geo.properties;
                                this.props.setTooltipContent(`${NAME} \n — ${this.state.totalApps[ISO_A2] != undefined ? this.state.totalApps[ISO_A2] : 0} apps`);
                            }}
                            onMouseLeave={() => {
                                this.props.setTooltipContent("");
                            }}
                            style = {
                                setCountryColor(this.state.totalApps[geo.properties.ISO_A2])
                            }
                            />
                        ))
                        }
                    </Geographies>
                    </ZoomableGroup>
                </ComposableMap>
            </div>
        )
    }
}

export default memo(MapChartComponent);
