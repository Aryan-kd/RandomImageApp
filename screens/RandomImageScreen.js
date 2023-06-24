// screens/RandomImageScreen.js
import React, { useEffect, useState } from 'react';
import { View, Image, Button, ActivityIndicator, Text } from 'react-native';
import axios from 'axios';

const RandomImageScreen = () => {
  const [loading, setLoading] = useState(true);
  const [image, setImage] = useState('');
  const Access_Key = 'DYEOu7GFA7Y0yNPzb5WIvW-I86Nmbs0uYZ5_fPZ3TB0';

  useEffect(() => {
    fetchRandomImage();
  }, []);

  const fetchRandomImage = async () => {
    try {
      const response = await axios.get(
        `https://api.unsplash.com/photos/random?client_id=${Access_Key}`
      );
      console.log(response.data.urls);
      setImage(response.data.urls.full);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching random image:', error);
    }
  };

  const handleRefresh = () => {
    setLoading(true);
    fetchRandomImage();
  };

  // if (loading) {
  //   return (
  //     <View>
  //       <ActivityIndicator size='large' />
  //     </View>
  //   );
  // }

  return (
    <View>
      <Text
        style={{
          width: '100%',
          height: '100px',
          textAlign: 'center',
          fontSize: '30px',
        }}
      >
        Welcome To Akshita Random Image Generator App
      </Text>
      {loading ? (
        <View style={{ width: '100%', height: '400px' }}>
          <ActivityIndicator size='large' />
        </View>
      ) : (
        <Image
          source={{ uri: image }}
          style={{ width: '100%', height: '400px' }}
        />
      )}

      <Button title='Refresh' onPress={handleRefresh} />
    </View>
  );
};

export default RandomImageScreen;
