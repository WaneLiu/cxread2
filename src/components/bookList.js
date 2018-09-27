/**
 * 展示搜索结果
 */
import React  from 'react'
import { Grid } from 'antd-mobile';
import { IMG_BASE_URL } from '../constants/api';
import history from '../router/history'
import { getBookDetail } from '../actions/getBookDetailAction'
import { connect } from 'react-redux'
import { getBookChapterList } from '../actions/getBookChapterListAction';

const getFullImgUrl = url => {
    if (url.indexOf(IMG_BASE_URL) !== -1) {
        return url
    }
    return IMG_BASE_URL + url
}
/**
 * 
 * @param {*} bookId 
 * 点击book item的时候，要发送异步get bookDetail与bookChapterList的请求
 */
const onClickBookItem = (bookId, getBookDetail, getChapterList) => {
    //console.log(bookId)
    //发送获取bookDetail异步请求
    getBookDetail(bookId)
    getChapterList(bookId)
    history.push({
        pathname: '/bookDetail'
    })
}

const BookList = ({ books, getBookDetail, getChapterList }) => {
    const styles = {
        bookItem: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '5px'
        },
        bookCover: {
            width: 98,
            height: 120,
            border: '1px solid #ebebeb'
        },
        title: {
            color: '#888',
            fontSize: '14px',
            marginTop: '12px',
            marginBottom: '1px'
        }
    }

    return (
        <div>
            <Grid data={books} columnNum={2} 
                    renderItem={item => (
                        <div style={styles.bookItem} onClick={() => onClickBookItem(item._id, getBookDetail, getChapterList)}>
                            <img src={getFullImgUrl(item.cover)} style={styles.bookCover} alt="" />
                            <div style={styles.title}>{item.title}</div>
                        </div>
                    )}
                />
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    getBookDetail: bookId => dispatch(getBookDetail(bookId)),
    getChapterList: bookId => dispatch(getBookChapterList(bookId))
})

export default connect(null, mapDispatchToProps)(BookList)
