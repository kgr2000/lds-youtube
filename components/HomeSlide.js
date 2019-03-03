import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Layout from "../constants/Layout";

const Container = styled.View``;

const ThumbnailImage = styled.Image`
  width: ${Layout.width};
  height: ${Layout.height / 3};
`;

const HomeSlide = (channelTitle, title, thumbnailPhoto) => 
  <Container><ThumbnailImage source={{uri: thumbnailPhoto}} /></Container>
;

HomeSlide.propTypes = {
  id: PropTypes.string.isRequired,
  channelTitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  thumbnailPhoto: PropTypes.string.isRequired
}

export default HomeSlide