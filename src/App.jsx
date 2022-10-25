import { useReducer } from 'react';
import './App.css';

const initialState = {
  name: "",
  email: "",
  password: "",
  passwordRepeat: "",
  termsAccepted: false
};

function reducer(state, action) {
    return {...state, [action.input]: action.value}
}

function validateState(state){
  return state.password === state.passwordRepeat && state.termsAccepted && state.password.length > 3;
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function onChange(e) {
    const action = {
      input: e.target.name,
      value: e.target.name === "termsAccepted" ? e.target.checked : e.target.value
    }
    dispatch(action);
  }

  function handleClick(e){
    e.preventDefault();
    alert(`Hey ${state.name} you have succesfully registered.`)
  }

  return (
    <div className="App">
      <div className="RegisterFormContainer">
        <div className="RegisterContainerHeadline">Register</div>
        <form className="RegisterForm">
          <input className='TextInput' type="text" name='name' placeholder='Name' onChange={onChange} />
          <input className='TextInput' type="text" name='email' placeholder='Email' onChange={onChange} />
          <input className='TextInput' type="password" name='password' placeholder='Password' onChange={onChange} />
          <input className='TextInput' type="password" name='passwordRepeat' placeholder='Password repeat' onChange={onChange} />
          <label className='TouCheckboxLabel'>
            <input className='TouCheckboxLable' type="checkbox" name='termsAccepted' onChange={onChange} /> Accept Terms of Use!
          </label>
          <button className={validateState(state) ? null : "Disabled"} onClick={handleClick}>Register</button>
        </form>
      </div>
    </div>
  );
}

export default App;
