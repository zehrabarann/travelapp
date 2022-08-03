export interface IResult {
  data: Datum[];
  filters: Filters;
  filters_v2: FiltersV2;
  restaurant_availability_options: RestaurantAvailabilityOptions;
  open_hours_options: OpenHoursOptions;
  paging: Paging;
}

export interface Datum {
  location_id: string;
  name?: string;
  latitude?: string;
  longitude?: string;
  num_reviews?: string;
  timezone?: string;
  location_string?: string;
  photo?: Photo;
  awards?: any[];
  doubleclick_zone: string;
  preferred_map_engine?: string;
  raw_ranking?: string;
  ranking_geo?: string;
  ranking_geo_id?: string;
  ranking_position?: string;
  ranking_denominator?: string;
  ranking_category?: string;
  ranking?: string;
  distance?: null | string;
  distance_string?: null | string;
  bearing?: string;
  rating?: string;
  is_closed?: boolean;
  open_now_text?: string;
  is_long_closed?: boolean;
  price_level?: string;
  price?: string;
  description?: string;
  web_url?: string;
  write_review?: string;
  ancestors: Ancestor[];
  category?: Category;
  subcategory?: Category[];
  parent_display_name?: string;
  is_jfy_enabled?: boolean;
  nearest_metro_station?: any[];
  phone?: string;
  website?: string;
  email?: string;
  address_obj?: AddressObj;
  address?: string;
  hours?: Hours;
  is_candidate_for_contact_info_suppression?: boolean;
  cuisine?: Category[];
  dietary_restrictions?: any[];
  establishment_types?: Category[];
  ad_position?: string;
  ad_size?: string;
  detail?: string;
  page_type?: string;
  mob_ptype?: string;
}

export interface AddressObj {
  street1: string;
  street2: string;
  city: string;
  state: null;
  country: string;
  postalcode: null | string;
}

export interface Ancestor {
  subcategory: Category[];
  name: string;
  abbrv: null;
  location_id: string;
}

export interface Category {
  key: string;
  name: string;
}

export interface Hours {
  week_ranges: Array<WeekRange[]>;
  timezone: string;
}

export interface WeekRange {
  open_time: number;
  close_time: number;
}

export interface Photo {
  images: Images;
  is_blessed: boolean;
  uploaded_date: string;
  caption: string;
  id: string;
  helpful_votes: string;
  published_date: string;
  user: User;
}

export interface Images {
  small: Large;
  thumbnail: Large;
  original: Large;
  large: Large;
  medium: Large;
}

export interface Large {
  width: string;
  url: string;
  height: string;
}

export interface User {
  user_id: null;
  member_id: string;
  type: string;
}

export interface Filters {
  rac_deals_only: OpenNow;
  rating: Rating;
  restaurant_mealtype: { [key: string]: CombinedFood };
  exclude_locations: ExcludeLocations;
  dietary_restrictions: DietaryRestrictions;
  rsrv: OpenNow;
  restaurant_tagcategory: { [key: string]: CombinedFood };
  open_now: OpenNow;
  min_rating: { [key: string]: MinRating };
  subcategory: Subcategory;
  prices_restaurants: PricesRestaurants;
  restaurant_dining_options: { [key: string]: CombinedFood };
  restaurant_tagcategory_standalone: { [key: string]: CombinedFood };
  restaurant_styles: DietaryRestrictions;
  combined_food: { [key: string]: CombinedFood };
}

export interface CombinedFood {
  count: string;
  label: string;
  locale_independent_label: string;
  priority: string;
  selected: boolean;
}

export interface DietaryRestrictions {
  all: CombinedFood;
}

export interface ExcludeLocations {
  filtered: All;
  all: All;
}

export interface All {
  count: string;
  label: string;
}

export interface MinRating {
  count: string;
  label: string;
  selected: boolean;
}

export interface OpenNow {
  false: MinRating;
  true: MinRating;
}

export interface PricesRestaurants {
  "10953": CombinedFood;
  "10955": CombinedFood;
  all: CombinedFood;
}

export interface Rating {
  "1": MinRating;
  "2": MinRating;
  "3": MinRating;
  "4": MinRating;
  "5": MinRating;
  all: MinRating;
}

export interface Subcategory {
  all: MinRating;
  sit_down: MinRating;
  cafe: MinRating;
  fast_food: MinRating;
}

export interface FiltersV2 {
  search_filters: SearchFilter[];
  filter_sections: FilterSection[];
  metadata: Metadata;
}

export interface FilterSection {
  label: string;
  section_id: string;
  filter_groups: FilterGroup[];
}

export interface FilterGroup {
  type: string;
  key: string;
  tracking_key: string;
  label: string;
  options: FilterGroupOption[];
}

export interface FilterGroupOption {
  label: string;
  value: string;
  selected: boolean;
  count: string;
  default: boolean;
  single_select?: boolean;
}

export interface Metadata {
  sort: string;
}

export interface SearchFilter {
  key: string;
  value: string;
}

export interface OpenHoursOptions {
  closed_count: string;
  is_set: boolean;
  low_coverage_primary_message: string;
  timezone: string;
  unsure_count: string;
  open_count: string;
  low_coverage_secondary_message: string;
  current_value: string;
}

export interface Paging {
  results: string;
  total_results: string;
}

export interface RestaurantAvailabilityOptions {
  day: string;
  month: string;
  year: string;
  hour: string;
  minute: string;
  people: string;
  datestring: string;
  is_default: boolean;
  is_set: boolean;
  racable: boolean;
  time_options: EOptions;
  people_options: EOptions;
}

export interface EOptions {
  selected_option: SelectedOptionElement;
  options: SelectedOptionElement[];
}

export interface SelectedOptionElement {
  value: string;
  display: string;
  selected: boolean | null;
}


export interface IMapData {
  center:       Center;
  zoom:         number;
  bounds:       Bounds;
  marginBounds: Bounds;
  size:         Size;

}

export interface Bounds {
  nw: Center;
  se: Center;
  sw: Center;
  ne: Center;
  
}

export interface Center {
  lat: number;
  lng: number;
}

export interface Size {
  width:  number;
  height: number;
}


