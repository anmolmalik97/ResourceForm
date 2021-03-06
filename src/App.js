import React, {useState} from 'react';
import Form from "./components/Form";
import "bulma/css/bulma.min.css";
import "./App.css";
import ThankYou from "./components/ThankYou";
import { GOOGLE_MACRO_URL } from "./config";

function App() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <div className="App">
      <h1 className="is-size-4 has-text-centered">DIPR Food Centre Management Resource form</h1>
      { !submitted ? <Form url={GOOGLE_MACRO_URL} submitted={setSubmitted}/>: <ThankYou/> }
    </div>
  );
}

export default App;
