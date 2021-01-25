const Book = (props) =>{
    const {title,author,img} = props.book;
    return( 
      <div className="book">
        <img src={img}></img>
        <h1>{title}</h1>
        <h4>{author}</h4>
      </div> 
      )
    }

    export default Book;