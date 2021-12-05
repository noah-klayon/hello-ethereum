// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";
import "hardhat/console.sol";

contract NoahToken is ERC20 {
    uint256 public initialSupply = 1000000;

    constructor() ERC20("Noah Token", "NAH") {
        _mint(msg.sender, initialSupply);
        console.log("Token initialized. initialSupply=%s", initialSupply);
    }
}