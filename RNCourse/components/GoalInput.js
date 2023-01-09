import { View, TextInput, Button, StyleSheet, Modal, Image } from "react-native";
import { useState } from "react";

const GoalInput = (props) => {
  const [goalText, setGoalText] = useState("");

  const goalInputHandler = (text) => {
    setGoalText(text);
  };

  const addGoalHandler = () => {
    props.onAddGoal(goalText);
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image source={require("../assets/images/goal.png")} style={styles.image} />
        <TextInput placeholder="your goal" style={styles.textInput} onChangeText={goalInputHandler} value={goalText} />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="cancel" onPress={props.onCancel} color="#f31282" />
          </View>
          <View style={styles.button}>
            {/* <Button title="add goal" onPress={addGoalHandler} color="#b180f0" /> */}
            <Button
              title="add goal"
              onPress={() => {
                props.onAddGoal(goalText);
                setGoalText("");
              }}
              color="#b180f0"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 6,
    width: "100%",
    padding: 16,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});
