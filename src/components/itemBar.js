import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
//import history from '../router/history';
/**
 * 与tabBar组件组合使用
 */
class ItemBar extends PureComponent {

    // onClickItem = (name) => {
    //     history.push(`/${name}`)
    // }

    //<div onClick={() => this.onClickItem(this.props.name)}>{this.props.text}</div>

    render() {
        return (
            <Link to={"/"+this.props.name}>{this.props.text}</Link>
        )
    }
}

export default ItemBar