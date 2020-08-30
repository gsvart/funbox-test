function ready_func() {

    const cards_container = document.querySelector('.cards-wrap');
    const cards_inputs = document.querySelectorAll('.item-checkbox');

    for (let i = 0; i < cards_inputs.length; i++) {
        // Проверка и добавление класса для ховер эффекта при загрузке страницы
        if (cards_inputs[i].checked) {
            cards_inputs[i].closest('.card').querySelector('.card-inner').classList.add('card-inner__hover');
            cards_inputs[i].closest('.card').classList.add('card-selected');
        }

        if (cards_inputs[i].disabled) {
            cards_inputs[i].closest('.card').classList.remove('card-selected');
            cards_inputs[i].closest('.card').classList.add('card-disabled');
        }
    }
    
    // Изменение состояния чекбокса по ссылке под карточкой товара и по клику на саму карточку
    cards_container.addEventListener('click', (e) => {
        
        if (e.target.classList.contains('card__link') || e.target.closest('.card-inner')) {
            e.preventDefault();

            let card = e.target.closest('.card');
            let card_input = e.target.closest('.card').querySelector('.item-checkbox');
            let card_inner = e.target.closest('.card').querySelector('.card-inner');
            
            // Добавление класса для ховер эффекта
            function hover_on_leave() {
                if (card_input.checked) {
                    card_inner.classList.add('card-inner__hover');
                }
            }

            if (card_input.checked && !card_input.disabled) {
                card_input.checked = false;
                card.classList.remove('card-selected');
                // Удаление класса для ховер эффекта
                card_inner.classList.remove('card-inner__hover');
            } else if (!card_input.checked && !card_input.disabled) {
                card_input.checked = true;
                card.classList.add('card-selected');
                // Добавление класса для ховер эффекта при определённых событиях (пункт 6 ТЗ)
                card_inner.addEventListener('mouseleave', hover_on_leave);
                card_inner.addEventListener('mouseenter', hover_on_leave);
            }
        }
    });

}

document.addEventListener("DOMContentLoaded", ready_func);







