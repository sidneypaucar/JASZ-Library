import Layout from '../../components/Layout/Layout';
import BookCards from '../../components/BookCards/BookCards';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'
import RandomBook from '../../components/RandomBook/RandomBook';
import BookReviews from '../../components/BookReviews/BookReviews';
import TextField from '@mui/material/TextField';
import { useState, useEffect } from 'react';


import './Home.css';

const Home = (props) => {
	const {user, query, searchBooks} = props
	const [message, setMessage] = useState("Interested in Contributing?");

	useEffect(() => {
		if(user) {
			setMessage("Welcome Back!");
			return;
		}	
	}, [user])
	

	return (
		<Layout user={ user ? (user.username ? user.username : user) : ""}>
			<div className="home-page">
				<h1 className="home-header">Welcome to the Library</h1>
				<h2 className="recent-favorites">Recent Additions</h2>
        <BookCards />

        <div className="hidden-container">
	      			<h2 className="join-header-visible">{message}</h2>
			    	  <Link className={user ? "sign-up-redirect-hidden" : "sign-up-redirect-visible"} to='/sign-up'>
			     		<Button className='join-button' variant='outlined'>Join us!</Button>
			    	  </Link>
        </div>
        
        <div className='spotlight-search'>
        <div className='book-spotlight'>
        <RandomBook />
        </div>

        <div className='library-search'>
        <h5 className='search-addon'>not what you're looking for?</h5>
				<h3 className="recent-favorites">Search the Library</h3>
				<div className="search-items">
					<TextField id="outlined-search" 
						label="Search Books" 
						type="search" 
						placeholder="Search Books" 
						multiline
						value={query} 
						onChange={(ev) => searchBooks(ev.target.value)}
					/>
					<Link className="search-link" to="/search-results">
						<Button className='search-button' variant='outlined'>Search</Button>
					</Link>
				</div>
        </div>
        </div>

        <BookReviews />
		        
			</div>
		</Layout>
	)
}

export default Home