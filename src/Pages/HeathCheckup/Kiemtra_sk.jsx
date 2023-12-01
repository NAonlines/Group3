import React from 'react'
import './Kiemtra_sk.css'
import images from '../../Assets/dataimg'
function Kiemtra_sk() {
  return (
    <div className=' kiemtrask container mt-5 mb-5'>
      <h2 className='bg-success-subtle mb-5 mt-5'>Health check service</h2>

      <div className="card mb-3" >
        <div className="row g-0">
          <div className="col-md-8">
            <img src={images.ksc1} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-4" >
            <div className="card-body" >
              <h4 className="card-title text-info tieude" > Advanced health check</h4 >
              <p className="card-text" > The 2023 Premium general health examination package provides a comprehensive examination and screening solution for some cancer diseases such as stomach, colon... with senior doctors and experts, thereby providing direction for developing a health care plan..</p >

            </div >

          </div >
        </div >
      </div >

      <div className="card mb-3" >
        <div className="row g-0" >
          <div className="col-md-4" >
            <img src={images.ksc2} className="img-fluid rounded-start" alt="..." />
          </div >
          <div className="col-md-8" >
            <div className="card-body" >
              <h4 className="card-title text-success tieude" > health promotion package</h4 >
              <p className="card-text" > The 2023 Premium general health examination package provides a comprehensive examination and screening solution for some cancer diseases such as stomach, colon... with senior doctors and experts, thereby providing direction for developing a health care plan..</p >

            </div >
          </div >

        </div >
      </div >

      <div className="card mb-3" >
        <div className="row g-0" >
          <div className="col-md-4" >
            <img src={images.ksc3} className="img-fluid rounded-start" alt="..." />
          </div >
          <div className="col-md-8" >
            <div className="card-body" >
              <h4 className="card-title text-success tieude" > Comprehensive general health examination</h4 >
              <p className="card-text text-body-secondary" > The 2023 Premium general health examination package provides a comprehensive examination and screening solution for some cancer diseases such as stomach, colon... with senior doctors and experts, thereby providing direction for developing a health care plan..</p >

            </div >
          </div >

        </div >
      </div >

      <div className="card mb-3" >
        <div className="row g-0" >
          <div className="col-md-4" >
            <img src={images.ksc4} className="img-fluid rounded-start" alt="..." />
          </div >
          <div className="col-md-8" >
            <div className="card-body" >
              <h4 className="card-title text-success tieude" > Standard general health check for men</h4 >
              <p className="card-text" > The 2023 Premium general health examination package provides a comprehensive examination and screening solution for some cancer diseases such as stomach, colon... with senior doctors and experts, thereby providing direction for developing a health care plan..</p >

            </div >
          </div >

        </div >
      </div >

      <div className="card mb-3" >
        <div className="row g-0" >
          <div className="col-md-4" >
            <img src={images.ksc5} className="img-fluid rounded-start" alt="..." />
          </div >
          <div className="col-md-8" >
            <div className="card-body" >
              <h4 className="card-title text-success tieude" > Standard general health check for women</h4 >
              <p className="card-text" > The 2023 Premium general health examination package provides a comprehensive examination and screening solution for some cancer diseases such as stomach, colon... with senior doctors and experts, thereby providing direction for developing a health care plan..</p >

            </div >
          </div >

        </div >
      </div >
    </div >
  )
}

export default Kiemtra_sk
