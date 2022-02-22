#!/usr/bin/env node
/**
 * @description node-abi clify
 * @author YHW 2022-02-21
 */

const { program } = require("commander");

const { getTargetByAbi } = require("./utils/node-abi");

program.version("0.1.0");

program
    .command("getTarget")
    .description("get version by the ABI of electron or node.js")
    .option("-a --abi <abi>", "the ABI number you want to get target by")
    .option("-p --platform <platform>", "the platform you want to get target by")
    .action(options => {
        getTargetByAbi(options.abi, options.platform)
    });

program.parse(process.argv);

