import { cn } from "@/lib/utils";

interface DefaultContainerProps {
	children: React.ReactNode;
	className?: string;
}

export const DefaultContainer = ({
	children,
	className
}: DefaultContainerProps) => {
	return (
		<div
			className={cn(
				"flex items-center justify-between w-full max-w-[1440px] px-4 mx-auto",
				className
			)}
		>
			{children}
		</div>
	);
};
