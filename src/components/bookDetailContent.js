import React from 'react'
import { connect } from 'react-redux'
import { IMG_BASE_URL } from '../constants/api';
import { Button, List } from 'antd-mobile';
import history from '../router/history';
import { SUCCESS_GET_CHAPTER_LIST } from '../constants/actionTypes';
import ChapterList from './chapterList';
//翻页下标
let idx = 0

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
    //console.log(IMG_BASE_URL + curUrl)
    return IMG_BASE_URL + curUrl;
}

const onClickStartRead = () => {
    //console.log('start read')
    history.push({
        pathname: '/read'
    })
}

const BookDetailContent = ({ bookDetail, bookChaptersObj }) => {
    const styles = {
        bookDetail: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            height: '100%'
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
                    onClick={() => onClickStartRead()}>开始阅读</Button>
                <div>
                    {bookChaptersObj.type === SUCCESS_GET_CHAPTER_LIST ?
                        <ChapterList 
                            chapters={bookChaptersObj.bookChaptersObj.chapters} /> :
                        <div/>
                    }
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    bookChaptersObj: state.bookChaptersObj
})

export default connect(mapStateToProps, null)(BookDetailContent)