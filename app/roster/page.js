'use client';
import { useState } from 'react';
import { PlayerAPI } from '../data/playerAPI';
import Link from 'next/link';

export default function Roster() {
	const [allPlayers, _] = useState(PlayerAPI.all());

	return (
		<main>
			<div>
				<h1>Welcome to the Roster Page</h1>
				{allPlayers.map((p) => (
					<li key={p.number}>
						<Link href={`/roster/${p.number}`}>{p.name}</Link>
					</li>
				))}
			</div>
		</main>
	);
}