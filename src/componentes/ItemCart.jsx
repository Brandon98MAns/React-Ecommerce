import React from "react";

export default function Item({ item, removeItem }) {
	return (
		<div className="col-md-4">
			<div class="shadow p-3 mb-5 bg-body rounded card mx-2">
				<img src={item.imageUrl} alt={item.city} class="card-img-top" />
				<div class="card-body">
					<h2 class="card-title">{item.city}</h2>
					<h3 class="text-muted">{item.country}</h3>
					<p class="text-muted">{item.qty}</p>
				</div>
				<ul class="list-group list-group-flush">
					<li class="list-group-item">
						<p className="fs-4 badge bg-danger text-wrap">
							$ {item.price * item.qty}
						</p>
					</li>
				</ul>
				<button onClick={() => removeItem(item.id)} className="btn btn-danger">
					Eliminar del carrito
				</button>
			</div>
		</div>
	);
}
