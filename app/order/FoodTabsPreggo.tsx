"use client";

import { useState } from "react";
import ItemsView from "./ItemsView";
import { itemsPreggoBreakfast, itemsPreggoLunch, itemsPreggoDinner } from "./items";

export default function FoodTabsPreggo() {
  const [activeTab, setActiveTab] = useState("breakfast");

  const tabs = [
    {
      id: "breakfast",
      label: "Breakfast",
    },
    {
      id: "lunch",
      label: "Lunch",
    },
    {
      id: "dinner",
      label: "Dinner",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="flex space-x-1 w-full">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 py-2 px-4 rounded-full text-gray-700 transition-colors
              ${activeTab === tab.id ? "bg-yellow-50" : "hover:bg-gray-100"}`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="mt-4 p-4 rounded-lg bg-white">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`${activeTab === tab.id ? "block" : "hidden"}`}
          >
            {tab.id === "breakfast" && <ItemsView items={itemsPreggoBreakfast} />}
            {tab.id === "lunch" && <ItemsView items={itemsPreggoLunch} />}
            {tab.id === "dinner" && <ItemsView items={itemsPreggoDinner} />}
          </div>
        ))}
      </div>
    </div>
  );
}
