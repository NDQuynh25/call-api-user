import React, { useEffect, useState } from "react";
import "../../styles/UserManagement.css";
import { Link } from "react-router-dom";
import UserTable from "../../component/user/UserTable";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchUsers } from "../../redux/slice/userSlice";
import { User } from "../../types/backend";
import Loading from "../../component/Loading";
import Pagination from "../../component/Pagination";

function UserManagement() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const dispatch = useAppDispatch();
    const { data, status, error } = useAppSelector((state) => state.user);
    const [current_page, setPage] = useState(1);
    const [sortField, setSortField] = useState<keyof User | null>(null);
    const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

    const fetchData = async (query: string): Promise<void> => {
        try {
            await dispatch(fetchUsers({query}));
        } catch (error) {
            console.error("Error fetching users:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData('?page=1&results=10');
    }, [dispatch]);

    useEffect(() => {
        if (status === 'succeeded') {
            setUsers(data.results);
            setLoading(false);
        }
    }, [status, data.results]);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    
    
   

    const handleOnChangePage = async (currentPage: number, sort: string ) => {
        
        console.log("current page", currentPage);
        const buidQuery = `?page=${currentPage}&results=10&sort=${sort}`;
        console.log(buidQuery);
        setLoading(true);
        setPage(currentPage);
        await fetchData(buidQuery);
        setLoading(false);  
        
    };

    const buidSortQuery = (sort: string) => {
        const buidQuery = `?page=${current_page}&results=10&sort=${sort}`;
    }

    

    
  
    
    
   
    
    return (
        <div className={`layout ${isSidebarOpen ? "sidebar-open" : "sidebar-closed"}`}>
        <aside className={`sidebar ${isSidebarOpen ? "open" : "closed"}`}>
            <h3>ADMIN</h3>
            <ul className={`${isSidebarOpen ? "" : "hidden"}`}>
                <Link to="/">
                    <li className="active">
                        <svg
                        viewBox="0 0 1024 1024"
                        fill="currentColor"
                        width="1.1em"
                        height="1.1em"
                        className="icon"
                        >
                        <path d="M464 144H160c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16zm-52 268H212V212h200v200zm452-268H560c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16zm-52 268H612V212h200v200zM464 544H160c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V560c0-8.8-7.2-16-16-16zm-52 268H212V612h200v200zm452-268H560c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V560c0-8.8-7.2-16-16-16zm-52 268H612V612h200v200z"></path>
                        </svg>
                        <div>Dashboard</div>
                    </li>
                </Link>
                <Link to="/user">
                    <li className="active">
                        <svg
                        viewBox="0 0 1024 1024"
                        fill="currentColor"
                        width="1em"
                        height="1em"
                        className="icon"
                        >
                        <path d="M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"></path>
                        </svg>
                        <div>User</div>
                    </li>
                </Link>
            </ul>
            <ul className={`${isSidebarOpen ? "hidden" : ""}`}>
            
                <li className="display-mini">
                    <Link to="/">
                        <svg
                        viewBox="0 0 1024 1024"
                        fill="currentColor"
                        width="1.1em"
                        height="1.1em"
                        className="icon"
                        >
                            <path d="M464 144H160c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16zm-52 268H212V212h200v200zm452-268H560c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16zm-52 268H612V212h200v200zM464 544H160c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V560c0-8.8-7.2-16-16-16zm-52 268H212V612h200v200zm452-268H560c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V560c0-8.8-7.2-16-16-16zm-52 268H612V612h200v200z"></path>
                        </svg>
                    </Link>
                    
                </li>
                <li className="display-mini" >
                    <Link to="/user">
                        <svg
                        viewBox="0 0 1024 1024"
                        fill="currentColor"
                        width="1em"
                        height="1em"
                        className="icon"
                        >
                        <path d="M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"></path>
                        </svg>
                    </Link>
                </li>
            </ul>
        </aside>

        {loading ? <Loading /> : 
            <div className="content">
                <header className="header">
                    <button className="toggle-button" onClick={toggleSidebar}>
                        {isSidebarOpen ? 'Close Sidebar' : 'Open Sidebar'}
                    </button>
                    <div className="welcome">Welcome Nguyễn Đức Quỳnh</div>
                </header>

                <main className="main-content">
                    <h2>User Management</h2>
                    <UserTable users={users}/>
                    <div className="pagination">
                        <Pagination
                            currentPage={current_page}
                            totalPages={10}
                            onPageChange={handleOnChangePage}
                            
                        />
                    </div>
                
                </main>

                <footer className="footer">
                <p>© 2024 Nguyen Duc Quynh. All Rights Reserved.</p>
                </footer>
            </div>
        }
        </div>
    );
}

export default UserManagement;
