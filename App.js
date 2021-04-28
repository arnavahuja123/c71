import React from 'react';
import { Text, View, Image, StyleSheet, Header, TextInput } from 'react-native';
import {createAppContaiener} from 'react-navigation'
import {createBottomTabNavigation} from 'react-navigation-tabs'
import ReadStoryScreen from './screens/ReadStoryScreen'
import WriteStoryScreen from './Screens/WriteStoryScreen'

export default class TransactionScreen extends React.Component {
    render(){
        return(
            <View styles={styles.comtainer}>
                <Text>Read Story</Text>
                <Header>Story Hub</Header>
                <View style={styles.input<View}>
                 
          <TextInput
          style={styles.inputBox}
        
         
          
          />
          
             
          </View>
          <View style={styles.inputView}>
           <TextInput
          style={styles.inputBox}
         
          
          
          />
            </View>

        )
    }
}
    