#!/bin/sh

echo "Removing node_modules"
rm -rf node_modules/

echo "Installing dependencies"
npm install

echo "Generates .env file"
cp .env.example .env

# echo "Creating database"
# npm run db:create

# echo "Running database migrations"
# npm run db:setup

echo "Migrating database"
npm run db:migrate

echo "Seeding database"
npm run db:seed

echo "Starts server on port 3000"
npm start

