import AsyncStorage from '@react-native-async-storage/async-storage';

export const LOGGED_IN_USER = 'CONSTANTCLICK';

export const saveToLocalStorage = async (key: string, value: string | any) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (error) {
    console.log('Error saving data to local storage: ', error);
  }
};

export const getFromLocalStorage = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value != null ? JSON.parse(value) : null;
  } catch (error) {
    console.log('Error getting data from local storage: ', error);
  }
};
