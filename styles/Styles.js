import { StyleSheet, StatusBar } from 'react-native';

export const basicStyle = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ebfff6',
      marginTop: StatusBar.currentHeight || 0,
      paddingLeft: 10,
      paddingRight: 10,
    },
    title: {
        fontWeight: 'bold',
        flex: 1,
        fontSize: 40,
        textAlign: 'center',
        margin: 10
    },
    textInput: {
        backgroundColor: '#d9d9d7',
        borderBottomWidth: 1,
        borderBottomColor: 'black'
    },
    labels: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingBottom: 7,
        paddingTop: 3
    },
    button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 4,
    backgroundColor: '#009451',
    },
    calcText: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    result: {
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10,
        fontSize: 20,
        fontWeight: 'bold'
    },
    buttonTexts: {
        labelColor: 'white'
    },
    switch: {
        alignSelf: 'flex-start'
    },
    circleShape: {
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
        alignSelf: 'center',
        margin: 10
      },
    author: {
        alignSelf:'flex-end',
        marginTop: 30
    }
  });

  export const fancyStyle = StyleSheet.create({
    container: {...basicStyle.container,
                backgroundColor: '#141414'},
    title: {...basicStyle.title,
                color: '#defff0'},
    textInput: {...basicStyle.textInput,
                borderBottomColor: 'white'},
    labels: {...basicStyle.labels,
                color: '#defff0'},
    button: {...basicStyle.button},
    calcText: {...basicStyle.calcText},
    result: {...basicStyle.result,
                color: 'white'},
    switch: {...basicStyle.switch},
    circleShape: {...basicStyle.circleShape},
    author: {...basicStyle.author,
                color: 'white'}
  })