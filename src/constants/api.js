/**
 * 数据获取接口
 */

export const API_BASE_URL = './api';//http://api.zhuishushenqi.com'
export const IMG_BASE_URL = 'http://statics.zhuishushenqi.com';
export const API_CHAPTER_URL = './chapter/';//http://chapter2.zhuishushenqi.com/chapter/
export const WEB_BASE_URL='./spread';

export const api = {
    //根据作者或者书名进行书籍查询
    SEARCH_BOOKS: API_BASE_URL + '/book/fuzzy-search',
    /**
     * @param bookId
     * 根据bookId返回查询书籍详情的full url
     */
    BOOK_DETAIL: (bookId) => {
        return API_BASE_URL + '/book/' + bookId
    },
    /**
     * @param bookId
     * 根据bookId返回查询书籍章节列表的full url
     */
    READ_BOOK_CHAPTER_LIST: (bookId) => {
        return API_BASE_URL + '/mix-atoc/' + bookId + '?view=chapters'
    },
    /**
     * @param chapterUrl
     */
    READ_BOOK_CHAPTER_CONTENT_URL: chapterUrl => {
        return API_CHAPTER_URL + chapterUrl
    }
}

