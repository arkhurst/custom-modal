import React, { FC, Fragment, useState } from "react";
import {
  View,
  Text,
  Modal,
  TouchableWithoutFeedback,
  Dimensions,
  StyleSheet,
  FlatList,
  Button,
} from "react-native";
import { DataProps } from "../App";

const deviceHeight = Dimensions.get("window").height;
interface BottomProps {
  title: string;
  data: DataProps[];
  show: boolean;
  setShow: any;
}

const ButtomPopUp: FC<BottomProps> = ({ setShow, title, data, show }) => {
  return (
    <Fragment>
      <Modal
        animationType={"fade"}
        visible={show}
        transparent={true}
        onRequestClose={() => setShow(false)}
      >
        <TouchableWithoutFeedback onPress={() => setShow(false)}>
          <View style={styles.container}>
            <View style={styles.modal}>
              <Button title={"Close"} onPress={() => setShow(false)} />
              {/* Title */}
              <View>
                <Text
                  style={{
                    color: "#182e44",
                    fontSize: 25,
                    marginTop: 15,
                    marginBottom: 30,
                    fontWeight: "500",
                  }}
                >
                  {title}
                </Text>
              </View>
              {/* Content */}
              <View>
                <FlatList
                  data={data}
                  style={{ marginBottom: 20 }}
                  showsVerticalScrollIndicator={false}
                  extraData={data}
                  renderItem={({ item }) => (
                    <>
                      <View
                        style={{
                          height: 50,
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Text style={{ color: "#182e44", fontSize: 20 }}>
                          {item.name}
                        </Text>
                      </View>
                    </>
                  )}
                  keyExtractor={(item, index) => index.toString()}
                  ItemSeparatorComponent={() => (
                    <>
                      <View
                        style={{ opacity: 0.1, backgroundColor: "#182e44" }}
                      />
                    </>
                  )}
                  contentContainerStyle={{
                    paddingBottom: 20,
                  }}
                />
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000AA",
    justifyContent: "flex-end",
  },
  modal: {
    backgroundColor: "#fff",
    width: "100%",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 10,
    maxHeight: deviceHeight * 0.4,
  },
});

export default ButtomPopUp;
