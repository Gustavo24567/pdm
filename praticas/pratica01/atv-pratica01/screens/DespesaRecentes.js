import { View, Text, TextInput, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import DespesaSaida from '../components/despesa/DespesaSaida';


function DespesaRecentes() {
  
  const hoje = new Date();
  const seteDiasAtras = new Date(hoje);
  seteDiasAtras.setDate(hoje.getDate() - 7);
  
  const despesasRecentes = DESPESAS.filter((despesa) => {
    return despesa.data >= seteDiasAtras && despesa.data <= hoje;
  });
  

  return (
    <DespesaSaida despesas={despesasRecentes} periodo="Últimos 7 dias" />
  );
}

export default DespesaRecentes;