
;(function () {
    angular.module('Jeanie')
        .component('menuComponent', {
        templateUrl: 'components/menu-component.html',
        controller: MenuController,
        })
   function MenuController() {
         var mc = this;

        mc.menu ={


        entrees:[
            {
                name: "PRIME RIB",
                description: "Lorem Aged USDA prime rib slow roasted in rock salt and served with au jus, Yorkshire pudding and freshly grated horseradish (8 oz)",
                price: 28.00,
            },
              {
                name: "NEW ORLEANS CATFISH",
                description: "Petite prawns, Andouille sausage, mushrooms, scallions, peppers and Cajun cream sauce served over blackened catfish",
                price: 16.95,
            },
                 {
                name: "ROCKY MOUNTAIN TROUT",
                description: "Sautéed fresh boneless trout with raspberry vinegar butter sauce, tarragon, parsley and shallots",
                price: 19.95,
            },
                     {
                name: "CORVINA SEA BASS",
                description: "Line-caught California sea bass in a fresh lemon thyme cashew crust, served with papaya-mango salsa",
                price: 23.95,
            },
                       {
                name: "DUCK",
                description: "Oven-roasted organic duck boneless breast topped with an orange sherry vinaigrette, pecans, bacon and red onion",
                price: 26.95,
            },
                            {
                name: "PORK TENDERLOIN",
                description: "Sautéed pork tenderloin medallions with a citrus-dijon Compari sauce",
                price: 24.95,
            },
                                {
                name: "LOBSTER",
                description: "Cave-aged Gruyere, Red Leicester Cheddar, prawns and chunks of Maine lobster baked with heavy cream and penne pasta",
                price: 25.95,
            },
        ],

       appetizers:[
            {
                name: "Prawns",
                description: "Poached prawns, avocado and spicy fresh salsa, served in an oversized martini glass",
                price: 8.50,
            },
              {
                name: "Mushrooms",
                description: "Large Crimini mushrooms filled with Catalan goat cheese",
                price: 9.75,
            },
                 {
                name: "French Onion Soup",
                description: "Caramelized onions simmered with beef broth, veal stock and vermouth",
                price: 6.75,
            },
        ],

      salads: [
            {
                name: "House Salad",
                description: "Bib lettuce and belgian endive with carrot curls, shaved Vidalia sweet onions, fresh peaches, candied pecans and goat cheese",
                price: 6.75,
            },
              {
                name: "Caesar",
                description: "Hand-cut romaine hearts tossed with garlic croutons, Reggiano Parmesan and Spanish white anchovies",
                price: 7.75,
            },
        ],

             sides:[
            {
                name: "Couscous",
                description: "Couscous with chickpeas, golden raisins and scallions",
                price: 7.50,
            },
              {
                name: "Green Beans",
                description: "Tempura-fried green beans with citrus aioli",
                price: 9.75,
            },
                 {
                name: "Yukon Gold Potato",
                description: "Crisp-fried cakes with crème fraîche and chives",
                price: 8.50,
            },
                   {
                name: "Rainbow Chard",
                description: "Braised with candied pistachio vinaigrette",
                price: 8.25,
            },
        ],

   }
      }

}())
