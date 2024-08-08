import axios from 'axios';
import React, { useEffect, useState } from 'react';

const App = () => {
  const [backData, setBackData] = useState<string>('');

  useEffect(() => {
    axios
      // .get('http://localhost:8080/api/hello')
      .get('/api/hello')
      .then((res) => setBackData(res.data))
      .catch((error) => console.log(error));
  }, []);

  return <div>Hello World : {backData}</div>;
};

export default App;
