import { Meteor } from 'meteor/meteor';
import {handleMail} from './api/mailer'


Meteor.startup(() => {
	//Meteor.call('handleMail', 'notsp', 'am i swear it', 'dapodev@gmail.com');
});
