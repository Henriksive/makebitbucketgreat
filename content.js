var banner = document.getElementsByClassName("announcement-banner-content")[0];
if (
  banner.innerHTML.startsWith("<br>Ta kontakt med") ||
  banner.innerHTML.startsWith("<p>Ta kontakt med") ||
  banner.innerHTML.startsWith("Ta kontakt med")
) {
  var bannerContainer = document.getElementById(
    "bitbucket-announcement-banner"
  );
  bannerContainer.style.display = "none";
}
