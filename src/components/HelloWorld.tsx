interface HelloWorldProps {
	text: string
}

export function HelloWorld({ text }: HelloWorldProps) {
	return (
		<div className="flex h-screen items-center justify-center bg-slate-900">
			<h1 className="text-4xl text-white">{text}</h1>
		</div>
	)
}
