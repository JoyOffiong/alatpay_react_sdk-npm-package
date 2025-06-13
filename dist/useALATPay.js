function UseALATPay({ amount, apiKey, businessId, currency, email, firstName, lastName, metadata, phone, onTransaction, onClose }) {
    const loadScript = () => {
        return new Promise((resolve, reject) => {
            if (window.Alatpay)
                return resolve();
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
    const submit = () => {
        loadScript();
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
            onTransaction: (Response) => onTransaction(Response),
            onClose: onClose
        };
        const newPopup = window.Alatpay.setup(config);
        newPopup.show();
    };
    return {
        submit
    };
}
export default UseALATPay;
