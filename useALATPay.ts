
type props= {
  amount: number
  apiKey: string 
  businessId: string 
  currency: string
  email: string 
  firstName: string 
  lastName: string
  metadata: string 
  phone: string,
  onTransaction:any,
  onClose: any
 
}

function UseALATPay({
  amount, apiKey,businessId,currency,email,firstName,lastName,metadata, phone, onTransaction, onClose}:props) {

    
    const submit = (formData: any) => {
      if (!(window as any).Alatpay) {
        const script = document.createElement("script");
        script.src = "https://web.alatpay.ng/js/alatpay.js";
        script.async = true;
    
        script.onerror = () => {
          console.error("Failed to load AlatPay script.");
        };
    
        document.body.appendChild(script);
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
        onTransaction,
        onClose
      };
    
      const newPopup = (window as any).Alatpay.setup(config);
      newPopup.show();
    };

    return { 
      submit 
    };
}

export default UseALATPay
