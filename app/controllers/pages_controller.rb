class PagesController < ApplicationController
  def home

    # Keystroke.update_data

    @avg_all = Keystroke.calc_avg_all

    @avg_prev = Keystroke.calc_avg_prev

    # calc how many days of data

    # could have....
    # daily averages persisted as own table...
    #OR
    # recalc each time...
    #easier to persist them.... no maybe not,


    # average is difference between this and prev one, divided to get avg/day

  end
end
