import { View, Text } from 'react-native';

function getDataFormatada(data) {
  return data.getDate() + '/' + (data.getMonth() + 1) + '/' + data.getFullYear();
}

function DespesaItem({ descricao, valor, data }) {
  return (
    <View>
      <Text>{descricao}</Text>
      <Text>{getDataFormatada(data)}</Text>
      <Text>R$ {valor}</Text>
    </View>
  );
}

export default DespesaItem;