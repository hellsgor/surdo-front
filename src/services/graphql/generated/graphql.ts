export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  JSON: { input: any; output: any; }
};

export type BooleanFilterInput = {
  and: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  between: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  contains: InputMaybe<Scalars['Boolean']['input']>;
  containsi: InputMaybe<Scalars['Boolean']['input']>;
  endsWith: InputMaybe<Scalars['Boolean']['input']>;
  eq: InputMaybe<Scalars['Boolean']['input']>;
  eqi: InputMaybe<Scalars['Boolean']['input']>;
  gt: InputMaybe<Scalars['Boolean']['input']>;
  gte: InputMaybe<Scalars['Boolean']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  lt: InputMaybe<Scalars['Boolean']['input']>;
  lte: InputMaybe<Scalars['Boolean']['input']>;
  ne: InputMaybe<Scalars['Boolean']['input']>;
  nei: InputMaybe<Scalars['Boolean']['input']>;
  not: InputMaybe<BooleanFilterInput>;
  notContains: InputMaybe<Scalars['Boolean']['input']>;
  notContainsi: InputMaybe<Scalars['Boolean']['input']>;
  notIn: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  notNull: InputMaybe<Scalars['Boolean']['input']>;
  null: InputMaybe<Scalars['Boolean']['input']>;
  or: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  startsWith: InputMaybe<Scalars['Boolean']['input']>;
};

export type ComponentSharedAdvantage = {
  __typename?: 'ComponentSharedAdvantage';
  id: Scalars['ID']['output'];
  image: Maybe<ComponentSharedImage>;
  label: Maybe<Scalars['String']['output']>;
  value: Maybe<Scalars['String']['output']>;
};

export type ComponentSharedAdvantageFiltersInput = {
  and: InputMaybe<Array<InputMaybe<ComponentSharedAdvantageFiltersInput>>>;
  image: InputMaybe<ComponentSharedImageFiltersInput>;
  label: InputMaybe<StringFilterInput>;
  not: InputMaybe<ComponentSharedAdvantageFiltersInput>;
  or: InputMaybe<Array<InputMaybe<ComponentSharedAdvantageFiltersInput>>>;
  value: InputMaybe<StringFilterInput>;
};

export type ComponentSharedAdvantageInput = {
  id: InputMaybe<Scalars['ID']['input']>;
  image: InputMaybe<ComponentSharedImageInput>;
  label: InputMaybe<Scalars['String']['input']>;
  value: InputMaybe<Scalars['String']['input']>;
};

export type ComponentSharedBullet = {
  __typename?: 'ComponentSharedBullet';
  id: Scalars['ID']['output'];
  text: Maybe<Scalars['String']['output']>;
};

export type ComponentSharedBulletFiltersInput = {
  and: InputMaybe<Array<InputMaybe<ComponentSharedBulletFiltersInput>>>;
  not: InputMaybe<ComponentSharedBulletFiltersInput>;
  or: InputMaybe<Array<InputMaybe<ComponentSharedBulletFiltersInput>>>;
  text: InputMaybe<StringFilterInput>;
};

export type ComponentSharedBulletInput = {
  id: InputMaybe<Scalars['ID']['input']>;
  text: InputMaybe<Scalars['String']['input']>;
};

export type ComponentSharedColorizedText = {
  __typename?: 'ComponentSharedColorizedText';
  colored: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  text: Maybe<Scalars['String']['output']>;
};

export type ComponentSharedColorizedTextInput = {
  colored: InputMaybe<Scalars['String']['input']>;
  id: InputMaybe<Scalars['ID']['input']>;
  text: InputMaybe<Scalars['String']['input']>;
};

export type ComponentSharedFormatItem = {
  __typename?: 'ComponentSharedFormatItem';
  description: Scalars['String']['output'];
  icon: UploadFile;
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
};

export type ComponentSharedFormatItemFiltersInput = {
  and: InputMaybe<Array<InputMaybe<ComponentSharedFormatItemFiltersInput>>>;
  description: InputMaybe<StringFilterInput>;
  not: InputMaybe<ComponentSharedFormatItemFiltersInput>;
  or: InputMaybe<Array<InputMaybe<ComponentSharedFormatItemFiltersInput>>>;
  title: InputMaybe<StringFilterInput>;
};

export type ComponentSharedFormatItemInput = {
  description: InputMaybe<Scalars['String']['input']>;
  icon: InputMaybe<Scalars['ID']['input']>;
  id: InputMaybe<Scalars['ID']['input']>;
  title: InputMaybe<Scalars['String']['input']>;
};

export type ComponentSharedImage = {
  __typename?: 'ComponentSharedImage';
  alt: Maybe<Scalars['String']['output']>;
  desktop: Maybe<UploadFile>;
  id: Scalars['ID']['output'];
  mobile: Maybe<UploadFile>;
};

export type ComponentSharedImageFiltersInput = {
  alt: InputMaybe<StringFilterInput>;
  and: InputMaybe<Array<InputMaybe<ComponentSharedImageFiltersInput>>>;
  not: InputMaybe<ComponentSharedImageFiltersInput>;
  or: InputMaybe<Array<InputMaybe<ComponentSharedImageFiltersInput>>>;
};

export type ComponentSharedImageInput = {
  alt: InputMaybe<Scalars['String']['input']>;
  desktop: InputMaybe<Scalars['ID']['input']>;
  id: InputMaybe<Scalars['ID']['input']>;
  mobile: InputMaybe<Scalars['ID']['input']>;
};

export type ComponentSharedLink = {
  __typename?: 'ComponentSharedLink';
  href: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  label: Scalars['String']['output'];
  leftText: Maybe<Scalars['String']['output']>;
  rightText: Maybe<Scalars['String']['output']>;
};

export type ComponentSharedLinkInput = {
  href: InputMaybe<Scalars['String']['input']>;
  id: InputMaybe<Scalars['ID']['input']>;
  label: InputMaybe<Scalars['String']['input']>;
  leftText: InputMaybe<Scalars['String']['input']>;
  rightText: InputMaybe<Scalars['String']['input']>;
};

export type ComponentSharedMeta = {
  __typename?: 'ComponentSharedMeta';
  documentDescription: Maybe<Scalars['String']['output']>;
  documentTitle: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  ogImage: Maybe<UploadFile>;
};

export type ComponentSharedMetaFiltersInput = {
  and: InputMaybe<Array<InputMaybe<ComponentSharedMetaFiltersInput>>>;
  documentDescription: InputMaybe<StringFilterInput>;
  documentTitle: InputMaybe<StringFilterInput>;
  not: InputMaybe<ComponentSharedMetaFiltersInput>;
  or: InputMaybe<Array<InputMaybe<ComponentSharedMetaFiltersInput>>>;
};

export type ComponentSharedMetaInput = {
  documentDescription: InputMaybe<Scalars['String']['input']>;
  documentTitle: InputMaybe<Scalars['String']['input']>;
  id: InputMaybe<Scalars['ID']['input']>;
  ogImage: InputMaybe<Scalars['ID']['input']>;
};

export type ComponentWidgetsAbout = {
  __typename?: 'ComponentWidgetsAbout';
  advantages: Maybe<Array<Maybe<ComponentSharedAdvantage>>>;
  bottomText: Maybe<Scalars['String']['output']>;
  button: Maybe<ComponentSharedLink>;
  id: Scalars['ID']['output'];
  title: Maybe<ComponentSharedColorizedText>;
  topText: Maybe<Scalars['String']['output']>;
};


