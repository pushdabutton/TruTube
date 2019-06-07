# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Video.destroy_all

require 'open-uri'

demo_user = User.create!(username: "Andy", email: "andy@email.com", password: "password")
demo_user2 = User.create!(username: "Vegeta", email: "vegeta@email.com", password: "kakorot")
demo_user3 = User.create!(username: "Krillin", email: "baldy@email.com", password: "destructo")
demo_user4 = User.create!(username: "Deku", email: "myhero@email.com", password: "allforone")
demo_user5 = User.create!(username: "Saitama", email: "onlyone@email.com", password: "onepunch")

users = [demo_user, demo_user2, demo_user3, demo_user4, demo_user5]


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

file = open('https://trutube-pro.s3.amazonaws.com/oh+no+dont+do+it.mp4')
video = Video.create(title:'SpongeBob You Can Do it' , description:'SpongeBob can do it all' ,author_id: demo_user.id )
video.video.attach(io: file, filename: 'SpongeBob.mp4')

#------------------------------------------------------------------------------------------------------

file = open('https://trutube-pro.s3.amazonaws.com/BBC+Weatherman+Finger+Fail.mp4')
video = Video.create(title:'Weatherman Fail' , description:'he thought he was in the clear' ,author_id: users.sample.id )
video.video.attach(io: file, filename: 'weatherman.mp4')

# file = open('https://trutube-pro.s3.amazonaws.com/Samurai+Champloo+EP25-Mugen%26Jin+VS+Kagetoki_''Hand+of+God''+%5B720p%5D.mp4')
# video = Video.create(title:'Samurai Champloo - Mugen & Jin vs Kagetoki' , description:'anime fight scene Mugen & jin vs Kagetoki' ,author_id: users.sample.id )
# video.video.attach(io: file, filename: 'MugenvsKagetoki.mp4')

file = open('https://trutube-pro.s3.amazonaws.com/Joseph%2C+you+are+NOT+the+father.mp4')
video = Video.create(title:'Original You Are Not The Father' , description:'Joseph finally finds out the truth' ,author_id: users.sample.id )
video.video.attach(io: file, filename: 'You are not the father.mp4')

file = open('https://trutube-pro.s3.amazonaws.com/Dramatic+Cupcake+Dog+-+Revelation.mp4')
video = Video.create(title:'Dramatic Dog' , description:'Dog under more pressure then we can ever know' ,author_id: users.sample.id )
video.video.attach(io: file, filename: 'DogCupCake.mp4')

file = open('https://trutube-pro.s3.amazonaws.com/Bizkit+the+Sleep+Walking+Dog.mp4')
video = Video.create(title:'Sleepwalking Dog' , description:'Dog living his best life in his dreams' ,author_id: users.sample.id )
video.video.attach(io: file, filename: 'SleepwalkingDog.mp4')

file = open('https://trutube-pro.s3.amazonaws.com/Best+fighting+scene+ever+in+anime.mp4')
video = Video.create(title:'The Best Fighting Scene' , description:'anime fight scene' ,author_id: users.sample.id )
video.video.attach(io: file, filename: 'BestFight.mp4')

file = open('https://trutube-pro.s3.amazonaws.com/Have+you+ever+had+a+dream+like+this.mp4')
video = Video.create(title:'Have you ever had a dream like this?' , description:'meme have you ever had a dream' ,author_id: users.sample.id )
video.video.attach(io: file, filename: 'dreammeme.mp4')

file = open('https://trutube-pro.s3.amazonaws.com/Filling+in%2C+due+to...WHAT.mp4')
video = Video.create(title:'Filling in due to what??' , description:'meme wait what??' ,author_id: users.sample.id )
video.video.attach(io: file, filename: 'waitwhat.mp4')

file = open('https://trutube-pro.s3.amazonaws.com/Kitten+Fail.mp4')
video = Video.create(title:'Kitten Fail' , description:'meme cat Kitten Fails badly' ,author_id: users.sample.id )
video.video.attach(io: file, filename: 'kittenfail.mp4')

file = open('https://trutube-pro.s3.amazonaws.com/Goku+And+Frieza+Defeat+Jiren+English+Subbed.mp4')
video = Video.create(title:'Goku & Frieza vs Jiren Fighting Scene' , description:'anime fight dbz dragonball scene Goku & Frieza vs Jiren' ,author_id: users.sample.id )
video.video.attach(io: file, filename: 'GokuVSJiren.mp4')

file = open('https://trutube-pro.s3.amazonaws.com/Gon+vs+Hisoka.mp4')
video = Video.create(title:'Gon vs Hisoka Fighting Scene' , description:'anime fight Hunter x Hunter scene Gon vs Hisoka' ,author_id: users.sample.id )
video.video.attach(io: file, filename: 'GonvsHisoka.mp4')

file = open('https://trutube-pro.s3.amazonaws.com/Toki+vs++Mutsumi+Mitsuba.mp4')
video = Video.create(title:'Toki vs Mutsumi' , description:'anime fight Toki vs Mutsumi' ,author_id: users.sample.id )
video.video.attach(io: file, filename: 'TokivsMutsumi.mp4')

file = open('https://trutube-pro.s3.amazonaws.com/Masrur+vs+Morgiana.mp4')
video = Video.create(title:'Masrur vs Morigiana' , description:'anime fight scene Masrur vs Morigiana' ,author_id: users.sample.id )
video.video.attach(io: file, filename: 'MasrurvsMorigiana.mp4')






