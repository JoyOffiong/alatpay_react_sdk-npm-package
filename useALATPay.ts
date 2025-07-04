
type props= {
  amount: number | undefined
  apiKey: string  | undefined
  businessId: string  | undefined
  currency: string  | undefined
  email: string  | undefined
  firstName: string  | undefined
  lastName: string  | undefined
  metadata: string  | undefined
  phone: string  | undefined
  onTransaction:any  | undefined
  onClose: any  | undefined
  color: string  | undefined
 
}

function UseALATPay({
  amount, apiKey,businessId, color, currency,email,firstName,lastName,metadata, phone, onTransaction, onClose}:props) {

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
        color,
        firstName,
        lastName,
        amount,
        currency,
        metadata,
       onTransaction: (response: any) => {
  
  onTransaction(response);
},

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
