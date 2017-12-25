class CreateKeystrokes < ActiveRecord::Migration[5.1]
  def change
    create_table :keystrokes do |t|
      t.date :pulse_date
      t.bigint :total
      t.integer :average

      t.timestamps
    end
  end
end
