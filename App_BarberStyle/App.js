import 'react-native-gesture-handler';
import React , {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './src/stack/MainStack';
import UserContext from './src/contexts/UserContext';




export default function App(){

//Context para usuario - KAS
const [stgNome,     setStgNome]     = useState('')
const [stgUserId,   setStgUserId]   = useState('')
const [stgEmail,    setStgEmail]    = useState('');
const [stgPassword, setStgPassword] = useState('');
const [stgCelular,  setStgCelular]  = useState('');
const [stgApelido,  setStgApelido]  = useState('');
const [stgDataNasc, setStgDataNasc] = useState('');

//Context para barbearias - KAS
const [stgNomeBar,  setStgNomeBar]  = useState('')
const [stgBarId,    setStgBarId]    = useState('')
const [stgEmailBar, setStgEmailBar] = useState('');
const [stgPassBar,  setStgPassBar]  = useState('');
const [stgCelularBar,  setStgCelularBar]  = useState('');
const [stgRespBar,  setStgRespBar]  = useState('');
const [stgcnpjBar,  setStgCnpjBar]  = useState('');


  return (
     <NavigationContainer>
       <UserContext.Provider value={{
    
        stgNome,     setStgNome,
        stgUserId,   setStgUserId,
        stgEmail,    setStgEmail,
        stgPassword, setStgPassword,
        stgCelular,  setStgCelular,
        stgApelido,  setStgApelido,
        stgDataNasc, setStgDataNasc,
        
        stgNomeBar,  setStgNomeBar,
        stgBarId,    setStgBarId,
        stgEmailBar, setStgEmailBar,
        stgPassBar,  setStgPassBar,
        stgCelularBar,  setStgCelularBar,
        stgRespBar,  setStgRespBar,
        stgcnpjBar, setStgCnpjBar

        }}>
       <MainStack/>
       </UserContext.Provider>
     </NavigationContainer>
  );
}
