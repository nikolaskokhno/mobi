import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ListItem from '../components/GalleryImage/ListItem';

const HomeScreen = (props) => {
    const {navigate} = props.navigation;          //react-native navigation
    const [photos, setPhotos] = useState([]);       //state
    
    useEffect(() => {
        const fetchData = async () => {
        const url = 'https://api.unsplash.com/photos/?client_id=ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9';
        const result = await axios(url);
        
        setPhotos(result.data);
        };

        fetchData();
    }, []);

    return (
        <ListItem data={photos} navigation={navigate} />
    );
}

export default HomeScreen;