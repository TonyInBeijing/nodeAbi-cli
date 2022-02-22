/**
 * @description node-abi functions
 * @author YHW 2022-02-22
 */

import chalk from "chalk";
import nodeAbi from "node-abi";

const PLATFROM_LIST = ["node", "electron"];
const TARGET_REGEX = /\d.\d.\d/;

const _AllowedPlatform = platform => PLATFROM_LIST.includes(platform);
const _AllowedAbi = abi => !isNaN(parseInt(abi));
const _AllowedTarget = target => TARGET_REGEX.test(target);


const getAll = () => {
    console.info(nodeAbi.allTargets);
}

/**
 * @description get version by the ABI of electron or node.js
 * @param {string} abi 
 * @param {string} platform 
 * @returns 
 */
const getTargetByAbi = (abi, platform) => {
    if (!_AllowedPlatform(platform)) {
        console.log(chalk.redBright(`Platform must be 'node' or 'electron','${platform}' is not ok !`));
        return;
    }
    if (!_AllowedAbi(abi)) {
        console.log(chalk.redBright(`Illgal ABI number! Please check again.`));
        return;
    }
    const target = nodeAbi.getTarget(abi.toString(), platform);
    console.log(chalk.green(target));
};


/**
 * @description get ABI by the target of electron or node.js
 * @param {string} target 
 * @param {string} platform 
 * @returns 
 */
const getAbiByTarget = (target, platform) => {
    if (!_AllowedPlatform(platform)) {
        console.log(chalk.redBright(`Platform must be 'node' or 'electron','${platform}' is not ok !`));
        return;
    }
    if (!_AllowedTarget(target)) {
        console.log(chalk.redBright(`Illgal ABI number! Please check again.`));
        return;
    }
    const abi = nodeAbi.getAbi(target, platform);
    console.log(chalk.green(abi));
}

export {
    getAll,
    getTargetByAbi,
    getAbiByTarget
};