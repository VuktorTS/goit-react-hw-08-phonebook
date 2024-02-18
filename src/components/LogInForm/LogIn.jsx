import { useDispatch } from 'react-redux';

import {
  FormButton,
  FormContainer,
  Input,
  Label,
} from 'components/ContactsForm/ContactsForm.styled';
import { loginThunk } from 'redux/auth/thunk';

const LogInForm = () => {
  const dispatch = useDispatch();
  const submitForm = event => {
    event.preventDefault();
    const form = event.target;
    const { email, password } = form.elements;
    dispatch(loginThunk({ email: email.value, password: password.value }));
  };
  return (
    <FormContainer onSubmit={submitForm}>
      <Label>
        Email
        <Input type="email" name="email" placeholder="example@mail.com" />
      </Label>
      <Label>
        Password
        <Input type="password" name="password" placeholder="examplepwd123" />
      </Label>
      <FormButton type="submit">Sign in</FormButton>
    </FormContainer>
  );
};

export default LogInForm;
