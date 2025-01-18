import type { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	placeholder: string
}

export function Input({ placeholder, ...props }: InputProps) {
	return (
		<input
			className="h-11 w-full rounded border-neutral-300 bg-neutral-200 px-3 text-neutral-400"
			{...props}
		/>
	)
}
