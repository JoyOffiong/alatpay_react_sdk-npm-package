type props = {
    amount: number | undefined;
    apiKey: string | undefined;
    businessId: string | undefined;
    currency: string | undefined;
    email: string | undefined;
    firstName: string | undefined;
    lastName: string | undefined;
    metadata: string | undefined;
    phone: string | undefined;
    onTransaction: any | undefined;
    onClose: any | undefined;
    color: string | undefined;
};
declare function UseALATPay({ amount, apiKey, businessId, color, currency, email, firstName, lastName, metadata, phone, onTransaction, onClose }: props): {
    submit: () => void;
};
export default UseALATPay;
