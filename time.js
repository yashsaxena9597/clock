function movehands()
{
	with(new Date()){
		 h = 30 * ((getHours() % 12) + getMinutes() / 60); 
    m = 6 * getMinutes(); 
    s = 6 * getSeconds(); 
    document.getElementById("seconds").style.cssText =
      "transform:rotate(" + s + "deg);";
    document.getElementById("minutes").style.cssText =
      "transform:rotate(" + m + "deg);";
    document.getElementById("hours").style.cssText =
      "transform:rotate(" + h + "deg);";
      setTimeout(movehands, 1000); 
      document.getElementById("digi").innerHTML=(getHours()+":"+getMinutes()+":"+getSeconds());
	}
}
window.onload = movehands;