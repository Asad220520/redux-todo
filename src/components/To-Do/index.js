import React, { useState } from "react";
import { addTodo, deteTodo } from "../../redux/action";
import { useDispatch, useSelector } from "react-redux";

const Todo = () => {
  const { todo } = useSelector((r) => r);
  const dispath = useDispatch();
  const [value, setValue] = useState("");
  const [value1, setValue1] = useState("");
  console.log(todo);
  return (
    <div id="todo">
      <div className="container">
        <div className="todo flex items-center justify-center flex-col">
          <input
            className="block w-[500px] p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            type="search"
          />
          <input
            placeholder="img"
            className="block w-[500px] p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={value1}
            onChange={(e) => setValue1(e.target.value)}
            type="search"
          />
          <button
            className="bg-cyan-900 text-white p-[15px]
             rounded w-[10%]"
            onClick={() => {
              dispath(addTodo(value));
              dispath(addTodo(value1));
            }}
          >
            add
          </button>
          {todo.map((el) => (
            <ul
              key={el.id}
              className="w-[800px] flex my-[5px] flex-col text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            >
              <li className=" flex items-center justify-between p-[10px] ">
                {el.title}

                <img src={el.image} alt="" />
                <button
                  onClick={() => dispath(deteTodo(el.id))}
                  className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                >
                  delete
                </button>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Todo;
