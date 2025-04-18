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
};
declare function UseALATPay({ amount, apiKey, businessId, currency, email, firstName, lastName, metadata, phone }: props): {
    submit: (formData: any) => void;
};
export default UseALATPay;
