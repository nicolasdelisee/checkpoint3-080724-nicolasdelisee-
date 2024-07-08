import { gql } from "@apollo/client";

export const LIST_COUNTRY = gql`
 query ListCountries {
  listCountries {
    name
    emoji
    code
    continent {
      name
    }
  }
}
`;