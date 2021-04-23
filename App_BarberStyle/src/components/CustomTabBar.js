import React from 'react';
import styled from 'styled-components/native';

import SearchIcon from '../assets/search.svg';

const TabArea = styled.View`
    height: 60px;
    background-color: #4EADBE;
    flex-direction: row;
`;
const TabItem = styled.TouchableOpacity`
    flex: 1;
    justify-content: center;
    //::placeholderaling-items: center;
`;

export default ({state, navigation}) => {

    const goTo = (screenName) => {
        navigation.navigate(screenName);
    }

    return (
        <TabArea>
            <TabItem onPress={()=>goTo('Search')}>
                <SearchIcon width="24" height="24" fill="#FFFFFF" />
            </TabItem>
        </TabArea>
    );  
}
