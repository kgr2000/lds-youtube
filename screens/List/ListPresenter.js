import React from "react";
import { Text, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import Loader from "../../components/Loader";

const ListPresenter = ({loading}) => loading ? <Loader /> :  <Text>List</Text>


  ListPresenter.propTypes = {
    loading: PropTypes.bool.isRequired
  }

  export default ListPresenter;