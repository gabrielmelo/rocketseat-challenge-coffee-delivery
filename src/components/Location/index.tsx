import { RiMapPin2Line } from '@remixicon/react'

interface LocationProps {
	city: string
}

export function Location({ city }: LocationProps) {
	return (
		<div className="hidden h-10 items-center justify-center gap-1 rounded bg-violet-200 px-2 md:flex">
			<RiMapPin2Line size={18} className="fill-violet-600" />
			<span className="text-base text-violet-800">{city}</span>
		</div>
	)
}
