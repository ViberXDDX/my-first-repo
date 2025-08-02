import React, { useState } from "react";
import { FaBars, FaStar, FaPhone } from 'react-icons/fa';
import { MdSearch, MdSubdirectoryArrowLeft } from 'react-icons/md';
import { FaRegBookmark, FaBookmark } from 'react-icons/fa6';
import data from './data';
import './Styles.css';

const Menu = () => {
    const [bookmarkedIds, setBookmarkedIds] = useState([]);

    function toggleMark(id) {
        if (bookmarkedIds.includes(id)) {

            setBookmarkedIds(bookmarkedIds.filter(bookmarkedId => bookmarkedId !== id));
        } else {
            setBookmarkedIds([...bookmarkedIds, id]);
        }
    }

    return (
        <div className="body">
            <div className="Container">
                <nav className="navbar">
                    <button aria-label="Menu">
                        <FaBars style={{ color: 'whitesmoke', fontSize: '25px' }} />
                    </button>
                    <p style={{ color: 'whitesmoke' }}>Restaurants</p>
                    <button aria-label="Search">
                        <MdSearch style={{ color: 'whitesmoke', fontSize: '25px' }} />
                    </button>
                </nav>
                <section className="Main_app">
                    {data.map((dataItem) => (
                        <div key={dataItem.id} className="Info">
                            <img
                                className="Icon"
                                src={dataItem.picture}
                                style={{
                                    height: '90px',
                                    width: '90px',
                                    borderRadius: '20px',
                                    marginLeft: '10px',
                                    position: 'relative',
                                    left: '10px',
                                }}
                                alt={`${dataItem.name} thumbnail`}
                            />
                            <div style={{ marginLeft: '10px', width: '150px', position: 'relative', left: '20px' }}>
                                <p style={{ color: 'whitesmoke' }}>{dataItem.name}</p>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    {Array.from({ length: 5 }, (_, index) => (
                                        <FaStar
                                            key={index}
                                            color={index + 1 <= dataItem.rating ? 'gold' : 'gray'}
                                            style={{ marginLeft: '3px' }}
                                        />
                                    ))}
                                </div>
                                <div>
                                    {dataItem.cuisine.map((dish) => (
                                        <div key={dish} className="cuisine-circle">
                                            {dish}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <section
                                style={{ display: 'flex', flexDirection: 'column', position: 'relative', right: '-110px' }}
                            >
                                <MdSubdirectoryArrowLeft fontSize="30px" color="whitesmoke" />
                                <p style={{ color: 'whitesmoke' }}>{dataItem.distance}</p>
                            </section>
                            <section className="last_section">
                                <button className="order1">
                                    <span>
                                        <FaPhone size="25px" />
                                    </span>
                                    <p>Order</p>
                                </button>
                                <button className="order2" onClick={() => toggleMark(dataItem.id)}>
                                    <span>
                                        {bookmarkedIds.includes(dataItem.id) ? (
                                            <FaBookmark size="25px" />
                                        ) : (
                                            <FaRegBookmark size="25px" />
                                        )}
                                    </span>
                                    <p>Bookmark</p>
                                </button>
                            </section>
                        </div>
                    ))}
                </section>
            </div>
        </div>
    );
};

export default Menu;
