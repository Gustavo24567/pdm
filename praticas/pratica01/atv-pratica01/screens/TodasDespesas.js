import { View, Text, TextInput, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import DespesaSaida from '../components/despesa/DespesaSaida';


function TodasDespesas() {
  const DESPESAS = [
    { id: 'd1', descricao: 'Tênis', valor: 200, data: new Date(2026, 3, 20) },
    { id: 'd2', descricao: 'Pizza', valor: 50, data: new Date(2026, 3, 22) },
    { id: 'd3', descricao: 'Uber', valor: 30, data: new Date(2026, 3, 25) },
  ];
  return (
    <DespesaSaida despesas={DESPESAS} periodo="Total" />
  );
}

export default TodasDespesas;