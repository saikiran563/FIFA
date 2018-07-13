import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import EmailBlock from './emailBlock'
import PrimaryPhoneBlock from './primaryPhoneBlock'
import BillingAddressBlock from './billingAddressBlock'
import VZModal from '../Modal/modal'

import * as actions from './actions';

import './style.css'
require('../../../assets/css/main.css');
require('../../../assets/css/my-profile.css');
require('../../../assets/css/oneD-Global.css');
require('../../../assets/css/phoenixGlobal.css');

class ContactAndBilling extends Component {
   constructor(props) {
    super(props)
    this.state= {
      showEmailEdit: true,
      userEditMode: true,
      primaryPhoneEditMode: true,
      showPrimaryPhoneEdit: true,
      showBillingEdit: true,
      billingAddressEditMode: true
    }
  }
  componentDidMount() {
    this.props.actions.fetchContactAndBilling();
  }

    handleEditCancel = (type) =>  {
    switch(type) {
      case 'emailBlock':
      this.setState({ showEmailEdit: false, showPrimaryPhoneEdit: false, primaryPhoneEditMode: false, userEditMode: true, billingAddressEditMode: false, showBillingEdit: false});
      break;
      case 'primaryPhoneBlock':
      this.setState({ showEmailEdit: false, showPrimaryPhoneEdit: false, primaryPhoneEditMode: true, userEditMode: false, billingAddressEditMode: false, showBillingEdit: false})
      break;
      case 'billingAddressBlock':
      this.setState({showEmailEdit: false, showPrimaryPhoneEdit: false, primaryPhoneEditMode: false, showBillingEdit: false, userEditMode: false, billingAddressEditMode: true});
      break;
      default:
       this.setState({ showEmailEdit: true, showPrimaryPhoneEdit: true,  userEditMode: true, primaryPhoneEditMode: true, billingAddressEditMode: true, showBillingEdit: true, })
    }
  }

  handleSave = (formId, formData, event) => {
    // through an API call.
    event.preventDefault();
     switch(formId) {
      case 'emailBlock':
      console.log(`${formId} '------' ${formData}`);
      this.props.actions.setEmailId(formData);
      break;
      case 'primaryPhoneBlock':
      console.log(`${formId} '------' ${formData}`);
      this.props.actions.setPrimaryPhone(formData);
      break;
      case 'billingAddressBlock':
      console.log(`${formId} '------' ${formData}`);
      this.props.actions.setBillingAddress(formData)
      break;
    }
  }

  render() {
       const { contactDetails } = this.props;

     return (
       
        <div>
       <h1 className="title title--lg">Contact & Billing</h1>
       {
        contactDetails && <div className="col-xs-12">
       
           <EmailBlock userEmailInfo={contactDetails.userEmailInfo} handleEditCancel={(type) => this.handleEditCancel(type)} handleSave={(type, data, e) => this.handleSave(type, data, e)} {...this.state} />
           <PrimaryPhoneBlock userPrimaryPhoneInfo={contactDetails.userPrimaryPhoneInfo} handleEditCancel={(type) => this.handleEditCancel(type)} handleSave={(type, data, e) => this.handleSave(type, data, e)} {...this.state}/>
           <BillingAddressBlock userBillingInfo={contactDetails.userBillingInfo} handleEditCancel={(type) => this.handleEditCancel(type)} handleSave={(type, data, e) => this.handleSave(type, data, e)} {...this.state}/>
           
       </div>

       }
  
    </div>
   
      
    )
  }
}

const mapStateToProps = state => {
  console.log('mapStateToProps; ', state);
  return {
    contactDetails : state.contactDetails.list,
    editemail:state.myprofile.editemail
  }
}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactAndBilling)