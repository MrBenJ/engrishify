module.exports = function Engrishify(string) {
    return string ? string.replace('l', 'r').replace('L', 'R') : '';
}
