import React, { Component } from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from './actions'

class LeftNav extends Component {

constructor(props) {
    super(props);
  }

componentDidMount() {

     this.props.actions.fetchLeftNav();
// this.props.actions.fetchLeftNav();
//  this.props.actions.showDeviceTiles();
}

    render() {
let acctHolder = reactGlobals.mdnRole.toLocaleLowerCase() == "accountholder";

let acctManager =  reactGlobals.mdnRole.toLocaleLowerCase() == "accountmanager";

let acctMember = reactGlobals.mdnRole.toLocaleLowerCase() == "mobilesecure";

let leftnav = this.props.leftNavBar;
        return (


            <div className="leftcontent_wrapper">
                <span className="title title--xlg visible-xs visible-sm">My Profile</span>

                <div className="hidden-scrollbar">

                    <ul className="menu-myprofile" role="menu">
                        <li className="page page__title">
                            <NavLink exact to='/'>{leftnav.quickLinks}</NavLink>
                        </li>
                        <li className={`page page__title ${this.props.location.pathname.indexOf("security")>-1?"main-active":''}`}>
                            <NavLink exact to='/security'>Security</NavLink>
                        </li>
                        <li className="">
                            <NavLink exact to='/security/userid'>User ID</NavLink>
                        </li>
                        <li className=" ">
                            <NavLink exact to='/security/password'>Password</NavLink>
                        </li>
                        <li className=" ">
                           <NavLink exact to='/security/accountPin'>Account PIN</NavLink>
                        </li>                        
                        <li className=" ">
                            <NavLink exact to='/security/question'>Secret question</NavLink>
                        </li>
                        <li className=" ">
                            <a href="/my-profile-desktop-security.html?section=securityImgS&page=ss">Security image</a>
                        </li>
                        { acctHolder && <li className=" ">
                            <NavLink exact to='/security/enhancedauth'>Enhanced authentication</NavLink>
        </li> }


                        <li className={`page page__title ${this.props.location.pathname.indexOf("contactbilling")>-1?"main-active":''}`}>
                            <NavLink exact to='/contactbilling'>Contact & Billing</NavLink>
                        </li>
                        <li className=" ">
                        <NavLink exact to='/contactbilling/email'>Email address</NavLink>
                        </li>
                  
                
                        { (acctHolder || acctManager) && <li >
                            <NavLink exact to='/contactbilling/primaryPhone'>Primary phone</NavLink>
                        </li>}
                        { (acctHolder || acctManager) && <li >
                            <NavLink exact to='/contactbilling/billingAddress'>Billing address</NavLink>
                        </li>}
                        { (acctHolder || acctManager) && <li>
                            <a href="/my-profile-desktop-contact.html?section=serviceAddressCB&page=cb">Service addresses</a>
                        </li>     }


                       <li className={`page page__title ${this.props.location.pathname.indexOf("manage")>-1?"main-active":''}`}>
                            <NavLink exact to='/manage'>Manage account</NavLink>
                        </li>
                        <li className=" ">
                            <NavLink exact to="/manage/accountmanager">Account manager</NavLink>
                        </li>
                        <li className=" ">
                            <NavLink exact to="/manage/greetingname">Greeting name</NavLink>
                        </li>
                        <li className=" ">
                            <NavLink exact to="/manage/transferofservice">Transfer of service</NavLink>
                        </li>


                        <li className={`page page__title ${this.props.location.pathname.indexOf("privacypermissions")>-1?"main-active":''}`}>
                            <NavLink exact to='/privacypermissions'>Privacy & Permissions</NavLink>
                        </li>
                        <li className="">
                        <NavLink exact to='/privacypermissions/privacysettings'>Privacy settings</NavLink>
                        </li>
                        <li className=" ">
                        <NavLink exact to='/privacypermissions/verizonselects'>Verizon selects preferences</NavLink>
                        </li>
                    </ul>
                </div>
            </div>

        )



    }
}

const mapStateToProps = state => {
  return {
    isFetching: state.leftNav.isFetching,
     leftNavBar: state.leftNav.leftNav,
  }
}

const mapDispatchToProps = dispatch => ({
actions: bindActionCreators(actions, dispatch),
})
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LeftNav));