import {useState, useEffect} from 'react'

const StatusProfile = (props) => {

    const[editMode, setEditMode] = useState(false)
    const[status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(status)
    })

    const activateEdutMode = () => {
        setEditMode(true)
    }

    const deactivateEdutMode = () => {
        setEditMode(false)
        props.updataUserStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return(
        <div>
            <div>
                {editMode &&
                <input onChange={onStatusChange} onBlur={deactivateEdutMode} autoFocus={true} 
                value={status} type="text" />}
            </div>
            <div>
                {!editMode &&
                <span onDoubleClick={activateEdutMode}>{props.status || '--------'}</span>}
            </div>
        </div>
        
    )
}
export default StatusProfile