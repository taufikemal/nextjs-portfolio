import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
	{ name: "Projects", href: "/projects" },
	{ name: "Contact", href: "/contact" },
];

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-indigo-500 via-zinc-700/10 to-purple-600">

			<nav className="my-16 animate-fade-in">
				<ul className="flex flex-wrap items-center justify-center gap-12">
					{navigation.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className="text-lg duration-500 text-zinc-200 hover:text-zinc-500"
						>
							{item.name}
						</Link>
					))}
				</ul>
			</nav>

			<div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<Particles
				className="absolute inset-0 -z-10 animate-fade-in"
				quantity={800}
			/>

			<h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
				taufikemal
			</h1>

			<div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			
			<div className="my-16 text-center animate-fade-in">
				<h2 className="text-lg text-zinc-400 mx-6">
				A passionate UI/UX Designer and Brand Designer with professional experience in the education community, payment, and transportation industries.
				</h2>
			</div>
		</div>
	);
}
