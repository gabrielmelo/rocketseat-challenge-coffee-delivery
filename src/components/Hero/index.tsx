import { useMediaQuery } from 'react-responsive'
import { HeroFeacturedItem } from '../HeroFeacturedItem'

export function Hero() {
	const isDesktopOrLaptop = useMediaQuery({
		query: '(min-width: 1224px)',
	})

	console.log(isDesktopOrLaptop)

	return (
		<section
			className="py-20 md:py-32"
			style={{ backgroundImage: 'url("/images/hero-bg-image.jpg")' }}
		>
			<div className="container">
				<div className="flex items-center justify-between">
					<div className="w-full max-w-[572px] md:mr-14">
						<h1 className="font-bold font-sans text-4xl/tight text-slate-900 lg:text-5xl/tight">
							Encontre o café perfeito para qualquer hora do dia
						</h1>

						<p className="mt-4 text-slate-600 text-xl">
							Com o Coffee Delivery você recebe seu café onde estiver, a
							qualquer hora
						</p>

						<div className="mt-6 grid gap-4 md:mt-10 md:grid-cols-2 md:grid-rows-2">
							<HeroFeacturedItem icon="cart" text="Compra simples e segura" />
							<HeroFeacturedItem
								icon="timer"
								text="Entrega rápida e rastreada"
							/>
							<HeroFeacturedItem
								icon="package"
								text="Embalagem mantém o café intacto"
							/>
							<HeroFeacturedItem
								icon="coffee"
								text="O café chega fresquinho até você"
							/>
						</div>
					</div>

					{isDesktopOrLaptop ? (
						<div className="w-full">
							<img
								src="/images/hero-image.png"
								alt=""
								className="w-full object-contain"
							/>
						</div>
					) : null}
				</div>
			</div>
		</section>
	)
}
