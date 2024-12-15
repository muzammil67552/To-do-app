import { useEffect, useState } from 'react';
import ToDo from './component/ToDo';
import axios from 'axios';
import { BaseURL } from './utilis/api';

function App() {
  const [toDos, setToDos] = useState([]);
  const [input, setInput] = useState("");
  const [updateUI, setUpdateUI] = useState(false); // State to trigger re-fetching ToDos

  // Fetch ToDos from the server when the component mounts or updateUI changes
  useEffect(() => {
    const fetchToDos = async () => {
      try {
        const res = await axios.get(`${BaseURL}/get`);
        setToDos(res.data); // Set the fetched data to the state
      } catch (err) {
        console.log(err);
      }
    };

    fetchToDos();
  }, [updateUI]); // Re-fetch when updateUI changes

  // Function to save a new ToDo
  const saveToDo = async () => {
    try {
      const res = await axios.post(`${BaseURL}/save`, { toDo: input });
      setToDos((prevToDos) => [...prevToDos, res.data]); // Add the new ToDo to the state
      setInput(''); // Clear the input field
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <main
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(to right, #74ebd5, #ACB6E5)',
        }}
      >
        <div
          style={{
            backgroundColor: '#fff',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            borderRadius: '12px',
            padding: '24px',
            width: '100%',
            maxWidth: '400px',
            animation: 'fadeIn 0.5s ease-in-out',
          }}
        >
          <h1
            style={{
              fontSize: '2rem',
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: '16px',
              color: '#4A4A4A',
            }}
          >
            To Do App
          </h1>
          <div style={{ display: 'flex', marginBottom: '16px' }}>
            <input
              type="text"
              placeholder="Type here..."
              style={{
                flexGrow: 1,
                border: '1px solid #ddd',
                borderRadius: '8px 0 0 8px',
                padding: '10px 12px',
                fontSize: '1rem',
                outline: 'none',
                transition: 'border-color 0.3s ease',
              }}
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              style={{
                backgroundColor: '#4CAF50',
                color: '#fff',
                borderRadius: '0 8px 8px 0',
                padding: '10px 16px',
                border: 'none',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease',
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = '#45A049')}
              onMouseOut={(e) => (e.target.style.backgroundColor = '#4CAF50')}
              onClick={saveToDo}
            >
              ADD
            </button>
          </div>
          <div style={{ marginTop: '16px' }}>
            {toDos.map((el) => (
              <ToDo
                key={el._id}
                text={el.toDo}
                id={el._id}
                setUpdateUI={setUpdateUI} // Pass setUpdateUI to ToDo component
              />
            ))}
          </div>
        </div>
      </main>
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </>
  );
}

export default App;
