import Link from "next/link";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { DefaultContainer } from "../default-container";
import { HeartIcon, SearchIcon, UserIcon } from "lucide-react";

const ContactSection = () => {
	return (
		<DefaultContainer>
			<section
				id="#contact"
				className="py-20 flex justify-between"
				style={{ height: "100%" }}
			>
				{" "}
				<div className="w-[720px]">
					<div className="max-w-[330px]">
						<h2 className="text-2xl md:text-3xl font-semibold text-zinc-900 mb-5">
							Contact
						</h2>
						<p>
							Interested in your services? Fill the form and we’ll contact you
							as soon as possible.
						</p>
					</div>
					<form action="" className="max-w-[478px]">
						<Input type="text" placeholder="Name" className="mt-5" />
						<Input type="email" placeholder="Email" className="mt-5" />
						<Textarea placeholder="Type your message here." className="mt-5" />
						<Button className="w-full mt-5">Send Message</Button>
					</form>
				</div>
				<div className="flex flex-col justify-end h-full gap-8">
					{" "}
					<Link href="/">
						<span className="text-3xl font-semibold">Undertaker</span>
					</Link>
					<span className="text-sm">
						© {new Date().getFullYear()} - All rights reserved.
					</span>
					<ul className="flex items-center gap-6">
						<li className="hover:bg-zinc-900 hover:text-zinc-100 transition-all p-2 rounded-full">
							<Link href="#">
								<UserIcon size={18} />
							</Link>
						</li>
						<li className="hover:bg-zinc-900 hover:text-zinc-100 transition-all p-2 rounded-full">
							<Link href="#">
								<HeartIcon size={18} />
							</Link>
						</li>
						<li className="hover:bg-zinc-900 hover:text-zinc-100 transition-all p-2 rounded-full">
							<Link href="#">
								<SearchIcon size={18} />
							</Link>
						</li>
					</ul>
				</div>
			</section>
		</DefaultContainer>
	);
};

export default ContactSection;
