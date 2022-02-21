#!/usr/bin/env node
/**
 * @description node-abi clify
 * @author YHW 2022-02-21
 */

const { program } = require("commander");

program.version("0.1.0");
program.parse(process.argv);

console.log("Hello nodeAbi-cli !");