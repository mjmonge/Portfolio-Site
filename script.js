function initMap() {
  // The location of Uluru
  const uluru1 = { lat: 41.896, lng: -87.665 };
  // The map, centered at Uluru
  const map1 = new google.maps.Map(document.getElementById("map1"), {
    zoom: 12,
    center: uluru1,
  });
  // The marker, positioned at Uluru
  const marker1 = new google.maps.Marker({
    position: uluru1,
    map: map1,
  });

  // The location of Uluru
  const uluru2 = { lat: 43.039, lng: -87.927 };
  // The map, centered at Uluru
  const map2 = new google.maps.Map(document.getElementById("map2"), {
    zoom: 12,
    center: uluru2,
  });
  // The marker, positioned at Uluru
  const marker2 = new google.maps.Marker({
    position: uluru2,
    map: map2,
  });

}