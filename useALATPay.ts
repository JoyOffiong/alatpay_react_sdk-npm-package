
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

    const loadScript = (): Promise<void> => {
      return new Promise((resolve, reject) => {
        if ((window as any).Alatpay) return resolve();
  
        const existingScript = document.querySelector("script[src='https://web.alatpay.ng/js/alatpay.js']");
        if (existingScript) {
          existingScript.addEventListener("load", () => resolve());
          return;
        }
  
        const script = document.createElement("script");
        script.src = "https://web.alatpay.ng/js/alatpay.js";
        script.async = true;
  
        script.onload = () => resolve();
        script.onerror = () => reject(new Error("Failed to load AlatPay script"));
  
        document.body.appendChild(script);
      });
    };
    const submit = () =>  {
      loadScript()
    
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
        onTransaction:(Response:any)=>onTransaction(Response),
        onClose:onClose
      };
    
      const newPopup = (window as any).Alatpay.setup(config);
      newPopup.show();
    };

    return { 
      submit 
    };
}

export default UseALATPay
