import React, { useEffect, useState } from "react";
import GalleryGrid from "../utils/GridList";

export const GalleryPart = (props) => {
  // The actual final pictures we render
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    // Only in case length is greater than 0 we have picturs to show
    if (props.data.length > 0) {
      setFilteredData(filterBadPaths());
    }
  }, [props.data]);

  // Iterate on props.data (i.e all pics objects)
  // Filters out all bad paths using regex
  function filterBadPaths() {
    /* 
      Simple Regex ->
      checks for the url "https://via.placeholder.com"
      followd by "/digit-digit-digit/"
      followed by any number of letters and digits
    */
    let re = RegExp("^https://via.placeholder.com/[0-9]{3}/[a-zA-Z0-9]+$");

    let filtered = [];
    if (props.data.length > 0) {
      props.data.forEach((pic) => {
        if (re.test(pic.path)) {
          // If path matches regex we add picture to filtered object
          filtered.push(pic);
        }
      });
    }
    return filtered;
  }

  /* 
    Simple return value
    In case rowsLengh is larger than 0, we return GalleryGrid Component
  */
  return (
    <div>
      {filteredData.length > 0 ? <GalleryGrid data={filteredData} /> : ""}
    </div>
  );
};
