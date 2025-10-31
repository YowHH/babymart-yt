(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/lib/wishlistApi.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "addToWishlist": ()=>addToWishlist,
    "clearWishlist": ()=>clearWishlist,
    "getUserWishlist": ()=>getUserWishlist,
    "getWishlistProducts": ()=>getWishlistProducts,
    "removeFromWishlist": ()=>removeFromWishlist
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const API_BASE_URL = ("TURBOPACK compile-time value", "http://localhost:8000/api") || "http://localhost:8000/api";
const addToWishlist = async (productId, token)=>{
    try {
        const response = await fetch("".concat(API_BASE_URL, "/wishlist/add"), {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer ".concat(token)
            },
            body: JSON.stringify({
                productId
            })
        });
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "Failed to add to wishlist");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error adding to wishlist:", error);
        throw error;
    }
};
const removeFromWishlist = async (productId, token)=>{
    try {
        const response = await fetch("".concat(API_BASE_URL, "/wishlist/remove"), {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer ".concat(token)
            },
            body: JSON.stringify({
                productId
            })
        });
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "Failed to remove from wishlist");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error removing from wishlist:", error);
        throw error;
    }
};
const getUserWishlist = async (token)=>{
    try {
        const response = await fetch("".concat(API_BASE_URL, "/wishlist"), {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer ".concat(token)
            }
        });
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "Failed to get wishlist");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error getting wishlist:", error);
        throw error;
    }
};
const getWishlistProducts = async (productIds, token)=>{
    try {
        const response = await fetch("".concat(API_BASE_URL, "/wishlist/products"), {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer ".concat(token)
            },
            body: JSON.stringify({
                productIds
            })
        });
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "Failed to get wishlist products");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error getting wishlist products:", error);
        throw error;
    }
};
const clearWishlist = async (token)=>{
    try {
        const response = await fetch("".concat(API_BASE_URL, "/wishlist/clear"), {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer ".concat(token)
            }
        });
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "Failed to clear wishlist");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error clearing wishlist:", error);
        throw error;
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/node_modules/next/dist/compiled/process/browser.js [app-client] (ecmascript)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
(function() {
    var e = {
        229: function(e) {
            var t = e.exports = {};
            var r;
            var n;
            function defaultSetTimout() {
                throw new Error("setTimeout has not been defined");
            }
            function defaultClearTimeout() {
                throw new Error("clearTimeout has not been defined");
            }
            (function() {
                try {
                    if (typeof setTimeout === "function") {
                        r = setTimeout;
                    } else {
                        r = defaultSetTimout;
                    }
                } catch (e) {
                    r = defaultSetTimout;
                }
                try {
                    if (typeof clearTimeout === "function") {
                        n = clearTimeout;
                    } else {
                        n = defaultClearTimeout;
                    }
                } catch (e) {
                    n = defaultClearTimeout;
                }
            })();
            function runTimeout(e) {
                if (r === setTimeout) {
                    return setTimeout(e, 0);
                }
                if ((r === defaultSetTimout || !r) && setTimeout) {
                    r = setTimeout;
                    return setTimeout(e, 0);
                }
                try {
                    return r(e, 0);
                } catch (t) {
                    try {
                        return r.call(null, e, 0);
                    } catch (t) {
                        return r.call(this, e, 0);
                    }
                }
            }
            function runClearTimeout(e) {
                if (n === clearTimeout) {
                    return clearTimeout(e);
                }
                if ((n === defaultClearTimeout || !n) && clearTimeout) {
                    n = clearTimeout;
                    return clearTimeout(e);
                }
                try {
                    return n(e);
                } catch (t) {
                    try {
                        return n.call(null, e);
                    } catch (t) {
                        return n.call(this, e);
                    }
                }
            }
            var i = [];
            var o = false;
            var u;
            var a = -1;
            function cleanUpNextTick() {
                if (!o || !u) {
                    return;
                }
                o = false;
                if (u.length) {
                    i = u.concat(i);
                } else {
                    a = -1;
                }
                if (i.length) {
                    drainQueue();
                }
            }
            function drainQueue() {
                if (o) {
                    return;
                }
                var e = runTimeout(cleanUpNextTick);
                o = true;
                var t = i.length;
                while(t){
                    u = i;
                    i = [];
                    while(++a < t){
                        if (u) {
                            u[a].run();
                        }
                    }
                    a = -1;
                    t = i.length;
                }
                u = null;
                o = false;
                runClearTimeout(e);
            }
            t.nextTick = function(e) {
                var t = new Array(arguments.length - 1);
                if (arguments.length > 1) {
                    for(var r = 1; r < arguments.length; r++){
                        t[r - 1] = arguments[r];
                    }
                }
                i.push(new Item(e, t));
                if (i.length === 1 && !o) {
                    runTimeout(drainQueue);
                }
            };
            function Item(e, t) {
                this.fun = e;
                this.array = t;
            }
            Item.prototype.run = function() {
                this.fun.apply(null, this.array);
            };
            t.title = "browser";
            t.browser = true;
            t.env = {};
            t.argv = [];
            t.version = "";
            t.versions = {};
            function noop() {}
            t.on = noop;
            t.addListener = noop;
            t.once = noop;
            t.off = noop;
            t.removeListener = noop;
            t.removeAllListeners = noop;
            t.emit = noop;
            t.prependListener = noop;
            t.prependOnceListener = noop;
            t.listeners = function(e) {
                return [];
            };
            t.binding = function(e) {
                throw new Error("process.binding is not supported");
            };
            t.cwd = function() {
                return "/";
            };
            t.chdir = function(e) {
                throw new Error("process.chdir is not supported");
            };
            t.umask = function() {
                return 0;
            };
        }
    };
    var t = {};
    function __nccwpck_require__(r) {
        var n = t[r];
        if (n !== undefined) {
            return n.exports;
        }
        var i = t[r] = {
            exports: {}
        };
        var o = true;
        try {
            e[r](i, i.exports, __nccwpck_require__);
            o = false;
        } finally{
            if (o) delete t[r];
        }
        return i.exports;
    }
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = ("TURBOPACK compile-time value", "/ROOT/node_modules/next/dist/compiled/process") + "/";
    var r = __nccwpck_require__(229);
    module.exports = r;
})();
}}),
"[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
var _global_process, _global_process1;
module.exports = ((_global_process = ("TURBOPACK ident replacement", globalThis).process) == null ? void 0 : _global_process.env) && typeof ((_global_process1 = ("TURBOPACK ident replacement", globalThis).process) == null ? void 0 : _global_process1.env) === 'object' ? ("TURBOPACK ident replacement", globalThis).process : __turbopack_context__.r("[project]/node_modules/next/dist/compiled/process/browser.js [app-client] (ecmascript)"); //# sourceMappingURL=process.js.map
}}),
}]);

//# sourceMappingURL=_221986e9._.js.map