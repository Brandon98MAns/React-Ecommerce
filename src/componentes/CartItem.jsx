import React from "react";
import { Trash2 } from "react-bootstrap-icons";

const CartItem = (props) => {
	const totalPrice = (props.quantity * props.price).toFixed(2);
	return (
		<tr className="bg-white border-4 border-gray-200">
			<td className="px-6 py-2 flex flex-row items-center">
				<img
					className="h-8 w-8 object-cover "
					src={props.imgUrl}
					alt={props.title}
				/>
			</td>
			<td>
				<span className="text-center ml-2 font-semibold">{props.title}</span>
			</td>
			<td className="px-6 py-2">
				<span>{`$ ${props.price}`}</span>
			</td>
			<td className="px-6 py-2">
				<span>{props.quantity}</span>
			</td>
			<td className="px-4 py-2 text-red-600 font-bold">
				<span>{`$ ${totalPrice}`}</span>
			</td>
			<td className="px-4 py-2 text-center">
				<div className="inline-block text-center text-grey-600 px-2 hover:text-red-500">
					<button
						onClick={() => {
							props.onDelete(props.id);
						}}
					>
						<Trash2 />
					</button>
				</div>
			</td>
		</tr>
	);
};

export default CartItem;
