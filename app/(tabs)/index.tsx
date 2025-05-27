import { Button } from "react-native";
import { Text, View } from "@/components/Themed";
import { useModalStore } from "@/stores/modalStore";

const TabOneScreen = () => {
  const { openModal } = useModalStore();

  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-xl font-bold">Tab One</Text>
      <Text className="font-bold bg-blue-400 p-2 rounded-md">
        Hello World !! NativeWind
      </Text>

      <View
        className="my-8 h-[1px] w-4/5"
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />

      <Button
        title="모달 열기"
        onPress={() => openModal("모달 내용")}
      />
    </View>
  );
}

export default TabOneScreen;
