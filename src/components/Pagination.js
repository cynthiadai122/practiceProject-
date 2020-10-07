import React from 'react';


const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }


  return (
    <div id="nav-bar">
        <nav aria-label="Page navigation example">
        <ul className='pagination'>
            {pageNumbers.map(number => (
            <li key={number} className='page-item'>
                <a  onClick={() => paginate(number)}  className='page-link'>
                {number}
                </a>
            </li>
            ))}
        </ul>
        </nav>
    </div>
  );
};

export default Pagination;
