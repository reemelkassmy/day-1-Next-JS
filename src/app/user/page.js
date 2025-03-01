import React from 'react'
import { Get } from '../api/User/route'

async function User() {
    const res= await Get();
    const users= await res.json();
    return (
        <div>
          {users.map((user) => (
            <div key={user.id}>{user.name}</div> 
          ))}
        </div>
      );
}

export default User