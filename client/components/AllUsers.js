import React, {Component} from 'react'
import {connect} from 'react-redux'
import {User} from './'
import {getUsers} from '../store/user'

// Needs React Router
class AllUsers extends Component {
  // constructor(props) {
  //   super(props)
  // }

  componentDidMount() {
    // nothing here yet
    this.props.getUsers()
  }

  render() {
    console.log('USER PROPS', this.props, 'USER STATE', this.state)
    const users = this.props.allUsers

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

const mapState = state => {
  return {
    allUsers: state.user.users
  }
}

const mapDispatch = dispatch => {
  return {
    getUsers: () => dispatch(getUsers())
  }
}

export default connect(mapState, mapDispatch)(AllUsers)
