import React from 'react'

export const User = props => {
  const user = props.user

  return (
    <div key={user.id} className="item">
      <h3>{user.email}</h3>
      <div>{user.id}</div>
    </div>
  )
}
