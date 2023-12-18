import { useEffect } from 'react';
import classes from './BookList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import fetchAllBooks from '../../store/reducer/BookListCreated';
import BookLisItem from './BookLisItem';

const BookList = () => {

    const dispatch = useDispatch();

    const { books, booksError, bookListStatus } = useSelector((state) => state.bookList);

    useEffect(() => {
        dispatch(fetchAllBooks());
    }, []);

    const cases = {
        pending: 'loading...',
        // fulfilled: <BookLisItem books={books} anAddToCart={(id) => console.log('hello', id)} />,
        fulfilled: books.map((book) =>( <BookLisItem key={`book-${book.id}`} book={book} onAddToCart={(id) => console.log('hello', id)} />)),
        rejected: booksError,
    }

    console.log(cases['pending']);

    return (
        <ul>
            {cases[bookListStatus]}
        </ul>
    );
}

export default BookList;
