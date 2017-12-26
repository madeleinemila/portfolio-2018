class CreateKeystrokes < ActiveRecord::Migration[5.1]
  def change
    create_table :keystrokes do |t|
      t.timestamp :pulsed_at
      t.bigint :total
      t.string :country

      t.timestamps
    end
  end
end
