#!/bin/sh
set -eu

function move() {
    cd ..
    cd $1
    return 0
}

move server
npm start