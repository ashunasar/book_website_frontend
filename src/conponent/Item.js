import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Book from "./Book";
import Content from "./Content";
import { useHistory } from "react-router-dom";
import Api from "../utils/api_config";

function Item() {
  const params = useParams();

  let history = useHistory();
  const [book, setBook] = useState();

  useEffect(() => {
    async function getBook() {
      try {
        const response = await Api.get(`/book/${params.id}`);

        setBook(response.data.book);
      } catch (error) {
        alert("Pleaes login first");
        history.push("/login");
      }
    }
    getBook();
  }, [history, params.id]);

  if (book === undefined) {
    return (
      <>
        <h1 className='loading'>Still loading...</h1>
      </>
    );
  } else {
    return (
      <>
        <Book
          book={book.title}
          images={`http://localhost:8000/uploads/${book.cover}`}
          Author={book.author}
          Available={book.quantity}
          Price={book.marketPrice}
          key={book._id}
          url={`/cart/${params.id}`}
        />
        <Content title='Recent Book' />
      </>
    );
  }
}

export { Item };
