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

  const createGraph = () => {
    const ctxElm: HTMLCanvasElement = document.getElementById("myChart") as HTMLCanvasElement;
    const ctx = ctxElm && ctxElm.getContext('2d');
    const myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: "# of Votes",
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  };

  useEffect(() => {
    // React 18 loads, unload , reload component in debug mode o detect
    // leaks. This is workaround to call useEffect only once
    let timer = setInterval((_) => {
      clearInterval(timer);
      loadScript().then((result) => {
          debugger;
        createGraph();
      });
    }, 1000);
    return function cleanup() {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, []); // pass second arg as [] to avoid redraw on set status
  return (<canvas id="myChart" style={{ width: 900, height: 500 }}></canvas>);
}
