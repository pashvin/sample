import React, { useContext, useEffect, useState } from "react";

declare const d3: any;

export default function D3js() {
  const loadScript = () => {
    return new Promise((res: any, rej: any) => {
      const existingScript = document.getElementById("d3jsCharts");
      if (!existingScript) {
        const script = document.createElement("script");
        script.src = "https://d3js.org/d3.v7.min.js";
        script.id = "d3jsCharts";
        document.body.appendChild(script);
        script.onload = () => {
          res("loaded");
        };
      } else {
        res("re-loaded");
      }
    });
  };

  const createGraph = async () => {
    var parseDate = d3.timeParse("%Y-%m-%d");

    var margin = { left: 50, right: 20, top: 20, bottom: 50 };

    var width = 960 - margin.left - margin.right;
    var height = 500 - margin.top - margin.bottom;

    var max = 0;
    var min = 0;

    var xNudge = 50;
    var yNudge = 20;

    var minDate = new Date();
    var maxDate = new Date();

    let data = await d3.csv("./data/alphavantage.co-stock.csv");

    data.forEach(function (d: any) {
      d.timestamp = parseDate(d.timestamp);
    });
    {
      max = d3.max(data, function (d: any) {
        return d.close;
      });
      min = d3.min(data, function (d: any) {
        return d.close;
      });
      minDate = d3.min(data, function (d: any) {
        return d.timestamp;
      });
      maxDate = d3.max(data, function (d: any) {
        return d.timestamp;
      });

      var y = d3.scaleLinear().domain([min, max]).range([height, 0]);

      var x = d3.scaleTime().domain([minDate, maxDate]).range([0, width]);

      var yAxis = d3.axisLeft(y);

      var xAxis = d3.axisBottom(x);

      var line = d3
        .line()
        .x(function (d: any) {
          return x(d.timestamp);
        })
        .y(function (d: any) {
          return y(d.close);
        })
        .curve(d3.curveCardinal);

      var svg = d3
        .select("#d3js_chart")
        .append("svg")
        .attr("id", "svg")
        .attr("height", "100%")
        .attr("width", "100%");

      var chartGroup = svg
        .append("g")
        .attr("class", "chartGroup")
        .attr("transform", "translate(" + xNudge + "," + yNudge + ")");

      chartGroup
        .append("path")
        .attr("class", "line")
        .attr("d", function (d: any) {
          return line(data);
        });

      chartGroup
        .append("g")
        .attr("class", "axis x")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);

      chartGroup.append("g").attr("class", "axis y").call(yAxis);
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

  return <div id="d3js_chart" style={{ width: 900, height: 500 }}></div>;
}
