import React, { Component } from 'react'
import {
  View,
  Text,
} from 'react-native'

export default class TestComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>I'm the TestComponent component</Text>
      </View>
    )
  }
}
