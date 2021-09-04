import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const CarItem = () => {
	return (
		<View styles={styles.carContainer}>
			{/* Header */}
			<View>
				<Text>Settings</Text>
				<Text>My Mobile</Text>
				<Text>Surprise</Text>
			</View>
		</View>
	);
};

export default CarItem;
