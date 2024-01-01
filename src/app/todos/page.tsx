import Link from "next/link";
import { TodoI } from "../interfaces";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  return res.json();
}

const Todos = async () => {
  const data = await getData();
  console.log(data);

  return (
    <div>
      {data.map((todo: TodoI) => {
        return (
          <Link key={todo.id} href={`todos/${todo.id}`}>
            <div>{todo.title}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Todos;
