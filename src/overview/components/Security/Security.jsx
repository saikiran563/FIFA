import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from './actions'
import UserBlock from './UserBlock'
import PasswordBlock from './PasswordBlock'
import './style.css'
import LeftContent from '../QuickLinks/LeftContent';

require('../../../assets/css/main.css');
require('../../../assets/css/my-profile.css');
require('../../../assets/css/oneD-Global.css');
require('../../../assets/css/phoenixGlobal.css');

class Security extends Component {
  constructor(props) {
    super(props)
    this.state= {
      showUserEdit: true,
      showPasswordEdit: true,
      userEditMode: true,
      passwordEditMode: true
    }
  }

  componentDidMount() {
    this.props.actions.fetchSecurity();
    this.props.actions.getUserInfo();
  }

  handleEditCancel = (type) =>  {
    switch(type) {
      case 'userblock':
      this.setState({ showUserEdit: false, showPasswordEdit : false, userEditMode: true, passwordEditMode: false });
      break;
      case 'passwordblock':
      this.setState({ showUserEdit: false, showPasswordEdit : false, userEditMode: false, passwordEditMode: true });
      break;
      default:
       this.setState({ showUserEdit: true, showPasswordEdit : true, userEditMode: true, passwordEditMode: true })
    }
  }

   handleSave = (formId, formData, event) => {
    // Action Dispatch will take place here to save the new userid to database
    // through an API call.
    event.preventDefault();
     switch(formId) {
      case 'userblock':
      console.log(`${formId} '------' ${formData}`);
      this.props.actions.setUserId(formData)
      break;
    }
  }

  render() {
    const { securities } = this.props;
    return (
  <div>
          <h1 className="title title--lg">Security</h1>
            {
              securities && <div className="col-xs-12">
                <UserBlock userInfo={securities.userIdInfo} handleEditCancel={(type) => this.handleEditCancel(type)} handleSave={(type, data, e) => this.handleSave(type, data, e)} {...this.state}/>
                <PasswordBlock passwordInfo={securities.passwordInfo} handleEditCancel={(type) => this.handleEditCancel(type)} {...this.state}/>
              </div>
            }
       </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    securities: state.security.list,
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Security)
