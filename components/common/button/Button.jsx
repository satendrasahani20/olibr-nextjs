
import React from 'react'
import { buttonType } from './buttonSize'

const Button = ({
    title ="",
    onClick,
    className = "",
    variant="primary",
    dataDismiss,
    type = "button",
    iconName
}) => {
    return (
            <button
                type={type}
                className={`theme-btn ${className} ${buttonType(variant)}`}
                onClick={onClick && onClick}
                data-bs-dismiss={dataDismiss && dataDismiss}
            >
                {iconName && <i className={iconName}></i>}
                {title}
            </button>
    )
}

export default Button