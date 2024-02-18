import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const setToken = token => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const requestSignup = async body => {
  const { data } = await instance.post('/users/signup', body);
  setToken(data.token);
  return data;
};

export const requestLogin = async body => {
  const { data } = await instance.post('/users/login', body);
  setToken(data.token);
  return data;
};

export const requestLogout = async () => {
  const { data } = await instance.post('/users/logout');
  return data;
};
export const requestRefreshUser = async () => {
  const { data } = await instance.get('/users/current');
  return data;
};

export const requestContacts = async () => {
  const { data } = await instance.get('/contacts');
  return data;
};
export const requestAddContact = async newContact => {
  const { data } = await instance.post('/contacts', newContact);
  return data;
};
export const requestDeleteContact = async contactId => {
  const { data } = await instance.delete(`/contacts/${contactId}`);
  return data;
};

export const requestUpdateContact = async ({ id, contact }) => {
  console.log('contact: ', contact);
  console.log('id: ', id);
  const { data } = await instance.patch(`/contacts/${id}`, contact);

  console.log('data: ', data);
  return data;
};
