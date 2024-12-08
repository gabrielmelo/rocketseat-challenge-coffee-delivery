import {
	RiCupLine,
	RiShoppingCartLine,
	RiStore3Line,
	RiTimeLine,
} from '@remixicon/react'

interface HeroFeacturedItemProps {
	icon: 'cart' | 'timer' | 'package' | 'coffee'
	text: string
}

export function HeroFeacturedItem({ icon, text }: HeroFeacturedItemProps) {
	return (
		<div className="flex items-center gap-3">
			<div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-200">
				{icon === 'cart' ? (
					<RiShoppingCartLine size={18} className="fill-amber-600" />
				) : null}

				{icon === 'timer' ? (
					<RiTimeLine size={18} className="fill-amber-600" />
				) : null}

				{icon === 'package' ? (
					<RiStore3Line size={18} className="fill-amber-600" />
				) : null}

				{icon === 'coffee' ? (
					<RiCupLine size={18} className="fill-amber-600" />
				) : null}
			</div>
			<div className="flex-1 font-normal text-base/snug text-slate-600">
				{text}
			</div>
		</div>
	)
}
