//import express module
const express = require("express");
const client = require('twilio')('AC817b320efa0a5f1bfd8be1ec9b1fe9cd', 'c4817f831aface5297d7bb2ba84fa989');
// import body-parser module
const bodyParser = require("body-parser");
//import bcrypt module
const bcrypt = require("bcrypt");
//import multer module
const multer = require("multer");
//import path module
const path = require("path");
//import mongoose module
const mongoose = require("mongoose");
//Connect APP with DB server
mongoose.connect("mongodb://127.0.0.1:27017/educationDB");
//Create express application
const app = express();
// Configure Body-parser

// Send JSON responses
app.use(bodyParser.json());
// Get objects from Request
app.use(bodyParser.urlencoded({ extended: true }));
// Security configuration

app.use((req, res, next) => {

  res.setHeader("Access-Control-Allow-Origin", "*");

  res.setHeader(

    "Access-Control-Allow-Headers",

    "Origin, Accept, Content-Type, X-Requested-with, Authorization, expiresIn"

  );

  res.setHeader(

    "Access-Control-Allow-Methods",

    "GET, POST, DELETE, OPTIONS, PATCH, PUT"

  );

  next();

});
//Upload file config
app.use('/images', express.static(path.join('backend/images')));
const MIME_TYPE = {
  'image/png': 'png',
  'image/jpeg': 'jpg',
  'image/jpg': 'jpg',
  "application/pdf": 'pdf'
}
const storageConfig = multer.diskStorage({
  // destination
  destination: (req, file, cb) => {
    const isValid = MIME_TYPE[file.mimetype];
    let error = new Error("Mime type is invalid");
    if (isValid) {
      error = null;
    }
    cb(null, 'backend/images')
  },
  filename: (req, file, cb) => {
    const name = file.originalname.toLowerCase().split(' ').join('-');
    const extension = MIME_TYPE[file.mimetype];
    const imgName = name + '-' + Date.now() + '-crococoder-' + '.' +
      extension;
    cb(null, imgName);
  },
});

//Models Importation
const User = require("./models/user");
const Mark = require("./models/mark");
const Course = require("./models/course");


