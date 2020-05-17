import React, { useState, useEffect, memo } from "react";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps";

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
  if (totalApps != undefined) {
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
  } else {
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
    });
  }
};




const MapChart = ({ setTooltipContent }) => {
    
    let totalNumberOfApps = 0;
    // fetch(totalAppsURL)
    //     .then(response => response.json())
    //     .then(data=>console.log("here"+data))
    //     .then(console.log('data above...'));
    const [hasError, setErrors] = useState(false);
    const [totalApps, setTotalApps] = useState({});

    async function fetchData() {
        const data = await fetch(totalAppsURL);
        data
            .json()
            .then(data => setTotalApps(data))
            .catch(err => setErrors(err));
    }
    
    useEffect(() => {
        fetchData();
    });


    // console.log(totalApps);

    Object.values(totalApps).forEach(value => {
      totalNumberOfApps += value;
    })

  return (
    <div>
      <div
        id="container"
        className="container w-full content-center items-center justify-center pt-12 lg:mb-8 mb-8 max-w-screen-md pl-6 pr-6 lg:pl-0 lg:pr-0 mx-auto"
      >
        <h1 className="text-center text-4xl">Currently tracking <span className="text-blue-500">{totalNumberOfApps}</span> COVID-19 apps.</h1>
      </div>
    <>
      <ComposableMap data-tip="" height={250} projectionConfig={{ scale: 200 }}>
        <ZoomableGroup center={[0,25]} maxZoom={2}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map(geo => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    const { NAME, ISO_A2} = geo.properties;
                    setTooltipContent(`${NAME} \n — ${totalApps[ISO_A2] != undefined ? totalApps[ISO_A2] : 0}`);
                  }}
                  onMouseLeave={() => {
                    setTooltipContent("");
                  }}
                  style={setCountryColor(totalApps[geo.properties.ISO_A2])}
                />
              ))
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </>
    </div>
  );
};

export default memo(MapChart);
