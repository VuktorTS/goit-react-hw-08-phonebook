import { useDispatch, useSelector } from 'react-redux';
import { selectAuthUserData } from 'redux/auth/selectors';
import { LogoutBox } from './UserMenu.styled';
import { logoutThunk } from 'redux/auth/thunk';

const UserMenu = () => {
  const UserData = useSelector(selectAuthUserData);
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logoutThunk());
  };

  return (
    <LogoutBox>
      <p>{UserData.name}</p>
      <button type="button" onClick={onLogout}>
        Log Out
      </button>
    </LogoutBox>
  );
};

export default UserMenu;
