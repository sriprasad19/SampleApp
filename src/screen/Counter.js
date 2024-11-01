import React, { Component } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { selectedCount } from '../redux/selector/counterSelector';
import { increaseCount, decreaseCount } from '../redux/reducer/counterReducer';

export class Counter extends Component {

  render() {
    return (
      <View>
        <Text style={styles.text}>Counter</Text>
        <Text style={styles.text}>{this.props.count}</Text>
        <Button onPress={()=>this.props.increaseCount()} title='Increase Counter' />
        <Button onPress={()=> this.props.decreaseCount()} title='Decrease Counter' />
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  count: selectedCount(state),
})

export default connect(mapStateToProps, { increaseCount, decreaseCount })(Counter)

const styles = StyleSheet.create({
  text: {
    alignSelf: 'center'
  }
})
