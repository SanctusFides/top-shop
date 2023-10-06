import React from "react";
import ModalCSS from "./Modal.module.css";


export default function Modal({setModalOpen, submitOrder}) {

  function submitOrderBtn() {
    submitOrder();
    setModalOpen(false);
  }

  const orderID = Date.now();

  return (
    <>
    <div className={ModalCSS.darkBG} onClick={() => setModalOpen(false)} />
    <div className={ModalCSS.centered}>
      <div className={ModalCSS.modal}>

        <div className={ModalCSS.modalHeader}>
          <h5 className={ModalCSS.heading}>Order Received</h5>
        </div>

        <div className={ModalCSS.modalContent}>
            Thank you for your order
            <br />
            Your Order ID is {orderID}
        </div>

        <div className={ModalCSS.modalActions}>
            <div className={ModalCSS.actionsContainer}>
              <button className={ModalCSS.submitBtn} onClick={submitOrderBtn}>
                Close
              </button>
            </div>
          </div>
      </div>
    </div>
  </>
  );
}
