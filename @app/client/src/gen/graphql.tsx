/* DO NOT EDIT! This file is auto-generated by graphql-code-generator - see `codegen.yml` */
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
};

/** An object with a globally unique `ID`. */
export type Node = {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
};

/** The root query type which gives access points into the data universe. */
export type Query = Node & {
   __typename?: 'Query';
  /** Fetches an object given its globally unique `ID`. */
  node?: Maybe<Node>;
  /** The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`. */
  nodeId: Scalars['ID'];
  /**
   * Exposes the root query type nested one level down. This is helpful for Relay 1
   * which can only query top level fields if they are in a particular form.
   */
  query: Query;
};


/** The root query type which gives access points into the data universe. */
export type QueryNodeArgs = {
  nodeId: Scalars['ID'];
};

export type SampleQueryVariables = {};


export type SampleQuery = (
  { __typename?: 'Query' }
  & { query: (
    { __typename?: 'Query' }
    & Pick<Query, 'nodeId'>
  ) }
);


export const SampleDocument = gql`
    query Sample {
  query {
    nodeId
  }
}
    `;

/**
 * __useSampleQuery__
 *
 * To run a query within a React component, call `useSampleQuery` and pass it any options that fit your needs.
 * When your component renders, `useSampleQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSampleQuery({
 *   variables: {
 *   },
 * });
 */
export function useSampleQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SampleQuery, SampleQueryVariables>) {
        return ApolloReactHooks.useQuery<SampleQuery, SampleQueryVariables>(SampleDocument, baseOptions);
      }
export function useSampleLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SampleQuery, SampleQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<SampleQuery, SampleQueryVariables>(SampleDocument, baseOptions);
        }
export type SampleQueryHookResult = ReturnType<typeof useSampleQuery>;
export type SampleLazyQueryHookResult = ReturnType<typeof useSampleLazyQuery>;
export type SampleQueryResult = ApolloReactCommon.QueryResult<SampleQuery, SampleQueryVariables>;
export function refetchSampleQuery(variables?: SampleQueryVariables) {
      return { query: SampleDocument, variables: variables }
    }