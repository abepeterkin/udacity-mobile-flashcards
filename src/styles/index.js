import { StyleSheet } from 'react-native'

import { white, black, lightGray, red, blue, green } from './colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    margin: 5,
    borderRadius: 10
  }, 
  buttonBlue: {
    backgroundColor: blue,
    color: white
  },
  buttonGreen: {
    backgroundColor: green,
    color: white
  },
  buttonRed: {
    backgroundColor: red,
    color: white
  },
  deck: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: '80%',
    borderWidth: 3,
    borderColor: black,
    backgroundColor: white,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: '10%',
    marginRight: '10%'
  },
  textInput: {
    height: 40,
    width: '50%',
    padding: 10,
    margin: 5
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
    margin: 10,
    textAlign: 'center'
  },
  viewQuestion: {
    color: lightGray,
    borderColor: lightGray,
    borderWidth: 3,
    borderRadius: 10,
    padding: 5
  }
})

export default styles