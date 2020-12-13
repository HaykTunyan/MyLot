import React from 'react';
import './user-item.scss';
import UserAddItem from './user-add-item/user-add-item';

const UserItem = () => {
    return (
        <div className="userItem">
            <h3>Suggest Items</h3>
            <div className="usersProduct">
                <UserAddItem />
                <UserAddItem />
                <UserAddItem />
            </div>
            <div className="userItemAdd">
                <div className="userItemAddIcon">
                    +
                </div>
                <button className="results">
                    Results
                </button>
                <button className="send">
                    Send
                </button>
            </div>
        </div>
    )
}
export default UserItem