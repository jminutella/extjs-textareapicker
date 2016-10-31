# TextAreaPickerApp

This is a sample ExtJS 6.2 application that showcases a custom component called TextAreaPicker. 

I wrote the TextAreaPicker custom component because I needed a flexible multiline editor to use for the project I work on at my job that would work perfectly with the PropertyGrid component. This component was the perfect solution. 

The editor opens, a floating textarea is shown and the user can edit the textarea without the editor in the row closing. When the editor closes, the editor's value is updated with the text inside of the textarea. When the editor expands, the value of the textarea is updated with the editor's value. 

The following files are all needed to build and load the application.

 - `"app.json"` - The application descriptor which controls how the application is
   built and loaded.
 - `"app.js"` - The file that launches the application. This is primarily used to
   launch an instance of the `MyApp.Application` class.
 - `"index.html"` - The default web page for this application. This can be customized
   in `"app.json"`.
 - `"build.xml"` - The entry point for Sencha Cmd to access the generated build
   script. This file is a place where you can hook into these processes and tune
   them. See the comments in that file for more information.
 - `".sencha"` - This (typically hidden) folder contains the generated build scripts
   and configuration files for the application. This folder is required in order to
   build the application but its content should not need to be edited in most cases.
   The content of this folder is updated by "sencha app upgrade".

The TextAreaPicker is only one file
 - `"TextAreaPicker.js"` - The TextAreaPicker custom component class which is located in app\view\common\form\field\.