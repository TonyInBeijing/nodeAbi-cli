/**
 * @description node-abi functions
 * @author YHW 2022-02-22
 */

const nodeAbi = require("node-abi");

const PLATFROM_LIST = ["node", "electron"];

const _AllowedPlatform = platform => PLATFROM_LIST.includes(platform);
const _AllowedAbi = abi => !isNaN(parseInt(abi));


/**
 * @description get version by the ABI of electron or node.js
 * @param {string} abi 
 * @param {string} platform 
 * @returns 
 */
const getTargetByAbi = (abi, platform) => {
    if (!_AllowedPlatform(platform)) {
        console.error(`Platform must be 'node' or 'electron','${platform}' is not ok !`);
        return;
    }
    if (!_AllowedAbi(abi)) {
        console.error(`Illgal ABI number! Please check again.`);
        return;
    }
    const target = nodeAbi.getTarget(abi.toString(), platform);
    console.log(target);
};


module.exports = {
    getTargetByAbi
};