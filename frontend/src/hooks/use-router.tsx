import { useMemo } from 'react'
import { useParams, useLocation, useHistory, useRouteMatch, match } from 'react-router-dom'
import * as H from 'history'
import * as queryString from 'query-string'

type SearchValue = string | boolean | number

export interface Router {
  push(path: H.Path, state?: H.LocationState): void
  push(location: H.LocationDescriptor<H.LocationState>): void
  replace(path: H.Path, state?: H.LocationState): void
  replace(location: H.LocationDescriptor<H.LocationState>): void
  pathname: string
  query: Record<string, string | string[] | null>
  params: Record<string, string>
  search: Record<string, SearchValue | SearchValue[] | null>
  match: match<any>
  location: H.Location
  history: H.History
}

export const useRouter = (): Router => {
  const params = useParams<any>()

  const location = useLocation<any>()

  const history = useHistory<any>()

  const match = useRouteMatch<any>()

  // Memoize so that a new object is only returned if something changes

  return useMemo<Router>((): Router => {
    return {
      // For convenience add push(), replace(), pathname at top level

      push: history.push,
      replace: history.replace,
      pathname: location.pathname,

      // Merge params and parsed query string into single "query" object
      // so that they can be used interchangeably.
      // Example: /:topic?sort=popular -> { topic: "react", sort: "popular" }

      query: {
        ...queryString.parse(location.search), // Convert string to obje, {  }ct
        ...params,
      },
      params,
      search: queryString.parse(location.search, { parseBooleans: true, parseNumbers: true }),

      // Include match, location, history objects so we have
      // access to extra React Router functionality if needed.
      match,
      location,
      history,
    }
  }, [params, match, location, history])
}
