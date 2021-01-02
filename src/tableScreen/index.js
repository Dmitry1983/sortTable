import React, { useState } from 'react'
import { Text, View, FlatList, TouchableOpacity, Alert } from 'react-native'
import { initialState, columnsInitialState } from '../initialState'
import { styles } from './styles'
import _ from 'lodash'

export const Table = () => {
  const [pets, setPets] = useState(initialState)
  const [columns] = useState(columnsInitialState)
  const [direction, setDirection] = useState(null)
  const [selectedColumn, setSelectedColumn] = useState(null)
  const [selectRow, setSelectRow] = useState(null)

  const sortTable = (column) => {
    selectedColumn === column ? null : setDirection(null)
    const newDirection = direction === 'desc' ? 'asc' : 'desc'
    const sortedData = _.orderBy(pets, [column], [newDirection])
    setSelectedColumn(column)
    setDirection(newDirection)
    setPets(sortedData)
  }
  const tableHeader = () => (
    <View style={styles.tableHeader}>
      {columns.map((column, index) => {
        {
          return (
            <TouchableOpacity
              key={index}
              style={{
                ...styles.columnHeader,
                borderLeftWidth: index === 0 ? 0 : 0.5,
                borderLeftColor: 'white',
                height: '60%',
              }}
              activeOpacity={1}
              onPress={() => sortTable(column)}
            >
              <Text
                style={{
                  ...styles.columnHeaderTxt,
                  color:
                    (selectedColumn === column &&
                      (direction === 'desc' ? '#ff4720' : '#58c566')) ||
                    'white',
                }}
              >
                {column.toUpperCase() + ''}
                {/* {selectedColumn === column &&
                  //   (direction === 'desc' ? '\u003E' : '\u003C')
                  (direction === 'desc' ? '' : '')} */}
              </Text>
            </TouchableOpacity>
          )
        }
      })}
    </View>
  )

  const resetAlert = () =>
    Alert.alert(
      'Reset Sort Tabel',
      'Do you want reset sort table?',
      [
        {
          text: 'Cancel',
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            setPets(initialState)
            setSelectedColumn(null)
            setDirection(null)
            setSelectRow(null)
          },
        },
      ],
      { cancelable: false }
    )

  return (
    <View style={styles.container}>
      <View style={{ width: '90%', flexDirection: 'row-reverse' }}>
        <TouchableOpacity
          style={{
            width: 50,
            height: 20,
            marginBottom: 5,
            borderRadius: 5,
            backgroundColor: 'grey',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => resetAlert()}
        >
          <Text style={{ color: 'white' }}>reset</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={pets}
        style={{ width: '90%' }}
        keyExtractor={(item, index) => index + ''}
        ListHeaderComponent={tableHeader}
        stickyHeaderIndices={[0]}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<View style={{ height: 50 }} />}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              style={{
                ...styles.tableRow,
                // borderBottomWidth:
                //   index < pets.length - 1 ? StyleSheet.hairlineWidth : null,
                backgroundColor: index % 2 == 1 ? 'lightgrey' : '#FFFFFF',
                borderBottomLeftRadius: index === pets.length - 1 ? 10 : 0,
                borderBottomRightRadius: index === pets.length - 1 ? 10 : 0,
              }}
              onPress={() => {
                if (selectRow !== item) {
                  //  console.log(item)
                  setSelectRow(item)
                }
              }}
            >
              <View
                style={{
                  ...styles.tableRow,
                  backgroundColor: selectRow === item ? 'lightgreen' : null,
                  borderBottomLeftRadius: index === pets.length - 1 ? 10 : 0,
                  borderBottomRightRadius: index === pets.length - 1 ? 10 : 0,
                }}
              >
                <Text
                  style={{
                    ...styles.columnRowTxt,
                    // fontWeight: selectRow === item ? 'bold' : null,
                  }}
                >
                  {item.Name}
                </Text>
                <Text
                  style={{
                    ...styles.columnRowTxt,
                    //fontWeight: selectRow === item ? 'bold' : null,
                  }}
                >
                  {item.Gender}
                </Text>
                <Text
                  style={{
                    ...styles.columnRowTxt,
                    //fontWeight: selectRow === item ? 'bold' : null,
                  }}
                >
                  {item.Breed}
                </Text>
                <Text
                  style={{
                    ...styles.columnRowTxt,
                    //fontWeight: selectRow === item ? 'bold' : null,
                  }}
                >
                  {item.Weight}
                </Text>
                <Text
                  style={{
                    ...styles.columnRowTxt,
                    //fontWeight: selectRow === item ? 'bold' : null,
                  }}
                >
                  {item.Age}
                </Text>
              </View>
            </TouchableOpacity>
          )
        }}
      />
    </View>
  )
}
