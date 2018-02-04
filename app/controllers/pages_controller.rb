class PagesController < ApplicationController
  def home
    # Keystroke.update_data  # was going to use data of how many keys i type per day to drive graph, but ran out of time. an experiment for another time. also would be better to split that out as a microservice than have embedded here.
    # @avg_all = Keystroke.calc_avg_all
    # @avg_prev = Keystroke.calc_avg_prev_array
  end

  def about
  end
end
