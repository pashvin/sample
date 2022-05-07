import React, { useEffect } from "react";

declare const Chart: any;

export default function ChartJS() {
  const loadScript = () => {
    return new Promise((res: any, rej: any) => {
      const existingScript = document.getElementById("chartJS");
      if (!existingScript) {
        const script = document.createElement("script");
        script.src = "https://cdn.jsdelivr.net/npm/chart.js";
        script.id = "chartJS";
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
    const ctxElm: HTMLCanvasElement = document.getElementById(
      "myChart"
    ) as HTMLCanvasElement;
    const ctx = ctxElm && ctxElm.getContext("2d");

    const xlabel: any = [];
    const ytemp: any = [];

    const response = await fetch("./data/alphavantage.co-stock.csv");
    const data = await response.text();
    const table = data.split("\n").slice(1);
    table.forEach((row) => {
      const columns = row.split(",");
      const year = columns[0];
      xlabel.push(year);
      const temp = columns[4];
      ytemp.push(parseFloat(temp) + 14);
    });

    const myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: xlabel,
        datasets: [
          {
            label: "some data",
            data: ytemp,
            fill: false,
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1,
          },
        ],
      },
    });
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
  return <canvas id="myChart" style={{ width: 900, height: 500 }}></canvas>;
}
