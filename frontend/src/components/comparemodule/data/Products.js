import axios from "axios";
export const res =  axios.get('/Universities');
console.log(res);
export const productthis = axios.get('/api/products');
console.log(productthis);
 export const  products=[
  //{
//     "id": "1",
//     "name": "Cherry",
//     "image": "https://www.canr.msu.edu/uploads/236/58624/cherries.jpg",
//     "price": "$1.99",
//     "colors": ["red", "green", "blue"],
//     "condition": "Fresh",
//     "description": "Two Cherries",
//     "vendors": ["Fresh Fruits Market", "Fruit Ninja"]
//   },
  {
    "_id": {
      "$oid": "62f3f2d50b880f2b857b2d60"
    },
    "id":"24",
    "name": "LP University",
    "UniversityType":"Private University",
    "TotalCoursesOffered": 85,
    "Student_Faculty_Ratio":"50:1",
    "RequiredStandardTests": "JEE",
    "image": "https://spiderimg.amarujala.com/assets/images/2020/01/21/750x506/lpu_1579588723.png",
    "images": [
      "https://spiderimg.amarujala.com/assets/images/2020/01/21/750x506/lpu_1579588723.png",
      "https://gumlet.assettype.com/nationalherald%2F2022-04%2F72d83229-20b1-4e47-8152-e9f08e54fd02%2FLPU.jpeg?rect=0%2C0%2C860%2C430&format=auto",
      "https://gumlet.assettype.com/nationalherald%2F2022-04%2F72d83229-20b1-4e47-8152-e9f08e54fd02%2FLPU.jpeg?rect=0%2C0%2C860%2C430&format=auto",
      "https://www.static-contents.youth4work.com/university/513510e8-16a0-4a58-867a-d6edc46b6c87.png"
    ],
    "description": "institution Deemed to be University, located in Vaddeswaram, Guntur, Andhra Pradesh, India.KLEF was established in 1980 at Vaddeswaram as K L College of Engineering (KLCE). It became autonomous in 2006 and was recognized as deemed to be university in 2009, known as K L University. Following the University Grants Commission's request from 123 deemed institutes, not to use  in the name it was renamed Koneru Lakshmaiah Education Foundation. In 2019, it was renamed K L Deemed to be University. The university has recently expanded with a new campus in Bachupally, Hyderabad that has been operational since 2019.",
    "category": [
      "private",
      "deemed",
      "UG",
      "PG",
      "PHD"
    ],
    "sizes": [
      "S",
      "XS"
    ],
    "price": 2,
    "countInStock": 10,
    "rating": 5,
    "numReviews": 0,
    "Ownership": "Government - Autonomous",
    "TotalCourses": 85,
    "PlacementPercentage":"95%",
    "Courses": {
      "Ug": {
        "Btech": [
          {
            "id": 1,
            "name": "cse"
          },
          {
            "id": 2,
            "name": "ece"
          }
        ],
        "BA": [
          {
            "id": 1,
            "name": "Advertising"
          },
          {
            "id": 2,
            "name": "archeology"
          }
        ]
      },
      "Pg": {
        "Mtech": [
          {
            "id": 1,
            "name": "cse"
          },
          {
            "id": 2,
            "name": "ece"
          }
        ],
        "Msc": [
          {
            "id": 1,
            "name": "mathematics"
          },
          {
            "id": 2,
            "name": "Zoology"
          }
        ]
      },
      "Phd": {
        "Sciences": [
          {
            "id": 1,
            "name": "chemistry"
          },
          {
            "id": 2,
            "name": "physics"
          }
        ],
        "Arts": [
          {
            "id": 1,
            "name": "economics"
          },
          {
            "id": 2,
            "name": "sociology"
          }
        ]
      }
    },
    "CampusSize": 100,
    "StudentIntake": 5352,
    "TotalFaculty": 1200,
    "OverallRating": 4.6,
    "Placements": 4.5,
    "Infrastructure": 4.6,
    "Faculty": 4.5,
    "ValueForMoney": 4.7,
    "Ranking": {
      "Nirf": 22,
      "BussToday": 20,
      "TheWeek": 20,
      "Outlook": 20
    },
    "coed": true,
    "Salary": 2000000,
    "TotalFees": 1000000,
    "AcceptedExams": "JEE",
    "Facilties": [
      "Library",
      "Cafeteria",
      "Hostel",
      "Sports Complex",
      "Gym",
      "Wifi",
      "Auditorium",
      "Music Room",
      "AcClasses",
      "Labs",
      "Convenience Store"
    ],
    "StudentReview": 4.4,
    "location": "Punjab"
  },
  {
    "_id": {
      "$oid": "62f3eefe0b880f2b857b2d5f"
    },
    "id":"34",
    "name": "Giet University",
    "PlacementPercentage":"95%",
    "RequiredStandardTests": "JEE",
    "UniversityType":"Private University",
    "TotalCoursesOffered": 85,
    "Student_Faculty_Ratio":"50:1",
    "image": "https://i.ytimg.com/vi/YmO0zoEmlrM/maxresdefault.jpg",
    "images": [
      "https://i.ytimg.com/vi/YmO0zoEmlrM/maxresdefault.jpg",
      "https://images.shiksha.com/mediadata/images/1580977964phpWNAero.jpeg",
      "https://www.giet.edu/wp-content/uploads/2020/06/wifi-facility.jpg"
    ],
    "description": "Ko be University, located in Vaddeswaram, Guntur, Andhra Pradesh, India.KLEF was established in 1980 at Vaddeswaram as K L College of Engineering (KLCE). It became autonomous in 2006 and was recognized as deemed to be university in 2009, known as K L University. Following the University Grants Commission's request from 123 deemed institutes, not to use  in the name it was renamed Koneru Lakshmaiah Education Foundation. In 2019, it was renamed K L Deemed to be University. The university has recently expanded with a new campus in Bachupally, Hyderabad that has been operational since 2019.",
    "category": [
      "deemed",
      "aicte",
      "PHD"
    ],
    "sizes": [
      "S",
      "XS"
    ],
    "price": 5,
    "countInStock": 10,
    "rating": 1,
    "numReviews": 0,
    "Ownership": "Government - Autonomous",
    "TotalCourses": 85,
    "Courses": {
      "Ug": {
        "Btech": [
          {
            "id": 1,
            "name": "cse"
          },
          {
            "id": 2,
            "name": "ece"
          }
        ],
        "BA": [
          {
            "id": 1,
            "name": "Advertising"
          },
          {
            "id": 2,
            "name": "archeology"
          }
        ]
      },
      "Pg": {
        "Mtech": [
          {
            "id": 1,
            "name": "cse"
          },
          {
            "id": 2,
            "name": "ece"
          }
        ],
        "Msc": [
          {
            "id": 1,
            "name": "mathematics"
          },
          {
            "id": 2,
            "name": "Zoology"
          }
        ]
      },
      "Phd": {
        "Sciences": [
          {
            "id": 1,
            "name": "chemistry"
          },
          {
            "id": 2,
            "name": "physics"
          }
        ],
        "Arts": [
          {
            "id": 1,
            "name": "economics"
          },
          {
            "id": 2,
            "name": "sociology"
          }
        ]
      }
    },
    "CampusSize": 100,
    "StudentIntake": 5352,
    "TotalFaculty": 1200,
    "OverallRating": 4.6,
    "Placements": 4.5,
    "Infrastructure": 4.6,
    "Faculty": 4.5,
    "ValueForMoney": 4.7,
    "Nirf": 22,
    "BussToday": 20,
    "TheWeek": 20,
    "Outlook": 20,
    "coed": true,
    "Salary": 2000000,
    "TotalFees": 1000000,
    "AcceptedExams": "JEE",
    "Facilties": [
      "Library",
      "Cafeteria",
      "Hostel",
      "Sports Complex",
      "Gym",
      "Wifi",
      "Auditorium",
      "Music Room",
      "AcClasses",
      "Labs",
      "Convenience Store"
    ],
    "StudentReview": 4.4,
    "location": "rayagada,Odisha"
  },
  {
    "_id": {
      "$oid": "62f3887e07a3328cac5da621"
    },
    "id":"45",
    "name": "AMRITA",
    "RequiredStandardTests": "JEE",
    "PlacementPercentage":"95%",
    "UniversityType":"Private University",
    "TotalCoursesOffered": 85,
    "Student_Faculty_Ratio":"50:1",
    "image": "https://images.shiksha.com/mediadata/images/1566297871phpuuCoYB.jpeg",
    "images": [
      "https://images.shiksha.com/mediadata/images/1566297871phpuuCoYB.jpeg",
      "http://www.theindianexpert.com/wp-content/uploads/2020/03/Amrita-University-Admission-2020-a.jpg",
      "https://www.amritapuri.org/images/2019/05/19-university-3.jpg"
    ],
    "description": " is a higher educational institution Deemed to be University, located in Vaddeswaram, Guntur, Andhra Pradesh, India.KLEF was established in 1980 at Vaddeswaram as K L College of Engineering (KLCE). It became autonomous in 2006 and was recognized as deemed to be university in 2009, known as K L University. Following the University Grants Commission's request from 123 deemed institutes, not to use  in the name it was renamed Koneru Lakshmaiah Education Foundation. In 2019, it was renamed K L Deemed to be University. The university has recently expanded with a new campus in Bachupally, Hyderabad that has been operational since 2019.",
    "category": [
      "autonomous",
      "PG",
      "PHD"
    ],
    "sizes": [
      "S",
      "XS"
    ],
    "price": 100000,
    "countInStock": 10,
    "rating": 3,
    "numReviews": 0,
    "Ownership": "Government - Autonomous",
    "TotalCourses": 85,
    "Courses": {
      "Ug": {
        "Btech": [
          {
            "id": 1,
            "name": "cse"
          },
          {
            "id": 2,
            "name": "ece"
          }
        ],
        "BA": [
          {
            "id": 1,
            "name": "Advertising"
          },
          {
            "id": 2,
            "name": "archeology"
          }
        ]
      },
      "Pg": {
        "Mtech": [
          {
            "id": 1,
            "name": "cse"
          },
          {
            "id": 2,
            "name": "ece"
          }
        ],
        "Msc": [
          {
            "id": 1,
            "name": "mathematics"
          },
          {
            "id": 2,
            "name": "Zoology"
          }
        ]
      },
      "Phd": {
        "Sciences": [
          {
            "id": 1,
            "name": "chemistry"
          },
          {
            "id": 2,
            "name": "physics"
          }
        ],
        "Arts": [
          {
            "id": 1,
            "name": "economics"
          },
          {
            "id": 2,
            "name": "sociology"
          }
        ]
      }
    },
    "CampusSize": 100,
    "StudentIntake": 5352,
    "TotalFaculty": 1200,
    "OverallRating": 4.6,
    "Placements": 4.5,
    "Infrastructure": 4.6,
    "Faculty": 4.5,
    "ValueForMoney": 4.7,
    "Ranking": {
      "Nirf": 22,
      "BussToday": 20,
      "TheWeek": 20,
      "Outlook": 20
    },
    "coed": true,
    "Salary": 2000000,
    "TotalFees": 1000000,
    "AcceptedExams": "JEE",
    "Facilties": [
      "Library",
      "Cafeteria",
      "Hostel",
      "Sports Complex",
      "Gym",
      "Wifi",
      "Auditorium",
      "Music Room",
      "AcClasses",
      "Labs",
      "Convenience Store"
    ],
    "StudentReview": 4.4,
    "location": "Coimbatore,TamilNadu"
  },
  {
    "_id": {
      "$oid": "62f3f48c0b880f2b857b2d61"
    },
    "id":"23",
    "name": "Parul University",
    "PlacementPercentage":"95%",
    "RequiredStandardTests": "JEE",
    "Student_Faculty_Ratio":"50:1",
    "UniversityType":"Private University",
    "TotalCoursesOffered": 85,
    "image": "https://media-exp1.licdn.com/dms/image/C561BAQEV6YLtweXS4w/company-background_10000/0/1554824586423?e=2159024400&v=beta&t=DOBOwZDGSd7mJt-XSSRIcf37345uTHb6sV0hAxsUxxs",
    "images": [
      "https://media-exp1.licdn.com/dms/image/C561BAQEV6YLtweXS4w/company-background_10000/0/1554824586423?e=2159024400&v=beta&t=DOBOwZDGSd7mJt-XSSRIcf37345uTHb6sV0hAxsUxxs",
      "https://images.shiksha.com/mediadata/images/articles/1599202531phpcxoWuC.jpeg",
      "https://paruluniversity.ac.in/app/images/post/blog/featured_image/412491Gate%20Picture%20(1).jpg"
    ],
    "description": "K L University, officially K L Deemed to be University, formerly K L College of Engineering and Koneru Lakshmaiah Educational Foundation, is a higher educational institution Deemed to be University, located in Vaddeswaram, Guntur, Andhra Pradesh, India.KLEF was established in 1980 at Vaddeswaram as K L College of Engineering (KLCE). It became autonomous in 2006 and was recognized as deemed to be university in 2009, known as K L University. Following the University Grants Commission's request from 123 deemed institutes, not to use  in the name it was renamed Koneru Lakshmaiah Education Foundation. In 2019, it was renamed K L Deemed to be University. The university has recently expanded with a new campus in Bachupally, Hyderabad that has been operational since 2019.",
    "category": [
      "private",
      "Aicte",
      "UG"
    ],
    "sizes": [
      "S",
      "XS"
    ],
    "price": 1,
    "countInStock": 10,
    "rating": 4,
    "numReviews": 0,
    "Uid": "1",
    "Ownership": "Government - Autonomous",
    "TotalCourses": 85,
    "Courses": {
      "Ug": {
        "Btech": [
          {
            "id": 1,
            "name": "cse"
          },
          {
            "id": 2,
            "name": "ece"
          }
        ],
        "BA": [
          {
            "id": 1,
            "name": "Advertising"
          },
          {
            "id": 2,
            "name": "archeology"
          }
        ]
      },
      "Pg": {
        "Mtech": [
          {
            "id": 1,
            "name": "cse"
          },
          {
            "id": 2,
            "name": "ece"
          }
        ],
        "Msc": [
          {
            "id": 1,
            "name": "mathematics"
          },
          {
            "id": 2,
            "name": "Zoology"
          }
        ]
      },
      "Phd": {
        "Sciences": [
          {
            "id": 1,
            "name": "chemistry"
          },
          {
            "id": 2,
            "name": "physics"
          }
        ],
        "Arts": [
          {
            "id": 1,
            "name": "economics"
          },
          {
            "id": 2,
            "name": "sociology"
          }
        ]
      }
    },
    "CampusSize": 100,
    "StudentIntake": 5352,
    "TotalFaculty": 1200,
    "OverallRating": 4.6,
    "Placements": 4.5,
    "Infrastructure": 4.6,
    "Faculty": 4.5,
    "ValueForMoney": 4.7,
    "Nirf": 22,
    "BussToday": 20,
    "TheWeek": 20,
    "Outlook": 20,
    "coed": true,
    "Salary": 2000000,
    "TotalFees": 1000000,
    "AcceptedExams": "JEE",
    "Facilties": [
      "Library",
      "Cafeteria",
      "Hostel",
      "Sports Complex",
      "Gym",
      "Wifi",
      "Auditorium",
      "Music Room",
      "AcClasses",
      "Labs",
      "Convenience Store"
    ],
    "StudentReview": 4.4,
    "location": "Mumbai,Maharastra"
  },
  {
    "id": "55",
    "name": "Kluniversity",
    "image": "https://leavestranscript.com/wp-content/uploads/2020/08/K-L-University.jpg",
    "price": 10000,
   
    "condition":"join with mains only",
    "description":"it is a big campus",
    "vendors ": ["Fresh fruits market","fruit Ninja"],
    "images": [
      "https://images.collegedunia.com/public/image/7cdd5946c827e074ec4517f983db6670.png?tr=w-750,h-563,c-force?tr=w-700,h-525,c-force",
      "https://leavestranscript.com/wp-content/uploads/2020/08/K-L-University.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw3dYvHFsFsI1fLRAPVaucuA3RlqEvJezb4koE6ilgamIlmOpXI54R5niSL3sLOkmeWxc&usqp=CAU"
    ],
    "descriptioncopy": "K L University, officially K L Deemed to be University, formerly K L College of Engineering and Koneru Lakshmaiah Educational Foundation, is a higher educational institution Deemed to be University, located in Vaddeswaram, Guntur, Andhra Pradesh, India.KLEF was established in 1980 at Vaddeswaram as K L College of Engineering (KLCE). It became autonomous in 2006 and was recognized as deemed to be university in 2009, known as K L University. Following the University Grants Commission's request from 123 deemed institutes, not to use  in the name it was renamed Koneru Lakshmaiah Education Foundation. In 2019, it was renamed K L Deemed to be University. The university has recently expanded with a new campus in Bachupally, Hyderabad that has been operational since 2019.",
    "category": [
      "private",
      "UG",
      "PHD",
      "Aicte"
    ],
    "sizes": [
      "S",
      "XS"
    ],
 
    "countInStock": 10,
    "rating": 2,
    "numReviews": 0,
    "Uid": "1",
    
   
    //"Ownership": "Government - Autonomous",
    "UniversityType":"Private University",
    "TotalCoursesOffered": 85,
    "Courses": {
      "Ug": {
        "Btech": [
          {
            "id": 1,
            "name": "cse"
          },
          {
            "id": 2,
            "name": "ece"
          }
        ],
        "BA": [
          {
            "id": 1,
            "name": "Advertising"
          },
          {
            "id": 2,
            "name": "archeology"
          }
        ]
      },
      "Pg": {
        "Mtech": [
          {
            "id": 1,
            "name": "cse"
          },
          {
            "id": 2,
            "name": "ece"
          }
        ],
        "Msc": [
          {
            "id": 1,
            "name": "mathematics"
          },
          {
            "id": 2,
            "name": "Zoology"
          }
        ]
      },
      "Phd": {
        "Sciences": [
          {
            "id": 1,
            "name": "chemistry"
          },
          {
            "id": 2,
            "name": "physics"
          }
        ],
        "Arts": [
          {
            "id": 1,
            "name": "economics"
          },
          {
            "id": 2,
            "name": "sociology"
          }
        ]
      }
    },
    "CampusSize": 100,
    "StudentIntake": 5352,
    "TotalFaculty": 1200,
    "OverallRating": 4.6,
    "Placements": 4.5,
    "Infrastructure": 4.6,
    "Faculty": 4.5,
    "ValueForMoney": 4.7,
    "Nirf": 22,
    "BussToday": 20,
    "TheWeek": 20,
    "Outlook": 20,
    "coed": true,
    //"Salary": 2000000,
    "TotalFees": 1000000,
    "RequiredStandardTests": "JEE",
    "Student_Faculty_Ratio":"50:1",
    "PlacementPercentage":"95%",

    "Facilties": [
      "Library",
      "Cafeteria",
      "Hostel",
      "Sports Complex",
      "Gym",
      "Wifi",
      "Auditorium",
      "Music Room",
      "AcClasses",
      "Labs",
      "Convenience Store"
    ],
    "StudentReview": 4.4,
    "location": "Vaddeswaram,Guntur"
  },
  {
    "_id": {
      "$oid": "62f3883e07a3328cac5da620"
    },
    "id":"33",
    "name": "VVIT",
    "Student_Faculty_Ratio":"50:1",
    "UniversityType":"Private University",
    "RequiredStandardTests": "JEE",
    "TotalCoursesOffered": 85,
    "image":"https://preprimaryschools.com/assets/uploads/school/home/22022022053036_979428_Viva-The-School-By-Vvit-1.jpg",
    "images": [
      "https://preprimaryschools.com/assets/uploads/school/home/22022022053036_979428_Viva-The-School-By-Vvit-1.jpg",
      "https://static.toiimg.com/thumb/msid-78351661,width-1280,height-720,resizemode-4/.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/3/3a/VVIT_a_view_of_%27C%27_Block.jpg",
      "https://colleges.dailyrecruitment.in/wp-content/uploads/2022/04/VVIT.png"
    ],
    "description": "institution Deemed to be University, located in Vaddeswaram, Guntur, Andhra Pradesh, India.KLEF was established in 1980 at Vaddeswaram as K L College of Engineering (KLCE). It became autonomous in 2006 and was recognized as deemed to be university in 2009, known as K L University. Following the University Grants Commission's request from 123 deemed institutes, not to use  in the name it was renamed Koneru Lakshmaiah Education Foundation. In 2019, it was renamed K L Deemed to be University. The university has recently expanded with a new campus in Bachupally, Hyderabad that has been operational since 2019.",
    "category": [
      "deemed",
      "UG"
    ],
    "sizes": [
      "S",
      "XS"
    ],
    "price": 1000,
    "countInStock": 10,
    "rating": 4,
    "numReviews": 0,
    "Uid": "1",
    "Uname": "IIM Ahmedabad- Indian Institute of Management",
    "Location": "Ahmedabad",
    "Ownership": "Government - Autonomous",
    "TotalCourses": 85,
    "Courses": {
      "Ug": {
        "Btech": [
          {
            "id": 1,
            "name": "cse"
          },
          {
            "id": 2,
            "name": "ece"
          }
        ],
        "BA": [
          {
            "id": 1,
            "name": "Advertising"
          },
          {
            "id": 2,
            "name": "archeology"
          }
        ]
      },
      "Pg": {
        "Mtech": [
          {
            "id": 1,
            "name": "cse"
          },
          {
            "id": 2,
            "name": "ece"
          }
        ],
        "Msc": [
          {
            "id": 1,
            "name": "mathematics"
          },
          {
            "id": 2,
            "name": "Zoology"
          }
        ]
      },
      "Phd": {
        "Sciences": [
          {
            "id": 1,
            "name": "chemistry"
          },
          {
            "id": 2,
            "name": "physics"
          }
        ],
        "Arts": [
          {
            "id": 1,
            "name": "economics"
          },
          {
            "id": 2,
            "name": "sociology"
          }
        ]
      }
    },
    "CampusSize": 100,
    "StudentIntake": 5352,
    "TotalFaculty": 1200,
    "OverallRating": 4.6,
    "Placements": 4.5,
    "Infrastructure": 4.6,
    "Faculty": 4.5,
    "ValueForMoney": 4.7,
    "Ranking": {
      "Nirf": 22,
      "BussToday": 20,
      "TheWeek": 20,
      "Outlook": 20
    },
    "coed": true,
    "Salary": 2000000,
    "TotalFees": 1000000,
    "AcceptedExams": "JEE",
    "Facilties": [
      "Library",
      "Cafeteria",
      "Hostel",
      "Sports Complex",
      "Gym",
      "Wifi",
      "Auditorium",
      "Music Room",
      "AcClasses",
      "Labs",
      "Convenience Store"
    ],
    "PlacementPercentage":"95%",
    "StudentReview": 4.4,
    "location": "Nambur,Guntur"
  },
  // {
  //   "id": "2",
  //   "name": "Orange",
  //   "image": "https://s3-eu-west-1.amazonaws.com/nucig/Flavours/eliquid-orange-flavour-500.jpg",
  //   "price": "$2.99",
  //   "colors": ["green", "blue"],
  //   "condition": "Frozen",
  //   "description": "Giant Orange",
  //   "vendors": ["Families Market"]
  // },
  // {
  //   "id": "3",
  //   "name": "Nuts",
  //   "image": "https://images-na.ssl-images-amazon.com/images/I/71Y0nx6ayfL._SX425_.jpg",
  //   "price": "$1.00",
  //   "colors": ["red"],
  //   "condition": "Frozen",
  //   "description": "Mixed Nuts",
  //   "vendors": ["Amazon Distributor"]
  // },
//   {
//     "id": "4",
//     "name": "Strawberry",
//     "image": "https://5.imimg.com/data5/CK/LM/MY-46960546/fresh-red-strawberry-500x500.jpg",
//     "price": "$1.49",
//     "colors": ["blue"],
//     "condition": "Fresh",
//     "description": "Just Strawberry",
//     "vendors": ["Big Basket"]
//  }
]
