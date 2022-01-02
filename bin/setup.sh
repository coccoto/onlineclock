#!/bin/sh
set -eu

function npmInstall() {
    cd ..
    cd $1
    npm install
    cd ..
    return 0
}

npmInstall client
echo 'client'

npmInstall server
echo 'server'

echo 'setup complete'