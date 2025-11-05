#!/bin/bash

# Install Firebase CLI if not already installed
if ! command -v firebase &> /dev/null; then
    echo "Installing Firebase CLI..."
    npm install -g firebase-tools
fi

# Login to Firebase (only needed first time)
firebase login

# Initialize Firebase if not already done
if [ ! -f "firebase.json" ]; then
    echo "Initializing Firebase project..."
    firebase init functions
    firebase init firestore
    firebase init storage
fi

# Build the project (assuming it's a Node.js project)
npm run build

# Deploy to Firebase Cloud Functions and Storage
echo "Deploying to Firebase..."
firebase deploy --only functions,storage,firestore

echo "Deployment complete!"
