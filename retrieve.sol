// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IERC20 {
    function balanceOf(address account) external view returns (uint256);
}

contract TokenHolder {
    address[] public tokenHolders;
    address public tokenAddress = 0x7EeF591A6CC0403b9652E98E88476fe1bF31dDeb;
    IERC20 public tokenContract = IERC20(tokenAddress);

    function getTokenHolders() public {
        uint256 totalSupply = tokenContract.balanceOf(address(this));
        for (uint256 i = 0; i < totalSupply; i++) {
            address holder = tokenContract[i];
            if (holder != address(0)) {
                tokenHolders.push(holder);
            }
        }
    }
}
