import React from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import styles from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCog, faToolbox } from "@fortawesome/free-solid-svg-icons";

const CarItem = () => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require("../../assets/background.png")}
        style={styles.backgroundImage}
      />
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <FontAwesomeIcon icon={faCog} style={styles.icon} size={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My Mobile</Text>
        <TouchableOpacity>
          <FontAwesomeIcon icon={faToolbox} style={styles.icon} size={24} />
        </TouchableOpacity>
      </View>

      {/* Millage */}
      <View style={styles.batterySection}>
        <Image
          source={require("../../assets/battery.png")}
          style={styles.batteryImage}
        />
        <Text style={styles.batteryText}>150 mi</Text>
      </View>

      {/* Status */}
      <View style={styles.status}>
        <Text style={styles.statusText}>Parked</Text>
      </View>
    </View>
  );
};

export default CarItem;
