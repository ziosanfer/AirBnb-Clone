class Api::TreesController < ApplicationController
  before_action :require_logged_in, only: [:create]

  def index
    trees = Tree.all
    render :index
  end

  def show
    @tree = Tree.find(params[:id])
  end

  def create
    @tree = Tree.create!(tree_params)
    render :show
  end

  private
  def tree_params
    params.require(:tree).permit( :title, :body)
  end

end
