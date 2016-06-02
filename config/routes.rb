Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy, :show]
    resources :books, only: [:show]

    resources :readings, only: [:create, :show, :destroy]
    resources :users do
      resources :readings, only: [:index]
    end
  end
end
