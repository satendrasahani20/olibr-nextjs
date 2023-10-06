import React from 'react'

const InputField = ({
    placeholder="",
    name="",
    type="text",
    iconClass
}) => {
    return (
        <>
            {iconClass && <span className={`icon ${iconClass}`}></span>}
            <input type={type} name={name} placeholder={placeholder} />
        </>
    )
}

export default InputField