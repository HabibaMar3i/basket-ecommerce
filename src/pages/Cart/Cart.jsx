import { useContext } from "react";
import { CartContext } from "../../components/context/contexts";
import { Spinner, Button, Image } from "@heroui/react";

export default function Cart() {
    const { cart, totalPrice, loading, error, removeFromCart, decreaseQuantity, addToCart } = useContext(CartContext);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-[400px]">
                <Spinner size="lg" color="primary" />
            </div>
        );
    }

    if (error) {
        return (
            <div className="container mx-auto p-4">
                <div className="text-center text-red-500">
                    <p>Error: {error}</p>
                </div>
            </div>
        );
    }

    if (!cart || cart.length === 0) {
        return (
            <div className="container mx-auto p-4">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">Your Cart is Empty</h1>
                    <p className="text-gray-600">Add some products to your cart to see them here.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                    {cart.map((item) => (
                        <div key={item.id} className="flex items-center gap-4 p-4 border-b border-gray-200">
                            <Image
                                src={item.Image?.url}
                                alt={item.name}
                                className="w-20 h-20 object-cover rounded"
                            />
                            
                            <div className="flex-1">
                                <h3 className="font-semibold text-lg">{item.name}</h3>
                                <p className="text-[#35AFA0] font-bold">${item.price}</p>
                            </div>
                            
                            <div className="flex items-center gap-2">
                                <Button
                                    size="sm"
                                    variant="bordered"
                                    onClick={() => decreaseQuantity(item.productId)}
                                >
                                    -
                                </Button>
                                <span className="px-3 py-1 bg-gray-100 rounded">{item.quantity}</span>
                                <Button
                                    size="sm"
                                    variant="bordered"
                                    onClick={() => addToCart({ _id: item.productId, ...item })}
                                >
                                    +
                                </Button>
                            </div>
                            
                            <Button
                                color="danger"
                                variant="light"
                                onClick={() => removeFromCart(item.productId)}
                            >
                                Remove
                            </Button>
                        </div>
                    ))}
                </div>
                
                <div className="lg:col-span-1">
                    <div className="bg-gray-50 p-6 rounded-lg">
                        <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                        <div className="space-y-2 mb-4">
                            <div className="flex justify-between">
                                <span>Items ({cart.length})</span>
                                <span>${totalPrice.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between font-bold text-lg border-t pt-2">
                                <span>Total</span>
                                <span className="text-[#35AFA0]">${totalPrice.toFixed(2)}</span>
                            </div>
                        </div>
                        <Button
                            color="primary"
                            className="w-full bg-[#35AFA0] hover:bg-[#2d8f82]"
                            size="lg"
                        >
                            Proceed to Checkout
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
