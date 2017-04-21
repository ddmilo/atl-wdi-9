class ArticlesController < ApplicationController
  def index
    @message = 'Mic Check'
    @articles = Article.all
  end
end
