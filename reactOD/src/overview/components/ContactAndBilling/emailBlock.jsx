import React, { Component } from 'react'
import InputField from '../FormElements/InputComponent'

class EmailBlock extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userEmail: this.props.userEmailInfo.read,
      requiredError: true,
      isValid: '',
      istouched: false,
      emailidInvalidMessages: [
        { name: 'Invalid email address', error: false, type: 'character' }
      ],
    }
  }

   handleOnChange = (e) => {
     this.setState({ userEmail: e.target.value }, () => this.onChangeInput());
   }

    handleOnEditCancel = (type) => {
      this.setState({
        userEmail: this.props.userEmailInfo.read
      });
      this.props.handleEditCancel(type);
    }

  onChangeInput = () => {
    this.setState({istouched: true});
    const val = this.state.userEmail;
    const emailidInvalidMessages = JSON.parse(JSON.stringify(this.state.emailidInvalidMessages));
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val)){
      this.setState({ requiredError: false, isValid: true });
 
    } else {
       this.setState({
        requiredError: true, isValid: false, emailidInvalidMessages: [
          { name: 'Not valid email address', error: false, type: 'character' }
        ]
      });
    }

  }

  render() {
    const {  emailidInvalidMessages, requiredError, userEmail } = this.state;
    const { userEmailInfo, showEmailEdit, userEditMode } = this.props;
   const isValid = this.state.isValid;
    const editableClassName = userEditMode ? "" : "description_box_disabled";
    return (
     <div className={`row description_box ${editableClassName}`}>
                    <div className="col-xs-12 col-sm-4 description_box__header">
                        <h4 tabIndex="0">{userEmailInfo.title}</h4>
                        <p>{userEmailInfo.desc}</p>
                    </div>
                    <div className="col-xs-12 col-sm-8 description_box__large-container">
                        <div className="row">

                                <div className="col-xs-12 col-sm-10 description_box__details">
                                {
                                    showEmailEdit &&  <div className="description_box__read">

                                        <p>{userEmailInfo.read}</p>

                                    </div>
                                }
                                {
      !showEmailEdit && userEditMode && <div className="description_box__form">
                    <div className="row">
                      <div className="col-xs-12 col-sm-5">
                        <div className="form-group email-block-input">
                          <label htmlFor="email">Change Email Address</label>
                          <InputField type="text" handleOnChange={this.handleOnChange} placeholder="name@domain.com" name="emailid" valid={isValid} touched={this.state.istouched} value={userEmail} />
                        </div>
                      </div>
                    </div>
                  </div>
                }
              </div>
              {
                showEmailEdit && <div className="description_box__edit description_box__edit_section">
                  <a className="btn btn-anchor" onClick={() => this.props.handleEditCancel('emailBlock')} role="button">Edit</a>
                </div>
              }
            </div>
          </div>
      
        {
          !showEmailEdit && userEditMode && <div className="footer col-xs-12">
            <a className="btn btn--round-invert" role="button" onClick={() => this.handleOnEditCancel('cancelBlock')}>Cancel</a>
            <button className="btn btn--round" disabled={requiredError} onClick={() => this.props.handleSave('emailBlock', userEmail, event)}>Save Changes</button>
          </div>
        }
      </div>
    )
  }
}

export default EmailBlock;