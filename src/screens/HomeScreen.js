import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import Home from '../tabs/Home';
import New from '../tabs/New';
import Fast from '../tabs/Fast';
import Search from '../tabs/Search';
import Downloads from '../tabs/Downloads';
import strings from '../constants/strings';

const HomeScreen = () => {
  const [selectedBottomItem, setSelectedBottomItem] = useState(0);
  const bottomNavigationComponents = [
    {component: <Home />, label: 'home'},
    {component: <New />, label: 'new'},
    {component: <Fast />, label: 'fast'},
    {component: <Search />, label: 'search'},
    {component: <Downloads />, label: 'downloads'},
  ];

  return (
    <View style={myStyle.container}>
      {bottomNavigationComponents[selectedBottomItem].component}
      <View style={myStyle.bottomNavigation}>
        {strings.bottomNavigationItems.map((item, index) => (
          <TouchableOpacity
            key={item.label} // Using label as the key
            style={myStyle.bottomNavigationCard}
            onPress={() => {
              setSelectedBottomItem(index);
            }}>
            <Image
              source={
                selectedBottomItem === index
                  ? strings.imagePaths[item.iconWhite] // Use imagePaths from strings.js
                  : strings.imagePaths[item.iconLine] // Use imagePaths from strings.js
              }
              style={myStyle.bottomNavigationCardImage}
            />
            <Text
              style={[
                myStyle.bottomNavigationCardText,
                selectedBottomItem === index
                  ? myStyle.whiteColor
                  : myStyle.greyColor,
              ]}>
              {item.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default HomeScreen;
const myStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    position: 'absolute',
    height: 100,
    bottom: 0,
    backgroundColor: 'black',
  },
  bottomNavigationCard: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '20%',
  },
  bottomNavigationCardImage: {
    width: 30,
    height: 30,
  },
  bottomNavigationCardText: {
    color: 'gray',
    marginTop: 5,
  },
  whiteColor: {
    color: '#fff',
  },
  greyColor: {
    color: '#808080',
  },
});
