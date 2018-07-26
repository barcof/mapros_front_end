/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Mapros.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'Mapros.view.main.MainController',
        'Mapros.view.main.MainModel',
        'Mapros.view.main.List',
        'Mapros.view.login.Login'
        // 'Mapros.view.login.LoginController'
    ],

    controller: 'main',
    viewModel: 'main',
    // plugins: 'viewport',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        iconCls: 'fa-th-list'
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            plugins: 'responsive',
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

    dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',
        layout  : {
            pack: 'end',
            type: 'hbox'
        },
        padding: '26 20',
        style: 'background:#5FA2DD;',
        items: [
            {   
                xtype: 'button',
                name: 'signin',
                buttonAlign: 'right',
                text: 'SIGN IN',
                iconCls: 'fa fa-sign-out fa-2x',
                scale: 'large',
                handler: 'onLogin'
                
            },
            { 
                xtype: 'button',
                name: 'signout',
                buttonAlign: 'right',
                text: 'SIGN OUT',
                iconCls: 'fa fa-sign-out fa-2x',
                scale: 'large',
                hidden: true,
                handler: 'onLogout'
            }
        ]
    }],

    items: [{
        title: 'Record Data',
        iconCls: 'fa-home',
        // The following grid shares a store with the classic version's grid as well!
        items: [{
            xtype: 'mainlist'
        }]
    }, {
        title: 'Print Ticket',
        iconCls: 'fa-print',
        bind: {
            html: '{loremIpsum}'
        }
    }, {
        title: 'Settings',
        iconCls: 'fa-cog',
        bind: {
            html: '{loremIpsum}'
        }
    }, {
        title: 'Line',
        // icon: 'resources/line.png',
        iconCls: 'fa-exchange',
        bind: {
            html: '{loremIpsum}'
        }
    }, {
        title: 'Log',
        iconCls: 'fa-book',
        bind: {
            html: '{loremIpsum}'
        }
    }]
});
