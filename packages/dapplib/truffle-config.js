require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess gloom symptom spot warrior ridge remain evil include private bone gesture'; 
let testAccounts = [
"0x3e36381b43a9ea0b356e7d9c50676f4b1c1a788acb922bc23a9c3aa7e99b95e4",
"0xc611b91a9a459cbabdca3af186f7aee981385adc54c9fcb450ab9ef9b0c63c9a",
"0xf8a43c8a3fc8e7543fc9f79607c9880a9e395b2bcc920237253e899ce53d0c16",
"0xe025e6dce9a611660f555c3c271d4b2b01ac96b028311f9ed19ac36195ca6258",
"0x6132f2e90c18e0fbc0381dc42aac3ab567dfd0ded3ca5977971875d65103ec69",
"0x2ccd393358c168e9ca6144c9140cbe078c79c3905456b37db622acaee7344436",
"0xaa067bccd6819183564863d992f4009846e24b9623031976c9132e71d49d3c77",
"0xcb6728652f3a8f4e894d296966b92d5ec6b83f43d040eb479161cdbe528b0fa8",
"0xc60ef8165150977463b80800a25c0449affccb2d0cfb0445ce4e47917acfc91a",
"0xa4e19597f529844b15da00f836024d571bfb76a9e67a9ce9f053b37a4e6625e3"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
