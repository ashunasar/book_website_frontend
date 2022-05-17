import React, { useState, useEffect, useContext } from "react";
import CartItem from "./CartItem";
import PlaceOrder from "./PlaceOrder";
import PriceDetail from "./PriceDetail";
import { useParams } from "react-router-dom";
import ItemContext from "../context/item_context";
import { useHistory } from "react-router-dom";
import Api from "../utils/api_config";

function Cart() {
  const params = useParams();
  const items = useContext(ItemContext);
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
        <section className='cartSection'>
          <div className='container-fluid container-padding'>
            <div className='row justify-content-between'>
              <div className='col-xl-7 col-lg-6 col-md-9 order margin-auto'>
                <CartItem
                  book={book.title}
                  images={`http://localhost:8000/uploads/${book.cover}`}
                  Author={book.author}
                  Available={book.quantity}
                  Price={book.marketPrice}
                  key={book._id}
                  url={`/cart/${params.id}`}
                />

                <PlaceOrder quantity={items.itemCount} bookid={book._id} />
              </div>
              <div className='col-xl-4 col-lg-5 col-md-6 mx-md-auto '>
                <PriceDetail price={book.marketPrice} items={1} />
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Cart;
