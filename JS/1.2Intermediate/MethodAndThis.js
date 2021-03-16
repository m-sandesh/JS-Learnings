//this is the version 3 for ToDoApp.
//here defines methods and use of "this" keyword.
//function is a function. if a function is inside an object or a class, then it is a method.
//this keyword is used to denote the current object. 
//scope/block problem occurs in OOP inside curly braces in which variables or properties of the object would be unaccessible . To overcome this, "this" keyword is used to access the properties and variables.

let MeetingsCabinOne = {
    cabinName: 'One',
    day: 'Monday',
    allMeetings: 0,
    meetingDone: 0,
    meetingsLeft: 0,

    addMeeting: function (meet = 0) {
        this.allMeetings = this.allMeetings + meet;
    },

    meetingComplete: function (meet = 0) {
        this.meetingDone = this.meetingDone + meet;
        if (this.allMeetings >= this.meetingDone)
            this.meetingsLeft = this.allMeetings - this.meetingDone;
    },

    getSummary: function () {
        console.log('Meetings for Cabin ' + this.cabinName + ' are:');
        console.log('Total Meetings: ' + this.allMeetings);
        console.log('Meetings Completed: ' + this.meetingDone);
        console.log('Meetings Left: ' + this.meetingsLeft);
    },

    resetMeetings: function () {
        this.allMeetings = 0;
        this.meetingDone = 0;
        this.meetingsLeft = 0;
    }
};

let MeetingsCabinTwo = {
    cabinName: 'Two',
    day: 'Monday',
    allMeetings: 0,
    meetingDone: 0,
    meetingsLeft: 0,

    addMeeting: function (meet = 0) {
        this.allMeetings = this.allMeetings + meet;
    },

    meetingComplete: function (meet = 0) {
        this.meetingDone = this.meetingDone + meet;
        if (this.allMeetings >= this.meetingDone)
            this.meetingsLeft = this.allMeetings - this.meetingDone;
    },

    getSummary: function () {
        console.log('Meetings for Cabin ' + this.cabinName + ' are:');
        console.log('Total Meetings: ' + this.allMeetings);
        console.log('Meetings Completed: ' + this.meetingDone);
        console.log('Meetings Left: ' + this.meetingsLeft);
        console.log('---');
    },

    resetMeetings: function () {
        this.allMeetings = 0;
        this.meetingDone = 0;
        this.meetingsLeft = 0;
    }
};

MeetingsCabinOne.addMeeting(7);
MeetingsCabinTwo.addMeeting(5);
MeetingsCabinOne.getSummary();
MeetingsCabinTwo.getSummary();
MeetingsCabinOne.meetingComplete(2);
MeetingsCabinTwo.meetingComplete(5);
MeetingsCabinOne.getSummary();
MeetingsCabinTwo.getSummary();
MeetingsCabinOne.resetMeetings();
MeetingsCabinTwo.resetMeetings();
MeetingsCabinOne.getSummary();
MeetingsCabinTwo.getSummary();