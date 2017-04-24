Rails.application.routes.draw do
  get 'comments/index'

  get 'articles/index'

  get 'articles' => 'articles#index'
end
