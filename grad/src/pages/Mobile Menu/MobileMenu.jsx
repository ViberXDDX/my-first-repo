import React, { useState } from "react";
import './Menu.css';
import { FaPlus } from "react-icons/fa6";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { MdLocalPostOffice } from "react-icons/md";
import { SiLivewire } from "react-icons/si";
import { TbMessages } from "react-icons/tb";
import { FaHeartbeat } from "react-icons/fa";
import { CiTrash } from "react-icons/ci";

const MobileMenu = () => {

  const [branches, SetBranches] = useState([])

  const AddBranch = () => {
    const branchName = prompt("Enter the branch name :")

    if (branchName != null) {
      SetBranches([...branches, branchName])
    }
  }

  const deleteBranch = (index) => {
    const updatedBranches = branches.filter((_, i) => i !== index);
    SetBranches(updatedBranches);
  };


  return (
    <div className="All">
      <div className="Container2">
      <header className="title">
        <div className="square"></div>
        <div className="head">
          <img src="https://www.myhealthhospitals.com/images/doctors/dr-jayanth-reddy.jpg" alt="" style={{ width: '70px', height: '70px', borderRadius: "50%", border: '8px solid rgba(0, 0, 0, 0.1)' }} />
          <div>
            <span className="text-white">Dr .Ahmed Mohammed</span>
            <p style={{ color: '#bdcbf5', fontSize: '13px' }}>Dermathologist</p>
          </div>
        </div>
      </header>
      <main className="Content">
        <button className="button_branch" onClick={AddBranch}> <FaPlus /> Add Branch</button>
        <section className="buttons">
          {branches.map(
            (branch, index) => (
              <button className="Button">{branch} <CiTrash className="trash" onClick={() => deleteBranch(index)} /></button>
            )
          )}
          <button className="Button"><TbLayoutDashboardFilled className="icon" size={'25px'} /> Dashboard  </button>
          <button className="Button"><MdLocalPostOffice className="icon" size={'25px'} /> Post sessions </button>
          <button className="Button"><SiLivewire className="icon" size={'25px'} />Live sessions </button>
          <button className="Button"><TbMessages className="icon" size={'25px'} />Messages </button>
          <button className="Button"><FaHeartbeat className="icon" size={'25px'} />Locum library </button>
        </section>
      </main>

    </div>
    </div>);
};

export default MobileMenu;
