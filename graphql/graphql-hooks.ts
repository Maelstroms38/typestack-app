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
};

export type AuthInput = {
  email?: Maybe<Scalars['String']>,
  username?: Maybe<Scalars['String']>,
  password: Scalars['String'],
};


export type FieldError = {
   __typename?: 'FieldError',
  path: Scalars['String'],
  message: Scalars['String'],
};

export type Mutation = {
   __typename?: 'Mutation',
  createPlace: Place,
  updatePlace: Place,
  deletePlace: Scalars['String'],
  register: UserResponse,
  login: UserResponse,
};


export type MutationCreatePlaceArgs = {
  place: PlaceInput
};


export type MutationUpdatePlaceArgs = {
  place: PlaceInput
};


export type MutationDeletePlaceArgs = {
  id: Scalars['Float']
};


export type MutationRegisterArgs = {
  input: AuthInput
};


export type MutationLoginArgs = {
  input: AuthInput
};

export type Place = {
   __typename?: 'Place',
  id: Scalars['ID'],
  title: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  imageUrl?: Maybe<Scalars['String']>,
  creationDate: Scalars['DateTime'],
  user?: Maybe<User>,
};

export type PlaceInput = {
  id?: Maybe<Scalars['Float']>,
  title: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  imageUrl?: Maybe<Scalars['String']>,
};

export type Query = {
   __typename?: 'Query',
  place?: Maybe<Place>,
  places: Array<Place>,
  currentUser: User,
};


export type QueryPlaceArgs = {
  id: Scalars['Float']
};

export type User = {
   __typename?: 'User',
  id: Scalars['Float'],
  email: Scalars['String'],
  username: Scalars['String'],
  places: Array<Place>,
};

export type UserResponse = {
   __typename?: 'UserResponse',
  user?: Maybe<User>,
  token?: Maybe<Scalars['String']>,
  errors?: Maybe<Array<FieldError>>,
};

export type CreatePlaceMutationVariables = {
  title: Scalars['String'],
  description: Scalars['String'],
  imageUrl: Scalars['String']
};


export type CreatePlaceMutation = (
  { __typename?: 'Mutation' }
  & { createPlace: (
    { __typename?: 'Place' }
    & Pick<Place, 'id' | 'title' | 'description' | 'imageUrl' | 'creationDate'>
  ) }
);

export type CurrentUserQueryVariables = {};


export type CurrentUserQuery = (
  { __typename?: 'Query' }
  & { currentUser: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username' | 'email'>
    & { places: Array<(
      { __typename?: 'Place' }
      & Pick<Place, 'id' | 'title' | 'description' | 'imageUrl'>
    )> }
  ) }
);

export type DeletePlaceMutationVariables = {
  id: Scalars['Float']
};


export type DeletePlaceMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deletePlace'>
);

export type SignInMutationVariables = {
  username?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  password: Scalars['String']
};


export type SignInMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'UserResponse' }
    & Pick<UserResponse, 'token'>
    & { user: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username' | 'email'>
    )> }
  ) }
);

export type PlaceQueryVariables = {
  id: Scalars['Float']
};


export type PlaceQuery = (
  { __typename?: 'Query' }
  & { place: Maybe<(
    { __typename?: 'Place' }
    & Pick<Place, 'id' | 'title' | 'description' | 'imageUrl' | 'creationDate'>
  )> }
);

export type PlacesQueryVariables = {};


export type PlacesQuery = (
  { __typename?: 'Query' }
  & { places: Array<(
    { __typename?: 'Place' }
    & Pick<Place, 'id' | 'title' | 'description' | 'imageUrl' | 'creationDate'>
    & { user: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username'>
    )> }
  )> }
);

export type SignUpMutationVariables = {
  username: Scalars['String'],
  email: Scalars['String'],
  password: Scalars['String']
};


export type SignUpMutation = (
  { __typename?: 'Mutation' }
  & { register: (
    { __typename?: 'UserResponse' }
    & Pick<UserResponse, 'token'>
    & { user: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username' | 'email'>
    )> }
  ) }
);

export type UpdatePlaceMutationVariables = {
  id: Scalars['Float'],
  title: Scalars['String'],
  description: Scalars['String'],
  imageUrl: Scalars['String']
};


