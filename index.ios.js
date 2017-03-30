/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

'use strict';
import React, { Component } from 'react';
import {
    AppRegistry,
    Dimensions,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
    Button
} from 'react-native';
import Camera from 'react-native-camera';

class BadInstagramCloneApp extends Component {
    render() {
        return (
            <View style={styles.container}>
              <Camera
                  ref={(cam) => {
            this.camera = cam;
          }}
                  style={styles.preview}
                  aspect={Camera.constants.Aspect.fill}>
                  <View style={styles.cUno}></View>
                 <Button onPress={this.takePicture.bind(this)}  title={'TOMA LA FOTO'}/>

              </Camera>
            </View>
        );
    }

    takePicture() {
        const options = {};
        //options.location = ...
        this.camera.capture({metadata: options})
            .then((data) => console.log(data))
            .catch(err => console.error(err));
    }
}

//var objCam = new BadInstagramCloneApp();

class primera extends Component {

    render() {
        return (
            <View style={styles.container}>
               <Button title={'CAMARA'} onPress={this.fnCam} />
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    cUno: {

      backgroundColor: '#ff0022',
        width: 200,
        height: 100,
        position: 'absolute',
        top: 10,
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        color: '#000',
        padding: 10,
        margin: 40
    }
});

AppRegistry.registerComponent('cameraPrueba', () => primera);
