import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { Text, View } from '@/components/Themed';

const ModalScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});

export default ModalScreen;
