export interface SuggestionData {
    ListingKey: string;
    City: string;
    StateOrProvince: string;
    TransactionType: string;
    UnparsedAddress: string;
    id: string;
}

export interface AutoSuggestionData {
    title: string;
    url: string;
    type: string;
}

export interface SuggestionSection {
    type: string;
    items: AutoSuggestionData[];
};