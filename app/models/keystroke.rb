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

  def self.calc_avg start_time, end_time, start_keys, end_keys
    seconds = end_time - start_time
    mean = (end_keys - start_keys) / (seconds / 60 / 60 / 24)
  end

  def self.calc_avg_all
    self.calc_avg(
        Keystroke.first.pulsed_at, Keystroke.last.pulsed_at, # timestamps
        Keystroke.first.total, Keystroke.last.total)  # num keys
  end

  def self.calc_avg_prev i
    self.calc_avg(
        Keystroke.offset(i).last.pulsed_at, # second last timestamp
        Keystroke.offset(i - 1).last.pulsed_at, # last timestamp
        Keystroke.offset(i).last.total, Keystroke.offset(i - 1).last.total) # num keys
  end

  def self.calc_avg_prev_array
    @avg_prev = []
    Keystroke.all.each_with_index do |k, i|
      next if i == 0
      @avg_prev.push( Keystroke.calc_avg_prev i )
    end
    @avg_prev
  end

end # end class
