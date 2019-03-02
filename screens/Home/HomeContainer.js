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
    error: null
  };

  async componentDidMount(){
    try{
      const mormonChannel = await videos.mormonChannel();
      const mormonOrg = await videos.mormonOrg();
      const tabChoir = await videos.tabChoir();
      const mormonNewroom = await videos.mormonNewroom();
    }catch(error){
      this.setState({error:"Can't get videos."})
      console.log(error);
    }finally{
      this.setState({loading: false})
    }
  }

  render(){
    const { loading, mormonChannel, mormonOrg, tabChoir, mormonNewroom } = this.state;
    // console.log(this.state)
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