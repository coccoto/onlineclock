#!/bin/sh
set -eu

function npmInstall() {
    cd $1
    npm install
    cd ..
}

npmInstall client
echo 'client'

npmInstall server
echo 'server'

echo 'setup complete'