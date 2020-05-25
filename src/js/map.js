

    ymaps.ready(function () {
        var myMap = new ymaps.Map('YaMaps', {
            center: [55.757891, 37.637973],
            zoom: 11
        }, {
            searchControlProvider: 'yandex#search'
        }),
    
        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),
    
        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Где тоут работаю',
            balloonContent: 'Скоро опять на работу((('
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'image/smart.svg',
            // Размеры метки.
            iconImageSize: [30, 42],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        }),
    
        myPlacemarkWithContent = new ymaps.Placemark([
            55.797669, 37.938750
        ], {
            hintContent: 'Закрыто на карантин))))',
            balloonContent: 'Когда нибудь откроют!)))',
            iconContent: '12'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'image/avatar.svg',
            // Размеры метки.
            iconImageSize: [48, 48],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });
    
        myMap.geoObjects
        .add(myPlacemark)
        .add(myPlacemarkWithContent);
    });
