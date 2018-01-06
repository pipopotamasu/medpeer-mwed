Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :chunk do
    resources :chunks, only: %i(index)
    resources :not_use_chunks, only: %i(index)
  end
end