export type UpdatePlaceMutation = (
  { __typename?: 'Mutation' }
  & { updatePlace: (
    { __typename?: 'Place' }
    & Pick<Place, 'id' | 'title' | 'description' | 'imageUrl' | 'creationDate'>
  ) }
);


export const CreatePlaceDocument = gql`
    mutation CreatePlace($title: String!, $description: String!, $imageUrl: String!) {
  createPlace(place: {title: $title, description: $description, imageUrl: $imageUrl}) {
    id
    title
    description
    imageUrl
    creationDate
  }
}
    `;
export type CreatePlaceMutationFn = ApolloReactCommon.MutationFunction<CreatePlaceMutation, CreatePlaceMutationVariables>;

/**
 * __useCreatePlaceMutation__
 *
 * To run a mutation, you first call `useCreatePlaceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePlaceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPlaceMutation, { data, loading, error }] = useCreatePlaceMutation({
 *   variables: {
 *      title: // value for 'title'
 *      description: // value for 'description'
 *      imageUrl: // value for 'imageUrl'
 *   },
 * });
 */
export function useCreatePlaceMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreatePlaceMutation, CreatePlaceMutationVariables>) {
        return ApolloReactHooks.useMutation<CreatePlaceMutation, CreatePlaceMutationVariables>(CreatePlaceDocument, baseOptions);
      }
export type CreatePlaceMutationHookResult = ReturnType<typeof useCreatePlaceMutation>;
export type CreatePlaceMutationResult = ApolloReactCommon.MutationResult<CreatePlaceMutation>;
export type CreatePlaceMutationOptions = ApolloReactCommon.BaseMutationOptions<CreatePlaceMutation, CreatePlaceMutationVariables>;
export const CurrentUserDocument = gql`
    query CurrentUser {
  currentUser {
    id
    username
    email
    places {
      id
      title
      description
      imageUrl
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
export const DeletePlaceDocument = gql`
    mutation DeletePlace($id: Float!) {
  deletePlace(id: $id)
}
    `;
export type DeletePlaceMutationFn = ApolloReactCommon.MutationFunction<DeletePlaceMutation, DeletePlaceMutationVariables>;

/**
 * __useDeletePlaceMutation__
 *
 * To run a mutation, you first call `useDeletePlaceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePlaceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePlaceMutation, { data, loading, error }] = useDeletePlaceMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeletePlaceMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeletePlaceMutation, DeletePlaceMutationVariables>) {
        return ApolloReactHooks.useMutation<DeletePlaceMutation, DeletePlaceMutationVariables>(DeletePlaceDocument, baseOptions);
      }
export type DeletePlaceMutationHookResult = ReturnType<typeof useDeletePlaceMutation>;
export type DeletePlaceMutationResult = ApolloReactCommon.MutationResult<DeletePlaceMutation>;
export type DeletePlaceMutationOptions = ApolloReactCommon.BaseMutationOptions<DeletePlaceMutation, DeletePlaceMutationVariables>;
export const SignInDocument = gql`
    mutation SignIn($username: String, $email: String, $password: String!) {
  login(input: {username: $username, email: $email, password: $password}) {
    token
    user {
      id
      username
      email
    }
  }
}
    `;
export type SignInMutationFn = ApolloReactCommon.MutationFunction<SignInMutation, SignInMutationVariables>;

