import React from "react";
import PropTypes from "prop-types";
import { Ionicons } from "@expo/vector-icons";
import { ACTIVE_COLOR, INACTIVE_COLOR } from "../constants/Colors";

const TabBarIcon = ({name, focused}) => 
  (<Ionicons size={26} name={name} color={focused ? ACTIVE_COLOR : INACTIVE_COLOR} />);

TabBarIcon.prototype = {
  name: PropTypes.string.isRequired,
  focus: PropTypes.bool.isRequired
}

export default TabBarIcon;