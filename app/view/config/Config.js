Ext.define('Mapros.view.config.Config',{
	extend: 'Ext.tab.Panel',

	xtype: 'config',

	requires: [
		'Mapros.view.config.user.User'
	],
	// frame: true,
	// plain: true,
	ui: 'navigation',

	// header: {
 //        layout: {
 //            align: 'stretchmax'
 //        }
 //    },
 	// activeTab: 2,

	tabBar: {
        flex: 1,
        layout: {
        	pack: 'center',
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

	items: [{
		title: 'Scanner',
		icon: 'resources/scanner.png',
		iconAlign: 'top'
	}, {
		title: 'Sequence',
		icon: 'resources/sequence.png',
		iconAlign: 'top'
	}, {
		title: 'User',
		icon: 'resources/user-icon.png',
		iconAlign: 'top',
		xtype: 'user'
	}]
});