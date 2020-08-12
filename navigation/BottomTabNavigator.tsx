import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ShowcaseScreen from '../screens/ShowcaseScreen';
import ContactScreen from '../screens/ContactScreen';
import { BottomTabParamList, ShowcaseParamList, ContactParamList, ServicesParamList } from '../types';
import ServicesScreen from '../screens/ServicesScreen';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Services"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Showcase"
        component={ShowcaseNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
        <BottomTab.Screen 
          name="Services"
          component={ServicesNavigator}
          options={{
            tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
          }}
        />
      <BottomTab.Screen
        name="Contact"
        component={ContactNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const ShowcaseStack = createStackNavigator<ShowcaseParamList>();

function ShowcaseNavigator() {
  return (
    <ShowcaseStack.Navigator>
      <ShowcaseStack.Screen
        name="ShowcaseScreen"
        component={ShowcaseScreen}
        options={{ headerTitle: 'Tab One Title' }}
      />
    </ShowcaseStack.Navigator>
  );
}

const ContactStack = createStackNavigator<ContactParamList>();

function ContactNavigator() {
  return (
    <ContactStack.Navigator>
      <ContactStack.Screen
        name="ContactScreen"
        component={ContactScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />
    </ContactStack.Navigator>
  );
}

const ServicesStack = createStackNavigator<ServicesParamList>();

function ServicesNavigator()
{
  return(
    <ServicesStack.Navigator>
      <ServicesStack.Screen
        name="ServicesScreen"
        component={ServicesScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />
    </ServicesStack.Navigator>
  )
}