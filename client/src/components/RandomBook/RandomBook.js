import { useEffect, useState } from "react"
import BookCard from '../BookCard/BookCard.js'
import { getBooks } from '../../services/books';
import './RandomBook.css';

const RandomBook = () => {
	const [randomBooks, setRandomBooks] = useState([]);
	
	const getRandom = (books) => {
		let randomNum = Math.floor(Math.random() * books.length - 1)
		let randomBook = books[randomNum]
		return randomBook
	}

	useEffect(() => {
		const fetchBooks = async () => {
			const books = await getBooks()
			setRandomBooks([getRandom(books), getRandom(books)])	
		}
		fetchBooks();		
	}, [])

	const randomCards = randomBooks.map((book, index) => (
    <div className="random-cards" key={index}>
	    <BookCard
	      key={index}
	      _id={book._id}
	      imgURL={book.imgURL}
	      title={book.title}
	     
	    />
		<p className={`book-${index}`}>{book.title}</p>
     </div>
  ))

	return (
		<div className='random-books'>
			<h2 className="staff-picks">Staff Picks</h2>
    		{randomBooks ? <div className='random-cards-container'>{randomCards}</div> : ""}
    	</div>
	)
}

export default RandomBook