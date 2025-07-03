function UseALATPay({ amount, apiKey, businessId, color, currency, email, firstName, lastName, metadata, phone, onTransaction, onClose }) {
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
            console.log("Submit this");
        });
    };
    const submit = () => {
        loadScript();
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
            onTransaction: (response) => {
                console.log("Transaction Response:", response);
                onTransaction(response);
            },
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
