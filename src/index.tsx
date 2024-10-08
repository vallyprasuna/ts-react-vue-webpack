import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';

const App: React.FC = () => {
  return <div>Hello, world!</div>;
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);