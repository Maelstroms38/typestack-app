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
  DateTime: any;
};

export type Mutation = {
  __typename?: 'Mutation';
  addPlace: Place;
};

export type MutationAddPlaceArgs = {
  place: PlaceInput;
};

export type Place = {
  __typename?: 'Place';
  id: Scalars['ID'];
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  imageUrl?: Maybe<Scalars['String']>;
  creationDate: Scalars['DateTime'];
};

export type PlaceInput = {
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  imageUrl?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  place?: Maybe<Place>;
  places: Array<Place>;
};

export type QueryPlaceArgs = {
  id: Scalars['Float'];
};

export type PlacesQueryVariables = {};

export type PlacesQuery = { __typename?: 'Query' } & {
  places: Array<
    { __typename?: 'Place' } & Pick<
      Place,
      'id' | 'title' | 'description' | 'imageUrl'
    >
  >;
};

export type PlaceQueryVariables = {
  id: Scalars['Float'];
};

export type PlaceQuery = { __typename?: 'Query' } & {
  place: Maybe<
    { __typename?: 'Place' } & Pick<
      Place,
      'id' | 'title' | 'description' | 'imageUrl' | 'creationDate'
    >
  >;
};

export type AddPlaceMutationVariables = {
  title: Scalars['String'];
  description: Scalars['String'];
};

export type AddPlaceMutation = { __typename?: 'Mutation' } & {
  addPlace: { __typename?: 'Place' } & Pick<
    Place,
    'id' | 'title' | 'description' | 'imageUrl' | 'creationDate'
  >;
};

export const PlacesDocument = gql`
  query places {
    places {
      id
      title
      description
      imageUrl
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
export function usePlacesQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    PlacesQuery,
    PlacesQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<PlacesQuery, PlacesQueryVariables>(
    PlacesDocument,
    baseOptions
  );
}
export function usePlacesLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    PlacesQuery,
    PlacesQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<PlacesQuery, PlacesQueryVariables>(
    PlacesDocument,
    baseOptions
  );
}
export type PlacesQueryHookResult = ReturnType<typeof usePlacesQuery>;
export type PlacesLazyQueryHookResult = ReturnType<typeof usePlacesLazyQuery>;
export type PlacesQueryResult = ApolloReactCommon.QueryResult<
  PlacesQuery,
  PlacesQueryVariables
>;
export const PlaceDocument = gql`
  query place($id: Float!) {
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
export function usePlaceQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    PlaceQuery,
    PlaceQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<PlaceQuery, PlaceQueryVariables>(
    PlaceDocument,
    baseOptions
  );
}
export function usePlaceLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    PlaceQuery,
    PlaceQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<PlaceQuery, PlaceQueryVariables>(
    PlaceDocument,
    baseOptions
  );
}
export type PlaceQueryHookResult = ReturnType<typeof usePlaceQuery>;
export type PlaceLazyQueryHookResult = ReturnType<typeof usePlaceLazyQuery>;
export type PlaceQueryResult = ApolloReactCommon.QueryResult<
  PlaceQuery,
  PlaceQueryVariables
>;
export const AddPlaceDocument = gql`
  mutation addPlace($title: String!, $description: String!) {
    addPlace(place: { title: $title, description: $description }) {
      id
      title
      description
      imageUrl
      creationDate
    }
  }
`;
export type AddPlaceMutationFn = ApolloReactCommon.MutationFunction<
  AddPlaceMutation,
  AddPlaceMutationVariables
>;

/**
 * __useAddPlaceMutation__
 *
 * To run a mutation, you first call `useAddPlaceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddPlaceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addPlaceMutation, { data, loading, error }] = useAddPlaceMutation({
 *   variables: {
 *      title: // value for 'title'
 *      description: // value for 'description'
 *   },
 * });
 */
export function useAddPlaceMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    AddPlaceMutation,
    AddPlaceMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    AddPlaceMutation,
    AddPlaceMutationVariables
  >(AddPlaceDocument, baseOptions);
}
export type AddPlaceMutationHookResult = ReturnType<typeof useAddPlaceMutation>;
export type AddPlaceMutationResult = ApolloReactCommon.MutationResult<
  AddPlaceMutation
>;
export type AddPlaceMutationOptions = ApolloReactCommon.BaseMutationOptions<
  AddPlaceMutation,
  AddPlaceMutationVariables
>;
