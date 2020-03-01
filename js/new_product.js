var catalogData = [
    {
        isSpecial: true
    },
    {
        isSpecial: false
    },
    {
        isSpecial: false
    },
    {
        isSpecial: false
    }
];

var updateCards = function (products) {
    var elements = document.querySelectorAll('.catalog_items');
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var product = products[i];
        if (product.isSpecial) {
            element.classList.add('product--special')
        }
    }
};

updateCards(catalogData);