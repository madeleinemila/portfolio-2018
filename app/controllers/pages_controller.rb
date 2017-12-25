class PagesController < ApplicationController
  def home
    # @response = HTTParty.get('http://api.whatpulse.org/user.php?user=itsmadd&format=json')
    Keystroke.update_data
    @data = Keystroke.last
  end
end
