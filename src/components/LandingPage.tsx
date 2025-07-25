import React, { useEffect, useState } from "react";

const LandingPage: React.FC = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2025-07-28T00:00:00") - +new Date();
    let timeLeft = {
      days: "00",
      hours: "00",
      minutes: "00",
      seconds: "00",
    };

    if (difference > 0) {
      timeLeft = {
        days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, "0"),
        hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, "0"),
        minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, "0"),
        seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0c0c3c] to-[#1c1c6b] text-white px-4 flex flex-col items-center justify-center py-10">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
        👑 SURESHOT QUEEN 👑
      </h1>
      <div className="mb-4 px-4 py-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-sm font-medium shadow-lg">
        ⚡ Winning Daily Dhamaka
      </div>

      <div className="w-24 h-24 rounded-full border-4 border-purple-500 overflow-hidden mb-4 shadow-md">
        <img src="/queen.png" alt="Queen" className="object-cover w-full h-full" />
      </div>

      <p className="mb-2 text-sm text-gray-300">🔔 Exclusive VIP Access Ends In:</p>
      <div className="flex gap-4 text-center font-semibold text-lg mb-6">
        {["days", "hours", "minutes", "seconds"].map((unit) => (
          <div key={unit}>
            <div className="text-2xl bg-[#232366] px-4 py-2 rounded-xl shadow-inner">
              {timeLeft[unit as keyof typeof timeLeft]}
            </div>
            <span className="text-sm text-gray-400">
              {unit.charAt(0).toUpperCase() + unit.slice(1)}
            </span>
          </div>
        ))}
      </div>

      <a
        href="https://t.me/+o7wq9Or7jGk0MmQ1"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:scale-105 transition-transform px-6 py-3 rounded-full font-semibold shadow-lg"
      >
        🔵 Join Elite Telegram
      </a>

      <div className="mt-10 w-full max-w-4xl text-center">
        <h2 className="text-2xl font-bold mb-4">Elite Queen Benefits</h2>
        <p className="text-gray-400 mb-6">Unlock premium gaming advantages</p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 px-4">
          {[
            { title: "Daily Rewards", desc: "Exclusive gift codes and bonus rewards delivered daily", color: "green-500", icon: "🎁" },
            { title: "VIP Support", desc: "Priority 24/7 support from gaming experts", color: "purple-500", icon: "🎧" },
            { title: "Precision Shots", desc: "Advanced predictions and winning strategies", color: "blue-500", icon: "🎯" },
          ].map((item) => (
            <div key={item.title} className={`bg-[#121241] p-6 rounded-2xl border border-${item.color} shadow-md`}>
              <div className={`text-${item.color} text-3xl mb-2`}>{item.icon}</div>
              <h3 className={`text-lg font-semibold mb-1 text-${item.color}`}>{item.title}</h3>
              <p className="text-gray-300 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;