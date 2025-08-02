import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";


const Resturants = () => {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetch('https://corsproxy.io/?https://fakerestaurantapi.runasp.net/api/Restaurant')
            .then(res => res.json())
            .then(json => setData(json.slice(0, 10)))
            .catch(err => console.error(err));
    }, []);

    const filtered = data.filter(r =>
        r.restaurantName.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Restaurants 🍽️</h1>

            <input
                type="text"
                placeholder="Search by name..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="border px-4 py-2 rounded mb-6 w-full md:w-1/3"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filtered.map((r) => (
                    <div key={r.restaurantID} className="bg-white rounded shadow p-4">
                        <h2 className="text-xl font-semibold">{r.restaurantName}</h2>
                        <p className="text-gray-600">{r.type}</p>
                        <p className="text-gray-500">{r.address}</p>
                        <p className={`mt-2 font-medium ${r.parkingLot ? "text-green-600" : "text-red-500"}`}>
                            Parking: {r.parkingLot ? "Available" : "Not available"}
                        </p>
                        <Link to={`/booking/${r.restaurantID}`}>
                            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mt-4">
                                Book
                            </button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Resturants;
