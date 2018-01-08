Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :chunk do
    resources :hoges, only: %i(index)
    resources :fugas, only: %i(index)
  end

  namespace :csrf do
    resources :hoges, only: %i(index)
  end

  resources :polyfills, only: %i(index)
end
