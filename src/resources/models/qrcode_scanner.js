/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RNCamera } from 'react-native-camera';
import QRCode from 'react-native-qrcode-svg';
import { ViewPropTypes } from 'deprecated-react-native-prop-types';
import PropTypes from 'prop-types';

export default class QRScanner extends Component {
  state = {
    qrData: null,
  };

  handleBarCodeScanned = ({ type, data }) => {
    this.setState({ qrData: data });
  };

  render() {
    const { qrData } = this.state;

    return (
      <View style={styles.container}>
        {!qrData && (
          <RNCamera
            style={styles.camera}
            type={RNCamera.Constants.Type.back}
            onBarCodeRead={this.handleBarCodeScanned}
          />
        )}

        {qrData && (
          <View style={styles.qrContainer}>
            <QRCode value={qrData} size={200} />
            <Text style={styles.qrText}>{qrData}</Text>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  camera: {
    flex: 1,
    width: '100%',
  },
  qrContainer: {
    alignItems: 'center',
  },
  qrText: {
    marginTop: 20,
    fontSize: 16,
  },
});



