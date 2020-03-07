define("foo/bar/bar", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function makeBar() {
        return { bar: { bar: "bar" } };
    }
    exports.makeBar = makeBar;
});
define("foo/bar/index", ["require", "exports", "foo/bar/bar"], function (require, exports, bar_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(bar_1);
});
define("foo/index", ["require", "exports", "foo/bar/index"], function (require, exports, bar_2) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(bar_2);
});
define("use-bar", ["require", "exports", "foo/index"], function (require, exports, foo_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.bar = foo_1.makeBar();
});
//# sourceMappingURL=amd.js.map