# SVGs-Angular
Angular project for CRUD operations of the SVGs

This is an Angular SPA project so, if your system is not configured to debug an Angular project, follow the steps described in https://angular.io/guide/quickstart to do so.

Plase note that in order this SPA works as expected, the SVGs WebAPI project should be up and running.

Follow these steps to test the project:

1. Create a new folder on your HDD
2. Download all the files of this repository into the folder created in step #1
3. Run VS Code and open the folder created in step #1
4. In VS Code, open the terminal (menu View | Integrated Terminal)
5. run the following command:
   >npm install
Wait a couple of minutes until the project dependencies are restored and the prompt is available again.
6. run the following command:
   >npm start
Wait until the project is compiled. The message "webpack: Compiled successfully." will be displaye. It means that the SPA (Single PAge Application) is ready to be opened in a web broser.
7. Run a web browser and open the URL http://localhost:4200/svgs
8. If everything is okay, a list containing two rows should be displayed.
