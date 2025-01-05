import { RiAddLine, RiSubtractLine } from '@remixicon/react'

interface CounterProps {
	quantity: number
	onIncrement: () => void
	onDecrement: () => void
}

export function Counter({ quantity, onDecrement, onIncrement }: CounterProps) {
	const isDecrementButtonDisabled = quantity < 1

	return (
		<div className="flex h-10 w-[72px] items-center justify-center rounded-md bg-gray-200 px-2 py-3">
			<button
				type="button"
				className="p-1"
				onClick={onDecrement}
				disabled={isDecrementButtonDisabled}
			>
				<RiSubtractLine
					data-disabled={isDecrementButtonDisabled}
					className="h-4 w-4 fill-purple-600 transition-all duration-150 ease-linear hover:brightness-90 data-[disabled=true]:fill-gray-400"
				/>
			</button>

			<div className="w-6 px-1 text-center font-semibold text-gray-800 text-lg">
				{quantity}
			</div>

			<button type="button" className="p-1" onClick={onIncrement}>
				<RiAddLine className="h-4 w-4 fill-purple-600 transition-all duration-150 ease-linear hover:brightness-90" />
			</button>
		</div>
	)
}
