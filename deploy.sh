#!/usr/bin/env sh

set -e

npm run build 

cd dist 

git init 
git add -A
git commit -m 'deploy'
git push -f git@github.com:Sabit-Umarov/users-table.git main:gh-pages

cd -
