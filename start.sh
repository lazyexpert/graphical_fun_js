#!/bin/bash

# Install npm dependecies if not installed yet
function checkNodeModules {
  [[ -d 'node_modules' ]] || npm install
}

function startProcess {
  node index.js --harmony
}

checkNodeModules
startProcess
