(function() {

    var app = angular.module('store-products', []);

    app.directive('productTitle', function () {
        return {
            restrict: 'E', <!-- E is for element, used for UI widgets -->
//            restrict: 'A', <!-- A is for attribute, used for behaviors like tooltips -->

            templateUrl: 'product-title.html'
        };
    });

    app.directive('productDescription', function () {
        return {
            restrict: 'E',
            templateUrl: 'product-description.html'
        };
    });

    app.directive('productSpecs', function () {
        return {
            restrict: 'E',
            templateUrl: 'product-specs.html'
        };
    });

    app.directive('productPanelsNav', function () {
        return {
            restrict: 'E',
            templateUrl: 'product-panels-nav.html',
            controller: function () {
                this.tab = 1;

                this.setTab = function (newValue) {
                    this.tab = newValue;
                };

                this.isSet = function (tabName) {
                    return this.tab === tabName;
                };
            },
            controllerAs: 'tab'
        };
    });

    app.directive('productGallery', function () {
        return {
            restrict: 'E',
            templateUrl: 'product-gallery.html',
            controller: function () {
                this.current = 0;
                this.setCurrent = function (theCurrent) {
                    if (theCurrent) {
                        this.current = theCurrent;
                    } else {
                        this.current = 0;
                    }
                };
            },
            controllerAs: 'gallery'
        };
    });
})();