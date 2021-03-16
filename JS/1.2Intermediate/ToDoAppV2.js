// This is a to do application for meetings and appointments.

let myAppointments = {
    dayFor: 'Monday',
    allMeetings: 0,
    meetingDone: 0,
}

let AddMeeting = function (objectName, meets = 0) {
    objectName.allMeetings += meets;
};

let MeetingDone = function (objectName, meets = 0) {
    objectName.meetingDone += meets;
};

let MeetingLeft = function (objectName) {
    let meetingLeft = objectName.allMeetings - objectName.meetingDone;
    return meetingLeft;
};

let getSummary = function (objectName) {
    console.log('Total Meetings: ' + objectName.allMeetings);
    console.log('Total Completed: ' + objectName.meetingDone);
    console.log('You have ' + MeetingLeft(objectName) + ' meetings left.');
};

let resetDay = function (objectName) {
    objectName.allMeetings = 0;
    objectName.meetingDone = 0;
};

AddMeeting(myAppointments, 5);
AddMeeting(myAppointments, 2);
MeetingDone(myAppointments, 2);

getSummary(myAppointments);

console.log('---');

resetDay(myAppointments);
getSummary(myAppointments); //to check counter resets.



