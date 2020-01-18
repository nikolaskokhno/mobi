import React from 'react';
import { Image, Text } from 'react-native';
import styled from 'styled-components/native';

const InfoImage = (props) => {

    return (
        <Info>
            <Image 
                style={{width: '100%', height: '100%'}}
                source={{uri: props.navigate.getParam('FullPhoto')}}
            />

            <BodyItem>
                <TextItem>
                    <Image
                        style={{
                            width: 20,
                            height: 20
                        }} 
                        source={{
                            uri: props.navigate.getParam('UserPhoto')
                        }}        
                    />
                    <NameAuthor>{props.navigate.getParam('UserName')}</NameAuthor>
                </TextItem>
            </BodyItem>
        </Info>
    );
}

const NameAuthor = styled.Text`
    font-size: 24px;
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
    bottom: 0;
    width: 100%;
`;
const Info = styled.View`
    position: relative;
    width: 100%;
`;

export default InfoImage;