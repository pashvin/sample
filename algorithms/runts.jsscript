const { exec } = require("child_process");

let file = process.env.npm_config_file;

exec("tsc " + file + ".ts", (error, stdout, stderr) => {
  console.log(stdout);
  exec("node " + file + ".js", (error, stdout, stderr) => {
    console.log(stdout);
    exec("rm " + "*.js");
  });
});
