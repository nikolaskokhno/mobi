import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import { ScrollView } from 'react-native-gesture-handler';
import Item from './Item';

const ListItem = (props) => {

    return (
        <ScrollView>
            <Container>
                {props.data.map((photo) => (
                    <Item 
                        key={photo.id}
                        image={photo.urls.small}
                        name={photo.user.name}
                        userImage={photo.user.profile_image.small} 
                    />
                ))}
            </Container>
        </ScrollView>
    );
}

const Container = styled.View`
    margin: 20px;
`;

export default ListItem;
