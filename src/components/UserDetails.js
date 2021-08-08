import React from 'react'

const UserDetails = () =>
{
  const name="name"
  const username="username"
  const role="role"

  return (
    <div>
      <h2>
        <div>
        Your name: {name}
        </div>
        <div>
        Your username: {username}
        </div>
        <div>
        Your role: {role}
        </div>
      </h2>
    </div>
  )
}

export default UserDetails
