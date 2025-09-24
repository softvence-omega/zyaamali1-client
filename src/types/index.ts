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




  // Audience details
interface Audience {
  age_range: string;
  gender: string;
  interests: string[];
  location: string;
}

// Budget details
interface BudgetSchedule {
  campaign_duration: number;
  daily_budget: number;
  total_budget: number;
}

// Ads features
interface AdsFeatures {
  ad_type: string;
  audience: Audience;
  budget_schedule: BudgetSchedule;
  objective: string;
  platform: string;
  title: string;
}

// Google shopping ad details
interface GoogleShoppingAd {
  ad_description: string;
  campaign_objective: string;
  product_name: string;
  target_audience: string;
}

// Text ads
interface TextAds {
  google_shopping_ad: GoogleShoppingAd;
}

// Final object type
export interface AdsData {
  ads_features: AdsFeatures;
  text_ads: TextAds;
}
