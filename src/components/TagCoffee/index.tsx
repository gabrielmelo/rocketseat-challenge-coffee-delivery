export function TagCoffee({ text }: { text: string }) {
	return (
		<div className="inline-flex h-6 items-center justify-center rounded-full bg-amber-100 px-2">
			<span className=" font-semibold text-amber-600 text-xs/3 uppercase">
				{text}
			</span>
		</div>
	)
}
