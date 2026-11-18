import { items } from "./data";

export const InventoryCard = ({ item }) => {
  let color = "";
  let TextColor = "";
  let borderColor = "";

  if (item.rarity === "common") {
    color = "bg-[#1d283d]";
  } else if (item.rarity === "rare") {
    color = "bg-[#102f4a]";
  } else if (item.rarity === "epic") {
    color = "bg-[#3c0366]";
  } else {
    color = "bg-[#471801]";
  }

  if (item.rarity === "common") {
    TextColor = "bg-[#45556d]";
  } else if (item.rarity === "rare") {
    TextColor = "bg-[#49a6f3]";
  } else if (item.rarity === "epic") {
    TextColor = "bg-[#ac47ff]";
  } else {
    TextColor = "bg-[#f5ba00]";
  }

  if (item.rarity === "common") {
    borderColor = "border-[#45556d]";
  } else if (item.rarity === "rare") {
    borderColor = "border-[#49a6f3]";
  } else if (item.rarity === "epic") {
    borderColor = "border-[#ac47ff]";
  } else {
    borderColor = "border-[#f5ba00]";
  }
  return (
    <div
      className={` h-[200px] w-[300px] border ${borderColor} rounded-2xl p-5 flex flex-col items-center text-center ${color} `}
    >
      <div className="text-4xl mb-3  p-3 rounded-xl ">{item.emoji}</div>

      <h3 className="font-semibold text-white mb-1">{item.name}</h3>
      <p className="text-xs text-gray-400 mb-4">{item.type}</p>

      <div className="w-full flex justify-between items-center mt-auto">
        <span
          className={`text-xs px-2.5 py-1   rounded-xl  h-[25px] w-[60px] ${TextColor} font-bold flex justify-center item-center `}
        >
          {item.rarity}
        </span>
        <span className="text-xs text-gray-400 flex items-center gap-1">
          ⚔️ {item.power}
        </span>
      </div>
    </div>
  );
};
