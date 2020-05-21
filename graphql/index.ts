import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { AsyncStorage } from 'react-native';
import { ApolloLink, Observable } from 'apollo-link';

const httpLink = new HttpLink({
  uri: 'https://istrand.herokuapp.com/graphql/',
  credentials: 'include',
});

const request = async (operation) => {
  try {
    const token = await AsyncStorage.getItem('token');
    console.log(token, 'auth request token');
    operation.setContext({
      headers: {
        authorization: token ? `JWT ${token}` : '',
      },
    });
  } catch (err) {
    console.log(err);
    await AsyncStorage.setItem('token', null);
    operation.setContext({
      headers: {},
    });
  }
};

const requestLink = new ApolloLink(
  (operation, forward) =>
    new Observable((observer) => {
      let handle;
      Promise.resolve(operation)
        .then((oper) => request(oper))
        .then(() => {
          handle = forward(operation).subscribe({
            next: observer.next.bind(observer),
            error: observer.error.bind(observer),
            complete: observer.complete.bind(observer),
          });
        })
        .catch(observer.error.bind(observer));

      return () => {
        if (handle) handle.unsubscribe();
      };
    })
);

export const apolloClient = new ApolloClient({
  link: ApolloLink.from([requestLink, httpLink]),
  cache: new InMemoryCache(),
});

export * from './graphql-hooks';
