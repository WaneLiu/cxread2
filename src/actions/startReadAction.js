import { READ_BOOK_START, READ_BOOK_MIDDLE } from '../constants/actionTypes'

const startRead = () => ({
    readStatus: READ_BOOK_MIDDLE
})

const clickChapter = () => ({
    readStatus: READ_BOOK_MIDDLE
})