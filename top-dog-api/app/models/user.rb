class User < ApplicationRecord
  has_many :dogs, dependent: :destroy
  has_many :ratings, dependent: :destroy
end
