import React, { PureComponent } from 'react'
import { Button, List } from 'antd-mobile';
import history from '../router/history';
import { clickChapter } from '../actions/getBookChapterListAction'
import { connect } from 'react-redux'
import { getCurrentChapterContent } from '../actions/getCurrentChapterContentAction'
class ChapterList extends PureComponent {
    constructor(props) {
        super(props)
        this.chapters = this.props.chapters
        this.length = this.chapters.length
        this.clickChapter = this.props.clickChapter
        this.getCurrentChapterContent = this.props.getCurrentChapterContent
        this.state = {
            idx: 0
        }
    }

    onClickChapter = (currentChapterNum, chapterLink) => {
        this.clickChapter(currentChapterNum)//在chapterObj中设置当前书籍的阅读状态: reading|start
        this.getCurrentChapterContent(chapterLink)
        history.push({
            pathname: "/read"
        })
    }

    //点击下一页触发的函数
    onClickPre = () => {
        if (this.state.idx == 0) {
            alert("前面没有内容!")
            return
        }
        this.setState({
            idx: this.state.idx - 1
        })
    }
    //点击上一页触发的函数
    onCLickNext = () => {
        if (this.state.idx == (Math.ceil(this.length / 10) - 1)) {
            alert("后面没有内容了!")
            return
        }
        this.setState({
            idx: this.state.idx + 1
        })
    }

    //点击首页
    onClickFirstPage = () => {
        this.setState({
            idx: 0
        })
    }

    //点击末页
    onClickLastPage = () => {
        this.setState({
            idx: Math.ceil(this.length / 10) - 1
        })
    }

    render() {
        //console.log(this.chapters)
        const Item = List.Item
        let idx = this.state.idx

        const styles = {
            chapterPage: {
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'baseline',
                marginTop: '15px',
                color: 'rebeccapurple'
            },
            prePage: {
                padding: '10px'
            },
            nextPage: {
                padding: '10px'
            },
            firstPage: {
                padding: '10px',
                fontSize: '14px',
                color: 'aqua'
            },
            lastPage: {
                padding: '10px',
                fontSize: '14px',
                color: 'aqua'
            },
        }

        return (
            <div style={{
                marginBottom: '40px'
            }}>
                <List renderHeader={() => '章节列表'}>
                    {this.chapters.slice(idx, (idx + 1) * 10).map((value, index) => {
                        return <Item key={index} onClick={() => this.onClickChapter(index, value.link)}>{value.title}</Item>
                    })}
                </List>
                <div className="chapterPage" style={styles.chapterPage}>
                                <a onClick={this.onClickFirstPage} style={styles.firstPage}>首页</a>
                                <a onClick={this.onClickPre} style={styles.prePage}>上一页</a>
                                <a onClick={this.onCLickNext} style={styles.nextPage}>下一页</a>
                                <a onClick={this.onClickLastPage} style={styles.lastPage}>末页</a>
                            </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    clickChapter: currentChapterNum => dispatch(clickChapter(currentChapterNum)),
    getCurrentChapterContent: chapterLink => dispatch(getCurrentChapterContent(chapterLink))
})

export default connect(null, mapDispatchToProps)(ChapterList)