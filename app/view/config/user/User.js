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
        type: 'anchor'
    },

    autoScroll: true,

    items: [{
        xtype: 'list_user',
        collapsible: true
    }, {
    	xtype: 'user_access',
        collapsible: true
    }, {
    	xtype: 'user_department',
        collapsible: true,
    }, {
    	xtype: 'user_level',
        collapsible: true,
    }]
});