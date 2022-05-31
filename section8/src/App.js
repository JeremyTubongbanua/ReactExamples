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
		<div>
			<AddUser onAddUser={onAddUserHandler} />
			<UsersList users={usersList} />

		</div>
	);
}

export default App;
