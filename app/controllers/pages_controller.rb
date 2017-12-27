class PagesController < ApplicationController
  def home

    Keystroke.update_data

    @avg_all = Keystroke.calc_avg_all

    # first prev = 2719.004917558577
    # second prev = 2091
    # third = 18240

    @avg_prev = []
    Keystroke.all.each_with_index do |k, i|
      next if i == 0
      @avg_prev.push( Keystroke.calc_avg_prev i )
    end #PUT THIS INTO MODEL...

  end
end
