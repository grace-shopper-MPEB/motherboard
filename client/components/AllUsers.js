import React from 'react'
import {User} from './'

// Needs React Router
export class AllUsers extends React.Component {
  componentDidMount() {
    // nothing here yet
  }

  render() {
    const users = this.props.allUsers
    console.log(this.props)

    if (users) {
      return (
        <div className="all-users-container">
          <div className="all-users">
            {users.map(user => (
              <User key={user.id} user={user} />
            ))}
          </div>
        </div>
      )
    }
    return <h1>There are no users.</h1>
  }
}

export default AllUsers
