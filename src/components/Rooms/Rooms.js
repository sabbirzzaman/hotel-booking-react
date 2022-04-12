import React, { useEffect, useState } from 'react';
import Room from '../Room/Room';
import './Rooms.css'

const Rooms = () => {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setRooms(data));
    }, [])

    return (
        <div className="rooms-container">
            <div className="container">
                <h2>Discover Our Rooms</h2>

                <div className='rooms'>
                    {
                        rooms.map(room => <Room key={room.id} room={room}></Room>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Rooms;
