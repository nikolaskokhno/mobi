import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {HomeScreen} from './src/screens';

const App = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      title: 'Gallery image'
    }
  }
);

export default createAppContainer(App);