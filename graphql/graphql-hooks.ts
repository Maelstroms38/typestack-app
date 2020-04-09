import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  DateTime: any,
  Date: any,
  GenericScalar: any,
};

export type AuthorType = {
   __typename?: 'AuthorType',
  id: Scalars['ID'],
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  dateOfBirth?: Maybe<Scalars['Date']>,
  dateOfDeath?: Maybe<Scalars['Date']>,
  bookSet: Array<BookType>,
};

export type BookCreate = {
   __typename?: 'BookCreate',
  book?: Maybe<BookType>,
};

export type BookDelete = {
   __typename?: 'BookDelete',
  ok?: Maybe<Scalars['Boolean']>,
};

export type BookInputType = {
  title?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  isbn?: Maybe<Scalars['String']>,
  image?: Maybe<Scalars['String']>,
  language?: Maybe<Scalars['ID']>,
  author?: Maybe<Scalars['ID']>,
};

export type BookType = {
   __typename?: 'BookType',
  id: Scalars['ID'],
  title: Scalars['String'],
  author?: Maybe<AuthorType>,
  summary: Scalars['String'],
  isbn: Scalars['String'],
  genre: Array<GenreType>,
  language?: Maybe<LanguageType>,
  image: Scalars['String'],
  reviewSet: Array<ReviewType>,
};




export type GenreType = {
   __typename?: 'GenreType',
  id: Scalars['ID'],
  name: Scalars['String'],
  bookSet: Array<BookType>,
};

export type LanguageType = {
   __typename?: 'LanguageType',
  id: Scalars['ID'],
  name: Scalars['String'],
  bookSet: Array<BookType>,
};

export type Mutation = {
   __typename?: 'Mutation',
  userCreate?: Maybe<UserCreate>,
  tokenAuth?: Maybe<ObtainJsonWebToken>,
  verifyToken?: Maybe<Verify>,
  refreshToken?: Maybe<Refresh>,
  createReview?: Maybe<ReviewCreate>,
  deleteReview?: Maybe<ReviewDelete>,
  createBook?: Maybe<BookCreate>,
  deleteBook?: Maybe<BookDelete>,
};


export type MutationUserCreateArgs = {
  email: Scalars['String'],
  password: Scalars['String'],
  username: Scalars['String']
};


export type MutationTokenAuthArgs = {
  username: Scalars['String'],
  password: Scalars['String']
};


export type MutationVerifyTokenArgs = {
  token?: Maybe<Scalars['String']>
};


export type MutationRefreshTokenArgs = {
  token?: Maybe<Scalars['String']>
};


export type MutationCreateReviewArgs = {
  input: ReviewInputType
};


export type MutationDeleteReviewArgs = {
  id: Scalars['ID']
};


export type MutationCreateBookArgs = {
  input: BookInputType
};


export type MutationDeleteBookArgs = {
  id: Scalars['ID']
};

export type ObtainJsonWebToken = {
   __typename?: 'ObtainJSONWebToken',
  payload: Scalars['GenericScalar'],
  refreshExpiresIn: Scalars['Int'],
  token: Scalars['String'],
};

export type Query = {
   __typename?: 'Query',
  currentUser?: Maybe<UserType>,
  books?: Maybe<Array<Maybe<BookType>>>,
  book?: Maybe<BookType>,
  authors?: Maybe<Array<Maybe<AuthorType>>>,
  author?: Maybe<AuthorType>,
};


