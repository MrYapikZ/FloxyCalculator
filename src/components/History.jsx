import React from 'react';

const History = ({ history }) => {
  return (
    <div className="history">
      <h3>History</h3>
      <ul>
        {history.map((item, index) => (
          <li key={index}>
            <strong>{item.equation}</strong> = {item.result}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;