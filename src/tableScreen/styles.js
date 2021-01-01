import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 100,
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#2A2C34',
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    height: 70,
  },
  tableRow: {
    flexDirection: 'row',
    height: 60,
    alignItems: 'center',
  },
  columnHeader: {
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  columnHeaderTxt: {
    color: 'white',
    //fontWeight: 'bold',
    padding: 4,
    fontSize: 15,
  },
  columnRowTxt: {
    width: '20%',
    textAlign: 'center',
    fontSize: 15,
  },
})
