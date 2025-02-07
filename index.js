#!/usr/bin/env node

(async function () {
  const [node, script, ...parameters] = process.argv;
  console.log(`Node: ${node}`);
  console.log(`Script: ${script}`);
  console.log(`Parameters: ${parameters.map((arg) => `"${arg}"`).join(", ")}`);
})();