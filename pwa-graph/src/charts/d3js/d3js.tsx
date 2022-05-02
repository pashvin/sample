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

  const createGraph = () => {
    const margin = { top: 10, right: 10, bottom: 50, left: 50 };
    const width = 1280 - margin.left - margin.right;
    const height = 420 - margin.top - margin.bottom;
    const yMax = 10;
    const n = 20; // Number of datapoints
  
    // X scale
    const xScale = d3
      .scaleLinear()
      .domain([0, n - 1]) // input
      .range([0, width]); // output
  
    // Y scale
    const yScale = d3
      .scaleLinear()
      .domain([0, yMax]) // input
      .range([height, 0]); // output
  
    const dataset = d3.range(n).map((d:any) => {
      return { x: d, y: d3.randomUniform(yMax)() };
    });
  
    const svg = d3
      .select("#d3js_chart")
      //.append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom);
  
    // X axis
    svg
      .append("g")
      .attr("class", "axis x-axis")
      .attr(
        "transform",
        "translate(" + margin.left + "," + (height + margin.top) + ")"
      )
      .call(d3.axisBottom(xScale));
  
    // Y Axis
    svg
      .append("g")
      .attr("class", "axis y-axis")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
      .call(d3.axisLeft(yScale));
  
    // Line
    const line = d3
      .line()
      .x((d:any) => xScale(d.x))
      .y((d:any) => yScale(d.y));
  
    const lineWrapper = svg
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
  
    lineWrapper
      .append("path")
      .datum(dataset)
      .attr("class", "line")
      .attr("d", line);
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

  return <svg id="d3js_chart" style={{ width: 900, height: 500 }}></svg>;
}
