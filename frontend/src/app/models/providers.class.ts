export class ProviderClass {
    id?: number;
    firstname?: string;
    lastname?: string;
    position?: string;
    company?: {
        company_name: string;
        address: string;
        address2: string;
        city: string;
        state: string;
        postal_code: string;
        phone: string;
        email: string;
        description: string;
        tagline: string;
    }
}