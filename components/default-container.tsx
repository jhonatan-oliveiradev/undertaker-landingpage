import { cn } from "@/lib/utils";

interface DefaultContainerProps {
	children: React.ReactNode;
	className?: string;
}

export function DefaultContainer({
	children,
	className
}: DefaultContainerProps) {
	return (
		<div
			className={cn(
				"flex items-center justify-between w-full max-w-7xl px-4 mx-auto",
				className
			)}
		>
			{children}
		</div>
	);
}
