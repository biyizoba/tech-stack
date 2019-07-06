import React from 'react';
import {View } from 'react-native';
import {Provider } from 'react-redux';
import {CreateStore} from 'redux';
import Reducers from './Reducers';
import {Header} from './components/commons'
import LibraryList from './components/LibraryList'

const App = () => {
    return (
    <Provider store ={CreateStore(reducers)}>
        <View>
         <Header headerText="Tech Stack" />
         LibraryList />
        </View>
    </Provider>
    );
};

export default App;