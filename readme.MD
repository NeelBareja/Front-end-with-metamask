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

Open three separate terminals in Visual Studio Code.
In the first terminal, run: npm i
In the second terminal, execute: remixd
In the third terminal, run: npx hardhat node
Access Remix IDE by visiting https://remix.ethereum.org/ and connecting to localhost.
Connect MetaMask to the Hardhat server:
Within the MetaMask extension, click the network selection dropdown (top-right corner).
Choose "Custom RPC form Ganacha".
Input http://localhost:7545 as the RPC URL and save it.
Set 3137 as the Chain ID.
Import an account or create a new one in MetaMask and switch to it.
Open the contract.sol file.
Adjust the environment to the hardhat network.
Compile and deploy the smart contract on https://remix.ethereum.org.
Copy the contract address and paste it into the MyCustomMetamask.jsx file, setting the value of the contractAddress variable.
Run the development server: npm run dev
Navigate to http://localhost:5173/ in your web browser.
Click on the "Connect to MetaMask" button.
Input a number in the provided field and click "Enter".
Utilize "Addition" or "Division" to obtain the result.
Enter text in the input field and click "Enter".
Click "Show" to view the stored text.

## Developer

- Neel Bareja
- GitHub: [https://github.com/NeelBareja]
