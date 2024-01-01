async function getTodoById(id: number) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  return res.json();
}

export default async function TodoById({ params }: { params: { id: number } }) {
  const todo = await getTodoById(params.id);
  return <div>My Post: {todo.id}. {todo.title}</div>;
}
