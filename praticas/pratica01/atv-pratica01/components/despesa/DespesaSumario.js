import { View, Text } from 'react-native';

function DespesaSumario({ despesas, periodo }) {

  const somaDespesas = despesas.reduce((total, despesa) => {
    return total + despesa.valor;
  }, 0);
  const DESPESAS = [
    { id: 'd1', descricao: 'Tênis', valor: 200, data: new Date(2026, 3, 20) },
    { id: 'd2', descricao: 'Pizza', valor: 50, data: new Date(2026, 3, 22) },
    { id: 'd3', descricao: 'Uber', valor: 30, data: new Date(2026, 3, 25) },
  ];

  return (
    <View>
      <Text>{periodo}</Text>
      <Text>R$ {somaDespesas.toFixed(2)}</Text>
    </View>
  );
}

export default DespesaSumario;