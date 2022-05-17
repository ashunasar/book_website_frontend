import React from "react";
import { Link } from "react-router-dom";
function Book(props) {
  return (
    <>
      <section className='book '>
        <div className='container-fluid book-container '>
          <div className='row'>
            <div className='col-xl-4 col-lg-5 col-md-6 margin'>
              <img src={props.images} alt='' className='w-75' />
            </div>
            <div className='col-lg-5 col-md-6 margin'>
              <div className='card-body'>
                <h5 className='card-title font-28 fw-medium'>{props.book}</h5>
                <h5 className='author font-22'>Writer Name - {props.Author}</h5>
                <h5 className='available font-20'>
                  Available - ({props.Available})
                </h5>
                <div className='card-text'>
                  <h5 className='dark-blue font-26'>₹0</h5>
                  <h5 className='grey-75 line-through font-22'>
                    ₹{props.Price}
                  </h5>
                </div>
              </div>

              <Link className='cart-btn dark-blue-75 me-4 ' to={props.url}>
                Add TO CART
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Book;
