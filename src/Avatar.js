import React, { Component } from 'react'

const Avatar = ({user, style}) => {
    return(
        <div 
            className="Avatar"
            style={{
                ...styles,
                ...style,
                background: `url(https://api.adorable.io/avatars/32/${user.email})`,
            }}
        ></div>
    )
}

const styles = {
        height: '40px',
        width: '40px',
        fontSize: '1rem',
        borderRadius: '20px',
        marginRight: '0.5rem',
}

export default Avatar