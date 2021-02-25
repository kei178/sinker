module Types
  module Input
    class PostInputType < GraphQL::Schema::InputObject
      graphql_name "PostInputType"

      argument :id,    Int,    required: true
      argument :title, String, required: false
      argument :body,  String, required: false
    end
  end
end