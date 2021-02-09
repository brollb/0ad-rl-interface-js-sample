// This is a simple script using the 0 AD RL interface using NodeJS.
// Steps:
//   - Start 0 AD with the RL interface listening on port 6000
//   - Run this script with NodeJS

const fetch = require('node-fetch');
runTests('http://127.0.0.1:6000');

async function runTests(address) {
    await resetScenario(address);
    let i = 0;
    while (i < 500) {
        await stepScenario(address);
        console.log('step!');
        ++i;
    }
}

async function resetScenario(address) {
    const arcadiaConfig = {
        "settings": {
            "TriggerScripts": [
                "scripts/TriggerHelper.js",
                "scripts/ConquestCommon.js",
                "scripts/ConquestUnits.js"
            ],
            "VictoryConditions": [
                "conquest_units"
            ],
            "Name": "Arcadia",
            "mapType": "scenario",
            "AISeed": 0,
            "Seed": 0,
            "CheatsEnabled": true,
            "Ceasefire": 0,
            "WonderDuration": 10,
            "RelicDuration": 10,
            "RelicCount": 2,
            "Size": 256,
            "PlayerData": [
                {
                    "Name": "Player 1",
                    "Civ": "spart",
                    "Color": {
                        "r": 150,
                        "g": 20,
                        "b": 20
                    },
                    "AI": "",
                    "AIDiff": 3,
                    "AIBehavior": "random",
                    "Team": 1
                },
                {
                    "Name": "Player 2",
                    "Civ": "spart",
                    "Color": {
                        "r": 150,
                        "g": 20,
                        "b": 20
                    },
                    "AI": "",
                    "AIDiff": 3,
                    "AIBehavior": "random",
                    "Team": 2
                }
            ]
        },
        "mapType": "scenario",
        "map": "maps/scenarios/arcadia",
        "gameSpeed": 1
    };
    const opts = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(arcadiaConfig),
    };
    const response = await fetch(`${address}/reset`, opts);
    return await response.json();
}

async function stepScenario(address) {
    const opts = {
        method: 'POST',
        body: '',
    };
    const response = await fetch(`${address}/step`, opts);
    return await response.json();
}

