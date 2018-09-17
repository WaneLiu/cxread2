/**
 * 数据获取接口
 */

const API_BASE_URL = './api';//http://api.zhuishushenqi.com'
const IMG_BASE_URL = 'http://statics.zhuishushenqi.com';
const API_CHAPTER_URL = './chapter/';//http://chapter2.zhuishushenqi.com/chapter/
const WEB_BASE_URL='./spread';

export const api = {
    //根据作者或者书名进行书籍查询
    SEARCH_BOOKS: API_BASE_URL + '/book/fuzzy-search',
}

