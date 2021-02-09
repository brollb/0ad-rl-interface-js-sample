# Simple(st) script using RL interface from NodeJS
This is a very simple script running a scenario in 0 AD from NodeJS

## Instructions
First, install [NodeJS](https://nodejs.org/en/download/). Next install the dependencies by running the following from the project directory:
```
npm install 
```

Then, start 0 AD in another terminal with the RL interface enabled. For example, you might run the following:
```
pyrogenesis --rl-interface=127.0.0.1:6000 --autostart-nonvisual
```

Finally, run the `run-scenario.js` script:
```
node run-scenario.js
```
