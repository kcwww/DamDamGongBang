// components/GlobalModal.tsx
import { Modal, View, Text, Button } from 'react-native';
import { useModalStore } from '@/stores/modalStore';

export function GlobalModal() {
  const { isOpen, data, closeModal } = useModalStore();

  if (!isOpen) return null;

  return (
    <Modal
      visible={isOpen}
      transparent
      animationType="fade"
      onRequestClose={closeModal}
    >
      <View className="flex-1 bg-black/50 justify-center items-center">
        <View className="bg-white p-5 rounded-lg w-4/5 max-w-[400px]">
          <Text>
            {data}
          </Text>
          <Button title="닫기" onPress={closeModal} />
        </View>
      </View>
    </Modal>
  );
}
