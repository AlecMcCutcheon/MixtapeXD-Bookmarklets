cors_api_url = 'https://cors-anywhere.herokuapp.com/';
    p = prompt('Plate Number:', '');
    h = prompt('State: ex: (AL=Alabama|CO=Colorado)', '');
    urlField = 'https://www.faxvin.com/license-plate-lookup/result?plate=' + p + '&state=' + h;
	  
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
	function scrape() {
      doCORSRequest({
        method: 'GET',
        url: urlField,
        data: ''
      }, function printResult(result) {

	  Html = result.toString();
	  
	  rate = Html.includes("Too Many Requests", 0);
	  if(rate == true) {alert("API Rate Limit Reached. Please Try Again at a Later Time. Recommend at least 6hr. Loading direct page in new tab as a workaround"); window.open(urlField);}else{
	  
	  notfound = Html.includes("Page Not Found", 0);
	  if(notfound == true) {alert("404 Search Invalid.");}else{
	  
	  rate2 = Html.includes("You have Reached a Limit for Checking VIN", 0);
	  if(rate == true) {alert("FaxVin Rate Limit Reached. Please Try Again at a Later Time. Recommend at least 6hr.");}else{
	  
	   empty = Html.includes("We couldn't find records for that plate.", 0);
	  if(empty == true) {alert("No Match or Invalid Plate");}else{
	  
      trim_start = Html.split('<table class="tableinfo">').pop();
	  trim_end = trim_start.split("</table>")[0];
      trimmed_html = trim_end.toString();
	  phased1 = trimmed_html.split("<b>").join("");
	  phased2 = phased1.split("</b>").join("");
	  phased3 = phased2.split("<tr>").join("");
	  phased4 = phased3.split("</tr>").join("");
	  phased5 = phased4.split("<br>").join(": ");
	  phased6 = phased5.split("<td>").join("");
	  phased7 = phased6.split('<td colspan="2">').join('');
	  phased8 = phased7.split("</td>").join(", ");
	  phased_html = phased8.toString();
	alert(phased_html);
	};};};};
});
   
    };
	scrape();
  })();