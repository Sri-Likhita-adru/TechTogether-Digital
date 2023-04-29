/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import React, { useState, useEffect } from 'react'
import { Link, useNavigate, NavLink } from 'react-router-dom'
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import Web3 from "web3";
import detectEthereumProvider from "@metamask/detect-provider";


export default function Navbar() {

    const [connected, setConnected] = useState(false);
    const [accounts, setAccounts] = useState([]);

    useEffect(() => {
        async function checkConnection() {
            const provider = await detectEthereumProvider();
            if (provider) {
                const web3 = new Web3(provider);
                const accounts = await web3.eth.getAccounts();
                if (accounts.length > 0) {
                    setConnected(true);
                    setAccounts(accounts);
                }
            }
        }
        checkConnection();
    }, []);

    async function handleConnectWallet() {
        const provider = await detectEthereumProvider();
        if (provider) {
            await provider.request({ method: "eth_requestAccounts" });
            setConnected(true);
            const web3 = new Web3(provider);
            const accounts = await web3.eth.getAccounts();
            setAccounts(accounts);
        }
    }

    async function handleDisconnectWallet() {
        const provider = await detectEthereumProvider();
        if (provider) {
            await provider.request({ method: "wallet_requestPermissions", params: [{ eth_accounts: {} }] });
            setConnected(false);
            setAccounts([]);
        }
    }

    return (
        <div>
            <div
                className="flex justify-between md:justify-around py-4 w-full top-0 left-0 right-0 z-10 px-8 md:px-3">

                <div className="flex items-center">

                    <a className="cursor-pointer">
                        <h3 className="text-3xl w-44 font-medium text-white">
                            Vite + React
                        </h3>
                    </a>
                </div>

                <div
                    className="items-center md:space-x-8 justify-center justify-items-start md:justify-items-center md:flex md:pt-2 w-full left-0 top-16 px-5 md:px-10 py-3 md:py-0 border-t md:border-t-0 text-xl">

                    <Link to="/">
                        <span className="inline-flex w-auto px-3 py-2 rounded hover:bg-tertiary cursor-pointer text-white">Home</span>
                    </Link>

                    <Link to="/buyitems">
                        <span className="inline-flex w-auto px-3 py-2 rounded hover:bg-tertiary cursor-pointer text-white">Buy Items</span>
                    </Link>

                    <Link to="/sellitems">
                        <span className="inline-flex w-auto px-3 py-2 rounded hover:bg-tertiary cursor-pointer text-white">Sell Items</span>
                    </Link>

                    <Link to="/donate">
                        <span className="inline-flex w-auto px-3 py-2 rounded hover:bg-tertiary cursor-pointer text-white">Donate</span>
                    </Link>
                </div>

                <button className="flex items-center space-x-5 md:flex w-40 pl-2 rounded-xl bg-tertiary text-white" onClick={connected ? handleDisconnectWallet : handleConnectWallet}>
                    {connected ? `Disconnect Wallet` : "Connect Wallet"}
                </button>

                {/* <button className="flex items-center space-x-5 md:flex w-40 pl-2 rounded-xl bg-tertiary text-white">
                    Connect Wallet
                </button> */}

            </div>
        </div>
    )
}