/**
 * __useSignInMutation__
 *
 * To run a mutation, you first call `useSignInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signInMutation, { data, loading, error }] = useSignInMutation({
 *   variables: {
 *      username: // value for 'username'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSignInMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SignInMutation, SignInMutationVariables>) {
        return ApolloReactHooks.useMutation<SignInMutation, SignInMutationVariables>(SignInDocument, baseOptions);
      }
export type SignInMutationHookResult = ReturnType<typeof useSignInMutation>;
export type SignInMutationResult = ApolloReactCommon.MutationResult<SignInMutation>;
export type SignInMutationOptions = ApolloReactCommon.BaseMutationOptions<SignInMutation, SignInMutationVariables>;
export const PlaceDocument = gql`
    query Place($id: Float!) {
  place(id: $id) {
    id
    title
    description
    imageUrl
    creationDate
  }
}
    `;

/**
 * __usePlaceQuery__
 *
 * To run a query within a React component, call `usePlaceQuery` and pass it any options that fit your needs.
 * When your component renders, `usePlaceQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePlaceQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function usePlaceQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<PlaceQuery, PlaceQueryVariables>) {
        return ApolloReactHooks.useQuery<PlaceQuery, PlaceQueryVariables>(PlaceDocument, baseOptions);
      }
export function usePlaceLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<PlaceQuery, PlaceQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<PlaceQuery, PlaceQueryVariables>(PlaceDocument, baseOptions);
        }
export type PlaceQueryHookResult = ReturnType<typeof usePlaceQuery>;
export type PlaceLazyQueryHookResult = ReturnType<typeof usePlaceLazyQuery>;
export type PlaceQueryResult = ApolloReactCommon.QueryResult<PlaceQuery, PlaceQueryVariables>;
export const PlacesDocument = gql`
    query Places {
  places {
    id
    title
    description
    imageUrl
    creationDate
    user {
      id
      username
    }
  }
}
    `;

/**
 * __usePlacesQuery__
 *
 * To run a query within a React component, call `usePlacesQuery` and pass it any options that fit your needs.
 * When your component renders, `usePlacesQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePlacesQuery({
 *   variables: {
 *   },
 * });
 */
export function usePlacesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<PlacesQuery, PlacesQueryVariables>) {
        return ApolloReactHooks.useQuery<PlacesQuery, PlacesQueryVariables>(PlacesDocument, baseOptions);
      }
export function usePlacesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<PlacesQuery, PlacesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<PlacesQuery, PlacesQueryVariables>(PlacesDocument, baseOptions);
        }
export type PlacesQueryHookResult = ReturnType<typeof usePlacesQuery>;
export type PlacesLazyQueryHookResult = ReturnType<typeof usePlacesLazyQuery>;
export type PlacesQueryResult = ApolloReactCommon.QueryResult<PlacesQuery, PlacesQueryVariables>;
export const SignUpDocument = gql`
    mutation SignUp($username: String!, $email: String!, $password: String!) {
  register(input: {username: $username, email: $email, password: $password}) {
    token
    user {
      id
      username
      email
    }
  }
}
    `;
export type SignUpMutationFn = ApolloReactCommon.MutationFunction<SignUpMutation, SignUpMutationVariables>;

/**
 * __useSignUpMutation__
 *
 * To run a mutation, you first call `useSignUpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpMutation, { data, loading, error }] = useSignUpMutation({
 *   variables: {
 *      username: // value for 'username'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSignUpMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SignUpMutation, SignUpMutationVariables>) {
        return ApolloReactHooks.useMutation<SignUpMutation, SignUpMutationVariables>(SignUpDocument, baseOptions);
      }
export type SignUpMutationHookResult = ReturnType<typeof useSignUpMutation>;
export type SignUpMutationResult = ApolloReactCommon.MutationResult<SignUpMutation>;
export type SignUpMutationOptions = ApolloReactCommon.BaseMutationOptions<SignUpMutation, SignUpMutationVariables>;
export const UpdatePlaceDocument = gql`
    mutation UpdatePlace($id: Float!, $title: String!, $description: String!, $imageUrl: String!) {
  updatePlace(place: {id: $id, title: $title, description: $description, imageUrl: $imageUrl}) {
    id
    title
    description
    imageUrl
    creationDate
  }
}
    `;
export type UpdatePlaceMutationFn = ApolloReactCommon.MutationFunction<UpdatePlaceMutation, UpdatePlaceMutationVariables>;

/**
 * __useUpdatePlaceMutation__
 *
 * To run a mutation, you first call `useUpdatePlaceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePlaceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePlaceMutation, { data, loading, error }] = useUpdatePlaceMutation({
 *   variables: {
 *      id: // value for 'id'
 *      title: // value for 'title'
 *      description: // value for 'description'
 *      imageUrl: // value for 'imageUrl'
 *   },
 * });
 */
export function useUpdatePlaceMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdatePlaceMutation, UpdatePlaceMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdatePlaceMutation, UpdatePlaceMutationVariables>(UpdatePlaceDocument, baseOptions);
      }
export type UpdatePlaceMutationHookResult = ReturnType<typeof useUpdatePlaceMutation>;
export type UpdatePlaceMutationResult = ApolloReactCommon.MutationResult<UpdatePlaceMutation>;
export type UpdatePlaceMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdatePlaceMutation, UpdatePlaceMutationVariables>;