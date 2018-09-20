import React from 'react'
import { connect } from 'react-redux'
import { IMG_BASE_URL } from '../constants/api';
import { Button } from 'antd-mobile';
import history from '../router/history';
import { getBookChapterList } from '../actions/getBookChapterListAction';

const getWordCount = (count) => {
    return count > 10000 ? (count / 10000).toFixed(2) + '丸子' : count + '字'
}

const formatDate = (date) => {
    return date.split('T')[0]
}

const getFullUrl = (curUrl) => {
    if(curUrl.indexOf(IMG_BASE_URL)!=-1){
        return curUrl;
    }
    console.log(IMG_BASE_URL + curUrl)
    return IMG_BASE_URL + curUrl;
}

const onClickStartRead = (bookId, getChapterList) => {
    console.log('start read')
    //todo 异步获取书籍章节列表
    getChapterList(bookId)
    history.push({
        pathname: '/read'
    })
}

const BookDetailContent = ({ bookDetail, getChapterList }) => {

    const styles = {
        bookDetail: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        },
        coverImg: {
            width: '70%',
            height: '60%'
        }
    }

    return (
        <div style={styles.bookDetail}>
            <img src={getFullUrl(bookDetail.cover)} style={styles.coverImg} />
            <div>
                <div>{bookDetail.title}</div>
                <div>类别：{bookDetail.majorCate}</div>
                <div>紫薯: {getWordCount(bookDetail.wordCount)}</div>
                <div>最新更新时间: {formatDate(bookDetail.updated)}</div>
                <Button type="ghost" size="small" 
                    onClick={onClickStartRead(bookDetail._id, getChapterList)}>开始阅读</Button>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    getChapterList: bookId => dispatch(getBookChapterList(bookId))
})

export default connect(null, mapDispatchToProps)(BookDetailContent)