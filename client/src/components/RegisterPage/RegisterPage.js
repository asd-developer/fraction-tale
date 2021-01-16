import React from 'react';
import {Container, Form } from './RegisterPage.elements'

const RegisterPage = () => {
  return (
    <>
        <Container>
            <h1>Register</h1>
            <Form onSubmit={""}>
              <input type="text" placeholder="username"></input>
              <input type="text" placeholder="email"></input>
              <input type="text" placeholder="password"></input>
              <input type="text" placeholder="confirm password"></input>
              <input type="text" placeholder="display name"></input>
              <button>Submit</button>
            </Form>
        </Container>  
    </>
  );
}

export default RegisterPage;