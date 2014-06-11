class ApplicationController < ActionController::Base
  protect_from_forgery

  layout 'default'

  def index

  end

  def folks
	@folks = Student.where(:batch => 2006).order("RAND()") 	
  end
end
