# frozen_string_literal: true

class Dog < ApplicationRecord
  has_many :ratings, dependent: :destroy
  belongs_to :user

  def is_good_dog
    ratings.first.good_dog
  end

  def say_hello
    print 'hello'
  end
end
