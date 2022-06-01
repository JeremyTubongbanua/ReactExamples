import React, { useState } from 'react';

import UsersList from './components/Users/UsersList';
import AddUser from './components/Users/AddUser';

function App() {
	const [usersList, setUsersList] = useState([]);

	const onAddUserHandler = (newUser) => {
		// newUser == {username: 'Jeremy', age: 19}
		setUsersList((oldUsersList) => {
			return [...oldUsersList, { id: newUser.username, ...newUser }];
		});
	}

	return (
		<React.Fragment>
			<AddUser onAddUser={onAddUserHandler} />
			<UsersList users={usersList} />
		</React.Fragment>
	);
}

export default App;
