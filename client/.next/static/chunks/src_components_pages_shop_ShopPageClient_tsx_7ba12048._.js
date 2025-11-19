(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/pages/shop/ShopPageClient.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/lib/api.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/api.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const ShopPageClient = (param)=>{
    let { categories, brands } = param;
    _s();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const [category, setCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(searchParams.get("category") || "");
    const [brand, setBrand] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(searchParams.get("brand") || "");
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(searchParams.get("search") || "");
    const [products, setProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loadingMore, setLoadingMore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [newlyLoadedProducts, setNewlyLoadedProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [total, setTotal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [priceRange, setPriceRange] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [sortOrder, setSortOrder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("asc");
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [invalidCategory, setInvalidCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isFiltersOpen, setIsFiltersOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const productsPerPage = 10;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ShopPageClient.useEffect": ()=>{
            const cotegoryFromUrl = searchParams.get("category");
            if (cotegoryFromUrl) {
                const categoryExits = categories.some({
                    "ShopPageClient.useEffect.categoryExits": (cat)=>cat._id === cotegoryFromUrl
                }["ShopPageClient.useEffect.categoryExits"]);
                if (!categoryExits) {
                    const categoryName = categories.find({
                        "ShopPageClient.useEffect.categoryName": (cat)=>cat.name.toLocaleLowerCase() === cotegoryFromUrl.toLocaleLowerCase()
                    }["ShopPageClient.useEffect.categoryName"]);
                    if (categoryName) {
                        setCategory(cotegoryFromUrl);
                    } else {
                        setInvalidCategory(cotegoryFromUrl);
                        setCategory("");
                    }
                }
            }
        }
    }["ShopPageClient.useEffect"], [
        searchParams,
        categories
    ]);
    const fetchProducts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ShopPageClient.useCallback[fetchProducts]": async function() {
            let loadMore = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
            if (loadMore) {
                setLoadingMore(true);
            } else {
                setLoading(true);
            }
            try {
                const params = new URLSearchParams();
                if (category) params.append("category", category);
                if (brand) params.append("brand", brand);
                if (search) params.append("search", search);
                if (priceRange) {
                    params.append("priceMin", priceRange[0].toString());
                    params.append("priceMax", priceRange[1].toString());
                }
                params.append("page", currentPage.toString());
                params.append("limit", productsPerPage.toString());
                params.append("sortOrder", sortOrder);
                const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["fetchData"])("/products?".concat(params.toString()));
                setTotal(response === null || response === void 0 ? void 0 : response.total);
                if (loadMore) {
                    setNewlyLoadedProducts(response.products);
                    setProducts({
                        "ShopPageClient.useCallback[fetchProducts]": (prev)=>[
                                ...prev,
                                ...response.products
                            ]
                    }["ShopPageClient.useCallback[fetchProducts]"]);
                } else {
                    setNewlyLoadedProducts([]);
                    setProducts(response.products);
                }
            } catch (error) {
                console.log("Failed to fetch products:", error);
                setTotal(0);
                if (!loadMore) {
                    setProducts([]);
                }
            } finally{
                setLoading(false);
                setLoadingMore(false);
            }
        }
    }["ShopPageClient.useCallback[fetchProducts]"], [
        category,
        brand,
        search,
        priceRange,
        sortOrder,
        productsPerPage,
        currentPage
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ShopPageClient.useEffect": ()=>{
            fetchProducts();
            setCurrentPage(1);
        }
    }["ShopPageClient.useEffect"], [
        category,
        brand,
        search,
        priceRange,
        sortOrder
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ShopPageClient.useEffect": ()=>{
            if (currentPage > 1) {
                fetchProducts(true);
            }
        }
    }["ShopPageClient.useEffect"], [
        currentPage,
        fetchProducts
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ShopPageClient.useEffect": ()=>{
            if (newlyLoadedProducts.length > 0) {
                const timer = setTimeout({
                    "ShopPageClient.useEffect.timer": ()=>{
                        setNewlyLoadedProducts([]);
                    }
                }["ShopPageClient.useEffect.timer"], 100);
                return ({
                    "ShopPageClient.useEffect": ()=>clearTimeout(timer)
                })["ShopPageClient.useEffect"];
            }
        }
    }["ShopPageClient.useEffect"], [
        newlyLoadedProducts
    ]);
    const totalPages = Math.ceil(total / productsPerPage);
    const hasMoreProducts = products.length < total && currentPage < totalPages;
    const priceRanges = [
        [
            0,
            20
        ],
        [
            20,
            50
        ],
        [
            50,
            100
        ],
        [
            100,
            Infinity
        ]
    ];
    const loadMoreProducts = ()=>{
        if (hasMoreProducts && !loadingMore) {
            setCurrentPage((prev)=>prev + 1);
        }
    };
    const resetCategory = ()=>{
        setCategory("");
        setCurrentPage(1);
        setInvalidCategory("");
    };
    const resetBrand = ()=>{
        setBrand("");
        setCurrentPage(1);
    };
    const resetSearch = ()=>{
        setSearch("");
        setCurrentPage(1);
    };
    const resetPriceRange = ()=>{
        setPriceRange(null);
        setCurrentPage(1);
    };
    const resetSortOrder = ()=>{
        setSortOrder("asc");
        setCurrentPage(1);
    };
    const resetAllFilters = ()=>{
        setCategory("");
        setBrand("");
        setSearch("");
        setPriceRange(null);
        setSortOrder("asc");
        setCurrentPage(1);
        setInvalidCategory("");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: "client page"
        }, void 0, false, {
            fileName: "[project]/src/components/pages/shop/ShopPageClient.tsx",
            lineNumber: 188,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/pages/shop/ShopPageClient.tsx",
        lineNumber: 187,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ShopPageClient, "8NSkgQR64uGNHP4CLQ0jBgy0Dc4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = ShopPageClient;
const __TURBOPACK__default__export__ = ShopPageClient;
var _c;
__turbopack_context__.k.register(_c, "ShopPageClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_components_pages_shop_ShopPageClient_tsx_7ba12048._.js.map