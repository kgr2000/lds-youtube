import React from "react";
import { Text, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import Loader from "../../components/Loader";
import styled from "styled-components";
import HomeSlider from "../../components/HomeSlider";

const Container = styled.ScrollView`
  background-color: black;
`;

const HomePresenter = ({loading, mormonChannel,  mormonOrg,  tabChoir,  mormonNewroom}) => loading ? <Loader /> :  <Container><HomeSlider videos={mormonChannel} /></Container>


  HomePresenter.propTypes = {
    loading: PropTypes.bool.isRequired
  }

  export default HomePresenter;