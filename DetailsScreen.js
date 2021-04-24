import * as React from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity} from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";

export default function DetailsScreen() {
    return (
      <View
        style={{
          backgroundColor: `rgb(${props.red}, ${props.green}, ${props.blue})`,
          padding: 30,
          width: "100%",
        }}
      ></View>
    );
   }