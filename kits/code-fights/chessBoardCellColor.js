
function chessBoardCellColor(cell1, cell2) {
    const odds = ["A", "C", "E", "G"];
    const evens = ["B", "D", "F", "H"];

    function isDark(cell) {
        if (evens.includes(cell[0]) && (+cell[1] % 2 === 0)) {
            return true;
        } else if (odds.includes(cell[0]) && (+cell[1] % 2 === 1)) {
            return true;
        }
        return false;
    }
    return isDark(cell1) === isDark(cell2);
}

console.log(chessBoardCellColor("A1", "A2"));
