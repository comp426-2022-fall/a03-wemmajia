import minimist from "minimist";
import { roll } from "/lib/roll.js";

const args = minimist(process.argv.splice(2));

let res = roll(args.sides, args.dice, args.rolls);