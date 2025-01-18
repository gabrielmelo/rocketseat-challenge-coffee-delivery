import { RiBankCardFill } from '@remixicon/react'
import { useState } from 'react'

type PaymentMethodType = 'debit' | 'credit' | 'money'

interface PaymentMethodButtonProps {
	type: PaymentMethodType
	label: string
	onPaymentIsActive: (paymentType: PaymentMethodType) => VoidFunction
}

export function PaymentMethod({
	type,
	label,
	onPaymentIsActive,
}: PaymentMethodButtonProps) {
	const [paymentActive, setPaymentActive] = useState('credit')

	const createIconType = (type: PaymentMethodType) => {
		if (type === 'debit') {
			return <RiBankCardFill className="h-5 w-5 fill-violet-600" />
		}

		if (type === 'credit') {
			return <RiBankCardFill className="h-5 w-5 fill-violet-600" />
		}

		return <RiBankCardFill className="h-5 w-5 fill-violet-600" />
	}

	function handlePaymentMethod() {
		setPaymentActive(type)
		onPaymentIsActive(type)
	}

	const paymentMethodIsActive = paymentActive === type

	return (
		<button
			type="button"
			data-is-active={paymentMethodIsActive}
			onClick={handlePaymentMethod}
			className="flex h-12 flex-1 items-center gap-2 rounded bg-neutral-200 p-4 data-[is-active=true]:bg-red-500"
		>
			{createIconType(type)}
			<span className="text-base text-neutral-800 uppercase">{label}</span>
		</button>
	)
}
