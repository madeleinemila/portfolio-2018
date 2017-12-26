class PagesController < ApplicationController
  def home

    Keystroke.update_data

    @mean = Keystroke.calc_mean

  end
end
