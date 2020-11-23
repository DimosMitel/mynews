import '@testing-library/jest-dom'
import React from 'react'
import {render, screen, cleanup, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import SignUp from './SignUp'
import { MemoryRouter } from 'react-router';

function setup() {
  return render(
      <MemoryRouter>
        <SignUp />
      </MemoryRouter>

  );
}

afterEach(cleanup)


 it('should have Registration Header', () => {
  const { getByTestId } = render(<SignUp />)
  expect(getByTestId("registration")).toHaveTextContent("Registration")
})

it("Form username error", () => {

  setup();

  const usernameInput = screen.getByLabelText('Username');
  const { getByText } = render(<SignUp />)

  userEvent.type(usernameInput, 'a');
  
  expect(getByText("incorrect username")).toBeInTheDocument()

  userEvent.type(usernameInput, 'aa');
  
  expect(getByText("This field must be at least 6 characters long")).toBeInTheDocument()

  userEvent.type(usernameInput, 'aaaaaaaaaaaaa');
 
  expect(getByText("This field must be no longer than 12 characters long")).toBeInTheDocument()

})

/*
Apo edw kai katw einai ta pio palia poy prepei na ta psilodiorthwsw
*/

  describe('SignUpForm', () => {
    test('Form is OK', () => {
      
        setup();
      
      const emailInput = screen.getByLabelText('Email');
      userEvent.type(emailInput, '');
      
      const step1Button = screen.getByRole('button', { name: /Next/i });
      userEvent.click(step1Button);

      expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
      

      const passwordInput = screen.getByLabelText(/Password/i);
      userEvent.type(passwordInput, '');

      const loginLink = screen.getByRole('link', { name: /Login/i });
      userEvent.click(loginLink);

      expect(
        screen.getByText('Login')
      ).toBeInTheDocument();
      //screen.debug();



    });
  });