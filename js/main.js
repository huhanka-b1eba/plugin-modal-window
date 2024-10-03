let userAction = document.querySelector('.actions__input--create')
let blockAction = document.querySelector('.actions__items')
let btnAction = document.querySelector('.actions__create--button')

document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
});

btnAction.addEventListener('click', () => {
    let userInfo = userAction.value;
    let div = document.createElement('div');
    div.className = "actions__item";
    div.innerHTML = `<input class="actions__check" type="checkbox">
                    <div class="actions__item--title">${userInfo}</div>
                    <div class="actions__delete">
                        <img src="img/trash.svg" alt="">
                    </div>`;
    blockAction.append(div);
    userAction.value = "";
});