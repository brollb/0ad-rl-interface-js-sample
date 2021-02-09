import zero_ad
from os import path

script_dir = path.dirname(path.realpath(__file__))
scenario_config_path = path.join(script_dir, 'arcadia.json')
with open(scenario_config_path, 'r') as f:
    arcadia_config = f.read()

game = zero_ad.ZeroAD('http://localhost:6000')
state = game.reset(arcadia_config)
for _ in range(500):
    game.step()
    print('step!')
