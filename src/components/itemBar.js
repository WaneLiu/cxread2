import React, { PureComponent } from 'react'
import history from '../router/history';

class ItemBar extends PureComponent {

    onClickItem = (name) => {
        history.push(`/${name}`)
    }

    render() {
        return (
            <div onClick={() => this.onClickItem(this.props.name)}>{this.props.text}</div>
        )
    }
}

export default ItemBar