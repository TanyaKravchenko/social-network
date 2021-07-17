import React from 'react';
import classes from '../Paginator/Paginator.module.css';


type PaginatorPropsType = {
    totalUsersCount: number
    pageSize: number
    onPageChanged: (pageNumber: number) => void
    currentPage: number
}

const Paginator: React.FC<PaginatorPropsType> = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div>
            {pages.map((page, index) => {
                return <span
                    key={index}
                    className={currentPage === page ? classes.selectedPage : ''}
                    onClick={(e) => {
                        onPageChanged(page)
                    }}
                >{page}</span>
            })}
        </div>
    )
}
export default Paginator;