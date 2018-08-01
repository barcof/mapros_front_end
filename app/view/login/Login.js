Ext.define('Mapros.view.login.Login',{
    extend: 'Ext.window.Window',
    xtype: 'login',

    requires: [
        'Mapros.view.login.LoginController',
        'Ext.form.Panel'
    ],

    controller: 'login',
    bodyPadding: 10,
    title: 'Login Window',
    closable: true,
    autoShow: true,
    constrain: true,

    items: {
        xtype: 'form',
        reference: 'form',
        items: [{
            xtype: 'textfield',
            name: 'email',
            fieldLabel: 'Email',
            allowBlank: false,
            value: 'alfiandi.hakim@jvc-jein.co.id'
        }, {
            xtype: 'textfield',
            name: 'password',
            inputType: 'password',
            fieldLabel: 'Password',
            allowBlank: false,
            value: 'edp11edp11'
        }, {
            xtype: 'displayfield',
            hideEmptyLabel: false,
            value: 'Enter any non-blank password'
        }],
        buttons: [{
            text: 'Login',
            // formBind: true,
            listeners: {
                click: 'onLoginClick'
            }
        }]
    }
});
