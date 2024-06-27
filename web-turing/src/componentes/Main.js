import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Main.css';

function Main() {
  const [largeCards, setLargeCards] = useState([]);
  const [smallCards, setSmallCards] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  useEffect(() => {
    const fetchLargeCards = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/large-cards');
        setLargeCards(response.data);
      } catch (error) {
        console.error('Error fetching large cards:', error);
      }
    };

    const fetchSmallCards = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/small-cards');
        setSmallCards(response.data);
      } catch (error) {
        console.error('Error fetching small cards:', error);
      }
    };

    fetchLargeCards();
    fetchSmallCards();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = largeCards.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    
    <div className="main-container">
        
      <div className="left-column">
      <h3>Galleria</h3>
        
        {currentItems.map((item) => (
          <LargeCard key={item.id} title={item.title} content={item.content} />
        ))}
        <Pagination 
          itemsPerPage={itemsPerPage} 
          totalItems={largeCards.length} 
          paginate={paginate} 
          currentPage={currentPage}
        />
      </div>
      <div className="right-column">
      <h3>Información</h3>
        {smallCards.map((item) => (
          <SmallCard key={item.id} title={item.title} content={item.content} />
        ))}
      </div>
    </div>
  );
}

function LargeCard({ title, content }) {
  return (
    <div className="large-card">
      <div className="card-image"></div>
     
    </div>
  );
}

function SmallCard({ title, content }) {
  return (
    <div className="small-card">
      <div className="card-image-small"></div>
      <div className="card-content">
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
}

function Pagination({ itemsPerPage, totalItems, paginate, currentPage }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
        ◀
      </button>
      {pageNumbers.map((number) => (
        <button key={number} onClick={() => paginate(number)} className={currentPage === number ? 'active' : ''}>
          {number}
        </button>
      ))}
      <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === pageNumbers.length}>
        ▶
      </button>
     
      
    </div>
    
  );
}

export default Main;
