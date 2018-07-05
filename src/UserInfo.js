import React, { Component } from 'react'
import Avatar from './Avatar'
import SignOut from './SignOut';

const UserInfo = ({user}) => {
    return(
    <div
              className="UserInfo"
              style={styles.info}
            >
            <Avatar user={user} style={styles.avatar}/>
              <div style={styles.user}>
                {user.displayName}
              </div>
              <SignOut />
            </div>
    )
}

const styles = {
    info: {
        padding: '0 1rem',
        marginBottom: '1rem',
        display: 'flex',
        alignItems: 'center',
      },
      avatar: {
        marginRight: '0.5rem',
      },
      user: {
        flex: 1,
      },
}

export default UserInfo