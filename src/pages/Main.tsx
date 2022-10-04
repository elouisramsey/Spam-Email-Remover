import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {generalReducer} from '@src/services/generalReducer';
import {
  GeneralDispatchContext,
  GeneralStateContext,
} from 'src/services/context/general';
import {HomeStack, UnAuthenticatedStacks} from '@src/navigations/Stack';
import {getFromLocalStorage, LOGGED_IN_USER} from '@src/utils/functions';

type Props = {};

const initialState = {
  user: {},
};

const Main = (props: Props) => {
  const [state, dispatch] = React.useReducer(generalReducer, initialState);

  useEffect(() => {
    const getUserFromLocalStorage = async () => {
      const user = await getFromLocalStorage(LOGGED_IN_USER);
      if (user) {
        if (Object.keys(user).length >= 1) {
          dispatch({
            type: 'login',
            user: user,
          });
        }
      }
    };
    getUserFromLocalStorage();
  }, []);

  const renderMainContent = () => {
    const token = state.user._id || '';

    if (token.length < 1) {
      return <UnAuthenticatedStacks />;
    }
    if (token.length > 1) {
      return <HomeStack />;
    }
  };

  return (
    <GeneralStateContext.Provider value={state}>
      <GeneralDispatchContext.Provider value={dispatch}>
        <NavigationContainer>{renderMainContent()}</NavigationContainer>
      </GeneralDispatchContext.Provider>
    </GeneralStateContext.Provider>
  );
};

export default Main;
