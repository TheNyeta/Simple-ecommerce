import { View, Text, TouchableOpacity, Dimensions, Pressable, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import AccountScreen from '../screens/AccountScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import Animated, { SlideInDown, SlideOutDown, useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get('window');

const Tab = createBottomTabNavigator();

const MyTabBar = ({ state, descriptors, navigation }) => {
  
  const TAB_WIDTH = width / state.routes.length

  const animatedStyles = useAnimatedStyle(() => {
    const translateXValue = state.index * TAB_WIDTH;
    return {
      transform: [{ translateX: withTiming(translateXValue, {duration: 200}) }],
    };
  });

  return (
    <SafeAreaView className='flex-row bg-white items-center absolute bottom-0 w-full'  style={{ height: height * 0.07 }}>
      <Animated.View className='items-center justify-start absolute' style={[{ width: TAB_WIDTH, height: height * 0.07 }, animatedStyles]}>
        <Animated.View className='bg-[#673ab7] rounded-full mt-1' style={{ width: height * 0.08, height: height * 0.04}} ></Animated.View>
      </Animated.View>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;
        
        const iconName = options.tabBarIcon;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <Pressable
            className='flex-1 items-center justify-start'
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ height: height * 0.07 }}
            key={label}
          >
            <View className='mt-1.5 mb-1'>
              <Icon name={isFocused ? iconName.replace('-outline', '') : iconName } color={isFocused ? 'white' : 'black'} size={26}/>
            </View>
            <Text className='' style={{ color: isFocused ? '#673ab7' : 'black' }}>
              {label}
            </Text>
            {/* {isFocused && 
              <Animated.Text style={{ color: isFocused ? '#673ab7' : 'black' }} entering={SlideInDown} exiting={SlideOutDown}>
                {label}
              </Animated.Text>
            } */}
          </Pressable>
        );
      })}
    </SafeAreaView>
  );
}

const BottomTabs = () => {


  return (
    <Tab.Navigator
        initialRouteName="Home"
        tabBar={props => <MyTabBar {...props} />}
        screenOptions={{
          headerShown: false,
          // tabBarActiveTintColor: '#FFB700',
          // tabBarShowLabel: false,
          // tabBarStyle: {
          //   position: 'absolute',
          //   left: 50,
          //   right: 50,
          //   bottom: 30,
          //   borderRadius: 30,
          //   elevation: 10,
          //   borderTopWidth: 0,
          // }
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: "home-outline",
          }}
        />
        <Tab.Screen
          name="Favorite"
          component={FavoriteScreen}
          options={{
            tabBarLabel: 'Favorite',
            tabBarIcon: "heart-outline",
          }}
        />
        <Tab.Screen
          name="Account"
          component={AccountScreen}
          options={{
            tabBarLabel: 'Account',
            tabBarIcon: "account-outline",
          }}
        />
      </Tab.Navigator>
  )
}

export default BottomTabs

const styles = StyleSheet.create({
  tabBarContainer: {
    flex: 1,
    flexDirection: 'row',
    height: 90,
    position: 'absolute',
    alignSelf: 'center',
    backgroundColor: '#0067FF',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  slidingTabContainer: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
  },
  slidingTab: {
    width: 70,
    height: 70,
    borderRadius: 100,
    backgroundColor: 'white',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
  },
});