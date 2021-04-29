import 'react-native-gesture-handler';
import React , {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './src/stack/MainStack';
import UserContext from './src/contexts/UserContext';



export default function App(){
  
const [stgNome,     setStgNome]     = useState('')
const [stgUserId,   setStgUserId]   = useState('')
const [stgEmail,    setStgEmail]    = useState('');
const [stgPassword, setStgPassword] = useState('');
const [stgCelular,  setStgCelular]  = useState('');
const [stgApelido,  setStgApelido]  = useState('');
const [stgDataNasc, setStgDataNasc] = useState('');

  return (
     <NavigationContainer>
       <UserContext.Provider value={{
        stgNome,     setStgNome,
        stgUserId,   setStgUserId,
        stgEmail,    setStgEmail,
        stgPassword, setStgPassword,
        stgCelular,  setStgCelular,
        stgApelido,  setStgApelido,
        stgDataNasc, setStgDataNasc}}>
       <MainStack/>
       </UserContext.Provider>
     </NavigationContainer>
  );
}
