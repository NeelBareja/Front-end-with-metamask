import { useState } from "react";
import { ethers } from "ethers";
import MyCustomMetamask_abi from "./MyCustomMetamask_abi.json";

const MyCustomMetamask = () => {
  const contractAddress = "0xd9145CCE52D386f254917e481eB44e9943F39138";

  const [value, setValue] = useState(undefined);
  const [str, setStr] = useState(undefined);
  const [address, setAddress] = useState("0x0000");
  const [connectButtonText, setConnectButtonText] = useState(
    "Connect MetaMask"
  );

  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [contract, setContract] = useState(null);

  async function requestAccount() {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        accountChangeHandler(accounts[0]);
        setConnectButtonText("Connected to Wallet");
      } catch (error) {
        console.log("error");
      }
    } else {
      alert("absent");
    }
  }

  const accountChangeHandler = (newAccount) => {
    try {
      setAddress(newAccount);
      updateEther();
    } catch (error) {
      console.log("error");
    }
  };

  const updateEther = () => {
    try {
      let tempProvider = new ethers.providers.Web3Provider(window.ethereum);
      setProvider(tempProvider);

      let tempSigner = tempProvider.getSigner();
      setSigner(tempSigner);

      let tempContract = new ethers.Contract(
        contractAddress,
        MyCustomMetamask_abi,
        tempSigner
      );
      setContract(tempContract);
    } catch (error) {
      console.log(error);
    }
  };

  const setNumber = async () => {
    try {
      contract.setNumbers(
        document.getElementById("n1").value,
        document.getElementById("n2").value
      );
    } catch (error) {
      console.log(error);
    }
  };

  const addition = async () => {
    try {
      let s = await contract.getAddition();
      setValue(s.toString());
    } catch (error) {
      console.log(error);
    }
  };

  const division = async () => {
    try {
      let d = await contract.getDivision();
      setValue(d.toString());
    } catch (error) {
      console.log("error");
    }
  };

  const setText = async () => {
    contract.setString(document.getElementById("text").value);
  };

  const getText = async () => {
    try {
      let val = await contract.getString();
      setStr(val);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <h1>Connect MetaMask to Front-end</h1>
      <h2>Address : {address}</h2>

      <button onClick={requestAccount}>{connectButtonText}</button>

      <br />
      <br />

      <input type="number" id="n1" />
      <input type="number" id="n2" />
      <br />
      <br />
      <button onClick={setNumber}>Enter</button>
      <button onClick={addition}>Addition</button>
      <button onClick={division}>Division</button>

      <p>Ans: {value}</p>

      <input id="text" />

      <br />
      <br />

      <button onClick={setText}>Enter</button>
      <button onClick={getText}>Show</button>
      <p>{str}</p>
    </div>
  );
};

export default MyCustomMetamask;
