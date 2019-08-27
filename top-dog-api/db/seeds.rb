# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Dog.destroy_all
Rating.destroy_all

good_boy = [true, false]

10.times do
  user = User.create(
    name: Faker::Name.first_name,
    email: Faker::Internet.email
  )

  2.times do
    Dog.create(
      name: Faker::Creature::Dog.name,
      breed: Faker::Creature::Dog.breed,
      user: user,
      image_url: 'https://source.unsplash.com/400x400/?dog'
    )
  end

  100.times do
    Rating.create(
      user: User.all.sample,
      dog: Dog.all.sample,
      good_dog: good_boy.sample
    )
  end
end
