export interface User {
    name?: string | undefined;
    position?: string;
    department?: string;
    role: string | undefined;
     details?:{
        role: string | undefined;
     }
}
