class Ujs::HogesController < ApplicationController
  def index
  end

  def post
    render json: { result: 'Success!' }
  end
end
