import React from "react";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";

export default function Card(props) {
  return (
    <>
      <div className='col-xl-3 col-md-5 mt-5'>
        <div className='card mx-auto'>
          <div className='image_frame'>
            <Link to={props.link}>
              <img
                src={props.images}
                alt='book image'
                className='img-fluid h-100 w-100'
              />
            </Link>
          </div>
          <div className='content_card flex-column'>
            <div className='p-3'>
              <h5 className='card-title'>{props.book}</h5>
              <h5 className='author'>Writer Name - {props.Author}</h5>
              <h5 className='available'>Available - ({props.Available})</h5>
              <div className='card-text'>
                <h5 className='dark-blue'>₹0</h5>
                <h5 className='grey-75 line-through'>₹{props.Price}</h5>
                <h5 className='green line-through'>100% off</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
