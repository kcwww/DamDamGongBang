import { View, Text } from "react-native";

import { useLocalSearchParams } from "expo-router";


const Slug = () => {
  const { slug } = useLocalSearchParams();
  return (
    <View>
      <Text>{slug}</Text>
    </View>
  );
};

export default Slug;
