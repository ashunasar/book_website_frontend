import React, { useEffect, useState } from "react";
import Card from "./Card";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Api from "../utils/api_config";
import { useParams } from "react-router-dom";

function SearchContent(props) {
  const [books, setBooks] = useState([]);
  const params = useParams();
  useEffect(() => {
    async function getBooks() {
      try {
        const response = await Api.get(`/search/${params.name}`);

        setBooks(response.data.books);
      } catch (error) {
        console.log(error);
      }
    }
    getBooks();
  }, [params.name]);
  return (
    <>
      <div className='recent-book'>
        <div className=''>
          <h1 className='text-center'>{props.title}</h1>
          <div className='content_card'>
            <div className='container-fluid'>
              <div className='row justify-content-center'>
                {books.length === 0 ? (
                  <h2 className='text-center'>No Result Found</h2>
                ) : (
                  ""
                )}
                {books.map((val, index) => {
                  return (
                    <Card
                      book={val.title}
                      images={`http://localhost:8000/uploads/${val.cover}`}
                      link={`/item/${val._id}`}
                      Author={val.author}
                      Available={val.quantity}
                      Price={val.marketPrice}
                      key={val._id}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchContent;
