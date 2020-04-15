import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * The `DateTime` scalar type represents a DateTime
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  DateTime: any;
  /**
   * Leverages the internal Python implmeentation of UUID (uuid.UUID) to provide native UUID objects
   * in fields, resolvers and input.
   */
  UUID: any;
  /**
   * The `Date` scalar type represents a Date
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  Date: any;
  /**
   * The `GenericScalar` scalar type represents a generic
   * GraphQL scalar value that could be:
   * String, Boolean, Int, Float, List or Object.
   */
  GenericScalar: any;
};

export type AuthorType = {
   __typename?: 'AuthorType';
  id: Scalars['ID'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  dateOfBirth?: Maybe<Scalars['Date']>;
  dateOfDeath?: Maybe<Scalars['Date']>;
  slug: Scalars['String'];
  bookSet: Array<BookType>;
};

export type BookCreate = {
   __typename?: 'BookCreate';
  book?: Maybe<BookType>;
};

export type BookDelete = {
   __typename?: 'BookDelete';
  ok?: Maybe<Scalars['Boolean']>;
};

export type BookInputType = {
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  isbn?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  language?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  genres?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type BookInstanceCreate = {
   __typename?: 'BookInstanceCreate';
  instance?: Maybe<BookInstanceType>;
};

export type BookInstanceDelete = {
   __typename?: 'BookInstanceDelete';
  ok?: Maybe<Scalars['Boolean']>;
};

export type BookInstanceInputType = {
  id?: Maybe<Scalars['ID']>;
  book?: Maybe<Scalars['ID']>;
  borrower?: Maybe<Scalars['ID']>;
  imprint?: Maybe<Scalars['String']>;
  dueBack?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

/** An enumeration. */
export enum BookInstanceStatus {
  /** Maintenance */
  M = 'M',
  /** On loan */
  O = 'O',
  /** Available */
  A = 'A',
  /** Reserved */
  R = 'R'
}

export type BookInstanceType = {
   __typename?: 'BookInstanceType';
  /** Unique ID for this particular book across whole library */
  id: Scalars['UUID'];
  book?: Maybe<BookType>;
  imprint: Scalars['String'];
  dueBack?: Maybe<Scalars['Date']>;
  borrower?: Maybe<UserType>;
  owner?: Maybe<UserType>;
  /** Book availability */
  status?: Maybe<BookInstanceStatus>;
};

export type BookInstanceUpdate = {
   __typename?: 'BookInstanceUpdate';
  instance?: Maybe<BookInstanceType>;
};

export type BookType = {
   __typename?: 'BookType';
  id: Scalars['ID'];
  title: Scalars['String'];
  author?: Maybe<AuthorType>;
  slug: Scalars['String'];
  /** Enter a brief description of the book */
  summary: Scalars['String'];
  /** 13 Character <a href="https://www.isbn-international.org/content/what-isbn">ISBN number</a> */
  isbn: Scalars['String'];
  /** Select a genre for this book */
  genre: Array<GenreType>;
  language?: Maybe<LanguageType>;
  /** Book cover image link */
  image: Scalars['String'];
  bookinstanceSet: Array<BookInstanceType>;
  reviewSet: Array<ReviewType>;
};

export type BookUpdate = {
   __typename?: 'BookUpdate';
  book?: Maybe<BookType>;
};




export type GenreType = {
   __typename?: 'GenreType';
  id: Scalars['ID'];
  /** Enter a book genre (e.g. Science Fiction) */
  name: Scalars['String'];
  slug: Scalars['String'];
  /** Select a genre for this book */
  bookSet: Array<BookType>;
};

export type LanguageType = {
   __typename?: 'LanguageType';
  id: Scalars['ID'];
  /** Enter the book's natural language (e.g. English, French, Japanese etc.) */
  name: Scalars['String'];
  slug: Scalars['String'];
  bookSet: Array<BookType>;
};

export type Mutation = {
   __typename?: 'Mutation';
  userCreate?: Maybe<UserCreate>;
  /** Obtain JSON Web Token mutation */
  tokenAuth?: Maybe<ObtainJsonWebToken>;
  verifyToken?: Maybe<Verify>;
  refreshToken?: Maybe<Refresh>;
  createReview?: Maybe<ReviewCreate>;
  updateReview?: Maybe<ReviewUpdate>;
  deleteReview?: Maybe<ReviewDelete>;
  createBook?: Maybe<BookCreate>;
  updateBook?: Maybe<BookUpdate>;
  deleteBook?: Maybe<BookDelete>;
  createBookInstance?: Maybe<BookInstanceCreate>;
  updateBookInstance?: Maybe<BookInstanceUpdate>;
  deleteBookInstance?: Maybe<BookInstanceDelete>;
};


export type MutationUserCreateArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationTokenAuthArgs = {
  username: Scalars['String'];
  password: Scalars['String'];
};


export type MutationVerifyTokenArgs = {
  token?: Maybe<Scalars['String']>;
};


export type MutationRefreshTokenArgs = {
  token?: Maybe<Scalars['String']>;
};


export type MutationCreateReviewArgs = {
  input: ReviewInputType;
};


export type MutationUpdateReviewArgs = {
  input: ReviewInputType;
};


export type MutationDeleteReviewArgs = {
  id: Scalars['ID'];
};


export type MutationCreateBookArgs = {
  input: BookInputType;
};


export type MutationUpdateBookArgs = {
  input: BookInputType;
};


export type MutationDeleteBookArgs = {
  id: Scalars['ID'];
};


export type MutationCreateBookInstanceArgs = {
  input: BookInstanceInputType;
};


export type MutationUpdateBookInstanceArgs = {
  input: BookInstanceInputType;
};


export type MutationDeleteBookInstanceArgs = {
  id: Scalars['ID'];
};

/** Obtain JSON Web Token mutation */
export type ObtainJsonWebToken = {
   __typename?: 'ObtainJSONWebToken';
  payload: Scalars['GenericScalar'];
  refreshExpiresIn: Scalars['Int'];
  token: Scalars['String'];
};

export type Query = {
   __typename?: 'Query';
  currentUser?: Maybe<UserType>;
  books?: Maybe<Array<Maybe<BookType>>>;
  book?: Maybe<BookType>;
  authors?: Maybe<Array<Maybe<AuthorType>>>;
  author?: Maybe<AuthorType>;
};


export type QueryBooksArgs = {
  search?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryBookArgs = {
  id: Scalars['ID'];
};


export type QueryAuthorArgs = {
  id: Scalars['ID'];
};

export type Refresh = {
   __typename?: 'Refresh';
  payload: Scalars['GenericScalar'];
  refreshExpiresIn: Scalars['Int'];
  token: Scalars['String'];
};

export type ReviewCreate = {
   __typename?: 'ReviewCreate';
  review?: Maybe<ReviewType>;
};

export type ReviewDelete = {
   __typename?: 'ReviewDelete';
  ok?: Maybe<Scalars['Boolean']>;
};

export type ReviewInputType = {
  id?: Maybe<Scalars['ID']>;
  user?: Maybe<Scalars['ID']>;
  book?: Maybe<Scalars['ID']>;
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Int']>;
};

export type ReviewType = {
   __typename?: 'ReviewType';
  id: Scalars['ID'];
  book: BookType;
  user: UserType;
  pubDate: Scalars['DateTime'];
  comment: Scalars['String'];
  value: Scalars['Int'];
};

export type ReviewUpdate = {
   __typename?: 'ReviewUpdate';
  review?: Maybe<ReviewType>;
};

export type UserCreate = {
   __typename?: 'UserCreate';
  user?: Maybe<UserType>;
};

export type UserType = {
   __typename?: 'UserType';
  id: Scalars['ID'];
  lastLogin?: Maybe<Scalars['DateTime']>;
  /** Designates that this user has all permissions without explicitly assigning them. */
  isSuperuser: Scalars['Boolean'];
  /** Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only. */
  username: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  /** Designates whether the user can log into this admin site. */
  isStaff: Scalars['Boolean'];
  /** Designates whether this user should be treated as active. Unselect this instead of deleting accounts. */
  isActive: Scalars['Boolean'];
  dateJoined: Scalars['DateTime'];
  borrower: Array<BookInstanceType>;
  owner: Array<BookInstanceType>;
  reviewSet: Array<ReviewType>;
};


export type Verify = {
   __typename?: 'Verify';
  payload: Scalars['GenericScalar'];
};

export type BookQueryVariables = {
  id: Scalars['ID'];
};


export type BookQuery = (
  { __typename?: 'Query' }
  & { book?: Maybe<(
    { __typename?: 'BookType' }
    & Pick<BookType, 'id' | 'title' | 'summary' | 'isbn' | 'image'>
    & { author?: Maybe<(
      { __typename?: 'AuthorType' }
      & Pick<AuthorType, 'firstName' | 'lastName'>
    )>, genre: Array<(
      { __typename?: 'GenreType' }
      & Pick<GenreType, 'name'>
    )>, language?: Maybe<(
      { __typename?: 'LanguageType' }
      & Pick<LanguageType, 'name'>
    )>, reviewSet: Array<(
      { __typename?: 'ReviewType' }
      & Pick<ReviewType, 'comment' | 'pubDate'>
      & { user: (
        { __typename?: 'UserType' }
        & Pick<UserType, 'username'>
      ) }
    )> }
  )> }
);

export type BooksQueryVariables = {
  search?: Maybe<Scalars['String']>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type BooksQuery = (
  { __typename?: 'Query' }
  & { books?: Maybe<Array<Maybe<(
    { __typename?: 'BookType' }
    & Pick<BookType, 'id' | 'title' | 'summary' | 'isbn' | 'image'>
    & { author?: Maybe<(
      { __typename?: 'AuthorType' }
      & Pick<AuthorType, 'firstName' | 'lastName'>
    )>, genre: Array<(
      { __typename?: 'GenreType' }
      & Pick<GenreType, 'name'>
    )>, language?: Maybe<(
      { __typename?: 'LanguageType' }
      & Pick<LanguageType, 'name'>
    )>, reviewSet: Array<(
      { __typename?: 'ReviewType' }
      & Pick<ReviewType, 'comment' | 'pubDate'>
      & { user: (
        { __typename?: 'UserType' }
        & Pick<UserType, 'username'>
      ) }
    )> }
  )>>> }
);

export type CreateBookMutationVariables = {
  title: Scalars['String'];
  summary: Scalars['String'];
  isbn: Scalars['String'];
  language: Scalars['String'];
  author: Scalars['String'];
  image: Scalars['String'];
  genres?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type CreateBookMutation = (
  { __typename?: 'Mutation' }
  & { createBook?: Maybe<(
    { __typename?: 'BookCreate' }
    & { book?: Maybe<(
      { __typename?: 'BookType' }
      & Pick<BookType, 'title' | 'image'>
      & { author?: Maybe<(
        { __typename?: 'AuthorType' }
        & Pick<AuthorType, 'firstName' | 'lastName'>
      )> }
    )> }
  )> }
);

export type CreateBookInstanceMutationVariables = {
  book: Scalars['ID'];
  imprint: Scalars['String'];
  status: Scalars['String'];
};


export type CreateBookInstanceMutation = (
  { __typename?: 'Mutation' }
  & { createBookInstance?: Maybe<(
    { __typename?: 'BookInstanceCreate' }
    & { instance?: Maybe<(
      { __typename?: 'BookInstanceType' }
      & Pick<BookInstanceType, 'id' | 'status' | 'imprint'>
      & { owner?: Maybe<(
        { __typename?: 'UserType' }
        & Pick<UserType, 'username'>
      )>, book?: Maybe<(
        { __typename?: 'BookType' }
        & Pick<BookType, 'title' | 'image'>
      )> }
    )> }
  )> }
);

export type CreateReviewMutationVariables = {
  value: Scalars['Int'];
  comment: Scalars['String'];
  book: Scalars['ID'];
};


export type CreateReviewMutation = (
  { __typename?: 'Mutation' }
  & { createReview?: Maybe<(
    { __typename?: 'ReviewCreate' }
    & { review?: Maybe<(
      { __typename?: 'ReviewType' }
      & Pick<ReviewType, 'id' | 'value' | 'comment'>
      & { user: (
        { __typename?: 'UserType' }
        & Pick<UserType, 'username'>
      ) }
    )> }
  )> }
);

export type UserCreateMutationVariables = {
  email: Scalars['String'];
  username: Scalars['String'];
  password: Scalars['String'];
};


export type UserCreateMutation = (
  { __typename?: 'Mutation' }
  & { userCreate?: Maybe<(
    { __typename?: 'UserCreate' }
    & { user?: Maybe<(
      { __typename?: 'UserType' }
      & Pick<UserType, 'id' | 'username' | 'email' | 'isStaff' | 'isSuperuser'>
    )> }
  )> }
);

export type CurrentUserQueryVariables = {};


export type CurrentUserQuery = (
  { __typename?: 'Query' }
  & { currentUser?: Maybe<(
    { __typename?: 'UserType' }
    & Pick<UserType, 'id' | 'username' | 'email' | 'isStaff' | 'isSuperuser' | 'firstName' | 'lastName'>
    & { owner: Array<(
      { __typename?: 'BookInstanceType' }
      & Pick<BookInstanceType, 'id' | 'status'>
      & { book?: Maybe<(
        { __typename?: 'BookType' }
        & Pick<BookType, 'id' | 'title' | 'image' | 'summary'>
        & { author?: Maybe<(
          { __typename?: 'AuthorType' }
          & Pick<AuthorType, 'firstName' | 'lastName'>
        )> }
      )> }
    )>, reviewSet: Array<(
      { __typename?: 'ReviewType' }
      & Pick<ReviewType, 'id' | 'value' | 'comment' | 'pubDate'>
      & { book: (
        { __typename?: 'BookType' }
        & Pick<BookType, 'id' | 'title' | 'image'>
        & { author?: Maybe<(
          { __typename?: 'AuthorType' }
          & Pick<AuthorType, 'firstName' | 'lastName'>
        )> }
      ) }
    )> }
  )> }
);

export type DeleteBookMutationVariables = {
  id: Scalars['ID'];
};


export type DeleteBookMutation = (
  { __typename?: 'Mutation' }
  & { deleteBook?: Maybe<(
    { __typename?: 'BookDelete' }
    & Pick<BookDelete, 'ok'>
  )> }
);

export type DeleteBookInstanceMutationVariables = {
  id: Scalars['ID'];
};


export type DeleteBookInstanceMutation = (
  { __typename?: 'Mutation' }
  & { deleteBookInstance?: Maybe<(
    { __typename?: 'BookInstanceDelete' }
    & Pick<BookInstanceDelete, 'ok'>
  )> }
);

export type DeleteReviewMutationVariables = {
  id: Scalars['ID'];
};


export type DeleteReviewMutation = (
  { __typename?: 'Mutation' }
  & { deleteReview?: Maybe<(
    { __typename?: 'ReviewDelete' }
    & Pick<ReviewDelete, 'ok'>
  )> }
);

export type LoginMutationVariables = {
  username: Scalars['String'];
  password: Scalars['String'];
};


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { tokenAuth?: Maybe<(
    { __typename?: 'ObtainJSONWebToken' }
    & Pick<ObtainJsonWebToken, 'token' | 'refreshExpiresIn' | 'payload'>
  )> }
);

export type RefreshMutationVariables = {
  token: Scalars['String'];
};


export type RefreshMutation = (
  { __typename?: 'Mutation' }
  & { refreshToken?: Maybe<(
    { __typename?: 'Refresh' }
    & Pick<Refresh, 'refreshExpiresIn' | 'payload' | 'token'>
  )> }
);

export type UpdateBookMutationVariables = {
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  isbn?: Maybe<Scalars['String']>;
  language?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  genres?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type UpdateBookMutation = (
  { __typename?: 'Mutation' }
  & { updateBook?: Maybe<(
    { __typename?: 'BookUpdate' }
    & { book?: Maybe<(
      { __typename?: 'BookType' }
      & Pick<BookType, 'title' | 'image'>
      & { author?: Maybe<(
        { __typename?: 'AuthorType' }
        & Pick<AuthorType, 'firstName' | 'lastName'>
      )> }
    )> }
  )> }
);

export type UpdateBookInstanceMutationVariables = {
  id: Scalars['ID'];
  status: Scalars['String'];
  imprint: Scalars['String'];
  borrower?: Maybe<Scalars['ID']>;
  due_back?: Maybe<Scalars['String']>;
};


export type UpdateBookInstanceMutation = (
  { __typename?: 'Mutation' }
  & { updateBookInstance?: Maybe<(
    { __typename?: 'BookInstanceUpdate' }
    & { instance?: Maybe<(
      { __typename?: 'BookInstanceType' }
      & Pick<BookInstanceType, 'id' | 'status' | 'imprint'>
      & { owner?: Maybe<(
        { __typename?: 'UserType' }
        & Pick<UserType, 'username'>
      )>, book?: Maybe<(
        { __typename?: 'BookType' }
        & Pick<BookType, 'title' | 'image'>
      )> }
    )> }
  )> }
);

export type UpdateReviewMutationVariables = {
  id: Scalars['ID'];
  value: Scalars['Int'];
  comment: Scalars['String'];
  book?: Maybe<Scalars['ID']>;
};


export type UpdateReviewMutation = (
  { __typename?: 'Mutation' }
  & { updateReview?: Maybe<(
    { __typename?: 'ReviewUpdate' }
    & { review?: Maybe<(
      { __typename?: 'ReviewType' }
      & Pick<ReviewType, 'id' | 'value' | 'comment'>
    )> }
  )> }
);

export type VerifyMutationVariables = {
  token: Scalars['String'];
};


export type VerifyMutation = (
  { __typename?: 'Mutation' }
  & { verifyToken?: Maybe<(
    { __typename?: 'Verify' }
    & Pick<Verify, 'payload'>
  )> }
);


export const BookDocument = gql`
    query Book($id: ID!) {
  book(id: $id) {
    id
    title
    author {
      firstName
      lastName
    }
    summary
    isbn
    genre {
      name
    }
    language {
      name
    }
    image
    reviewSet {
      user {
        username
      }
      comment
      pubDate
    }
  }
}
    `;

/**
 * __useBookQuery__
 *
 * To run a query within a React component, call `useBookQuery` and pass it any options that fit your needs.
 * When your component renders, `useBookQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBookQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useBookQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<BookQuery, BookQueryVariables>) {
        return ApolloReactHooks.useQuery<BookQuery, BookQueryVariables>(BookDocument, baseOptions);
      }
export function useBookLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<BookQuery, BookQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<BookQuery, BookQueryVariables>(BookDocument, baseOptions);
        }
export type BookQueryHookResult = ReturnType<typeof useBookQuery>;
export type BookLazyQueryHookResult = ReturnType<typeof useBookLazyQuery>;
export type BookQueryResult = ApolloReactCommon.QueryResult<BookQuery, BookQueryVariables>;
export const BooksDocument = gql`
    query Books($search: String, $offset: Int, $limit: Int) {
  books(search: $search, offset: $offset, limit: $limit) {
    id
    title
    author {
      firstName
      lastName
    }
    summary
    isbn
    genre {
      name
    }
    language {
      name
    }
    image
    reviewSet {
      user {
        username
      }
      comment
      pubDate
    }
  }
}
    `;

/**
 * __useBooksQuery__
 *
 * To run a query within a React component, call `useBooksQuery` and pass it any options that fit your needs.
 * When your component renders, `useBooksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBooksQuery({
 *   variables: {
 *      search: // value for 'search'
 *      offset: // value for 'offset'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useBooksQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<BooksQuery, BooksQueryVariables>) {
        return ApolloReactHooks.useQuery<BooksQuery, BooksQueryVariables>(BooksDocument, baseOptions);
      }
export function useBooksLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<BooksQuery, BooksQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<BooksQuery, BooksQueryVariables>(BooksDocument, baseOptions);
        }
export type BooksQueryHookResult = ReturnType<typeof useBooksQuery>;
export type BooksLazyQueryHookResult = ReturnType<typeof useBooksLazyQuery>;
export type BooksQueryResult = ApolloReactCommon.QueryResult<BooksQuery, BooksQueryVariables>;
export const CreateBookDocument = gql`
    mutation CreateBook($title: String!, $summary: String!, $isbn: String!, $language: String!, $author: String!, $image: String!, $genres: [String]) {
  createBook(input: {title: $title, summary: $summary, isbn: $isbn, image: $image, language: $language, author: $author, genres: $genres}) {
    book {
      title
      author {
        firstName
        lastName
      }
      image
    }
  }
}
    `;
export type CreateBookMutationFn = ApolloReactCommon.MutationFunction<CreateBookMutation, CreateBookMutationVariables>;

/**
 * __useCreateBookMutation__
 *
 * To run a mutation, you first call `useCreateBookMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBookMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBookMutation, { data, loading, error }] = useCreateBookMutation({
 *   variables: {
 *      title: // value for 'title'
 *      summary: // value for 'summary'
 *      isbn: // value for 'isbn'
 *      language: // value for 'language'
 *      author: // value for 'author'
 *      image: // value for 'image'
 *      genres: // value for 'genres'
 *   },
 * });
 */
export function useCreateBookMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateBookMutation, CreateBookMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateBookMutation, CreateBookMutationVariables>(CreateBookDocument, baseOptions);
      }
export type CreateBookMutationHookResult = ReturnType<typeof useCreateBookMutation>;
export type CreateBookMutationResult = ApolloReactCommon.MutationResult<CreateBookMutation>;
export type CreateBookMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateBookMutation, CreateBookMutationVariables>;
export const CreateBookInstanceDocument = gql`
    mutation CreateBookInstance($book: ID!, $imprint: String!, $status: String!) {
  createBookInstance(input: {book: $book, imprint: $imprint, status: $status}) {
    instance {
      id
      status
      imprint
      owner {
        username
      }
      book {
        title
        image
      }
    }
  }
}
    `;
export type CreateBookInstanceMutationFn = ApolloReactCommon.MutationFunction<CreateBookInstanceMutation, CreateBookInstanceMutationVariables>;

/**
 * __useCreateBookInstanceMutation__
 *
 * To run a mutation, you first call `useCreateBookInstanceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBookInstanceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBookInstanceMutation, { data, loading, error }] = useCreateBookInstanceMutation({
 *   variables: {
 *      book: // value for 'book'
 *      imprint: // value for 'imprint'
 *      status: // value for 'status'
 *   },
 * });
 */
export function useCreateBookInstanceMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateBookInstanceMutation, CreateBookInstanceMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateBookInstanceMutation, CreateBookInstanceMutationVariables>(CreateBookInstanceDocument, baseOptions);
      }
export type CreateBookInstanceMutationHookResult = ReturnType<typeof useCreateBookInstanceMutation>;
export type CreateBookInstanceMutationResult = ApolloReactCommon.MutationResult<CreateBookInstanceMutation>;
export type CreateBookInstanceMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateBookInstanceMutation, CreateBookInstanceMutationVariables>;
export const CreateReviewDocument = gql`
    mutation CreateReview($value: Int!, $comment: String!, $book: ID!) {
  createReview(input: {book: $book, value: $value, comment: $comment}) {
    review {
      id
      value
      comment
      user {
        username
      }
    }
  }
}
    `;
export type CreateReviewMutationFn = ApolloReactCommon.MutationFunction<CreateReviewMutation, CreateReviewMutationVariables>;

/**
 * __useCreateReviewMutation__
 *
 * To run a mutation, you first call `useCreateReviewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateReviewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createReviewMutation, { data, loading, error }] = useCreateReviewMutation({
 *   variables: {
 *      value: // value for 'value'
 *      comment: // value for 'comment'
 *      book: // value for 'book'
 *   },
 * });
 */
export function useCreateReviewMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateReviewMutation, CreateReviewMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateReviewMutation, CreateReviewMutationVariables>(CreateReviewDocument, baseOptions);
      }
export type CreateReviewMutationHookResult = ReturnType<typeof useCreateReviewMutation>;
export type CreateReviewMutationResult = ApolloReactCommon.MutationResult<CreateReviewMutation>;
export type CreateReviewMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateReviewMutation, CreateReviewMutationVariables>;
export const UserCreateDocument = gql`
    mutation UserCreate($email: String!, $username: String!, $password: String!) {
  userCreate(email: $email, username: $username, password: $password) {
    user {
      id
      username
      email
      isStaff
      isSuperuser
    }
  }
}
    `;
export type UserCreateMutationFn = ApolloReactCommon.MutationFunction<UserCreateMutation, UserCreateMutationVariables>;

/**
 * __useUserCreateMutation__
 *
 * To run a mutation, you first call `useUserCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUserCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userCreateMutation, { data, loading, error }] = useUserCreateMutation({
 *   variables: {
 *      email: // value for 'email'
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useUserCreateMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UserCreateMutation, UserCreateMutationVariables>) {
        return ApolloReactHooks.useMutation<UserCreateMutation, UserCreateMutationVariables>(UserCreateDocument, baseOptions);
      }
export type UserCreateMutationHookResult = ReturnType<typeof useUserCreateMutation>;
export type UserCreateMutationResult = ApolloReactCommon.MutationResult<UserCreateMutation>;
export type UserCreateMutationOptions = ApolloReactCommon.BaseMutationOptions<UserCreateMutation, UserCreateMutationVariables>;
export const CurrentUserDocument = gql`
    query CurrentUser {
  currentUser {
    id
    username
    email
    isStaff
    isSuperuser
    firstName
    lastName
    owner {
      id
      status
      book {
        id
        title
        image
        summary
        author {
          firstName
          lastName
        }
      }
    }
    reviewSet {
      id
      value
      comment
      pubDate
      book {
        id
        title
        image
        author {
          firstName
          lastName
        }
      }
    }
  }
}
    `;

/**
 * __useCurrentUserQuery__
 *
 * To run a query within a React component, call `useCurrentUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useCurrentUserQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>) {
        return ApolloReactHooks.useQuery<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, baseOptions);
      }
export function useCurrentUserLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, baseOptions);
        }
export type CurrentUserQueryHookResult = ReturnType<typeof useCurrentUserQuery>;
export type CurrentUserLazyQueryHookResult = ReturnType<typeof useCurrentUserLazyQuery>;
export type CurrentUserQueryResult = ApolloReactCommon.QueryResult<CurrentUserQuery, CurrentUserQueryVariables>;
export const DeleteBookDocument = gql`
    mutation DeleteBook($id: ID!) {
  deleteBook(id: $id) {
    ok
  }
}
    `;
export type DeleteBookMutationFn = ApolloReactCommon.MutationFunction<DeleteBookMutation, DeleteBookMutationVariables>;

/**
 * __useDeleteBookMutation__
 *
 * To run a mutation, you first call `useDeleteBookMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteBookMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteBookMutation, { data, loading, error }] = useDeleteBookMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteBookMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteBookMutation, DeleteBookMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteBookMutation, DeleteBookMutationVariables>(DeleteBookDocument, baseOptions);
      }
export type DeleteBookMutationHookResult = ReturnType<typeof useDeleteBookMutation>;
export type DeleteBookMutationResult = ApolloReactCommon.MutationResult<DeleteBookMutation>;
export type DeleteBookMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteBookMutation, DeleteBookMutationVariables>;
export const DeleteBookInstanceDocument = gql`
    mutation DeleteBookInstance($id: ID!) {
  deleteBookInstance(id: $id) {
    ok
  }
}
    `;
export type DeleteBookInstanceMutationFn = ApolloReactCommon.MutationFunction<DeleteBookInstanceMutation, DeleteBookInstanceMutationVariables>;

/**
 * __useDeleteBookInstanceMutation__
 *
 * To run a mutation, you first call `useDeleteBookInstanceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteBookInstanceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteBookInstanceMutation, { data, loading, error }] = useDeleteBookInstanceMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteBookInstanceMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteBookInstanceMutation, DeleteBookInstanceMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteBookInstanceMutation, DeleteBookInstanceMutationVariables>(DeleteBookInstanceDocument, baseOptions);
      }
export type DeleteBookInstanceMutationHookResult = ReturnType<typeof useDeleteBookInstanceMutation>;
export type DeleteBookInstanceMutationResult = ApolloReactCommon.MutationResult<DeleteBookInstanceMutation>;
export type DeleteBookInstanceMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteBookInstanceMutation, DeleteBookInstanceMutationVariables>;
export const DeleteReviewDocument = gql`
    mutation DeleteReview($id: ID!) {
  deleteReview(id: $id) {
    ok
  }
}
    `;
export type DeleteReviewMutationFn = ApolloReactCommon.MutationFunction<DeleteReviewMutation, DeleteReviewMutationVariables>;

/**
 * __useDeleteReviewMutation__
 *
 * To run a mutation, you first call `useDeleteReviewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteReviewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteReviewMutation, { data, loading, error }] = useDeleteReviewMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteReviewMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteReviewMutation, DeleteReviewMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteReviewMutation, DeleteReviewMutationVariables>(DeleteReviewDocument, baseOptions);
      }
export type DeleteReviewMutationHookResult = ReturnType<typeof useDeleteReviewMutation>;
export type DeleteReviewMutationResult = ApolloReactCommon.MutationResult<DeleteReviewMutation>;
export type DeleteReviewMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteReviewMutation, DeleteReviewMutationVariables>;
export const LoginDocument = gql`
    mutation Login($username: String!, $password: String!) {
  tokenAuth(username: $username, password: $password) {
    token
    refreshExpiresIn
    payload
  }
}
    `;
export type LoginMutationFn = ApolloReactCommon.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return ApolloReactHooks.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = ApolloReactCommon.MutationResult<LoginMutation>;
export type LoginMutationOptions = ApolloReactCommon.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const RefreshDocument = gql`
    mutation Refresh($token: String!) {
  refreshToken(token: $token) {
    refreshExpiresIn
    payload
    token
  }
}
    `;
export type RefreshMutationFn = ApolloReactCommon.MutationFunction<RefreshMutation, RefreshMutationVariables>;

/**
 * __useRefreshMutation__
 *
 * To run a mutation, you first call `useRefreshMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRefreshMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [refreshMutation, { data, loading, error }] = useRefreshMutation({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useRefreshMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RefreshMutation, RefreshMutationVariables>) {
        return ApolloReactHooks.useMutation<RefreshMutation, RefreshMutationVariables>(RefreshDocument, baseOptions);
      }
export type RefreshMutationHookResult = ReturnType<typeof useRefreshMutation>;
export type RefreshMutationResult = ApolloReactCommon.MutationResult<RefreshMutation>;
export type RefreshMutationOptions = ApolloReactCommon.BaseMutationOptions<RefreshMutation, RefreshMutationVariables>;
export const UpdateBookDocument = gql`
    mutation UpdateBook($id: ID!, $title: String, $summary: String, $isbn: String, $language: String, $author: String, $image: String, $genres: [String]) {
  updateBook(input: {id: $id, title: $title, summary: $summary, isbn: $isbn, image: $image, language: $language, author: $author, genres: $genres}) {
    book {
      title
      author {
        firstName
        lastName
      }
      image
    }
  }
}
    `;
export type UpdateBookMutationFn = ApolloReactCommon.MutationFunction<UpdateBookMutation, UpdateBookMutationVariables>;

/**
 * __useUpdateBookMutation__
 *
 * To run a mutation, you first call `useUpdateBookMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateBookMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateBookMutation, { data, loading, error }] = useUpdateBookMutation({
 *   variables: {
 *      id: // value for 'id'
 *      title: // value for 'title'
 *      summary: // value for 'summary'
 *      isbn: // value for 'isbn'
 *      language: // value for 'language'
 *      author: // value for 'author'
 *      image: // value for 'image'
 *      genres: // value for 'genres'
 *   },
 * });
 */
export function useUpdateBookMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateBookMutation, UpdateBookMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateBookMutation, UpdateBookMutationVariables>(UpdateBookDocument, baseOptions);
      }
export type UpdateBookMutationHookResult = ReturnType<typeof useUpdateBookMutation>;
export type UpdateBookMutationResult = ApolloReactCommon.MutationResult<UpdateBookMutation>;
export type UpdateBookMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateBookMutation, UpdateBookMutationVariables>;
export const UpdateBookInstanceDocument = gql`
    mutation UpdateBookInstance($id: ID!, $status: String!, $imprint: String!, $borrower: ID, $due_back: String) {
  updateBookInstance(input: {id: $id, borrower: $borrower, imprint: $imprint, dueBack: $due_back, status: $status}) {
    instance {
      id
      status
      imprint
      owner {
        username
      }
      book {
        title
        image
      }
    }
  }
}
    `;
export type UpdateBookInstanceMutationFn = ApolloReactCommon.MutationFunction<UpdateBookInstanceMutation, UpdateBookInstanceMutationVariables>;

/**
 * __useUpdateBookInstanceMutation__
 *
 * To run a mutation, you first call `useUpdateBookInstanceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateBookInstanceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateBookInstanceMutation, { data, loading, error }] = useUpdateBookInstanceMutation({
 *   variables: {
 *      id: // value for 'id'
 *      status: // value for 'status'
 *      imprint: // value for 'imprint'
 *      borrower: // value for 'borrower'
 *      due_back: // value for 'due_back'
 *   },
 * });
 */
export function useUpdateBookInstanceMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateBookInstanceMutation, UpdateBookInstanceMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateBookInstanceMutation, UpdateBookInstanceMutationVariables>(UpdateBookInstanceDocument, baseOptions);
      }
export type UpdateBookInstanceMutationHookResult = ReturnType<typeof useUpdateBookInstanceMutation>;
export type UpdateBookInstanceMutationResult = ApolloReactCommon.MutationResult<UpdateBookInstanceMutation>;
export type UpdateBookInstanceMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateBookInstanceMutation, UpdateBookInstanceMutationVariables>;
export const UpdateReviewDocument = gql`
    mutation UpdateReview($id: ID!, $value: Int!, $comment: String!, $book: ID) {
  updateReview(input: {id: $id, book: $book, value: $value, comment: $comment}) {
    review {
      id
      value
      comment
    }
  }
}
    `;
export type UpdateReviewMutationFn = ApolloReactCommon.MutationFunction<UpdateReviewMutation, UpdateReviewMutationVariables>;

/**
 * __useUpdateReviewMutation__
 *
 * To run a mutation, you first call `useUpdateReviewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateReviewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateReviewMutation, { data, loading, error }] = useUpdateReviewMutation({
 *   variables: {
 *      id: // value for 'id'
 *      value: // value for 'value'
 *      comment: // value for 'comment'
 *      book: // value for 'book'
 *   },
 * });
 */
export function useUpdateReviewMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateReviewMutation, UpdateReviewMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateReviewMutation, UpdateReviewMutationVariables>(UpdateReviewDocument, baseOptions);
      }
export type UpdateReviewMutationHookResult = ReturnType<typeof useUpdateReviewMutation>;
export type UpdateReviewMutationResult = ApolloReactCommon.MutationResult<UpdateReviewMutation>;
export type UpdateReviewMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateReviewMutation, UpdateReviewMutationVariables>;
export const VerifyDocument = gql`
    mutation Verify($token: String!) {
  verifyToken(token: $token) {
    payload
  }
}
    `;
export type VerifyMutationFn = ApolloReactCommon.MutationFunction<VerifyMutation, VerifyMutationVariables>;

/**
 * __useVerifyMutation__
 *
 * To run a mutation, you first call `useVerifyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVerifyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [verifyMutation, { data, loading, error }] = useVerifyMutation({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useVerifyMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<VerifyMutation, VerifyMutationVariables>) {
        return ApolloReactHooks.useMutation<VerifyMutation, VerifyMutationVariables>(VerifyDocument, baseOptions);
      }
export type VerifyMutationHookResult = ReturnType<typeof useVerifyMutation>;
export type VerifyMutationResult = ApolloReactCommon.MutationResult<VerifyMutation>;
export type VerifyMutationOptions = ApolloReactCommon.BaseMutationOptions<VerifyMutation, VerifyMutationVariables>;