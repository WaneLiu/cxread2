import React from 'react'
import { WingBlank, WhiteSpace, NavBar } from 'antd-mobile'
import { connect } from 'react-redux'
import { START_GET_CHAPTER_LIST, SUCCESS_GET_CHAPTER_LIST, 
    FAIL_GET_CHAPTER_LIST } from '../constants/actionTypes'
import Loading from '../components/loading';
import BookDetailContent from '../components/bookDetailContent';

const renderBookDetail = (bookChaptersObj, bookDetail) => {
    switch (bookChaptersObj.type) {
        case START_GET_CHAPTER_LIST:
            return <Loading title="章节列表获取中" />
        case SUCCESS_GET_CHAPTER_LIST:
            <BookDetailContent bookDetail={bookDetail} 
                bookChapterList={bookChaptersObj.chapters} />
        case FAIL_GET_CHAPTER_LIST:
            return <div>不好意思,当前小说没有入库</div>
        default:
            return <div></div>

    }
    console.log(JSON.stringify(bookChaptersObj))
    return <div></div>
    
}

const BookDetail = ({ bookChaptersObj, bookDetail }) => {
    return (
        <WingBlank size='lg'>
            <WhiteSpace size='lg' />
            <NavBar>书籍详情</NavBar>
            <WhiteSpace size='lg' />
            {/* {renderBookDetail(bookChaptersObj, bookDetail)} */}
            <WhiteSpace size='lg' />
        </WingBlank>
    )
}

const mapStateToProps = state => ({
    bookChaptersObj: state.bookChaptersObj,
    bookDetail: state.bookDetail
})

export default connect(mapStateToProps)(BookDetail)