"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function kebabToCamel(str) {
    var parts = [];
    var res = [];
    if (str.indexOf('-') > -1) {
        parts = str.split('-');
        parts.forEach(function (current, index) {
            var chars = current.split('');
            chars[0] = index === 0 ? chars[0].toLowerCase() : chars[0].toUpperCase();
            res.push(chars.join(''));
        });
        return res.join('');
    }
    else {
        return str;
    }
}
exports.default = kebabToCamel;
//# sourceMappingURL=kebabToCamel.js.map