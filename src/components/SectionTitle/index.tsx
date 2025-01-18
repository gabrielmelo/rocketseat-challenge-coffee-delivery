interface SectionTitle {
	text: string
}

export function SectionTitle({ text }: SectionTitle) {
	return <h2 className="mb-4 font-extrabold text-gray-800 text-lg">{text}</h2>
}
