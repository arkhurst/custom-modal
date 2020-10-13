import { StatusBar } from "expo-status-bar";
import React, { Fragment, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableWithoutFeedback,
} from "react-native";
import ButtomPopUp from "./components/bottomPopUp";

export type DataProps = {
  id: number;
  name: string;
};

const PopupList: DataProps[] = [
  {
    id: 1,
    name: "Task",
  },
  {
    id: 2,
    name: "Message",
  },
  {
    id: 3,
    name: "Note ",
  },
];
export default function App() {
  const [show, setShow] = useState<boolean>(false);

  const handleShow = () => {
    setShow(true);
  };

  return (
    <Fragment>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.container}>
        <TouchableWithoutFeedback onPress={handleShow}>
          <Text style={styles.textSize}>show pop</Text>
        </TouchableWithoutFeedback>
        <ButtomPopUp
          title="Testing "
          show={show}
          data={PopupList}
          setShow={setShow}
        />
      </SafeAreaView>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textSize: {
    fontSize: 20,
  },
});
