import React from 'react'
import './sidebar-option.styles.css'

const SidebarOption = ({title, Icon}) => {
    return (
        <div className="sidebarOption">
            {Icon && <Icon className="sidebarOption-icon" />}
            { Icon ? <h4>{title}</h4> : <p>{title}</p>}

            
        </div>
    )
}

export default SidebarOption
