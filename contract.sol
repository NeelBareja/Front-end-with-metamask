// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;

contract Test {
    string str;
    int x;
    int y;

    function setString(string memory _str) public {
        str = _str;
    }

    function getString() public view returns (string memory) {
        return str;
    }

    function setNumbers(int _x, int _y) public {
        x = _x;
        y = _y;
    }

    function getSum() public view returns (int) {
        return x + y;
    }

    function getDifference() public view returns (int) {
        return x / y;
    }
}
