import { RiShoppingCartLine } from '@remixicon/react'
import type { ButtonHTMLAttributes } from 'react'

interface CartButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	amount: number
}

export function CartButton({ amount, ...props }: CartButtonProps) {
	return (
		<button
			type="button"
			className="group relative flex h-10 w-10 items-center justify-center rounded bg-amber-200 transition-all duration-300 ease-linear hover:brightness-90 disabled:cursor-not-allowed disabled:hover:brightness-100"
			{...props}
		>
			<RiShoppingCartLine
				size={18}
				className="fill-amber-800 transition-all ease-linear group-hover:brightness-90"
			/>

			{amount > 0 ? (
				<div className="-right-2 -top-2 absolute h-5 w-5 rounded-full bg-amber-800 text-sm/tight text-white">
					<b>{amount}</b>
				</div>
			) : null}
		</button>
	)
}