export type QueryBooksArgs = {
  search?: Maybe<Scalars['String']>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type QueryBookArgs = {
  id: Scalars['ID']
};


export type QueryAuthorArgs = {
  id: Scalars['ID']
};

export type Refresh = {
   __typename?: 'Refresh',
  payload: Scalars['GenericScalar'],
  refreshExpiresIn: Scalars['Int'],
  token: Scalars['String'],
};

export type ReviewCreate = {
   __typename?: 'ReviewCreate',
  review?: Maybe<ReviewType>,
};

export type ReviewDelete = {
   __typename?: 'ReviewDelete',
  ok?: Maybe<Scalars['Boolean']>,
};

export type ReviewInputType = {
  user?: Maybe<Scalars['ID']>,
  comment?: Maybe<Scalars['String']>,
  value?: Maybe<Scalars['Int']>,
  book?: Maybe<Scalars['ID']>,
};

export type ReviewType = {
   __typename?: 'ReviewType',
  id: Scalars['ID'],
  book: BookType,
  user: UserType,
  pubDate: Scalars['DateTime'],
  comment: Scalars['String'],
  value: ReviewValue,
};

export enum ReviewValue {
  A_5 = 'A_5',
  A_4 = 'A_4',
  A_3 = 'A_3',
  A_2 = 'A_2',
  A_1 = 'A_1'
}

export type UserCreate = {
   __typename?: 'UserCreate',
  user?: Maybe<UserType>,
};

export type UserType = {
   __typename?: 'UserType',
  id: Scalars['ID'],
  lastLogin?: Maybe<Scalars['DateTime']>,
  isSuperuser: Scalars['Boolean'],
  username: Scalars['String'],
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  email: Scalars['String'],
  isStaff: Scalars['Boolean'],
  isActive: Scalars['Boolean'],
  dateJoined: Scalars['DateTime'],
  reviewSet: Array<ReviewType>,
};

export type Verify = {
   __typename?: 'Verify',
  payload: Scalars['GenericScalar'],
};

export type BookQueryVariables = {
  id: Scalars['ID']
};


export type BookQuery = (
  { __typename?: 'Query' }
  & { book: Maybe<(
    { __typename?: 'BookType' }
    & Pick<BookType, 'id' | 'title' | 'summary' | 'isbn' | 'image'>
    & { author: Maybe<(
      { __typename?: 'AuthorType' }
      & Pick<AuthorType, 'firstName' | 'lastName'>
    )>, genre: Array<(
      { __typename?: 'GenreType' }
      & Pick<GenreType, 'name'>
    )>, language: Maybe<(
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

export type BooksQueryVariables = {};


export type BooksQuery = (
  { __typename?: 'Query' }
  & { books: Maybe<Array<Maybe<(
    { __typename?: 'BookType' }
    & Pick<BookType, 'id' | 'title' | 'summary' | 'isbn' | 'image'>
    & { author: Maybe<(
      { __typename?: 'AuthorType' }
      & Pick<AuthorType, 'firstName' | 'lastName'>
    )>, genre: Array<(
      { __typename?: 'GenreType' }
      & Pick<GenreType, 'name'>
    )>, language: Maybe<(
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
  title: Scalars['String'],
  summary: Scalars['String'],
  isbn: Scalars['String'],
  language: Scalars['ID'],
  author: Scalars['ID'],
  image: Scalars['String']
};


export type CreateBookMutation = (
  { __typename?: 'Mutation' }
  & { createBook: Maybe<(
    { __typename?: 'BookCreate' }
    & { book: Maybe<(
      { __typename?: 'BookType' }
      & Pick<BookType, 'title' | 'image'>
      & { author: Maybe<(
        { __typename?: 'AuthorType' }
        & Pick<AuthorType, 'firstName' | 'lastName'>
      )> }
    )> }
  )> }
);

export type UserCreateMutationVariables = {
  email: Scalars['String'],
  username: Scalars['String'],
  password: Scalars['String']
};


export type UserCreateMutation = (
  { __typename?: 'Mutation' }
  & { userCreate: Maybe<(
    { __typename?: 'UserCreate' }
    & { user: Maybe<(
      { __typename?: 'UserType' }
      & Pick<UserType, 'id' | 'username' | 'email' | 'isStaff' | 'isSuperuser'>
    )> }
  )> }
);

export type CurrentUserQueryVariables = {};


export type CurrentUserQuery = (
  { __typename?: 'Query' }
  & { currentUser: Maybe<(
    { __typename?: 'UserType' }
    & Pick<UserType, 'id' | 'username' | 'email' | 'isStaff' | 'isSuperuser' | 'firstName' | 'lastName'>
    & { reviewSet: Array<(
      { __typename?: 'ReviewType' }
      & Pick<ReviewType, 'value' | 'comment' | 'pubDate'>
      & { book: (
        { __typename?: 'BookType' }
        & Pick<BookType, 'title'>
        & { author: Maybe<(
          { __typename?: 'AuthorType' }
          & Pick<AuthorType, 'firstName' | 'lastName'>
        )> }
      ) }
    )> }
  )> }
);

export type DeleteBookMutationVariables = {
  id: Scalars['ID']
};


export type DeleteBookMutation = (
  { __typename?: 'Mutation' }
  & { deleteBook: Maybe<(
    { __typename?: 'BookDelete' }
    & Pick<BookDelete, 'ok'>
  )> }
);

export type LoginMutationVariables = {
  username: Scalars['String'],
  password: Scalars['String']
};


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { tokenAuth: Maybe<(
    { __typename?: 'ObtainJSONWebToken' }
    & Pick<ObtainJsonWebToken, 'token' | 'refreshExpiresIn' | 'payload'>
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
    query Books {
  books {
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
    mutation CreateBook($title: String!, $summary: String!, $isbn: String!, $language: ID!, $author: ID!, $image: String!) {
  createBook(input: {title: $title, summary: $summary, isbn: $isbn, image: $image, language: $language, author: $author}) {
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
 *   },
 * });
 */
export function useCreateBookMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateBookMutation, CreateBookMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateBookMutation, CreateBookMutationVariables>(CreateBookDocument, baseOptions);
      }
export type CreateBookMutationHookResult = ReturnType<typeof useCreateBookMutation>;
export type CreateBookMutationResult = ApolloReactCommon.MutationResult<CreateBookMutation>;
export type CreateBookMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateBookMutation, CreateBookMutationVariables>;
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
    reviewSet {
      value
      comment
      pubDate
      book {
        title
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