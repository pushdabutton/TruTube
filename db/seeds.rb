# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all

require 'open-uri'

demo_user = User.create!(username: "Andy", email: "andy@email.com", password: "password")



file = open('https://trutube-pro.s3.amazonaws.com/BANANA+SLIPS+ON+MAN!.mp4')
video = Video.create(title:'Banana Slips On Man' , description:'Banana Slips on Man.. Strange' ,author_id: demo_user.id )
video.video.attach(io: file, filename: 'BANANA+SLIPS+ON+MAN!.mp4')

file = open('https://trutube-pro.s3.amazonaws.com/Bernie+Sanders+Plays+The+Bongo+Drums.mp4')
video = Video.create(title:'Drumming Bernie' , description:'Bernie Sanders plays the bongo drums.. but why tho' ,author_id: demo_user.id )
video.video.attach(io: file, filename: 'Bernie+Sanders+Plays+The+Bongo+Drums.mp4')

file = open('https://trutube-pro.s3.amazonaws.com/Disgustang+(DRAMATIC)+(SO+SAD).mp4')
video = Video.create(title:'Disgustang' , description:'I dont even know whats going on' ,author_id: demo_user.id )
video.video.attach(io: file, filename: 'Disgustang.mp4')

file = open('https://trutube-pro.s3.amazonaws.com/I+wanted+donuts.mp4')
video = Video.create(title:'I Wanted Donuts' , description:'everyone loves donuts' ,author_id: demo_user.id )
video.video.attach(io: file, filename: 'IWantDonuts.mp4')

file = open("https://trutube-pro.s3.amazonaws.com/I'm+going+to+McDonald's%2C+do+you+want+any+hamburger.mp4")
video = Video.create(title:'Im going to McDonalds' , description:'Do want any burgers?' ,author_id: demo_user.id )
video.video.attach(io: file, filename: 'hamburger.mp4')

file = open("https://trutube-pro.s3.amazonaws.com/It's+a+Hibiscus+(Vine).mp4")
video = Video.create(title:'Its a Hibiscus' , description:'Whats Hibiscus??' ,author_id: demo_user.id )
video.video.attach(io: file, filename: 'Hibiscus.mp4')

file = open("https://trutube-pro.s3.amazonaws.com/Officer+Earl+Treadmill+meme.mp4")
video = Video.create(title:'Officer Earl On Treadmill' , description:'Officer Earl is trying to work out' ,author_id: demo_user.id )
video.video.attach(io: file, filename: 'EarlTreadmill.mp4')

file = open("https://trutube-pro.s3.amazonaws.com/Officer+Earl+lion+king+meme.mp4")
video = Video.create(title:'Officer Earl Lion King meme' , description:'Officer Earl Stampede' ,author_id: demo_user.id )
video.video.attach(io: file, filename: 'EarlLionKing.mp4')

file = open('https://trutube-pro.s3.amazonaws.com/TAKE+YOUR+DAMN+CLOTHES+OFF!.mp4')
video = Video.create(title:'Take Your Dam Clothes Off' , description:'self explanitory' ,author_id: demo_user.id )
video.video.attach(io: file, filename: 'ClothesOff.mp4')

file = open('https://trutube-pro.s3.amazonaws.com/The+Scooby+Gangs+Vast+Vocabulary.mp4')
video = Video.create(title:'The Scooby Doo Vocaboo' , description:'The Scooby Gangs vast vocabulary' ,author_id: demo_user.id )
video.video.attach(io: file, filename: 'ScoobyVocab.mp4')
