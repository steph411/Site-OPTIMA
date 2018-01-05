import { provideResults } from '../actions/searchActions';

const fetchUserEpic = action$ =>
  action$.ofType(FETCHING_RESULTS)
    .mergeMap(action =>
      client.query({
         query: gql`
           query catalogues {
             catalogue() {
               id
             }
           }
         `,
       })
        .map(response => provideResults(response)) );
