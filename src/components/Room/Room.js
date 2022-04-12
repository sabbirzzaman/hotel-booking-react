import React from 'react';
import './Room.css'

const Room = ({ room }) => {
    const { title, image } = room;

    return (
        <>
            <div className="room-item">
                <div></div>
                <img src={image} alt="" />
                <button>{title}</button>
            </div>
        </>
    );
};

export default Room;
