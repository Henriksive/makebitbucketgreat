var banner = document.getElementsByClassName("announcement-banner-content")[0];

var bannerContainer = document.getElementById("bitbucket-announcement-banner");
bannerContainer.style.display = "none";

var shitbucketLogo = browser.runtime.getURL("shitbucket_text.png");
var bannerLink = document.getElementById("logo");
bannerLink.innerHTML = "<a href='https://git.vegvesen.no'><img id='shitbucket'/></a>"
document.getElementById("shitbucket").src= shitbucketLogo;
