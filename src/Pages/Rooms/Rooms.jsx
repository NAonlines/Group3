import React from 'react';
import images from '../../Assets/dataimg';
import '../Rooms/Rooms.css';

function Roomss() {
    return (
        <div class="row g-2 text-center">
            <div className="col-12">
                <div className="chinhsua">
                    <div className="row">
                        <div class="col-md-7">
                            <h1 class="tieude">
                                HOSPITAL ROOM SERVICES </h1>
                            <h3 class='container text-start'>
                                Laundry </h3>
                            <p className='container text-start'>
                                Sheets and pillowcases will be changed every five days or when soiled. Fresh towels and face
                                clothes will be provided daily. You may bring your own pillow and blanket from home, if you
                                wish.
                            </p>
                            <h3 className='container text-start'>
                                Medical staff available 24/24 Hours a day</h3>
                            <p className='container text-start' >
                                The hospital implements a comprehensive care regime: Nurses serve 24/24
                                Hours according to doctor's orders from infusions, injections, medications,
                                serving meals at the bed to mobility support, hygiene ... When needed, just
                                press the nursing call button, all your care needs will be met.
                            </p>
                            <h3 className="container text-start">
                                Hospital security
                            </h3>
                            <p class='container text-start'>
                                CHA Cambridge Hospital is responsible for ensuring your safety when visiting
                                and being treated at the hospital. CCTV system works continuously,
                                supporting security work in the hospital. Security guards are available
                                24/24 Hours a day. If you have a request, please contact the hospital's
                                security department by pressing the "0" key on the landline phone for
                                assistance.
                            </p>
                        </div>
                        <div class="col-md-4">
                            <img className='phongbenh' src={images.phongbenh} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Roomss