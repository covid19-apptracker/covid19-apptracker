import React, { useState, useEffect, memo } from "react";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps";

const geoUrl =
process.env.PUBLIC_URL +
"/map_data/world-110m.json";

const totalAppsURL =
process.env.PUBLIC_URL +
"/map_data/total-apps.json";


const rounded = num => {
  if (num > 1000000000) {
    return Math.round(num / 100000000) / 10 + "Bn";
  } else if (num > 1000000) {
    return Math.round(num / 100000) / 10 + "M";
  } else {
    return Math.round(num / 100) / 10 + "K";
  }
};



const MapChart = ({ setTooltipContent }) => {
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

  return (
    <>
      <ComposableMap data-tip="" projectionConfig={{ scale: 200 }}>
        <ZoomableGroup>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map(geo => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    const { NAME, ISO_A2, TOTAL_APPS } = geo.properties;
                    setTooltipContent(`${NAME} — ${totalApps[ISO_A2]}`);
                  }}
                  onMouseLeave={() => {
                    setTooltipContent("");
                  }}
                  style={{
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
                  }}
                />
              ))
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </>
  );
};

export default memo(MapChart);
