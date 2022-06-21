const core = require("@actions/core");
const github = require("@actions/github");

try {
  //throw( new Error("SOme Eroor Message"));

  core.debug("Debug message");
  core.warning("Warning message");
  core.error("Error message");

  const name = core.getInput("who-to-greet");
  core.setSecret(name);
  console.log("Hello " + name);

  const time = new Date();
  core.setOutput("time", time.toTimeString());

  core.startGroup("Login Github Object");
  console.log(JSON.stringify(github, null, "\t"));
  core.endGroup();

  core.exportVariable("HELLO", "hello");
} catch (error) {
  core / core.setFailed(error.message);
}