export type ComponentWidgetsAboutAdvantagesArgs = {
  filters: InputMaybe<ComponentSharedAdvantageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentWidgetsAboutInput = {
  advantages: InputMaybe<Array<InputMaybe<ComponentSharedAdvantageInput>>>;
  bottomText: InputMaybe<Scalars['String']['input']>;
  button: InputMaybe<ComponentSharedLinkInput>;
  id: InputMaybe<Scalars['ID']['input']>;
  title: InputMaybe<ComponentSharedColorizedTextInput>;
  topText: InputMaybe<Scalars['String']['input']>;
};

export type ComponentWidgetsFaq = {
  __typename?: 'ComponentWidgetsFaq';
  faqItems: Array<Maybe<FaqItem>>;
  faqItems_connection: Maybe<FaqItemRelationResponseCollection>;
  id: Scalars['ID']['output'];
  title: Maybe<ComponentSharedColorizedText>;
};


export type ComponentWidgetsFaqFaqItemsArgs = {
  filters: InputMaybe<FaqItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ComponentWidgetsFaqFaqItems_ConnectionArgs = {
  filters: InputMaybe<FaqItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentWidgetsFaqInput = {
  faqItems: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  id: InputMaybe<Scalars['ID']['input']>;
  title: InputMaybe<ComponentSharedColorizedTextInput>;
};

export type ComponentWidgetsHero = {
  __typename?: 'ComponentWidgetsHero';
  bullets: Maybe<Array<Maybe<ComponentSharedBullet>>>;
  id: Scalars['ID']['output'];
  image: Maybe<ComponentSharedImage>;
  primaryButton: Maybe<ComponentSharedLink>;
  secondaryButton: Maybe<ComponentSharedLink>;
  title: Maybe<ComponentSharedColorizedText>;
};


export type ComponentWidgetsHeroBulletsArgs = {
  filters: InputMaybe<ComponentSharedBulletFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentWidgetsHeroInput = {
  bullets: InputMaybe<Array<InputMaybe<ComponentSharedBulletInput>>>;
  id: InputMaybe<Scalars['ID']['input']>;
  image: InputMaybe<ComponentSharedImageInput>;
  primaryButton: InputMaybe<ComponentSharedLinkInput>;
  secondaryButton: InputMaybe<ComponentSharedLinkInput>;
  title: InputMaybe<ComponentSharedColorizedTextInput>;
};

export type ComponentWidgetsReviews = {
  __typename?: 'ComponentWidgetsReviews';
  id: Scalars['ID']['output'];
  items: Array<Maybe<Review>>;
  items_connection: Maybe<ReviewRelationResponseCollection>;
  profi: Maybe<ComponentSharedLink>;
  title: Maybe<ComponentSharedColorizedText>;
};


export type ComponentWidgetsReviewsItemsArgs = {
  filters: InputMaybe<ReviewFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ComponentWidgetsReviewsItems_ConnectionArgs = {
  filters: InputMaybe<ReviewFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentWidgetsReviewsInput = {
  id: InputMaybe<Scalars['ID']['input']>;
  items: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  profi: InputMaybe<ComponentSharedLinkInput>;
  title: InputMaybe<ComponentSharedColorizedTextInput>;
};

export type ComponentWidgetsSlassFormat = {
  __typename?: 'ComponentWidgetsSlassFormat';
  id: Scalars['ID']['output'];
  items: Maybe<Array<Maybe<ComponentSharedFormatItem>>>;
  title: Maybe<ComponentSharedColorizedText>;
};


export type ComponentWidgetsSlassFormatItemsArgs = {
  filters: InputMaybe<ComponentSharedFormatItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentWidgetsSlassFormatInput = {
  id: InputMaybe<Scalars['ID']['input']>;
  items: InputMaybe<Array<InputMaybe<ComponentSharedFormatItemInput>>>;
  title: InputMaybe<ComponentSharedColorizedTextInput>;
};

export type ComponentWidgetsTasks = {
  __typename?: 'ComponentWidgetsTasks';
  id: Scalars['ID']['output'];
  servicePages: Array<Maybe<ServicePage>>;
  servicePages_connection: Maybe<ServicePageRelationResponseCollection>;
  text: Maybe<Scalars['String']['output']>;
  title: Maybe<ComponentSharedColorizedText>;
};


export type ComponentWidgetsTasksServicePagesArgs = {
  filters: InputMaybe<ServicePageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ComponentWidgetsTasksServicePages_ConnectionArgs = {
  filters: InputMaybe<ServicePageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentWidgetsTasksInput = {
  id: InputMaybe<Scalars['ID']['input']>;
  servicePages: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  text: InputMaybe<Scalars['String']['input']>;
  title: InputMaybe<ComponentSharedColorizedTextInput>;
};

export type Cta = {
  __typename?: 'Cta';
  createdAt: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  image: ComponentSharedImage;
  publishedAt: Maybe<Scalars['DateTime']['output']>;
  text: Scalars['String']['output'];
  tgLink: Maybe<ComponentSharedLink>;
  title: Maybe<ComponentSharedColorizedText>;
  updatedAt: Maybe<Scalars['DateTime']['output']>;
  vkLink: Maybe<ComponentSharedLink>;
};

export type CtaInput = {
  image: InputMaybe<ComponentSharedImageInput>;
  publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  text: InputMaybe<Scalars['String']['input']>;
  tgLink: InputMaybe<ComponentSharedLinkInput>;
  title: InputMaybe<ComponentSharedColorizedTextInput>;
  vkLink: InputMaybe<ComponentSharedLinkInput>;
};

export type DateTimeFilterInput = {
  and: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  between: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  contains: InputMaybe<Scalars['DateTime']['input']>;
  containsi: InputMaybe<Scalars['DateTime']['input']>;
  endsWith: InputMaybe<Scalars['DateTime']['input']>;
  eq: InputMaybe<Scalars['DateTime']['input']>;
  eqi: InputMaybe<Scalars['DateTime']['input']>;
  gt: InputMaybe<Scalars['DateTime']['input']>;
  gte: InputMaybe<Scalars['DateTime']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  lt: InputMaybe<Scalars['DateTime']['input']>;
  lte: InputMaybe<Scalars['DateTime']['input']>;
  ne: InputMaybe<Scalars['DateTime']['input']>;
  nei: InputMaybe<Scalars['DateTime']['input']>;
  not: InputMaybe<DateTimeFilterInput>;
  notContains: InputMaybe<Scalars['DateTime']['input']>;
  notContainsi: InputMaybe<Scalars['DateTime']['input']>;
  notIn: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  notNull: InputMaybe<Scalars['Boolean']['input']>;
  null: InputMaybe<Scalars['Boolean']['input']>;
  or: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  startsWith: InputMaybe<Scalars['DateTime']['input']>;
};

export type DeleteMutationResponse = {
  __typename?: 'DeleteMutationResponse';
  documentId: Scalars['ID']['output'];
};

export type Dimple = {
  __typename?: 'Dimple';
  Image: Maybe<ComponentSharedImage>;
  Sort: Scalars['Int']['output'];
  Title: Maybe<Scalars['String']['output']>;
  createdAt: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  publishedAt: Maybe<Scalars['DateTime']['output']>;
  updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type DimpleEntityResponseCollection = {
  __typename?: 'DimpleEntityResponseCollection';
  nodes: Array<Dimple>;
  pageInfo: Pagination;
};

export type DimpleFiltersInput = {
  Image: InputMaybe<ComponentSharedImageFiltersInput>;
  Sort: InputMaybe<IntFilterInput>;
  Title: InputMaybe<StringFilterInput>;
  and: InputMaybe<Array<InputMaybe<DimpleFiltersInput>>>;
  createdAt: InputMaybe<DateTimeFilterInput>;
  documentId: InputMaybe<IdFilterInput>;
  not: InputMaybe<DimpleFiltersInput>;
  or: InputMaybe<Array<InputMaybe<DimpleFiltersInput>>>;
  publishedAt: InputMaybe<DateTimeFilterInput>;
  updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type DimpleInput = {
  Image: InputMaybe<ComponentSharedImageInput>;
  Sort: InputMaybe<Scalars['Int']['input']>;
  Title: InputMaybe<Scalars['String']['input']>;
  publishedAt: InputMaybe<Scalars['DateTime']['input']>;
};

export type Enum_Menuitem_Side =
  | 'left'
  | 'right';

export type FaqItem = {
  __typename?: 'FaqItem';
  answer: Scalars['String']['output'];
  createdAt: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  publishedAt: Maybe<Scalars['DateTime']['output']>;
  question: Scalars['String']['output'];
  updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type FaqItemEntityResponseCollection = {
  __typename?: 'FaqItemEntityResponseCollection';
  nodes: Array<FaqItem>;
  pageInfo: Pagination;
};

export type FaqItemFiltersInput = {
  and: InputMaybe<Array<InputMaybe<FaqItemFiltersInput>>>;
  answer: InputMaybe<StringFilterInput>;
  createdAt: InputMaybe<DateTimeFilterInput>;
  documentId: InputMaybe<IdFilterInput>;
  not: InputMaybe<FaqItemFiltersInput>;
  or: InputMaybe<Array<InputMaybe<FaqItemFiltersInput>>>;
  publishedAt: InputMaybe<DateTimeFilterInput>;
  question: InputMaybe<StringFilterInput>;
  updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type FaqItemInput = {
  answer: InputMaybe<Scalars['String']['input']>;
  publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  question: InputMaybe<Scalars['String']['input']>;
};

export type FaqItemRelationResponseCollection = {
  __typename?: 'FaqItemRelationResponseCollection';
  nodes: Array<FaqItem>;
};

export type FileInfoInput = {
  alternativeText: InputMaybe<Scalars['String']['input']>;
  caption: InputMaybe<Scalars['String']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
};

export type FloatFilterInput = {
  and: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  between: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  contains: InputMaybe<Scalars['Float']['input']>;
  containsi: InputMaybe<Scalars['Float']['input']>;
  endsWith: InputMaybe<Scalars['Float']['input']>;
  eq: InputMaybe<Scalars['Float']['input']>;
  eqi: InputMaybe<Scalars['Float']['input']>;
  gt: InputMaybe<Scalars['Float']['input']>;
  gte: InputMaybe<Scalars['Float']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  lt: InputMaybe<Scalars['Float']['input']>;
  lte: InputMaybe<Scalars['Float']['input']>;
  ne: InputMaybe<Scalars['Float']['input']>;
  nei: InputMaybe<Scalars['Float']['input']>;
  not: InputMaybe<FloatFilterInput>;
  notContains: InputMaybe<Scalars['Float']['input']>;
  notContainsi: InputMaybe<Scalars['Float']['input']>;
  notIn: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  notNull: InputMaybe<Scalars['Boolean']['input']>;
  null: InputMaybe<Scalars['Boolean']['input']>;
  or: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  startsWith: InputMaybe<Scalars['Float']['input']>;
};

export type Footer = {
  __typename?: 'Footer';
  copyRight: Maybe<Scalars['String']['output']>;
  createdAt: Maybe<Scalars['DateTime']['output']>;
  createdByWhom: Maybe<ComponentSharedLink>;
  documentId: Scalars['ID']['output'];
  privacy: Maybe<ComponentSharedLink>;
  publishedAt: Maybe<Scalars['DateTime']['output']>;
  updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type FooterInput = {
  copyRight: InputMaybe<Scalars['String']['input']>;
  createdByWhom: InputMaybe<ComponentSharedLinkInput>;
  privacy: InputMaybe<ComponentSharedLinkInput>;
  publishedAt: InputMaybe<Scalars['DateTime']['input']>;
};

export type GenericMorph = ComponentSharedAdvantage | ComponentSharedBullet | ComponentSharedColorizedText | ComponentSharedFormatItem | ComponentSharedImage | ComponentSharedLink | ComponentSharedMeta | ComponentWidgetsAbout | ComponentWidgetsFaq | ComponentWidgetsHero | ComponentWidgetsReviews | ComponentWidgetsSlassFormat | ComponentWidgetsTasks | Cta | Dimple | FaqItem | Footer | HomePage | I18NLocale | MenuItem | Review | ReviewWorkflowsWorkflow | ReviewWorkflowsWorkflowStage | ReviewsTag | ServicePage | UploadFile | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser;

export type HomePage = {
  __typename?: 'HomePage';
  about: Maybe<ComponentWidgetsAbout>;
  classesFormat: Maybe<ComponentWidgetsSlassFormat>;
  createdAt: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  faq: Maybe<ComponentWidgetsFaq>;
  hero: Maybe<ComponentWidgetsHero>;
  publishedAt: Maybe<Scalars['DateTime']['output']>;
  reviews: Maybe<ComponentWidgetsReviews>;
  tasks: Maybe<ComponentWidgetsTasks>;
  updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type HomePageInput = {
  about: InputMaybe<ComponentWidgetsAboutInput>;
  classesFormat: InputMaybe<ComponentWidgetsSlassFormatInput>;
  faq: InputMaybe<ComponentWidgetsFaqInput>;
  hero: InputMaybe<ComponentWidgetsHeroInput>;
  publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  reviews: InputMaybe<ComponentWidgetsReviewsInput>;
  tasks: InputMaybe<ComponentWidgetsTasksInput>;
};

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code: Maybe<Scalars['String']['output']>;
  createdAt: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  name: Maybe<Scalars['String']['output']>;
  publishedAt: Maybe<Scalars['DateTime']['output']>;
  updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  nodes: Array<I18NLocale>;
  pageInfo: Pagination;
};

export type I18NLocaleFiltersInput = {
  and: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code: InputMaybe<StringFilterInput>;
  createdAt: InputMaybe<DateTimeFilterInput>;
  documentId: InputMaybe<IdFilterInput>;
  name: InputMaybe<StringFilterInput>;
  not: InputMaybe<I18NLocaleFiltersInput>;
  or: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  publishedAt: InputMaybe<DateTimeFilterInput>;
  updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  between: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contains: InputMaybe<Scalars['ID']['input']>;
  containsi: InputMaybe<Scalars['ID']['input']>;
  endsWith: InputMaybe<Scalars['ID']['input']>;
  eq: InputMaybe<Scalars['ID']['input']>;
  eqi: InputMaybe<Scalars['ID']['input']>;
  gt: InputMaybe<Scalars['ID']['input']>;
  gte: InputMaybe<Scalars['ID']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  lt: InputMaybe<Scalars['ID']['input']>;
  lte: InputMaybe<Scalars['ID']['input']>;
  ne: InputMaybe<Scalars['ID']['input']>;
  nei: InputMaybe<Scalars['ID']['input']>;
  not: InputMaybe<IdFilterInput>;
  notContains: InputMaybe<Scalars['ID']['input']>;
  notContainsi: InputMaybe<Scalars['ID']['input']>;
  notIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  notNull: InputMaybe<Scalars['Boolean']['input']>;
  null: InputMaybe<Scalars['Boolean']['input']>;
  or: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  startsWith: InputMaybe<Scalars['ID']['input']>;
};

export type IntFilterInput = {
  and: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  between: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  contains: InputMaybe<Scalars['Int']['input']>;
  containsi: InputMaybe<Scalars['Int']['input']>;
  endsWith: InputMaybe<Scalars['Int']['input']>;
  eq: InputMaybe<Scalars['Int']['input']>;
  eqi: InputMaybe<Scalars['Int']['input']>;
  gt: InputMaybe<Scalars['Int']['input']>;
  gte: InputMaybe<Scalars['Int']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt: InputMaybe<Scalars['Int']['input']>;
  lte: InputMaybe<Scalars['Int']['input']>;
  ne: InputMaybe<Scalars['Int']['input']>;
  nei: InputMaybe<Scalars['Int']['input']>;
  not: InputMaybe<IntFilterInput>;
  notContains: InputMaybe<Scalars['Int']['input']>;
  notContainsi: InputMaybe<Scalars['Int']['input']>;
  notIn: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  notNull: InputMaybe<Scalars['Boolean']['input']>;
  null: InputMaybe<Scalars['Boolean']['input']>;
  or: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  startsWith: InputMaybe<Scalars['Int']['input']>;
};

export type JsonFilterInput = {
  and: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  between: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  contains: InputMaybe<Scalars['JSON']['input']>;
  containsi: InputMaybe<Scalars['JSON']['input']>;
  endsWith: InputMaybe<Scalars['JSON']['input']>;
  eq: InputMaybe<Scalars['JSON']['input']>;
  eqi: InputMaybe<Scalars['JSON']['input']>;
  gt: InputMaybe<Scalars['JSON']['input']>;
  gte: InputMaybe<Scalars['JSON']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  lt: InputMaybe<Scalars['JSON']['input']>;
  lte: InputMaybe<Scalars['JSON']['input']>;
  ne: InputMaybe<Scalars['JSON']['input']>;
  nei: InputMaybe<Scalars['JSON']['input']>;
  not: InputMaybe<JsonFilterInput>;
  notContains: InputMaybe<Scalars['JSON']['input']>;
  notContainsi: InputMaybe<Scalars['JSON']['input']>;
  notIn: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  notNull: InputMaybe<Scalars['Boolean']['input']>;
  null: InputMaybe<Scalars['Boolean']['input']>;
  or: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  startsWith: InputMaybe<Scalars['JSON']['input']>;
};

export type MenuItem = {
  __typename?: 'MenuItem';
  children: Array<Maybe<MenuItem>>;
  children_connection: Maybe<MenuItemRelationResponseCollection>;
  createdAt: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  isDisabled: Maybe<Scalars['Boolean']['output']>;
  order: Scalars['Int']['output'];
  parent: Maybe<MenuItem>;
  path: Maybe<Scalars['String']['output']>;
  publishedAt: Maybe<Scalars['DateTime']['output']>;
  side: Maybe<Enum_Menuitem_Side>;
  title: Scalars['String']['output'];
  updatedAt: Maybe<Scalars['DateTime']['output']>;
};


export type MenuItemChildrenArgs = {
  filters: InputMaybe<MenuItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MenuItemChildren_ConnectionArgs = {
  filters: InputMaybe<MenuItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type MenuItemEntityResponseCollection = {
  __typename?: 'MenuItemEntityResponseCollection';
  nodes: Array<MenuItem>;
  pageInfo: Pagination;
};

export type MenuItemFiltersInput = {
  and: InputMaybe<Array<InputMaybe<MenuItemFiltersInput>>>;
  children: InputMaybe<MenuItemFiltersInput>;
  createdAt: InputMaybe<DateTimeFilterInput>;
  documentId: InputMaybe<IdFilterInput>;
  isDisabled: InputMaybe<BooleanFilterInput>;
  not: InputMaybe<MenuItemFiltersInput>;
  or: InputMaybe<Array<InputMaybe<MenuItemFiltersInput>>>;
  order: InputMaybe<IntFilterInput>;
  parent: InputMaybe<MenuItemFiltersInput>;
  path: InputMaybe<StringFilterInput>;
  publishedAt: InputMaybe<DateTimeFilterInput>;
  side: InputMaybe<StringFilterInput>;
  title: InputMaybe<StringFilterInput>;
  updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type MenuItemInput = {
  children: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  isDisabled: InputMaybe<Scalars['Boolean']['input']>;
  order: InputMaybe<Scalars['Int']['input']>;
  parent: InputMaybe<Scalars['ID']['input']>;
  path: InputMaybe<Scalars['String']['input']>;
  publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  side: InputMaybe<Enum_Menuitem_Side>;
  title: InputMaybe<Scalars['String']['input']>;
};

export type MenuItemRelationResponseCollection = {
  __typename?: 'MenuItemRelationResponseCollection';
  nodes: Array<MenuItem>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Change user password. Confirm with the current password. */
  changePassword: Maybe<UsersPermissionsLoginPayload>;
  createDimple: Maybe<Dimple>;
  createFaqItem: Maybe<FaqItem>;
  createMenuItem: Maybe<MenuItem>;
  createReview: Maybe<Review>;
  createReviewWorkflowsWorkflow: Maybe<ReviewWorkflowsWorkflow>;
  createReviewWorkflowsWorkflowStage: Maybe<ReviewWorkflowsWorkflowStage>;
  createReviewsTag: Maybe<ReviewsTag>;
  createServicePage: Maybe<ServicePage>;
  /** Create a new role */
  createUsersPermissionsRole: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteCta: Maybe<DeleteMutationResponse>;
  deleteDimple: Maybe<DeleteMutationResponse>;
  deleteFaqItem: Maybe<DeleteMutationResponse>;
  deleteFooter: Maybe<DeleteMutationResponse>;
  deleteHomePage: Maybe<DeleteMutationResponse>;
  deleteMenuItem: Maybe<DeleteMutationResponse>;
  deleteReview: Maybe<DeleteMutationResponse>;
  deleteReviewWorkflowsWorkflow: Maybe<DeleteMutationResponse>;
  deleteReviewWorkflowsWorkflowStage: Maybe<DeleteMutationResponse>;
  deleteReviewsTag: Maybe<DeleteMutationResponse>;
  deleteServicePage: Maybe<DeleteMutationResponse>;
  deleteUploadFile: Maybe<UploadFile>;
  /** Delete an existing role */
  deleteUsersPermissionsRole: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  /** Confirm an email users email address */
  emailConfirmation: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword: Maybe<UsersPermissionsLoginPayload>;
  updateCta: Maybe<Cta>;
  updateDimple: Maybe<Dimple>;
  updateFaqItem: Maybe<FaqItem>;
  updateFooter: Maybe<Footer>;
  updateHomePage: Maybe<HomePage>;
  updateMenuItem: Maybe<MenuItem>;
  updateReview: Maybe<Review>;
  updateReviewWorkflowsWorkflow: Maybe<ReviewWorkflowsWorkflow>;
  updateReviewWorkflowsWorkflowStage: Maybe<ReviewWorkflowsWorkflowStage>;
  updateReviewsTag: Maybe<ReviewsTag>;
  updateServicePage: Maybe<ServicePage>;
  updateUploadFile: UploadFile;
  /** Update an existing role */
  updateUsersPermissionsRole: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
};


export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationCreateDimpleArgs = {
  data: DimpleInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateFaqItemArgs = {
  data: FaqItemInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateMenuItemArgs = {
  data: MenuItemInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateReviewArgs = {
  data: ReviewInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateReviewWorkflowsWorkflowArgs = {
  data: ReviewWorkflowsWorkflowInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateReviewWorkflowsWorkflowStageArgs = {
  data: ReviewWorkflowsWorkflowStageInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateReviewsTagArgs = {
  data: ReviewsTagInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateServicePageArgs = {
  data: ServicePageInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationDeleteDimpleArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteFaqItemArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteMenuItemArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteReviewArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteReviewWorkflowsWorkflowArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteReviewWorkflowsWorkflowStageArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteReviewsTagArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteServicePageArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String']['input'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationResetPasswordArgs = {
  code: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationUpdateCtaArgs = {
  data: CtaInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateDimpleArgs = {
  data: DimpleInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateFaqItemArgs = {
  data: FaqItemInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateFooterArgs = {
  data: FooterInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateHomePageArgs = {
  data: HomePageInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateMenuItemArgs = {
  data: MenuItemInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateReviewArgs = {
  data: ReviewInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateReviewWorkflowsWorkflowArgs = {
  data: ReviewWorkflowsWorkflowInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateReviewWorkflowsWorkflowStageArgs = {
  data: ReviewWorkflowsWorkflowStageInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateReviewsTagArgs = {
  data: ReviewsTagInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateServicePageArgs = {
  data: ServicePageInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateUploadFileArgs = {
  id: Scalars['ID']['input'];
  info: InputMaybe<FileInfoInput>;
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID']['input'];
};

export type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int']['output'];
  pageCount: Scalars['Int']['output'];
  pageSize: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PaginationArg = {
  limit: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  pageSize: InputMaybe<Scalars['Int']['input']>;
  start: InputMaybe<Scalars['Int']['input']>;
};

export type PublicationStatus =
  | 'DRAFT'
  | 'PUBLISHED';

export type Query = {
  __typename?: 'Query';
  cta: Maybe<Cta>;
  dimple: Maybe<Dimple>;
  dimples: Array<Maybe<Dimple>>;
  dimples_connection: Maybe<DimpleEntityResponseCollection>;
  faqItem: Maybe<FaqItem>;
  faqItems: Array<Maybe<FaqItem>>;
  faqItems_connection: Maybe<FaqItemEntityResponseCollection>;
  footer: Maybe<Footer>;
  homePage: Maybe<HomePage>;
  i18NLocale: Maybe<I18NLocale>;
  i18NLocales: Array<Maybe<I18NLocale>>;
  i18NLocales_connection: Maybe<I18NLocaleEntityResponseCollection>;
  me: Maybe<UsersPermissionsMe>;
  menuItem: Maybe<MenuItem>;
  menuItems: Array<Maybe<MenuItem>>;
  menuItems_connection: Maybe<MenuItemEntityResponseCollection>;
  review: Maybe<Review>;
  reviewWorkflowsWorkflow: Maybe<ReviewWorkflowsWorkflow>;
  reviewWorkflowsWorkflowStage: Maybe<ReviewWorkflowsWorkflowStage>;
  reviewWorkflowsWorkflowStages: Array<Maybe<ReviewWorkflowsWorkflowStage>>;
  reviewWorkflowsWorkflowStages_connection: Maybe<ReviewWorkflowsWorkflowStageEntityResponseCollection>;
  reviewWorkflowsWorkflows: Array<Maybe<ReviewWorkflowsWorkflow>>;
  reviewWorkflowsWorkflows_connection: Maybe<ReviewWorkflowsWorkflowEntityResponseCollection>;
  reviews: Array<Maybe<Review>>;
  reviewsTag: Maybe<ReviewsTag>;
  reviewsTags: Array<Maybe<ReviewsTag>>;
  reviewsTags_connection: Maybe<ReviewsTagEntityResponseCollection>;
  reviews_connection: Maybe<ReviewEntityResponseCollection>;
  servicePage: Maybe<ServicePage>;
  servicePages: Array<Maybe<ServicePage>>;
  servicePages_connection: Maybe<ServicePageEntityResponseCollection>;
  uploadFile: Maybe<UploadFile>;
  uploadFiles: Array<Maybe<UploadFile>>;
  uploadFiles_connection: Maybe<UploadFileEntityResponseCollection>;
  usersPermissionsRole: Maybe<UsersPermissionsRole>;
  usersPermissionsRoles: Array<Maybe<UsersPermissionsRole>>;
  usersPermissionsRoles_connection: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser: Maybe<UsersPermissionsUser>;
  usersPermissionsUsers: Array<Maybe<UsersPermissionsUser>>;
  usersPermissionsUsers_connection: Maybe<UsersPermissionsUserEntityResponseCollection>;
};


export type QueryCtaArgs = {
  hasPublishedVersion: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryDimpleArgs = {
  documentId: Scalars['ID']['input'];
  hasPublishedVersion: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryDimplesArgs = {
  filters: InputMaybe<DimpleFiltersInput>;
  hasPublishedVersion: InputMaybe<Scalars['Boolean']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryDimples_ConnectionArgs = {
  filters: InputMaybe<DimpleFiltersInput>;
  hasPublishedVersion: InputMaybe<Scalars['Boolean']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryFaqItemArgs = {
  documentId: Scalars['ID']['input'];
  hasPublishedVersion: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryFaqItemsArgs = {
  filters: InputMaybe<FaqItemFiltersInput>;
  hasPublishedVersion: InputMaybe<Scalars['Boolean']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryFaqItems_ConnectionArgs = {
  filters: InputMaybe<FaqItemFiltersInput>;
  hasPublishedVersion: InputMaybe<Scalars['Boolean']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryFooterArgs = {
  hasPublishedVersion: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryHomePageArgs = {
  hasPublishedVersion: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryI18NLocaleArgs = {
  documentId: Scalars['ID']['input'];
};


export type QueryI18NLocalesArgs = {
  filters: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryI18NLocales_ConnectionArgs = {
  filters: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryMenuItemArgs = {
  documentId: Scalars['ID']['input'];
};


export type QueryMenuItemsArgs = {
  filters: InputMaybe<MenuItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryMenuItems_ConnectionArgs = {
  filters: InputMaybe<MenuItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryReviewArgs = {
  documentId: Scalars['ID']['input'];
  hasPublishedVersion: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryReviewWorkflowsWorkflowArgs = {
  documentId: Scalars['ID']['input'];
};


export type QueryReviewWorkflowsWorkflowStageArgs = {
  documentId: Scalars['ID']['input'];
};


export type QueryReviewWorkflowsWorkflowStagesArgs = {
  filters: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryReviewWorkflowsWorkflowStages_ConnectionArgs = {
  filters: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryReviewWorkflowsWorkflowsArgs = {
  filters: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryReviewWorkflowsWorkflows_ConnectionArgs = {
  filters: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryReviewsArgs = {
  filters: InputMaybe<ReviewFiltersInput>;
  hasPublishedVersion: InputMaybe<Scalars['Boolean']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryReviewsTagArgs = {
  documentId: Scalars['ID']['input'];
  hasPublishedVersion: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryReviewsTagsArgs = {
  filters: InputMaybe<ReviewsTagFiltersInput>;
  hasPublishedVersion: InputMaybe<Scalars['Boolean']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryReviewsTags_ConnectionArgs = {
  filters: InputMaybe<ReviewsTagFiltersInput>;
  hasPublishedVersion: InputMaybe<Scalars['Boolean']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryReviews_ConnectionArgs = {
  filters: InputMaybe<ReviewFiltersInput>;
  hasPublishedVersion: InputMaybe<Scalars['Boolean']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryServicePageArgs = {
  documentId: Scalars['ID']['input'];
  hasPublishedVersion: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryServicePagesArgs = {
  filters: InputMaybe<ServicePageFiltersInput>;
  hasPublishedVersion: InputMaybe<Scalars['Boolean']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryServicePages_ConnectionArgs = {
  filters: InputMaybe<ServicePageFiltersInput>;
  hasPublishedVersion: InputMaybe<Scalars['Boolean']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUploadFileArgs = {
  documentId: Scalars['ID']['input'];
};


export type QueryUploadFilesArgs = {
  filters: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUploadFiles_ConnectionArgs = {
  filters: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUsersPermissionsRoleArgs = {
  documentId: Scalars['ID']['input'];
};


export type QueryUsersPermissionsRolesArgs = {
  filters: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUsersPermissionsRoles_ConnectionArgs = {
  filters: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUsersPermissionsUserArgs = {
  documentId: Scalars['ID']['input'];
};


export type QueryUsersPermissionsUsersArgs = {
  filters: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUsersPermissionsUsers_ConnectionArgs = {
  filters: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Review = {
  __typename?: 'Review';
  age: Maybe<Scalars['Int']['output']>;
  createdAt: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  order: Scalars['Int']['output'];
  publishedAt: Maybe<Scalars['DateTime']['output']>;
  reviewsTags: Array<Maybe<ReviewsTag>>;
  reviewsTags_connection: Maybe<ReviewsTagRelationResponseCollection>;
  showOnMainPage: Maybe<Scalars['Boolean']['output']>;
  text: Maybe<Scalars['String']['output']>;
  updatedAt: Maybe<Scalars['DateTime']['output']>;
};


export type ReviewReviewsTagsArgs = {
  filters: InputMaybe<ReviewsTagFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ReviewReviewsTags_ConnectionArgs = {
  filters: InputMaybe<ReviewsTagFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ReviewEntityResponseCollection = {
  __typename?: 'ReviewEntityResponseCollection';
  nodes: Array<Review>;
  pageInfo: Pagination;
};

export type ReviewFiltersInput = {
  age: InputMaybe<IntFilterInput>;
  and: InputMaybe<Array<InputMaybe<ReviewFiltersInput>>>;
  createdAt: InputMaybe<DateTimeFilterInput>;
  documentId: InputMaybe<IdFilterInput>;
  name: InputMaybe<StringFilterInput>;
  not: InputMaybe<ReviewFiltersInput>;
  or: InputMaybe<Array<InputMaybe<ReviewFiltersInput>>>;
  order: InputMaybe<IntFilterInput>;
  publishedAt: InputMaybe<DateTimeFilterInput>;
  reviewsTags: InputMaybe<ReviewsTagFiltersInput>;
  showOnMainPage: InputMaybe<BooleanFilterInput>;
  text: InputMaybe<StringFilterInput>;
  updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type ReviewInput = {
  age: InputMaybe<Scalars['Int']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Scalars['Int']['input']>;
  publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  reviewsTags: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  showOnMainPage: InputMaybe<Scalars['Boolean']['input']>;
  text: InputMaybe<Scalars['String']['input']>;
};

export type ReviewRelationResponseCollection = {
  __typename?: 'ReviewRelationResponseCollection';
  nodes: Array<Review>;
};

export type ReviewWorkflowsWorkflow = {
  __typename?: 'ReviewWorkflowsWorkflow';
  contentTypes: Scalars['JSON']['output'];
  createdAt: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  publishedAt: Maybe<Scalars['DateTime']['output']>;
  stageRequiredToPublish: Maybe<ReviewWorkflowsWorkflowStage>;
  stages: Array<Maybe<ReviewWorkflowsWorkflowStage>>;
  stages_connection: Maybe<ReviewWorkflowsWorkflowStageRelationResponseCollection>;
  updatedAt: Maybe<Scalars['DateTime']['output']>;
};


export type ReviewWorkflowsWorkflowStagesArgs = {
  filters: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ReviewWorkflowsWorkflowStages_ConnectionArgs = {
  filters: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ReviewWorkflowsWorkflowEntityResponseCollection = {
  __typename?: 'ReviewWorkflowsWorkflowEntityResponseCollection';
  nodes: Array<ReviewWorkflowsWorkflow>;
  pageInfo: Pagination;
};

export type ReviewWorkflowsWorkflowFiltersInput = {
  and: InputMaybe<Array<InputMaybe<ReviewWorkflowsWorkflowFiltersInput>>>;
  contentTypes: InputMaybe<JsonFilterInput>;
  createdAt: InputMaybe<DateTimeFilterInput>;
  documentId: InputMaybe<IdFilterInput>;
  name: InputMaybe<StringFilterInput>;
  not: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>;
  or: InputMaybe<Array<InputMaybe<ReviewWorkflowsWorkflowFiltersInput>>>;
  publishedAt: InputMaybe<DateTimeFilterInput>;
  stageRequiredToPublish: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  stages: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type ReviewWorkflowsWorkflowInput = {
  contentTypes: InputMaybe<Scalars['JSON']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
  publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  stageRequiredToPublish: InputMaybe<Scalars['ID']['input']>;
  stages: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type ReviewWorkflowsWorkflowStage = {
  __typename?: 'ReviewWorkflowsWorkflowStage';
  color: Maybe<Scalars['String']['output']>;
  createdAt: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  name: Maybe<Scalars['String']['output']>;
  publishedAt: Maybe<Scalars['DateTime']['output']>;
  updatedAt: Maybe<Scalars['DateTime']['output']>;
  workflow: Maybe<ReviewWorkflowsWorkflow>;
};

export type ReviewWorkflowsWorkflowStageEntityResponseCollection = {
  __typename?: 'ReviewWorkflowsWorkflowStageEntityResponseCollection';
  nodes: Array<ReviewWorkflowsWorkflowStage>;
  pageInfo: Pagination;
};

export type ReviewWorkflowsWorkflowStageFiltersInput = {
  and: InputMaybe<Array<InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>>>;
  color: InputMaybe<StringFilterInput>;
  createdAt: InputMaybe<DateTimeFilterInput>;
  documentId: InputMaybe<IdFilterInput>;
  name: InputMaybe<StringFilterInput>;
  not: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  or: InputMaybe<Array<InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>>>;
  publishedAt: InputMaybe<DateTimeFilterInput>;
  updatedAt: InputMaybe<DateTimeFilterInput>;
  workflow: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>;
};

export type ReviewWorkflowsWorkflowStageInput = {
  color: InputMaybe<Scalars['String']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
  publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  workflow: InputMaybe<Scalars['ID']['input']>;
};

export type ReviewWorkflowsWorkflowStageRelationResponseCollection = {
  __typename?: 'ReviewWorkflowsWorkflowStageRelationResponseCollection';
  nodes: Array<ReviewWorkflowsWorkflowStage>;
};

export type ReviewsTag = {
  __typename?: 'ReviewsTag';
  createdAt: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  publishedAt: Maybe<Scalars['DateTime']['output']>;
  text: Scalars['String']['output'];
  updatedAt: Maybe<Scalars['DateTime']['output']>;
  value: Scalars['String']['output'];
};

export type ReviewsTagEntityResponseCollection = {
  __typename?: 'ReviewsTagEntityResponseCollection';
  nodes: Array<ReviewsTag>;
  pageInfo: Pagination;
};

export type ReviewsTagFiltersInput = {
  and: InputMaybe<Array<InputMaybe<ReviewsTagFiltersInput>>>;
  createdAt: InputMaybe<DateTimeFilterInput>;
  documentId: InputMaybe<IdFilterInput>;
  not: InputMaybe<ReviewsTagFiltersInput>;
  or: InputMaybe<Array<InputMaybe<ReviewsTagFiltersInput>>>;
  publishedAt: InputMaybe<DateTimeFilterInput>;
  text: InputMaybe<StringFilterInput>;
  updatedAt: InputMaybe<DateTimeFilterInput>;
  value: InputMaybe<StringFilterInput>;
};

export type ReviewsTagInput = {
  publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  text: InputMaybe<Scalars['String']['input']>;
  value: InputMaybe<Scalars['String']['input']>;
};

export type ReviewsTagRelationResponseCollection = {
  __typename?: 'ReviewsTagRelationResponseCollection';
  nodes: Array<ReviewsTag>;
};

export type ServicePage = {
  __typename?: 'ServicePage';
  content: Maybe<Scalars['String']['output']>;
  createdAt: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  faqTitle: Scalars['String']['output'];
  faq_items: Array<Maybe<FaqItem>>;
  faq_items_connection: Maybe<FaqItemRelationResponseCollection>;
  metaData: Maybe<ComponentSharedMeta>;
  order: Scalars['Int']['output'];
  publishedAt: Maybe<Scalars['DateTime']['output']>;
  slug: Maybe<Scalars['String']['output']>;
  title: Maybe<Scalars['String']['output']>;
  updatedAt: Maybe<Scalars['DateTime']['output']>;
};


export type ServicePageFaq_ItemsArgs = {
  filters: InputMaybe<FaqItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ServicePageFaq_Items_ConnectionArgs = {
  filters: InputMaybe<FaqItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ServicePageEntityResponseCollection = {
  __typename?: 'ServicePageEntityResponseCollection';
  nodes: Array<ServicePage>;
  pageInfo: Pagination;
};

export type ServicePageFiltersInput = {
  and: InputMaybe<Array<InputMaybe<ServicePageFiltersInput>>>;
  content: InputMaybe<StringFilterInput>;
  createdAt: InputMaybe<DateTimeFilterInput>;
  documentId: InputMaybe<IdFilterInput>;
  faqTitle: InputMaybe<StringFilterInput>;
  faq_items: InputMaybe<FaqItemFiltersInput>;
  metaData: InputMaybe<ComponentSharedMetaFiltersInput>;
  not: InputMaybe<ServicePageFiltersInput>;
  or: InputMaybe<Array<InputMaybe<ServicePageFiltersInput>>>;
  order: InputMaybe<IntFilterInput>;
  publishedAt: InputMaybe<DateTimeFilterInput>;
  slug: InputMaybe<StringFilterInput>;
  title: InputMaybe<StringFilterInput>;
  updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type ServicePageInput = {
  content: InputMaybe<Scalars['String']['input']>;
  faqTitle: InputMaybe<Scalars['String']['input']>;
  faq_items: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  metaData: InputMaybe<ComponentSharedMetaInput>;
  order: InputMaybe<Scalars['Int']['input']>;
  publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  slug: InputMaybe<Scalars['String']['input']>;
  title: InputMaybe<Scalars['String']['input']>;
};

export type ServicePageRelationResponseCollection = {
  __typename?: 'ServicePageRelationResponseCollection';
  nodes: Array<ServicePage>;
};

export type StringFilterInput = {
  and: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  between: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains: InputMaybe<Scalars['String']['input']>;
  containsi: InputMaybe<Scalars['String']['input']>;
  endsWith: InputMaybe<Scalars['String']['input']>;
  eq: InputMaybe<Scalars['String']['input']>;
  eqi: InputMaybe<Scalars['String']['input']>;
  gt: InputMaybe<Scalars['String']['input']>;
  gte: InputMaybe<Scalars['String']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt: InputMaybe<Scalars['String']['input']>;
  lte: InputMaybe<Scalars['String']['input']>;
  ne: InputMaybe<Scalars['String']['input']>;
  nei: InputMaybe<Scalars['String']['input']>;
  not: InputMaybe<StringFilterInput>;
  notContains: InputMaybe<Scalars['String']['input']>;
  notContainsi: InputMaybe<Scalars['String']['input']>;
  notIn: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notNull: InputMaybe<Scalars['Boolean']['input']>;
  null: InputMaybe<Scalars['Boolean']['input']>;
  or: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  startsWith: InputMaybe<Scalars['String']['input']>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText: Maybe<Scalars['String']['output']>;
  caption: Maybe<Scalars['String']['output']>;
  createdAt: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  ext: Maybe<Scalars['String']['output']>;
  focalPoint: Maybe<Scalars['JSON']['output']>;
  formats: Maybe<Scalars['JSON']['output']>;
  hash: Scalars['String']['output'];
  height: Maybe<Scalars['Int']['output']>;
  mime: Scalars['String']['output'];
  name: Scalars['String']['output'];
  previewUrl: Maybe<Scalars['String']['output']>;
  provider: Scalars['String']['output'];
  provider_metadata: Maybe<Scalars['JSON']['output']>;
  publishedAt: Maybe<Scalars['DateTime']['output']>;
  related: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float']['output'];
  updatedAt: Maybe<Scalars['DateTime']['output']>;
  url: Scalars['String']['output'];
  width: Maybe<Scalars['Int']['output']>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  nodes: Array<UploadFile>;
  pageInfo: Pagination;
};

export type UploadFileFiltersInput = {
  alternativeText: InputMaybe<StringFilterInput>;
  and: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption: InputMaybe<StringFilterInput>;
  createdAt: InputMaybe<DateTimeFilterInput>;
  documentId: InputMaybe<IdFilterInput>;
  ext: InputMaybe<StringFilterInput>;
  focalPoint: InputMaybe<JsonFilterInput>;
  formats: InputMaybe<JsonFilterInput>;
  hash: InputMaybe<StringFilterInput>;
  height: InputMaybe<IntFilterInput>;
  mime: InputMaybe<StringFilterInput>;
  name: InputMaybe<StringFilterInput>;
  not: InputMaybe<UploadFileFiltersInput>;
  or: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl: InputMaybe<StringFilterInput>;
  provider: InputMaybe<StringFilterInput>;
  provider_metadata: InputMaybe<JsonFilterInput>;
  publishedAt: InputMaybe<DateTimeFilterInput>;
  size: InputMaybe<FloatFilterInput>;
  updatedAt: InputMaybe<DateTimeFilterInput>;
  url: InputMaybe<StringFilterInput>;
  width: InputMaybe<IntFilterInput>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String']['input'];
  password: Scalars['String']['input'];
  provider: Scalars['String']['input'];
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt: Maybe<Scalars['String']['output']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked: Maybe<Scalars['Boolean']['output']>;
  confirmed: Maybe<Scalars['Boolean']['output']>;
  documentId: Scalars['ID']['output'];
  email: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  role: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String']['output'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  type: Maybe<Scalars['String']['output']>;
};

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String']['output'];
  createdAt: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  publishedAt: Maybe<Scalars['DateTime']['output']>;
  role: Maybe<UsersPermissionsRole>;
  updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action: InputMaybe<StringFilterInput>;
  and: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt: InputMaybe<DateTimeFilterInput>;
  documentId: InputMaybe<IdFilterInput>;
  not: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  publishedAt: InputMaybe<DateTimeFilterInput>;
  role: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  nodes: Array<UsersPermissionsPermission>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt: Maybe<Scalars['DateTime']['output']>;
  description: Maybe<Scalars['String']['output']>;
  documentId: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  permissions: Array<Maybe<UsersPermissionsPermission>>;
  permissions_connection: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  publishedAt: Maybe<Scalars['DateTime']['output']>;
  type: Maybe<Scalars['String']['output']>;
  updatedAt: Maybe<Scalars['DateTime']['output']>;
  users: Array<Maybe<UsersPermissionsUser>>;
  users_connection: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsRolePermissions_ConnectionArgs = {
  filters: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsRoleUsers_ConnectionArgs = {
  filters: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  nodes: Array<UsersPermissionsRole>;
  pageInfo: Pagination;
};

export type UsersPermissionsRoleFiltersInput = {
  and: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt: InputMaybe<DateTimeFilterInput>;
  description: InputMaybe<StringFilterInput>;
  documentId: InputMaybe<IdFilterInput>;
  name: InputMaybe<StringFilterInput>;
  not: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  publishedAt: InputMaybe<DateTimeFilterInput>;
  type: InputMaybe<StringFilterInput>;
  updatedAt: InputMaybe<DateTimeFilterInput>;
  users: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description: InputMaybe<Scalars['String']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
  permissions: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  type: InputMaybe<Scalars['String']['input']>;
  users: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked: Maybe<Scalars['Boolean']['output']>;
  confirmed: Maybe<Scalars['Boolean']['output']>;
  createdAt: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  email: Scalars['String']['output'];
  provider: Maybe<Scalars['String']['output']>;
  publishedAt: Maybe<Scalars['DateTime']['output']>;
  role: Maybe<UsersPermissionsRole>;
  updatedAt: Maybe<Scalars['DateTime']['output']>;
  username: Scalars['String']['output'];
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data: Maybe<UsersPermissionsUser>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  nodes: Array<UsersPermissionsUser>;
  pageInfo: Pagination;
};

export type UsersPermissionsUserFiltersInput = {
  and: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked: InputMaybe<BooleanFilterInput>;
  confirmed: InputMaybe<BooleanFilterInput>;
  createdAt: InputMaybe<DateTimeFilterInput>;
  documentId: InputMaybe<IdFilterInput>;
  email: InputMaybe<StringFilterInput>;
  not: InputMaybe<UsersPermissionsUserFiltersInput>;
  or: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  provider: InputMaybe<StringFilterInput>;
  publishedAt: InputMaybe<DateTimeFilterInput>;
  role: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt: InputMaybe<DateTimeFilterInput>;
  username: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  blocked: InputMaybe<Scalars['Boolean']['input']>;
  confirmed: InputMaybe<Scalars['Boolean']['input']>;
  email: InputMaybe<Scalars['String']['input']>;
  password: InputMaybe<Scalars['String']['input']>;
  provider: InputMaybe<Scalars['String']['input']>;
  publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  role: InputMaybe<Scalars['ID']['input']>;
  username: InputMaybe<Scalars['String']['input']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  nodes: Array<UsersPermissionsUser>;
};

export type DimplesQueryVariables = Exact<{ [key: string]: never; }>;


export type DimplesQuery = { __typename?: 'Query', dimples_connection: { __typename?: 'DimpleEntityResponseCollection', nodes: Array<{ __typename?: 'Dimple', documentId: string, Title: string | null, Sort: number, Image: { __typename?: 'ComponentSharedImage', alt: string | null, desktop: { __typename?: 'UploadFile', url: string } | null, mobile: { __typename?: 'UploadFile', url: string } | null } | null }> } | null };

export type GlobalDataQueryVariables = Exact<{
  filters: InputMaybe<MenuItemFiltersInput>;
}>;


export type GlobalDataQuery = { __typename?: 'Query', menuItems_connection: { __typename?: 'MenuItemEntityResponseCollection', nodes: Array<{ __typename?: 'MenuItem', title: string, order: number, side: Enum_Menuitem_Side | null, path: string | null, isDisabled: boolean | null, children: Array<{ __typename?: 'MenuItem', path: string | null, title: string, isDisabled: boolean | null } | null> }> } | null, cta: { __typename?: 'Cta', text: string, image: { __typename?: 'ComponentSharedImage', alt: string | null, desktop: { __typename?: 'UploadFile', url: string } | null, mobile: { __typename?: 'UploadFile', url: string } | null }, tgLink: { __typename?: 'ComponentSharedLink', href: string | null, label: string, leftText: string | null, rightText: string | null } | null, title: { __typename?: 'ComponentSharedColorizedText', colored: string | null, text: string | null } | null, vkLink: { __typename?: 'ComponentSharedLink', href: string | null, label: string, leftText: string | null, rightText: string | null } | null } | null, footer: { __typename?: 'Footer', copyRight: string | null, privacy: { __typename?: 'ComponentSharedLink', href: string | null, label: string, leftText: string | null, rightText: string | null } | null, createdByWhom: { __typename?: 'ComponentSharedLink', href: string | null, label: string, leftText: string | null, rightText: string | null } | null } | null };

export type MainPageQueryVariables = Exact<{ [key: string]: never; }>;


export type MainPageQuery = { __typename?: 'Query', dimples_connection: { __typename?: 'DimpleEntityResponseCollection', nodes: Array<{ __typename?: 'Dimple', documentId: string, Title: string | null, Sort: number, Image: { __typename?: 'ComponentSharedImage', alt: string | null, desktop: { __typename?: 'UploadFile', url: string } | null, mobile: { __typename?: 'UploadFile', url: string } | null } | null }> } | null, homePage: { __typename?: 'HomePage', hero: { __typename?: 'ComponentWidgetsHero', bullets: Array<{ __typename?: 'ComponentSharedBullet', text: string | null, id: string } | null> | null, image: { __typename?: 'ComponentSharedImage', alt: string | null, desktop: { __typename?: 'UploadFile', url: string } | null, mobile: { __typename?: 'UploadFile', url: string } | null } | null, primaryButton: { __typename?: 'ComponentSharedLink', href: string | null, label: string, leftText: string | null, rightText: string | null } | null, secondaryButton: { __typename?: 'ComponentSharedLink', href: string | null, label: string, leftText: string | null, rightText: string | null } | null, title: { __typename?: 'ComponentSharedColorizedText', text: string | null, colored: string | null } | null } | null, tasks: { __typename?: 'ComponentWidgetsTasks', text: string | null, title: { __typename?: 'ComponentSharedColorizedText', colored: string | null, text: string | null } | null, servicePages_connection: { __typename?: 'ServicePageRelationResponseCollection', nodes: Array<{ __typename?: 'ServicePage', order: number, slug: string | null, title: string | null, documentId: string }> } | null } | null, about: { __typename?: 'ComponentWidgetsAbout', topText: string | null, bottomText: string | null, title: { __typename?: 'ComponentSharedColorizedText', colored: string | null, text: string | null } | null, button: { __typename?: 'ComponentSharedLink', href: string | null, label: string, leftText: string | null, rightText: string | null } | null, advantages: Array<{ __typename?: 'ComponentSharedAdvantage', id: string, label: string | null, value: string | null, image: { __typename?: 'ComponentSharedImage', alt: string | null, desktop: { __typename?: 'UploadFile', url: string } | null, mobile: { __typename?: 'UploadFile', url: string } | null } | null } | null> | null } | null, reviews: { __typename?: 'ComponentWidgetsReviews', title: { __typename?: 'ComponentSharedColorizedText', colored: string | null, text: string | null } | null, profi: { __typename?: 'ComponentSharedLink', href: string | null, label: string, leftText: string | null, rightText: string | null } | null, items_connection: { __typename?: 'ReviewRelationResponseCollection', nodes: Array<{ __typename?: 'Review', age: number | null, documentId: string, name: string, order: number, showOnMainPage: boolean | null, text: string | null, reviewsTags_connection: { __typename?: 'ReviewsTagRelationResponseCollection', nodes: Array<{ __typename?: 'ReviewsTag', documentId: string, text: string, value: string }> } | null }> } | null } | null, classesFormat: { __typename?: 'ComponentWidgetsSlassFormat', title: { __typename?: 'ComponentSharedColorizedText', colored: string | null, text: string | null } | null, items: Array<{ __typename?: 'ComponentSharedFormatItem', id: string, description: string, title: string, icon: { __typename?: 'UploadFile', url: string, alternativeText: string | null } } | null> | null } | null, faq: { __typename?: 'ComponentWidgetsFaq', title: { __typename?: 'ComponentSharedColorizedText', colored: string | null, text: string | null } | null, faqItems_connection: { __typename?: 'FaqItemRelationResponseCollection', nodes: Array<{ __typename?: 'FaqItem', question: string, answer: string, documentId: string }> } | null } | null } | null };
