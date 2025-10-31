(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/lib/authApi.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const baseURL = ("TURBOPACK compile-time value", "http://localhost:8000/api") || "http://localhost:8000";
const getAuthToken = ()=>{
    if (typeof document === "undefined") return undefined;
    const cookies = document.cookie.split(";").reduce((acc, cookie)=>{
        const [name, value] = cookie.trim().split("=");
        acc[name] = value;
        return acc;
    }, {});
    return cookies.auth_token;
};
const authApi = {
    post: async (url, body)=>{
        try {
            const token = getAuthToken();
            const response = await fetch("".concat(baseURL).concat(url), {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    ...token && {
                        Authorization: "Bearer ".concat(token)
                    }
                },
                credentials: "include",
                body: JSON.stringify(body)
            });
            if (!response.ok) {
                let errorMessage = "An error occurred";
                try {
                    const errorData = await response.json();
                    errorMessage = errorData.message || "HTTP error! status: ".concat(response.status);
                } catch (e) {
                    errorMessage = "HTTP error! status: ".concat(response.status);
                }
                return {
                    success: false,
                    error: {
                        message: errorMessage,
                        code: response.status === 0 ? "ERR_NETWORK" : response.status
                    }
                };
            }
            const data = await response.json();
            return {
                success: true,
                data
            };
        } catch (e) {
            return {
                success: false,
                error: {
                    message: "Unable to connect to the server. Please check if the server is running.",
                    code: "ERR_NETWORK"
                }
            };
        }
    },
    put: async (url, body)=>{
        try {
            const token = getAuthToken();
            console.log("authApi: PUT", url, "Token:", !!token);
            const response = await fetch("".concat(baseURL).concat(url), {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    ...token && {
                        Authorization: "Bearer ".concat(token)
                    }
                },
                credentials: "include",
                body: JSON.stringify(body)
            });
            if (!response.ok) {
                let errorMessage = "An error occurred";
                try {
                    const errorData = await response.json();
                    errorMessage = errorData.message || "HTTP error! status: ".concat(response.status);
                } catch (e) {
                    errorMessage = "HTTP error! status: ".concat(response.status);
                }
                console.error("authApi: PUT error:", url, response.status, errorMessage);
                return {
                    success: false,
                    error: {
                        message: errorMessage,
                        code: response.status === 0 ? "ERR_NETWORK" : response.status
                    }
                };
            }
            const data = await response.json();
            return {
                success: true,
                data
            };
        } catch (error) {
            console.error("authApi: Network Error:", url, error);
            return {
                success: false,
                error: {
                    message: "Unable to connect to the server. Please check if the server is running.",
                    code: "ERR_NETWORK"
                }
            };
        }
    },
    get: async (url)=>{
        try {
            const token = getAuthToken();
            console.log("authApi: GET", url, "Token:", !!token);
            const response = await fetch("".concat(baseURL).concat(url), {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    ...token && {
                        Authorization: "Bearer ".concat(token)
                    }
                },
                credentials: "include"
            });
            if (!response.ok) {
                let errorMessage = "An error occurred";
                try {
                    const errorData = await response.json();
                    errorMessage = errorData.message || "HTTP error! status: ".concat(response.status);
                } catch (e) {
                    errorMessage = "HTTP error! status: ".concat(response.status);
                }
                console.error("authApi: GET error:", url, response.status, errorMessage);
                return {
                    success: false,
                    error: {
                        message: errorMessage,
                        code: response.status === 0 ? "ERR_NETWORK" : response.status
                    }
                };
            }
            const data = await response.json();
            return {
                success: true,
                data
            };
        } catch (error) {
            console.error("authApi: Network Error:", url, error);
            return {
                success: false,
                error: {
                    message: "Unable to connect to the server. Please check if the server is running.",
                    code: "ERR_NETWORK"
                }
            };
        }
    },
    delete: async (url)=>{
        try {
            const token = getAuthToken();
            console.log("authApi: DELETE", url, "Token:", !!token);
            const response = await fetch("".concat(baseURL).concat(url), {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    ...token && {
                        Authorization: "Bearer ".concat(token)
                    }
                },
                credentials: "include"
            });
            if (!response.ok) {
                let errorMessage = "An error occurred";
                try {
                    const errorData = await response.json();
                    errorMessage = errorData.message || "HTTP error! status: ".concat(response.status);
                } catch (e) {
                    errorMessage = "HTTP error! status: ".concat(response.status);
                }
                console.error("authApi: DELETE error:", url, response.status, errorMessage);
                return {
                    success: false,
                    error: {
                        message: errorMessage,
                        code: response.status === 0 ? "ERR_NETWORK" : response.status
                    }
                };
            }
            const data = await response.json();
            return {
                success: true,
                data
            };
        } catch (error) {
            console.error("authApi: Network Error:", url, error);
            return {
                success: false,
                error: {
                    message: "Unable to connect to the server. Please check if the server is running.",
                    code: "ERR_NETWORK"
                }
            };
        }
    }
};
const __TURBOPACK__default__export__ = authApi;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/store.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "loadAllUserData": ()=>loadAllUserData,
    "useCartStore": ()=>useCartStore,
    "useCurrencyStore": ()=>useCurrencyStore,
    "useOrderStore": ()=>useOrderStore,
    "useUserStore": ()=>useUserStore,
    "useWishlistStore": ()=>useWishlistStore
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/middleware.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/js-cookie/dist/js.cookie.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$authApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/authApi.ts [app-client] (ecmascript)");
;
;
;
;
const mapCartItemToProduct = (item)=>({
        product: {
            _id: item.productId._id,
            name: item.productId.name,
            description: item.productId.description,
            price: item.productId.price,
            discountPercentage: item.productId.discountPercentage || 0,
            stock: item.productId.stock,
            averageRating: item.productId.averageRating || 0,
            image: item.productId.image || "",
            category: typeof item.productId.category === "string" ? {
                _id: item.productId.category,
                name: "",
                image: "",
                categoryType: ""
            } : item.productId.category,
            brand: typeof item.productId.brand === "string" ? {
                _id: item.productId.brand,
                name: ""
            } : item.productId.brand,
            ratings: item.productId.ratings || []
        },
        quantity: item.quantity
    });
const useUserStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["persist"])((set, get)=>({
        authUser: null,
        authLoading: false,
        auth_token: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("auth_token") || null,
        isAuthenticated: !!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("auth_token"),
        updateUser: (user)=>{
            set({
                authUser: user,
                isAuthenticated: true
            });
        },
        setAuthToken: (token)=>{
            if (token) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].set("auth_token", token, {
                    expires: 7,
                    secure: ("TURBOPACK compile-time value", "development") === "production",
                    sameSite: "lax"
                });
                set({
                    auth_token: token,
                    isAuthenticated: true
                });
                setTimeout(()=>{
                    loadAllUserData(token);
                }, 150);
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].remove("auth_token");
                set({
                    auth_token: null,
                    isAuthenticated: false,
                    authUser: null
                });
            }
        },
        loadUserData: async (token)=>{
            try {
                const promises = [
                    (async ()=>{
                        try {
                            const { getUserWishlist } = await __turbopack_context__.r("[project]/src/lib/wishlistApi.ts [app-client] (ecmascript, async loader)")(__turbopack_context__.i);
                            const { useWishlistStore } = await __turbopack_context__.r("[project]/src/lib/store.ts [app-client] (ecmascript, async loader)")(__turbopack_context__.i);
                            const wishlistResponse = await getUserWishlist(token);
                            if (wishlistResponse.success) {
                                useWishlistStore.getState().setWishlistIds(wishlistResponse.wishlist);
                            }
                        } catch (error) {
                            console.warn("Failed to load wishlist on login:", error);
                        }
                    })(),
                    (async ()=>{
                        try {
                            const { useCartStore } = await __turbopack_context__.r("[project]/src/lib/store.ts [app-client] (ecmascript, async loader)")(__turbopack_context__.i);
                            await useCartStore.getState().syncCartFromServer();
                        } catch (error) {
                            console.warn("Failed to load cart on login:", error);
                        }
                    })(),
                    (async ()=>{
                        try {
                            const { useOrderStore } = await __turbopack_context__.r("[project]/src/lib/store.ts [app-client] (ecmascript, async loader)")(__turbopack_context__.i);
                            await useOrderStore.getState().loadOrders(token);
                        } catch (error) {
                            console.warn("Failed to load orders on login:", error);
                        }
                    })()
                ];
                await Promise.allSettled(promises);
            } catch (error) {
                console.error("Error loading user data:", error);
            }
        },
        logoutUser: async ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].remove("auth_token");
            set({
                authUser: null,
                auth_token: null,
                isAuthenticated: false
            });
            // Clear wishlist, cart, and orders on logout using dynamic imports
            try {
                const { useWishlistStore } = await __turbopack_context__.r("[project]/src/lib/store.ts [app-client] (ecmascript, async loader)")(__turbopack_context__.i);
                useWishlistStore.getState().clearWishlist();
            } catch (error) {
                console.warn("Store: Failed to clear wishlist on logout:", error);
            }
            try {
                const { useCartStore } = await __turbopack_context__.r("[project]/src/lib/store.ts [app-client] (ecmascript, async loader)")(__turbopack_context__.i);
                useCartStore.getState().setCartItems([]);
            } catch (error) {
                console.warn("Store: Failed to clear cart on logout:", error);
            }
            try {
                const { useOrderStore } = await __turbopack_context__.r("[project]/src/lib/store.ts [app-client] (ecmascript, async loader)")(__turbopack_context__.i);
                useOrderStore.getState().clearOrders();
            } catch (error) {
                console.warn("Store: Failed to clear orders on logout:", error);
            }
        },
        verifyAuth: async ()=>{
            const token = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("auth_token");
            if (!token) {
                set({
                    isAuthenticated: false,
                    authUser: null,
                    auth_token: null
                });
                return;
            }
            const currentState = get();
            if (currentState.authUser && currentState.isAuthenticated) {
                return;
            }
            try {
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$authApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("/auth/profile");
                if (response.data) {
                    set({
                        authUser: response.data,
                        isAuthenticated: true,
                        auth_token: token
                    });
                    try {
                        const { getUserWishlist } = await __turbopack_context__.r("[project]/src/lib/wishlistApi.ts [app-client] (ecmascript, async loader)")(__turbopack_context__.i);
                        const { useWishlistStore } = await __turbopack_context__.r("[project]/src/lib/store.ts [app-client] (ecmascript, async loader)")(__turbopack_context__.i);
                        const wishlistResponse = await getUserWishlist(token);
                        if (wishlistResponse.success) {
                            useWishlistStore.getState().setWishlistIds(wishlistResponse.wishlist);
                        }
                    } catch (wishlistError) {
                        console.warn("Store: Failed to load wishlist:", wishlistError);
                    }
                    try {
                        const { useCartStore } = await __turbopack_context__.r("[project]/src/lib/store.ts [app-client] (ecmascript, async loader)")(__turbopack_context__.i);
                        await useCartStore.getState().syncCartFromServer();
                    } catch (cartError) {
                        console.warn("Store: Failed to load cart:", cartError);
                    }
                    try {
                        const { useOrderStore } = await __turbopack_context__.r("[project]/src/lib/store.ts [app-client] (ecmascript, async loader)")(__turbopack_context__.i);
                        await useOrderStore.getState().loadOrders(token);
                    } catch (orderError) {
                        console.warn("Store: Failed to load orders:", orderError);
                    }
                } else {
                    throw new Error("Invalid token");
                }
            } catch (error) {
                console.error("Store: Verify auth error:", error);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].remove("auth_token");
                set({
                    authUser: null,
                    auth_token: null,
                    isAuthenticated: false
                });
            }
        },
        register: async (data)=>{
            try {
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$authApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("/auth/register", data);
                if (!response.data) {
                    var _response_error;
                    throw new Error(((_response_error = response.error) === null || _response_error === void 0 ? void 0 : _response_error.message) || "Registration failed");
                }
            } catch (error) {
                console.error("Store: Register error:", error);
                throw error;
            }
        }
    }), {
    name: "user-storage",
    storage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createJSONStorage"])(()=>localStorage)
}));
const useCartStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["persist"])((set, get)=>({
        cartItems: [],
        cartItemsWithQuantities: [],
        isLoading: false,
        addToCart: async function(product) {
            let quantity = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
            const { auth_token } = useUserStore.getState();
            if (!auth_token) {
                throw new Error("Authentication required");
            }
            set({
                isLoading: true
            });
            try {
                const { addToCart } = await __turbopack_context__.r("[project]/src/lib/cartApi.ts [app-client] (ecmascript, async loader)")(__turbopack_context__.i);
                const response = await addToCart(auth_token, product._id, quantity);
                if (response.success) {
                    const cartItemsWithQuantities = response.cart.map(mapCartItemToProduct);
                    set({
                        cartItemsWithQuantities,
                        cartItems: cartItemsWithQuantities.map((item)=>item.product)
                    });
                }
            } catch (error) {
                console.error("Add to cart error:", error);
                throw error;
            } finally{
                set({
                    isLoading: false
                });
            }
        },
        removeFromCart: async (productId)=>{
            const { auth_token } = useUserStore.getState();
            if (!auth_token) {
                throw new Error("Authentication required");
            }
            set({
                isLoading: true
            });
            try {
                const { removeFromCart } = await __turbopack_context__.r("[project]/src/lib/cartApi.ts [app-client] (ecmascript, async loader)")(__turbopack_context__.i);
                const response = await removeFromCart(auth_token, productId);
                if (response.success) {
                    const cartItemsWithQuantities = response.cart.map(mapCartItemToProduct);
                    set({
                        cartItemsWithQuantities,
                        cartItems: cartItemsWithQuantities.map((item)=>item.product)
                    });
                }
            } catch (error) {
                console.error("Remove from cart error:", error);
                throw error;
            } finally{
                set({
                    isLoading: false
                });
            }
        },
        updateCartItemQuantity: async (productId, quantity)=>{
            const { auth_token } = useUserStore.getState();
            if (!auth_token) {
                throw new Error("Authentication required");
            }
            set({
                isLoading: true
            });
            try {
                const { updateCartItem } = await __turbopack_context__.r("[project]/src/lib/cartApi.ts [app-client] (ecmascript, async loader)")(__turbopack_context__.i);
                const response = await updateCartItem(auth_token, productId, quantity);
                if (response.success) {
                    const cartItemsWithQuantities = response.cart.map(mapCartItemToProduct);
                    set({
                        cartItemsWithQuantities,
                        cartItems: cartItemsWithQuantities.map((item)=>item.product)
                    });
                }
            } catch (error) {
                console.error("Update cart item error:", error);
                throw error;
            } finally{
                set({
                    isLoading: false
                });
            }
        },
        clearCart: async ()=>{
            const { auth_token } = useUserStore.getState();
            if (!auth_token) {
                throw new Error("Authentication required");
            }
            set({
                isLoading: true
            });
            try {
                const { clearCart } = await __turbopack_context__.r("[project]/src/lib/cartApi.ts [app-client] (ecmascript, async loader)")(__turbopack_context__.i);
                const response = await clearCart();
                if (response.success) {
                    set({
                        cartItemsWithQuantities: [],
                        cartItems: []
                    });
                }
            } catch (error) {
                console.error("Clear cart error:", error);
                throw error;
            } finally{
                set({
                    isLoading: false
                });
            }
        },
        setCartItems: (items)=>{
            set({
                cartItemsWithQuantities: items,
                cartItems: items.map((item)=>item.product)
            });
        },
        getCartItemQuantity: (productId)=>{
            const state = get();
            const item = state.cartItemsWithQuantities.find((item)=>item.product._id === productId);
            return item ? item.quantity : 0;
        },
        isInCart: (productId)=>{
            const state = get();
            return state.cartItems.some((item)=>item._id === productId);
        },
        syncCartFromServer: async ()=>{
            const { auth_token } = useUserStore.getState();
            if (!auth_token) {
                set({
                    cartItems: [],
                    cartItemsWithQuantities: []
                });
                return;
            }
            set({
                isLoading: true
            });
            try {
                const { getUserCart } = await __turbopack_context__.r("[project]/src/lib/cartApi.ts [app-client] (ecmascript, async loader)")(__turbopack_context__.i);
                const response = await getUserCart();
                if (response.success) {
                    const cartItemsWithQuantities = response.cart.map(mapCartItemToProduct);
                    set({
                        cartItemsWithQuantities,
                        cartItems: cartItemsWithQuantities.map((item)=>item.product)
                    });
                }
            } catch (error) {
                console.error("Sync cart from server error:", error);
            } finally{
                set({
                    isLoading: false
                });
            }
        }
    }), {
    name: "cart-storage",
    storage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createJSONStorage"])(()=>localStorage)
}));
const useOrderStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["persist"])((set, get)=>({
        orders: [],
        isLoading: false,
        addOrder: (order)=>set((state)=>({
                    orders: [
                        ...state.orders,
                        order
                    ]
                })),
        updateOrder: (order)=>set((state)=>({
                    orders: state.orders.map((o)=>o._id === order._id ? order : o)
                })),
        loadOrders: async (token)=>{
            set({
                isLoading: true
            });
            try {
                const { getUserOrders } = await __turbopack_context__.r("[project]/src/lib/orderApi.ts [app-client] (ecmascript, async loader)")(__turbopack_context__.i);
                const orders = await getUserOrders(token);
                set({
                    orders,
                    isLoading: false
                });
            } catch (error) {
                console.error("Failed to load orders:", error);
                set({
                    isLoading: false
                });
            }
        },
        getOrdersCount: ()=>get().orders.length,
        clearOrders: ()=>set({
                orders: []
            })
    }), {
    name: "order-storage",
    storage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createJSONStorage"])(()=>localStorage)
}));
const useWishlistStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["persist"])((set, get)=>({
        wishlistItems: [],
        wishlistIds: [],
        addToWishlist: (product)=>set((state)=>{
                if (!state.wishlistIds.includes(product._id)) {
                    return {
                        wishlistItems: [
                            ...state.wishlistItems,
                            product
                        ],
                        wishlistIds: [
                            ...state.wishlistIds,
                            product._id
                        ]
                    };
                }
                return state;
            }),
        removeFromWishlist: (productId)=>set((state)=>({
                    wishlistItems: state.wishlistItems.filter((item)=>item._id !== productId),
                    wishlistIds: state.wishlistIds.filter((id)=>id !== productId)
                })),
        setWishlistItems: (products)=>set({
                wishlistItems: products,
                wishlistIds: products.map((product)=>product._id)
            }),
        setWishlistIds: (ids)=>set((state)=>({
                    wishlistIds: ids,
                    wishlistItems: state.wishlistItems.filter((item)=>ids.includes(item._id))
                })),
        clearWishlist: ()=>set({
                wishlistItems: [],
                wishlistIds: []
            }),
        isInWishlist: (productId)=>{
            const state = get();
            return state.wishlistIds.includes(productId);
        }
    }), {
    name: "wishlist-storage",
    storage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createJSONStorage"])(()=>localStorage)
}));
const loadAllUserData = async (token)=>{
    try {
        const promises = [
            (async ()=>{
                try {
                    const { getUserWishlist } = await __turbopack_context__.r("[project]/src/lib/wishlistApi.ts [app-client] (ecmascript, async loader)")(__turbopack_context__.i);
                    const wishlistResponse = await getUserWishlist(token);
                    if (wishlistResponse.success) {
                        useWishlistStore.getState().setWishlistIds(wishlistResponse.wishlist);
                    }
                } catch (error) {
                    console.warn("Failed to load wishlist:", error);
                }
            })(),
            (async ()=>{
                try {
                    await useCartStore.getState().syncCartFromServer();
                } catch (error) {
                    console.warn("Failed to load cart:", error);
                }
            })(),
            (async ()=>{
                try {
                    await useOrderStore.getState().loadOrders(token);
                } catch (error) {
                    console.warn("Failed to load orders:", error);
                }
            })()
        ];
        await Promise.allSettled(promises);
    } catch (error) {
        console.error("Error loading user data:", error);
    }
};
const useCurrencyStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["persist"])((set, get)=>({
        selectedCurrency: "USD",
        currencies: [
            {
                code: "USD",
                name: "US Dollar",
                symbol: "$",
                rate: 1.0
            },
            {
                code: "EUR",
                name: "Euro",
                symbol: "€",
                rate: 0.85
            },
            {
                code: "GBP",
                name: "British Pound",
                symbol: "£",
                rate: 0.73
            },
            {
                code: "JPY",
                name: "Japanese Yen",
                symbol: "¥",
                rate: 110.0
            },
            {
                code: "CAD",
                name: "Canadian Dollar",
                symbol: "C$",
                rate: 1.25
            },
            {
                code: "AUD",
                name: "Australian Dollar",
                symbol: "A$",
                rate: 1.35
            },
            {
                code: "CHF",
                name: "Swiss Franc",
                symbol: "CHF",
                rate: 0.92
            },
            {
                code: "CNY",
                name: "Chinese Yuan",
                symbol: "¥",
                rate: 6.45
            },
            {
                code: "INR",
                name: "Indian Rupee",
                symbol: "₹",
                rate: 74.5
            },
            {
                code: "BDT",
                name: "Bangladeshi Taka",
                symbol: "৳",
                rate: 84.8
            },
            {
                code: "KRW",
                name: "South Korean Won",
                symbol: "₩",
                rate: 1180.0
            },
            {
                code: "SGD",
                name: "Singapore Dollar",
                symbol: "S$",
                rate: 1.35
            }
        ],
        setCurrency: (currencyCode)=>{
            set({
                selectedCurrency: currencyCode
            });
        },
        getCurrentCurrency: ()=>{
            const state = get();
            return state.currencies.find((c)=>c.code === state.selectedCurrency) || state.currencies[0];
        },
        convertPrice: (price)=>{
            const state = get();
            const currency = state.getCurrentCurrency();
            return price * currency.rate;
        }
    }), {
    name: "currency-storage",
    storage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createJSONStorage"])(()=>localStorage)
}));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/common/pages/auth/SignInForm.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-client] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hookform/resolvers/zod/dist/zod.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
// Define the schema for the login form
const loginSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().email("Invalid email address"),
    password: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(6, "Password must be at least 6 characters"),
    termsAccepted: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal(true, {
        errorMap: ()=>({
                message: "You must accept the terms and privacy policy"
            })
    })
});
const SignInForm = ()=>{
    _s();
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showPassword, setShowPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { setAuthToken, updateUser } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserStore"])();
    const form = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"])({
        resolver: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zodResolver"])(loginSchema),
        defaultValues: {
            email: "",
            password: "",
            termsAccepted: true
        }
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: 0.5,
            ease: "easeOut"
        },
        className: "w-full px-4",
        children: "Signin"
    }, void 0, false, {
        fileName: "[project]/src/components/common/pages/auth/SignInForm.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(SignInForm, "Pvyy1DnCz8/o9SrPR8IdiQlc9Bo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"]
    ];
});
_c = SignInForm;
const __TURBOPACK__default__export__ = SignInForm;
var _c;
__turbopack_context__.k.register(_c, "SignInForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_56b92eac._.js.map