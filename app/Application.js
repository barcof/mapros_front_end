/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('Mapros.Application', {
    extend: 'Ext.app.Application',

    requires: [
        'Mapros.util.Setter'
    ],

    name: 'Mapros',

    quickTips: false,

    platformConfig: {
        desktop: {
            quickTips: true
        }
    },

    stores: [
        // TODO: add global / shared stores here
        'Accesses',
        'Departments',
        'Levels'
    ],

    launch: function () {
        var self = this;
        var token = Mapros.util.Setter.getToken();
        Ext.Ajax.request({
            url: 'http://'+Mapros.util.Setter.hostname()+'/mapros_system/public/api/me',
            method: 'GET',
            // params: {
            //     token : token
            // },
            headers: {
                Authorization: 'Bearer '+token
            },
            success: function (response, opts){
                // alert('success')
                Ext.create({
                    xtype : 'app-main',
                    isLoggedIn:true,
                });
                
            },
            failure: function(response, opts) {
                // console.log({response, opts})
                Ext.create({
                    xtype: 'app-main',

                });
            }
        });
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