//Make app importable
module.exports = app;
//SignupAdmin
app.post("/users", (req, res) => {
  console.log("Here signupAdmin", req.body);
  bcrypt.hash(req.body.pwd, 8).then((cryptedPwd) => {
    console.log("cryptedPWD", cryptedPwd);
    let user = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      pwd: cryptedPwd,
      tel: req.body.tel,
      role: req.body.role,
    });
    user.save((err, doc) => {
      console.log("Here err", err);
      console.log("Here doc", doc);
      if (err) {
        res.json({ message: false });
      } else {
        res.json({ message: true });
      }
    });

  });

});
//SignupStudent
app.post("/users/signup/student", multer({ storage: storageConfig }).single('img'), (req, res) => {
  console.log("Here signupStudent", req.body);
  bcrypt.hash(req.body.pwd, 8).then((cryptedPwd) => {
    console.log("cryptedPWD", cryptedPwd);
    let user = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      pwd: cryptedPwd,
      tel: req.body.tel,
      adress: req.body.adress,
      level: req.body.level,
      role: req.body.role,
      img: "http://localhost:3000/images/" + req.file.filename,
    });
    user.save((err, doc) => {
      console.log("Here err", err);
      console.log("Here doc", doc);
      if (err) {
        res.json({ message: false });
      } else {
        res.json({ message: true });
      }
    });

  });

});
//SignupTeacher
app.post("/users/signup/teacher", multer({ storage: storageConfig }).single('cv'), (req, res) => {
  console.log("Here obj teacher", req.body);
  bcrypt.hash(req.body.pwd, 8).then((cryptedPwd) => {
    console.log("cryptedPWD", cryptedPwd);
    let user = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      pwd: cryptedPwd,
      tel: req.body.tel,
      adress: req.body.adress,
      speciality: req.body.speciality,
      role: req.body.role,
      cv: "http://localhost:3000/images/" + req.file.filename,
    });
    user.save((err, doc) => {
      console.log("Here err", err);
      console.log("Here doc", doc);
      if (err) {
        res.json({ message: false });
      } else {
        res.json({ message: true });
      }
    });

  });
});
//SignupParent
app.post("/users/signup/parent", (req, res) => {
  console.log("Here parent obj", req.body);
  User.findOne({ tel: req.body.telChild, role: "student" }).then((doc) => {
    if (doc) {
      bcrypt.hash(req.body.pwd, 8).then((cryptedPwd) => {
        console.log("cryptedPWD", cryptedPwd);
        let user = new User({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
          pwd: cryptedPwd,
          tel: req.body.tel,
          role: req.body.role,
          telChild: req.body.telChild
        });
        user.save((err, doc) => {
          console.log("Here err", err);
          console.log("Here doc", doc);
          if (err) {
            res.json({ message: false });
          } else {
            res.json({ message: true });
          }
        });

      });
    } else {
      res.json({ message: false })
    }
  });
});
//login
//0:Please check email
//1:Please check Pwd
//2:Welcome
app.post("/users/login/all", (req, res) => {
  console.log("Here obj", req.body);
  let user = req.body;
  let userToSend;
  User.findOne({
    $or: [{ email: user.email }, { tel: user.tel }]
  }).then((response) => {
    console.log("Here response after search by email or tel", response);
    if (!response) {
      res.json({ message: "0" })
    }
    userToSend = response;
    return bcrypt.compare(user.pwd, response.pwd);
  }).then((pwdResponse) => {
    console.log("Here pwdResponse", pwdResponse);
    if (!pwdResponse) {
      res.json({ message: "1" })
    }
    else {
      //obj {id,fN, lN, role}
      let user = {
        id: userToSend._id,
        fName: userToSend.firstName,
        lName: userToSend.lastName,
        role: userToSend.role
      }
      res.json({ message: "2", user: user })
    }
  });
});
//Get All Users
app.get("/users", (req, res) => {
  User.find().then((docs) => {

    let teachersTab = docs.filter((obj) => { return obj.role == "teacher" });
    let parentsTab = docs.filter((obj) => { return obj.role == "parent" });
    let studentsTab = docs.filter((obj) => { return obj.role == "student" });
    responseOne = teachersTab.concat(parentsTab);
    response = responseOne.concat(studentsTab)
    console.log("Here response", response);
    res.json({ userArray: response })
  })
})
//Get User By Id
app.get("/users/:id", (req, res) => {
  let id = req.params.id;
  User.findOne({ _id: id }).then((docs) => {

    res.json({ user: docs });
  });
});
//Edit Profile
app.put("/users", (req, res) => {
  let newProfile = req.body;
  User.updateOne({ _id: newProfile._id }, newProfile).then((response) => {
    console.log("Here user after update", response);
    if (response.nModified == 1) {
      res.json({ isUpdated: true });
    } else {
      res.json({ isUpdated: false });
    };
  });
});
//Delete Profile
app.delete("/users/:id", (req, res) => {
  let id = req.params.id;
  User.deleteOne({ _id: id }).then((response) => {
    console.log("Here response after delete", response);
    if (response.deletedCount == 1) {
      res.json({ isDeleted: true });
    } else {
      res.json({ isDeleted: false });
    };
  });
});
// Get all teachers
app.get("/users/teacher/getAll", (req, res) => {
  User.find().then((docs) => {

    let response = docs.filter((obj) => { return obj.role == "teacher" });

    res.json({ teacherArray: response });
  });
});
//Affect student to teacher
app.put("/users/updateUser", (req, res) => {
  let newUser = req.body;
  console.log("Here newUser", newUser);
  User.updateOne({ _id: newUser._id }, newUser).then((response) => {
    console.log("Here response", response);
    if (response.nModified == 1) {
      res.json({ isUpdated: true })
    } else {
      res.json({ isUpdated: false })
    };
  });
});
//Get My students
app.get("/users/teacher/student/getMyStudent/:id", (req, res) => {
  let teacherId = req.params.id
  User.find({ teacherId: teacherId }).then((docs) => {
    res.json({ MystudentArray: docs });
  });
});
//Give Mark
app.post("/marks", (req, res) => {
  console.log("Here Mark Obj", req.body);
  let mark = new Mark(req.body);
  mark.save((err, doc) => {
    if (err) {
      res.json({ isAdded: false });
    } else {
      res.json({ isAdded: true });
    };
  });
});
//Get Student Mark
app.get("/marks/:id", (req, res) => {
  let studentId = req.params.id;
  Mark.findOne({ studentId: studentId }).then((docs) => {
    res.json({ studentMark: docs });
  });
});
//Get teacher Obj
app.get("/marks/teacher/:id", (req, res) => {
  let teacherId = req.params.id;
  User.findOne({ teacherId: _id }).then((docs) => {
    console.log("Here teacher obj", docs);
    res.json({ teacherObj: docs })
  });
});
//Add Course
app.post("/courses", multer({ storage: storageConfig }).single('course'), (req, res) => {
  console.log("Here course", req.body);
  let course = new Course({
    name: req.body.name,
    description: req.body.description,
    modules: req.body.modules,
    teacherId: req.body.teacherId,
    course: "http://localhost:3000/images/" + req.file.filename,
  });
  course.save((doc, err) => {
    if (err) {
      res.json({ message: false });
    } else {
      res.json({ message: true });
    };
  });

});
//Get teacher Courses
app.get("/courses/teacher/:id", (req, res) => {
  let teacherId = req.params.id;
  Course.find({ teacherId: teacherId }).then((docs) => {

    res.json({ coursesArray: docs })
  });
});
//Get Course By Id
app.get("/courses/teacher/course/:id", (req, res) => {
  let CourseId = req.params.id;
  Course.findOne({ _id: CourseId }).then((docs) => {
    res.json({ course: docs })
  });
});
// Edit Course
app.put("/courses", (req, res) => {
  let newCourse = req.body;
  Course.updateOne({ _id: newCourse._id }, newCourse).then((response) => {
    if (response.nModified == 1) {
      res.json({ isUpdated: true });
    } else {
      res.json({ isUpdated: false });
    };
  });
});
//Delete Course
app.delete("/courses/:id", (req, res) => {
  let id = req.params.id;
  Course.deleteOne({ _id: id }).then((response) => {
    if (response.deletedCount == 1) {
      res.json({ isDeleted: true });
    } else {
      res.json({ isDeleted: false });
    };
  });
});
//Get My courses
app.get("/courses/teacher/course/getMy/:id", (req, res) => {
  let teacherId = req.params.id;
  Course.find({ teacherId: teacherId }).then((docs) => {
    res.json({ coursesArray: docs });
  });
});
//Affect Course to student
app.put("/courses/updateCourse", (req, res) => {
  let newStudent = req.body;
  User.updateOne({ _id: newStudent._id }, newStudent).then((response) => {
    if (response.nModified == 1) {
      res.json({ isUpdated: true })
    } else {
      res.json({ isUpdated: false })
    };
  });
});
//Edit User:pwd
app.put("/users/updateUser/pwd", (req, res) => {

  let user = req.body;
  console.log("heeeeere user", user);
  User.findOne({ tel: user.tel }).then((response) => {
    console.log("Here response from FE", response);
    bcrypt.compare(user.oldPwd, response.pwd).then((pwdResponse) => {
      console.log("Here pwdResponsed", pwdResponse);
      if (pwdResponse) {
        bcrypt.hash(user.newPwd, 8).then((cryptedPwd) => {
          console.log("Here cryptedPwd", cryptedPwd);
          let newUser = new User({
            _id: req.body._id,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            pwd: cryptedPwd,
            tel: req.body.tel,
            adress: req.body.adress,
          });
          User.updateOne({ _id: req.body._id }, newUser).then((response) => {
            console.log("Here user after update pwd", response);
          });
        });
      };
    });
  });

});
//Get student courses
app.get("/courses/student/course/getMy/courseStudent/:id", (req, res) => {
  let id = req.params.id;
  Course.find({ _id: id }).then((docs) => {
    res.json({ coursesArray: docs });
  });
});
//Get Teacher Course
app.get("/courses/student/course/getMy/courseStudent/teacher/x/:id", (req, res) => {
  let id = req.params.id;
  console.log("Here id", id);
  User.findOne({ _id: id }).then((doc) => {
    console.log("Here teacher who give course", doc);
    res.json({teacher:doc})
  });
});
//Get Parent Mark
app.get("/marks/mark/parent/:tel", (req, res) => {
  let telChild = req.params.tel;
  Mark.findOne({ telChild: telChild }).then((docs) => {
    console.log("Here docs", docs);
    res.json({ mark: docs });
  });
});
//Twilio
// Your AccountSID and Auth Token from console.twilio.com
app.post("/messages", (req, res) => {
  console.log("Here message", req.body);
  let msg= req.body;
  client.messages
  .create({
    body: `${msg}`,
    to: '+21652521528',
    from: '+13613101308',
  })
  .then((message) => console.log(message))
  .catch((error) => {
    // You can implement your fallback code here
    console.log(error);
  });
})
