Ext.define('Mapros.util.Setter',{
	singleton: true,


	hostname: function(){
    	if ( window.location.hostname == 'localhost'){
		    return 'localhost';
		}else{
            return  window.location.hostname;
        }
                
 	},

 	getToken : function(){
        // return localStorage.getItem('token');
        if (localStorage.getItem('token') != null){
           return localStorage.getItem('token') ;
        }else{
            return null
        }  
    }
});