import { StatusBar } from "expo-status-bar";
import { Platform } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ModalScreen = () => {
  const router = useRouter();
  const { type } = useLocalSearchParams();

  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 items-center justify-center bg-black/50">
        <View className="bg-white p-6 rounded-xl w-4/5">
          <Text className="text-xl font-bold mb-4">{type} 모달 제목</Text>
          <Text className="text-gray-600 mb-4">
            {type} 모달 내용이 여기에 들어갑니다.
          </Text>
          <Text
            className="bg-blue-500 text-white text-center py-2 rounded-lg"
            onPress={() => router.back()}
          >
            닫기
          </Text>
        </View>

        <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
      </View>
    </SafeAreaView>
  );
};

export default ModalScreen;
