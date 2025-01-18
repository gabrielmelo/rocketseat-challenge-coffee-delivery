import { Input } from '../Input'

export function AddressForm() {
	return (
		<form className="grid gap-3 lg:grid-cols-6">
			<div className="lg:col-span-3">
				<Input placeholder="CEP" />
			</div>

			<div className="lg:col-span-full">
				<Input placeholder="Rua" />
			</div>

			<div className="lg:col-span-3">
				<Input placeholder="Número" />
			</div>

			<div className="lg:col-span-4">
				<Input placeholder="Complemento" />
			</div>

			<div className="lg:col-span-1">
				<Input placeholder="Bairro" />
			</div>

			<div className="lg:col-span-2">
				<Input placeholder="Cidade" />
			</div>

			<div className="lg:col-span-1">
				<Input placeholder="UF" minLength={2} />
			</div>
		</form>
	)
}
