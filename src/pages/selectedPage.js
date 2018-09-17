import React from 'react'
import {SearchBar, NavBar} from 'antd-mobile'
import history from '../router/history';
import { setSearchTextAction } from '../actions/setSearchTextAction';
import { connect } from 'react-redux'
import { searchBook } from '../actions/searchBookAction'
const SelectedPage = ({searchText, setSearchText, searchBook}) => {
    return (
        <div>
            <NavBar>搜索书名或作者</NavBar>
            <SearchBar
                value={searchText}
                placeholder="Search"
                onSubmit={(value) => {
                    //当从键盘输入的时候
                    //console.log(value)
                    searchBook(value)
                    history.push({
                        pathname: '/search'
                    })
                }}
                onClear={(value) => setSearchText(value)}
                //onFocus={() => console.log('onFocus')}
                //onBlur={() => console.log('onBlur')}
                onCancel={() => setSearchText('')}
                showCancelButton
                onChange={(value) => setSearchText(value)}
            />
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    setSearchText: text => {
        dispatch(setSearchTextAction(text))
    },
    searchBook: text => {
        dispatch(searchBook(text))
    }
})

const mapStateToProps = state => ({
    searchText: state.searchText,
})


export default connect(mapStateToProps, mapDispatchToProps)(SelectedPage)