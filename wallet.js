require('dotenv').config();
const ethers = require('ethers');

function getProvider() {
    const infuraKey = process.env.INFURA_API_KEY;
    return new ethers.providers.InfuraProvider('mainnet', infuraKey);
}

function createWallet() {
    const wallet = ethers.Wallet.createRandom();
    console.log('钱包地址', wallet.address);
    console.log('私钥：', wallet.privateKey);
}

async function getBalance(address) {
    const provider = getProvider();
    const balance = await provider.getBalance(address);
    console.log('余额：', ethers.utils.formatEther(balance), 'ETH');
}

async function main() {
    const [command, argument] = process.argv.slice(2);

    switch (command) {
        case 'create-wallet':
            createWallet();
            break;
        case 'get-balance':
            if (!argument) {
                console.log('请提供钱包地址')
                return;
            }
            await getBalance(argument);
            break;
        default:
            console.log('未输入正确的命令，请使用 "create-wallet" 或者 "get-balance" 作为命令。');
    }
}

main()