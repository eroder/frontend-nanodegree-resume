/*
This is empty on purpose! Your code to build the resume will go here.
 */
var role = 'Front End Developer';
var name = 'Eronides Neto';
var bio = {
   "name" : "Eronides Neto",
   "role" : "Font End Developer",
   "contacts": {
      "mobile": "55 21 9999-9999",
      "email": "eronides@gmail.com",
      "github": "eroder",
      "twitter": "@eroder",
      "location": "Rio de Janeiro, RJ"
   },
   "pictureURL" : "images/fry.jpg",

   "welcomeMessage" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquam magna dolor, eu malesuada ex dictum et. Nullam nulla arcu, dictum non ultricies vel, tincidunt sed mauris. Proin lacinia a ipsum sit amet feugiat. Donec odio tortor, posuere ac tortor nec, tempus vehicula erat. Aliquam sed lacus ut mi aliquam consectetur vitae at ligula. Morbi vitae rutrum diam. Donec vestibulum posuere nulla et accumsan. Aenean at enim dapibus lacus molestie tempus.",

   "skills" : ["Html", "Css", "JavaScript", "Photoshop", "Illustrator"]
};

var education = {
   "schools": [
      {
         "name": "Escola 1",
         "location": "",
         "degree": "",
         "majors": [""],
         "date": "",
         "url": ""
      },
      {
         "name": "Escola 2",
         "location": "",
         "degree": "",
         "majors": [""],
         "date": "",
         "url": ""
      }
   ],
   "onlineCourses": [
      {
         "title": "Front End Developer",
         "school": "Udacity",
         "dates": 2017,
         "url": "http://www.udacity.com"
      }
   ]
}

var work = {
   "jobs": [
      {
         "position": "Designer",
         "employer": "Grupo Grow",
         "years": 3
      },
      {
         "position": "Consultor",
         "employer": "Coelho da Fonsecaa",
         "years": 1
      }
   ]
}

var project = {
   "client": [
      {
         "name": "Cliente 1",
         "jobs": "Site",
         "date": "",
         "url": ""
      },
      {
         "name": "Cliente 2",
         "jobs": "Site",
         "date": "",
         "url": ""
      },
      {
         "name": "Cliente 3",
         "jobs": "Site",
         "date": "",
         "url": ""
      }
   ]
}

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedPic = HTMLbioPic.replace("%data%", bio.pictureURL);
var formattedWmsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedSkills = HTMLskills.replace("%data%", bio.skills);




$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

$("#header").append(formattedPic);
$("#header").append(formattedWmsg);
$("#header").append(formattedSkills);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedLocation);
