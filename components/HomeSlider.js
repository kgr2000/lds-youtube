import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Swiper from "react-native-swiper"
import Layout from "../constants/Layout"
import HomeSlide from "./HomeSlide";

const SWIPER_HEIGHT = Layout.height / 3;
const View = styled.View`
  flex: 1;
  height: ${SWIPER_HEIGHT}
  background-color: lightpink;
`;

const HomeSlider = ({videos}) => 
  videos ? (
    <Swiper style={{height: SWIPER_HEIGHT}}>
    {videos
      .filter(video => video.snippet.thumbnails.medium.url !== null)
      .map(video => 
        <View key={video.id.videoId}>
          <HomeSlide 
            id={video.id.videoId}
            channelTitle={video.snippet.channelTitle} 
            title={video.snippet.title} 
            thumbnailPhoto={video.snippet.thumbnails.medium.url} 
          />
        </View>)}
    </Swiper> 
  ): null;

HomeSlider.propTypes = {
  videos: PropTypes.array
}

export default HomeSlider;