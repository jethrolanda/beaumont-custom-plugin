jQuery(document).ready(function($) {

  if($('#letmap').length === 0) return;
  
  /*
  2018-2023 (c) L.E.T. | Mapping code version: 1.2.6
  */
  var letmapmarkers = [];
  var letmapstreets = L.tileLayer.Unwired({
      key: '2bf675d0f24874',
      scheme: 'streets'
  });
  var letmapPe84967 = L.icon({
      iconUrl: "//chart.googleapis.com/chart?chst=d_map_xpin_letter&chld=pin_star||e84967|000000|FF0000",
      iconSize: [22, 40],
      iconAnchor: [11, 40],
      popupAnchor: [0, -40]
  });
  var letmapRc845ca = L.icon({
      iconUrl: "//chart.googleapis.com/chart?chst=d_map_xpin_letter&chld=pin||c845ca",
      iconSize: [22, 40],
      iconAnchor: [11, 40],
      popupAnchor: [0, -40]
  });
  var letmapR445ab1 = L.icon({
      iconUrl: "//chart.googleapis.com/chart?chst=d_map_xpin_letter&chld=pin||445ab1",
      iconSize: [22, 40],
      iconAnchor: [11, 40],
      popupAnchor: [0, -40]
  });
  var letmapRa9d444 = L.icon({
      iconUrl: "//chart.googleapis.com/chart?chst=d_map_xpin_letter&chld=pin||a9d444",
      iconSize: [22, 40],
      iconAnchor: [11, 40],
      popupAnchor: [0, -40]
  });
  var letmapR56aaec = L.icon({
      iconUrl: "//chart.googleapis.com/chart?chst=d_map_xpin_letter&chld=pin||56aaec",
      iconSize: [22, 40],
      iconAnchor: [11, 40],
      popupAnchor: [0, -40]
  });
  var letmapm1 = L.marker([38.02121, -107.671768], {
      icon: letmapRc845ca,
      title: 'BonTon Restaurant'
  }).bindPopup('<div style="text-align:center"><div class="overlayInfo"><strong>BonTon Restaurant</strong><br />St. Elmo Hotel, 426 Main St, Ouray, CO 81427<br />This historic establishment with a low-key, homey vibe serves old-school Italian &amp; American fare.<br /><br /><a href="http://www.bontonrestaurant.com/" class="mapLink" target="_blank">More Info</a></div></div>');
  letmapmarkers.push(letmapm1);
  var letmapm2 = L.marker([38.024673, -107.671036], {
      icon: letmapR445ab1,
      title: 'Brickhouse 737'
  }).bindPopup('<div style="text-align:center"><div class="overlayInfo"><strong>Brickhouse 737</strong><br />737 Main St, Ouray, CO 81427<br /><br /><br /><a href="http://brickhouse737.com/" class="mapLink" target="_blank">More Info</a></div></div>');
  letmapmarkers.push(letmapm2);
  var letmapm3 = L.marker([38.029522, -107.672829], {
      icon: letmapRa9d444,
      title: 'Hot Springs Pool'
  }).bindPopup('<div style="text-align:center"><div class="overlayInfo"><strong>Hot Springs Pool</strong><br />1230 Main St, Ouray, CO 81427<br /><br /><br /><a href="http://www.ourayhotsprings.com/" class="mapLink" target="_blank">More Info</a></div></div>');
  letmapmarkers.push(letmapm3);
  var letmapm4 = L.marker([38.06189, -107.678841], {
      icon: letmapRa9d444,
      title: 'Ouray Bachelor-Syracuse Mine Tour'
  }).bindPopup('<div style="text-align:center"><div class="overlayInfo"><strong>Ouray Bachelor-Syracuse Mine Tour</strong><br />1222 CR 14, Ouray, CO, 81427<br />Tour a real Silver and Gold mine. You will walk 1,500 feet into Gold Hill accompanied by a trained guide. You will experience history at the ground level - the way the miners experienced it in the past century - and learn about the rich ore veins, work environment and equipment used in mining.<br /><br />Other activities available at the Bachelor-Syracuse Mine are: Gold panning instruction, Outdoor Cafe, turn-of-the-century Blacksmith shop, and a Gift Shop featuring fun toys for the kids, jewelry and mineral samples.<br /><br />Great for group activities, and something for every age. Our facility is also available for special events and outdoor sunset dinners in our scenic cafe for groups of eight or more. Call us for more group information!&nbsp;970-325-0220<br /><br /><a href="http://www.bachelorsyracusemine.com/" class="mapLink" target="_blank">More Info</a></div></div>');
  letmapmarkers.push(letmapm4);
  var letmapm5 = L.marker([38.0228, -107.669823], {
      icon: letmapRc845ca,
      title: 'Ouray Historic Museum'
  }).bindPopup('<div style="text-align:center"><div class="overlayInfo"><strong>Ouray Historic Museum</strong><br />420 6th Ave, Ouray, CO 81427<br /><br /><br /><a href="http://www.ouraycountyhistoricalsociety.org/" class="mapLink" target="_blank">More Info</a></div></div>');
  letmapmarkers.push(letmapm5);
  var letmapm6 = L.marker([38.015976, -107.672958], {
      icon: letmapRa9d444,
      title: 'Ouray Ice Park'
  }).bindPopup('<div style="text-align:center"><div class="overlayInfo"><strong>Ouray Ice Park</strong><br />Camp Bird Rd Ouray, CO 81427<br /><br /><br /><a href="http://www.ourayicepark.com/" class="mapLink" target="_blank">More Info</a></div></div>');
  letmapmarkers.push(letmapm6);
  var letmapm7 = L.marker([38.017303, -107.676064], {
      icon: letmapRa9d444,
      title: 'Ouray\'s Box Canyon Falls'
  }).bindPopup('<div style="text-align:center"><div class="overlayInfo"><strong>Ouray\'s Box Canyon Falls</strong><br />Box Canyon Rd Ridgway, CO 81432<br />Call&nbsp;(970) 325-7080 for times and ticket prices<br /><br /></div></div>');
  letmapmarkers.push(letmapm7);
  var letmapm8 = L.marker([38.024143, -107.672264], {
      icon: letmapR56aaec,
      title: 'Switzerland of America Jeep Tours'
  }).bindPopup('<div style="text-align:center"><div class="overlayInfo"><strong>Switzerland of America Jeep Tours</strong><br />226 7th Avenue. Ouray, Colorado&#8206; 81427<br /><a href="http://soajeep.com/" target="_blank">https://soajeep.com/</a><br /><br /><a href="https://soajeep.com/" class="mapLink" target="_blank">More Info</a></div></div>');
  letmapmarkers.push(letmapm8);
  var letmapm9 = L.marker([38.021393, -107.671532], {
      icon: letmapRc845ca,
      title: 'Wright Opera House'
  }).bindPopup('<div style="text-align:center"><div class="overlayInfo"><strong>Wright Opera House</strong><br />462 Main St, Ouray, CO 81427<br />ecognizing the potential to preserve and restore arts and culture in Ouray County by purchasing the historic Wright Opera House, a group of volunteers came together in 2007 and formed the non-profit organization &#39;Friends of the Wright Opera House&#39;. The vision that followed was nothing short of promoting artistic, cultural and educational opportunities for all by providing a centralized venue for performing arts organizations and by restoring the facility for another century of use.In 2011, the Friends completed the acquisition of the Wright Opera House thanks to the generosity of the local community and the various foundations that came together and recognized the historical significance of the facility. During this time, the Friends brought new programming and events to Ouray County as an all volunteer board. At the same time, the Friends have worked diligently to define a restoration plan for the Wright Opera House, working with both the Colorado State Historical Society as well as local stakeholders to ensure that the Wright reclaims its place as a premier entertainment venue.<br /><br />For decades, the Wright Opera House has provided high quality entertainment and culture. With the Friends at the helm and with the continued support from the community, the Wright will exist for many decades to come as a crowning jewel for the City and County of Ouray, providing arts, entertainment and culture for all.<br /><br /><a href="http://thewrightoperahouse.org/" class="mapLink" target="_blank">More Info</a></div></div>');
  letmapmarkers.push(letmapm9);
  var letmapm10 = L.marker([38.021961, -107.671211], {
      icon: letmapPe84967,
      title: 'Beaumont Hotel & Spa'
  }).bindPopup('<div style="text-align:center"><div class="overlayInfo"><strong>Beaumont Hotel & Spa</strong><br />505 Main Street Ouray Colorado 81427<br /><br /><br /><a href="http://maps.google.com/maps?saddr=&amp;daddr=505+Main+Street+Ouray+Colorado+81427" class="mapLink" target="_blank">Get Directions</a></div></div>');
  letmapmarkers.push(letmapm10);
  letmapallmarkers = L.featureGroup([letmapm1, letmapm2, letmapm3, letmapm4, letmapm5, letmapm6, letmapm7, letmapm8, letmapm9, letmapm10]);
  var letmapmap = L.map("letmap", {
      center: [26.9595698, -80.0968747],
      zoom: 12,
      minZoom: 4,
      maxZoom: 16,
      gestureHandling: true,
      zoomControl: true,
      layers: [letmapstreets, letmapallmarkers]
  });
  letmapmap.zoomControl.setPosition('bottomright');
  letmapmap.fitBounds(letmapallmarkers.getBounds(), {
      padding: [50, 50]
  });

  $(".cellPOI").click(function() {
      var curMarker = $(this).attr('id');
      var markerParts = curMarker.split('_');
      var markerID = markerParts[1];
      var objMarker = eval('letmapm' + markerID);
      objMarker.togglePopup();
  });
});