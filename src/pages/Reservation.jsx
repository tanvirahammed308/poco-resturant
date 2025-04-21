import React from 'react';
import img1 from "../assets/img/all/reservation.jpg"; // Image import

const Reservation = () => {
  return (
    <div className='w-full md:w-10/12 mx-auto mt-8 md:mt-0'>
      {/* Banner Section with Image and Form */}
      <div className='flex flex-col md:flex-row items-center'>
        {/* Left Side: Image */}
        <div className='w-full md:w-1/2 mb-8 md:mb-0'>
          <img
            src={img1} // Replace with your image URL
            alt="Restaurant"
            className="w-full h-64 md:h-full object-cover rounded-lg"
          />
        </div>

        {/* Right Side: Form */}
        <div className='w-full md:w-1/2 p-6 md:p-10'>
          <form className="bg-white shadow-md rounded-lg p-6 md:p-10 space-y-4 border border-[#00A149]">
            <h2 className="text-2xl font-bold text-center mb-4">Book a Table</h2>

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              className="w-full p-2 border rounded"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              className="w-full p-2 border rounded"
            />

            <input
              type="date"
              name="date"
              required
              className="w-full p-2 border rounded"
            />

            <select
              name="time"
              required
              className="w-full p-2 border rounded"
            >
              <option value="">Select Time</option>
              <option value="12:00 PM">12:00 PM</option>
              <option value="1:00 PM">1:00 PM</option>
              <option value="2:00 PM">2:00 PM</option>
              <option value="3:00 PM">3:00 PM</option>
              <option value="4:00 PM">4:00 PM</option>
              <option value="5:00 PM">5:00 PM</option>
              <option value="6:00 PM">6:00 PM</option>
              <option value="7:00 PM">7:00 PM</option>
              <option value="8:00 PM">8:00 PM</option>
              <option value="9:00 PM">9:00 PM</option>
              <option value="10:00 PM">10:00 PM</option>
            </select>

            <select
              name="guests"
              required
              className="w-full p-2 border rounded"
            >
              <option value="">Number of Persons</option>
              {[...Array(10)].map((_, i) => (
                <option key={i + 1} value={i + 1}>{i + 1}</option>
              ))}
            </select>

            <select
              name="category"
              required
              className="w-full p-2 border rounded"
            >
              <option value="">Select Category</option>
              <option value="luxurious">Luxurious</option>
              <option value="regular">Regular</option>
            </select>

            <button
              type="submit"
              className="w-full bg-[#00A149] text-white py-2 rounded font-semibold"
            >
              Book Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
