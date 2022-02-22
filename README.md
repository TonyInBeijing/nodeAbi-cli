# node-abi clify

run node-abi in your terminal instead of set up a project for it !


## Installation

```bash
npm install -g nodeabi-cli
```
## Usage

```bash
# nodeAbi.allTargets
nodeAbi-cli getAll 

# get target by ABI
nodeAbi-cli getTarget -a 51 -p electron
7.2.0

# getABI by target
nodeAbi-cli getAbi -t 7.2.0 -p node
51
```