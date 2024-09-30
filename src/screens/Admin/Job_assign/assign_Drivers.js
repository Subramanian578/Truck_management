import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import ArrowBack from '../../../assets/icons/arrowback';
import Search from '../../../components/assign_driver_searchbar';
import AssignDriverCard from '../../../components/assign_driver_list';

const {width} = Dimensions.get('window'); // Get screen width

export default function Assign_drivers() {
  return (
    <View style={styles.container}>
      <View style={[styles.header , {gap: 5,}]}>
        <ArrowBack/>
        <Text style={styles.heading}>Assign drivers</Text>
      </View>
      <Text style = {styles.my_driver}>My Drivers</Text>
      <View>
        <Search/>
      </View>
      <AssignDriverCard/>
    </View>
  );
}

// Function to adjust font size based on screen width
const responsiveFontSize = (fontSize) => {
  const scaleFactor = width / 375; // Assuming 375 is the base screen width (iPhone 6/7/8)
  return fontSize * scaleFactor;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  header: {
    flexDirection: 'row',
  },
  heading: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: responsiveFontSize(18),
  },
  my_driver: {
    color: '#000',
    paddingTop: 20,
    fontWeight: '900',
    fontSize: responsiveFontSize(22),
  },
});
