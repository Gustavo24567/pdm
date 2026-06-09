import { StyleSheet, Text, View } from 'react-native';
import TodasDespesas from './screens/TodasDespesas';
import DespesaRecentes from './screens/DespesaRecentes';
import GerenciarDespesa from './screens/GerenciarDespesa';


export default function App() {
  function BottonTabScreen() {
    return (
      <Tab.Navigator
        screenOptions={{
          headerRight: () => (
            <IconButton icon="add" size={24} onPress={() => {}} />
          )
        }}
      >
  
        <Tab.Screen
          name="DespesasRecentes"
          component={DespesaRecentes}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="hourglass" size={size} color={color} />
            ),
            tabBarLabel: 'Recentes',
            title: 'Despesas Recentes',
            tabBarLabelStyle: { fontSize: 12 }
          }}
        />
  
        <Tab.Screen
          name="TodasDespesas"
          component={TodasDespesas}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="wallet-outline" size={size} color={color} />
            ),
            tabBarLabel: 'Todas',
            title: 'Todas as Despesas',
            tabBarLabelStyle: { fontSize: 12 }
          }}
        />
  
      </Tab.Navigator>
    );
  }
  /*return (
    <View style={styles.container}>
      <Text></Text>
      <StatusBar style="auto" />
    </View>
  );*/
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
