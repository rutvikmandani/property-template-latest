export type SubMenuItem = {
  title: string;
  url: string;
};

export type MenuItem = {
  title: string;
  url: string;
  subMenu?: SubMenuItem[];
};

export type Menu = {
  [key: string]: MenuItem;
};

type SearchItem = {
  title: string;
  url: string;
};

type PreDefinedSearch = {
  title: string;
  searches: SearchItem[];
};

type PreDefinedSearches = {
  [key: string]: PreDefinedSearch;
};

type PopularCity = {
  title: string;
  url: string;
};

type SiteSettings = {
  logo: string;
  favicon: string;
  primary_color: string;
  secondary_color: string;
  default_currency: string;
  default_language: string;
  default_timezone: string;
  default_country: string;
  default_city: string;
};

type Header = {
  menu: Menu;
};


type Website = {
  id: number | string | null;
  agent_name: string | null;
  email: string | null;
  phone: string | null;
  address: string | null;
  domain: string | null;
  facebook_url: string | null;
  instagram_url: string | null;
  logo: string | null;
  favicon: string | null;
  footer_logo: string | null;
  status: string | null;
  created_at: string | null;
  updated_at: string | null;
  live_date: string | null;
  agent_pic: string | null;
}

export type Config = {
  siteSettings: SiteSettings;
  header: Header;
  preDefinedSearches: PreDefinedSearches;
  popularCities: PopularCity[];
  website: Website;
};