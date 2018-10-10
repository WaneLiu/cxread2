import React, { PureComponent } from 'react'
/**
 * 与itemBar组件组合使用
 */
class TabBar extends PureComponent {
    render() {
        return (
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'nowrap',
                justifyContent: 'space-around',
                textAlign: 'center',
                flex: 1
            }}>
                {this.props.children}
            </div>    
        )
    }
}

export default TabBar

