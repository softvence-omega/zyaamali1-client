// Define a type for your user (example)
export interface User {
    id: string;
    name: string;
    email: string;
  }
  
  // Define a type for your app's theme (example)
  export type Theme = 'light' | 'dark';
  
  // Define a type for your app's routes (example)
  export type Route = {
    path: string;
    component: React.ComponentType;
    exact?: boolean;
  };

  export interface IAdAccount {
    id: string;
    name: string;
  }
  
  export interface IPages {
    pageId: string;
    name: string;
    pageAccessToken: string;
  }
  export interface SocialAccount {
    name: string;
    icon: string;
    accessToken?: string | null;
    refreshToken?: string | null;
    adAccount?: IAdAccount[] | null; // ✅ array of objects
    pages?: IPages[] | null;
    isSynced: boolean;
  }