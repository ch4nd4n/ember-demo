class A::TodosController < ApplicationController
  def index
    render json: Todo.all
  end
end
