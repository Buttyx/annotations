define(['order!domReady',
        'order!jquery',
        'order!underscore',
        'order!player_adapter_HTML5'
        // Add here the files (PlayerAdapter, ...) required for your configuration
        ],
       
    function(domReady, $, _undefined_, HTML5PlayerAdapter){

       
            
        /**
         * Annotations tool configuration
         */
        window.annotationsTool =  {
            
            /** Define if the localStorage should be used or not */
            localStorage: false,
            
            /** Url from the annotations Rest Endpoints */
            restEndpointsUrl: "../../extended-annotations",
            
            
            /* Function to get the current video id (video_extid) */
            getVideoExtId: function(){
                return $('video')[0].id;
            },
            
            /* Function to get the user id from the current context (user_extid) */
            getUserExtId: function(){
                return "default";
            }
        };
            
        domReady(function(){
            /* Player adapter implementation to use for the annotations tool */
            window.annotationsTool.playerAdapter = new HTML5PlayerAdapter($('video')[0]);
            
        })
        
        return window.annotations;
});