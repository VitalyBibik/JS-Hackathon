const headers = [
  {
    icon:'https://notion-emojis.s3-us-west-2.amazonaws.com/v0/svg-twitter/1f3c0.svg',
    title: 'Правки'
  }
];
const article = [
  {
    title: 'Статья 81',
    text: 'Положение части 3 статьи 81 Конституции Российской Федерации, ограничивающее число сроков, в течение которых одно и то же лицо может занимать должность Президента Российской Федерации, применяется к лицу, занимавшему и (или) занимающему должность Президента Российской Федерации, без учета числа сроков, в течение которых оно занимало и (или) занимает эту должность на момент вступления в силу поправки к Конституции Российской Федерации, вносящей соответствующее ограничение, и не исключает для него возможность занимать должность Президента Российской Федерации в течение сроков, допустимых указанным положением.'
  },
  {
    title: 'Статья 93 ',
    text: 'Президент Российской Федерации, прекративший исполнение своих полномочий, лишен неприкосновенности Советом Федерации только на основании выдвинутого Государственной Думой обвинения в государственной измене или совершении иного тяжкого преступления, подтвержденного заключением Верховного Суда Российской Федерации о наличии в действиях Президента Российской Федерации, как действующего, так и прекратившего исполнение своих полномочий, признаков преступления и заключением Конституционного Суда Российской Федерации о соблюдении установленного порядка выдвижения обвинения.' +
        'Решение Государственной Думы о выдвижении обвинения и решение Совета Федерации об отрешении Президента Российской Федерации от должности, о лишении неприкосновенности Президента Российской Федерации, прекратившего исполнение своих полномочий, должны быть приняты двумя третями голосов от общего числа соответственно сенаторов Российской Федерации и депутатов Государственной Думы по инициативе не менее одной трети депутатов Государственной Думы и при наличии заключения специальной комиссии, образованной Государственной Думой.' +
        'Решение Совета Федерации об отрешении Президента Российской Федерации от должности, о лишении неприкосновенности Президента Российской Федерации, прекратившего исполнение своих полномочий, должно быть принято не позднее чем в трехмесячный срок после выдвижения Государственной Думой обвинения против Президента Российской Федерации. Если в этот срок решение Совета Федерации не будет принято, обвинение против Президента Российской Федерации, Президента Российской Федерации, прекратившего исполнение своих полномочий, считается отклоненным.'

  },
  {
    title: 'Статья 79',
    text: 'Российская Федерация может участвовать в межгосударственных объединениях и передавать им часть своих полномочий в соответствии с международными договорами Российской Федерации, если это не влечет за собой ограничения прав и свобод человека и гражданина и не противоречит основам конституционного строя Российской Федерации. Решения межгосударственных органов, принятые на основании положений международных договоров Российской Федерации в их истолковании, противоречащем Конституции Российской Федерации, не подлежат исполнению в Российской Федерации.'
  }
];


const blogPost = document.querySelector('.blog-post'); // Область статей
//



function getTemplate(title, text) {
  return `
<div class="blog-articles">
  <div class="blog-post__icons-container">
     <img src="./styles/images/header.png" alt="" class="blog-post__icon blog-post__icon-heading">
     <img src="./styles/images/text.png" alt="" class="blog-post__icon blog-post__icon-text">
     <img src="./styles/images/delete.png" alt="" class="blog-post__icon blog-post__icon-delete">
     <img src="./styles/images/drag.png" alt="" class="blog-post__icon blog-post__icon-move">
   </div>
   <div class="blog-post__container">
      <h2 class="blog-post__heading">${sanitizeHTML(title)}</h2>
      <p class="blog-post__text">${sanitizeHTML(text)}</p>
   </div>
 </div>`
}

function sanitizeHTML(str) {
  let temp = document.createElement('div');
  temp.textContent = str;
  return temp.innerHTML;
}


// Создает карточку и добавляет на страницу
function addContent(title, text) {
  return blogPost.insertAdjacentHTML('beforeEnd', getTemplate(title, text));
}


article.forEach((article) => {
  addContent(article.title, article.text);
})
