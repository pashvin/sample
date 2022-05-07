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
      var queryOptions = {
        csvColumns: [
          "datetime",
          "number",
          "number",
          "number",
          "number",
          "number",
          "number",
          "number",
        ],
        csvHasHeader:
          true /* This should be false if your CSV file doesn't have a header */,
      };

      var query = new google.visualization.Query(
        "./data/alphavantage.co-stock.csv",
        queryOptions
      );
      query.send((resp: any) => {
        var data = resp.getDataTable();
        data.removeColumn(1);
        data.removeColumn(1);
        data.removeColumn(1);
        data.removeColumn(2);
        data.removeColumn(2);
        data.removeColumn(2);
        var options = {
          title: "IBM Company Performance",
          curveType: "function",
          legend: { position: "bottom" },
        };

        var chart = new google.visualization.LineChart(
          document.getElementById("curve_chart")
        );

        chart.draw(data, options);
      });
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

  return <div id="curve_chart" style={{ width: 1900, height: 500 }}></div>;
}
