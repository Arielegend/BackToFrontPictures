import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { GetPics } from "../utils/API";

/*
TopPart 
    Recives - 
      1. setData function.

    Once clicked, we setting up fetch data.

    Renders - 
      1. H1 element
      2. Button element
*/
export const TopPart = (props) => {
  // Boolean keeping if bttn was prerssed or not
  const [bttnPressed, setBttnPressed] = useState(false);

  // In case bttnPressed is false, we make API call to backend.
  // Setitng bttnPressed to be True
  async function handlePress() {
    if (!bttnPressed) {
      let photos = await GetPics();
      // In case of good fetch, photos object is of form {status, data}
      // If status is 1, means good fetch from API
      // Otherwise, no need to update state
      if (photos.status === 1) {
        props.setData(photos.data);
        // As long as fetch is good, we assign True to bttnPressed
        setBttnPressed(true);
      }
    }
  }

  // Helper const, storing bttn styling for cleaner return method.
  const btn_style = {
    backgroundColor: "#21b6ae",
    padding: "5px 5px",
    fontSize: "18px",
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <h1 style={{ paddingRight: "10px" }}>Coing </h1>
      <Button style={btn_style} onClick={handlePress}>
        {" "}
        Load images
      </Button>
    </div>
  );
};
