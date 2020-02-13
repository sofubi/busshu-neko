"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.command = 'login <username>';
exports.desc = 'BLAHP';
exports.builder = (yargs) => {
    return yargs.options({
        dir: {
            describe: 'Just a test',
            type: 'string',
            default: 'test'
        }
    });
};
exports.handler = (argv) => {
    console.log(`${argv.dir}`);
};
//# sourceMappingURL=login.js.map