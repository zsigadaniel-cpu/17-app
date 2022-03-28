import { userList } from './UserList'

export const UserListDetails = (props: { users: userList[], userDisplay: string, sameUserClicked: boolean }) => {
    return (
        <div className="user-list-details">
            {props.users.map((user) => user.name === props.userDisplay ? (
                <ul key={user.name} className={`user-details ${props.sameUserClicked ? 'hide' : ''}`}>
                    <li className='user-name'>{user.name}</li>
                    <li className='user-street'>{user.street}</li>
                    <li className='user-city'>{user.city}</li>
                    <li className='user-state'>{user.state}</li>
                    <li className='user-country'>{user.country}</li>
                    <li className='user-telephone'>{user.telephone}</li>
                    <li className='user-birthday'>{user.birthday}</li>
                </ul>
            ) : null)}
        </div>
    )
}