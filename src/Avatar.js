import React, { Component } from 'react'

const Avatar = (props) => {
    return(
        <div 
            className="Avatar"
            style={{
                ...styles,
                background: `url(https://api.adorable.io/avatars/32/${props.user.email})`,
            }}
        ></div>
    )
}

const styles = {
        height: '40px',
        width: '40px',
        fontSize: '1rem',
        borderRadius: '20px',
}

export default Avatar