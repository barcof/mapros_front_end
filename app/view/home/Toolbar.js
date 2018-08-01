Ext.define('Mapros.view.home.Toolbar',{
	extend: 'Ext.toolbar.Toolbar',

	xtype: 'homeToolbar',

	dock: 'top',
    layout  : {
        pack: 'end',
        type: 'hbox'
    },
    padding: '26 20',

    style: 'background:#5FA2DD;',

	items: [
	    {   
	        xtype: 'button',
	        name: 'signin',
	        buttonAlign: 'right',
	        text: 'SIGN IN',
	        iconCls: 'fa fa-sign-out fa-2x',
	        scale: 'large',
	        handler: 'onLogin'
	    }
	],

	isLoggedIn : false,

    initItems : function (){
    	if(this.isLoggedIn) {
    		this.items = [{ 
		        xtype: 'button',
		        name: 'signout',
		        buttonAlign: 'right',
		        text: 'SIGN OUT',
		        iconCls: 'fa fa-sign-out fa-2x',
		        scale: 'large',
		        handler: 'onLogout'
		    }]
    	}
    	this.callParent();
    }

});