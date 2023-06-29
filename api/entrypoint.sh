#!/bin/sh

echo "Installing dependencies..."
yarn install
echo "done..."

echo "Starting server in development mode..."
yarn start:dev
