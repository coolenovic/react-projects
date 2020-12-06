import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  console.log(people)
  const {name, job, image, text} = people[index];
  console.log(name)

  return <article className="review">
    <div className="img-container">
      <img src={image} alt={name} className="person-img"/>
      <span className="quote-icon">
        <FaQuoteRight />
      </span>
    </div>

  </article>;
};

export default Review;
