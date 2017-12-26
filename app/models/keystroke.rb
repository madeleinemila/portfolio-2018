# == Schema Information
#
# Table name: keystrokes
#
#  id         :integer          not null, primary key
#  pulsed_at  :datetime
#  total      :integer
#  country    :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Keystroke < ApplicationRecord
  def self.update_data

    @response = HTTParty.get('http://api.whatpulse.org/user.php?user=itsmadd&format=json')

    if @response.success?

      prev_date = Keystroke.last.pulsed_at
      new_date = @response['LastPulse']
      # IF THIS IS NEW DATA
      unless prev_date == new_date
        puts '**** Retrieved keystroke data ****'
        k = Keystroke.new
        k.pulsed_at = new_date
        k.total = @response['Keys']
        k.country = @response['Country']
        if k.save
          puts '++++ Database updated ++++'
        end
      else
        puts 'xxxx Retrieved keystroke data - date already exists in database xxxx'
      end

    end

  end

  def self.calc_mean
    start_time = Keystroke.first.pulsed_at
    end_time = Keystroke.last.pulsed_at
    seconds = end_time - start_time
    start_keys = Keystroke.first.total
    end_keys = Keystroke.last.total
    mean = (end_keys - start_keys) / (seconds / 60 / 60 / 24) # TODO check if right
  end




end # end class
