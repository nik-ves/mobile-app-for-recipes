import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

const MealCard = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={props.link}>
      <View style={styles.card}>
        <ImageBackground
          style={styles.image}
          resizeMode="cover"
          source={{ uri: props.item.image_url }}
        >
          <View style={styles.titleContainer}>
            <Text style={styles.title} numberOfLines={1}>
              {props.item.title}
            </Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 3,
    borderColor: "white",
    width: "100%",
    height: 200,
    marginBottom: 20,
    justifyContent: "center",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  titleContainer: {
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
  title: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
    fontFamily: "poppins-regular",
  },
});

export default MealCard;
