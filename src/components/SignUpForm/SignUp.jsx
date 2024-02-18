import { useDispatch } from 'react-redux';
// import { Formik, ErrorMessage } from 'formik';
// import * as yup from 'yup';
import {
  FormButton,
  FormContainer,
  Input,
  Label,
} from 'components/ContactsForm/ContactsForm.styled';
import { signupThunk } from 'redux/auth/thunk';

// const nameReg = "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$";
// const emailReg = /^\w+@\w+\.\w+$/;

// const schema = yup.object().shape({
//   name: yup.string().matches(nameReg, 'Not valid').required('Required'),
//   email: yup.string().matches(emailReg, 'Not valid').required('Required'),
//   password: yup.string().min(8, 'Not valid').required('Required'),
// });
const SignUpForm = () => {
  const dispatch = useDispatch();
  const submitForm = event => {
    event.preventDefault();
    const form = event.target;
    const { name, email, password } = form.elements;
    dispatch(
      signupThunk({
        name: name.value,
        email: email.value,
        password: password.value,
      })
    );
    form.reset();
  };
  return (
    <FormContainer onSubmit={submitForm}>
      <Label>
        Name
        <Input type="text" name="name" placeholder="John" />
      </Label>
      <Label>
        Email
        <Input type="email" name="email" placeholder="examplemail@mail.com" />
      </Label>
      <Label>
        Password
        <Input type="password" name="password" placeholder="examplepwd123" />
      </Label>
      <FormButton type="submit">Create User</FormButton>
    </FormContainer>
  );
};
export default SignUpForm;
