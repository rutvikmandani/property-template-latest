export type UserProfile = {
  name: string;
  web: string;
  country	:	string;
  description	:	string;
  email: string;
  country_code: string;
  phone: string;
  status: boolean;
  updated_at: string;
  created_at: string;
  social_media: {
    facebook_url: string;
    twitter_url: string;
    instagram_url: string;
    linkedin_url: string;
  };
  avatar: string;
  location: {
    friendly_address: string;
  }
};