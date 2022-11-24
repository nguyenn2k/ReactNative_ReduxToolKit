//Import Library:
import React from 'react'
import { Provider } from 'react-redux'

//Import Library:
import { store } from './Store';
import DemoFuncReduxToolkit from './src/reduxtoolkit/DemoFuncReduxToolkit';
import { View } from 'react-native';

export default function App (props){
  return (
    <Provider store={store}>
      <View style={{flex:1,justifyContent:'center',alignItems:'center',}}>
        <DemoFuncReduxToolkit/>
      </View>
    </Provider>
  );
};