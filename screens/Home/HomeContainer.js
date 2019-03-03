import React from "react";
import HomePresenter from "./HomePresenter"
import { videos } from "../../api"

export default class HomeContainer extends React.Component{
  state = {
    loading: true,
    mormonChannel: null,
    mormonOrg: null,
    tabChoir: null,
    mormonNewroom: null,
    error: null,
  };

  async componentDidMount(){
    let mormonChannel;
    try{
      ({data: {items: mormonChannel}} = await videos.mormonChannel());
      ({data: {items: mormonOrg}} = await videos.mormonOrg());
      ({data: {items: tabChoir}} = await videos.tabChoir());
      ({data: {items: mormonNewroom}} = await videos.mormonNewroom());
    }catch(error){
      this.setState({error:"Can't get videos."})
      console.log(error);
    }finally{
      this.setState({
      loading: false,
      mormonChannel,
      mormonOrg,
      tabChoir,
      mormonNewroom
    })
  }}

  render(){
    const {
      loading,
      mormonChannel,
      mormonOrg,
      tabChoir,
      mormonNewroom
    } = this.state;
    return <HomePresenter loading = {
      loading
    }
    mormonChannel = {
      mormonChannel
    }
    mormonOrg = {
      mormonOrg
    }
    tabChoir = {
      tabChoir
    }
    mormonNewroom = {
      mormonNewroom
    }
    />;
  }
}