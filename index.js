#!/usr/bin/env node
/**
 * @description node-abi clify
 * @author YHW 2022-02-21
 */

import { program } from "commander";
import { getAll, getTargetByAbi, getAbiByTarget } from "./utils/abi-utils.js";

// nodeAbi-cli version
program.version("0.1.0");

program
    .command("getAll")
    .description("get all info of electron and node.js")
    .action(getAll);

// getTarget command
program
    .command("getTarget")
    .description("get target by the ABI of electron or node.js")
    .option("-a --abi <abi>", "the ABI number you want to get target by")
    .option("-p --platform <platform>", "the platform you want to get target by")
    .action(options => {
        getTargetByAbi(options.abi, options.platform)
    });

// getAbi command
program
    .command("getAbi")
    .description("get ABI by the target of electron or node.js")
    .option("-t --target <target>", "the target number you want to get ABI by")
    .option("-p --platform <platform>", "the platform you want to get target by")
    .action(options => {
        getAbiByTarget(options.target, options.platform)
    });

program.parse(process.argv);

