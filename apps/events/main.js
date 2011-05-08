// ==========================================================================
// Project:   Events
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Events */

// This is the function that will start your app running.  The default
// implementation will load any fixtures you have created then instantiate
// your controllers and awake the elements on your page.
//
// As you develop your application you will probably want to override this.
// See comments for some pointers on what to do next.
//
Events.main = function main() {

  // Step 1: Instantiate Your Views
  // The default code here will make the mainPane for your application visible
  // on screen.  If you app gets any level of complexity, you will probably 
  // create multiple pages and panes.  
  Events.getPath('mainPage.mainPane').append() ;
	var results = Events.store.find(reg);
	console.log(results);console.log("<--------this is results");
  // Step 2. Set the content property on your primary controller.
  // This will make your app come alive!

  // TODO: Set the content property on your primary controller
  // ex: Events.contactsController.set('content',Events.contacts);

} ;

function main() { Events.main(); }
