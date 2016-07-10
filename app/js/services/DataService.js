wayblazer
    .factory('FilterTXT', function() {
        
    var FilterTXT =
        {
            DataCategory: ''
        };

        return {
            getDataCategory: function () {
                return FilterTXT.DataCategory;
            },
            setDataCategory: function (dataCategory) {
                FilterTXT.DataCategory = dataCategory;
            }
        };
    });
