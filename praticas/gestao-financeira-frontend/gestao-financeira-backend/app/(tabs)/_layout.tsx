import { Tabs } from 'expo-router';

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" />
      <Tabs.Screen name="AddTransactions" />
      <Tabs.Screen name="summary" />
    </Tabs>
  );
}