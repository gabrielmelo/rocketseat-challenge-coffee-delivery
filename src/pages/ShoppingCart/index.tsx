import { useContext } from 'react'

import { AddressForm } from '@/components/AddressForm'
import { Box, BoxBody, BoxHeader } from '@/components/Box'
import { SectionTitle } from '@/components/SectionTitle'

import { CoffeeList } from '@/components/CoffeeList'
import { ShoppingCartContext } from '@/context/shopping-cart-context'
import { priceFormatter } from '@/utils/formatter'
import { RiMoneyDollarCircleFill } from '@remixicon/react'
import { RiMapPinLine } from '@remixicon/react'

export function ShoppingCart() {
	const { items } = useContext(ShoppingCartContext)

	const shippingPrice = 3.5

	const totalItemsPrice = items.reduce(
		(accumulator, currentItem) =>
			// biome-ignore lint/suspicious/noAssignInExpressions: <explanation>
			(accumulator += currentItem.price * currentItem.quantity),
		0,
	)

	const totalItemsPriceWithShipping = totalItemsPrice + shippingPrice

	const createItensCart = items.map((item) => {
		const { id, title, image, price, quantity } = item

		return (
			<div className="pt-6 first:pt-0" key={id}>
				<CoffeeList
					id={id}
					title={title}
					image={image}
					price={price}
					quantity={quantity}
				/>
			</div>
		)
	})

	return (
		<div className="py-20 md:py-32">
			<div className="container">
				<div className="flex flex-col justify-between gap-8 lg:flex-row">
					<main className="flex-grow">
						<SectionTitle text="Complete seu pedido" />

						<div className="flex flex-col gap-4">
							<Box>
								<BoxHeader
									title="Endereço de Entrega"
									description="Informe o endereço onde deseja receber seu pedido"
								>
									<RiMapPinLine className="fill-amber-400" />
								</BoxHeader>

								<BoxBody>
									<AddressForm />
								</BoxBody>
							</Box>

							<Box>
								<BoxHeader
									title="Pagamento"
									description="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
								>
									<RiMoneyDollarCircleFill className="fill-purple-500" />
								</BoxHeader>

								<BoxBody>
									<div className="flex gap-3">
										{/* <PaymentMethod label="Cartão de crédito" type="credit" />
										<PaymentMethod label="cartão de débito" type="debit" />
										<PaymentMethod label="Dinheiro" type="money" /> */}
									</div>
								</BoxBody>
							</Box>
						</div>
					</main>

					<aside className="w-full max-w-[448px]">
						<SectionTitle text="Cafés selecionados" />

						<Box>
							<BoxBody>
								<div className="space-y-6 divide-y divide-neutral-200">
									{items.length > 0
										? createItensCart
										: 'Sem itens cadastrado...'}

									<div className="space-y-2 pt-6">
										<div className="flex justify-between">
											<span className="text-base text-neutral-800">
												Total de itens
											</span>
											<span className="text-base text-neutral-800">
												{priceFormatter.format(totalItemsPrice)}
											</span>
										</div>

										<div className="flex justify-between">
											<span className="text-neutral-800 text-sm">Entrega</span>
											<span className="text-base text-neutral-800">3,50</span>
										</div>

										<div className="flex justify-between">
											<b className="text-neutral-800 text-xl">Total</b>
											<b className="text-neutral-800 text-xl">
												{priceFormatter.format(totalItemsPriceWithShipping)}
											</b>
										</div>
									</div>
								</div>

								<div>
									<button
										type="button"
										className="h-12 w-full rounded-md bg-amber-600 text-center"
									>
										<span className="font-semibold text-base text-white uppercase">
											Confirmar pedido
										</span>
									</button>
								</div>
							</BoxBody>
						</Box>
					</aside>
				</div>
			</div>
		</div>
	)
}
