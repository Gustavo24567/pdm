import { FlatList } from 'react-native';
import DespesaItem from './DespesaItem';

function DespesaLista({ despesas }) {

  function renderItem(itemData) {
    return <DespesaItem {...itemData.item} />;
  }

  return (
    <FlatList
      data={despesas}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
}

export default DespesaLista;