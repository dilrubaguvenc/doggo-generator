const BREEDS_URL = 'https://dog.ceo/api/breeds/list/all'

const select = document.querySelector('.breeds')

fetch(BREEDS_URL)
    .then(res => {
        return res.json();
    })
    .then(data => {
        const breedsObject = data.message; // turn the message into an object
        const breedsArray = Object.keys(breedsObject) // turn the object into an array
        for(let i = 0; i < breedsArray.length; i++) {
            const option = document.createElement('option') // dom manipulation; <option></option>
            option.value = breedsArray[i] // <option value = 'breed'>
            option.innerText = breedsArray[i] // <option value='breed'>breed</option>; adding breeds inside the tags
            select.appendChild(option) // appending each option to drop down box; attach another tag within parent tag rather than adding each breed manually 
        }
    })
    select.addEventListener('change', event => {
        let url = `https://dog.ceo/api/breed/${event.target.value}/images/random`
        getDoggoImg(url)
        doggoInfo.assignMF()
        doggoInfo.assignAge()
        doggoInfo.assignLikes()
        doggoInfo.assignDislikes()
        doggoInfo.assignZodiacSign()
        doggoInfo.assignFunFact()
    })

    const img = document.querySelector('.dog-img') 

    const getDoggoImg = url => {
        fetch(url) // going to API url above
            .then(res => {
                return res.json(); // get JSON message back
            })
            .then(data => {
                img.src = data.message // extract msg from JSON & attach to img taf as new source
            })
    }

    const doggoInfo = {
        fNames: ['Abby', 'Addie', 'Alexis', 'Alice', 'Allie', 'Alyssa', 'Amber', 'Angel', 'Anna', 'Ariel', 'Ashley', 'Aspen', 'Athena', 'Autumn', 'Ava', 'Avery', 'Baby', 'Bailey', 'Basil', 'Bean', 'Bella', 'Belle', 'Betsy', 'Betty', 'Bianca', 'Birdie', 'Biscuit', 'Blondie','Blossom', 'Bonnie', 'Brandy', 'Brooklyn', 'Brownie', 'Buffy', 'Callie', 'Camilla', 'Candy', 'Carla', 'Carly', 'Carmela', 'Casey', 'Cassie', 'Chance', 'Chanel', 'Chloe', 'Cinnamon', 'Cleo', 'Coco', 'Cookie', 'Cricket', 'Daisy', 'Dakota', 'Dana', 'Daphne', 'Darla', 'Darlene', 'Delia', 'Delilah', 'Destiny', 'Diamond', 'Diva', 'Dixie', 'Dolly','Duchess', 'Eden', 'Edie', 'Ella', 'Ellie', 'Elsa', 'Emma', 'Emmy', 'Eva', 'Faith', 'Fanny', 'Fern', 'Fiona', 'Foxy', 'Gabby', 'Gemma', 'Georgia', 'Gia', 'Gidget', 'Gigi', 'Ginger', 'Goldie', 'Grace', 'Gracie', 'Greta', 'Gypsy', 'Hailey', 'Hannah', 'Harley', 'Harper', 'Hazel', 'Heidi', 'Hersey', 'Holly', 'Honey', 'Hope', 'Ibby', 'Ines', 'Isabella', 'Ivy', 'Izzy', 'Jackie', 'Jada', 'Jade', 'Jasmine', 'Jenna', 'Jersey', 'Jessie', 'Jill', 'Jolene', 'Josie', 'Julia', 'Juliet', 'Juno', 'Kali', 'Kallie', 'Karma', 'Kate', 'Katie', 'Kayla', 'Kelsey', 'Khloe', 'Kiki', 'Kiwi', 'Kira', 'Koko', 'Kona', 'Lacy', 'Lady', 'Layla', 'Leia', 'Lena', 'Lexi', 'Libby', 'Liberty', 'Lily', 'Lizzy', 'Lola',' London', 'Lucky', 'Lulu', 'Luna', 'Mabel', 'Mackenzie', 'Macy', 'Maddie', 'Madison', 'Maggie', 'Maisy', 'Mandy', 'Marley', 'Matilda', 'Mattie', 'Maya', 'Mia', 'Mika', 'Mila', 'Miley', 'Millie', 'Mimi', 'Minnie', 'Missy', 'Misty', 'Mitzi', 'Mocha', 'Mochi', 'Molly', 'Morgan', 'Moxie', 'Muffin', 'Mya', 'Nala', 'Nell', 'Nellie', 'Nikki', 'Nina', 'Noel', 'Nola', 'Nori', 'Olive', 'Oreo', 'Paisley', 'Pandora', 'Paris', 'Peaches', 'Peanut', 'Pearl', 'Pebbles', 'Penny', 'Pepper', 'Phoebe', 'Piper', 'Pippa', 'Pixie', 'Polly', 'Poppy', 'Precious', 'Princess', 'Priscilla', 'Raven', 'Reese', 'Riley', 'Rose', 'Rosie', 'Roxy', 'Ruby', 'Sadie', 'Sage', 'Sally', 'Sam', 'Samantha', 'Sammie', 'Sandy', 'Sasha', 'Sassy', 'Savannah', 'Scarlet', 'Shadow', 'Sheba', 'Shelby', 'Shiloh', 'Sierra', 'Sissy', 'Sky', 'Smokey', 'Snickers', 'Sophia', 'Sophie', 'Star', 'Stella', 'Sugar', 'Suki', 'Summer', 'Sunny', 'Sweetie', 'Sydney', 'Tasha', 'Tessa', 'Tilly', 'Tootsie', 'Trixie', 'Violet', 'Willow', 'Winnie', 'Xena', 'Zelda', 'Zoe'],
        mNames: ['Abe', 'Abbott', 'Ace', 'Aero', 'AJ', 'Albert', 'Alden', 'Alex', 'Alfie', 'Alvin', 'Amos', 'Andy', 'Angus', 'Apollo', 'Archie', 'Aries', 'Artie', 'Ash', 'Austin', 'Axel', 'Bailey', 'Bam', 'Bandit', 'Barkley', 'Barney', 'Baron', 'Baxter', 'Bear', 'Beau', 'Benji', 'Benny', 'Bently', 'Billy', 'Bingo', 'Blake', 'Blaze', 'Blue', 'Bo', 'Boomer', 'Brady', 'Brody', 'Brownie', 'Bruce', 'Bruno', 'Brutus', 'Bubba', 'Buck', 'Buddy', 'Buster', 'Butch', 'Buzz', 'Cain', 'Captain', 'Carter', 'Cash', 'Casper', 'Champ', 'Chance', 'Charlie', 'Chase', 'Chester', 'Chewy', 'Chico', 'Chief', 'Chip', 'CJ', 'Clifford', 'Clyde', 'Coco', 'Cody', 'Colby', 'Cooper', 'Damien', 'Dane', 'Dante', 'Denver', 'Dexter', 'Diego', 'Diesel', 'Dodge', 'Drew', 'Duke', 'Dylan', 'Eddie', 'Eli', 'Elmer', 'Evan', 'Felix', 'Finn', 'Fisher', 'Flash', 'Frankie', 'Freddy', 'Fritz', 'Gage', 'George', 'Gizmo', 'Goose', 'Gordo', 'Griffin', 'Gunner', 'Gus', 'Haku', 'Hank', 'Harley', 'Hawkeye', 'Henry', 'Hoss', 'Huck', 'Hunter', 'Iggy', 'Ivan', 'Jack', 'Jackson', 'Jake', 'Jasper', 'Jax', 'Jesse', 'Joey', 'Johnny', 'Judge', 'Kane', 'Kilo', 'King', 'Kobe', 'Koda', 'Lenny', 'Leo', 'Leroy', 'Levi', 'Lewis', 'Logan', 'Loki', 'Louie', 'Lucky', 'Luke', 'Marley', 'Marty', 'Maverick', 'Max', 'Maximus', 'Mickey', 'Miles', 'Milo', 'Moe', 'Moose', 'Morris', 'Murphy', 'Ned', 'Nelson', 'Nero', 'Nico', 'Noah', 'Norm', 'Oakley', 'Odie', 'Odin', 'Oliver', 'Ollie', 'Oreo', 'Oscar', 'Otis', 'Otto', 'Ozzy', 'Pablo', 'Parker', 'Peanut', 'Pepper', 'Petey', 'Porter', 'Prince', 'Quincy', 'Radar', 'Ralph', 'Rambo', 'Ranger', 'Rascal', 'Rebel', 'Reese', 'Reggie', 'Remy', 'Rex', 'Ricky', 'Rider', 'Riley', 'Ringo', 'Rocco', 'Rockwell', 'Rocky', 'Romeo', 'Rosco', 'Rudy', 'Rufus', 'Rusty', 'Sam', 'Sammy', 'Samson', 'Sarge', 'Sawyer', 'Scooby', 'Scooter', 'Scout', 'Scrappy', 'Shadow', 'Shamus', 'Shiloh', 'Simba', 'Simon', 'Smoky', 'Snoopy', 'Sparky', 'Spencer', 'Spike', 'Spot', 'Stanley', 'Stewie', 'Storm', 'Taco', 'Tank', 'Taz', 'Teddy', 'Theo', 'Thor', 'Titus', 'TJ', 'Toby', 'Trapper', 'Tripp', 'Trout', 'Tucker', 'Tyler', 'Tyson', 'Vince', 'Vinnie', 'Wally', 'Walter', 'Watson', 'Willy', 'Winston', 'Woody', 'Wrigley', 'Wyatt', 'Yogi', 'Yoshi', 'Zane', 'Zeus', 'Ziggy'],
        likesList: ['Ice water from McDonalds', 'Kisses', 'Snuggles', 'Sniffing the air', 'Biting the wind', 'Trash cans', 'Raiding the cat box for treasure', 'Barking hello to friends', 'Stealing cat food', 'Pizza', 'Sleeping in the car', 'Papaya', 'Stealing socks', 'New friends', 'Ear rubs', 'Sliced hot dogs', 'Running at the top speed inside the house', 'Causing diversions', 'Cheese', 'Bread', 'Sunbathing', 'Running through tall grass', 'Deep sighs', 'Ear scratchies', 'Licking people directly on the mouth', 'Destroying soft toys', 'The human bed', 'Squeaky toys', 'Sitting with (or on) people', 'Chicken', 'Going to bed after midnight', 'Puddles', 'Howling at sirens', 'Broccoli', 'Staring out the window', 'Bubbles', 'Peanut butter', 'String cheese', 'Pats, rubs and butt scratches', 'Cauliflower', 'Your dirtiest, stinkiest, sweatiest clothes', 'Toys', 'Puzzles', 'Bacon', 'Anything stolen off your plate', 'French fries', 'Swimming', 'Car rides', 'Chasing squirrels', 'A nice, peaceful nap in a quiet spot', 'Sniffing bushes', 'Sleeping in', 'Playing hide and seek', 'Digging holes in the flower bed', 'Staring at you while pooping', 'Stealing blankets off the bed', 'Drinking out of puddles', 'Farting', 'Doing tricks', 'Agility', 'Barking at the delivery person', 'Stealing dirty laundry', 'Stealing your favorite shoe', 'Staring into space', 'Wrestling with friends', 'Going to the dog park', 'Getting as muddy as possible', 'Going on hikes', 'Carrots', 'Peas', 'Blueberries', 'Annoying the cat', 'Playing tug of war', 'Waking you up at 4am for food', 'Staring at you with love', 'Sitting on your lap', 'Laying on piles of fresh, warm laundry', 'Making up mysterious illness symptoms to scare their mom/dad', 'Likes to manipulate to get their way'],
        dislikesList: ['Eating alone', 'Roombas', 'Small children', 'Thunder', 'Staying clean after a bath', 'Nail trims', 'Being groomed', 'Baths', 'Being bored', 'Sharing food', 'Being home alone', 'Balloons', 'Suitcases', 'Being carried', 'Helicopters', 'Doorbells', 'Landscrapers/lawn mowers', 'Their own shadow', 'Going to bed late', 'Vaccum cleaners', 'Not being included', 'The neighbor', 'The UPS person', 'Going home from dog park', 'Garbage trucks', 'Thunderstorms', 'Fireworks', 'Going to the vet', 'Taking medications', 'Their human being busy', 'Peanut Butter', 'Mozart', 'Rainy days', 'Snow days', 'Chihuahuas'],
        factList: ['Remembers every squirrel they have ever seen', 'Wishes they knew how cars work', 'Thinks pond water tastes the very best', 'Can carry three tennis balls at once and is very proud of that', 'Eats grass for fun', "Doesn't actually know their name, just likes your voice", 'Understands more words than you think', 'Saw a shooting star once', 'Will only sleep with 2 blankets', 'Ate an entire cake at a birthday party before anyone noticed', 'Can hear a bag of cheese opening from half a mile away', 'Once gave a grasshopper a ride on their nose', "Doesn't understand the stock market", 'Can spring up to 30mph', "Wishes there weren't so many different streaming services", 'Secretly enjoys baths, but will never tell', 'Ate a bee and got stung, then did it again the next day', 'Unsure of the meaning of life, but believes it may involve bacon', 'Truly believes they are a cat', 'Feels a sense of longing when watching birds migrate in the fall', "Enjoys SNL, but doesn't understand the jokes", 'Sheds enough to fill a 5-gallon bucjet each week', 'Responds to commands in English, German, and Kiligon', 'Only pretends to understand what you are saying, loves you anyway', 'Caught a squirrel once, now dreams about that moment every single day', "Knows exactly how to universe will end, but doesn't care", 'Would be a top-notch violinist, if only they had thumbs', 'Dreams of breaking into the dog food plant down the road and eating EVERYTHING', 'Can see one more color than any other dog, you will never know which one it is', 'Won the award for "fastest lick of the kitchen counter" in 2019 (self-awarded)', 'Takes charge and loudly demands treats', 'Very bouncy, scientists suspects that legs may contain springs', "Prefers to eat at the same time as the humans - it's only polite!", 'Originally from Tijuana, unknown level of fluency in Spanish', 'Favorite hobby is sculpting (the fence, with their mouths)', 'Can eat an entire loaf of bread in one sitting', 'Chooses whether to listen to you on a case-by-case basis', 'Can escape any harness ever made', 'Has an extra toe', 'Caught a butterfly and immediately spat it back out', 'Fences are less of an obstacle and more of a suggestion', 'Terrified of the kitten', 'Once ate an entire block of cheese', 'Can consume a rawhide chew in 30 seconds', 'Farts every time they sit down', 'Can howl on pitch', 'Will immediately present belly for rubs', 'Dream job: bacon taste-tester'],
        zodiacSign: ['Capricorn', 'Aquarius', 'Pisces', 'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius'],
        MF: '',
        rname: '',
        age: '',
        likes: '',
        dislikes: '',
        fact: '',

        assignMF() {
            x = (Math.floor(Math.random() * 2) == 0)
            if (x) {
                this.MF = 'Female';
                this.assignName(this.fNames)
            } else {
                this.MF = 'Male';
                this.assignName(this.mNames)
            }
            document.getElementById('MF').innerHTML = `Sex: ${this.MF}`
        },

        assignName(array) {
            this.rname = array[Math.floor(Math.random() * array.length)]
            document.getElementById('dog-name').innerHTML = `${this.rname}`
        },

        assignAge() {
            this.age = Math.floor(Math.random() * 16 + 1)
            document.getElementById('age').innerHTML = `Age: ${this.age}`
        },

        // assignZodiac() {
        //     this.zodiacSign = Math.random()
        //     document.getElementById('zodiacSign').innerHTML = `Zodiac sign: ${this.zodiacSign}`
        // },

        yatesShuffle(array) {
            let m = array.length, t, i;
            // while there remain elements to shuffle
            while (m) {
            // pick a remaining element
                i = Math.floor(Math.random() * m--);
            // and swap it with the current element
                t = array[m];
                array[m] = array[i];
                array[i] = t;
            }
          return array;
            },

            assignLikes() {
                this.likes = this.yatesShuffle(this.likesList).slice(0,2)
                document.getElementById('likes').innerHTML = `Likes: ${this.likes[0]}, ${this.likes[1]}`
            },

            assignDislikes() {
                this.dislikes = this.yatesShuffle(this.dislikesList).slice(0,2)
                document.getElementById('dislikes').innerHTML = `Dislikes: ${this.dislikes[0]}, ${this.dislikes[1]}`
            },

            assignZodiacSign() {
                this.zodiac = this.zodiacSign[Math.floor(Math.random() * this.zodiacSign.length)]
                document.getElementById('zodiacSign').innerHTML = `Zodiac sign: ${this.zodiac}`
            },

            assignFunFact() {
                this.fact = this.factList[Math.floor(Math.random() * this.factList.length)]
                document.getElementById('fun-fact').innerHTML = `Fun-fact: ${this.fact}`
            }



    }
