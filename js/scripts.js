var map;
			var layer_0;
			function initialize() {
				map = new google.maps.Map(document.getElementById('map'), {
					center : new google.maps.LatLng(40.738403300395556, -73.89333910571293),
					zoom : 11
				});
				var style = [{
					featureType : 'all',
					elementType : 'all',
					stylers : [{
						saturation : -59
					}]
				}, {
					featureType : 'road.highway',
					elementType : 'all',
					stylers : [{
						visibility : 'off'
					}]
				}];
				var styledMapType = new google.maps.StyledMapType(style, {
					map : map,
					name : 'Styled Map'
				});
				map.mapTypes.set('map-style', styledMapType);
				map.setMapTypeId('map-style');
				layer_0 = new google.maps.FusionTablesLayer({
					query : {
						select : "col9",
						from : "1_klQla8Vf7wuZD_3ttg2GxhLgZTjzkpvBl217Kt9"
					},
					map : map,
					styleId : 2,
					templateId : 2
				});
			}

			function changeMap_0() {
				var whereClause;
				var searchString = document.getElementById('search-string_0').value.replace(/'/g, "\\'");
				if (searchString != '--Select--') {
					whereClause = "'lines' LIKE '%" + searchString + "%'";
				}
				layer_0.setOptions({
					query : {
						select : "col9",
						from : "1_klQla8Vf7wuZD_3ttg2GxhLgZTjzkpvBl217Kt9",
						where : whereClause
					}
				});
			}
			

			google.maps.event.addDomListener(window, 'load', initialize);