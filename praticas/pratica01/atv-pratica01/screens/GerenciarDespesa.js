import { View, Text, TextInput, StyleSheet } from 'react-native';
import React, { useState } from 'react';


function GerenciarDespesa() {

  const [data, setData] = useState('');
  const [valor, setValor] = useState('');
  const [descricao, setDescricao] = useState('');

  return (
    <View style={styles.container}>
      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Descrição</Text>
        <TextInput 
          style={styles.input} 
          maxLength={20}
          value={descricao}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Valor da Despesa</Text>
        <TextInput 
          style={styles.input}
          keyboardType={'decimal-pad'}
          value={valor}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Data da Despesa</Text>
        <TextInput 
          style={styles.input}
          value={data}
        />
      </View>

    </View>
  );
}