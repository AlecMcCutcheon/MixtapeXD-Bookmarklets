cors_api_url = 'https://cors-anywhere.herokuapp.com/';
  function doCORSRequest(options, printResult) {
    x = new XMLHttpRequest();
    x.open(options.method, cors_api_url + options.url);
    x.onload = x.onerror = function() {
      printResult(
        options.method + ' ' + options.url + '\n' +
        x.status + ' ' + x.statusText + '\n\n' +
        (x.responseText || '')
      );
    };
    if (/^POST/i.test(options.method)) {
      x.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    }
    x.send(options.data);
  }

  (function() {
   p = prompt('Type Phone Number: ex: 2071234567', '');
   res = p.split('');
   number = res[0] + res[1] + res[2] + '-' + res[3] + res[4] + res[5] + '-' + res[6] + res[7] + res[8] + res[9];
    urlField  = 'https://thatsthem.com/phone/' + number;
	function scrape() {
      doCORSRequest({
        method: 'GET',
        url: urlField,
        data: ''
      }, function printResult(result) {
	  Html = result.toString();
	  
	  rate = Html.includes("Too Many Requests", 0);
	  if(rate == true) {alert("API Rate Limit Reached For This Domain. Please Try Again at a Later Time. Recommend at least 6hr");}else{
	  
	   searchcheck = Html.includes("404 Page Not Found", 0);
	  if(searchcheck == true) {alert("404 Search Invalid.");}else{
	  
	  empty = Html.includes("We did not find any results for your query", 0);
	  if(empty == true) {alert("No results Found.");}else{
	  
      trim_start = Html.split('<span itemprop="email">').pop();
	  trim_end = trim_start.split("</span>")[0];
      email = trim_end.toString();
	  
	  trim_start2 = Html.split('<span itemprop="name">').pop();
	  trim_end2 = trim_start2.split("</span>")[0];
      name = trim_end2.toString();
	  
	  trim_start3 = Html.split('Last Updated:').pop();
	  trim_end3 = trim_start3.split("	</div>")[0];
      record = trim_end3.toString();
	  
	  trim_start4 = Html.split('itemtype="http://schema.org/PostalAddress">').pop();
	  trim_end4 = trim_start4.split("</span></span>")[0];
	  phased1 = trim_end4.split("</span>").join(", ");
	  phased2 = phased1.split('<span itemprop="streetAddress">').join("");
	  phased3 = phased2.split('<span itemprop="addressLocality">').join("");
	  phased4 = phased3.split('<span itemprop="addressRegion">').join("");
	  phased5 = phased4.split('<span itemprop="postalCode">').join("");
	  phased6 = phased5.split("<br>").join("");
	  phased7 = phased6.split("<br/>").join("");
	  addresscode = phased7.toString();
	  
	  trim_start5 = Html.split('<dt class="col-md-4">IP Address</dt>').pop();
	  trim_end5 = trim_start5.split("</dd>")[0];
	  filtered1 = trim_end5.split('<dd class="col-md-8">').join("");
      trim_start6 = filtered1.split('">').pop();
	  filtered2 = trim_start6.split('</a>').join("");
	  filtered3 = filtered2.split('	').join("");
      IP = filtered3.toString();
	  
	  scrap = ("[Found Record from" + record + "]: " + "Name: " + name + ", " + "Email: " + email + ", " + "Address: " + addresscode);
	alert(scrap);
	};};};
});
   
    };
	scrape();
  })();