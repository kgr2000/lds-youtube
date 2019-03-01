import React from "react";
import ListPresenter from "./ListPresenter"
import {YTapi} from "../../api"

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
      const mormonChannel = await YTapi.mormonChannel();
      const mormonOrg = await YTapi.mormonOrg();
      const tabChoir = await YTapi.tabChoir();
      const mormonNewroom = await YTapi.mormonNewroom();
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