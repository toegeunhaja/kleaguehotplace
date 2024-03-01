function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: {lat: -34.397, lng: 150.644} // 지도의 초기 위치 설정
  });

  // 맛집 데이터
  var restaurants = [
    {name: "맛집1", location: {lat: -34.397, lng: 150.644}, address: "주소1"},
    {name: "맛집2", location: {lat: -34.398, lng: 150.645}, address: "주소2"},
    // 추가 맛집 정보
  ];

  // 마커 추가
  restaurants.forEach(function(restaurant) {
    var marker = new google.maps.Marker({
      position: restaurant.location,
      map: map,
      title: restaurant.name
    });

    // 인포윈도우 추가
    var infowindow = new google.maps.InfoWindow({
      content: `<h3>${restaurant.name}</h3><p>${restaurant.address}</p>`
    });

    marker.addListener('click', function() {
      infowindow.open(map, marker);
    });
  });
}
