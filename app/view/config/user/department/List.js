/**
 * This view is an example list of people.
 */
Ext.define('Mapros.view.config.user.department.List', {
    extend: 'Mapros.view.config.user.access.List',

    requires: [
    	'Mapros.view.config.user.department.ListController'
    ],

    controller: 'listdepartment',

    xtype: 'user_department',

    title: 'Data Department',

    store: 'Departments',

    bbar: {
        xtype: 'pagingtoolbar',
        store: 'Departments'
    }
});
