(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/lib/orderApi.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "createOrderFromCart": ()=>createOrderFromCart,
    "deleteOrder": ()=>deleteOrder,
    "getOrderById": ()=>getOrderById,
    "getUserOrders": ()=>getUserOrders,
    "updateOrderStatus": ()=>updateOrderStatus
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const API_BASE_URL = ("TURBOPACK compile-time value", "http://localhost:8000/api") || "http://localhost:8000/api";
const createOrderFromCart = async (token, cartItems, shippingAddress)=>{
    try {
        const response = await fetch("".concat(API_BASE_URL, "/orders"), {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer ".concat(token)
            },
            body: JSON.stringify({
                items: cartItems,
                shippingAddress
            })
        });
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "Failed to create order");
        }
        const orderData = await response.json();
        console.log("Order created successfully:", orderData);
        return {
            success: true,
            order: orderData.order || orderData
        };
    } catch (error) {
        console.error("Error creating order:", error);
        return {
            success: false,
            order: {},
            message: error instanceof Error ? error.message : "Failed to create order"
        };
    }
};
const getUserOrders = async (token)=>{
    try {
        const response = await fetch("".concat(API_BASE_URL, "/orders"), {
            headers: {
                Authorization: "Bearer ".concat(token)
            }
        });
        if (!response.ok) {
            throw new Error("Failed to fetch orders");
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching orders:", error);
        return [];
    }
};
const getOrderById = async (orderId, token)=>{
    try {
        const response = await fetch("".concat(API_BASE_URL, "/orders/").concat(orderId), {
            headers: {
                Authorization: "Bearer ".concat(token)
            }
        });
        if (!response.ok) {
            throw new Error("Failed to fetch order");
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching order:", error);
        return null;
    }
};
const deleteOrder = async (orderId, token)=>{
    try {
        const response = await fetch("".concat(API_BASE_URL, "/orders/").concat(orderId), {
            method: "DELETE",
            headers: {
                Authorization: "Bearer ".concat(token)
            }
        });
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "Failed to delete order");
        }
        return {
            success: true,
            message: "Order deleted successfully"
        };
    } catch (error) {
        console.error("Error deleting order:", error);
        return {
            success: false,
            message: error instanceof Error ? error.message : "Failed to delete order"
        };
    }
};
const updateOrderStatus = async (orderId, status, token, paymentIntentId, stripeSessionId)=>{
    try {
        const response = await fetch("".concat(API_BASE_URL, "/orders/").concat(orderId, "/status"), {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer ".concat(token)
            },
            body: JSON.stringify({
                status,
                paymentIntentId,
                stripeSessionId
            })
        });
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "Failed to update order status");
        }
        const data = await response.json();
        return {
            success: true,
            order: data.order,
            message: data.message
        };
    } catch (error) {
        console.error("Error updating order status:", error);
        return {
            success: false,
            message: error instanceof Error ? error.message : "Failed to update order status"
        };
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/pages/CheckoutPageClient.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$orderApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/orderApi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const CheckoutPageClient = ()=>{
    _s();
    const [order, setOrder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [processing, setProcessing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [authLoading, setAuthLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [selectedAddress, setSelectedAddress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [addresses, setAddresses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isCreatingOrder, setIsCreatingOrder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { auth_token, authUser, isAuthenticated, verifyAuth } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserStore"])();
    const { cartItemsWithQuantities, clearCart } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCartStore"])();
    const orderId = searchParams.get("orderId");
    //   Verify authentication on component mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CheckoutPageClient.useEffect": ()=>{
            const checkAuth = {
                "CheckoutPageClient.useEffect.checkAuth": async ()=>{
                    setAuthLoading(true);
                    if (auth_token && !authUser) {
                        await verifyAuth();
                    }
                    setAuthLoading(false);
                }
            }["CheckoutPageClient.useEffect.checkAuth"];
            checkAuth();
        }
    }["CheckoutPageClient.useEffect"], [
        auth_token,
        authUser,
        verifyAuth
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CheckoutPageClient.useEffect": ()=>{
            // Wait for auth check to complete
            if (authLoading) {
                return;
            }
            // Check if user is authenticated
            if (!isAuthenticated || !authUser || !auth_token) {
                router.push("/auth/signin");
                return;
            }
            // Load user addresses
            if (authUser.addresses && authUser.addresses.length > 0) {
                setAddresses(authUser.addresses);
                // Auto-select address logic
                if (authUser.addresses.length === 1) {
                    // If only one address, select it automatically
                    setSelectedAddress(authUser.addresses[0]);
                } else {
                    // If multiple addresses, prefer default address
                    const defaultAddress = authUser.addresses.find({
                        "CheckoutPageClient.useEffect.defaultAddress": (addr)=>addr.isDefault
                    }["CheckoutPageClient.useEffect.defaultAddress"]);
                    setSelectedAddress(defaultAddress || authUser.addresses[0]);
                }
            }
            const initializeCheckout = {
                "CheckoutPageClient.useEffect.initializeCheckout": async ()=>{
                    setLoading(true);
                    try {
                        if (orderId) {
                            // If orderId is provided, load existing order
                            console.log("Checkout: Fetching order", orderId);
                            const orderData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$orderApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOrderById"])(orderId, auth_token);
                            if (orderData) {
                                console.log("Checkout: Order fetched successfully");
                                setOrder(orderData);
                            } else {
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Order not found");
                                router.push("/user/cart");
                            }
                        } else {
                            // If no orderId, check if we have cart items
                            if (cartItemsWithQuantities.length === 0) {
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Your cart is empty");
                                router.push("/user/cart");
                                return;
                            }
                            // Create a temporary order object for display
                            const tempOrder = {
                                _id: "temp",
                                userId: authUser._id,
                                items: cartItemsWithQuantities.map({
                                    "CheckoutPageClient.useEffect.initializeCheckout": (item)=>({
                                            productId: item.product._id,
                                            name: item.product.name,
                                            price: item.product.price,
                                            quantity: item.quantity,
                                            image: item.product.image
                                        })
                                }["CheckoutPageClient.useEffect.initializeCheckout"]),
                                total: cartItemsWithQuantities.reduce({
                                    "CheckoutPageClient.useEffect.initializeCheckout": (total, item)=>total + item.product.price * item.quantity
                                }["CheckoutPageClient.useEffect.initializeCheckout"], 0),
                                status: "pending",
                                shippingAddress: {
                                    street: "",
                                    city: "",
                                    country: "",
                                    postalCode: ""
                                },
                                createdAt: new Date().toISOString(),
                                updatedAt: new Date().toISOString()
                            };
                            setOrder(tempOrder);
                        }
                    } catch (error) {
                        console.error("Error initializing checkout:", error);
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to load checkout details");
                        router.push("/user/cart");
                    } finally{
                        setLoading(false);
                    }
                }
            }["CheckoutPageClient.useEffect.initializeCheckout"];
            initializeCheckout();
        }
    }["CheckoutPageClient.useEffect"], [
        orderId,
        auth_token,
        router,
        isAuthenticated,
        authUser,
        authLoading,
        cartItemsWithQuantities
    ]);
    const handleAddressesUpdate = (updatedAddresses)=>{
        setAddresses(updatedAddresses);
        // Auto-select address logic
        if (updatedAddresses.length === 1) {
            // If only one address, select it automatically
            setSelectedAddress(updatedAddresses[0]);
        } else if (updatedAddresses.length > 1) {
            // If multiple addresses, prefer default or keep current selection
            const defaultAddress = updatedAddresses.find((addr)=>addr.isDefault);
            if (defaultAddress) {
                setSelectedAddress(defaultAddress);
            } else if (!selectedAddress || !updatedAddresses.find((addr)=>addr._id === selectedAddress._id)) {
                // If no default and current selection is invalid, select first
                setSelectedAddress(updatedAddresses[0]);
            }
        } else {
            // No addresses, clear selection
            setSelectedAddress(null);
        }
    };
    const calculateSubtotal = ()=>{
        if (!order) return 0;
        return order.items.reduce((total, item)=>total + item.price * item.quantity, 0);
    };
    const calculateShipping = ()=>{
        const subtotal = calculateSubtotal();
        return subtotal > 100 ? 0 : 15;
    };
    const calculateTax = ()=>{
        const subtotal = calculateSubtotal();
        return subtotal * 0.08; // 8% tax
    };
    const calculateTotal = ()=>{
        return calculateSubtotal() + calculateShipping() + calculateTax();
    };
    //   handle stripe checkout fucntion
    const handleStripeCheckout = async ()=>{};
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: "CheckoutPage client"
    }, void 0, false, {
        fileName: "[project]/src/components/pages/CheckoutPageClient.tsx",
        lineNumber: 186,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
_s(CheckoutPageClient, "SCker4wrFFgMEdFbYjpBMZqEP/E=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCartStore"]
    ];
});
_c = CheckoutPageClient;
const __TURBOPACK__default__export__ = CheckoutPageClient;
var _c;
__turbopack_context__.k.register(_c, "CheckoutPageClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_26b0aff2._.js.map