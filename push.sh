#!/bin/bash

# Define the remote repository URL
REMOTE_URL="git@github.com:Mishael-dev/pyxcomerce.git"  # Change this to your desired remote URL

# Check if the current directory is a Git repository
if [ -d ".git" ]; then
    echo "This directory is already a Git repository."
else
    echo "Initializing a new Git repository..."
    git init
fi

# Add all files to the staging area
echo "Adding all files to the staging area..."
git add .

# Ask for a commit message
read -p "Enter your commit message: " COMMIT_MESSAGE

# Commit changes with the provided message
echo "Committing changes..."
git commit -m "$COMMIT_MESSAGE"

# Add the remote origin (if not already added)
if git remote get-url origin &>/dev/null; then
    echo "Remote origin already exists."
else
    echo "Adding remote origin..."
    git remote add origin "$REMOTE_URL"
fi

# Brutally reset the local repository and force push to overwrite everything on the remote
echo "Brutally overwriting the remote repository..."

# Reset the local branch to match your working directory
git checkout --orphan latest_branch   # Create an orphan branch to remove commit history
git add -A                          # Add all files to the staging area
git commit -am "Brutal commit: Overwrite everything"  # Commit changes

# Force push to overwrite everything on the remote
git push -f origin latest_branch:main  # Force push the 'latest_branch' to 'main' branch

# Clean up: delete the temporary branch
git branch -D latest_branch

echo "Repository brutally overwritten and pushed to GitHub!"
