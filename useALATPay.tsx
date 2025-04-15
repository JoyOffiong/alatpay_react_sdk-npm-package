"use client"

import React, { useEffect, useState } from 'react'
type props= {
  amount: number
  apiKey: string 
  businessId: string 
  currency: string
  email: string 
  firstName: string 
  lastName: string
  metadata: string 
 phone: string
}

function UseALATPay({
  amount, apiKey,businessId,currency,email,firstName,lastName,metadata, phone}:props) {

    const [alatPayInitialized, setAlatPayInitialized] = useState(false);

    useEffect(() => {
      if (alatPayInitialized) {
        const script = document.createElement("script");
        script.src = "https://web.alatpay.ng/js/alatpay.js";
        script.async = true;
    
        script.onload = () => {
          setAlatPayInitialized(false);
        };
    
        script.onerror = () => {
          console.error("Failed to load AlatPay script.");
        };
    
        document.body.appendChild(script);
      }
    }, [alatPayInitialized]);
    
    const submit = (formData: any) => {
      if (!(window as any).Alatpay) {
        setAlatPayInitialized(true);
    setTimeout(() => {  submit(formData) }, 1000);
        return;
      }
    
      const config = {
        apiKey,
        businessId,
        email,
        phone,
        firstName,
        lastName,
        amount,
        currency,
        metadata,
        onTransaction: function (response: any) {
          console.log("Transaction successful: ", response);
        },
        onClose: function () {
          console.log("Payment gateway is closed.");
        },
      };
    
      const newPopup = (window as any).Alatpay.setup(config);
      newPopup.show();
    };

    return { 
      submit 
    };
}

export default UseALATPay
