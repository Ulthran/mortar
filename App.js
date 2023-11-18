import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, SafeAreaView } from 'react-native';
import { generateClient } from 'aws-amplify/api';
import { createMortar } from './src/graphql/mutations';
import { listMortars } from './src/graphql/queries';

import { Amplify } from 'aws-amplify';
import awsmobile from './src/aws-exports';
Amplify.configure(awsmobile);

const initialState = { name: '', description: '' };
const client = generateClient();

const App = () => {
  const [formState, setFormState] = useState(initialState);
  const [mortars, setMortars] = useState([]);

  useEffect(() => {
    fetchMortars();
  }, []);

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value });
  }

  async function fetchMortars() {
    try {
      const mortarData = await client.graphql({
        query: listMortars,
      });
      const mortars = mortarData.data.listMortars.items;
      setMortars(mortars);
    } catch (err) {
      console.log('error fetching mortars');
    }
  }

  async function addMortar() {
    try {
      if (!formState.name || !formState.description) return;
      const mortar = { ...formState };
      setMortars([...mortars, mortar]);
      setFormState(initialState);
      await client.graphql({
        query: createMortar,
        variables: {
          input: mortar,
        },
      });
    } catch (err) {
      console.log('error creating mortar:', err);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <TextInput
          onChangeText={(value) => setInput('name', value)}
          style={styles.input}
          value={formState.name}
          placeholder="Name"
        />
        <TextInput
          onChangeText={(value) => setInput('description', value)}
          style={styles.input}
          value={formState.description}
          placeholder="Description"
        />
        <Pressable onPress={addMortar} style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Create mortar</Text>
        </Pressable>
        {mortars.map((mortar, index) => (
          <View key={mortar.id ? mortar.id : index} style={styles.mortar}>
            <Text style={styles.mortarName}>{mortar.name}</Text>
            <Text style={styles.mortarDescription}>{mortar.description}</Text>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: { width: 400, flex: 1, padding: 20, alignSelf: 'center' },
  mortar: { marginBottom: 15 },
  input: {
    backgroundColor: '#ddd',
    marginBottom: 10,
    padding: 8,
    fontSize: 18,
  },
  mortarName: { fontSize: 20, fontWeight: 'bold' },
  buttonContainer: {
    alignSelf: 'center',
    backgroundColor: 'black',
    paddingHorizontal: 8,
  },
  buttonText: { color: 'white', padding: 16, fontSize: 18 },
});
