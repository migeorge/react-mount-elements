"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
var DOMElementDataProps_1 = require("./lib/DOMElementDataProps");
function reactMountElements(targetMap) {
    var mount = function () {
        for (var id in targetMap) {
            if (targetMap.hasOwnProperty(id)) {
                var el = document.getElementById(id);
                var props = DOMElementDataProps_1.default(el);
                var Component = React.createElement(targetMap[id], props);
                if (el) {
                    ReactDOM.render(Component, el);
                }
            }
        }
    };
    document.addEventListener('DOMContentLoaded', mount);
    document.addEventListener('turbolinks:load', mount);
}
exports.default = reactMountElements;
//# sourceMappingURL=index.js.map