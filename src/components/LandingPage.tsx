import React, { useEffect, useState } from "react";
import {
  FaGift,
  FaHeadset,
  FaBullseye,
  FaTelegramPlane,
  FaCrown,
} from "react-icons/fa";

const LandingPage: React.FC = () => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const end = new Date();
    end.setHours(24, 0, 0, 0); // Set end to midnight tonight

    if (now > end) end.setDate(end.getDate() + 1); // next day if past midnight

    const difference = +end - +now;

    return {
      hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(
        2,
        "0"
      ),
      minutes: String(Math.floor((difference / (1000 * 60)) % 60)).padStart(
        2,
        "0"
      ),
      seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a23] to-[#1a1a40] text-white px-4 flex flex-col items-center justify-center py-10 font-sans">
      <div className="text-center mb-6">
        <FaCrown className="text-5xl text-yellow-400 mx-auto animate-pulse" />
        <h1 className="text-4xl sm:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 mt-2">
          SURESHOT QUEEN
        </h1>
        <div className="mt-2 inline-block bg-gradient-to-r from-pink-500 to-purple-500 px-4 py-1 rounded-full text-sm font-medium shadow-lg animate-bounce">
          💎 Elite Rewards Await
        </div>
      </div>

      <div className="w-28 h-28 rounded-full border-4 border-pink-500 overflow-hidden mb-4 shadow-lg">
        <img
          src="https://i.ibb.co/whMnFSTv/queen.jpg"
          alt="Queen"
          className="object-cover w-full h-full"
        />
      </div>

      <p className="mb-2 text-sm text-gray-300">⏳ Countdown to Midnight Reset:</p>
      <div className="flex gap-4 text-center font-bold text-lg mb-8">
        {["hours", "minutes", "seconds"].map((unit) => (
          <div key={unit}>
            <div className="text-2xl bg-[#2c2c66] px-5 py-2 rounded-xl shadow-lg backdrop-blur">
              {timeLeft[unit as keyof typeof timeLeft]}
            </div>
            <span className="text-sm text-gray-400 capitalize">{unit}</span>
          </div>
        ))}
      </div>

      <a
        href="https://t.me/+o7wq9Or7jGk0MmQ1"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-105 transition-transform px-6 py-3 rounded-full font-semibold shadow-xl"
      >
        <FaTelegramPlane className="text-xl" />
        Join Elite Telegram
      </a>

      <div className="mt-12 w-full max-w-5xl text-center">
        <h2 className="text-2xl font-bold mb-2 text-white">Elite Queen Benefits</h2>
        <p className="text-gray-400 mb-8">
          Unlock powerful advantages & win like royalty
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 px-4">
          {[
            {
              title: "Daily Rewards",
              desc: "Exclusive gift codes & bonus drops delivered every day.",
              icon: <FaGift />,
              color: "text-green-400 border-green-400",
            },
            {
              title: "VIP Support",
              desc: "Priority 24/7 access to gaming experts & elite team.",
              icon: <FaHeadset />,
              color: "text-purple-400 border-purple-400",
            },
            {
              title: "Precision Shots",
              desc: "Pro-level predictions with ultra win accuracy.",
              icon: <FaBullseye />,
              color: "text-blue-400 border-blue-400",
            },
          ].map((item) => (
            <div
              key={item.title}
              className={`bg-[#14143b] p-6 rounded-2xl border shadow-xl transition hover:scale-[1.03] ${item.color} flex flex-col items-center text-center`}
            >
              <div className={`text-4xl mb-3 ${item.color}`}>{item.icon}</div>
              <h3 className={`text-lg font-semibold mb-1 ${item.color}`}>
                {item.title}
              </h3>
              <p className="text-gray-300 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
