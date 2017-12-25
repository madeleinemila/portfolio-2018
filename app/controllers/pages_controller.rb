class PagesController < ApplicationController
  def home
    @response = HTTParty.get('http://api.whatpulse.org/user.php?user=itsmadd&format=json')
    @data = Keystroke.get_data
    @pulse_date = @data['pulse_date']
    @total = @data['total']
    @average = @data['average']
  end
end
