/**
* @author James Minutella
* 10/30/2016
* TextAreaPicker Custom Component 
*
* This class is an ExtJs custom component that extends from the picker
* and features a textarea inside. The purpose of this component is to have a 
* convenient and flexible multi-editor to use in forms and especially 
* property grids to use an editor. 
*
* This field will ensure that the value inside the picker field and the 
* value of the textarea always match. An ideal solution when editing multiple
* lines of text
*/

Ext.define('TextAreaPickerApp.view.common.form.field.TextAreaPicker', {
    extend: 'Ext.form.field.Picker',
    alias: 'widget.textareapicker',

    matchFieldWidth: true,
    
    listeners: {
        collapse: function (pickerCmp) {
            var me = this,
                ownertCt = me.ownerCt,
                value = pickerCmp.picker.getValue();

						// If we edit the textarea, set value of the field to match
            pickerCmp.setValue(value);
        },
        expand: function (pickerCmp) {
            var me = this,
                ownerCt = pickerCmp.ownerCt,
                ownerValue = me.getValue();

						// If we edit the field (without expanding), set value inside textarea to match
            pickerCmp.picker.setValue(ownerValue);
        }
    },
    createPicker: function () {
        var me = this;

        me.picker = Ext.create('Ext.form.field.TextArea', {
            width: 200,
            height: 160,
            pickerField: me,
            floating: true,
            hidden: true,
            border: 1,
            cls: 'x-menu',
            focusOnToFront: false
        });

        me.picker.ownerCt = me.up('[floating]');
        me.picker.registerWithOwnerCt();

        return me.picker;
    },

    getNonEscapedValue: function () {
        var me = this;
        return me.getValue();
    }
});