import React from 'react';

const Login = ({login}) => {

  let loginInHandler = () => {
    let name = document.getElementById('name');
    let password = document.getElementById('password');

    login(name.value, password.value);

    name.value = ''
    password.value = ''
  }

  return (
    <div>
      <form action="">
        <input id="name" type="text" />
        <input id="password" type="text"/>
        <button type="button" onClick={loginInHandler}>Log In</button>
      </form>

    </div>

  )
}


export default Login;