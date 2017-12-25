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
  def self.update_data
    # @data = {}
    @response = HTTParty.get('http://api.whatpulse.org/user.php?user=itsmadd&format=json')
    if @response.success?
      prev_date = Keystroke.last.pulse_date.strftime('%Y-%m-%d')
      new_date = @response['LastPulse'].slice(0, 10)
      # IF THIS IS NEW DATA
      if new_date != prev_date
        puts '**** Retrieved keystroke data ****'
        k = Keystroke.new
        k.pulse_date = new_date
        k.total = @response['Keys']
        if k.save
          puts '++++ Database updated ++++'
        end
      else
        puts 'xxxx Retrieved keystroke data - date already exists in database xxxx'
      end
    end
    # @data
  end
end
