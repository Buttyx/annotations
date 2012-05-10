define(["order!jquery","order!underscore","order!backbone"],function($){
    
    /**
     * User model
     * @class
     */
    var User = Backbone.Model.extend({
        
        initialize: function(attr){
            if(_.isUndefined(attr.user_extid) || attr.user_extid == "" ||
               _.isUndefined(attr.nickname) || attr.nickname == "")
                throw "'user_extid' and 'nickanme' attributes are required";
            
            this.set(attr);
            
            if(!attr.id){
                this.toCreate = true;
            }
            
            // Define that all post operation have to been done through PUT method
            // see in wiki
            this.noPOST = true;
            //    this.set({id:this.cid});
        },
        
        validate: function(attr){
            /*if(attr.id){
                if((tmpId=this.get('id')) && tmpId!==attr.id)
                    return {attribute: "id", message: "'id' attribute can not be modified after initialization!"};
                if(!_.isNumber(attr.created_at))
                    return {attribute: "created_at", message: "'id' attribute must be a number!"};
            }*/
            
            if(_.isUndefined(attr.user_extid) || (!_.isString(attr.nickname) && !_.isNumber(attr.user_extid)))
                return {attribute: "user_extid", message: "'user_extid' must be a valid string or number."};
            
            if(_.isUndefined(attr.nickname) || !_.isString(attr.nickname))
                return {attribute: "nickname", message: "'nickanme' must be a valid string!"};
                
            
            if(attr.email && !User.validateEmail(attr.email))
                return {attribute: "email", message: "Given email is not valid!"};   
        }
        
    },
    // Class properties and functions
    {
        /**
         * Check if the email address has a valid structure
         *
         * @param {String} email the email address to check
         * @return {Boolean} true if the address is valid
         */
        validateEmail: function(email) { 
            var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }
    });
    
    return User;
    
});