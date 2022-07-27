export interface ILocations {
    data: Data;
  }
  export interface Data {
    Typeahead_autocomplete: TypeaheadAutocomplete;
  }
  export interface TypeaheadAutocomplete {
    __typename: string;
    resultsId: string;
    results?: (ResultsEntity)[] | null;
  }
  export interface ResultsEntity {
    __typename: string;
    documentId: string;
    detailsV2?: DetailsV2 | null;
    details?: Details | null;
    image?: Image | null;
    suggestionType?: string | null;
    buCategory?: string | null;
    text?: string | null;
    parentGeoDetails?: ParentGeoDetails | null;
    route?: Route | null;
    scopeType?: string | null;
  }
  export interface DetailsV2 {
    __typename: string;
    locationId: number;
    isGeo: boolean;
    placeType: string;
    names: Names;
    geocode: Geocode;
    contact: Contact;
    route?: null;
  }
  export interface Names {
    __typename: string;
    name: string;
    longOnlyHierarchyTypeaheadV2: string;
  }
  export interface Geocode {
    __typename: string;
    latitude: number;
    longitude: number;
  }
  export interface Contact {
    __typename: string;
    streetAddress: StreetAddress;
  }
  export interface StreetAddress {
    __typename: string;
    street1: string;
  }
  export interface Details {
    __typename: string;
    socialStatistics: SocialStatistics;
  }
  export interface SocialStatistics {
    __typename: string;
    isSaved: boolean;
  }
  export interface Image {
    __typename: string;
    photo: Photo;
  }
  export interface Photo {
    __typename: string;
    photoSizeDynamic: PhotoSizeDynamic;
    photoSizes?: (PhotoSizesEntity)[] | null;
  }
  export interface PhotoSizeDynamic {
    __typename: string;
    maxHeight: number;
    maxWidth: number;
    urlTemplate: string;
  }
  export interface PhotoSizesEntity {
    __typename: string;
    height: number;
    width: number;
    url: string;
  }
  export interface ParentGeoDetails {
    __typename: string;
    names: Names1;
  }
  export interface Names1 {
    __typename: string;
    longOnlyHierarchyTypeaheadV2: string;
  }
  export interface Route {
    __typename: string;
    fragment?: null;
    page: string;
    url: string;
    nonCanonicalUrl: string;
    typedParams: TypedParams;
  }
  export interface TypedParams {
    __typename: string;
  }
  