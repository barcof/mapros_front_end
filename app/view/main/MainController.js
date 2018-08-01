/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Mapros.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    },

    onLogin: function() {

        // console.log("Terpanggil");
        // var loggedIn;

        // loggedIn = localStorage.getItem("LoggedIn");

        var loginAnimation = Ext.create({
            xtype: 'login',
            animateTarget: this.getView().down('button[name=signin]')
        });

        loginAnimation.show();
    },

    // showLogOutButton : function(){
    //     this.getView().down('button[name=signout]').setVisible(true);
    //     this.getView().down('button[name=signin]').setVisible(false);
    // },

    // //this is listener. this controller listen to another controller to fire specific event that already 
    // //configured like below
    // listen : {
    //     controller : {
    //         'login' : { //this is controller alias name
    //             //name of the event : //method to trigger here
    //             'showLogOutButton': 'showLogOutButton'
    //         }
    //     }
    // },

    onLogout: function() {
        // Remove the localStorage key/value
        localStorage.removeItem('token');

        // Remove Main View
        // this.getView().destroy();

        // Add the Login Window
        Ext.create({
            xtype: 'app-main'
        });

        location.reload();
    }
});
