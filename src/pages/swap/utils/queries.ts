import { BigNumber, ethers } from "ethers";
import { contract, tokenContract } from "./contract";

export async function swapEthToToken(tokenName: string, amount: string) {
  try {
    let tx = { value: toWei(amount) };

    const contractObj = await contract();
    const data = await contractObj?.swapEthToToken(tokenName, tx);

    const receipt = await data.wait();
    return receipt;
  } catch (e) {
    return parseErrorMsg(e);
  }
}

export async function hasValidAllowance(
  owner: `0x${string}` | undefined,
  tokenName: string,
  amount: string
) {
  try {
    const contractObj = await contract();
    const address = await contractObj?.getTokenAddress(tokenName);

    const tokenContractObj = await tokenContract(address);
    const data = await tokenContractObj?.allowance(
      owner,
      process.env.REACT_APP_CONTRACT_ADDRESS
    );

    const result = BigNumber.from(data.toString()).gte(
      BigNumber.from(toWei(amount))
    );

    return result;
  } catch (e) {
    return parseErrorMsg(e);
  }
}

export async function swapTokenToEth(
  tokenName: string,

  amount: string | number | BigNumber | ethers.BigNumber | ethers.BigNumberish
) {
  try {
    const contractObj = await contract();
    const data = await contractObj?.swapTokenToEth(tokenName, toWei(amount));

    const receipt = await data.wait();
    return receipt;
  } catch (e) {
    return parseErrorMsg(e);
  }
}

export async function swapTokenToToken(
  srcToken: string,
  destToken: string,
  amount: string | number | BigNumber | ethers.BigNumber | ethers.BigNumberish
) {
  try {
    const contractObj = await contract();
    const data = await contractObj?.swapTokenToToken(
      srcToken,
      destToken,
      toWei(amount)
    );

    const receipt = await data.wait();
    return receipt;
  } catch (e) {
    return parseErrorMsg(e);
  }
}

export async function getTokenBalance(tokenName: string, address: string) {
  const contractObj = await contract();
  const balance = contractObj?.getBalance(tokenName, address);
  return balance;
}

export async function getTokenAddress(tokenName: string) {
  try {
    const contractObj = await contract();
    const address = await contractObj?.getTokenAddress(tokenName);
    return address;
  } catch (e) {
    return parseErrorMsg(e);
  }
}

export async function increaseAllowance(
  tokenName: string,
  amount: string | number | BigNumber | ethers.BigNumber | ethers.BigNumberish
) {
  try {
    const contractObj = await contract();
    const address = await contractObj?.getTokenAddress(tokenName);

    const tokenContractObj = await tokenContract(address);
    const data = await tokenContractObj?.approve(
      process.env.REACT_APP_CONTRACT_ADDRESS,
      toWei(amount)
    );

    const receipt = await data.wait();
    return receipt;
  } catch (e) {
    return parseErrorMsg(e);
  }
}

function toWei(
  amount: string | number | BigNumber | ethers.BigNumber | ethers.BigNumberish
) {
  const toWei = ethers.utils.parseUnits(amount.toString());
  return toWei.toString();
}

function parseErrorMsg(e: any) {
  const json = JSON.parse(JSON.stringify(e));
  return json?.reason || json?.error?.message;
}
