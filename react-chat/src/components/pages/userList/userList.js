// import React from 'react';
// const UserList = () => {
//     return (<h1>UserLIst</h1>)
// };

// export default UserList;
import React, { Component } from "react";
import { connect } from 'react-redux';
import UserItem from '../../user-item/user-item';

class UserList extends Component {
	// constructor(props) {
	// 	super(props);
	// 	this.onEdit = this.onEdit.bind(this);
	// 	this.onDelete = this.onDelete.bind(this);
	// 	this.onAdd = this.onAdd.bind(this);
	// }

	// componentDidMount() {
	// 	this.props.fetchUsers();
	// }

	// onEdit(id) {
	// 	this.props.history.push(`/user/${id}`);
	// }

	// onDelete(id) {
	// 	this.props.deleteUser(id);
	// }

	// onAdd() {
	// 	this.props.history.push('/user');
	// }

	render() {
		return (
			<div className="row">
				<div className="list-group col-10">
					{
						// this.props.users.map(user => {
						// 	return (
						// 		<UserItem
						// 			key={user.id}
						// 			id={user.id}
						// 			name={user.name}
						// 			email={user.email}
						// 			onEdit={this.onEdit}
						// 			onDelete={this.onDelete}
						// 		/>
						// 	);
						})
					}
				</div>
				<div className="col-2">
					<button
						className="btn btn-success"
						onClick={this.onAdd}
						style={{ margin: "5px" }}
					>
						Add user
					</button>
				</div>
			</div>
		);
	}
}

// const mapStateToProps = (state) => {
// 	return {
// 		users: state.users
// 	}
// };

// const mapDispatchToProps = {
// 	...actions
// };

// export default connect(mapStateToProps, mapDispatchToProps)(UserList);
export default UserList;