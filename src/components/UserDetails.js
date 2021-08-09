import React from 'react'

const UserDetails = ({user}) =>
  {

  return (
    <div>
      <h2>
        <div>
        Your name: {user.name}
        </div>
        <div>
        Your username: {user.username}
        </div>
        <div>
        Your role: {user.role}
        </div>
      </h2>
    </div>
  )
}

export default UserDetails
