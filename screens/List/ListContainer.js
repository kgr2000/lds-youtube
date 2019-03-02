import React from "react";
import ListPresenter from "./ListPresenter"
import { videos } from "../../api"

export default class ListContainer extends React.Component{
  state = {
    loading: true,
    mormonChannel: null,
    mormonOrg: null,
    tabChoir: null,
    mormonNewroom: null
  };

  async componentDidMount(){
    try{
      const mormonChannel = await videos.mormonChannel();
      const mormonOrg = await videos.mormonOrg();
      const tabChoir = await videos.tabChoir();
      const mormonNewroom = await videos.mormonNewroom();
      console.log(mormonChannel, mormonOrg, tabChoir, mormonNewroom);
    }catch(error){
      console.log(error)
      this.setState({error:"Can't get videos."})
    }finally{
      this.setState({loading: false})
    }
  }

  render(){
    const { loading } = this.state;
    return <ListPresenter loading = {loading} />;
  }
}