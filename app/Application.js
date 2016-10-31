/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('TextAreaPickerApp.Application', {
    extend: 'Ext.app.Application',
    
    name: 'TextAreaPickerApp',

    stores: [
        // TODO: add global / shared stores here
    ],
    
		requires: [
			'TextAreaPickerApp.view.common.form.field.TextAreaPicker'
		],
		
    launch: function () {
			
			// Create a simple panel to showcase our custom component
			Ext.create('Ext.panel.Panel', {
					title: 'TextAreaPicker Custom Component',
					width: '100%',
					items: [{
							xtype: 'textareapicker',
							fieldLabel: 'TextArea Picker component',
							width: 400
					},{
							xtype:'propertygrid',
							source: {
									evtStart: 'text'
							},
							sourceConfig: {
									evtStart: {
											editor: 'textareapicker',
											displayName: 'Multi-line Text'
									}
							}  
					}],
				 renderTo: Ext.getBody()
			});
    }
});
