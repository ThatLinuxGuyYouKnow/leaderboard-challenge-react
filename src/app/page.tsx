"use client";

import { useState, useEffect } from "react";

type Participant = {
  id: number;
  name: string;
  score: number;
};

const initialLeaderboard: Participant[] = [
  { id: 1, name: "Jude Bellingham", score: 1550 },
  { id: 2, name: "Marcus Rashford	", score: 1520 },
  { id: 3, name: "Captain Man", score: 1495 },
  { id: 4, name: "David Kim", score: 1480 },
  { id: 5, name: "Jakie Chan", score: 1450 },
  { id: 6, name: "Frank Miller", score: 1425 },
  { id: 7, name: "Sunni Lee", score: 1400 },
];

export default function HomePage() {
  const [leaderboard, setLeaderboard] = useState<Participant[]>(initialLeaderboard);

  const updateAndSortScores = (currentLeaderboard: Participant[]): Participant[] => {
    const updated = currentLeaderboard.map((participant) => {
      const scoreChange = Math.floor(Math.random() * 16) - 5;
      return {
        ...participant,
        score: Math.max(0, participant.score + scoreChange),
      };
    });

    return updated.sort((a, b) => b.score - a.score);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setLeaderboard((currentLeaderboard) => updateAndSortScores(currentLeaderboard));
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  const maxScore = Math.max(...leaderboard.map((p) => p.score), 1);

  const getBarColor = (rank: number): string => {
    if (rank === 1) return "bg-yellow-400";
    if (rank === 2) return "bg-slate-400";
    if (rank === 3) return "bg-orange-400";
    return "bg-sky-500";
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-8 sm:p-12 bg-gray-900 text-white font-sans">
      <div className="text-center mb-10">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
          Live Leaderboard
        </h1>
        <p className="text-gray-400 mt-2">Scores update every 2 seconds</p>
      </div>

      <div className="w-full max-w-2xl rounded-lg shadow-lg overflow-hidden bg-gray-800">
        <table className="w-full text-left">
          <thead className="bg-gray-700">
            <tr>
              <th className="p-4 font-semibold uppercase text-gray-300 text-sm w-16 text-center">Rank</th>
              <th className="p-4 font-semibold uppercase text-gray-300 text-sm">Participant</th>
              <th className="p-4 font-semibold uppercase text-gray-300 text-sm text-right">Score</th>
            </tr>
          </thead>
          <tbody>
            {leaderboard.map((participant, index) => (
              <tr key={participant.id} className="border-b border-gray-700 last:border-b-0 hover:bg-gray-700/50 transition-colors duration-200">
                <td className="p-4 font-bold text-lg text-gray-400 text-center">{index + 1}</td>
                <td className="p-4">{participant.name}</td>
                <td className="p-4 font-mono text-right">{participant.score.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="w-full max-w-2xl mt-12">
        <h2 className="text-2xl font-bold mb-4 text-center">Score Distribution</h2>
        <div className="space-y-4 rounded-lg bg-gray-800 p-6">
          {leaderboard.map((participant, index) => (
            <div key={participant.id} className="grid grid-cols-12 gap-x-3 items-center">
              <div className="col-span-3 truncate text-sm text-gray-300 text-right">
                {participant.name}
              </div>
              <div className="col-span-9 bg-gray-700 rounded-full h-6">
                <div
                  className={`${getBarColor(index + 1)} h-6 rounded-full flex items-center justify-between px-2 transition-all duration-500 ease-out`}
                  style={{ width: `${(participant.score / maxScore) * 100}%` }}
                >
                  <span className="text-xs font-bold text-gray-900">
                    {participant.score.toLocaleString()}
                  </span>
                  <span className="text-xs font-bold text-gray-900">#{index + 1}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}