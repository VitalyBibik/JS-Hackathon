# JS-Hackathon
Jul 1
# ТЗ
Ноушн — произведение искусства с точки зрения фронтенда. Этот хакатон мы решили посвятить ему.

Вам предстоит сделать прототип веб-приложения Notion. Если сделаете все задания результат будет выглядеть примерно так:

![Image alt](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F519c257c-1ab7-475a-95fe-19338e3815b0%2FScreen_Shot_2020-06-30_at_7.00.09_PM.png?table=block&id=00dd065e-06ad-4e71-aef9-0e47618e390c&width=860&cache=v2)

## Задание 1. **Рендер всего документа из объекта**
При открытии веб-страницы должна отображаться страница с дефолтным текстом.
Текст, заголовок и иконка должны рендериться на страницу из объекта с помощью JavaScript, в вёрстке их быть не должно.

## Задание 2. **Редактирование заголовка статьи**
После клика на заголовок у пользователя должна быть возможность отредактировать его:
Отредактированный заголовок должен сохраниться и после перезагрузки страницы (почитайте про LocalStorage).

## Задание 3. **Редактирование текста статьи**
У пользователя должна быть возможность отредактировать любой из блоков статьи: и тексты, и заголовки:

## Задание 4. **Добавление нового подзаголовка в статью**
При наведении на любой из блоков статьи должны появляться 4 иконки
![Image alt](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F53532062-6731-49fd-b2a6-0ceae338df75%2FScreen_Shot_2020-06-30_at_6.39.32_PM.png?table=block&id=c49c1f69-cfaf-462c-a72c-dc2327f2096b&width=3130&cache=v2)

## Задание 5. **Добавить блок текста в статью**
Справа от иконки **H1** расположена иконка **T**. При клике на неё под текущим блоком должен появиться новый блок для текста. У пользователя должна быть возможность ввести в него текст.
Новый блок с текстом должен сохраниться и после перезагрузки страницы.

## Задание 6. **Удаление блока**
Справа от иконки **T** расположена иконка крестика. При клике на неё текущий блок должен удалиться.
Если пользователь удалил все блоки, на странице должен остаться один пустой текстовый блок (чтобы можно было навести курсор и появились иконки).
Любой блок удаляется навсегда. После перезагрузки страницы его не должно быть на странице.

## Задание 7. **Изменение порядка блоков**
Последняя иконка (справа от крестика) — это иконка изменения порядка блоков. При наведении на неё должен появляться стандартный браузер курсор руки. При этом должна появиться возможность перетащить блок в любое место документа.
По традиции после перезагрузки страницы новое расположение элементов должно сохраниться.

## Задание 8. **Редактирование иконки статьи**
Если дошли до этого задания, вы большие молодцы. Для этого задания дизайнер не сделал макета (так бывает). Придётся сделать дизайн самим.
Сделайте так, чтобы иконку статьи сверху можно было изменить. Для этого самоятоятельно сделайте попап, в котором можно будет выбрать иконку. Можете подглядеть как это сделано в Ноушне и реализовать упрощённую версию попапа.
Изменённая иконка должна сохраниться и после перезагрузки страницы.


## NeedToDo 
За 24ч было сделано половино заданий в функциональном стиле ( сейчас лапша-код ). Нужно доделать дополнительные задания и перевести код на ООП