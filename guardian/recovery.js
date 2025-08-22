const { execSync } = require('child_process');
function restoreHead() {
  console.log("Restoring Head to safe state...");
  execSync("git reset --hard origin/main");
  execSync("npm install");
  console.log("Head restored.");
}
module.exports = { restoreHead };
