(function($){
    //$(document).append("<style>.cross-area { } .cross-area:hover { font-weight: 700; } </style>");
    
    $.crossbox = function(el, options){
        var base = this;

        base.$el = $(el);
        base.el = el;
    
        base.$el.data("crossbox", base);
        
        base.init = function(){
            base.options = $.extend({},$.crossbox.defaultOptions, options);
          
            var crossArea = document.createElement("span");
            $(crossArea).addClass("cross-area");
            $(crossArea).html(base.options.crossContent);

            var cssPos = base.$el.css("position");

            var container = document.createElement("div");
            // $container = $(container);
            // $container.css("display", base.$el.css("display"));
            // $container.css("position", bas)

            base.$el.after(crossArea);

            //If position is none, set position to relative
            
            

            // if (!((cssPos == "relative") || (cssPos =="fixed") || (cssPos == ))) {
            //     base.$el.css("position", "relative");
            // }

            $(crossArea).click(function() {
                base.$el.val("");
            });
        };
        
        base.init();
    };
    
    $.crossbox.defaultOptions = {
        crossContent: "x"
    };
    
    $.fn.crossbox = function(options){
        return this.each(function(){
            (new $.crossbox(this, options));
        });
    };
})(jQuery);