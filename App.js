import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity , ScrollView, Keyboard} from 'react-native';
import Task from './components/Task';
import React, { useState } from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator, createStackNavigator } from '@react-navigation/native-stack';
import home from './screens/home';
import Login from './screens/login';

export default function App() {

  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleaddtask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
}

  const deletetask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }

const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer sytle={styles.container}>
      <Stack.Navigator>
        <Stack.Screen options={ {headerShown: false} } name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
//     <View style={styles.container}>
//     <View style={styles.tasksWrapper}>
//       <Text style={styles.sectionTitle}>Today's tasks</Text>
//       <View style={styles.items}>
// <ScrollView>
//         {/* This is where the tasks will go! */}
//         {
//           taskItems.map((item, index) => {
//             return (<TouchableOpacity key={index} onPress={ () => deletetask(index)}>
//               <Task text={item} />
//             </TouchableOpacity>)
//             return <Task key={index} text={item} />
//           })
//         }
//         {/* <Task text={'My New Task To Go'}/>
//         <Task text={'Tomorrow i need to push websrv'}/> */}
//     </ScrollView>
//       </View>
//     </View>
//     <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.writeTaskWrapper}>
//       <TextInput style={styles.input} placeholder={'Write a task'} onChangeText={ text => setTask(text)} 
//       value={task} 
//       />
//       <TouchableOpacity onPress={ () => handleaddtask() } > 
//         <View style={styles.addWrapper}>
//           <Text style={styles.addText}>+</Text>
//         </View>
//       </TouchableOpacity>
//     </KeyboardAvoidingView>
//     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8E6E6',
  },
  tasksWrapper : {
    paddingTop: 80,
    paddingHorizontal: 20,

  },

  sectionTitle : {

    fontSize: 24,
    fontWeight: 'bold',
    marginBottom : 30,
  },

  items : {
    marginTop: 30,
  },

  writeTaskWrapper : {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',

  },

  input : {
    bottom : 0,
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  addWrapper : {
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,

  },
  addText : {


  },

  });
