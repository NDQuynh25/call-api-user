
import React, { useEffect } from 'react';
import '../styles/Pagination.css';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (currentPage: number, sort: string) => void;
}

    



const Pagination: React.FC<PaginationProps> = ({ currentPage,  totalPages, onPageChange }) => {
    const pageNumbers: number[] = [];
    const [itemsPerPage, setItemsPage] = React.useState<number>(10);

    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    const renderPageNumbers = () => {
        return pageNumbers.map(number => {
            if (number === 1 || number === totalPages || (number >= currentPage - 1 && number <= currentPage + 1)) {
                return (
                    <button
                        key={number}
                        onClick={() => onPageChange(number, 'asc')}
                        className={currentPage === number ? 'active' : ''}
                    >
                        {number}
                    </button>
                    );
            } else if (number === currentPage - 2 || number === currentPage + 2) {
                return <span key={number}>..</span>;
            } else {
                return null;
            }
            });
    };
    
    useEffect(() => {
        console.log(itemsPerPage);
       
    }, [itemsPerPage]);

    return (
        <div className="pagination">
        <button
            onClick={() => onPageChange(currentPage - 1,  'asc')}
            disabled={currentPage === 1}
        >
            &laquo;
        </button>
        {renderPageNumbers()}
        <button
            onClick={() => onPageChange(currentPage + 1, 'asc')}
            disabled={currentPage === totalPages}
        >
            &raquo;
        </button>
        
        </div>
    );
    };

    export default Pagination;
