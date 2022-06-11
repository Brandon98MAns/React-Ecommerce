import React from "react";
import CartItem from "./CartItem";
import useCartContext from "../store/CartContext";
import { Link } from "react-router-dom";
import { createBuyOrder } from "../data";

const CartView = () => {
	const { cart, removeFromCart, clearCart, getTotalPrice } = useCartContext();

	function handleBuy() {
		const itemsToBuy = cart.map((item) => ({
			title: item.title,
			cant: item.cant,
			price: item.price,
			id: item.id,
		}));

		const buyOrder = {
			buyer: {
				name: "Santiago",
				phone: "123456789",
				email: "santiago@coder.com",
			},
			items: itemsToBuy,
			total: getTotalPrice(),
		};

		createBuyOrder(buyOrder);
		clearCart();
	}

	return (
		<section className="text-gray-600 body-font">
			<div className="container px-5 py-12 mx-auto">
				<div className="flex flex-col text-center w-full mb-12">
					<h1 className="sm:text-3xl uppercase text-2xl font-large title-font mb-8 text-indigo-600">
						Carrito
					</h1>
					<hr />
				</div>

				<div className="flex flex-wrap sm:-m-4 -mx-8 -mb-10">
					{cart.length === 0 && (
						<span className="w-2/3 text-center m-auto block py-1 px-2 rounded bg-red-50 text-red-indigo text-xs font-medium tracking-widest">
							<p>Tu carrito está vacío</p>
							<Link to="/">Volver al catálogo</Link>
						</span>
					)}

					{cart && cart.length !== 0 && (
						<div className="m-auto">
							<table className="min-w-full table-auto">
								<thead className="justify-between">
									<tr className="bg-gray-800">
										<th className="px-8 py-2">
											<span className="text-white"></span>
										</th>
										<th className="px-20 py-2">
											<span className="text-white">Producto</span>
										</th>
										<th className="px-8 py-2">
											<span className="text-white">Precio</span>
										</th>

										<th className="px-6 py-2">
											<span className="text-white">Cantidad</span>
										</th>

										<th className="px-8 py-2">
											<span className="text-white">Total</span>
										</th>
										<th className="px-8 py-2">
											<span className="text-white">Acciones</span>
										</th>
									</tr>
								</thead>
								<tbody className="bg-gray-200">
									{cart &&
										cart.map((item) => (
											<CartItem
												key={item.id}
												id={item.id}
												title={item.title}
												imgUrl={item.imgUrl}
												price={item.price}
												quantity={item.cant}
												onDelete={(id) => removeFromCart(id)}
											/>
										))}
								</tbody>
							</table>
							<div className="mt-8">
								<button
									onClick={handleBuy}
									className="flex mx-auto mt-2 text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg"
								>
									¡Comprar!
								</button>
							</div>
						</div>
					)}
				</div>
			</div>
		</section>
	);
};

export default CartView;
  

