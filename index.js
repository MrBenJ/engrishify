module.exports = function Engrishify(string) {
    return string ? string.replace(/l/g, 'r').replace(/L/g, 'R') : '';
}
