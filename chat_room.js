function getdata(){
    firebaseConfig.database().ref("/").on('Value',
    function(snapshot){document.getElementById("outpost").innerHTML = "";
snapshot.forEach(function(childsnapshot) {childkey = childsnapshot.key;
room_names  = childkey;
//start code



//end code
getdata();
});});}
