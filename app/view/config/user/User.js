Ext.define('Mapros.view.config.user.User',{
	extend: 'Ext.panel.Panel',

	xtype: 'user',

	requires: [
		'Mapros.view.main.MainModel',
		'Mapros.view.main.List',
		'Mapros.view.config.user.List',
		'Mapros.view.config.user.access.List',
		'Mapros.view.config.user.department.List',
		'Mapros.view.config.user.level.List'
	],

	layout: {
        type: 'border'
    },

    autoScroll: true,

 	padding: 10,

    items: [{
    	region: 'north',
    	height: 250,
    	xtype: 'list_user',
    }, {
    	region: 'center',
    	xtype: 'user_access'
    }, {
    	// region: 'south',
    	// xtype: 'user_department'
    }, {
    	// region: 'east',
    	// xtype: 'user_level'
    }]
});