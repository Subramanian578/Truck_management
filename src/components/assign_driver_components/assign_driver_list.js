import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import DriverCard from './assign_driver_card'; // Assuming this is the card component you've created

// Sample data for the drivers
const drivers = [
  {
    id: 1,
    name: 'Thalapathy',
    dri_id: '1234567',
    distance: '200 Meters',
    rating: 4.5,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdYeRFfJgOrVQVI9KSS-cKXiMUOoA-6lgtmQ&s',
  },
  {
    id: 2,
    name: 'IlayaThalapathy',
    dri_id: '0000101',
    distance: '200 Meters',
    rating: 4.5,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqCgNG9UfNdPgiSyTwpWU22nmG1NOmSeeBTA&s',
  },
  {
    id: 3,
    name: 'Vijay',
    dri_id: '0000101',
    distance: '200 Meters',
    rating: 4.5,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrD7GpfI2jIXti4swhl15GEVfaf0g0z-f2_A&s',
  },
  {
    id: 4,
    name: 'Master',
    dri_id: '0000101',
    distance: '200 Meters',
    rating: 4.5,
    imageUrl: 'https://img.etimg.com/thumb/width-1200,height-1200,imgsize-71560,resizemode-75,msid-99202332/magazines/panache/thalapathy-vijay-makes-instagram-debut-collects-over-4-mn-followers-in-a-day.jpg',
  },
  {
    id: 5,
    name: 'VetriMaran',
    dri_id: '0000101',
    distance: '200 Meters',
    rating: 4.5,
    imageUrl: 'https://assets.thehansindia.com/h-upload/2023/01/19/1330598-varisu-cast-fees.webp',
  },
];

const AssignDriverCard = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={drivers}
        renderItem={({item}) => <DriverCard driver={item} />} // Using the DriverCard component
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  list: {
    justifyContent: 'space-between',
    paddingBottom: 20,  // For spacing at the bottom
  },
});

export default AssignDriverCard;
