const fs = require('fs');
const anchor = require('./soul_anchor.json');

function checkCommand(cmd) {
  if (!cmd || typeof cmd !== 'string') return false;
  const forbidden = ["delete all", "hack", "harm", "bypass laws"];
  if (forbidden.some(f => cmd.toLowerCase().includes(f))) {
    logViolation(cmd);
    return false;
  }
  return true;
}
function logViolation(cmd) {
  fs.appendFileSync('guardian/logs.txt', `[${new Date().toISOString()}] BLOCKED: ${cmd}\n`);
}
module.exports = { checkCommand };
