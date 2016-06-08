Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :index]
    resource :session, only: [:create, :destroy, :show]
    resources :books, only: [:index, :show]

    get "readings_by_status", to: "readings#readings_by_status"

    resources :readings, only: [:create, :show, :destroy]
    resources :shelves, only: [:create, :show, :destroy]
    resources :users do
      resources :readings, only: [:index]
      resources :shelves, only: [:index]
    end


  end
end
