var mapOptions = {
    center: new naver.maps.LatLng(37.3595704, 127.105399),
    zoom: 10
};

var map = new naver.maps.Map('map', mapOptions);

const data = [
	{
		category_name: "서비스,산업 > 인터넷,IT > 게임업체",
		place_name: "넷마블컴퍼니",
		place_url: "http://place.map.kakao.com/26426436",
		road_address_name: "서울 구로구 디지털로26길 38",
		lat: 37.479849234077534,
		lng: 126.89532072025125,
	},
	{
		category_name: "서비스,산업 > 인터넷,IT > 게임업체",
		place_name: "크래프톤",
		place_url: "http://place.map.kakao.com/1818548732",
		road_address_name: "서울 강남구 테헤란로 231",
		lat: 37.50288207510758,
		lng: 127.04135620138392, 
	}
];
let markerList = [];
let infowindowList = [];

const getClickHandler = (i) => () => {
	const marker = markerList[i];
	const infowindow = infowindowList[i];
	if (infowindow.getMap()){
		infowindow.close();
	} else {
		infowindow.open(map, marker);
	}
};
// function getClickHandler(i) { return function () {}}

const getClickMap = (i) => () => {
	const infowindow = infowindowList[i];
	infowindow.close();
}

for (let i in data){
	const target = data[i];
	const latlng = new naver.maps.LatLng(target.lat, target.lng);

	let marker = new naver.maps.Marker({
		map:map, 
		position : latlng,
		icon : {
			content : `<div class='marker'></div>`, 
			archor : new naver.maps.Point(7.5, 7.5), 
		},
	});

	const content = `
		<div class="infowindow_wrap">
			<div class="infowindow_name">${target.place_name}</div>
			<div class="infowindow_address">${target.road_address_name}</div>
		</div>
	`;

	const infowindow = new naver.maps.InfoWindow({
		content:content, 
		backgroundColor : "#00ff0000", 
		borderColor : "#00ff0000", 
		anchorSize : new naver.maps.Size(0,0), 
	});

	markerList.push(marker);
	infowindowList.push(infowindow);
}

for (let i = 0, ii = markerList.length; i < ii; i++){
	naver.maps.Event.addListener(map, "click", getClickMap(i));
	naver.maps.Event.addListener(markerList[i], "click", getClickHandler(i));
} 
