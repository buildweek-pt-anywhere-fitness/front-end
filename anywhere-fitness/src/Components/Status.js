import React from 'react';

function Status(props) {
  const {users} = props;
  
  return (
    <div>
      {users.length > 0 ? `Hi ${users[users.length-1].first_name}` : <div>No Users registered</div>}
      {/* {console.log(users.length)} */}
    </div>
  );
}

export default Status;