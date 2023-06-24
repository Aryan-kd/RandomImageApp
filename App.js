// App.js
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import RandomImageScreen from './screens/RandomImageScreen';

const AppNavigator = createStackNavigator(
  {
    RandomImage: RandomImageScreen,
  },
  {
    initialRouteName: 'RandomImage',
  }
);

export default createAppContainer(AppNavigator);
