import { Text, View } from "react-native";
import Calendar from "./_components/Calender";

const Record = () => {
  return (
    <View className="flex-1 items-center justify-center bg-primary">
      <Text className="text-2xl font-bold text-secondary">Record</Text>
      <Calendar />
    </View>
  );
};

export default Record;
