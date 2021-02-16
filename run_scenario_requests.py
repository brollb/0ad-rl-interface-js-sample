import requests
from os import path

script_dir = path.dirname(path.realpath(__file__))
scenario_config_path = path.join(script_dir, 'arcadia.json')
with open(scenario_config_path, 'r') as f:
    arcadia_config = f.read()

url = 'http://localhost:6000'
def reset(config):
    r = requests.post(url + '/reset?', headers={'Content-Type': 'application/json'}, data=config)
    return r.json()

def step():
    r = requests.post(url + '/step')
    return r.json()

reset(arcadia_config)
for _ in range(10):
    step()
    print('step!')
