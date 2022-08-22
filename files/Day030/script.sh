#!/bin/bash

echo "What coding day is it?"

read day

# Start script
echo "Running Script for Day $day"
sleep 1

# Create new brach to work out of
echo "Create new branch"
git checkout -b Day-$day
sleep 1

# create directory
echo "Create directory"
mkdir ../Day0$day/
sleep 1

# Create markdown
echo "Create markdown"
touch ../Day0$day/README.md 
sleep 1

# add staging changes
echo "Add staging changes"
git add .
sleep 1

# commit changes
echo "Commit changes"
git commit -m "add folder & markdown"
sleep 1

# push changes to current branch
echo "Push changes to current branch"
git push -u origin Day-$day
sleep 1

# complete
echo "Complete! Happy coding!"
