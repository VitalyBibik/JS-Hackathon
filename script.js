const headers = [
  {
    logo:'https://notion-emojis.s3-us-west-2.amazonaws.com/v0/svg-twitter/1f3c0.svg',
    logoAlt:'Баскетбольный мяч / Basketball ball',
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
const intro = document.querySelector('.intro') // Область интро (заголовок)

//

function getTemplateContent(title, text, index) {
  return `
<div class="blog-articles" id=${sanitizeHTML(index)} draggable="true">
  <div class="blog-post__icons-container" >
     <img src="./styles/images/header.png" alt="Cоздать заголовок" class="blog-post__icon blog-post__icon-heading">
     <img src="./styles/images/text.png" alt="Создать текст" class="blog-post__icon blog-post__icon-text">
     <img src="./styles/images/delete.png" alt="Удалить" class="blog-post__icon blog-post__icon-delete">
     <img src="./styles/images/drag.png" alt="Иконка" class="blog-post__icon blog-post__icon-move">
   </div>
   <div class="blog-post__container">
      <h2 class="blog-post__heading" contenteditable="true">${sanitizeHTML(title)}</h2>
      <p class="blog-post__text" contenteditable="true">${sanitizeHTML(text)}</p>
   </div>
 </div>`
}

function getTemplateIntro(logo, title, logoAlt, index) {
  return `
       <img src="${sanitizeHTML(logo)}" alt="${sanitizeHTML(logoAlt)}" class="intro__image">
        <h1 class="intro__heading" id="edit" contenteditable="true">${sanitizeHTML(title)}</h1>`
}

function sanitizeHTML(str) {
  let temp = document.createElement('div');
  temp.textContent = str;
  return temp.innerHTML;
}


// Создает карточку и добавляет на страницу
function addContent(title, text, index) {
  return blogPost.insertAdjacentHTML('beforeend', getTemplateContent(title, text, index));
}

function addIntro(logo, logoAlt, title, index) {
  return intro.insertAdjacentHTML('beforeend', getTemplateIntro(logo, logoAlt, title, index));
}
function editText(event) {
  if (event.target.classList.contains('blog-post__text')) {
    const textValue = event.target.textContent;
    const textId =  event.target.parentElement.id;
    const currentStorage = localObjectArticle();
    let finalStorage = currentStorage[textId].text = textValue;

    localStorage.setItem('article', JSON.stringify(currentStorage));
  }
}
function editTitle(event) {
  if (event.target.classList.contains('blog-post__heading')) {
    const textValue = event.target.textContent;
    const textId =  event.target.parentElement.id;
    const currentStorage = localObjectArticle();
    let finalStorage = currentStorage[textId].title = textValue;

    localStorage.setItem('article', JSON.stringify(currentStorage));
  }
}

function localObjectArticle() {
  const raw = localStorage.getItem('article')
  return JSON.parse(raw);
}
function localObjectHeader() {
  const raw = localStorage.getItem('header')
  return JSON.parse(raw);
}

function initArray(headers, article) {
  headers.forEach((headers, index) => {
    addIntro(headers.logo, headers.title, headers.logoAlt, index);
  })
  article.forEach((article, index) => {
    addContent(article.title, article.text, index);
  })
}
function initArrayHeader(headers) {
  headers.forEach((headers, index) => {
    addIntro(headers.logo, headers.title, headers.logoAlt, index);
  })
}
function initArrayArticle(article) {
  article.forEach((article, index) => {
    addContent(article.title, article.text, index);
  })
}

function init(headers, article){
  if ( (localObjectArticle() !== null) && (localObjectHeader() !== null) ) {
    console.log('Беру данные из ВСЕГО стораджа ', localStorage);
    localObjectHeader().forEach((headers, index) => {
      addIntro(headers.logo, headers.title, headers.logoAlt, index);
    })
    localObjectArticle().forEach((article, index) => {
      addContent(article.title, article.text, index);
    })
  }
  else if (localObjectHeader() !== null) {
    console.log('Беру данные из стораджа Хэдер', localObjectHeader());
    localObjectHeader().forEach((headers, index) => {
      addIntro(headers.logo, headers.title, headers.logoAlt, index);
    })
    initArrayArticle(article);
    localStorage.setItem('article', JSON.stringify(article));
  }
 else if (localObjectArticle() !== null){
    console.log('Беру данные из стораджа Article', localObjectArticle);
    initArrayHeader(headers);
    localObjectArticle().forEach((article, index) => {
      addContent(article.title, article.text, index);
    })
    localStorage.setItem('header', JSON.stringify(headers));
  }
 else {
    console.log('Беру данные из массива');
    initArray(headers, article);
    localStorage.setItem('header', JSON.stringify(headers));
    localStorage.setItem('article', JSON.stringify(article));
  }

}

//blogPost.addEventListener('input', editText);
blogPost.addEventListener('input', editTitle);

init(headers, article);

//adding new post to the list
function addNewPost(e) {
  if(e.target.classList.contains('blog-post__icon-heading')){
    addContent('Заголовок', 'Текст')
  }
}

blogPost.addEventListener('click', (e)=> {
  addNewPost(e);
})


//delete post
function deletePost(e) {
  if(e.target.classList.contains('blog-post__icon-delete')) {
    const post = e.target.closest('.blog-articles');
    blogPost.removeChild(post);

    const articles = localObjectArticle();
    const id = post.getAttribute('id');
    articles.splice(id, 1);
    localStorage.setItem('article', JSON.stringify(articles));
    window.location.reload();

  }
}

blogPost.addEventListener('click', (e)=> {
  deletePost(e);
})

//по кнопке добавляет карточку
blogPost.querySelector('.blog-post__icon-heading').addEventListener('click', (e)=> {
  addContent('Заголовок', 'Текст');
})

