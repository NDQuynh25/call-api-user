import React, { useEffect, useState } from 'react';
import { User } from '../../types/backend.d';
import '../../styles/UserTable.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

interface UserTableProps {
    users: User[];
}

interface UserState {
    avatar: string;
    fullname: string;
    username: string;
}

const UserTable: React.FC<UserTableProps> = ({ users }) => {
    const [sortField, setSortField] = useState<keyof UserState | null>(null);
    const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
    const [arrUsers, setArrUsers] = useState<UserState[]>([]);

    useEffect(() => {
        const transformedUsers = users.map(user => ({
            avatar: user.picture.thumbnail,
            fullname: `${user.name.title} ${user.name.first} ${user.name.last}`,
            username: user.login.username
        }));
        setArrUsers(transformedUsers);
    }, [users]);

    const handleSort = (field: keyof UserState, order: "asc" | "desc") => {
        const sortedUsers = [...arrUsers].sort((a, b) => {
            if (a[field] < b[field]) return order === "asc" ? -1 : 1;
            if (a[field] > b[field]) return order === "asc" ? 1 : -1;
            return 0;
        });
        setSortField(field);
        setSortOrder(order);
        setArrUsers(sortedUsers);
    };

    useEffect(() => {
        
    }, [sortField, sortOrder]);

    return (
        <table className="user-table">
            <thead>
                <tr>
                    <th>STT</th>
                    <th>
                        Fullname
                        <span
                            style={{ marginLeft: "20px", marginRight: "0px" }}
                            className='icon'
                            onClick={() => handleSort('fullname', 'asc')}
                        >
                            &#9650;
                        </span>
                        <span
                            className='icon'
                            onClick={() => handleSort('fullname', 'desc')}
                        >
                            &#9660;
                        </span>
                    </th>
                    <th>
                        Username
                        <span
                            style={{ marginLeft: "20px", marginRight: "0px" }}
                            className='icon'
                            onClick={() => handleSort('username', 'asc')}
                        >
                            &#9650;
                        </span>
                        <span
                            className='icon'
                            onClick={() => handleSort('username', 'desc')}
                        >
                            &#9660;
                        </span>
                    </th>
                </tr>
            </thead>
            <tbody>
                {arrUsers.map((user, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                            <div className="user-info">
                                <div className="user-avatar">
                                    <img src={user.avatar} alt="avatar" />
                                </div>
                                <div className="user-name">
                                    {user.fullname}
                                </div>
                            </div>
                        </td>
                        <td>{user.username}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default UserTable;
