## Requirements
- node v17.3.0

```sh
# Switch in terminal
nvm use 17.3.0

#List all node versions
nvm ls
```

```sh
# Set node version for project
touch .nvmrc
Add 17.3.0 to .nvmrc
nvm use
node -v
```

```sh
# Create react app
npx create-react-app my-react

# Start local server
cd my-react
npm start

# Start local server with another port
npm start -- --port 4000
```
