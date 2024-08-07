import { gql } from "@apollo/client";

export const GET_PARKING_LOTS = gql`
  query Query($limit: Int, $offset: Int) {
    getAllParkingLots(limit: $limit, offset: $offset) {
      id
      name
      image
      size
      status
      type
      address
    }
  }
`;

export const GET_DISTINCT_TYPES = gql`
  query Query {
    distinctTypes {
      type
    }
  }
`;

export const GET_DISTINCT_STATUSES = gql`
  query Query {
    distinctStatuses {
      status
    }
  }
`;
