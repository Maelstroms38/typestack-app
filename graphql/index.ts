import { useRef, useEffect } from 'react';
import { parse } from 'url';
import ApolloClient from 'apollo-boost';

export const validateUrl = (url: string) => {
  if (!url) {
    return undefined;
  }

  try {
    const uu = parse(url);
    if (uu.protocol === 'http:' || uu.protocol === 'https:') {
      return url;
    }
  } catch {
    return undefined;
  }

  return undefined;
};

export const usePrevious = <T>(value: T) => {
  const ref = useRef<T>();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
};

export const apolloClient = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});

export * from './graphql-hooks';
