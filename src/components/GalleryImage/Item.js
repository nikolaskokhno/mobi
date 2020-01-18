import React from 'react';
import { Image } from 'react-native';
import styled from 'styled-components/native';

const Item = (props) => {

    return (
        <Card onPress={() => {
            props.navigation('PhotoScreen',
            {
                FullPhoto: props.imageFull,
                UserPhoto: props.userImage,
                UserName: props.name
            })
        }
        }>
            <Image 
                style={{
                    width: '100%',
                    height: 200
                }}
                source={{
                    uri: props.image
                }}
            />
            <BodyItem>
                <TextItem>
                    <Image
                        style={{
                            width: 20,
                            height: 20,
                            borderRadius: 50,
                            backgroundColor: '#000'
                        }} 
                        source={{
                            uri: props.userImage
                        }}        
                    />
                <NameAuthor>{props.name}</NameAuthor>
                </TextItem>
            </BodyItem>
        </Card>
    );
}

const NameAuthor = styled.Text`
    font-size: 20px;
    margin-left: 10px;
    color: #fff;
`;

const TextItem = styled.View`
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    background: rgba(0, 0, 0, 0.7);
`;

const BodyItem = styled.View`
    position: absolute;
    top: 60%;
    width: 100%;
`;

const Card = styled.TouchableOpacity`
    position: relative;
    width: 100%;
    margin-bottom: 15px;
`;

export default Item;