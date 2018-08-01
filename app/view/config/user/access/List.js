/**
 * This view is an example list of people.
 */
Ext.define('Mapros.view.config.user.access.List', {
    extend: 'Ext.grid.Panel',

    requires: [
        'Mapros.view.config.user.access.Toolbar',
        'Mapros.view.config.user.access.ListController'
    ],

    controller: 'listaccess',

    xtype: 'user_access',
    
    title: 'Data Access',

    store: 'Accesses',

    margin: '10 0 0 0',

    height: 325,

    viewConfig  : {
        enableTextSelection : true
    },

    plugins: {
        ptype: 'rowediting',
        clicksToEdit: 2,
        listeners: {
            cancelEdit: function(rowEditing, context) {
                // Canceling editing of a locally added, unsaved record: remove it
                if (context.record.phantom) {
                    var store = Ext.data.StoreManager.lookup('Accesses');
                    store.remove(context.record);
                }
            }
        }
    },

    tbar: {
        xtype: 'access_toolbar'
    },

    columns: [
        { header: 'NO.', xtype: 'rownumberer', width: 100, sortable: false },
        { text: 'NAME', dataIndex: 'name', flex: 1, editor: 'textfield', align: 'left' },
        {
            xtype:'actioncolumn',
            width:50,
            items: [{
                iconCls: 'x-fa fa-trash',
                tooltip: 'Delete',
                handler: 'onDeleteAccess'
            }]
        }
    ],

    bbar: {
        xtype: 'pagingtoolbar',
        pageSize: 5,
        store: 'Accesses',
        emptyMsg: 'No Available Records',   
        displayInfo: true
    }
});
