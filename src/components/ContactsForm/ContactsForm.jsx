import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { addContact } from 'redux/contacts/contactsSlice';
import { selectContacts } from 'redux/contacts/selectors';

import { FormButton, FormContainer, Input, Label } from './ContactsForm.styled';
export const FormContacts = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const submitForm = event => {
    event.preventDefault();
    const form = event.target;
    const { name, number } = form.elements;
    const contact = {
      name: name.value,
      number: number.value,
    };

    if (isDuplicate(contact)) return;
    toast.success(`${name.value} add to contacts.`);
    dispatch(addContact(contact));
    form.reset();
  };

  const isDuplicate = values => {
    const duplicateContactName = contacts.find(
      ({ name }) => name.toLowerCase() === values.name.toLowerCase()
    );
    if (duplicateContactName) {
      toast.error(`${duplicateContactName.name} is already in contacts`);
      return true;
    }
  };

  return (
    <FormContainer onSubmit={submitForm}>
      <Label>
        Name
        <Input type="text" name="name" placeholder="John" />
      </Label>
      <Label>
        Number
        <Input type="tel" name="number" placeholder="123-45-67" />
      </Label>
      <FormButton type="submit">Add contact</FormButton>
    </FormContainer>
  );
};
