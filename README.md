# Project Setup

## Install Dependencies
```zsh
brew install yarn
brew install nvm
brew install --cask doppler
```

## Configure Node Version
```zsh
nvm install
nvm use
```

## Install Packages
```zsh
yarn install
```

## Populate .env
```zsh
doppler login
doppler setup
yarn env
```

## Build and run project
```zsh
yarn build && yarn dev
```