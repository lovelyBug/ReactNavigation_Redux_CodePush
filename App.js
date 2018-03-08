/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {Provider} from 'react-redux';
import store from './src/store';
import NavigatorPages from './src/pages/TabNavigatorPage';
import codePush from 'react-native-code-push';
type Props = {};
export default class App extends Component<Props> {
    componentDidMount(){
        codePush.sync({
            updateDialog: {
                appendReleaseDescription: true,
                descriptionPrefix:'\n\n更新内容：\n',
                title:'更新',
                mandatoryUpdateMessage:'',
                mandatoryContinueButtonLabel:'更新',
            },
            mandatoryInstallMode:codePush.InstallMode.IMMEDIATE,
            //deploymentKey: '',
        });
        //下面的是使用默认的更新,没有提示直接更新
        //codePush.sync();
    }
    render() {
        return (
            <Provider store={store}>
                <NavigatorPages/>
            </Provider>
        );
    }
}