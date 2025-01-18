import { AddressForm } from '@/components/AddressForm'
import { Box, BoxBody, BoxHeader } from '@/components/Box'
import { CoffeeList } from '@/components/CoffeeList'
// import { PaymentMethod } from '@/components/PaymentMethodButton'
import { SectionTitle } from '@/components/SectionTitle'
import { CartContext } from '@/context/cart-context'

import { RiMoneyDollarCircleFill } from '@remixicon/react'
import { RiMapPinLine } from '@remixicon/react'
import { useContext } from 'react'

export function Checkout() {
	const { itemsCart } = useContext(CartContext)

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
								{itemsCart.map((item) => {
									const { id, title, image, price } = item

									return (
										<CoffeeList
											key={id}
											id={id}
											title={title}
											image={image}
											price={price}
										/>
									)
								})}
							</BoxBody>
						</Box>
					</aside>
				</div>
			</div>
		</div>
	)
}
