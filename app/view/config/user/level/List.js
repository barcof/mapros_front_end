/**
 * This view is an example list of people.
 */
Ext.define('Mapros.view.config.user.level.List', {
    extend: 'Mapros.view.config.user.access.List',

    xtype: 'user_level',

    title: 'Data Grade',

    store: 'Levels',

    bbar: {
        xtype: 'pagingtoolbar',
        store: 'Levels'
    }
});
