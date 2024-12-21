# CrediFlow

CrediFlow transforms supply chain finance by eliminating inefficiencies, enhancing transparency, and building trust.It streamlines buyer-supplier interactions, secures digital payments, and ensures seamless document management with decentralized storage. CrediFlow brings speed, security, and simplicity to supply chain operations.


## Key Features  

- 🏗️ **Direct Buyer-Supplier Interaction**  
  Eliminate intermediaries by enabling direct communication between buyers and suppliers, streamlining processes, and reducing third-party reliance.  

- ⚙️ **Comprehensive Functionality**  
  Supports a variety of supply chain use cases, including:  
  - 📑 Purchase ordering  
  - 💸 Dynamic discounting  
  - 🌍 Cross-border trading  
  - 🛡️ Supplier risk assessment  

- 🔒 **Secure Digital Payments**  
  Implements an escrow system to ensure safe and reliable cryptocurrency transactions, mitigating fraud risks.  

- ⚡ **Fast and Cost-Effective Transactions**  
  Facilitates quick and low-cost digital payments using cryptocurrencies or digital tokens.  

- 📂 **Decentralized Document Storage**  
  Leverages IPFS services like lighthouse.storage to securely store and share documents, ensuring data integrity and accessibility.  


## Architecture / WorkFlow

Let us consider an example use case here, PURCHASE ORDERING

![image](https://github.com/user-attachments/assets/2cc049eb-38a8-451d-b577-409c0431c81e)

![image](https://github.com/user-attachments/assets/dd1ccc86-86df-4160-9bdc-934bcc585a38)

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (v16 or higher)
- npm package manager
- A compatible crypto wallet (e.g., MetaMask/Phantom)

  
### Installation

Clone the repository:

```bash
git clone https://github.com/Aswinr24/CrediFlow.git
```

Navigate to the project directory:
```bash
cd CrediFlow
```

Install dependencies:
```bash
npm i
```

#### Environment Setup

Create a .env file in the root directory and configure the following variables:

```env
NEXT_PUBLIC_CONTRACT1_ADDRESS=<deployed-contract1-address>
NEXT_PUBLIC_CONTRACT2_ADDRESS=<deployed-contract2-address>
NEXT_PUBLIC_SERVER_URL=<url-of-backend-server-running-app.js>
NEXT_PUBLIC_PROJECT_ID=<wallet-connect-project-id>
LIGHTHOUSE_API_KEY=<your-lighthouse-api-key>
```

#### Run Locally

Start the development server for UI:

```bash
npm run dev
```

Start the backend server for IPFS Storage APIs:

```bash
node app.js
```

#### Build for Production

Build the application for production:

```bash
npm run build
npm start
```

### Smart Contracts Deployment

Navigate to the Contracts Directory

```bash
cd Crediflow_contracts 
```

Install Dependencies for Hardhat

```bash
npm i
```

#### Environment Setup for Smart Contracts

Create a .env file in the contracts directory and configure the following variables:

```env
API_KEY=<YOUR_ALCHEMY_API_KEY>
PRIVATE_KEY=<YOUR_WALLET_PRIVATE_KEY>
```

#### Compile Smart Contracts

Compile the smart contracts using Hardhat:

```bash
npx hardhat compile
```
#### Deploy Smart Contracts

Deploy the contracts to the Polygon zkEVM cardona test network:

```
npx hardhat run scripts/deploy.js --network zkEVMTestnet
```

#### Update Contract Address

After deploying the smart contracts, note the contract addresses and update the ```NEXT_PUBLIC_SMART_CONTRACT1_ADDRESS``` and ```NEXT_PUBLIC_CONTRACT2_ADDRESS``` variables in the .env file of the UI directory.

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvements, please open an issue or clone the repository and submit a pull request on GitHub.

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for more details