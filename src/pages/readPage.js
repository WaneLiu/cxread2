import React from 'react'
import { connect } from 'react-redux'
import { SUCCESS_GET_CUR_CHAPTER_CONTENT } from '../constants/actionTypes'
import Loading from '../components/loading'
import { getCurrentChapterContent } from '../actions/getCurrentChapterContentAction';
import { clickChapter } from '../actions/getBookChapterListAction';
import history from '../router/history';
const ReadPage = ({ bookChaptersObj, chapterContent, getCurrentChapterContent, 
    readHistory, updateCurrentChapterNum }) => {
    //console.log(chapterContent)
    const styles = {
        chapterContainer: {
            backgroundColor: '#755927',
        },
        chapterContent: {
            maxWidth: '100%',
            marginLeft: '10%',
            marginRight: '10%',
            lineHeight: '20px'
        },
        preNextChapter: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'baseline',
            marginTop: '15px',
        },
        preChapter: {
            marginRight: '8px'
        },
        nextChapter: {
            marginLeft: '8px'
        },
        goBack: {
            textAlign: 'center'
        }
    }
    return (
        
        <div style={styles.chapterContainer}>
            {chapterContent.type === SUCCESS_GET_CUR_CHAPTER_CONTENT ?
                <div>
                    <div>{bookChaptersObj.bookChaptersObj.chapters[bookChaptersObj.currentChapterNum].title}</div>
                    <div style={styles.chapterContent} dangerouslySetInnerHTML={{__html: 
                        chapterContent.chapterContent.body.replace(/\n/gm, '<br />')}}/>    
                </div>
                : <Loading title="加载中..." />
            }
            <div className="pre_next" style={styles.preNextChapter}>
                <a className="pre_chapter" style={styles.preChapter} onClick={() => onClickPre(bookChaptersObj, 
                    getCurrentChapterContent, readHistory, updateCurrentChapterNum)}>上一章</a>
                <a className="next_chapter" style={styles.nextChapter} onClick={() => onClickNext(bookChaptersObj, 
                    getCurrentChapterContent, readHistory, updateCurrentChapterNum)}>下一章</a>
                
            </div>
            <div style={styles.goBack} onClick={goBackShelves}>返回</div>
        </div>
    )
}
const goBackShelves = () => {
    history.push({
        pathname: '/bookshelves'
    })
}

/**
 * 修改currentChapterNum, chapterContent
 * todo: modify currentChapterNum,把currentChapterNum 从 bookChaptersObj中取出，放在最外面子目录
 */
const onClickPre = (bookChaptersObj, getCurrentChapterContent, readHistory, updateCurrentChapterNum) => {
    console.log('click pre')
    //console.log(JSON.stringify(bookChaptersObj))
    if (JSON.stringify(bookChaptersObj) === '{}') {
        console.log(123)
    }
    else if (bookChaptersObj.currentChapterNum === 0) {
        alert('当前已是第一章')
    } else {
        //修改currentChapterNum, chapterContent
        let curChapterNum = bookChaptersObj.currentChapterNum
        let chapters =  bookChaptersObj.bookChaptersObj.chapters
        getCurrentChapterContent(chapters[curChapterNum- 1].link)
        updateCurrentChapterNum(curChapterNum - 1)
    }
}

const onClickNext = (bookChaptersObj, getCurrentChapterContent, readHistory, updateCurrentChapterNum) => {
    if (JSON.stringify(bookChaptersObj) === '{}') {
        //todo
    }
    else if (bookChaptersObj.currentChapterNum === bookChaptersObj.bookChaptersObj.chapters.length - 1) {
        alert('当前已是最后一章')
    } else {
        let curChapterNum = bookChaptersObj.currentChapterNum
        let chapters =  bookChaptersObj.bookChaptersObj.chapters
        getCurrentChapterContent(chapters[curChapterNum + 1].link)
        updateCurrentChapterNum(curChapterNum + 1)
    }
}


const mapStateToProps = state => ({
    bookChaptersObj: state.bookChaptersObj,
    chapterContent: state.chapterContent,
    readHistory: state.readHistory
})

const mapDispatchToProps = dispatch => ({
    getCurrentChapterContent: chapterLink => dispatch(getCurrentChapterContent(chapterLink)),
    updateCurrentChapterNum: currentNum => dispatch(clickChapter(currentNum))
})

export default connect(mapStateToProps, mapDispatchToProps)(ReadPage)