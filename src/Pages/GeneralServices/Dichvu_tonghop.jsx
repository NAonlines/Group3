import React from 'react'
import './Dichvu_tonghop.css'
import images from '../../Assets/dataimg'
function Dichvu_tonghop() {
  return (
    <div className='container'>
        <h1 className='alert alert-dark text-center'>GENERAL SERVICES</h1>
        <div className="row">
      <div class="card col-md-4" >
  <img src={images.dvth1} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title  text-warning">Anesthesia and resuscitation</h5>
    <p class="card-text">Anesthesia is a specialty that helps patients lose their sense of pain before surgery, cares for patients during surgery, and awakens and ensures patients feel healthy and pain-free after surgery..</p>
    <a href="#" class="btn btn-primary">see more</a>
  </div>
</div>
<div class="card col-md-4" >
  <img src={images.dvth2} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title text-warning">interventional cardiology </h5>
    <p class="card-text">Cardiologists work closely with other specialties to provide patients with diagnostic, treatment, rehabilitation and prevention services for most cardiovascular diseases..</p>
    <a href="#" class="btn btn-primary">see more</a>
  </div>
</div>
<div class="card col-md-4" >
  <img src={images.dvth3} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title text-warning">abdominal surgery</h5>
    <p class="card-text">Gastrointestinal diseases are very common in Vietnam and the Department of Abdominal Surgery in collaboration with the Gastroenterology - Hepatobiliary department provides the most optimal medical .</p>
    <a href="#" class="btn btn-primary">see more</a>
  </div>
</div>
</div>
<div className="row">
<div class="card col-md-4" >
  <img src={images.dvth4} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title text-warning">newborn baby</h5>
    <p class="card-text">Every year, the hospital receives nearly 2,000 pediatric inpatients and more than 35,000 outpatient cases. We are also proud to provide health care for more than 2,000 babies born each year at the Hospita.</p>
    <a href="#" class="btn btn-primary">see more</a>
  </div>
</div>
<div class="card col-md-4" >
  <img src={images.dvth5} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title text-warning">Neurosurgery</h5>
    <p class="card-text">The Department of Neurosurgery specializes in treating diseases of the central nervous system (brain and spinal cord) as well as disorders of the peripheral nervous system (nerves)..</p>
    <a href="#" class="btn btn-primary">see more</a>
  </div>
</div>
<div class="card col-md-4" >
  <img src={images.dvth6} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title text-warning">maternity</h5>
    <p class="card-text">Our Obstetrics Department is trusted by many women and their families to have a perfect pregnancy and birth.The hospital has a comprehensive maternity and birth program for families to choose from.</p>
    <a href="#" class="btn btn-primary">see more</a>
  </div>
</div>
</div>
<div class="d-grid gap-2 col-6 mx-auto">
  <button class="alert alert-primary mt-2 fs-3 xemtatca" type="button">see all</button>
  
</div>
    </div>
  )
}

export default Dichvu_tonghop
