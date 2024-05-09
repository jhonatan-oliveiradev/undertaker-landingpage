import { HeartIcon, SearchIcon, UserIcon } from "lucide-react";
import Link from "next/link";
import { DefaultContainer } from "../default-container";

const links = [
	{ title: "Home", link: "#" },
	{ title: "About", link: "#about" },
	{ title: "Showcase", link: "#showcase" },
	{ title: "Contact", link: "#contact" }
];

const renderLinks = () => {
	return links.map((link, index) => {
		return (
			<Link
				key={index}
				href={link.link}
				className="font-medium first:ml-0 ml-4 hover:underline transition-all"
			>
				{link.title}
			</Link>
		);
	});
};

const Header = () => {
	return (
		<DefaultContainer className="pb-4">
			<header className="flex items-center justify-between h-20 w-full">
				<span className="text-3xl font-semibold">Undertaker</span>
				<div>{renderLinks()}</div>
				<ul className="flex items-center gap-6">
					<li>
						<Link href="#">
							<UserIcon />
						</Link>
					</li>
					<li>
						<Link href="#">
							<HeartIcon />
						</Link>
					</li>
					<li>
						<Link href="#">
							<SearchIcon />
						</Link>
					</li>
				</ul>
			</header>
		</DefaultContainer>
	);
};

export default Header;
