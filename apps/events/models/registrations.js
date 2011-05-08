// ==========================================================================
// Project:   Events.Registrations
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Events */

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/
Events.Registrations = SC.Record.extend( {

	primaryKey: 'id',
	
	createdAt: SC.Record.attr(String, { key: 'created_at' }),
	email:SC.Record.attr(String, { key: 'email' }),
	eventId:SC.Record.attr(String, { key: 'event_id' }),
	name:SC.Record.attr(String, { key: 'name' }),
	updatedAt:SC.Record.attr(String, { key: 'updated_at' })

}) ;
