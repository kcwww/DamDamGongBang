import { StatusBar } from 'expo-status-bar';
import { Platform } from 'react-native';
import { useRouter } from 'expo-router';
import { Text, View } from '@/components/Themed';

const ModalScreen = () => {
  const router = useRouter();

  return (
    <View className="flex-1 items-center justify-center bg-black/50">
      <View className="bg-white p-6 rounded-xl w-4/5">
        <Text className="text-xl font-bold mb-4">
          모달 제목
        </Text>
        <Text className="text-gray-600 mb-4">
          모달 내용이 여기에 들어갑니다.
        </Text>
        <Text
          className="bg-blue-500 text-white text-center py-2 rounded-lg"
          onPress={() => router.back()}
        >
          닫기
        </Text>
      </View>

      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

export default ModalScreen;
