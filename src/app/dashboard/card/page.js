import React from 'react';
import Image from 'next/image';
import Pic from '../../../../public/images/wedding.jpg';

const WeddingCards = () => {
  const weddingCards = [
    {
        title: 'Elegant Wedding',
        couple: {
          groom: 'Mr. John Smith',
          bride: 'Miss Sarah Johnson',
        },
        date: '15th August 2023',
        time: '2:00 PM',
        venue: 'Grand Ballroom, 1234 Love Street, City',
        contact: {
          john: '123-456-7890',
          sarah: '987-654-3210',
        },
        design: 'bg-pink-300 text-pink-700',
      },
      {
        title: 'Romantic Wedding',
        couple: {
          groom: 'Mr. Michael Brown',
          bride: 'Miss Emily Davis',
        },
        date: '20th September 2023',
        time: '3:30 PM',
        venue: 'Rose Garden, 567 Romantic Avenue, Town',
        contact: {
          michael: '555-123-4567',
          emily: '555-987-6543',
        },
        design: 'bg-red-300 text-red-700',
      },
      {
        title: 'Vintage Wedding',
        couple: {
          groom: 'Mr. William Johnson',
          bride: 'Miss Elizabeth White',
        },
        date: '10th October 2023',
        time: '1:00 PM',
        venue: 'Old Manor House, 789 Vintage Lane, Village',
        contact: {
          william: '333-555-8888',
          elizabeth: '333-999-7777',
        },
        design: 'bg-yellow-300 text-yellow-700',
      },
      {
        title: 'Rustic Wedding',
        couple: {
          groom: 'Mr. Daniel Wilson',
          bride: 'Miss Olivia Harris',
        },
        date: '5th November 2023',
        time: '4:00 PM',
        venue: 'Barn Venue, 456 Rustic Road, Countryside',
        contact: {
          daniel: '777-222-4444',
          olivia: '777-111-3333',
        },
        design: 'bg-green-300 text-green-700',
      },
      {
        title: 'Beach Wedding',
        couple: {
          groom: 'Mr. Thomas Martin',
          bride: 'Miss Jessica Lee',
        },
        date: '25th December 2023',
        time: '12:00 PM',
        venue: 'Sandy Beach, 123 Sunshine Street, Seaside',
        contact: {
          thomas: '888-777-5555',
          jessica: '888-666-4444',
        },
        design: 'bg-blue-300 text-blue-700',
      },
  
  ];

  return (
    <div className="flex flex-wrap justify-center mx-10 pl-10">
    {weddingCards.map((card, index) => (
      <div
        key={index}
        className={`bg-white rounded-lg shadow-md p-8 w-96 m-4 border-black-700 ${card.design}`}
      >
          <div className="text-center">
            <h2 className="text-3xl font-semibold mb-2">
              <i className="fas fa-heart text-pink-500 mr-2"></i>
              {card.title}
            </h2>
            <p className="text-gray-600">
              <i className="fas fa-glass-cheers text-yellow-500 mr-1"></i>
              Join us to celebrate our special day!
            </p>
          </div>
          <div className="mt-4">
            <Image
              src={Pic}
              className="mx-auto rounded-full w-64 h-64 object-cover"
            />
          </div>
          <div className="mt-4 text-center">
            <p className="text-xl text-gray-700">
              <i className="fas fa-user text-blue-500 mr-2"></i>
              {card.couple.groom}
            </p>
            <p className="text-xl text-gray-700">
              <i className="fas fa-heart text-red-500 mr-2"></i>
              &amp;
            </p>
            <p className="text-xl text-gray-700">
              <i className="fas fa-user text-blue-500 mr-2"></i>
              {card.couple.bride}
            </p>
          </div>
          <div className="mt-4 text-center">
            <p className="text-gray-600">
              <i className="far fa-calendar-alt text-purple-500 mr-2"></i>
              Date: {card.date}
            </p>
            <p className="text-gray-600">
              <i className="far fa-clock text-orange-500 mr-2"></i>
              Time: {card.time}
            </p>
            <p className="text-gray-600">
              <i className="fas fa-map-marker-alt text-green-500 mr-2"></i>
              Venue: {card.venue}
            </p>
          </div>
          <div className="mt-6 text-center">
            <p className="text-gray-600">RSVP by August 5th</p>
            <p className="text-gray-600">
              <i className="fas fa-phone text-blue-500 mr-2"></i>
              Contact: John - {card.contact.john}
            </p>
            <p className="text-gray-600">
              <i className="fas fa-phone text-blue-500 mr-2"></i>
              Sarah - {card.contact.sarah}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WeddingCards;
