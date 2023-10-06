import Link from 'next/link'
import React from 'react'
import { buttonType } from './buttonSize'

const LinkButton = ({
    title,
    href = "#",
    className = "",
    variant="primary",
    toggle,
    toggleTarget,
    iconName
 }) => {
    return (
        <Link
            href={href}
            className={`theme-btn ${className} ${buttonType(variant)}`}
            data-bs-toggle={toggle && toggle}
            data-bs-target={toggleTarget}
        >
           {iconName && <i className={`${iconName}`}></i>}
            {title}
        </Link>
    )
}

export default LinkButton