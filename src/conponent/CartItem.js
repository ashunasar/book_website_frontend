import React, { useState, useContext } from "react";
import ItemContext from "../context/item_context";

function CartItem(props) {
  const items = useContext(ItemContext);

  const [num, setNum] = useState(1);
  const plus = () => {
    items.updateItemCount(num + 1);
    setNum(num + 1);
  };
  const minus = () => {
    if (num === 1) {
      alert("max decrement reached");
    } else {
      setNum(num - 1);
      items.updateItemCount(num - 1);
    }
  };

  return (
    <>
      <div className='book-container bg-white'>
        <div className='row'>
          <div className='col-xl-5 col-lg-12 col-md-12 margin'>
            <img src={props.images} alt='' className='w-100 h-100' />
          </div>
          <div className='col-xl-6 col-lg-12 col-md-12 margin'>
            <div className='card-body d-grid gap-3 p-0'>
              <h5 className='card-title font-21'>{props.book}</h5>
              <h5 className='author font-18'>{props.Author}</h5>
              <h5 className='available font-16'>
                Available - ({props.Available})
              </h5>
              <div className='card-text'>
                <h5 className='dark-blue font-26'>₹0</h5>
                <h5 className='grey-75 line-through font-22'>₹{props.Price}</h5>
              </div>
            </div>
            <div className='d-flex mt-5'>
              <button
                type='button'
                className='card p-4 rounded-circle'
                onClick={minus}
              >
                <i className='fa-solid fa-minus'></i>
              </button>
              <button
                type='button'
                className='card py-1 px-5 fs-3 mx-3 text-dark lh-lg'
              >
                {num}
              </button>
              <button
                type='button'
                className='card p-4 rounded-circle'
                onClick={plus}
              >
                <i className='fa-solid fa-plus'></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartItem;
