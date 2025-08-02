import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Booking = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    fetch(`https://corsproxy.io/?https://fakerestaurantapi.runasp.net/api/Restaurant/${id}`)
      .then(res => res.json())
      .then(data => setRestaurant(data))
      .catch(err => console.error(err));
  }, [id]);

  if (!restaurant) return <div className="p-6">Loading...</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-2">{restaurant.restaurantName}</h1>
      <p className="mb-1"><strong>Type:</strong> {restaurant.type}</p>
      <p className="mb-1"><strong>Address:</strong> {restaurant.address}</p>
      <p className={`mb-3 font-semibold ${restaurant.parkingLot ? "text-green-600" : "text-red-500"}`}>
        Parking: {restaurant.parkingLot ? "Available" : "Not available"}
      </p>

      <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded">
        Confirm Booking
      </button>
    </div>
  );
};

export default Booking;
