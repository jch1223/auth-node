import React, { useEffect } from "react";
import axios from "axios";

function LandingPage(props) {
  useEffect(() => {
    axios.get("/api/hello").then((res) => {
      console.log(res);
    });
  }, []);
  return <div>landing</div>;
}

export default LandingPage;
