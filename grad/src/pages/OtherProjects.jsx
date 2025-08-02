import React from 'react';
import { useNavigate } from 'react-router-dom';

const OtherProjects = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Other Projects</h2>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mr-4"
        onClick={() => navigate('/menu')}
      >
        Go to Menu
      </button>
      <button
        className="bg-green-500 text-white px-4 py-2 rounded mr-4"
        onClick={() => navigate('/mobile-menu')}
      >
        make an appointment with a doctor
      </button>
       <button
        className="bg-blue-900 text-white px-4 py-2 rounded"
        onClick={() => navigate('/Calculator')}
      >
        Calculator
      </button>
    </div>
  );
};

export default OtherProjects;
