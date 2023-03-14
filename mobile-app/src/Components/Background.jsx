import React from 'react';
import {View, ImageBackground} from 'react-native';

import bg from '../../assets/leaves.png'


export default Background = ({ children }) => {
  return (
    <View>
      <ImageBackground
      source={bg}
       style={{ height: '100%' }} />
      <View 
      style={{ position: "absolute" }}
      >
        {children}
      </View>
    </View>
  );
}

