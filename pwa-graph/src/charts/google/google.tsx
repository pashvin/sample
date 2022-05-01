import React, { useContext, useEffect, useState } from "react";

declare const google: any;

export default function GoogleChat() {
  const loadScript = () => {
    return new Promise((res: any, rej: any) => {
      const existingScript = document.getElementById("googleCharts");
      if (!existingScript) {
        const script = document.createElement("script");
        script.src = "https://www.gstatic.com/charts/loader.js";
        script.id = "googleCharts";
        document.body.appendChild(script);
        script.onload = () => {
          res("loaded");
        };
      } else {
        res("re-loaded");
      }
    });
  };

  const createGraph = () => {
    if (!google) {
      alert("library is not yet ready");
    }

    google.charts.load("current", { packages: ["corechart"] });
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
      var data = google.visualization.arrayToDataTable([
        ["Year", "Sales", "Expenses"],
        ["2004", 1000, 400],
        ["2005", 1170, 460],
        ["2006", 660, 1120],
        ["2007", 1030, 540],
      ]);

      var options = {
        title: "Company Performance",
        curveType: "function",
        legend: { position: "bottom" },
      };

      var chart = new google.visualization.LineChart(
        document.getElementById("curve_chart")
      );

      chart.draw(data, options);
    }
  };

  useEffect(() => {
    // React 18 loads, unload , reload component in debug mode o detect
    // leaks. This is workaround to call useEffect only once
    let timer = setInterval((_) => {
      clearInterval(timer);
      loadScript().then((result) => {
        createGraph();
      });
    }, 1000);
    return function cleanup() {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, []); // pass second arg as [] to avoid redraw on set status

  return <div id="curve_chart" style={{ width: 900, height: 500 }}></div>;
}
