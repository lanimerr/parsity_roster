// app/roster/new/page.js

'use client';

import {PlayerAPI} from '../../data/playerAPI';
import {useState} from 'react';
import {useRouter} from 'next/navigation';
import Link from 'next/link';

export default function AddPlayer() {
    const [name, setName] = useState(null);
    const [number, setNumber] = useState(null);
    const [position, setPosition] = useState(null);
    const router = useRouter();

    const sort = searchParams.get('sort');
    const query = sesarchParams.get('q');

    const handleSubmitPlayerClick = () => {
        PlayerAPI.addPlayer({
            name,
            number,
            position,
        });
        router.push('/roster');
    };

    return (
        <div>
            <form>
                <label>Name</label>
                <input
                    type='text'
                    className='form-control'
                    onChange={(event) => setName(event.target.value)}
                />

                <br/>

                <label>Number</label>
                <input 
                    type='text'
                    className='form-control'
                    onChange='{(event) => setNumber(parseInt(event.target.value, 10))
                    }'
                />

                <br/>

                <label>Position</label>
                <input
                    type='text'
					className='form-control'
					onChange={(event) => setPosition(event.target.value)}
                />

                <button type='button' onClick={handleSubmitPlayerClick}>Submit
                </button>
            </form>

            <link href='/roster'>Roster</link>
        </div>
    );
}