import React, { useState } from 'react';
import "../css/Reviews.css";
import people from '../Data.js';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

function Reviews() {

    const [index, setIndex] = useState(0);

    const {name, job, image, text} = people[index];

// Next person
    const nextPerson = () => {
        setIndex((index) => {
          let newIndex = index + 1;
          return checkNumber (newIndex);
        });
    };

// Prev Person
    const prevPerson = () => {
        setIndex((index) => {
          let newIndex = index - 1;
          return checkNumber (newIndex);
        });
    };

    // function for count the persons

    const checkNumber = (number) => {
        if (number > people.length - 1) {
          return 0;
        }
        if (number < 0) {
          return people.length - 1;
        }
        return number;
    };


    // random people select

    const randomPerson = () => {
        let randomNumber = Math.floor(Math.random() * people.length);
        if (randomNumber === index) {
        randomNumber = index + 1;
        }
        setIndex(checkNumber(randomNumber));
    }

    return (
        <div  className='review'>

            <div className='img-container'>
                <img src={image} alt={name} className='person-img' />
                <span className='quote-icon'>
                    <FaQuoteRight />
                </span>
            </div>

            <h4 className='author'>{name}</h4>
            <p className='job'>{job}</p>
            <p className='info'>{text}</p>

            <div className='button-container'>
                <button className='prev-btn' onClick={prevPerson}>
                    <FaChevronLeft />
                </button>
                <button className='next-btn' onClick={nextPerson}>
                    <FaChevronRight />
                </button>
            </div>

            <button className='random-btn' onClick={randomPerson}>
                surprise me
            </button>
        </div>
    )
}

export default Reviews;
