interface BoxProps {
	children?: React.ReactNode
}

interface BoxHeaderProps {
	title: string
	description?: string
	children?: React.ReactNode
}

interface BoxBody {
	children?: React.ReactNode
}

export function Box({ children }: BoxProps) {
	return (
		<div className="flex w-full flex-col gap-8 overflow-hidden rounded-md bg-box p-10">
			{children}
		</div>
	)
}

export function BoxHeader({ title, description, children }: BoxHeaderProps) {
	return (
		<div className="flex gap-2">
			{children && <div className="h-6 w-6">{children}</div>}

			<div className="flex flex-grow flex-col gap-0.5">
				<span className="font-bold text-lg text-slate-800">{title}</span>
				<span className="font-medium text-base text-slate-600">
					{description}
				</span>
			</div>
		</div>
	)
}

export function BoxBody({ children }: BoxBody) {
	return <>{children}</>
}
