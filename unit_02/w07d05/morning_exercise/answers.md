//PART 1
// 112 Victims and Francis Frost
{ "_id" : ObjectId("58d280a051041d2fa3dbc3e7"), "name" : "Francis Frost", "hair_color" : "black", "eye_color" : "blue", "dob" : ISODate("1976-07-18T22:18:00Z"), "location" : "New York, New York, US", "gender" : "m", "victims" : 112, "loves" : [ "brooding", "frilly shirtsleeves" ], "__v" : 0 }


//Paris, France vampire

{ "_id" : ObjectId("58d280a051041d2fa3dbc3e4"), "name" : "Persephone Bourignon", "dob" : ISODate("1801-06-17T18:53:00Z"), "hair_color" : "red", "eye_color" : "green", "location" : "Paris, France", "gender" : "f", "victims" : 450, "loves" : [ "wine", "fancy cloaks", "appearing innocent" ], "__v" : 0 }

//Victims greater than 500

> db.vampires.find({victims: { $gt: 500 } } )
{ "_id" : ObjectId("58d280a051041d2fa3dbc3db"), "name" : "Dracula", "dob" : ISODate("0937-01-24T18:00:00Z"), "hair_color" : "brown", "eye_color" : "blue", "location" : "Transylvania, Romania", "gender" : "m", "victims" : 1238, "loves" : [ "Winona Ryder", "top hats", "fancy cloaks", "handlebar   mustaches" ], "__v" : 0 }

//Equal to 150 victims

{ "_id" : ObjectId("58d280a051041d2fa3dbc3de"), "name" : "Louis de Pointe du Lac", "dob" : ISODate("1766-07-04T06:01:00Z"), "hair_color" : "brown", "eye_color" : "blue", "location" : "New Orleans, Louisiana, US", "gender" : "m", "victims" : 150, "loves" : [ "brooding", "Claudia", "staring longingly into the   distance" ], "__v" : 0 }

//Not equal to 210234 but greater than 150 and less than 500

{ "_id" : ObjectId("58d280a051041d2fa3dbc3e4"), "name" : "Persephone Bourignon", "dob" : ISODate("1801-06-17T18:53:00Z"), "hair_color" : "red", "eye_color" : "green", "location" : "Paris, France", "gender" : "f", "victims" : 450, "loves" : [ "wine", "fancy cloaks", "appearing innocent" ], "__v" : 0 }
