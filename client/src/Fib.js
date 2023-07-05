import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const Fib = () => {
  const [seenIndexes, setSeenIndexes] = useState([]);
  const [values, setValues] = useState({});
  const [index, setIndex] = useState('');

  useEffect(() => {
    fetchValues();
    fetchIndexes();
  }, []);

  const fetchValues = async () => {
    const { data } = await axios.get('/api/values/current');
    setValues(data);
  }

  const fetchIndexes = async () => {
    const { data } = await axios.get('/api/values/all');
    setSeenIndexes(data);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    await axios.post('/api/values', {
      index: index
    });

    setIndex('');
    fetchValues();
    fetchIndexes();
  }

  const renderSeenIndexes = () => {
    return (
      seenIndexes.map((item) => {
        console.log("🚀 ~ file: Fib.js:37 ~ seenIndexes.map ~ item:", item);
        return item.number;
      }).join(', ')
    )
  }

  const renderValues = () => {
    const entries = [];
    for (const key in values) {
      entries.push(
        <div keys={key}> For index {key} I calculated {values[key]}</div>
      )
    }
    return entries;
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Enter your index:</label>
        <input value={index} onChange={(e) => setIndex(e.target.value)} />
        <button>Submit</button>
      </form>

      <h3>Indexes I have seen:</h3>
      {renderSeenIndexes()}
      <h3>Calculated Values:</h3>
      {renderValues()}
    </div>
  )
}

export default Fib;
