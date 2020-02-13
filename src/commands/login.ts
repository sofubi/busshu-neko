import yargs = require('yargs')
import { Argv, Arguments } from 'yargs'

export const command = 'login <username>'
export const desc: string = 'BLAHP'
export const builder = (yargs: Argv) => {
    return yargs.options({
        dir: {
            describe: 'Just a test',
            type: 'string',
            default: 'test'
        }
    })
}
export const handler = (argv: Arguments) => {
    console.log(`${argv.dir}`);
}
