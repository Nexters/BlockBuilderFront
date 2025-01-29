"use client";

import ThemeSwitch from "@/components/ThemeSwitch";
import { Level } from "./data";
import LevelCard from "./components/LevelCard/LevelCard";
import { useState } from "react";
import Title from "./components/Title";

export default function ChatPage() {
  const [selectedLevel, setSelectedLevel] = useState<Level>(Level.BEGINNER);

  return (
    <main className="h-screen w-screen bg-gray-100">
      <div className="flex size-full flex-col items-center justify-center gap-[3rem]">
        <Title />
        <div className="flex gap-[1.8rem]">
          {Object.entries(Level).map(([key, value]) => (
            <LevelCard
              key={key}
              level={value}
              isSelected={selectedLevel === value}
              onClick={() => setSelectedLevel(value)}
              image={`/images/chat/${key.toLowerCase()}.png`}
            />
          ))}
        </div>
        <ThemeSwitch />
      </div>
    </main>
  );
}
