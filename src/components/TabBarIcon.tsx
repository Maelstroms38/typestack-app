import React from 'react';
import { Ionicons } from '@expo/vector-icons';

const TabBarIcon = props => (
  <Ionicons
    name={props.name}
    size={26}
    style={{ marginBottom: -3 }}
    color={props.focused ? 'lightblue' : 'lightgray'}
  />
);

export default TabBarIcon;
