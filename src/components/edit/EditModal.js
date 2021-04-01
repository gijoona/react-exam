import React from 'react';
import './EditModal.css';

class EditModal extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      id: props.id,
      subject: '',
      description: '',
      createDate: '',
      display: false
    }
  }

  componentDidMount = () => {
    this.props.onRef(this);
  }

  componentWillUnmount = () => {
    this.props.onRef(undefined);
  }

  onShow = () => {
    this.setState({ display: true });
  }

  onHide = () => {
    this.setState({ display: false });
  }

  onSave = () => {
    this.props.onSave(this.state);
    this.onHide();
  }

  render () {
    return (
      this.state.display? 
        (
          <div>
            <div className="modal-style">
              <div className="overlay-style" onClick={() => this.onHide()}></div>
              <div className="content-style">
                <div className="content-header">
                  TODO 수정
                </div>
                <div className="content-body">
                  Subject
                  <input type="text" defaultValue={this.props.subject} onChange={(evt) => this.setState({subject: evt.target.value})}/>
                  Description
                  <input type="text" defaultValue={this.props.description} onChange={(evt) => this.setState({description: evt.target.value})}/>
                  CreateDate
                  <input type="text" defaultValue={this.props.createDate} onChange={(evt) => this.setState({createDate: evt.target.value})}/>
                  <div className="button-group">
                    <div className="edit-btn save" onClick={() => this.onSave()}>저장</div>
                    <div className="edit-btn cancel" onClick={() => this.onHide()}>취소</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) 
        : null
    );
  }
}

export default EditModal;