
var button = $('button')
function handleClick () {
  console.log('hello')
  location.reload()
}
button.on('click', handleClick)

const cards = [
  {
    id: 1,
    front: '"He is loved and lost (in a twist on rom-com convention the relationship ended with his girlfriend trying to split him down the middle with a long bow)."',
    back: 'Jon Snow'
  },
  {
    id: 2,
    front: 'She conducts herself much as a real person would if marooned in Westeros – appalled at the amorality all around yet determined to muddle through.',
    back: 'Arya Stark'
  },
  {
    id: 3,
    front: 'A conniving diva and natural-born schemer who delights in inflicting misery on others.',
    back: 'Cersei Lannister'
  },
  {
    id: 4,
    front: 'A party animal with a heart of gold, an instinctive schemer who knows right from wrong, a short man made tall by his bravery and kindness (a dirty word in the Seven Kingdoms).',
    back: 'Tyrion Lannister'
  },
  {
    id: 5,
    front: 'She witnessed the sadistic execution of her father on the orders of cackling fiancé Joffrey, then had to live among her enemies, concealing her hatred behind a smile that seemed to turn sharper at the edges with each fresh humiliation.',
    back: 'Sansa Stark'
  },
  {
    id: 6,
    front: 'A powerful khal, or warlord, of the Dothraki people, a tribal nation of horse riders in the steppes beyond the Free Cities. He is an accomplished warrior and has never been defeated in battle.',
    back: 'Drogo'
  },
  {
    id: 7,
    front: 'A party animal with a heart of gold, an instinctive schemer who knows right from wrong, a short man made tall by his bravery and kindness (a dirty word in the Seven Kingdoms).',
    back: 'Tyrion Lannister'
  },
  {
    id: 8,
    front: 'a notoriously fearsome warrior, with a tendency toward extreme and at times excessive violence.',
    back: 'Gregor Clegane'
  },
  {
    id: 9,
    front: 'To those south of the wall the lord of the undead White Walkers is little more than a rumour, an ancient fireside tale to frighten children.',
    back: 'The Nights King'
  },
  {
    id: 10,
    front: 'It appeared, was a decent guy doing his best in a world where abiding by your principles usually gets you killed. And yet, with a single act in season five, we now understand there are no depths to which the head of House ..... was not prepared sink in his pursuit of power.',
    back: 'Stannis Baratheon'
  }
]

// function renderCards () {
//   for (var i = 0; i < cards.length; i++) {
//     let cardData = cards[i]
//     let cardElement = $('<div></div>')
//     cardElement.attr('id', cardData.id)
//     cardElement.addClass('card')
//     cardElement.text(cardData.front)
//     cardElement.on('click', function () {
//       console.log('test')
//       $(this).css('transform', '+180deg')
//       let cardId = $(this).attr('id')
//       let cardData = cards.find(function (card) {
//         return card.id == cardId
//       })
//       $(this).text(cardData.back)
//     })
//     $('.flex-container').append(cardElement)
//   }
// }
//
// renderCards()

function renderCards2 () {
  let idsLeft = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  for (var i = 0; i < cards.length; i++) {
    var rand = Math.floor(Math.random() * (idsLeft.length - 0))
    console.log("idsLeft index="+rand)
    var cardIndex = idsLeft[rand]
    console.log("cardIndex="+ cardIndex);
    let cardData = cards[cardIndex]
    idsLeft.splice(rand,1)
    console.log(idsLeft)

    let cardElement = $('<div></div>')
    cardElement.attr('id', cardData.id)
    cardElement.addClass('card')
    cardElement.text(cardData.front)
    cardElement.on('click', function () {
      console.log('test')
      $(this).css('transform', '+180deg')
      let cardId = $(this).attr('id')
      let cardData = cards.find(function (card) {
        return card.id == cardId
      })
      var cardElement = document.createElement('img');
      $(this).text(cardData.back)
    })
    $('.flex-container').append(cardElement)
  }
}
renderCards2()


// var phrases = [
//     ['card 1', 'card2']
// ]
// var phrases2 = [
//     ['back1', 'back 2']
// ]
// makeFront = function (phrase) {
//   var div = '<div class="card"><span >Question: ' + phrase[0] + '</span> </div>'
//   return div
// }
// makeBack = function (phrase2) {
//   var div = '<div class="card"><span >Answer: ' + phrase2[0] + '</span> </div>'
//   return div
// }
//
// $('#div01').append(makeFront(phrases[0]))
// $('#div02').append(makeBack(phrases2[0]))
// $('#div03').append(makeFront(phrases[1]))
// $('#div04').append(makeBack(phrases2[1]))
