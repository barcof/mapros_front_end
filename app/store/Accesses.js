Ext.define('Mapros.store.Accesses', {
    extend: 'Ext.data.Store',

    alias: 'store.accesses',

    model: 'Mapros.model.Access',

    autoLoad: true,

    autoSync: true,

    proxy: {
        type: 'rest',

        // header: {
        //     Authorization: 'Bearer'+ localStorage.getItem('token')
        // },
        extraParams: {
            token: localStorage.getItem('token')
        },

        enablePaging:true,

        url: 'http://localhost/mapros_system/public/api/accesses',

        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }
});
