import { ThunkDispatch } from "redux-thunk";

export interface RecipeState {
    data: Recipe[];
    loading: boolean;
    error: string;
}

export interface Snapshot {
    original?: any;
    resizable?: any;
}

export interface IntroVideo {
    id?: any;
    originalUrl?: any;
    hlsUrl?: any;
    dashUrl?: any;
    hasAudio?: any;
    snapshot: Snapshot;
}

export interface Source {
    sourceRecipeUrl: string;
    sourceFaviconUrl?: any;
    sourceHttpsOk: boolean;
    sourceInFrame: boolean;
    sourceDisplayName: string;
    proSource?: any;
    sourceSiteUrl: string;
    introVideo: IntroVideo;
    eyebrowText?: any;
    sourcePageUrl: string;
    marketingCopy?: any;
    sourceHttpOk: boolean;
    marketingImage?: any;
}

export interface Profile {
    profileName: string;
    displayName: string;
    siteUrl: string;
    pictureUrl: string;
    pageUrl: string;
    description?: any;
    type: string;
    profileUrl: string;
}

export interface Display {
    displayName: string;
    images: string[];
    flag: string;
    source: Source;
    profiles: Profile[];
    displayPrepStepsInline?: any;
    collections: any[];
}

export interface MetaTags {
    title: string;
    description: string;
}

export interface LinkTag {
    rel: string;
    href: string;
    hreflang: string;
}

export interface Web {
    noindex: boolean;
    "canonical-term": string;
    "meta-tags": MetaTags;
    "link-tags": LinkTag[];
    "image-url": string;
}

export interface SpotlightSearch {
    keywords: string[];
    noindex: boolean;
}

export interface Firebase {
    noindex: boolean;
}

export interface Seo {
    web: Web;
    spotlightSearch: SpotlightSearch;
    firebase: Firebase;
}

export interface Course {
    "display-name": string;
    "tag-url": string;
}

export interface Cuisine {
    "display-name": string;
    "tag-url": string;
}

export interface Dish {
    "display-name": string;
    "tag-url": string;
}

export interface Nutrition {
    "display-name": string;
    "tag-url": string;
}

export interface Technique {
    "display-name": string;
    "tag-url": string;
}

export interface Tags {
    course: Course[];
    cuisine: Cuisine[];
    dish: Dish[];
    nutrition: Nutrition[];
    technique: Technique[];
}

export interface QueryParams {
    start: number;
    authorId: string;
    id: string;
    apiFeedType: string;
}

export interface MoreContent {
    mobileSectionName: string;
    queryParams: QueryParams;
    feed: any[];
}

export interface Adtag {
    "display-name": string;
    "tag-url": string;
}

export interface TagsAds {
    adtag: Adtag[];
}

export interface Image {
    hostedLargeUrl: string;
    resizableImageUrl: string;
    resizableImageHeight: number;
    resizableImageWidth: number;
}

export interface Attribution {
    html: string;
    url: string;
    text: string;
    logo: string;
}

export interface Details {
    directionsUrl: string;
    totalTime: string;
    displayName: string;
    images: Image[];
    name: string;
    keywords: string[];
    brand?: any;
    id: string;
    attribution: Attribution;
    recipeId: string;
    numberOfServings: number;
    globalId: string;
    totalTimeInSeconds: number;
    rating: number;
}

export interface QueryParams2 {
    start: number;
    apiFeedType: string;
    id: string;
}

export interface RelatedContent {
    mobileSectionName: string;
    queryParams: QueryParams2;
    feed: any[];
}

export interface Unit {
    id: string;
    name: string;
    abbreviation: string;
    plural: string;
    pluralAbbreviation: string;
    kind: string;
    decimal: boolean;
}

export interface Metric {
    unit: Unit;
    quantity: number;
}

export interface Unit2 {
    id: string;
    name: string;
    abbreviation: string;
    plural: string;
    pluralAbbreviation: string;
    kind: string;
    decimal: boolean;
}

export interface Imperial {
    unit: Unit2;
    quantity: number;
}

export interface Amount {
    metric: Metric;
    imperial: Imperial;
}

export interface RelatedRecipeSearchTerm {
    allowedIngredient: string;
}

export interface IngredientLine {
    category: string;
    amount: Amount;
    unit: string;
    ingredientId: string;
    categoryId: string;
    relatedRecipeSearchTerm: RelatedRecipeSearchTerm[];
    ingredient: string;
    id: string;
    remainder: string;
    quantity: number;
    wholeLine: string;
}

export interface Reviews {
    mobileSectionName: string;
    totalReviewCount: number;
    averageRating: number;
    reviews: any[];
    thisUserReview?: any;
    sortBy: string;
}

export interface QueryParams3 {
    start: number;
    apiFeedType: string;
    id: string;
    relatedContentType: string;
}

export interface RelatedProducts {
    mobileSectionName: string;
    queryParams: QueryParams3;
    feed: any[];
}

export interface Unit3 {
    name: string;
    abbreviation: string;
    plural: string;
    decimal: boolean;
}

export interface Display2 {
    value?: number;
    unit: string;
    percentDailyValue?: number;
}

export interface NutritionEstimate {
    attribute: string;
    value: number;
    unit: Unit3;
    display: Display2;
}

export interface Nutrition2 {
    mobileSectionName: string;
    nutritionEstimates: NutritionEstimate[];
}

export interface Yums {
    count: number;
    "this-user": string;
}

export interface Content {
    description?: any;
    urbSubmitters: any[];
    tags: Tags;
    preparationSteps?: any;
    moreContent: MoreContent;
    tagsAds: TagsAds;
    details: Details;
    relatedContent: RelatedContent;
    ingredientLines: IngredientLine[];
    unitSystem: string;
    reviews: Reviews;
    relatedProducts: RelatedProducts;
    preparationStepCount: number;
    nutrition: Nutrition2;
    yums: Yums;
}
export interface Recipe {
    feed: Feed[];
    seo: Seo2;
}

export interface Feed {
    display: Display;
    type: string;
    promoted: boolean;
    proRecipe: boolean;
    recipeType: string[];
    "tracking-id": string;
    seo: Seo;
    content: Content;
}

export interface Web2 {
    noindex: boolean;
}

export interface SpotlightSearch2 {
    noindex: boolean;
}

export interface Firebase2 {
    noindex: boolean;
}

export interface Seo2 {
    web: Web2;
    spotlightSearch: SpotlightSearch2;
    firebase: Firebase2;
}


 interface GET_RECIPES_START {
     type: "GET_RECIPES_START"
}
interface GET_RECIPES_SUCCES {
    type: "GET_RECIPES_SUCCES";
    payload: Recipe[]; 
}
interface GET_RECIPES_ERROR {
    type: "GET_RECIPES_ERROR";

}

export type RecipeAction = 
| GET_RECIPES_START
| GET_RECIPES_SUCCES
| GET_RECIPES_ERROR

export type RecipesDispatch = ThunkDispatch<RecipeState,void,RecipeAction>;