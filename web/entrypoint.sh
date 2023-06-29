#!/bin/sh

if [ -d "node_modules" ]; then rm -Rf node_modules; fi

echo "Installing dependencies..."
yarn install

echo "Starting server in development mode..."
yarn dev
