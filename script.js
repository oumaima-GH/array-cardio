 // Get your shorts on - this is an array workout!
    // ## Array Cardio Day 1

    // Some data we can work with

    const inventors = [
      { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
      { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
      { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
      { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
      { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
      { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
      { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
      { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
      { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
      { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
      { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
      { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
    ];

    // const people = [
    //   'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    //   'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    //   'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    //   'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    //   'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
    // ];
    
    // Array.prototype.filter()
    // 1. Filter the list of inventors for those who were born in the 1500's
    // const bornIn1500s = inventors.filter((inventor) => {
    //     return inventor.year >= 1500 && inventor.year < 1600
    //   });
      
    //   console.log(bornIn1500s)




    // Array.prototype.map()
    // 2. Give us an array of the inventors first and last names

    // const firstAndLastNames = inventors.map((inventor) => {
    //     return `${inventor.first} ${inventor.last}`
    // })

    // console.log(firstAndLastNames);




    // Array.prototype.sort()
    // 3. Sort the inventors by birthdate, oldest to youngest

    // const oldestToYoungest = inventors.sort(function(a, b){return a.year - b.year})

    // const mapped = oldestToYoungest.map((person) => {
    //     return `${person.first} ${person.last}: ${person.year}`
    // })

    // console.log(mapped);




    // Array.prototype.reduce()
    // 4. How many years did all the inventors live all together?

    // const allYearsLived = inventors.reduce((acc, current) =>{

    //     return acc + current.year
    // }, 0)
    // console.log(allYearsLived);
    



    // 5. Sort the inventors by years lived

    // const yearsLived = inventors.sort(function(a,b){
    //     return (b.passed - a.passed) - (b.year - a.year)
    // })

    // console.log(yearsLived);





    // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
    // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

    // const arr = ['Boulevards of Paris', 'City walls of Paris', 'Thiers wall', 'Wall of Charles V', 'Wall of Philip II Augustus', 'City gates of Paris', "Haussmann's renovation of Paris", 'Boulevards of the Marshals', 'Boulevard Auguste-Blanqui', 'Boulevard Barbès', 'Boulevard Beaumarchais', "Boulevard de l'Amiral-Bruix", 'Boulevard Mortier', 'Boulevard Poniatowski', 'Boulevard Soult', 'Boulevard des Capucines', 'Boulevard de la Chapelle', 'Boulevard de Clichy', 'Boulevard du Crime', "Boulevard du Général-d'Armée-Jean-Simon", 'Boulevard Haussmann', "Boulevard de l'Hôpital", 'Boulevard des Italiens', 'Boulevard Lefebvre', 'Boulevard de la Madeleine', 'Boulevard de Magenta', 'Boulevard Malesherbes', 'Boulevard Marguerite-de-Rochechouart', 'Boulevard Montmartre', 'Boulevard du Montparnasse', 'Boulevard Raspail', 'Boulevard Richard-Lenoir', 'Boulevard Saint-Germain', 'Boulevard Saint-Michel', 'Boulevard de Sébastopol', 'Boulevard de Strasbourg', 'Boulevard du Temple', 'Boulevard Voltaire', 'Boulevard de la Zone']

    // const containsDE = arr.filter((de) => {
    //     return de.includes(' de ')
    // })

    // console.log(containsDE);






    // 7. sort Exercise
    // Sort the people alphabetically by last name

    const sortByLastName = inventors.sort((a, b) => {

      if (a.last < b.last) {
        return -1
      }
      if (a.last > b.last) {
        return 1
      }
      return 0
    })
    
    console.log(sortByLastName);





    // 8. Reduce Exercise
    // Sum up the instances of each of these
    const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

    // const dataObj = {}
    // for(let i = 0; i < data.length; i++){
    //   const instance = data[i]
    // if (dataObj[instance]) {
    //     dataObj[instance] ++
    // } else {
    //     dataObj[instance] = 1
    // }
    // }

    // console.log(dataObj);


// with reduce **************************************************************************
    
    // const sumUpInstances = data.reduce((acc, curr) => {
    //   if (acc[curr]) {
    //      acc[curr]++
    //     } else {
    //        acc[curr] = 1
    //       }
    //     return acc
    // }, {})

    //   console.log(sumUpInstances);
    
      // ## Array Cardio Day 2

    const people = [
      { name: 'Wes', year: 1988 },
      { name: 'Kait', year: 1986 },
      { name: 'Irv', year: 1970 },
      { name: 'Lux', year: 2015 }
    ];

    let comments = [
      { text: 'Love this!', id: 523423 },
      { text: 'Super good', id: 823423 },
      { text: 'You are the best', id: 2039842 },
      { text: 'Ramen is my fav food ever', id: 123523 },
      { text: 'Nice Nice Nice!', id: 542328 }
    ];


    // Some and Every Checks
    // Array.prototype.some() // is at least one person 19 or older?
    // const isNineteenOrOlder = () => {
    //   const currYear = new Date().getFullYear()

    //   return (
    //     people.some((person) => {
    //      return (currYear - person.year) >= 19
        
    //   }))

    // }
    // console.log(isNineteenOrOlder());

    // Array.prototype.every() // is everyone 19 or older?
    // const everyoneNineteenOrOlder = () => {
    //   const thisYear = new Date().getFullYear()

    //   return (
    //      people.every((person) => {
    //     return (thisYear - person.year) >= 19
        
    //   }))

    // }
    // console.log(everyoneNineteenOrOlder());



    // Array.prototype.find()
    // Find is like filter, but instead returns just the one you are looking for
    // find the comment with the ID of 823423
    // const findComment = () => {
    //   const comment = comments.find(comment => comment.id === 823423)
    //   return comment
    // }
    
    // console.log(findComment());



    // Array.prototype.findIndex()
    // Find the comment with this ID

    // const findIndexComment = () => {
    //   const comment = comments.findIndex(comment => comment.id === 823423)
    //   return comment
    // }
    
    // console.log(findIndexComment());

   // delete the comment with the ID of 823423
  //  const deleteComment = () => {
  //   comments = comments.filter(comment => comment.id !== 823423);

  //  }
  //  console.log(comments);

  //  deleteComment()
  //  console.log(comments);
