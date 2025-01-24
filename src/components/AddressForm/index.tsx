import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useContext } from 'react'
import { ShoppingCartContext } from '@/context/shopping-cart-context'

const addressFormSchema = z.object({
	cep: z.string(),
	street: z.string().min(2),
	number: z.string().min(1),
	complement: z.string().optional(),
	neighborhood: z.string().min(1),
	city: z.string().min(1),
	uf: z.string().length(2),
})

// interface AddressFormDate infer

type AddressFormDate = z.infer<typeof addressFormSchema>

// interface AddressFormProps {
// 	handleAddOrder: () => {}
// }

export function AddressForm() {
	const { addOrder } = useContext(ShoppingCartContext)

	const { handleSubmit, register } = useForm<AddressFormDate>({
		resolver: zodResolver(addressFormSchema),
		defaultValues: {
			cep: '',
			city: '',
			complement: '',
			neighborhood: '',
			number: '',
			street: '',
			uf: '',
		},
	})

	function handleAddOrder(data: AddressFormDate) {
		addOrder(data)
	}

	return (
		<form
			className="grid gap-3 lg:grid-cols-6"
			onSubmit={handleSubmit(handleAddOrder)}
		>
			<div className="lg:col-span-3">
				<input
					className="h-11 w-full rounded border-neutral-300 bg-neutral-200 px-3 text-neutral-400"
					placeholder="CEP"
					type="text"
					{...register('cep')}
				/>
			</div>

			<div className="lg:col-span-5">
				<input
					className="h-11 w-full rounded border-neutral-300 bg-neutral-200 px-3 text-neutral-400"
					placeholder="Logradouro"
					type="text"
					{...register('street')}
				/>
			</div>

			<div className="lg:col-span-1">
				<input
					className="h-11 w-full rounded border-neutral-300 bg-neutral-200 px-3 text-neutral-400"
					placeholder="Número"
					type="text"
					{...register('number')}
				/>
			</div>

			<div className="lg:col-span-4">
				<input
					className="h-11 w-full rounded border-neutral-300 bg-neutral-200 px-3 text-neutral-400"
					placeholder="Complemento"
					{...register('complement')}
				/>
			</div>

			<div className="lg:col-span-2">
				<input
					className="h-11 w-full rounded border-neutral-300 bg-neutral-200 px-3 text-neutral-400"
					placeholder="Bairro"
					{...register('neighborhood')}
				/>
			</div>

			<div className="lg:col-span-5">
				<input
					className="h-11 w-full rounded border-neutral-300 bg-neutral-200 px-3 text-neutral-400"
					placeholder="Cidade"
					{...register('city')}
				/>
			</div>

			<div className="lg:col-span-1">
				<input
					className="h-11 w-full rounded border-neutral-300 bg-neutral-200 px-3 text-neutral-400 uppercase"
					placeholder="UF"
					{...register('uf')}
				/>
			</div>

			<button type="submit">Criar</button>
		</form>
	)
}
