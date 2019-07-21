window.onload = function() {
    fetchData()
}
function fetchData() {
let postsArr = []
fetch("http://127.0.0.1:8000/memeapi/").then(res=>res.json()).then(data=>{
 //fetch("http://localhost:800[0/api.json").then(res=>res.json()).then(data=>{
   postsArr.push(data)
   // document.getElementById('count').innerHTML = postsArr.length
   var content = document.getElementById("count").innerHTML;
   document.getElementById("count").innerHTML= postsArr.length;
   if (postsArr.length >0)
     show()  
})
}

function show() {
var time = /(..)(:..)/.exec(new Date());     // The prettyprinted time.
var hour = time[1] % 12 || 12;               // The prettyprinted hour.
var period = time[1] < 12 ? 'a.m.' : 'p.m.'; // The period of the day.
new Notification(hour + time[2] + ' ' + period, {
icon: 'logo.png',
body: 'Recommendation'
});
}

setInterval(fetchData, 25000);