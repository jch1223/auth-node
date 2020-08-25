import React, { useEffect } from "react";
import axios from "axios";

function LandingPage(props) {
  useEffect(() => {
    axios.get("/api/hello").then((res) => {
      console.log(res);
    });
  }, []);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      시작페이지
    </div>
  );
}

export default LandingPage;
