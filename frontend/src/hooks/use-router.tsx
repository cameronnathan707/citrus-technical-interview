import { ParsedUrlQuery } from 'querystring'
import { useMemo } from 'react'
import { useHistory, useLocation, useParams, useRouteMatch } from 'react-router-dom'

export interface Router {
  push: (path: string) => void
  replace: (path: string) => void
  pathname: string
  query: ParsedUrlQuery
  match: any
  location: any
  history: any
}

export const useRouter = (): Router => {
  const params = useParams()

  const location = useLocation()

  const history = useHistory()

  const match = useRouteMatch()

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

      query: params,

      // Include match, location, history objects so we have
      // access to extra React Router functionality if needed.
      match,
      location,
      history,
    }
  }, [params, match, location, history])
}
