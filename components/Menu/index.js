import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMusic, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles";

const Menu = () => {
  return (
    <View style={styles.menuItems}>
      <TouchableOpacity>
        <View style={styles.menuRow}>
          <FontAwesomeIcon style={styles.icon} icon={faMusic} size={24} />
          <View style={styles.menuTextBox}>
            <Text style={styles.menuText}>Media</Text>
          </View>
          <FontAwesomeIcon
            style={styles.arrowIcon}
            icon={faChevronRight}
            size={24}
          />
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View style={styles.menuRow}>
          <FontAwesomeIcon style={styles.icon} icon={faMusic} size={24} />
          <View style={styles.menuTextBox}>
            <Text style={styles.menuText}>Media</Text>
          </View>
          <FontAwesomeIcon
            style={styles.arrowIcon}
            icon={faChevronRight}
            size={24}
          />
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View style={styles.menuRow}>
          <FontAwesomeIcon style={styles.icon} icon={faMusic} size={24} />
          <View style={styles.menuTextBox}>
            <Text style={styles.menuText}>Media</Text>
          </View>
          <FontAwesomeIcon
            style={styles.arrowIcon}
            icon={faChevronRight}
            size={24}
          />
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View style={styles.menuRow}>
          <FontAwesomeIcon style={styles.icon} icon={faMusic} size={24} />
          <View style={styles.menuTextBox}>
            <Text style={styles.menuText}>Media</Text>
          </View>
          <FontAwesomeIcon
            style={styles.arrowIcon}
            icon={faChevronRight}
            size={24}
          />
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View style={styles.menuRow}>
          <FontAwesomeIcon style={styles.icon} icon={faMusic} size={24} />
          <View style={styles.menuTextBox}>
            <Text style={styles.menuText}>Media</Text>
          </View>
          <FontAwesomeIcon
            style={styles.arrowIcon}
            icon={faChevronRight}
            size={24}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Menu;
