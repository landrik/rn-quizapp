import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import data from "../../QuizData";

const Questions = ({ index, question}) => {
  return (
    <View style={{}}>
      {/* Question Counter */}
      <View style={{ flexDirection: 'row', alignItems: 'flex-end'}}>
        <Text style={{ color: '#333', fontSize: 15, opacity: 0.6, marginRight: 2}}>
          {index+1}
        </Text>
        <Text style={{ color: '#333', fontSize: 13, opacity: 0.6}}>
          / {data.length}
        </Text>
      </View>
      {/* Question */}
      <Text
        style={{
          color: '#333',
          fontSize: 18,
          textAlign: 'center'
        }}
      >
        {question}
      </Text>
    </View>
  )
}

export default Questions

const styles = StyleSheet.create({})