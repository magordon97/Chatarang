import React, { Component } from 'react'

const Sidebar = (props) => {
        return(
            <div className='Sidebar' style={styles}>
                {props.user.displayName}
            </div>
        )
    }

const styles = {
    backgroundColor: 'PaleTurquoise',
}

export default Sidebar