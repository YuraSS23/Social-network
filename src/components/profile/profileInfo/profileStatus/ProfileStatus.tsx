import React from 'react';

type ProfileStatusPropsType = {
    status: string
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {
    state = {
        isStatusChanges: false
    }

    addStatusChanges() {
        this.setState({isStatusChanges: true})
    }

    removeStatusChanges() {
        this.setState({isStatusChanges: false})
    }

    render() {
        return <div>
            {!this.state.isStatusChanges && <span onDoubleClick={this.addStatusChanges.bind(this)}>
                                            {this.props.status}
                                            </span>}
            {this.state.isStatusChanges && <input onBlur={this.removeStatusChanges.bind(this)}
                                                  autoFocus={true} value={this.props.status}
                                                  type={"text"}/>}
        </div>
    }
}