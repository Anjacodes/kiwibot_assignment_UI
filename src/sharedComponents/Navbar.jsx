import React from 'react';

function Navbar() {
  return (
    <div className="bg-[#0434c4] py-2 px-6 flex justify-between">
      <img src="https://global-uploads.webflow.com/5ddc307f68536f623db8c772/624d9d2e08cd39803b5d81cb_Logo%20white.svg"/>
      <ul className="flex text-white justify-between w-[40vw] font-bold text-lg items-center">
        <li>Campuses</li>
        <li>Career</li>
        <li>Contact</li>
        <li><button className="rounded-3xl py-3 px-5 bg-[#59c9ff]">Start-up Program</button></li>
      </ul>
    </div>
  )
}

export default Navbar;
