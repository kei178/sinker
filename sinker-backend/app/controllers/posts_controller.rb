require 'net/http'

class PostsController < ApplicationController
  def index
    uri = URI('https://jsonplaceholder.typicode.com/posts')
    data = Net::HTTP.get(uri)
    render json: { posts: JSON.parse(data) }
  end
end