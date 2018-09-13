import React, { PureComponent } from 'react'

class TabBar extends PureComponent {
    render() {
        return (
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'nowrap',
                justifyContent: 'space-around',
                textAlign: 'center'
            }}>
                {this.props.children}
            </div>    
        )
    }
}

export default TabBar

