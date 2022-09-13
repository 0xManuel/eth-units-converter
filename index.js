#!/usr/bin/env node

async function fromWeiToEth(wei) {
    return wei / 10e17;
}

async function fromEthToWei(eth) {
    return eth * 10e17;
}

async function fromWeiToGwei(wei) {
    return wei / 10e8;
}

async function fromGweiToWei(gwei) {
    return gwei * 10e8;
}

