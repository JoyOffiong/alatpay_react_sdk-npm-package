type props = {
    amount: number;
    apiKey: string;
    businessId: string;
    currency: string;
    email: string;
    firstName: string;
    lastName: string;
    metadata: string;
    phone: string;
    onTransaction: any;
    onClose: any;
    color: string;
};
declare function UseALATPay({ amount, apiKey, businessId, color, currency, email, firstName, lastName, metadata, phone, onTransaction, onClose }: props): {
    submit: () => void;
};
export default UseALATPay;
