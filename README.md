# Introduction 

This is a react library for implementing ALATPAY payment gateway into your web application built with react framework

# Installation

 ``npm install react-alatpay``

# Usage
  
  ```js
  import React from 'react' 
  import UseALATPay from "react-alatpay"


const config= UseALATPay({
      amount: 100,
      apiKey: "14feff9729184eb09e0385184efc1816", 
      businessId: "582418f7-032f-48ca-27c8-08dcd31fac98", 
      currency: "NGN",
      email: "john.doe@gmail.com", 
      firstName:'John',
      lastName:'Doe', 
      metadata:{},   
      phone:'09099912345',
      onClose: () => {
        console.log("Payment popup closed")},
      onTransaction: (response:any) => {
        console.log("Transaction response:", response);
      },
    })

  const submit=()=>{
     config.submit()
    }

      


    Function Page(){
        <div>
        <p>Enter your Information</p>
        <form >
        <input/>
        <button type='submit' onClick={()=>submit()}>Pay</button>
        </form>
        </div>
    }

    export default Page
  ```

 # Metadata field
 
 The metadata field is an objects that allows you to pass other required information

 ```js
    //other required fields
    metadata:{referenceNumber:"1234231", state:"Lagos",country:"Nigeria"}
 
 ```



 # Deployment

 Kindly update the apiKey and businessId with your live credentials
 
 To retrive your businessId
   1. Log in to your account.
   2. Navigate to Settings.
   3. Click on Business to find your Business ID.
 
 Obtain your API-Key
  1. Log in to your account.
  2. Navigate to Settings.
  3. Select Business
  4. Click on View to see your API keys.
  5. Copy either the Primary Key or the Secondary Key as needed



 # How to Contribute

 1. Fork it
 2. Create a branch : 
    ``git checkout -b feature``
 3. Commit your changes: 
    ``git commit -m 'commit message'``
 4. Push to your branch: 
     ``git push origin feature``
 5. Create a pull request
