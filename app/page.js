"use client";
import { useState } from "react";
export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [selectCategory, setSelectCategory] = useState("ALL");

  const addJob = () => {
    if (inputValue.trim()) {
      const newJob = {
        title: inputValue.trim(),
        isDone: false,
      };

      setTodoList([...todoList, newJob]);
      setInputValue("");
    }
  };

  const deletJob = (index) => {
    const UpdateList = todoList.filter((job, i) => {
      return index !== i;
    });

    setTodoList(UpdateList);
  };
  const changeSelectedCategory = (newCategory) => {
    setSelectCategory(newCategory);
  };

  const filteredList = todoList.filter((job) => {
    if (selectCategory === "DONE") return job.isDone === true;
    if (selectCategory === "PENDING") return job.isDone === false;
    if (selectCategory === "ALL") return true;
  });

  const changeJobStatus = (index, status) => {
    const result = todoList.map((todo, i) => {
      if (index === i) {
        const newjob = { title: todo.title, isDone: status };

        return newjob;
      } else {
        return todo;
      }
    });

    setTodoList(result);
  };

  return (
    <div className="bg-[#f0f4fa] min-h-screen flex justify-center items-start pt-30 pb-10">
      <div className="pl-8 pr-8 pt-8 pb-8 min-h-[300px] bg-white rounded-2xl w-[600px] flex flex-col gap-4">
        <div className="text-black flex flex-col gap-3">
          <p className="text-3xl font-extrabold">✅ Хийх ажил</p>
          <p>
            {filteredList.length} / {todoList.length}
          </p>
          <p className="text-[20px]">ажил</p>
        </div>
        <div className="flex gap-2">
          <input
            value={inputValue}
            placeholder="Шинэ ажил бичих..."
            className="bg-white rounded-2xl border-[#d1d8e1] text-black border h-[50px] w-[430px] pl-3"
            onChange={(event) => setInputValue(event.target.value)}
            type="text"
          />
          <button
            className="bg-[#c8d4e2] text-[#f2fbff] h-[50px] w-[100px] rounded-2xl "
            onClick={addJob}
          >
            Нэмэх
          </button>
        </div>
        <div className=" flex gap-[10px]">
          <button
            onClick={() => {
              setSelectCategory("ALL");
            }}
            className={` ${selectCategory === "ALL" ? "text-[white]" : "text-black"} h-[45px] w-[250px] ${selectCategory === "ALL" ? "bg-[#0b152b]" : " bg-[#f0f4fa]"} rounded-xl `}
          >
            Бүгд
          </button>
          <button
            onClick={() => {
              setSelectCategory("DONE");
            }}
            className={` ${selectCategory === "DONE" ? "text-[white]" : "text-black"} h-[45px] w-[250px] ${selectCategory === "DONE" ? "bg-[#0b152b]" : " bg-[#f0f4fa]"} rounded-xl `}
          >
            Хийх
          </button>
          <button
            onClick={() => {
              setSelectCategory("PENDING");
            }}
            className={` ${selectCategory === "PENDING" ? "text-[white]" : "text-black"} h-[45px] w-[250px] ${selectCategory === "PENDING" ? "bg-[#0b152b]" : " bg-[#f0f4fa]"} rounded-xl `}
          >
            Дууссан
          </button>
        </div>
        <div className="flex flex-col gap-2 text-black max-w-[600px]">
          {filteredList.map((todo, index) => (
            <div
              key={index}
              className="p-2 rounded-2xl flex justify-between bg-[#f9fafc]"
            >
              <input
                checked={todo.isDone}
                onChange={(event) => {
                  changeJobStatus(index, event.target.checked);
                }}
                type="checkbox"
              />
              {todo.title}
              <button
                onClick={() => {
                  deletJob(index);
                }}
              >
                🗑️
              </button>
            </div>
          ))}
        </div>
        <div className="text-center text-gray-400">
          <button>Дууссанг арилгах ({todoList.length})</button>
        </div>
      </div>
    </div>
  );
}
