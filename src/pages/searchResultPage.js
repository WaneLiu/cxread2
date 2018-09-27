import React from 'react'
import { connect } from 'react-redux'
import { START_FETCH_SEARCH_RESULT, 
    SUCCESS_FETCH_SEARCH_RESULT, FAIL_FETCH_SEARCH_RESULT} from '../constants/actionTypes'
import Loading from '../components/loading';
import { Card, WingBlank, WhiteSpace, NavBar } from 'antd-mobile'
import BookList from '../components/bookList';

/**
 * 
 * @param {state} searchBookResult 
 * 展示搜索
 */
const renderSearchResult = searchBookResult => {
    //console.log(searchBookResult)
    switch (searchBookResult.type) {
        case START_FETCH_SEARCH_RESULT:
            return <Loading title="加载中..."/>
        case SUCCESS_FETCH_SEARCH_RESULT:
            return (
                <Card>
                    <Card.Header title="相关搜索结果:" 
                        extra={<span>共{searchBookResult.fetchBooks.length}条</span>}
                    />
                    <Card.Body>
                        <BookList books={searchBookResult.fetchBooks} />
                    </Card.Body>
                </Card>
            )
        case FAIL_FETCH_SEARCH_RESULT:
            return <div>{searchBookResult.error}</div>
        default:
            return <div></div>
    }
}

const SearchResultPage = ({ searchBookResult }) => {
    //console.log(searchBookResult)
    return (
        <div style={{
            marginBottom: '140px'
        }}>
            <WingBlank size='lg'>
                <WhiteSpace size='lg' />
                <NavBar>搜索结果</NavBar>
                <WhiteSpace size='lg' />
                {renderSearchResult(searchBookResult)}
                <WhiteSpace size='lg' />
            </WingBlank>
        </div>
    )
}



const mapStateToProps = state => ({
    searchBookResult: state.searchBookResult
})

export default connect(mapStateToProps, null)(SearchResultPage)

