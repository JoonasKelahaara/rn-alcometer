import { ScrollView, Text, View, TextInput, TouchableOpacity, Switch } from 'react-native';
import { useState } from 'react';
import RadioForm from 'react-native-simple-radio-button';
import NumericInput from 'react-native-numeric-input'
import {basicStyle, fancyStyle} from './styles/Styles.js'

// AUTHOR: Joonas Kelahaara

export default function App() {

  const [weight, setWeight] = useState(0);
  const [gender, setGender] = useState('male');
  const [bottles, setBottles] = useState(0);
  const [hours, setHours] = useState(0)
  const [result, setResult] = useState(0)
  const [isEnabled, setIsEnabled] = useState(false)

  const theme = isEnabled ? fancyStyle : basicStyle;

  const toggleSwitch = () => setIsEnabled(previousState => !previousState) 

  const genders= [
    {label:'Male', value:'male'},
    {label:'Female', value:'female'}
  ]

  function Calculate() {

    if(!weight || weight < 0) {
      alert('Invalid weight!')
      setResult(0)
      return
    }

    let result = 0
    let litres = bottles * 0.33;
    let grams = litres * 8 * 4.5;
    let burning = weight / 10;
    let left = grams - burning * hours;

    if (gender == 'male') {
      result = left / (weight * 0.7)
    } else {
      result = left / (weight * 0.6)
    }

    if (result < 0) {
      setResult(0);
      return
    } 

    setResult(result.toFixed(2))
  }

  function getResultColor() {
    if (result < 0.5) {
      return {backgroundColor: '#009451'}
    } else if (result > 0.5 && result < 1.3) {
      return  {backgroundColor: '#ff9b21'}
    } else {
      return {backgroundColor: '#bd0909'}
    }
  }

  return (
    <ScrollView style={theme.container}>
      <View>
        <Switch style={theme.switch} 
          value={isEnabled}
          onValueChange={toggleSwitch}
          trackColor={{ false: "#767577", true: '#86fcb8' }}
        />
        <Text style={theme.title}>Alcometer</Text>
        <Text style={theme.labels}>Weight</Text>
        <TextInput keyboardType='decimal-pad' 
                  style={theme.textInput} 
                  onChangeText={text => setWeight(text)}/>
        <Text style={theme.labels}>Bottles</Text>
        <NumericInput 
          onChange={v => setBottles(v)}
          step={1}
          rounded
          minValue={0}
          textColor={isEnabled ? 'white' : 'black'}
          rightButtonBackgroundColor='#86fcb8'
          leftButtonBackgroundColor='#86fcb8'
        />
        <Text style={theme.labels}>Hours</Text>
        <NumericInput 
          onChange={v => setHours(v)} 
          step={1}
          rounded
          minValue={0}
          textColor={isEnabled ? 'white' : 'black'}
          rightButtonBackgroundColor='#86fcb8'
          leftButtonBackgroundColor='#86fcb8'
        />
        <Text style={theme.labels}>Gender</Text>
        <RadioForm 
          buttonSize={10}
          radio_props={genders}
          initial={0}
          labelColor={isEnabled ? 'white' : 'black'}
          selectedLabelColor={isEnabled ? 'white' : 'black'}
          buttonColor={'#86fcb8'}
          selectedButtonColor={'#009451'}
          onPress={(value) => {setGender(value)}}
        />
        <Text style={theme.result}>{result}</Text>
        <View style={[theme.circleShape, getResultColor()]} />
        <TouchableOpacity style={theme.button} activeOpacity={0.7} onPress={Calculate}>
          <Text style={theme.calcText}>Calculate</Text>
        </TouchableOpacity>
        <Text style={theme.author}>Author: Joonas Kelahaara</Text>
      </View>
    </ScrollView>
  );
}
