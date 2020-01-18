import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {HomeScreen, PhotoScreen} from './src/screens';

const App = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      title: 'Gallery image'
    },
    PhotoScreen: {
      screen: PhotoScreen,
      title: 'Photo info'
    }
  }
);

export default createAppContainer(App);