import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import colors from '../styles/colors'
import { Welcome } from '../pages/welcome';
import { UserIdentifier } from '../pages/userIdentifier';
import { Confirmation } from '../pages/confirmation';
import { PlantSelect } from '../pages/plantSelect';

const stackRoutes = createStackNavigator();


const AppRoutes: React.FC = () => (
  <stackRoutes.Navigator
    headerMode="none"
    screenOptions={{
      cardStyle: {
        backgroundColor: colors.white
      }
    }}
  >
    <stackRoutes.Screen
      name="Welcome"
      component={Welcome}
    />
    <stackRoutes.Screen
      name="UserIdentificaton"
      component={UserIdentifier}
    />
    <stackRoutes.Screen
      name="Confirmation"
      component={Confirmation}
    />
    <stackRoutes.Screen
      name="PlantSelect"
      component={PlantSelect}
    />
  </stackRoutes.Navigator>
)

export default AppRoutes