import React, {ChangeEvent} from 'react';

type ProfileStatusPropsType = {
    status: string
    updateStatus: (status: string)=> void
    profileId: string
    authId: string | null
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {
    state = {
        isStatusChanges: false,
        status: this.props.status
    }

    addStatusChanges() {
        if (this.props.profileId === this.props.authId) {
            this.setState({isStatusChanges: true})
        }
    }

    removeStatusChanges() {
        this.setState({isStatusChanges: false})
        this.props.updateStatus(this.state.status)
    }

    onStatusChange =(e: ChangeEvent<HTMLInputElement>)=> {
        this.setState({status: e.currentTarget.value})
    }

    componentDidUpdate(prevProps: Readonly<ProfileStatusPropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (prevProps.status !== this.props.status) {
            this.setState({status: this.props.status})
        }
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