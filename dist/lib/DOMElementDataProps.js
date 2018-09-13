"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var kebabToCamel_1 = require("./kebabToCamel");
function DOMElementDataProps(el) {
    var props = {};
    if (el) {
        for (var attrName in el.attributes) {
            if (el.attributes.hasOwnProperty(attrName)) {
                var attr = el.attributes[attrName];
                if (attr.name.indexOf('data-props') === 0) {
                    var name_1 = kebabToCamel_1.default(attr.name.replace('data-props-', ''));
                    props[name_1] = attr.value;
                }
            }
        }
    }
    return props;
}
exports.default = DOMElementDataProps;
//# sourceMappingURL=DOMElementDataProps.js.map