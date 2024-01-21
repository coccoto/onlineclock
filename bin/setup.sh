#!/bin/bash
set -eu

function npmInstall() {
    cd "$1"
    npm install || exit 1
}

function build() {
    cd "$1"
    npm run release || exit 1
}

function initenv() {
    cd "$1"
    cp .env.example .env || exit 1
}

# 引数をセットする
IS_DEVELOPMENT="${1:-production}"

# 本スクリプトファイルのディレクトリをセットする
SCRIPT_DIR=$(cd "$(dirname "$0")" && pwd)

# client ディレクトリをセットする
CLIENT_DIR="$SCRIPT_DIR/../client"
# server ディレクトリをセットする
SERVER_DIR="$SCRIPT_DIR/../server"

# client の処理を開始する
npmInstall "$CLIENT_DIR"
build "$CLIENT_DIR" "$1"

echo 'client complete'

# server の処理を開始する
npmInstall "$SERVER_DIR"
initenv "$SERVER_DIR"

echo 'server complete'
