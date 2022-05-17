import React from "react";
import img from "../assets/Bookimg.png";
export default function Donate() {
  return (
    <>
      <section
        className='login bg-pri d-grid align-items-center h-100 '
        style={{ paddingBottom: "4rem" }}
      >
        <div className='container-fluid'>
          <div className='row justify-content-center'>
            <div className='col-xl-4 col-md-6 col-10 mt-5'>
              <div className='card mx-auto' style={{ borderRadius: 8 }}>
                <div className='image_frame'>
                  <img
                    src={img}
                    alt='book image'
                    className='img-fluid h-100 w-100'
                    style={{ borderTopLeftRadius: 8, borderTopRightRadius: 8 }}
                  />
                </div>
                <div className='content_card flex-column'>
                  <div className='pt-4 ps-3'>
                    <div className='card-body d-grid gap-3 p-0'>
                      <h5 className='card-title font-21'>
                        The Psychology of Money
                      </h5>
                      <h5 className='author font-18'>
                        Writer Name - J. K. Rowling
                      </h5>
                      <h5 className='available font-16'>Quantity - 5</h5>
                      <div className='card-text'>
                        <h5 className='dark-blue font-26'>$950</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  type='button'
                  className='login-heading bg-dark-brown p-3 text-white font-26 border-0 mx-auto mb-4 mt-5'
                  style={{ width: "90%", borderRadius: 10 }}
                >
                  Donate
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
