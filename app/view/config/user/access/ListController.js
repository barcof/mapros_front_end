Ext.define('Mapros.view.config.user.access.ListController',{
	extend: 'Ext.app.ViewController',

	alias: 'controller.listaccess',

	myStore: 'Accesses',

	onDeleteAccess: function(grid,rowIndex,colIndex) {
		var store = Ext.getStore(this.myStore);
		var record = grid.store.getAt(rowIndex);
        Ext.Msg.confirm('Delete Record', 'Are you sure you wanted to delete this record ?',
            function(button,window) {
                if (button == 'yes') {
                    grid.store.remove(record);
                } else {
                    
                }
            }
        );
	},

	onAddItem: function() {

		var store = Ext.getStore(this.myStore);

		var getvalue = this.getView().down('textfield[name=addfield]').getValue();

		if (store.add({ name : getvalue })) {
				Ext.toast({
					html: 'Data Saved',
					width: 200,
					align: 't'
				});
			} else {
				Ext.toast({
					html: 'Saved Failed',
					width: 200,
					align: 't'
				});
			}

		// var form = Ext.create('Ext.window.Window', {
		// 	title: 'Form Input',
		// 	layout: 'fit',
		// 	// animateTarget: this.getView().down('button[name=add]'),
		// 	items:[
		// 		{xtype: 'access_form'}
		// 	]
		// });

		// form.show();
    }

});