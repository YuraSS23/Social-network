import React, {ChangeEvent} from 'react';

type ProfileStatusPropsType = {
    status: string
    updateStatus: (status: string)=> void
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {
    state = {
        isStatusChanges: false,
        status: this.props.status
    }

    addStatusChanges() {
        this.setState({isStatusChanges: true})
    }

    removeStatusChanges() {
        this.setState({isStatusChanges: false})
        this.props.updateStatus(this.state.status)
    }

    onStatusChange =(e: ChangeEvent<HTMLInputElement>)=> {
        this.setState({status: e.currentTarget.value})
    }

    render() {
        return <div>
            {!this.state.isStatusChanges && <span onDoubleClick={this.addStatusChanges.bind(this)}>
                                            {this.props.status  || "-------"}
                                            </span>}
            {this.state.isStatusChanges && <input onBlur={this.removeStatusChanges.bind(this)}
                                                  autoFocus={true}
                                                  onChange={this.onStatusChange}
                                                  value={this.props.status}
                                                  type={"text"}/>}
        </div>
    }
}