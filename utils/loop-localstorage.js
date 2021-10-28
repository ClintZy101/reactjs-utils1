arr = [{"name":"a", "age": 1, "sport":"football"},
{"name":"b", "age": 2, "sport":"volley"},
{"name":"c", "age": 3, "sport":"basket"}];
localStorage.setItem('persons', JSON.stringify(arr));


var persons = JSON.parse(localStorage.persons);
for (var i = 0; i < persons.length; i++) {
   if(inputName === persons[i].name){  //look for match with name
       persons[i].age += 2;  //add two
       break;  //exit loop since you found the person
   }
}
localStorage.setItem("persons", JSON.stringify(persons));  //put the object back