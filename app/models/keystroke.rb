# == Schema Information
#
# Table name: keystrokes
#
#  id         :integer          not null, primary key
#  pulse_date :date
#  total      :integer
#  average    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Keystroke < ApplicationRecord
  def self.get_data
    @data = {}
    @response = HTTParty.get('http://api.whatpulse.org/user.php?user=itsmadd&format=json')
    if @response.success?
      puts '**** Retrieved keystroke data ****'
      k = Keystroke.new
      k.pulse_date = @response['LastPulse']
      k.total = @response['Keys']
      if k.save
        puts '++++ Database updated ++++'
      end
    end
    @data
  end
end
