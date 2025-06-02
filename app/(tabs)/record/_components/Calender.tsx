import React from "react";
import { View } from "react-native";
import { Calendar as RNCalendar } from "react-native-calendars";

interface CalendarProps {
  onDayPress?: (date: any) => void;
  markedDates?: {
    [date: string]: {
      selected?: boolean;
      marked?: boolean;
      dotColor?: string;
    };
  };
}

const Calendar = ({ onDayPress, markedDates }: CalendarProps) => {
  return (
    <View className="bg-white p-4 rounded-xl shadow-md">
      <RNCalendar
        onDayPress={onDayPress}
        markedDates={markedDates}
        theme={{
          backgroundColor: "#ffffff",
          calendarBackground: "#ffffff",
          textSectionTitleColor: "#b6c1cd",
          selectedDayBackgroundColor: "#00adf5",
          selectedDayTextColor: "#ffffff",
          todayTextColor: "#00adf5",
          dayTextColor: "#2d4150",
          textDisabledColor: "#d9e1e8",
          dotColor: "#00adf5",
          selectedDotColor: "#ffffff",
          arrowColor: "orange",
          monthTextColor: "blue",
          indicatorColor: "blue",
          textDayFontWeight: "300",
          textMonthFontWeight: "bold",
          textDayHeaderFontWeight: "300",
          textDayFontSize: 16,
          textMonthFontSize: 16,
          textDayHeaderFontSize: 16,
        }}
      />
    </View>
  );
};

export default Calendar;
