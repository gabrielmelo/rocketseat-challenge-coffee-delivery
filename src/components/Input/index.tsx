import type { InputHTMLAttributes } from 'react'

export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
	return (
		<input
			className="h-11 w-full rounded border-neutral-300 bg-neutral-200 px-3 text-neutral-400"
			{...props}
		/>
	)
}
