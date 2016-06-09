Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :index]
    resource :session, only: [:create, :destroy, :show]
    resources :books, only: [:index, :show]
    resources :readings, only: [:create, :update, :show, :destroy]
    get "readings_by_status", to: "readings#readings_by_status"
    get "shelf_readings", to: "shelves#shelf_readings"
    get "shelf_title", to: "shelves#shelf_title"


    resources :shelves, only: [:create, :show, :destroy]
    resources :shelf_assignments, only: [:create]
    delete "find_and_destroy", to: "shelf_assignments#find_and_destroy"

    resources :users do
      resources :readings, only: [:index]
      resources :shelves, only: [:index]
    end
  end
  get '/auth/:provider/callback', to: 'api/sessions#create_with_twitter'
end
