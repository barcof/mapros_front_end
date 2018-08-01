Ext.define('Mapros.view.config.user.access.Toolbar',{
	extend: 'Ext.toolbar.Toolbar',

	xtype: 'access_toolbar',

	// controller: 'toolbar',

	// store: 'Accesses',

	layout: {
		pack: 'start'
	},

	items: [{
		// xtype: 'button',
		// name: 'add',
		// iconCls: 'fa fa-plus-square fa-lg',
		// scale: 'small',
		// listeners: {
		// 	click: 'onAddItem'
		// }
		xtype: 'textfield',
		name: 'addfield',
		fieldLabel: 'Add Record',
		labelWidth: 85
	}, {
		xtype: 'button',
		name: 'addrecord',
		text: 'Insert Record',
		listeners: {
			click: 'onAddItem'
		}
	}]
});