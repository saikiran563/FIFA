import React, { Component } from 'react';
import { connect } from 'react-redux'

import * as actions from './actions';
import { bindActionCreators } from 'redux'


class HeaderContent extends Component {
   constructor(){
       super();
       this.openPopup=this.openPopup.bind(this);

   } 
 openPopup()
{
 this.props.actions.show_popup("my data sample"); /* calling to action */
}

    render() {
      if (reactGlobals.deviceLandingUrl.indexOf("ao")>-1){
        return (
            <div className="headercontent__wrapper">
                    <h1 className="title title--lg hidden-xs hidden-sm">My Profile</h1>
                    <p>You are the Account Owner.<br className="visible-xs" /> <a href="#" className="dlink" onClick={this.openPopup}>What does this mean?</a></p>
                    <h2 className="title title--sm top-divider">Quick Links</h2>
                    <p>A few common settings to get you started.</p>
                </div>
                 )}
                 
                 else {
return (
  <div className="headercontent__wrapper">
                    <h1 className="title title--lg hidden-xs hidden-sm">My Profile</h1>
                    <p>You are the Account Member.<br className="visible-xs" /> <a href="#" className="dlink" onClick={this.openPopup}>What does this mean?</a></p>
                    <h2 className="title title--sm top-divider">Quick Links</h2>
                    <p>A few common settings to get you started.</p>
                </div>
)
                 }
    }
}



const mapStateToProps = state => {
  //console.log('mapStateToProps; ', state);
  return {
    isFetching: state.overview.isFetching,
    deviceTiles: state.overview.deviceTiles,
    visible: state.overview.visible,
  }
}
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContent)