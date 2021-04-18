import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {RepoSearch, RepoIssues} from '../features';
import {REPO_ISSUE} from './config';
import {HEADER_STYLE_OBJECT} from '../core/constants/headerStyleObj';
const Stack = createStackNavigator();
const NavigationStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Repo Search"
          component={RepoSearch}
          options={HEADER_STYLE_OBJECT}
        />
        <Stack.Screen
          name={REPO_ISSUE}
          component={RepoIssues}
          options={HEADER_STYLE_OBJECT}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationStack;
