Rails.application.routes.draw do
  namespace :api do
    get 'users/create'
  end
  get 'sessions/create'
  get 'sessions/new'
  get 'sessions/destroy'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
  end
  root "static_pages#root"
end
