import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PaymentPage = () => {
  const { state } = useLocation();
  const { registrationData = {}, price } = state || {};
  const [departmentName, setDepartmentName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!state || !registrationData) {
      navigate("/registration");
    }
    return () => {
      setDepartmentName("");
    };
  }, [state, navigate, registrationData]);

  const departments = [
    { label: "Obstetric", value: 4 },
    { label: "Hematology", value: 2 },
    { label: "Cardiology", value: 6 },
    { label: "General health check", value: 7 },
    { label: "Eye check", value: 8 },
    { label: "Otorhinolaryngology", value: 5 },
    { label: "Oncology Department", value: 9 },
  ];

  useEffect(() => {
    const selectedDepartment = departments.find(
      (dep) => dep.value === parseInt(registrationData.department, 10),
    );
    setDepartmentName(selectedDepartment ? selectedDepartment.label : "");
  }, [registrationData.department, departments]);
  const handlePaymentClick = () => {
    toast.success("Payment successful!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    alert("Payment Success Fully");
    navigate("/");
    setDepartmentName("");
  };
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-9 col-xl-7">
          <div className="card shadow mb-5 mt-5">
            <div className="card-body p-4 p-md-5">
              <h3 className="mb-4 pb-2 fw-bold">Payment Details</h3>
              <div className="row mb-3">
                <div className="col-md-6">
                  <strong>Name:</strong>{" "}
                  {`${registrationData.firstname} ${registrationData.lastname}`}
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-6">
                  <strong>Phone 1:</strong> {registrationData.phone1}
                </div>
                <div className="col-md-6">
                  <strong>Phone 2:</strong> {registrationData.phone2}
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-6">
                  <strong>Address:</strong> {registrationData.address},{" "}
                  {registrationData.city}, {registrationData.states},{" "}
                  {registrationData.zipcode}, {registrationData.country}
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-6">
                  <strong>Insurance Name:</strong>{" "}
                  {registrationData.insurancename}
                </div>
                <div className="col-md-6">
                  <strong>Department:</strong> {departmentName}
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-6">
                  <strong>Pre-book:</strong>{" "}
                  {registrationData.preBook ? "Yes" : "No"}
                </div>
                <div className="col-md-6">
                  <strong>Price:</strong> ${price}
                </div>
              </div>
              <div className="row mt-5 text-center">
                <div className="col-md -6">
                  <button
                    className="btn btn-success btn-ms"
                    onClick={handlePaymentClick}
                  >
                    Pay Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
