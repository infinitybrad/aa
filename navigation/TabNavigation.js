import React from "react";
import {Platform} from "react-native";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import MovieScreen from "../screens/Movies";
import TVScreen from "../screens/TV";
import SearchScreen from "../screens/Search";
import { BG_COLOR } from "../constants/Colors";
import TabBarIcon from "../components/TabBarIcon";

const TabNavigation =  createBottomTabNavigator(
    {
        Movies: 
        {
            screen:MovieScreen,
            navigationOptions:{
                tabBarIcon:({focused})=>(
                    <TabBarIcon 
                        focused={focused}
                        name={Platform.OS==="ios"?"ios-film":"md-film"}
                    />
                    
                )
            }

        },
        TV: {
            screen: TVScreen,
            navigationOptions: {
                tabBarIcon: ({ focused }) => (
                    <TabBarIcon
                        focused={focused}
                        name={Platform.OS === "ios" ? "ios-tv" : "md-tv"}
                    />
                )
            }
        },
        Search: {
            screen: SearchScreen,
            navigationOptions: {
                tabBarIcon: ({ focused }) => (
                    <TabBarIcon
                        focused={focused}
                        name={Platform.OS === "ios" ? "ios-search" : "md-search"}
                    />
                )
            }
        }
    },
    {
        tabBarOptions: {
            showLabel: true,
            style: {
                backgroundColor: BG_COLOR
            }
        }
    }
);

export default createAppContainer(TabNavigation);