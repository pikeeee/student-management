Rails.application.routes.draw do
  devise_for :users
  resources :students
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get "students", to: "students#index"
  get "students/:id/edit", to: "students#edit", as: 'students_edit'
  patch 'students.:id', to: 'students#update'
  delete "students", to: "students#destroy"
  post "students/new", to: "students#create"
  root "students#index"
end
