import React, { useEffect, useState} from 'react';
import { SafeAreaView, Text, FlatList } from 'react-native';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native'; 

import HomeBarbearia from '../screens/HomeBarbearia';

const Area = styled.TouchableOpacity`
    background-color: #FFFFFF;
    margin-bottom: 20px;
    border-radius: 20px;
    padding: 15px; 
`;

const InfoArea = styled.SafeAreaView`
    flex-direction: row;    
    margin-top: 10px
`;

const BarberInfo = styled.SafeAreaView`
    justify-content: space-between;
`;

const BarberName = styled.Text`
    font-size: 17px;
    font-weight: bold;
    margin-left: 20px;
`;

const SeeProfileButton = styled.SafeAreaView`
    width: 85;
    height: 26px;
    border: 1px solid #FFC82C;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    margin-left: 100px;
    margin-top: 10px;
`;

const SeeProfileButtonText = styled.Text`
    font-size: 13px;
    color: #FFC82C;
`;


export default function(){

const [carregando, setCarregando]=useState(true)
const [dados, setDados]= useState([])

useEffect( ()=>{
    fetch('https://607a5bfdbd56a60017ba29de.mockapi.io/api/appBarberStyle/barbearia')
        .then((resp)=>resp.json())
        .then((json)=>setDados(json.items))
        .catch(()=>(alert('Erro ao carregar lista de barbeiros')))
        .finally(()=>setCarregando(false))
},[]
)
    const navigation = useNavigation(); 

    const handleClick = ({data})=>{
        navigation.navigate('HomeBarbearia',{
            id: data.id,
            nameBarbearia: data.nameBarbearia,
            nameResponsavel: data.nameResponsavel,
            email: data.email
        });
    }

    return(
        <SafeAreaView>
            <FlatList 
                data={dados}
                renderItem={({item})=>(
                    <Area onPress={handleClick}>
                        <BarberName>{item.nameBarbearia}</BarberName>
                        <InfoArea>
                            <BarberInfo>{item.nameResponsavel}, {item.email}</BarberInfo>
                        </InfoArea>
                            <SeeProfileButton>
                                <SeeProfileButtonText>Ver Perfil</SeeProfileButtonText>
                            </SeeProfileButton>
                    </Area>
                )}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    )
}

