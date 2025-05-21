import { StyleSheet } from "react-native";
import { useState } from "react";
import Modal from "react-native-modal";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";

export default function TabOneScreen() {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

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
      <EditScreenInfo path="app/(tabs)/index.tsx" />

      <Text
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg"
        onPress={toggleModal}
      >
        모달 열기
      </Text>

      <Modal
        isVisible={isModalVisible}
        onBackdropPress={toggleModal}
        className="m-0 justify-center items-center"
        style={{
          margin: 0,
          justifyContent: "center",
          alignItems: "center",
        }}
        backdropOpacity={0.5}
        animationIn="fadeIn"
        animationOut="fadeOut"
        animationInTiming={200}
        animationOutTiming={200}
        backdropTransitionInTiming={200}
        backdropTransitionOutTiming={200}
        useNativeDriver
      >
        <View
          className="bg-white p-6 rounded-xl w-4/5"
          style={{
            outline: "none",
            alignSelf: "center",
          }}
        >
          <Text className="text-xl font-bold mb-4" style={{ outline: "none" }}>
            모달 제목
          </Text>
          <Text className="text-gray-600 mb-4" style={{ outline: "none" }}>
            모달 내용이 여기에 들어갑니다.
          </Text>
          <Text
            className="bg-blue-500 text-white text-center py-2 rounded-lg"
            onPress={toggleModal}
            style={{ outline: "none" }}
          >
            닫기
          </Text>
        </View>
      </Modal>
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
});
