//import logo from './logo.svg';
import './index.css';
import React,{Component} from 'react'
import { books } from "./books";
import Book from "./book";

class BookList extends Component{
  render(){
    return( 
    <div className="booklist">
        {books.map((book) => {
          return <Book key={book.id} book ={book}/>
        })}
    </div> 
    )
  }
}
export default BookList;
