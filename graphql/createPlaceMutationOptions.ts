import {
  CreatePlaceMutation,
  CreatePlaceMutationVariables,
  PlacesDocument,
  PlacesQuery,
  Place
} from './graphql-hooks';
import { MutationFunctionOptions } from '@apollo/react-common';

export const createPlaceMutationOptions = (
  variables: CreatePlaceMutationVariables
): MutationFunctionOptions<CreatePlaceMutation> => {
  return {
    variables,
    optimisticResponse: {
      __typename: 'Mutation',
      createPlace: {
        __typename: 'Place',
        id: '',
        title: variables.title,
        description: variables.description,
        imageUrl: variables.imageUrl,
        creationDate: ''
      } as Place
    },
    update: store => {
      try {
        const data = store.readQuery<PlacesQuery>({ query: PlacesDocument });
        if (data) {
          store.writeQuery<PlacesQuery>({
            query: PlacesDocument,
            data: {
              places: [
                ...data.places,
                {
                  __typename: 'Place',
                  ...variables,
                  id: data.places.length + 1,
                  creationDate: new Date()
                } as any
              ]
            }
          });
        }
      } catch {}
    }
  };
};
