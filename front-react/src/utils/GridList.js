import React from "react";

import Grid from "@material-ui/core/Grid";

/*
TopPart 
    Recives - 
      1. data -> array of photos objects //  [ { } ]


    Renders - 
      1. Grid element
        - Each element inside grid consist of an image and label
*/
export default function GalleryGrid(props) {
  return (
    <Grid container>
      {props.data.map((pic, idx) => {
        return (
          <Grid key={idx} item xs={4}>
            <div
              style={{
                textAlign: "center",
                padding: "2px",
              }}
            >
              <img
                alt={pic.title}
                src={pic.path}
                key={pic.path}
                height="200px"
              />
              <br />
              <label className={"picture-lable"}>{pic.title}</label>
            </div>
          </Grid>
        );
      })}
    </Grid>
  );
}
