import React, {useState} from 'react'

const InputField = (props) => {

    const [isActive, setActive] = useState(true);
    const handleToggle = () => {
        setActive(!isActive);
    }
    const [isError, setError] = useState(props.error);

    return (
        <div>
        <input className={
            "input-class"+(isActive&&props.value!=="" ? " input-class--active" : "")+(isError ? " input-class--error" : "")
            } 
            type={props.type} 
            placeholder={props.placeholder} 
            value={props.value} 
            onChange={props.onChange}
            style={{
                width:(props.width),
                margin:(props.margin),
                float:(props.float),
            }}>
            </input>
        </div>
        )
}

// input-class--error

export default InputField
