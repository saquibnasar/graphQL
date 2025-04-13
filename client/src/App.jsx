import "./App.css";
import { useQuery, gql } from "@apollo/client";

const query = gql`
  query GetAllTodes {
    getTodos {
      id
      title
      completed
      user {
        name
      }
    }
  }
`;
function App() {
  const { loading, data, error } = useQuery(query);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <>
      <div>
        <h1>Todos</h1>
        {data?.getTodos.map((todo) => (
          <ul>
            <li key={todo.id}>{todo.title}</li>
            <li>{todo.user.name}</li>
          </ul>
        ))}
      </div>
    </>
  );
}

export default App;
