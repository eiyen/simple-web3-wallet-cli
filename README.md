# 简易 Web3 钱包命令行工具  

这是一个简单的命令行工具，用于与以太坊区块链进行交互。此工具仅用于教育目的，不适合生产环境使用。通过此钱包，你可以创建一个新的以太坊钱包，并检查现有以太坊地址的余额。  

## 先决条件  

- Node.js v14 或更高版本 
- Infura API 密钥  
## 安装 

1. 克隆此仓库：
```sh
git clone https://github.com/eiyen/simple-web3-wallet-cli.git
cd simple-web3-wallet-cli
```

2. 安装依赖：
```sh
npm install
```

3. 在项目的根目录中创建一个 `.env` 文件，并添加你的 Infura API 密钥：

```env
INFURA_API_KEY=你的_infura_api_密钥
```

## 使用方法

### 创建新钱包

运行以下命令创建一个新的以太坊钱包：

```sh
node wallet.js create-wallet
```

此命令将生成一个新的以太坊地址及其关联的私钥。请务必妥善保管私钥，不要与任何人分享。

### 查询余额

运行以下命令查询以太坊地址的余额：

```sh
node wallet.js get-balance 你的以太坊钱包地址
```

请将 `你的以太坊地址` 替换为你想要查询余额的以太坊地址。

## 免责声明

此项目仅用于教育目的，不应在生产环境或使用真实资金时使用。作者对因使用此软件而造成的任何损失或损害概不负责。

## 参与贡献

欢迎对此项目做出贡献。请随时分叉此仓库并提交拉取请求。

## 许可证

[MIT](https://chat.openai.com/c/LICENSE)