Ext.define('Mapros.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

    requires: [
        'Mapros.util.Setter'
    ],

    onLoginClick: function() {

        var email = this.getView().down('textfield[name=email]').getValue();
        var password = this.getView().down('textfield[name=password]').getValue();

        Ext.Ajax.request({
            url: 'http://'+Mapros.util.Setter.hostname()+'/mapros_system/public/api/auth/login',

            method: 'POST',

            params: {
                email: email,
                password: password
            },

            success: function (response, opts){

                var res = JSON.parse(response.responseText);
                var token = res.token;

                localStorage.setItem("token", token);
                // Call method from another controller
                // self.fireEvent('showLogOutButton');

                // Remove Login Window
                // self.getView().destroy();
                // var win = Ext.ComponentQuery().query('window[name=login]');
                // console.log(win);

                // Add the main view to the viewport
                // Ext.create({
                //     xtype: 'app-main'
                // });

                location.reload();
            },
            failure: function(response, opts) {
                Ext.toast({
                    html: 'Login Failed',
                    bodyStyle: {
                        color: 'rgba(255,0,0,0.6)',
                        padding: '0',
                        fontSize: '36px',
                        fontStyle: 'italic'
                    },
                    border: false,
                    frame: false,
                    align: 't'
                });
            }
        });

    }
});
