import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import CampsiteInfo from './CampsiteInfoComponent';
import { View, Platform } from 'react-native';
import { creatStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';

const DirectoryNavigator = creatStackNavigator(
    {
        Directory: { screen: Directory },
        CampsiteInfo: { screen: CampsiteInfo }
    },
    {
        initialRouteName: 'Directory',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: 'fff',
            headerTitleStyle: {
                color: 'fff'
            }
        }
    }
);

const AppNavigator = createAppContainer(DirectoryNavigator);
class Main extends Component {

    render() {
        return (<View 
        style={{
            flex: 1,
            paddingTo: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight 
            }}>
            <AppNavigator />
        </View>)
    }
}

export default Main;