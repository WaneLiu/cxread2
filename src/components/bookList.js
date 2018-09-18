/**
 * 展示搜索结果
 */
import React  from 'react'
import { Grid } from 'antd-mobile';
import { api, IMG_BASE_URL } from '../constants/api';
import history from '../router/history'

const getFullImgUrl = url => {
    if (url.indexOf(IMG_BASE_URL) !== -1) {
        return url
    }
    return IMG_BASE_URL + url
}

const onClickBookItem = (bookId) => {
    //console.log(bookId)
    history.push({
        pathname: '/book',
        state: {
            bookId
        }
    })
}

const BookList = ({ books }) => {
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

    return <Grid data={books} columnNum={2} 
                renderItem={item => (
                    <div style={styles.bookItem} onClick={() => onClickBookItem(item._id)}>
                        <img src={getFullImgUrl(item.cover)} style={styles.bookCover} alt="" />
                        <div style={styles.title}>{item.title}</div>
                    </div>
                )}
            />
}

export default BookList
