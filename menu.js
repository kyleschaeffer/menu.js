/*! menu.js v1.0 | MIT License | https://github.com/oldrivercreative/menu.js */
(function($){
    $.fn.menu = function(options){
        
        // settings
        var settings = $.extend({}, {
            selector: this.selector,
            offcanvas: false,
            accordion: false,
            oninit: false,
            ontoggle: false,
            destroy: false
        }, options);
        
        // menu
        this.each(function(){
            
            // get objects
            var menu = $(this);
            var buttons = $('[href="' + settings.selector + '"],[data-menu="' + settings.selector + '"]');
            
            // destroy?
            if(settings.destroy){
                menu.trigger('menu-destroy');
            }
            
            // create
            else {
                
                // init
                menu.on('menu-init', function(){

                    // add classes
                    menu.addClass('ui-menu');
                    
                    // off canvas?
                    if(settings.offcanvas){
                        
                        // add classes
                        menu.addClass('ui-menu-offcanvas ui-menu-' + settings.offcanvas);
                        $('body').addClass('ui-menu-canvas');
                        
                    }
                    
                    // buttons
                    buttons.each(function(){
                        
                        // add classes
                        $(this).addClass('ui-menu-btn');
                        
                        // add attributes
                        $(this).attr('aria-expanded', false);
                        
                        // toggle on click
                        $(this).on('click', function(e){
                            e.preventDefault();
                            
                            // toggle menu
                            menu.trigger('menu-toggle');
                            
                        });
                        
                    });
                    
                    // accordion?
                    if(settings.accordion){
                        
                        // find child menus
                        menu.find('ul ul').each(function(){
                            
                            // add classes
                            $(this).addClass('ui-menu-sub');
                            
                            // create toggle button
                            var button = $('<button class="ui-menu-sub-btn" aria-expanded="false"><span class="label">Open menu</span></button>');
                            
                            // click
                            button.on('click', function(){
                                
                                // toggle classes
                                $(this).toggleClass('ui-menu-sub-btn-active');
                                $(this).siblings('.ui-menu-sub').toggleClass('ui-menu-sub-active');
                                
                                // toggle attributes
                                if($(this).hasClass('ui-menu-sub-btn-active')){
                                    $(this).attr('aria-expanded', true);
                                }
                                else{
                                    $(this).attr('aria-expanded', false);
                                }
                                
                            });
                            
                            // add button
                            $(this).before(button);
                            
                        });
                        
                    }
                    
                    // oninit?
                    if(typeof(settings.oninit) == 'function'){
                        settings.oninit();
                    }

                });
                
                // toggle
                menu.on('menu-toggle', function(){
                    
                    // toggle classes
                    menu.toggleClass('ui-menu-active');
                    
                    // off-canvas?
                    if(settings.offcanvas){
                        $('body').toggleClass('ui-menu-canvas-active-' + settings.offcanvas);
                    }
                    
                    // active?
                    var active = menu.hasClass('ui-menu-active');
                    
                    // expanded
                    buttons.each(function(){
                        
                        // toggle classes
                        $(this).toggleClass('ui-menu-btn-active');
                        
                        // expanded?
                        if(active){
                            $(this).attr('aria-expanded', true);
                        }
                        else{
                            $(this).attr('aria-expanded', false);
                        }
                        
                    });
                    
                    // ontoggle?
                    if(typeof(settings.ontoggle) == 'function'){
                        settings.onupdate(active);
                    }
                    
                });
                
                // destroy
                menu.on('menu-destroy', function(){
                    
                    // remove classes
                    menu.removeClass('ui-menu ui-menu-offcanvas ui-menu-active');
                    $('body').removeClass(function(i, css){
                        return(css.match(/\bui-menu-canvas-active-\S+/g) || []).join(' ');
                    });
                    $('body').removeClass('ui-menu-canvas');
                    
                    // buttons
                    buttons.each(function(){
                        
                        // remove classes
                        $(this).removeClass('ui-menu-btn ui-menu-btn-active');
                        
                        // remove attributes
                        $(this).removeAttr('aria-expanded');
                        
                        // remove click
                        $(this).off('click');
                        
                    });
                    
                    // remove accordions
                    menu.find('ul ul').removeClass('ui-menu-sub ui-menu-sub-active');
                    menu.find('.ui-menu-sub-btn').remove();
                    
                });

                // init
                menu.trigger('menu-init');
                
            }

        });
        
        // done
        return this;
        
    };
}(jQuery));