# MetaMask Wallet Connection for Frontend

## Overview

This repository contains a frontend application designed to integrate seamlessly with MetaMask, enabling users to engage with a smart contract. The application facilitates the setting of numbers, executing calculations, and storing text on the Ethereum network.

## Getting Started

To begin using this project, adhere to the instructions outlined below:

### Prerequisites

- Ensure that Node.js and npm are installed on your machine.
- Have the MetaMask extension installed in your web browser.

### Installation

1. Clone the repository: https://github.com/NeelBareja/Front-end-with-metamask.git
2. Install the required dependencies: npm install


### Executing Program

### Running the Program

Proceed with the following steps to execute the program:

1. Open three separate terminals in Visual Studio Code.
2. In the first terminal, run: npm i
3. In the second terminal, execute: remixd
4. In the third terminal, run: npx hardhat node
5. Access Remix IDE by visiting https://remix.ethereum.org/ and connecting to localhost.
6. Connect MetaMask to the Hardhat server:
7. Within the MetaMask extension, click the network selection dropdown (top-right corner).
8. Choose "Custom RPC form Ganacha".
9. Input http://localhost:7545 as the RPC URL and save it.
10. Set 3137 as the Chain ID.
11. Import an account or create a new one in MetaMask and switch to it.
12. Open the contract.sol file.
13. Adjust the environment to the hardhat network.
14. Compile and deploy the smart contract on https://remix.ethereum.org.
15. Copy the contract address and paste it into the MyCustomMetamask.jsx file, setting the value of the contractAddress variable.
16. Run the development server: npm run dev
17. Navigate to http://localhost:5173/ in your web browser.
18. Click on the "Connect to MetaMask" button.
19. Input a number in the provided field and click "Enter".
20. Utilize "Addition" or "Division" to obtain the result.
21. Enter text in the input field and click "Enter".
22. Click "Show" to view the stored text.

## Developer

- Neel Bareja
- GitHub: [https://github.com/NeelBareja]
