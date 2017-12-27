class PagesController < ApplicationController
  def home

    Keystroke.update_data

    @avg_all = Keystroke.calc_avg_all

    @avg_prev = Keystroke.calc_avg_prev 1
    @avg_prev_2 = Keystroke.calc_avg_prev 2
    @avg_prev_3 = Keystroke.calc_avg_prev 3

    # first prev = 2719.004917558577
    # second prev = 2091
    # third = 18240


    @avg_prev = []
    Keystroke.all.each_with_index do |k, i|
      next if i == 0
      @avg_prev.push( Keystroke.calc_avg_prev i )
    end

  end
end
