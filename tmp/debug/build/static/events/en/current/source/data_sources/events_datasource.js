// ==========================================================================
// Project:   Events.EventsDatasource
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Events */

/** @class

  (Document Your Data Source Here)

  @extends SC.DataSource
*/

sc_require('models/registrations');
reg = SC.Query.local(Events.Registrations);
Events.EventsDatasource = SC.DataSource.extend(
/** @scope Events.EventsDatasource.prototype */ {

  // ..........................................................
  // QUERY SUPPORT
  // 

    fetch: function(store, query) {
			if (query === reg) {
			      SC.Request.getUrl('/events/1/registrations').header({
				        'Accept': 'application/json'
				      }).json().notify(this, 'didFetchQuery', store, query).send();

		return YES;
		}

			  return NO;
		  },


		  didFetchQuery: function(response, store, query) {
			var storeKeys = store.loadRecords(Events.Registrations,
			     Event.Proxy.convertData(response.get('body')));
		  	if(SC.ok(response)) {

		      store.loadRecords(query.primaryKey, response.get('body'));////////we might need to change the primary key in users
		      store.dataSourceDidFetchQuery(query);
		    } else store.dataSourceDidErrorQuery(query, response);	
		  },
		

  // ..........................................................
  // RECORD SUPPORT
  // 
  
  retrieveRecord: function(store, storeKey) {
    
    // TODO: Add handlers to retrieve an individual record's contents
    // call store.dataSourceDidComplete(storeKey) when done.
    
    return NO ; // return YES if you handled the storeKey
  },
  
  createRecord: function(store, storeKey) {
    
    // TODO: Add handlers to submit new records to the data source.
    // call store.dataSourceDidComplete(storeKey) when done.
    
    return NO ; // return YES if you handled the storeKey
  },
  
  updateRecord: function(store, storeKey) {
    
    // TODO: Add handlers to submit modified record to the data source
    // call store.dataSourceDidComplete(storeKey) when done.

    return NO ; // return YES if you handled the storeKey
  },
  
  destroyRecord: function(store, storeKey) {
    
    // TODO: Add handlers to destroy records on the data source.
    // call store.dataSourceDidDestroy(storeKey) when done
    
    return NO ; // return YES if you handled the storeKey
  }
  
}) ;
; if ((typeof SC !== 'undefined') && SC && SC.Module && SC.Module.scriptDidLoad) SC.Module.scriptDidLoad('events');