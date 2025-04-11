export interface ImageData {
  order: number;
  image_url: string;
}

export interface HomeData {
  title: string;
  sqft: number;
  beds: number;
  baths: number;
  images: string[];
  address: string;
  price: string;
  listingKey: string;
  transactionType: string;
  isFavorite: boolean | null;
  createdAt: string;
}

export interface HomeDataRes {
  CityRegion: string | null;
  City: string | null;
  LivingAreaRange: string | null;
  BedroomsTotal: number | null;
  BedroomsAboveGrade: number | null;
  BedroomsBelowGrade: number | null;
  BathroomsTotalInteger: string | null;
  images: ImageData[];
  UnparsedAddress: string | null;
  ListPrice: string | null;
  ListingKey: string | null;
  TransactionType: string | null;
  PropertyType: string | null;
  TaxYear: string | null;
  GarageParkingSpaces: string | null;
  PostalCode: string | null;
  CountyOrParish: string | null;
  Country: string | null;
  OriginalEntryTimestamp: string | null;
  ModificationTimestamp: string | null;
  TaxAnnualAmount: number | null;
  ListOfficeName: string | null;
  PublicRemarks: string | null;
  DirectionFaces: string | null;
  HeatType: string | null;
  HeatSource: string | null;
  KitchensTotal: number | null;
  Cooling: string[] | null;
  WaterSource: string[] | null;
  Sewer: string[] | null;
  RoomsTotal: number | null;
  ParkingSpaces: number | null;
  ParkingTotal: number | null;
  CoveredSpaces: number | null;
  GarageType: string | null;
  CrossStreet: string | null;
  OtherStructures: string[] | null;
  Topography: string[] | null;
  PoolFeatures: string[] | null;
  Waterfront: string[] | null;
  Basement: string[] | null;
  LotSizeRangeAcres: string | null;
  LotSizeSource: string | null;
  PropertyFeatures: string[] | null;
  SpecialDesignation: string[] | null;
  OccupantType: string | null;
  PossessionDetails: string | null;
  DenFamilyroomYN: boolean | null;
  FireplaceYN: boolean | null;
  is_favorite?: boolean | null;
  created_at: string;
}

export interface SoldDetailRes {
  ListingKey: string;
  ListPrice: number;
  ExpiredDate: string;
  TransactionType: string;
}