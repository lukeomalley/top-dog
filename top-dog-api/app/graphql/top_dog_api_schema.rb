# frozen_string_literal: true

class TopDogApiSchema < GraphQL::Schema
  mutation(Types::MutationType)
  query(Types::QueryType)
end
