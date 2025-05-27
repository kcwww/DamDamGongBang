import { Button, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { Text, View } from "@/components/Themed";
import { useModalStore } from "@/stores/modalStore";

export default function TabOneScreen() {
  const { openModal } = useModalStore();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <Text className="font-bold bg-blue-400 p-2 rounded-md">
        Hello World !! NativeWind
      </Text>

      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />

      <Button
        title="모달 열기"
        onPress={() => openModal(
          "모달 내용"
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
  },
});
