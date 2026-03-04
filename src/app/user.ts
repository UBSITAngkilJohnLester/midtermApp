export interface User {
   id: number;
   name?: string | undefined;
   position?: string;
   department?: string;
   details?: {
     role: [number, string]; 
   };
 }