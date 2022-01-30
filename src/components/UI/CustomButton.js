import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const CustomButton = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={props.onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#fff",
    paddingVertical: 5,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginVertical: 15,
  },
  buttonText: {
    fontFamily: "poppins-regular",
    color: "#166974",
    fontSize: 20,
  },
});

export default CustomButton;
