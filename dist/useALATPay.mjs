function UseALATPay({ amount, apiKey, businessId, currency, email, firstName, lastName, metadata, phone }) {
    const submit = (formData) => {
        if (!window.Alatpay) {
            const script = document.createElement("script");
            script.src = "https://web.alatpay.ng/js/alatpay.js";
            script.async = true;
            script.onerror = () => {
                console.error("Failed to load AlatPay script.");
            };
            document.body.appendChild(script);
            setTimeout(() => { submit(formData); }, 1000);
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
            onTransaction: function (response) {
                return response
            },
            onClose: function () {
              
            },
        };
        const newPopup = window.Alatpay.setup(config);
        newPopup.show();
    };
    return {
        submit
    };
}
export default UseALATPay;
