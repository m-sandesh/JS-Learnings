//Creating objects doesnt require any data type to be assigned like function do.

let myYoutubeVideo = {
    videoTitle: 'First YT Video',   //Dont miss the comma and colon.
    videoLength: '15',  //object variable name: variable values, 
    videoDescription: 'This is the video Description.',
    videoCreator: 'Sandesh'
}

console.log(myYoutubeVideo);    //returns the entire object.

console.log(`New video uploaded: ${myYoutubeVideo.videoTitle}. Watch Time of ${myYoutubeVideo.videoLength} minutes by ${myYoutubeVideo.videoCreator}.`);    //access properties of object.

//Assignment

let Courses = {
    courseName: 'Java - Crash Course',
    courseHours: '3 Hours',
    coursePrice: '50',
    courseTutor: 'Ram',
}

console.log(`New upcoming course by ${Courses.courseTutor} is ${Courses.courseName} with ${Courses.courseHours} of learning at the price of $${Courses.coursePrice}.`);




