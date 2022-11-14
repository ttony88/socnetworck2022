import React from 'react'

class StatusProfile extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    componentDidUpdate = (prevProps, prevState) => {
        if(prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }
    }

    activateEdutMode = () => {
        this.setState({editMode: true})
    }

    deactivateEdutMode = () => {
        this.setState({editMode: false})
        this.props.updataUserStatus(this.state.status)
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    render() {
        return(
            <div>
                <div>
                    {this.state.editMode &&
                    <input onChange={this.onStatusChange} onBlur={this.deactivateEdutMode} autoFocus={true} 
                    value={this.state.status} type="text" />}
                </div>
                <div>
                    {!this.state.editMode &&
                    <span onDoubleClick={this.activateEdutMode}>{this.state.status || '--------'}</span>}
                </div>
            </div>
            
        )
    }
}
export default StatusProfile