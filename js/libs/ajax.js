function GET(url = '',varname) {
  fetch(url)
  .then(response => response.json())
  .then(json =>{
    window["varname"]=json;
  });
}
function POST(url="",body) {
  fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  })
  .then(res => res.json())
  .then(console.log);
}
