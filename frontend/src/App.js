import React from 'react';
//jsx e o java script e mesma coisa xml
import Logon from './pages/Logon';

function App() {

  // let [counter, setCounter] = useState(0);
  // // varlor arry valor  , atualização 
  // function Cont() {
  //   setCounter(counter + 1);
  //   console.log(counter);
  //   console.log(useState);
  // }

  return (
    <div>
      {/* <Header>Contador :{ counter } </Header>
      <button onClick={ Cont }>Add</button> */}
      <Logon />
    </div>
  );
}

export default App;
