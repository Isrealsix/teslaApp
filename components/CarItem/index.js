import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCog, faToolbox } from '@fortawesome/free-solid-svg-icons';

const CarItem = () => {
	return (
		<View style={styles.carContainer}>
			{/* Header */}
			<View style={styles.header}>
				<FontAwesomeIcon icon={faCog} style={styles.icon} size={24} />
				<Text style={styles.headerTitle}>My Mobile</Text>
				<FontAwesomeIcon icon={faToolbox} style={styles.icon} size={24} />
				<FontAwesomeIcon icon={faToolbox} style={styles.icon} size={24} />
			</View>
		</View>
	);
};

export default CarItem;
