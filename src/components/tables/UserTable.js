import React from 'react'

const UserTable = props => (
  <table className="table is-mobile">
    <thead>
      <tr>
        <th><abbr title="name">Name</abbr></th>
        <th><abbr title="username">Username</abbr></th>
        <th><abbr title="action">Action</abbr></th>
      </tr>
    </thead>
    <tbody>
    {props.users.length > 0 ? (
      props.users.map(user => (
        <tr key={user.id}>
          <td>{user.name}</td>
          <td>{user.username}</td>
          <td><button  className="button is-info">Edit</button></td>
          <td><button className="button is-danger" onClick={() => props.deleteUser(user.id)}>Delete</button></td>
        </tr>
      ))
   ) : (
     <tr>
       <td colSpan={3}>No users</td>
     </tr>
   )}
    </tbody>
  </table>
)

export default UserTable
