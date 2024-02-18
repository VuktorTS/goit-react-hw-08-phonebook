import { toast } from 'react-toastify';

import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

import {
  FormButton,
  FormContainer,
  Input,
  Label,
} from '../ContactsForm/ContactsForm.styled';
import { updateContact } from 'redux/contacts/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectIsOpenModal,
  selectUpdateContact,
} from 'redux/contacts/selectors';

import { setIsOpenModal } from 'redux/contacts/isOpenModalSlilce';
import { setItem } from 'redux/contacts/itemSlice';
import { Caption } from './ContactUpdate.styled';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: ' lightblue ',
  border: '0px solid #000',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
};

const ContactUpdate = () => {
  const dispatch = useDispatch();

  const contactThatIsUpdated = useSelector(selectUpdateContact);

  const open = useSelector(selectIsOpenModal);
  const handleClose = () => dispatch(setIsOpenModal(false));

  const submitForm = event => {
    event.preventDefault();

    const form = event.target;
    const { name, number } = form.elements;
    const contact = { name: name.value, number: number.value };
    if (name.value === '') {
      contact.name = contactThatIsUpdated.name;
    }
    if (number.value === '') {
      contact.number = contactThatIsUpdated.number;
    }
    const { id } = contactThatIsUpdated;
    dispatch(setItem(contact));
    toast(
      `✅Contact «${contactThatIsUpdated.name}» successfully changed to «${contact.name}»`,
      {
        autoClose: 3000,
      }
    );

    dispatch(updateContact({ id, contact }));
    handleClose();
    form.reset();
  };
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Caption>Update contact</Caption>
          <FormContainer onSubmit={submitForm}>
            <Label>
              {contactThatIsUpdated.name}
              <Input type="text" name="name" placeholder="John" />
            </Label>
            <Label>
              {contactThatIsUpdated.number}
              <Input type="tel" name="number" placeholder="123-45-67" />
            </Label>
            <FormButton type="submit">Update contact</FormButton>
          </FormContainer>
        </Box>
      </Modal>
    </>
  );
};

export default ContactUpdate;
