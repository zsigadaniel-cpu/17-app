import { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { UserListDetails } from './UserListDetails'
export type userList = {
    name: string, street: string, city: string, state: string, country: string, telephone: string, birthday: string
}

const users: userList[] = [
    { name: "Daniel", street: "Jean Jaures", city: "Cluj", state: "HAHA state, funny", country: "Romania", telephone: "0758701753", birthday: "06.02" },
    { name: "Anabelle", street: "Some street", city: "Tokyo", state: "Tokyo", country: "Japan", telephone: "023113444423", birthday: "08.09" },
]

function UserList() {
    const [userDisplay, setUserDisplay] = useState('');
    const [sameUserClicked, setSameUserClicked] = useState(false);

    useEffect(() => {
        setSameUserClicked(false)
    }, [userDisplay])

    return (
        <div className="user-list container">
            <ul className="user-list-names">
                {users.map((user) => (
                    <li key={user.name}
                        onClick={() => {
                            setUserDisplay(user.name)
                            setSameUserClicked(!sameUserClicked)
                        }}
                    >
                        {user.name}
                    </li>
                ))}
            </ul>
            <UserListDetails users={users} userDisplay={userDisplay} sameUserClicked={sameUserClicked} />
        </div>
    );
}

export default withRouter(UserList);
