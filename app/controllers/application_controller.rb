class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :null_session

  def invalid_api_path
    respond_to do |format|
      format.json { render status: 404, text: 'Invalid API endpoint' }
    end
  end
end
