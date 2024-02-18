import { toast } from 'react-toastify';
import { AiOutlineEdit } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';

import { selectVisibleContacts } from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/contactsSlice';

import { ItemRow, Table, TableBody, TabletHead } from './ContactsList.styled';
import ContactUpdate from 'components/ContactUpdate/ContactUpdate';
import { setItem } from 'redux/contacts/itemSlice';
import { setIsOpenModal } from 'redux/contacts/isOpenModalSlilce';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectVisibleContacts);

  const handleOpen = contact => {
    dispatch(setItem(contact));
    dispatch(setIsOpenModal(true));
  };

  return (
    <>
      <Table>
        <TabletHead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Phone</th>
            <th></th>
          </tr>
        </TabletHead>
        <TableBody>
          {contacts.map(({ id, name, number }) => {
            return (
              <ItemRow key={id}>
                <td onClick={() => handleOpen({ id, name, number })}>
                  <AiOutlineEdit size="24" color="black" />
                </td>
                <td>{name}</td>
                <td>{number}</td>

                <td>
                  <button
                    type="button"
                    onClick={() => {
                      toast(`❌ Contact «${name}» successfully deleted`, {
                        autoClose: 3000,
                      });
                      return dispatch(deleteContact(id));
                    }}
                  >
                    Delete
                  </button>
                </td>
              </ItemRow>
            );
          })}
        </TableBody>
      </Table>
      <ContactUpdate />
    </>
  );
};
