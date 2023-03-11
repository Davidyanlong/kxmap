export default {
	"version" : 8,
	"sprite" : "../sprites/sprite",
	"glyphs" : "../fonts/{fontstack}/{range}.pbf",
	"sources" : {
		"esri" : {
			"type" : "vector",
			"url" : "../../"
		}
	},
	"layers" : [{
			"id" : "Land/Not ice",
			"type" : "fill",
			"source" : "esri",
			"source-layer" : "Land",
			"filter" : ["==", "_symbol", 0],
			"minzoom" : 0,
			"layout" : {},
			"paint" : {
				"fill-color" : "#f7f6d5"
			}
		}, {
			"id" : "Land/Ice",
			"type" : "fill",
			"source" : "esri",
			"source-layer" : "Land",
			"filter" : ["==", "_symbol", 1],
			"minzoom" : 0,
			"layout" : {},
			"paint" : {
				"fill-color" : "#FFFFFF"
			}
        }, {
			"id" : "Urban area",
			"type" : "fill",
			"source" : "esri",
			"source-layer" : "Urban area",
			"minzoom" : 5,
            "maxzoom" : 12,
			"layout" : {},
			"paint" : {
                "fill-antialias" : false,
                "fill-color" : {
					"stops" : [[9, "#e3debe"], [12, "#f7f6d5"]]
				}
			}
        }, {
			"id" : "Vegetation small scale/High density",
			"type" : "fill",
			"source" : "esri",
			"source-layer" : "Vegetation small scale",
			"filter" : ["==", "_symbol", 0],
			"maxzoom" : 10,
			"layout" : {},
			"paint" : {
				"fill-color" : "#C9DE8C",
				"fill-opacity" : 0.2,
                "fill-antialias" : false
			}
		}, {
			"id" : "Vegetation small scale/Low density",
			"type" : "fill",
			"source" : "esri",
			"source-layer" : "Vegetation small scale",
			"filter" : ["==", "_symbol", 1],
			"maxzoom" : 10,
			"layout" : {},
			"paint" : {
				"fill-color" : "#A6C269",
				"fill-opacity" : 0.2,
                "fill-antialias" : false
			}
		}, {
			"id" : "Openspace or forest",
			"type" : "fill",
			"source" : "esri",
			"source-layer" : "Openspace or forest",
			"minzoom" : 9,
			"layout" : {},
			"paint" : {
				"fill-color" : "#dee3bc",
                "fill-antialias" : false
			}
        }, {
			"id" : "Military",
			"type" : "fill",
			"source" : "esri",
			"source-layer" : "Military",
			"minzoom" : 6,
			"layout" : {},
			"paint" : {
				"fill-color" : "#E3E2CE",
				"fill-outline-color" : "#DAD9C5",
                "fill-antialias" : false
			} 
		}, {
			"id" : "Admin0 forest or park",
			"type" : "fill",
			"source" : "esri",
			"source-layer" : "Admin0 forest or park",
			"minzoom" : 6,
			"layout" : {},
			"paint" : {
				"fill-color" : "#dee3bc",
                "fill-antialias" : false
			}
		}, {
			"id" : "Admin1 forest or park",
			"type" : "fill",
			"source" : "esri",
			"source-layer" : "Admin1 forest or park",
			"minzoom" : 6,
			"layout" : {},
			"paint" : {
				"fill-color" : "#dee3bc",
                "fill-antialias" : false
			}
        }, {
			"id" : "Zoo",
			"type" : "fill",
			"source" : "esri",
			"source-layer" : "Zoo",
			"minzoom" : 11,
			"layout" : {},
			"paint" : {
				"fill-color" : "#dee3bc"
			}
        }, {
			"id" : "Port",
			"type" : "fill",
			"source" : "esri",
			"source-layer" : "Port",
            "minzoom" : 13,
			"layout" : {},
			"paint" : {
				"fill-color" : "#E3E2CE",
				"fill-outline-color" : "#DAD9C5"
			}
		}, {
			"id" : "Transportation",
			"type" : "fill",
			"source" : "esri",
			"source-layer" : "Transportation",
			"minzoom" : 13,
			"layout" : {},
			"paint" : {
				"fill-color" : "#E3E2CE",
				"fill-outline-color" : "#DAD9C5"
			}
        }, {
			"id" : "Industry",
			"type" : "fill",
			"source" : "esri",
			"source-layer" : "Industry",
			"minzoom" : 13,
			"layout" : {},
			"paint" : {
				"fill-color" : "#E3E2CE",
				"fill-outline-color" : "#DAD9C5"
			}
        }, {
			"id" : "Indigenous",
			"type" : "fill",
			"source" : "esri",
			"source-layer" : "Indigenous",
			"minzoom" : 7,
			"layout" : {},
			"paint" : {
				"fill-color" : "#ede4c5",
                "fill-antialias" : false
			}
        }, {
			"id" : "Golf course",
			"type" : "fill",
			"source" : "esri",
			"source-layer" : "Golf course",
			"minzoom" : 11,
			"layout" : {},
			"paint" : {
				"fill-color" : "#E3ECBF",
				"fill-outline-color" : "#DBE2B8"
			}
        }, {
			"id" : "Airport/Airport property",
			"type" : "fill",
			"source" : "esri",
			"source-layer" : "Airport",
			"filter" : ["==", "_symbol", 1],
			"minzoom" : 9,
			"layout" : {},
			"paint" : {
				"fill-color" : "#E3E2CE",
				"fill-outline-color" : "#C5C4B0"
			}
		}, {
			"id" : "Airport/Airport runway",
			"type" : "fill",
			"source" : "esri",
			"source-layer" : "Airport",
			"filter" : ["==", "_symbol", 0],
			"minzoom" : 11,
			"layout" : {},
			"paint" : {
				"fill-color" : "#D8D7C3"
			}
        }, {
			"id" : "Retail",
			"type" : "fill",
			"source" : "esri",
			"source-layer" : "Retail",
			"minzoom" : 13,
			"layout" : {},
			"paint" : {
				"fill-color" : "#F6E5B7"
			}
        }, {
			"id" : "Education",
			"type" : "fill",
			"source" : "esri",
			"source-layer" : "Education",
			"minzoom" : 11,
			"layout" : {},
			"paint" : {
				"fill-color" : "#E9E9AB"
			}    
		}, {
			"id" : "Medical",
			"type" : "fill",
			"source" : "esri",
			"source-layer" : "Medical",
			"minzoom" : 11,
			"layout" : {},
			"paint" : {
				"fill-color" : "#F7DFB9",
				"fill-outline-color" : "#FFFFFF"
			}
        }, {
			"id" : "Park or farming",
			"type" : "fill",
			"source" : "esri",
			"source-layer" : "Park or farming",
			"minzoom" : 11,
			"layout" : {},
			"paint" : {
				"fill-color" : "#dee3bc"
			}
        }, {
			"id" : "Water and wastewater",
			"type" : "fill",
			"source" : "esri",
			"source-layer" : "Water and wastewater",
			"minzoom" : 13,
			"layout" : {},
			"paint" : {
				"fill-color" : "#E3E2CE",
				"fill-outline-color" : "#DAD9C5"
			} 
		}, {
			"id" : "Freight",
			"type" : "fill",
			"source" : "esri",
			"source-layer" : "Freight",
			"minzoom" : 13,
			"layout" : {},
			"paint" : {
				"fill-color" : "#E8DEBB"
			}
		}, {
			"id" : "Cemetery",
			"type" : "fill",
			"source" : "esri",
			"source-layer" : "Cemetery",
			"minzoom" : 13,
			"layout" : {},
			"paint" : {
				"fill-color" : "#E3ECBF"
			} 
        }, {
			"id" : "Landmark",
			"type" : "fill",
			"source" : "esri",
			"source-layer" : "Landmark",
			"minzoom" : 13,
			"layout" : {},
			"paint" : {
				"fill-color" : "#F6E5B7"
			}
        }, {
			"id" : "Finance",
			"type" : "fill",
			"source" : "esri",
			"source-layer" : "Finance",
			"minzoom" : 13,
			"layout" : {},
			"paint" : {
				"fill-color" : "#E8DEBB"
			}
        }, {
			"id" : "Government",
			"type" : "fill",
			"source" : "esri",
			"source-layer" : "Government",
			"minzoom" : 13,
			"layout" : {},
			"paint" : {
				"fill-color" : "#E8DEBB"
			} 
		}, {
			"id" : "Emergency",
			"type" : "fill",
			"source" : "esri",
			"source-layer" : "Emergency",
			"minzoom" : 13,
			"layout" : {},
			"paint" : {
				"fill-color" : "#E8DEBB"
			}
		}, {
			"id" : "Pedestrian",
			"type" : "fill",
			"source" : "esri",
			"source-layer" : "Pedestrian",
			"minzoom" : 13,
			"layout" : {},
			"paint" : {
				"fill-color" : "#E8DEBB"
			}
        }, {
			"id" : "Beach",
			"type" : "fill",
			"source" : "esri",
			"source-layer" : "Beach",
			"minzoom" : 13,
			"layout" : {},
			"paint" : {
				"fill-pattern" : "Water area/Playa"
			}
        }, {
			"id" : "Special area of interest/Green openspace",
			"type" : "fill",
			"source" : "esri",
			"source-layer" : "Special area of interest",
			"filter" : ["==", "_symbol", 11],
			"minzoom" : 14,
			"layout" : {},
			"paint" : {
				"fill-color" : "#DBE0B2"
			}
		}, {
			"id" : "Special area of interest/Grass",
			"type" : "fill",
			"source" : "esri",
			"source-layer" : "Special area of interest",
			"filter" : ["==", "_symbol", 8],
			"minzoom" : 14,
			"layout" : {},
			"paint" : {
                "fill-color" : {
					"stops" : [[14, "#d1deb8"], [15, "#C2D69C"]]
				}
			}
        }, {
			"id" : "Special area of interest/Field or court exterior",
			"type" : "fill",
			"source" : "esri",
			"source-layer" : "Special area of interest",
			"filter" : ["==", "_symbol", 5],
			"minzoom" : 14,
			"layout" : {},
			"paint" : {
				"fill-color" : {
					"stops" : [[14, "#d1deb8"], [15, "#C2D69C"]]
				}
			}   
        }, {
			"id" : "Special area of interest/Football field or court",
			"type" : "fill",
			"source" : "esri",
			"source-layer" : "Special area of interest",
			"filter" : ["==", "_symbol", 4],
			"minzoom" : 14,
			"layout" : {},
			"paint" : {
				"fill-color" : {
					"stops" : [[14, "#d1deb8"], [15, "#C2D69C"]]
				},
                "fill-outline-color" : {
					"stops" : [[14, "#e1e8e0"], [15, "#ffffff"]]
				}
			}   
        }, {
			"id" : "Special area of interest/Baseball field or other grounds",
			"type" : "fill",
			"source" : "esri",
			"source-layer" : "Special area of interest",
			"filter" : ["==", "_symbol", 1],
			"minzoom" : 14,
			"layout" : {},
			"paint" : {
				"fill-color" : {
					"stops" : [[14, "#d1deb8"], [15, "#C2D69C"]]
				},
                "fill-outline-color" : {
					"stops" : [[14, "#c3d0ab"], [15, "#A8BD82"]]
				}
			}
        }, {
            "id" : "Marine area/bathymetry depth 1",
			"type" : "fill",
			"source" : "esri",
			"source-layer" : "Marine area",
			"minzoom" : 0,
			"layout" : {},
			"paint" : {
                "fill-antialias" : false,
				"fill-color" : {
					"stops" : [[8, "#DCF3FC"], [11, "#BFD9F2"]]
				}
			}
		}, {
			"id" : "Bathymetry/depth 2 (shallow water)",
			"type" : "fill",
			"source" : "esri",
			"source-layer" : "Bathymetry",
			"filter" : ["==", "_symbol", 0],
			"maxzoom" : 11,
			"layout" : {},
			"paint" : {
                "fill-antialias" : false,
				"fill-color" : {
					"stops" : [[8, "#CAECFA"], [11, "#BFD9F2"]]
				}
			}
		}, {
			"id" : "Bathymetry/depth 3",
			"type" : "fill",
			"source" : "esri",
			"source-layer" : "Bathymetry",
			"filter" : ["==", "_symbol", 1],
			"maxzoom" : 11,
			"layout" : {},
			"paint" : {
                "fill-antialias" : false,
				"fill-color" : {
					"stops" : [[8, "#BAE6F7"], [11, "#BFD9F2"]]
				}
			}
		}, {
			"id" : "Bathymetry/depth 4",
			"type" : "fill",
			"source" : "esri",
			"source-layer" : "Bathymetry",
			"filter" : ["==", "_symbol", 2],
			"maxzoom" : 11,
			"layout" : {},
			"paint" : {
                "fill-antialias" : false,
				"fill-color" : {
					"stops" : [[8, "#A9DFF5"], [11, "#BFD9F2"]]
				}
			}
		}, {
			"id" : "Bathymetry/depth 5",
			"type" : "fill",
			"source" : "esri",
			"source-layer" : "Bathymetry",
			"filter" : ["==", "_symbol", 3],
			"maxzoom" : 11,
			"layout" : {},
			"paint" : {
                "fill-antialias" : false,
				"fill-color" : {
					"stops" : [[8, "#99D9F2"], [11, "#BFD9F2"]]
				}
			}
		}, {
			"id" : "Bathymetry/depth 6",
			"type" : "fill",
			"source" : "esri",
			"source-layer" : "Bathymetry",
			"filter" : ["==", "_symbol", 4],
			"maxzoom" : 11,
			"layout" : {},
			"paint" : {
                "fill-antialias" : false,
				"fill-color" : {
					"stops" : [[8, "#89D2F0"], [11, "#BFD9F2"]]
				}
			}
		}, {
			"id" : "Bathymetry/depth 7 (deep water)",
			"type" : "fill",
			"source" : "esri",
			"source-layer" : "Bathymetry",
			"filter" : ["==", "_symbol", 5],
			"maxzoom" : 11,
			"layout" : {},
			"paint" : {
                "fill-antialias" : false,
				"fill-color" : {
					"stops" : [[8, "#78CCF0"], [11, "#BFD9F2"]]
				}
			}
        }, {
			"id" : "Water line small scale",
			"type" : "line",
			"source" : "esri",
			"source-layer" : "Water line small scale",
			"minzoom" : 1,
			"maxzoom" : 5,
			"layout" : {
				"line-join" : "round"
			},
			"paint" : {
				"line-color" : "#99D9F2",
				"line-width" : {
					"base" : 1.2,
					"stops" : [[1, 0.5], [5, 1.33]]
				}
			}
        }, {
			"id" : "Water line medium scale",
			"type" : "line",
			"source" : "esri",
			"source-layer" : "Water line medium scale",
			"minzoom" : 5,
			"maxzoom" : 7,
			"layout" : {
				"line-join" : "round"
			},
			"paint" : {
				"line-color" : "#99D9F2",
				"line-width" : {
					"base" : 1.2,
					"stops" : [[5, 0.5], [7, 1.33]]
				}
			}
        }, {
			"id" : "Water line large scale",
			"type" : "line",
			"source" : "esri",
			"source-layer" : "Water line large scale",
			"minzoom" : 7,
			"maxzoom" : 11,
			"layout" : {
				"line-join" : "round"
			},
			"paint" : {
                "line-color" : {
					"stops" : [[7, "#99D9F2"], [11, "#BFD9F2"]]
				},
				"line-width" : {
					"base" : 1.2,
					"stops" : [[7, 1], [11, 1.33]]
				}
            }
        }, {
			"id" : "Water line/Canal or ditch",
			"type" : "line",
			"source" : "esri",
			"source-layer" : "Water line",
			"filter" : ["==", "_symbol", 1],
			"minzoom" : 11,
			"layout" : {
				"line-join" : "round"
			},
			"paint" : {
				"line-color" : "#BFD9F2",
                "line-width" : {
					"base" : 1.2,
					"stops" : [[11, 2], [14, 2], [17, 2]]
				},
				"line-dasharray" : [7.5, 2.5]
			}
        }, {
			"id" : "Water line/Stream or river intermittent",
			"type" : "line",
			"source" : "esri",
			"source-layer" : "Water line",
			"filter" : ["==", "_symbol", 4],
			"minzoom" : 11,
			"layout" : {
				"line-join" : "round"
			},
			"paint" : {
				"line-color" : "#BFD9F2",
				"line-dasharray" : [10.67, 1.78],
				"line-width" : {
					"base" : 1.2,
					"stops" : [[11, 1], [14, 1.33], [17, 2]]
				}
			}
        }, {
			"id" : "Water line/Stream or river",
			"type" : "line",
			"source" : "esri",
			"source-layer" : "Water line",
			"filter" : ["==", "_symbol", 0],
			"minzoom" : 11,
			"layout" : {
				"line-cap" : "round",
				"line-join" : "round"
			},
			"paint" : {
				"line-color" : "#BFD9F2",
				"line-width" : {
					"base" : 1.2,
					"stops" : [[11, 1], [14, 1.33], [17, 2.67]]
				}
			}
        }, {
			"id" : "Water area small scale",
			"type" : "fill",
			"source" : "esri",
			"source-layer" : "Water area small scale",
			"minzoom" : 1,
			"maxzoom" : 5,
			"layout" : {},
			"paint" : {
				"fill-color" : {"stops" : [[1, "#A9DFF5"], [5, "#BAE6F7"]]},
                "fill-outline-color" : {"stops" : [[1, "#A9DFF5"], [5, "#BAE6F7"]]}
			}
        }, {
			"id" : "Water area medium scale/Lake intermittent",
			"type" : "fill",
			"source" : "esri",
			"source-layer" : "Water area medium scale",
			"filter" : ["==", "_symbol", 1],
			"minzoom" : 5,
			"maxzoom" : 7,
			"layout" : {},
			"paint" : {
				"fill-pattern" : "Water area medium scale/Lake intermittent"
			}
        }, {
			"id" : "Water area medium scale/Lake or river",
			"type" : "fill",
			"source" : "esri",
			"source-layer" : "Water area medium scale",
			"filter" : ["==", "_symbol", 0],
			"minzoom" : 5,
			"maxzoom" : 7,
			"layout" : {},
			"paint" : {
				"fill-color" : {"stops" : [[5, "#BAE6F7"], [7, "#caecfa"]]}
			}
        }, {
			"id" : "Water area large scale/Lake intermittent",
			"type" : "fill",
			"source" : "esri",
			"source-layer" : "Water area large scale",
			"filter" : ["==", "_symbol", 1],
			"minzoom" : 7,
			"maxzoom" : 11,
			"layout" : {},
			"paint" : {
				"fill-pattern" : "Water area large scale/Lake intermittent"
			}
		}, {
			"id" : "Water area large scale/Lake or river",
			"type" : "fill",
			"source" : "esri",
			"source-layer" : "Water area large scale",
			"filter" : ["==", "_symbol", 0],
			"minzoom" : 7,
			"maxzoom" : 11,
			"layout" : {},
			"paint" : {
				"fill-color" : {"stops" : [[7, "#caecfa"], [11, "#BFD9F2"]]}
			}
		}, {
			"id" : "Water area/Lake, river or bay",
			"type" : "fill",
			"source" : "esri",
			"source-layer" : "Water area",
			"filter" : ["==", "_symbol", 7],
			"minzoom" : 11,
			"layout" : {},
			"paint" : {
				"fill-color" : "#BFD9F2",
				"fill-outline-color" : "#BFD9F2"
			}
		}, {
			"id" : "Water area/Lake or river intermittent",
			"type" : "fill",
			"source" : "esri",
			"source-layer" : "Water area",
			"filter" : ["==", "_symbol", 6],
			"minzoom" : 11,
			"layout" : {},
			"paint" : {
				"fill-pattern" : "Water area/Lake or river intermittent"
			}
        }, {
			"id" : "Water area/Swamp or marsh",
			"type" : "fill",
			"source" : "esri",
			"source-layer" : "Water area",
			"filter" : ["==", "_symbol", 3],
			"minzoom" : 11,
			"layout" : {},
			"paint" : {
				"fill-pattern" : "Water area/Swamp or marsh"
			}
        }, {
			"id" : "Water area/Playa",
			"type" : "fill",
			"source" : "esri",
			"source-layer" : "Water area",
			"filter" : ["==", "_symbol", 1],
			"minzoom" : 12,
			"layout" : {},
			"paint" : {
				"fill-pattern" : "Water area/Playa"
			}
		}, {
			"id" : "Water area/Ice mass",
			"type" : "fill",
			"source" : "esri",
			"source-layer" : "Water area",
			"filter" : ["==", "_symbol", 2],
			"minzoom" : 11,
			"layout" : {},
			"paint" : {
				"fill-pattern" : "Water area/Ice mass"
			}
        }, {
            "id" : "Coastline",
		    "type" : "line",
            "source" : "esri",
		    "source-layer" : "Coastline",
		    "maxzoom" : 9,
		    "layout" : {
			     "line-cap" : "round",
			     "line-join" : "round"
		    },
		    "paint" : {
                 "line-color" : {
					"stops" : [[7, "#d6d6bc"], [9, "#DCF3FC"]]
				},
			     "line-width" : 1
            }
        }, {
			"id" : "Special area of interest/Athletic track",
			"type" : "fill",
			"source" : "esri",
			"source-layer" : "Special area of interest",
			"filter" : ["==", "_symbol", 0],
			"minzoom" : 14,
			"layout" : {},
			"paint" : {
                "fill-color" : {
					"stops" : [[14, "#ffd5d5"], [15, "#ffcccc"]]
				},
				"fill-outline-color" : "#EEE6D6"
			}    
        }, {
			"id" : "Special area of interest/Hardcourt",
			"type" : "fill",
			"source" : "esri",
			"source-layer" : "Special area of interest",
			"filter" : ["==", "_symbol", 10],
			"minzoom" : 14,
			"layout" : {},
			"paint" : {
				"fill-color" : "#DEDED1",
				"fill-outline-color" : "#CCCCC0"
			}    
        }, {
			"id" : "Special area of interest/Parking",
			"type" : "fill",
			"source" : "esri",
			"source-layer" : "Special area of interest",
			"filter" : ["==", "_symbol", 15],
			"minzoom" : 15,
			"layout" : {},
			"paint" : {
				"fill-color" : "#DEDED1"
			}     
        }, {
			"id" : "Special area of interest/Bike, walk or pedestrian",
			"type" : "fill",
			"source" : "esri",
			"source-layer" : "Special area of interest",
			"filter" : ["==", "_symbol", 2],
			"minzoom" : 15,
			"layout" : {},
			"paint" : {
				"fill-color" : "#f7f6dd",
                "fill-outline-color" : "#e6e5d6"
			}     
        }, {
			"id" : "Special area of interest/Curb",
			"type" : "fill",
			"source" : "esri",
			"source-layer" : "Special area of interest",
			"filter" : ["==", "_symbol", 3],
			"minzoom" : 14,
			"layout" : {},
			"paint" : {
				"fill-color" : "#FFFFFF"
			}
        }, {
			"id" : "Special area of interest/Garden path",
			"type" : "fill",
			"source" : "esri",
			"source-layer" : "Special area of interest",
			"filter" : ["==", "_symbol", 12],
			"minzoom" : 14,
			"layout" : {},
			"paint" : {
				"fill-color" : "#FFFFFF",
				"fill-outline-color" : "#E3DED6"
			}
        }, {
			"id" : "Special area of interest/Mulch or dirt",
			"type" : "fill",
			"source" : "esri",
			"source-layer" : "Special area of interest",
			"filter" : ["==", "_symbol", 14],
			"minzoom" : 14,
			"layout" : {},
			"paint" : {
				"fill-color" : "#FCEDC2"
			}
		}, {
			"id" : "Special area of interest/Groundcover",
			"type" : "fill",
			"source" : "esri",
			"source-layer" : "Special area of interest",
			"filter" : ["==", "_symbol", 13],
			"minzoom" : 17,
			"layout" : {},
			"paint" : {
				"fill-color" : "#DBE0B2"
			}
		}, {
			"id" : "Special area of interest/Rock or gravel",
			"type" : "fill",
			"source" : "esri",
			"source-layer" : "Special area of interest",
			"filter" : ["==", "_symbol", 16],
			"minzoom" : 17,
			"layout" : {},
			"paint" : {
				"fill-color" : "#FCEDC2"
			}
        }, {
			"id" : "Special area of interest/Sand",
			"type" : "fill",
			"source" : "esri",
			"source-layer" : "Special area of interest",
			"filter" : ["==", "_symbol", 6],
			"minzoom" : 15,
			"layout" : {},
			"paint" : {
				"fill-pattern" : "Water area/Playa"
			}
        }, {
			"id" : "Special area of interest/Water",
			"type" : "fill",
			"source" : "esri",
			"source-layer" : "Special area of interest",
			"filter" : ["==", "_symbol", 7],
			"minzoom" : 14,
			"layout" : {},
			"paint" : {
				"fill-color" : "#BFD9F2"
			}   
        }, {
			"id" : "Special area of interest line/Dock or pier",
			"type" : "line",
			"source" : "esri",
			"source-layer" : "Special area of interest line",
			"filter" : ["==", "_symbol", 0],
			"minzoom" : 17,
			"layout" : {
				"line-cap" : "round",
				"line-join" : "round"
			},
			"paint" : {
				"line-color" : "#FFFFFF",
				"line-width" : 0.67
			}
		}, {
			"id" : "Special area of interest line/Parking lot",
			"type" : "line",
			"source" : "esri",
			"source-layer" : "Special area of interest line",
			"filter" : ["==", "_symbol", 5],
			"minzoom" : 16,
			"layout" : {
				"line-cap" : "round",
				"line-join" : "round"
			},
			"paint" : {
				"line-color" : "#FFFFFF",
				"line-width" : 0.67
			}
		}, {
			"id" : "Special area of interest line/Sports field",
			"type" : "line",
			"source" : "esri",
			"source-layer" : "Special area of interest line",
			"filter" : ["==", "_symbol", 6],
			"minzoom" : 16,
			"layout" : {
				"line-cap" : "round",
				"line-join" : "round"
			},
			"paint" : {
				"line-color" : "#FFFFFF",
				"line-width" : 0.67
			} 
        }, {
			"id" : "Railroad/casing",
			"type" : "line",
			"source" : "esri",
			"source-layer" : "Railroad",
			"minzoom" : 11,
			"layout" : {
				"line-join" : "round"
			},
			"paint" : {
				"line-color" : "#F2F0CF",
				"line-width" : 3.33
			}
		}, {
			"id" : "Railroad/line",
			"type" : "line",
			"source" : "esri",
			"source-layer" : "Railroad",
			"minzoom" : 11,
			"layout" : {
				"line-join" : "round"
			},
			"paint" : {
				"line-color" : "#d2cfc6",
				"line-width" : 1.33
			}      
		}, {
			"id" : "Railroad/symbol",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Railroad",
			"minzoom" : 11,
			"layout" : {
				"symbol-placement" : "line",
				"symbol-avoid-edges" : true,
				"icon-image" : "Railroad/0",
                "icon-rotate" : 90,
				"symbol-spacing" : 20,
				"icon-rotation-alignment" : "map",
				"icon-allow-overlap" : true,
				"icon-padding" : 1
			},
			"paint" : {}
        }, {
			"id" : "Ferry/Rail ferry/casing",
			"type" : "line",
			"source" : "esri",
			"source-layer" : "Ferry",
			"filter" : ["all", ["==", "_symbol", 1], ["!in", "Viz", 3]],
			"minzoom" : 11,
			"layout" : {
				"line-join" : "round"
			},
			"paint" : {
				"line-color" : "#F2F0CF",
				"line-width" : {
					"base" : 1.2,
					"stops" : [[11, 3.33], [14, 4], [17, 4]]
				}
			}
		}, {
			"id" : "Ferry/Rail ferry/line",
			"type" : "line",
			"source" : "esri",
			"source-layer" : "Ferry",
			"filter" : ["all", ["==", "_symbol", 1], ["!in", "Viz", 3]],
			"minzoom" : 11,
			"layout" : {
				"line-join" : "round"
			},
			"paint" : {
				"line-color" : "#d2cfc6",
				"line-width" : 1.33
			}
		}, {
			"id" : "Ferry/Rail ferry/symbol",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Ferry",
			"filter" : ["all", ["==", "_symbol", 1], ["!in", "Viz", 3]],
			"minzoom" : 11,
			"layout" : {
				"symbol-placement" : "line",
				"symbol-avoid-edges" : true,
				"icon-image" : "Railroad/0",
				"symbol-spacing" : 20,
				"icon-rotation-alignment" : "map",
				"icon-allow-overlap" : true,
                "icon-rotate" : 90,
				"icon-padding" : 1
			},
			"paint" : {}
        }, {
			"id" : "Ferry/Ferry",
			"type" : "line",
			"source" : "esri",
			"source-layer" : "Ferry",
			"filter" : ["all", ["==", "_symbol", 0], ["!in", "Viz", 3]],
			"minzoom" : 11,
			"layout" : {
				"line-join" : "round"
			},
			"paint" : {
				"line-color" : "#8DB3D9",
				"line-width" : {
					"base" : 1.2,
					"stops" : [[11, 1.33], [14, 1.47]]
				},
				"line-dasharray" : [6.06, 3.64]
			}
        }, {
            "id" : "Building/outer shadow",
            "type" : "fill",
            "source" : "esri",
            "source-layer" : "Building",
            "minzoom" : 16,
            "layout" : {},
            "paint" : {
                "fill-color" : "#A6A697",
                "fill-opacity" : 0.2,
                "fill-translate" : {"stops" : [[15, [0,0]], [18, [6,6]]]},
                "fill-translate-anchor" : "viewport"
            }
        }, {
            "id" : "Building/inner shadow",
            "type" : "fill",
            "source" : "esri",
            "source-layer" : "Building",
            "minzoom" : 16,
            "layout" : {},
            "paint" : {
                "fill-color" : "#A6A697",
                "fill-opacity" : 0.13,
                "fill-translate" : {"stops" : [[15, [0,0]], [18, [-4,4]]]},
                "fill-translate-anchor" : "viewport"
            }
		}, {
			"id" : "Building/fill",
			"type" : "fill",
			"source" : "esri",
			"source-layer" : "Building",
			"minzoom" : 15,
			"layout" : {},
			"paint" : {
				"fill-color" : "#FAFAE8",
				"fill-outline-color" : "#D9D1B8"
			}
		}, {
			"id" : "Trail or path",
			"type" : "line",
			"source" : "esri",
			"source-layer" : "Trail or path",
			"minzoom" : 15,
			"layout" : {
				"line-cap" : "round",
				"line-join" : "round"
			},
			"paint" : {
				"line-color" : "#FDFDFD",
				"line-width" : {
					"base" : 1.2,
					"stops" : [[15, 1.6], [18, 8], [22, 22]]
				}
			}
		}, {
			"id" : "Road/4WD/casing",
			"type" : "line",
			"source" : "esri",
			"source-layer" : "Road",
			"filter" : ["all", ["==", "_symbol", 10], ["!in", "Viz", 3]],
			"minzoom" : 13,
			"layout" : {
				"line-join" : "round"
			},
			"paint" : {
				"line-color" : "#F8F6D9",
				"line-width" : {
					"base" : 1.2,
					"stops" : [[13, 1.33], [14, 2], [18, 21], [22, 36]]
				}
			}
        }, {
			"id" : "Road/Service/casing",
			"type" : "line",
			"source" : "esri",
			"source-layer" : "Road",
			"filter" : ["all", ["==", "_symbol", 8], ["!in", "Viz", 3]],
			"minzoom" : 13,
			"layout" : {
				"line-join" : "round"
			},
			"paint" : {
				"line-color" : "#D4CFC3",
				"line-width" : {
					"base" : 1.2,
					"stops" : [[13, 1.5], [14, 1.5], [15, 3], [16, 5], [17, 8], [18, 17], [22, 25]]
				}
			}    
		}, {
			"id" : "Road/Local/casing",
			"type" : "line",
			"source" : "esri",
			"source-layer" : "Road",
			"filter" : ["all", ["==", "_symbol", 7], ["!in", "Viz", 3]],
			"minzoom" : 12,
			"layout" : {
				"line-join" : "round"
			},
			"paint" : {
                "line-color" : {
					"stops" : [[12, "#F2EFCC"], [13, "#CCC9BE"]]
				},
				"line-width" : {
					"base" : 1.2,
					"stops" : [[12, 2], [14, 4.67], [18, 25], [22, 40]]
				}
			}
        }, {
			"id" : "Road/Minor/casing",
			"type" : "line",
			"source" : "esri",
			"source-layer" : "Road",
			"filter" : ["all", ["==", "_symbol", 5], ["!in", "Viz", 3]],
			"minzoom" : 11,
			"layout" : {
				"line-join" : "round"
			},
			"paint" : {
				"line-color" : "#EBA382",
				"line-width" : {
					"base" : 1.2,
					"stops" : [[11, 1.5], [14, 4.67], [18, 27], [22, 42]]
				}
			}
		}, {
			"id" : "Road/Minor, ramp or traffic circle/casing",
			"type" : "line",
			"source" : "esri",
			"source-layer" : "Road",
			"filter" : ["all", ["==", "_symbol", 6], ["!in", "Viz", 3]],
			"minzoom" : 11,
			"layout" : {
				"line-join" : "round"
			},
			"paint" : {
				"line-color" : "#EBA382",
				"line-width" : {
					"base" : 1.2,
					"stops" : [[11, 1.5], [14, 4], [18, 17], [22, 32]]
				}
			}   
        }, {
			"id" : "Road/Major/casing",
			"type" : "line",
			"source" : "esri",
			"source-layer" : "Road",
			"filter" : ["all", ["==", "_symbol", 3], ["!in", "Viz", 3]],
			"minzoom" : 10,
			"layout" : {
				"line-join" : "round"
			},
			"paint" : {
				"line-color" : "#CC8460",
				"line-width" : {
					"base" : 1.2,
					"stops" : [[10, 1], [14, 7.3], [18, 29], [22, 44]]
				}
			}
		}, {
			"id" : "Road/Major, ramp or traffic circle/casing",
			"type" : "line",
			"source" : "esri",
			"source-layer" : "Road",
			"filter" : ["all", ["==", "_symbol", 4], ["!in", "Viz", 3]],
			"minzoom" : 10,
			"layout" : {
				"line-join" : "round"
			},
			"paint" : {
				"line-color" : "#CC8460",
				"line-width" : {
					"base" : 1.2,
					"stops" : [[10, 1.5], [14, 4.67], [18, 19], [22, 34]]
				}
			}    
        }, {
			"id" : "Road/Highway/casing",
			"type" : "line",
			"source" : "esri",
			"source-layer" : "Road",
			"filter" : ["all", ["==", "_symbol", 1], ["!in", "Viz", 3]],
			"minzoom" : 9,
			"layout" : {
				"line-join" : "round"
			},
			"paint" : {
				"line-color" : "#B36D54",
				"line-width" : {
					"base" : 1.2,
					"stops" : [[9, 1], [14, 7.3], [18, 31], [22, 46]]
				}
			}
		}, {
			"id" : "Road/Freeway Motorway/casing",
			"type" : "line",
			"source" : "esri",
			"source-layer" : "Road",
			"filter" : ["all", ["==", "_symbol", 0], ["!in", "Viz", 3]],
			"minzoom" : 9,
			"layout" : {
				"line-join" : "round"
			},
			"paint" : {
				"line-color" : "#B36D54",
				"line-width" : {
					"base" : 1.2,
					"stops" : [[9, 2], [14, 7.3], [18, 33], [22, 48]]
				}
			}
        }, {
			"id" : "Road/Freeway Motorway Highway, ramp or traffic circle/casing",
			"type" : "line",
			"source" : "esri",
			"source-layer" : "Road",
			"filter" : ["all", ["==", "_symbol", 2], ["!in", "Viz", 3]],
			"minzoom" : 9,
			"layout" : {
				"line-join" : "round"
			},
			"paint" : {
				"line-color" : "#B36D54",
				"line-width" : {
					"base" : 1.2,
					"stops" : [[9, 1.5], [14, 4.67], [18, 23], [22, 38]]
				}
			}  
		}, {
			"id" : "Road/Pedestrian",
			"type" : "line",
			"source" : "esri",
			"source-layer" : "Road",
			"filter" : ["all", ["==", "_symbol", 9], ["!in", "Viz", 3]],
			"minzoom" : 15,
			"layout" : {
				"line-cap" : "round",
				"line-join" : "round"
			},
			"paint" : {
				"line-color" : "#FDFDFD",
				"line-width" : {
					"base" : 1.2,
					"stops" : [[15, 1.6], [18, 8], [22, 22]]
				}
			}
		}, {
			"id" : "Road/4WD/line",
			"type" : "line",
			"source" : "esri",
			"source-layer" : "Road",
			"filter" : ["all", ["==", "_symbol", 10], ["!in", "Viz", 3]],
			"minzoom" : 13,
			"layout" : {
				"line-join" : "round"
			},
			"paint" : {
				"line-color" : "#e3e3c5",
				"line-width" : {
					"base" : 1.2,
					"stops" : [[13, 1], [14, 1], [18, 18], [22, 33]]
				}
			}
        }, {
			"id" : "Road/Service/line",
			"type" : "line",
			"source" : "esri",
			"source-layer" : "Road",
			"filter" : ["all", ["==", "_symbol", 8], ["!in", "Viz", 3]],
			"minzoom" : 13,
			"layout" : {
				"line-join" : "round"
			},
			"paint" : {
				"line-color" : "#FDFDFD",
				"line-width" : {
					"base" : 1.2,
					"stops" : [[13, 0.75], [14, 0.75], [15, 1.5], [16, 3], [17, 6], [18, 15], [22, 22]]
				}
			}      
		}, {
			"id" : "Road/Local/line",
			"type" : "line",
			"source" : "esri",
			"source-layer" : "Road",
			"filter" : ["all", ["==", "_symbol", 7], ["!in", "Viz", 3]],
			"minzoom" : 12,
			"layout" : {
				"line-join" : "round"
			},
			"paint" : {
                "line-color" : {
					"stops" : [[12, "#d4d3cd"], [13, "#FDFDFD"]]
				},
				"line-width" : {
					"base" : 1.2,
					"stops" : [[12, 0.5], [14, 2.67], [18, 22], [22, 37]]
				}
			}
		}, {
			"id" : "Road/Minor/line",
			"type" : "line",
			"source" : "esri",
			"source-layer" : "Road",
			"filter" : ["all", ["==", "_symbol", 5], ["!in", "Viz", 3]],
			"minzoom" : 9,
			"layout" : {
				"line-cap" : "round",
				"line-join" : "round"
			},
			"paint" : {
                "line-color" : {
					"stops" : [[10, "#ffd1b4"], [11, "#FAEDD4"]]
				},
				"line-width" : {
					"base" : 1.2,
					"stops" : [[10, 0.75], [14, 2.67], [18, 24], [22, 39]]
				}
			}
        }, {
			"id" : "Road/Minor, ramp or traffic circle/line",
			"type" : "line",
			"source" : "esri",
			"source-layer" : "Road",
			"filter" : ["all", ["==", "_symbol", 6], ["!in", "Viz", 3]],
			"minzoom" : 10,
			"layout" : {
				"line-cap" : "round",
				"line-join" : "round"
			},
			"paint" : {
				"line-color" : {
					"stops" : [[10, "#ffd1b4"], [11, "#FAEDD4"]]
				},
				"line-width" : {
					"base" : 1.2,
					"stops" : [[10, 0.75], [14, 2], [18, 14], [22, 29]]
				}
			}
		}, {
			"id" : "Road/Major/line",
			"type" : "line",
			"source" : "esri",
			"source-layer" : "Road",
			"filter" : ["all", ["==", "_symbol", 3], ["!in", "Viz", 3]],
			"minzoom" : 8,
			"layout" : {
				"line-cap" : "round",
				"line-join" : "round"
			},
			"paint" : {
                "line-color" : {
					"stops" : [[8, "#f7c6ad"], [9, "#F2BDA2"]]
				},
				"line-width" : {
					"base" : 1.2,
					"stops" : [[9, 0.4], [14, 5.3], [18, 26], [22, 41]]
				}
			}
		}, {
			"id" : "Road/Major, ramp or traffic circle/line",
			"type" : "line",
			"source" : "esri",
			"source-layer" : "Road",
			"filter" : ["all", ["==", "_symbol", 4], ["!in", "Viz", 3]],
			"minzoom" : 9,
			"layout" : {
				"line-cap" : "round",
				"line-join" : "round"
			},
			"paint" : {
				"line-color" : "#F2BDA2",
				"line-width" : {
					"base" : 1.2,
					"stops" : [[9, 0.75], [14, 2.67], [18, 16], [22, 31]]
				}
			}
        }, {
			"id" : "Road/Highway/line",
			"type" : "line",
			"source" : "esri",
			"source-layer" : "Road",
			"filter" : ["all", ["==", "_symbol", 1], ["!in", "Viz", 3]],
			"minzoom" : 6,
			"layout" : {
				"line-cap" : "round",
				"line-join" : "round"
			},
			"paint" : {
                "line-color" : {
					"stops" : [[6, "#eac3b2"], [7, "#E69973"]]
				},
				"line-width" : {
					"base" : 1.2,
					"stops" : [[7, 0.4], [14, 5.3], [18, 28], [22, 42]]
				}
			}
        }, {
			"id" : "Road/Freeway Motorway/line",
			"type" : "line",
			"source" : "esri",
			"source-layer" : "Road",
			"filter" : ["all", ["==", "_symbol", 0], ["!in", "Viz", 3]],
			"minzoom" : 4,
			"layout" : {
				"line-cap" : "round",
				"line-join" : "round"
			},
			"paint" : {
                "line-color" : {
					"stops" : [[4, "#e6beac"], [6, "#e69973"]]
				},
				"line-width" : {
					"base" : 1.2,
					"stops" : [[4, 0.4], [14, 5.3], [18, 30], [22, 45]]
				}
			} 
        }, {
			"id" : "Road/Freeway Motorway Highway, ramp or traffic circle/line",
			"type" : "line",
			"source" : "esri",
			"source-layer" : "Road",
			"filter" : ["all", ["==", "_symbol", 2], ["!in", "Viz", 3]],
			"minzoom" : 9,
			"layout" : {
				"line-cap" : "round",
				"line-join" : "round"
			},
			"paint" : {
				"line-color" : "#E69973",
				"line-width" : {
					"base" : 1.2,
					"stops" : [[9, 0.5], [14, 2.67], [18, 20], [22, 35]]
				}
			}
		}, {
			"id" : "Road tunnel/4WD/casing",
			"type" : "line",
			"source" : "esri",
			"source-layer" : "Road tunnel",
			"filter" : ["all", ["==", "_symbol", 10], ["!in", "Viz", 3]],
			"minzoom" : 13,
			"layout" : {
				"line-join" : "round"
			},
			"paint" : {
				"line-color" : "#F8F6D9",
				"line-opacity" : 0.5,
				"line-width" : {
					"base" : 1.2,
					"stops" : [[13, 1.33], [14, 2], [18, 21], [22, 36]]
				}
			}
        }, {
			"id" : "Road tunnel/Service/casing",
			"type" : "line",
			"source" : "esri",
			"source-layer" : "Road tunnel",
			"filter" : ["all", ["==", "_symbol", 8], ["!in", "Viz", 3]],
			"minzoom" : 13,
			"layout" : {
				"line-join" : "round"
			},
			"paint" : {
				"line-color" : "#D4CFC3",
				"line-opacity" : 0.5,
				"line-width" : {
					"base" : 1.2,
					"stops" : [[13, 1.5], [14, 1.5], [15, 3], [16, 5], [17, 8], [18, 17], [22, 25]]
				}
			} 
		}, {
			"id" : "Road tunnel/Local/casing",
			"type" : "line",
			"source" : "esri",
			"source-layer" : "Road tunnel",
			"filter" : ["all", ["==", "_symbol", 7], ["!in", "Viz", 3]],
			"minzoom" : 12,
			"layout" : {
				"line-join" : "round"
			},
			"paint" : {
				"line-opacity" : 0.5,
				"line-color" : {
					"stops" : [[12, "#F2EFCC"], [13, "#CCC9BE"]]
				},
				"line-width" : {
					"base" : 1.2,
					"stops" : [[12, 2], [14, 4.67], [18, 25], [22, 40]]
				}
			} 
        }, {
			"id" : "Road tunnel/Minor/casing",
			"type" : "line",
			"source" : "esri",
			"source-layer" : "Road tunnel",
			"filter" : ["all", ["==", "_symbol", 5], ["!in", "Viz", 3]],
			"minzoom" : 11,
			"layout" : {
				"line-join" : "round"
			},
			"paint" : {
				"line-color" : "#EBA382",
				"line-opacity" : 0.5,
				"line-width" : {
					"base" : 1.2,
					"stops" : [[11, 1.5], [14, 4.67], [18, 27], [22, 42]]
				}
			}    
        }, {
			"id" : "Road tunnel/Minor, ramp or traffic circle/casing",
			"type" : "line",
			"source" : "esri",
			"source-layer" : "Road tunnel",
			"filter" : ["all", ["==", "_symbol", 6], ["!in", "Viz", 3]],
			"minzoom" : 11,
			"layout" : {
				"line-join" : "round"
			},
			"paint" : {
				"line-color" : "#EBA382",
				"line-opacity" : 0.5,
				"line-width" : {
					"base" : 1.2,
					"stops" : [[11, 1.5], [14, 4], [18, 17], [22, 32]]
				}
			}    
        }, {
			"id" : "Road tunnel/Major/casing",
			"type" : "line",
			"source" : "esri",
			"source-layer" : "Road tunnel",
			"filter" : ["all", ["==", "_symbol", 3], ["!in", "Viz", 3]],
			"minzoom" : 10,
			"layout" : {
				"line-join" : "round"
			},
			"paint" : {
				"line-color" : "#CC8460",
				"line-opacity" : 0.5,
				"line-width" : {
					"base" : 1.2,
					"stops" : [[10, 1], [14, 7.3], [18, 29], [22, 44]]
				}
			}
		}, {
			"id" : "Road tunnel/Major, ramp or traffic circle/casing",
			"type" : "line",
			"source" : "esri",
			"source-layer" : "Road tunnel",
			"filter" : ["all", ["==", "_symbol", 4], ["!in", "Viz", 3]],
			"minzoom" : 10,
			"layout" : {
				"line-join" : "round"
			},
			"paint" : {
				"line-color" : "#CC8460",
				"line-opacity" : 0.5,
				"line-width" : {
					"base" : 1.2,
					"stops" : [[10, 1.5], [14, 4.67], [18, 19], [22, 34]]
				}
			}   
        }, {
			"id" : "Road tunnel/Highway/casing",
			"type" : "line",
			"source" : "esri",
			"source-layer" : "Road tunnel",
			"filter" : ["all", ["==", "_symbol", 1], ["!in", "Viz", 3]],
			"minzoom" : 9,
			"layout" : {
				"line-join" : "round"
			},
			"paint" : {
				"line-color" : "#B36D54",
				"line-opacity" : 0.5,
				"line-width" : {
					"base" : 1.2,
					"stops" : [[9, 1], [14, 7.3], [18, 31], [22, 46]]
				}
			}
		}, {
			"id" : "Road tunnel/Freeway Motorway/casing",
			"type" : "line",
			"source" : "esri",
			"source-layer" : "Road tunnel",
			"filter" : ["all", ["==", "_symbol", 0], ["!in", "Viz", 3]],
			"minzoom" : 9,
			"layout" : {
				"line-join" : "round"
			},
			"paint" : {
				"line-color" : "#B36D54",
				"line-opacity" : 0.5,
				"line-width" : {
					"base" : 1.2,
					"stops" : [[9, 2], [14, 7.3], [18, 33], [22, 48]]
				}
			}
		}, {
			"id" : "Road tunnel/Freeway Motorway Highway, ramp or traffic circle/casing",
			"type" : "line",
			"source" : "esri",
			"source-layer" : "Road tunnel",
			"filter" : ["all", ["==", "_symbol", 2], ["!in", "Viz", 3]],
			"minzoom" : 9,
			"layout" : {
				"line-join" : "round"
			},
			"paint" : {
				"line-color" : "#B36D54",
				"line-opacity" : 0.5,
				"line-width" : {
					"base" : 1.2,
					"stops" : [[9, 0.5], [14, 4.67], [18, 23], [22, 38]]
				}
			}    
		}, {
			"id" : "Road tunnel/Pedestrian",
			"type" : "line",
			"source" : "esri",
			"source-layer" : "Road tunnel",
			"filter" : ["all", ["==", "_symbol", 9], ["!in", "Viz", 3]],
			"minzoom" : 15,
			"layout" : {
				"line-cap" : "round",
				"line-join" : "round"
			},
			"paint" : {
				"line-color" : "#FDFDFD",
				"line-opacity" : 0.5,
				"line-width" : {
					"base" : 1.2,
					"stops" : [[15, 1.6], [18, 8], [22, 22]]
				}
			}
		}, {
			"id" : "Road tunnel/4WD/line",
			"type" : "line",
			"source" : "esri",
			"source-layer" : "Road tunnel",
			"filter" : ["all", ["==", "_symbol", 10], ["!in", "Viz", 3]],
			"minzoom" : 13,
			"layout" : {
				"line-join" : "round"
			},
			"paint" : {
				"line-color" : "#e3e3c5",
				"line-opacity" : 0.5,
				"line-width" : {
					"base" : 1.2,
					"stops" : [[13, 1], [14, 1], [18, 18], [22, 33]]
				}
			}
        }, {
			"id" : "Road tunnel/Service/line",
			"type" : "line",
			"source" : "esri",
			"source-layer" : "Road tunnel",
			"filter" : ["all", ["==", "_symbol", 8], ["!in", "Viz", 3]],
			"minzoom" : 13,
			"layout" : {
				"line-join" : "round"
			},
			"paint" : {
				"line-color" : "#FDFDFD",
				"line-opacity" : 0.5,
				"line-width" : {
					"base" : 1.2,
					"stops" : [[13, 0.75], [14, 0.75], [15, 1.5], [16, 3], [17, 6], [18, 15], [22, 22]]
				}
			}   
		}, {
			"id" : "Road tunnel/Local/line",
			"type" : "line",
			"source" : "esri",
			"source-layer" : "Road tunnel",
			"filter" : ["all", ["==", "_symbol", 7], ["!in", "Viz", 3]],
			"minzoom" : 12,
			"layout" : {
				"line-join" : "round"
			},
			"paint" : {
				"line-opacity" : 0.5,
				"line-color" : {
					"stops" : [[12, "#d4d3cd"], [13, "#FDFDFD"]]
				},
				"line-width" : {
					"base" : 1.2,
					"stops" : [[12, 0.5], [14, 2.67], [18, 22], [22, 37]]
				}
			}
        }, {
			"id" : "Road tunnel/Minor/line",
			"type" : "line",
			"source" : "esri",
			"source-layer" : "Road tunnel",
			"filter" : ["all", ["==", "_symbol", 5], ["!in", "Viz", 3]],
			"minzoom" : 9,
			"layout" : {
				"line-cap" : "round",
				"line-join" : "round"
			},
			"paint" : {
				"line-opacity" : 0.5,
				"line-color" : {
					"stops" : [[10, "#ffd1b4"], [11, "#FAEDD4"]]
				},
				"line-width" : {
					"base" : 1.2,
					"stops" : [[10, 0.75], [14, 2.67], [18, 24], [22, 39]]
				}
			}   
        }, {
			"id" : "Road tunnel/Minor, ramp or traffic circle/line",
			"type" : "line",
			"source" : "esri",
			"source-layer" : "Road tunnel",
			"filter" : ["all", ["==", "_symbol", 6], ["!in", "Viz", 3]],
			"minzoom" : 10,
			"layout" : {
				"line-cap" : "round",
				"line-join" : "round"
			},
			"paint" : {
				"line-opacity" : 0.5,
				"line-color" : {
					"stops" : [[10, "#ffd1b4"], [11, "#FAEDD4"]]
				},
				"line-width" : {
					"base" : 1.2,
					"stops" : [[10, 0.75], [14, 2], [18, 14], [22, 29]]
				}
			}  
		}, {
			"id" : "Road tunnel/Major/line",
			"type" : "line",
			"source" : "esri",
			"source-layer" : "Road tunnel",
			"filter" : ["all", ["==", "_symbol", 3], ["!in", "Viz", 3]],
			"minzoom" : 8,
			"layout" : {
				"line-cap" : "round",
				"line-join" : "round"
			},
			"paint" : {
				"line-color" : "#F2BDA2",
				"line-opacity" : 0.5,
				"line-width" : {
					"base" : 1.2,
					"stops" : [[9, 0.4], [14, 5.3], [18, 26], [22, 41]]
				}
			}
		}, {
			"id" : "Road tunnel/Major, ramp or traffic circle/line",
			"type" : "line",
			"source" : "esri",
			"source-layer" : "Road tunnel",
			"filter" : ["all", ["==", "_symbol", 4], ["!in", "Viz", 3]],
			"minzoom" : 9,
			"layout" : {
				"line-cap" : "round",
				"line-join" : "round"
			},
			"paint" : {
				"line-color" : "#F2BDA2",
				"line-opacity" : 0.5,
				"line-width" : {
					"base" : 1.2,
					"stops" : [[9, 0.75], [14, 2.67], [18, 16], [22, 31]]
				}
			}
        }, {
			"id" : "Road tunnel/Highway/line",
			"type" : "line",
			"source" : "esri",
			"source-layer" : "Road tunnel",
			"filter" : ["all", ["==", "_symbol", 1], ["!in", "Viz", 3]],
			"minzoom" : 6,
			"layout" : {
				"line-cap" : "round",
				"line-join" : "round"
			},
			"paint" : {
				"line-color" : "#E69973",
				"line-opacity" : 0.5,
				"line-width" : {
					"base" : 1.2,
					"stops" : [[7, 0.4], [14, 5.3], [18, 28], [22, 42]]
				}
			} 
		}, {
			"id" : "Road tunnel/Freeway Motorway/line",
			"type" : "line",
			"source" : "esri",
			"source-layer" : "Road tunnel",
			"filter" : ["all", ["==", "_symbol", 0], ["!in", "Viz", 3]],
			"minzoom" : 4,
			"layout" : {
				"line-cap" : "round",
				"line-join" : "round"
			},
			"paint" : {
				"line-color" : {
					"stops" : [[4, "#e6beac"], [6, "#e69973"]]
				},
				"line-opacity" : 0.5,
				"line-width" : {
					"base" : 1.2,
					"stops" : [[4, 0.4], [14, 5.3], [18, 30], [22, 45]]
				}
			}
		}, {
			"id" : "Road tunnel/Freeway Motorway Highway, ramp or traffic circle/line",
			"type" : "line",
			"source" : "esri",
			"source-layer" : "Road tunnel",
			"filter" : ["all", ["==", "_symbol", 2], ["!in", "Viz", 3]],
			"minzoom" : 9,
			"layout" : {
				"line-cap" : "round",
				"line-join" : "round"
			},
			"paint" : {
				"line-color" : "#E69973",
				"line-opacity" : 0.5,
				"line-width" : {
					"base" : 1.2,
					"stops" : [[9, 0.5], [14, 2.67], [18, 20], [22, 35]]
				}
			}
        }, {
			"id" : "Boundary line/Disputed admin5",
			"type" : "line",
			"source" : "esri",
			"source-layer" : "Boundary line",
			"filter" : ["all", ["==", "_symbol", 11], ["!in", "Viz", 3]],
			"minzoom" : 16,
			"layout" : {
				"line-join" : "round"
			},
			"paint" : {
				"line-color" : "#9DA0A2",
				"line-width" : {
					"base" : 1.2,
					"stops" : [[16, 1.6], [18, 2.5]]
				},
				"line-dasharray" : [6, 3]
			}   
        }, {
			"id" : "Boundary line/Disputed admin4",
			"type" : "line",
			"source" : "esri",
			"source-layer" : "Boundary line",
			"filter" : ["all", ["==", "_symbol", 10], ["!in", "Viz", 3]],
			"minzoom" : 16,
			"layout" : {
				"line-join" : "round"
			},
			"paint" : {
				"line-color" : "#9DA0A2",
				"line-width" : {
					"base" : 1.2,
					"stops" : [[16, 1.6], [18, 2.5]]
				},
				"line-dasharray" : [6, 3]
			}   
        }, {
			"id" : "Boundary line/Disputed admin3",
			"type" : "line",
			"source" : "esri",
			"source-layer" : "Boundary line",
			"filter" : ["all", ["==", "_symbol", 9], ["!in", "Viz", 3]],
			"minzoom" : 16,
			"layout" : {
				"line-join" : "round"
			},
			"paint" : {
				"line-color" : "#9DA0A2",
				"line-width" : {
					"base" : 1.2,
					"stops" : [[16, 1.6], [18, 2.5]]
				},
				"line-dasharray" : [6, 3]
			}   
        }, {
			"id" : "Boundary line/Disputed admin2",
			"type" : "line",
			"source" : "esri",
			"source-layer" : "Boundary line",
			"filter" : ["all", ["==", "_symbol", 8], ["!in", "Viz", 3]],
			"minzoom" : 10,
			"layout" : {
				"line-join" : "round"
			},
			"paint" : {
				"line-color" : "#9DA0A2",
				"line-width" : {
					"base" : 1.2,
					"stops" : [[10, 1.3], [14, 1.6], [18, 2.5]]
				},
				"line-dasharray" : [6, 3]
			}    
        }, {
			"id" : "Boundary line/Disputed admin1",
			"type" : "line",
			"source" : "esri",
			"source-layer" : "Boundary line",
			"filter" : ["all", ["==", "_symbol", 7], ["!in", "Viz", 3]],
			"minzoom" : 3,
			"layout" : {
				"line-join" : "round"
			},
			"paint" : {
				"line-color" : "#9DA0A2",
				"line-dasharray" : [6, 3],
				"line-width" : {
					"base" : 1.2,
					"stops" : [[3, 1.3], [14, 1.6], [18, 2.5]]
				}
			}   
        }, {
			"id" : "Boundary line/Disputed admin0",
			"type" : "line",
			"source" : "esri",
			"source-layer" : "Boundary line",
			"filter" : ["all", ["==", "_symbol", 6], ["!in", "Viz", 3], ["!in", "DisputeID", 8, 16, 90, 96, 0]],
			"minzoom" : 1,
			"layout" : {
				"line-join" : "round"
			},
			"paint" : {
				"line-color" : {
					"stops" : [[1, "#d1caae"], [3, "#9DA0A2"]]
				},
				"line-width" : {
					"base" : 1.2,
					"stops" : [[1, 1.3], [14, 1.6], [18, 2.5]]
				},
				"line-dasharray" : [6, 3]
			}   
        }, {
			"id" : "Boundary line/Admin2/casing",
			"type" : "line",
			"source" : "esri",
			"source-layer" : "Boundary line",
			"filter" : ["all", ["==", "_symbol", 2], ["!in", "Viz", 3]],
			"minzoom" : 10,
			"layout" : {
				"line-cap" : "round",
				"line-join" : "round"
			},
			"paint" : {
				"line-color" : "#D9D4BA",
				"line-width" : {
					"base" : 1.2,
					"stops" : [[10, 1.5], [14, 2.67], [18, 3]]
				}
			}  
        }, {
			"id" : "Boundary line/Admin1/casing",
			"type" : "line",
			"source" : "esri",
			"source-layer" : "Boundary line",
			"filter" : ["all", ["==", "_symbol", 1], ["!in", "Viz", 3]],
			"minzoom" : 10,
			"layout" : {
				"line-cap" : "round",
				"line-join" : "round"
			},
			"paint" : {
				"line-color" : "#D9D4BA",
				"line-width" : {
					"base" : 1.2,
					"stops" : [[10, 4], [14, 7], [18, 9]]
				}
			}  
		}, {
			"id" : "Boundary line/Admin0/casing",
			"type" : "line",
			"source" : "esri",
			"source-layer" : "Boundary line",
			"filter" : ["all", ["==", "_symbol", 0], ["!in", "Viz", 3]],
			"minzoom" : 4,
			"layout" : {
				"line-cap" : "round",
				"line-join" : "round"
			},
			"paint" : {
				"line-color" : "#CCC4A9",
				"line-width" : {
					"base" : 1.2,
					"stops" : [[4, 2.5], [10, 6], [18, 12]]
				}
			}
        }, {
			"id" : "Boundary line/Admin5",
			"type" : "line",
			"source" : "esri",
			"source-layer" : "Boundary line",
			"filter" : ["all", ["==", "_symbol", 5], ["!in", "Viz", 3]],
			"minzoom" : 16,
			"layout" : {
				"line-cap" : "round",
				"line-join" : "round"
			},
			"paint" : {
				"line-color" : "#9C9C9C",
				"line-width" : {
					"base" : 1.2,
					"stops" : [[16, 1.33], [18, 2]]
				},
				"line-dasharray" : [2, 2]
			}
        }, {
			"id" : "Boundary line/Admin4",
			"type" : "line",
			"source" : "esri",
			"source-layer" : "Boundary line",
			"filter" : ["all", ["==", "_symbol", 4], ["!in", "Viz", 3]],
			"minzoom" : 16,
			"layout" : {
				"line-cap" : "round",
				"line-join" : "round"
			},
			"paint" : {
				"line-color" : "#9C9C9C",
				"line-width" : {
					"base" : 1.2,
					"stops" : [[16, 1.33], [18, 2]]
				},
				"line-dasharray" : [2, 2]
			}  
        }, {
			"id" : "Boundary line/Admin3",
			"type" : "line",
			"source" : "esri",
			"source-layer" : "Boundary line",
			"filter" : ["all", ["==", "_symbol", 3], ["!in", "Viz", 3]],
			"minzoom" : 16,
			"layout" : {
				"line-cap" : "round",
				"line-join" : "round"
			},
			"paint" : {
				"line-color" : "#9C9C9C",
				"line-width" : {
					"base" : 1.2,
					"stops" : [[16, 1.33], [18, 2]]
				},
				"line-dasharray" : [2, 2]
			}   
        }, {
			"id" : "Boundary line/Admin2/line",
			"type" : "line",
			"source" : "esri",
			"source-layer" : "Boundary line",
			"filter" : ["all", ["==", "_symbol", 2], ["!in", "Viz", 3]],
			"minzoom" : 10,
			"layout" : {
				"line-join" : "round"
			},
			"paint" : {
				"line-color" : "#828282",
				"line-dasharray" : [8, 5.33],
				"line-width" : {
					"base" : 1.2,
					"stops" : [[10, 1], [14, 1.33], [18, 1.5]]
				}
			}   
        }, {
			"id" : "Boundary line/Admin1/line",
			"type" : "line",
			"source" : "esri",
			"source-layer" : "Boundary line",
			"filter" : ["all", ["==", "_symbol", 1], ["!in", "Viz", 3]],
			"minzoom" : 3,
			"layout" : {
				"line-cap" : "round",
				"line-join" : "round"
			},
			"paint" : {
				"line-color" : {
					"stops" : [[3, "#c8c8c8"], [4, "#828282"]]
				},
				"line-width" : {
					"base" : 1.2,
					"stops" : [[3, 0.8], [14, 1.33], [18, 1.5]]
				}
			}
		}, {
			"id" : "Boundary line/Admin0/line",
			"type" : "line",
			"source" : "esri",
			"source-layer" : "Boundary line",
			"filter" : ["all", ["==", "_symbol", 0], ["!in", "Viz", 3]],
			"minzoom" : 1,
			"layout" : {
				"line-cap" : "round",
				"line-join" : "round"
			},
			"paint" : {
				"line-color" : {
					"stops" : [[1, "#d1caae"], [5, "#686868"]]
				},
				"line-width" : {
					"base" : 1.2,
					"stops" : [[1, 1], [10, 1.5], [18, 4]]
				}
			}
		}, {
			"id" : "Ferry/label/Ferry",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Ferry/label",
			"filter" : ["all", ["==", "_label_class", 0], ["!in", "Viz", 3]],
			"minzoom" : 12,
			"layout" : {
				"symbol-placement" : "line",
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Regular"],
				"text-size" : 9,
				"text-letter-spacing" : 0.05,
				"text-max-width" : 8,
				"text-field" : "{_name_global}",
				"text-padding" : 30
			},
			"paint" : {
				"text-color" : "#5785B3",
				"text-halo-color" : "#CAECFA",
				"text-halo-width" : 0.93
			}
        }, {
			"id" : "Water point/Stream or river",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Water point",
			"filter" : ["==", "_label_class", 3],
			"minzoom" : 9,
			"layout" : {
				"icon-image" : "Water point",
				"icon-allow-overlap" : true,
				"text-font" : ["Arial Italic"],
                "text-size" : {
					"stops" : [[9, 7], [15, 11.3]]
				},
				"text-anchor" : "center",
				"text-letter-spacing" : 0.01,
				"text-max-width" : 5,
				"text-field" : "{_name_global}",
                "text-padding" : 15
			},
			"paint" : {
				"text-color" : "#497AAB"
			} 
        }, {
			"id" : "Water point/Lake or reservoir",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Water point",
			"filter" : ["==", "_label_class", 2],
			"minzoom" : 9,
			"layout" : {
				"icon-image" : "Water point",
				"icon-allow-overlap" : true,
				"text-font" : ["Arial Italic"],
				"text-size" : {
					"stops" : [[9, 7], [15, 11.3]]
				},
				"text-anchor" : "center",
				"text-letter-spacing" : 0.01,
				"text-max-width" : 5,
				"text-field" : "{_name_global}",
                "text-padding" : 15
			},
			"paint" : {
				"text-color" : "#497AAB"
			}  
        }, {
			"id" : "Water point/Bay or inlet",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Water point",
			"filter" : ["==", "_label_class", 1],
			"minzoom" : 9,
			"layout" : {
				"icon-image" : "Water point",
				"icon-allow-overlap" : true,
				"text-font" : ["Arial Italic"],
                "text-size" : {
					"stops" : [[9, 7], [15, 12]]
				},
				"text-anchor" : "center",
				"text-letter-spacing" : 0.15,
				"text-max-width" : 5,
				"text-field" : "{_name_global}",
                "text-padding" : 15
			},
			"paint" : {
				"text-color" : "#497AAB"
			} 
        }, {
            "id" : "Water point/Sea or ocean",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Water point",
			"filter" : ["==", "_label_class", 0],
			"minzoom" : 9,
			"layout" : {
				"icon-image" : "Water point",
				"icon-allow-overlap" : true,
				"text-font" : ["Arial Italic"],
				"text-size" : 11,
				"text-anchor" : "center",
				"text-letter-spacing" : 0.1,
				"text-max-width" : {"stops" : [[15.5, 7], [15.6, 9]]},
				"text-field" : "{_name_global}",
                "text-padding" : 15
			},
			"paint" : {
				"text-color" : "#497AAB"
			} 
        }, {
			"id" : "Water point/Canal or ditch",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Water point",
			"filter" : ["==", "_label_class", 4],
			"minzoom" : 11,
			"layout" : {
				"icon-image" : "Water point",
				"icon-allow-overlap" : true,
				"text-font" : ["Arial Italic"],
                "text-size" : {
					"stops" : [[11, 7], [15, 10]]
				},
				"text-anchor" : "center",
				"text-letter-spacing" : 0.01,
				"text-max-width" : 5,
				"text-field" : "{_name_global}",
                "text-padding" : 15
			},
			"paint" : {
				"text-color" : "#497AAB"
			} 
        }, {
			"id" : "Water point/Island",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Water point",
			"filter" : ["==", "_label_class", 7],
			"minzoom" : 11,
			"layout" : {
				"icon-image" : "Water point",
				"icon-allow-overlap" : true,
				"text-font" : ["Arial Italic"],
                "text-size" : {
					"stops" : [[11, 7], [15, 10.67]]
				},
				"text-anchor" : "center",
				"text-letter-spacing" : 0.05,
				"text-max-width" : 5,
				"text-field" : "{_name_global}",
                "text-padding" : 15
			},
			"paint" : {
				"text-color" : "#8C7962",
				"text-halo-color" : "#F2F0CF",
				"text-halo-width" : 0.67
			}   
		}, {
			"id" : "Water line/label/Default",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Water line/label",
			"minzoom" : 12,
			"layout" : {
				"symbol-placement" : "line",
				"symbol-avoid-edges" : true,
                "symbol-spacing" : 1000,
				"text-font" : ["Arial Italic"],
				"text-size" : 10,
				"text-letter-spacing" : 0.07,
				"text-max-width" : 8,
                "text-max-angle" : 30,
				"text-field" : "{_name_global}",
                "text-offset" : [0, -0.5]
			},
			"paint" : {
				"text-color" : "#497AAB"
			}
        }, {
			"id" : "Marine park/label/Default",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Marine park/label",
			"minzoom" : 11,
			"layout" : {
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Regular"],
				"text-size" : 10,
				"text-letter-spacing" : 0.05,
				"text-max-width" : 8,
				"text-field" : "{_name_global}"
			},
			"paint" : {
				"text-color" : "#6699CD"
			}  
        }, {
			"id" : "Water area/label/Canal or ditch",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Water area/label",
			"filter" : ["==", "_label_class", 2],
			"minzoom" : 11,
			"layout" : {
                "symbol-placement" : "line",
                "symbol-spacing" : 1000,
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Italic"],
				"text-size" : 10,
				"text-letter-spacing" : 0.01,
				"text-max-width" : 5,
				"text-field" : "{_name_global}"
			},
			"paint" : {
				"text-color" : "#497AAB"
			}  
        }, {
			"id" : "Water area/label/Small river",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Water area/label",
			"filter" : ["==", "_label_class", 7],
			"minzoom" : 11,
			"layout" : {
                "symbol-placement" : "line",
                "symbol-spacing" : 1000,
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Italic"],
				"text-size" : 11.33,
				"text-letter-spacing" : 0.01,
				"text-max-width" : 5,
				"text-field" : "{_name_global}"
			},
			"paint" : {
				"text-color" : "#497AAB"
			}    
        }, {
			"id" : "Water area/label/Large river",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Water area/label",
			"filter" : ["==", "_label_class", 4],
			"minzoom" : 11,
			"layout" : {
                "symbol-placement" : "line",
                "symbol-spacing" : 1000,
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Italic"],
				"text-size" : 13.33,
				"text-letter-spacing" : 0.01,
				"text-max-width" : 8,
				"text-field" : "{_name_global}"
			},
			"paint" : {
				"text-color" : "#497AAB"
			}   
        }, {
			"id" : "Water area/label/Small lake or reservoir",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Water area/label",
			"filter" : ["==", "_label_class", 6],
			"minzoom" : 11,
			"layout" : {
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Italic"],
				"text-size" : 11.33,
				"text-letter-spacing" : 0.01,
				"text-max-width" : 5,
				"text-field" : "{_name_global}"
			},
			"paint" : {
				"text-color" : "#497AAB"
			}   
        }, {
			"id" : "Water area/label/Large lake or reservoir",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Water area/label",
			"filter" : ["==", "_label_class", 3],
			"minzoom" : 11,
			"layout" : {
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Italic"],
				"text-size" : 13.33,
				"text-letter-spacing" : 0.01,
				"text-max-width" : 8,
				"text-field" : "{_name_global}"
			},
			"paint" : {
				"text-color" : "#497AAB"
			}   
        }, {
			"id" : "Water area/label/Bay or inlet",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Water area/label",
			"filter" : ["==", "_label_class", 1],
			"minzoom" : 11,
			"layout" : {
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Italic"],
				"text-size" : 12,
				"text-letter-spacing" : 0.15,
				"text-max-width" : 8,
				"text-field" : "{_name_global}"
			},
			"paint" : {
				"text-color" : "#497AAB"
			}   
		}, {
			"id" : "Water area/label/Small island",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Water area/label",
			"filter" : ["==", "_label_class", 0],
			"minzoom" : 11,
			"layout" : {
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Italic"],
				"text-size" : 10.67,
				"text-letter-spacing" : 0.05,
				"text-max-width" : 5,
				"text-field" : "{_name_global}"
			},
			"paint" : {
				"text-color" : "#8C7962",
				"text-halo-color" : "#F2F0CF",
				"text-halo-width" : 0.67
			}
		}, {
			"id" : "Water area/label/Large island",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Water area/label",
			"filter" : ["==", "_label_class", 5],
			"minzoom" : 11,
			"layout" : {
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Italic"],
				"text-size" : 13.33,
				"text-letter-spacing" : 0.05,
				"text-max-width" : 8,
				"text-field" : "{_name_global}"
			},
			"paint" : {
				"text-color" : "#8C7962",
				"text-halo-color" : "#F2F0CF",
				"text-halo-width" : 0.67
			}
		}, {
			"id" : "Water area large scale/label/River",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Water area large scale/label",
			"filter" : ["==", "_label_class", 1],
			"minzoom" : 7,
			"maxzoom" : 11,
			"layout" : {
                "symbol-placement" : "line",
                "symbol-spacing" : 1000,
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Italic"],
				"text-size" : 9.33,
				"text-letter-spacing" : 0.05,
				"text-max-width" : 8,
				"text-field" : "{_name}"
			},
			"paint" : {
				"text-color" : "#497AAB"
			}
        }, {
			"id" : "Water area large scale/label/Lake or lake intermittent",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Water area large scale/label",
			"filter" : ["==", "_label_class", 0],
			"minzoom" : 7,
			"maxzoom" : 11,
			"layout" : {
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Italic"],
				"text-size" : 9.33,
				"text-letter-spacing" : 0.05,
				"text-max-width" : 5,
				"text-field" : "{_name}"
			},
			"paint" : {
				"text-color" : "#497AAB"
			}    
        }, {
			"id" : "Water area medium scale/label/Default",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Water area medium scale/label",
			"minzoom" : 5,
			"maxzoom" : 7,
			"layout" : {
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Italic"],
				"text-size" : 9.33,
				"text-max-width" : 5,
				"text-field" : "{_name}",
                "text-letter-spacing" : 0.05
			},
			"paint" : {
				"text-color" : "#497AAB"
			}    
        }, {
			"id" : "Water area small scale/label/Default",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Water area small scale/label",
			"minzoom" : 1,
			"maxzoom" : 5,
			"layout" : {
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Italic"],
				"text-size" : 9.33,
				"text-letter-spacing" : 0.05,
				"text-max-width" : 5,
				"text-field" : "{_name}"
			},
			"paint" : {
				"text-color" : "#497AAB"
			}
		}, {
			"id" : "Marine area/label/Default",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Marine area/label",
			"minzoom" : 11,
			"layout" : {
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Italic"],
				"text-size" : 10,
				"text-max-width" : 8,
				"text-field" : "{_name_global}"
			},
			"paint" : {
				"text-color" : "#497AAB"
			}
		}, {
			"id" : "Marine waterbody/label/small",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Marine waterbody/label",
			"filter" : ["==", "_label_class", 4],
            "minzoom" : 1,
			"maxzoom" : 10,
			"layout" : {
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Italic"],
				"text-size" : 10,
				"text-letter-spacing" : 0.1,
				"text-max-width" : 6,
				"text-field" : "{_name}",
				"text-padding" : 15
			},
			"paint" : {
				"text-color" : "#497AAB"
			}
		}, {
			"id" : "Marine waterbody/label/medium",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Marine waterbody/label",
			"filter" : ["==", "_label_class", 3],
            "minzoom" : 1,
			"maxzoom" : 10,
			"layout" : {
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Italic"],
				"text-size" : 10,
				"text-letter-spacing" : 0.1,
				"text-max-width" : 6,
				"text-field" : "{_name}",
				"text-padding" : 15
			},
			"paint" : {
				"text-color" : "#497AAB"
			}
		}, {
			"id" : "Marine waterbody/label/large",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Marine waterbody/label",
			"filter" : ["==", "_label_class", 2],
            "minzoom" : 1,
			"maxzoom" : 10,
			"layout" : {
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Italic"],
				"text-size" : 11,
				"text-letter-spacing" : 0.1,
				"text-max-width" : 6,
				"text-field" : "{_name}",
				"text-padding" : 15
			},
			"paint" : {
				"text-color" : "#497AAB"
			}
		}, {
			"id" : "Marine waterbody/label/x large",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Marine waterbody/label",
			"filter" : ["==", "_label_class", 1],
            "minzoom" : 1,
			"maxzoom" : 10,
			"layout" : {
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Italic"],
				"text-size" : 11,
				"text-letter-spacing" : 0.1,
				"text-max-width" : 6,
				"text-field" : "{_name}",
				"text-padding" : 15
			},
			"paint" : {
				"text-color" : "#497AAB"
			}
		}, {
			"id" : "Marine waterbody/label/2x large",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Marine waterbody/label",
			"filter" : ["==", "_label_class", 0],
			"maxzoom" : 10,
			"layout" : {
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Italic"],
				"text-size" : {
					"stops" : [[0, 10], [1, 12]]
				},
				"text-letter-spacing" : 0.1,
				"text-max-width" : 6,
				"text-field" : "{_name}",
				"text-padding" : 15
			},
			"paint" : {
				"text-color" : "#497AAB"
			} 
		}, {
			"id" : "Ferry/label/Rail ferry",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Ferry/label",
			"filter" : ["all", ["==", "_label_class", 1], ["!in", "Viz", 3]],
			"minzoom" : 12,
			"layout" : {
				"symbol-placement" : "line",
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Regular"],
				"text-size" : 10,
				"text-letter-spacing" : 0.1,
				"text-max-width" : 8,
				"text-field" : "{_name_global}",
                "text-offset" : [0, -0.6]
			},
			"paint" : {
				"text-color" : "#B3AB9D",
				"text-halo-color" : "#F2F0CF",
				"text-halo-width" : 0.67
			}
        }, {
			"id" : "Railroad/label/Default",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Railroad/label",
			"minzoom" : 14,
			"layout" : {
				"symbol-placement" : "line",
				"symbol-avoid-edges" : true,
                "symbol-spacing" : 1000,
				"text-font" : ["Arial Regular"],
				"text-size" : 10,
				"text-letter-spacing" : 0.1,
				"text-max-width" : 8,
				"text-field" : "{_name_global}",
				"text-padding" : 10,
                "text-offset" : [0, -0.6]
			},
			"paint" : {
				"text-color" : "#B3AB9D",
				"text-halo-color" : "#F2F0CF",
				"text-halo-width" : 0.67
			}
		}, {
			"id" : "Trail or path/label/Default",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Trail or path/label",
			"minzoom" : 15,
			"layout" : {
				"symbol-placement" : "line",
				"symbol-avoid-edges" : true,
                "symbol-spacing" : 1000,
				"text-font" : ["Arial Bold"],
				"text-size" : 9.33,
				"text-letter-spacing" : 0.05,
				"text-max-width" : 8,
				"text-field" : "{_name_global}"
			},
			"paint" : {
				"text-color" : "#666666",
				"text-halo-color" : "#FDFDFD",
				"text-halo-width" : 0.67
			}
		}, {
			"id" : "Road tunnel/label/Pedestrian",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Road tunnel/label",
			"filter" : ["all", ["==", "_label_class", 6], ["!in", "Viz", 3]],
			"minzoom" : 15,
			"layout" : {
				"symbol-placement" : "line",
				"symbol-avoid-edges" : true,
                "symbol-spacing" : 1000,
				"text-font" : ["Arial Regular"],
				"text-size" : 9.33,
				"text-letter-spacing" : 0.05,
				"text-max-width" : 8,
				"text-field" : "{_name_global}"
			},
			"paint" : {
				"text-color" : "#666666"
			} 
        }, {
			"id" : "Road tunnel/label/Local",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Road tunnel/label",
			"filter" : ["all", ["==", "_label_class", 5], ["!in", "Viz", 3]],
			"minzoom" : 12,
			"layout" : {
				"symbol-placement" : "line",
				"symbol-avoid-edges" : true,
                "symbol-spacing" : 1000,
				"text-font" : ["Arial Regular"],
				"text-size" : {
					"stops" : [[12, 8], [14, 10.67]]
				},
				"text-letter-spacing" : 0.09,
				"text-max-width" : 8,
				"text-field" : "{_name_global}"
			},
			"paint" : {
				"text-color" : {
					"stops" : [[12, "#a5a48e"], [18, "#666666"]]
                }
            }
        }, {
			"id" : "Road tunnel/label/Minor",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Road tunnel/label",
			"filter" : ["all", ["==", "_label_class", 4], ["!in", "Viz", 3]],
			"minzoom" : 10,
			"layout" : {
				"symbol-placement" : "line",
				"symbol-avoid-edges" : true,
                "symbol-spacing" : 1000,
				"text-font" : ["Arial Bold"],
				"text-size" : {
					"stops" : [[10, 8], [12, 9], [14, 10.67]]
				},
				"text-letter-spacing" : 0.09,
				"text-max-width" : 8,
				"text-field" : "{_name_global}"
			},
			"paint" : {
				"text-color" : {
					"stops" : [[10, "#aaaaaa"], [12, "#919191"], [14, "#666666"]]
				}
            }
        }, {
			"id" : "Road tunnel/label/Major, alt name",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Road tunnel/label",
			"filter" : ["all", ["==", "_label_class", 3], ["!in", "Viz", 3]],
			"minzoom" : 10,
			"layout" : {
				"symbol-placement" : "line",
				"symbol-avoid-edges" : true,
                "symbol-spacing" : 1000,
				"text-font" : ["Arial Bold"],
				"text-size" : {
					"stops" : [[10, 9], [12, 10.67]]
				},
				"text-letter-spacing" : 0.09,
				"text-max-width" : 8,
				"text-field" : "{_name}"
			},
			"paint" : {
				"text-color" : {
					"stops" : [[10, "#aaaaaa"], [11, "#919191"], [12, "#595959"]]
                }
			}
		}, {
			"id" : "Road tunnel/label/Major",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Road tunnel/label",
			"filter" : ["all", ["==", "_label_class", 2], ["!in", "Viz", 3]],
			"minzoom" : 10,
			"layout" : {
				"symbol-placement" : "line",
				"symbol-avoid-edges" : true,
                "symbol-spacing" : 1000,
				"text-font" : ["Arial Bold"],
				"text-size" : {
					"stops" : [[10, 9], [12, 10.67]]
				},
				"text-letter-spacing" : 0.09,
				"text-max-width" : 8,
				"text-field" : "{_name_global}"
			},
			"paint" : {
                "text-color" : {
				    "stops" : [[10, "#aaaaaa"], [11, "#919191"], [12, "#595959"]]
                }
			}		
        }, {
			"id" : "Road tunnel/label/Freeway Motorway, alt name",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Road tunnel/label",
			"filter" : ["all", ["==", "_label_class", 1], ["!in", "Viz", 3]],
			"minzoom" : 10,
			"layout" : {
				"symbol-placement" : "line",
				"symbol-avoid-edges" : true,
                "symbol-spacing" : 1000,
				"text-font" : ["Arial Bold"],
				"text-size" : {
					"stops" : [[10, 9], [12, 10.67]]
				},
				"text-letter-spacing" : 0.09,
				"text-max-width" : 8,
				"text-field" : "{_name}"
			},
			"paint" : {
				"text-color" : "#4C4C4C"
			}    
        }, {
			"id" : "Road tunnel/label/Highway",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Road tunnel/label",
			"filter" : ["all", ["==", "_label_class", 7], ["!in", "Viz", 3]],
			"minzoom" : 10,
			"layout" : {
				"symbol-placement" : "line",
				"symbol-avoid-edges" : true,
                "symbol-spacing" : 1000,
				"text-font" : ["Arial Bold"],
				"text-size" : {
					"stops" : [[10, 9], [12, 10.67]]
				},
				"text-letter-spacing" : 0.09,
				"text-max-width" : 8,
				"text-field" : "{_name_global}"
			},
			"paint" : {
				"text-color" : "#4C4C4C"
			}
        }, {
			"id" : "Road tunnel/label/Freeway Motorway",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Road tunnel/label",
			"filter" : ["all", ["==", "_label_class", 0], ["!in", "Viz", 3]],
			"minzoom" : 10,
			"layout" : {
				"symbol-placement" : "line",
				"symbol-avoid-edges" : true,
                "symbol-spacing" : 1000,
				"text-font" : ["Arial Bold"],
				"text-size" : {
					"stops" : [[10, 9], [12, 10.67]]
				},
				"text-letter-spacing" : 0.09,
				"text-max-width" : 8,
				"text-field" : "{_name_global}"
			},
			"paint" : {
				"text-color" : "#4C4C4C"
			}
        }, {
			"id" : "Road/label/Rectangle hexagon brown white (Alt)",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Road/label",
			"filter" : ["all", ["==", "_label_class", 72], ["!in", "Viz", 3]],
			"minzoom" : 6,
			"layout" : {
				"symbol-placement" : "line",
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Regular"],
				"text-size" : 8.67,
				"text-max-width" : 8,
				"text-field" : "{_name}",
				"icon-image" : "Road/Rectangle hexagon brown white (Alt)/{_len}",
				"icon-rotation-alignment" : "viewport",
				"text-offset" : [0, 0.1],
				"text-rotation-alignment" : "viewport",
				"text-padding" : 30
			},
			"paint" : {
				"text-color" : "#81695E"
			}
        }, {
			"id" : "Road/label/Rectangle hexagon green white (Alt)",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Road/label",
			"filter" : ["all", ["==", "_label_class", 70], ["!in", "Viz", 3]],
			"minzoom" : 6,
			"layout" : {
				"symbol-placement" : "line",
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Regular"],
				"text-size" : 8.67,
				"text-max-width" : 8,
				"text-field" : "{_name}",
				"icon-image" : "Road/Rectangle hexagon green white (Alt)/{_len}",
				"icon-rotation-alignment" : "viewport",
				"text-offset" : [0, 0.1],
				"text-rotation-alignment" : "viewport",
				"text-padding" : 30
			},
			"paint" : {
				"text-color" : "#718574"
			}  
        }, {
			"id" : "Road/label/Rectangle hexagon red white (Alt)",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Road/label",
			"filter" : ["all", ["==", "_label_class", 68], ["!in", "Viz", 3]],
			"minzoom" : 6,
			"layout" : {
				"symbol-placement" : "line",
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Regular"],
				"text-size" : 8.67,
				"text-max-width" : 8,
				"text-field" : "{_name}",
				"icon-image" : "Road/Rectangle hexagon red white (Alt)/{_len}",
				"icon-rotation-alignment" : "viewport",
				"text-offset" : [0, 0.1],
				"text-rotation-alignment" : "viewport",
				"text-padding" : 30
			},
			"paint" : {
				"text-color" : "#B66D58"
			}    
        }, {
			"id" : "Road/label/Rectangle hexagon blue white (Alt)",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Road/label",
			"filter" : ["all", ["==", "_label_class", 66], ["!in", "Viz", 3]],
			"minzoom" : 6,
			"layout" : {
				"symbol-placement" : "line",
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Regular"],
				"text-size" : 8.67,
				"text-max-width" : 8,
				"text-field" : "{_name}",
				"icon-image" : "Road/Rectangle hexagon blue white (Alt)/{_len}",
				"icon-rotation-alignment" : "viewport",
				"text-offset" : [0, 0.1],
				"text-rotation-alignment" : "viewport",
				"text-padding" : 30
			},
			"paint" : {
				"text-color" : "#5B708F"
			}
		}, {
			"id" : "Road/label/Rectangle hexagon brown white",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Road/label",
			"filter" : ["all", ["==", "_label_class", 71], ["!in", "Viz", 3]],
			"minzoom" : 6,
			"layout" : {
				"symbol-placement" : "line",
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Regular"],
				"text-size" : 8.67,
				"text-max-width" : 8,
				"text-field" : "{_name}",
				"icon-image" : "Road/Rectangle hexagon brown white/{_len}",
				"icon-rotation-alignment" : "viewport",
				"text-offset" : [0, 0.1],
				"text-rotation-alignment" : "viewport",
				"text-padding" : 30
			},
			"paint" : {
				"text-color" : "#81695E"
			}
        }, {
			"id" : "Road/label/Rectangle hexagon green white",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Road/label",
			"filter" : ["all", ["==", "_label_class", 69], ["!in", "Viz", 3]],
			"minzoom" : 6,
			"layout" : {
				"symbol-placement" : "line",
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Regular"],
				"text-size" : 8.67,
				"text-max-width" : 8,
				"text-field" : "{_name}",
				"icon-image" : "Road/Rectangle hexagon green white/{_len}",
				"icon-rotation-alignment" : "viewport",
				"text-offset" : [0, 0.1],
				"text-rotation-alignment" : "viewport",
				"text-padding" : 30
			},
			"paint" : {
				"text-color" : "#718574"
			}    
        }, {
			"id" : "Road/label/Rectangle hexagon red white",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Road/label",
			"filter" : ["all", ["==", "_label_class", 67], ["!in", "Viz", 3]],
			"minzoom" : 6,
			"layout" : {
				"symbol-placement" : "line",
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Regular"],
				"text-size" : 8.67,
				"text-max-width" : 8,
				"text-field" : "{_name}",
				"icon-image" : "Road/Rectangle hexagon red white/{_len}",
				"icon-rotation-alignment" : "viewport",
				"text-offset" : [0, 0.1],
				"text-rotation-alignment" : "viewport",
				"text-padding" : 30
			},
			"paint" : {
				"text-color" : "#B66D58"
			}     
        }, {
			"id" : "Road/label/Rectangle hexagon blue white",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Road/label",
			"filter" : ["all", ["==", "_label_class", 65], ["!in", "Viz", 3]],
			"minzoom" : 6,
			"layout" : {
				"symbol-placement" : "line",
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Regular"],
				"text-size" : 8.67,
				"text-max-width" : 8,
				"text-field" : "{_name}",
				"icon-image" : "Road/Rectangle hexagon blue white/{_len}",
				"icon-rotation-alignment" : "viewport",
				"text-offset" : [0, 0.1],
				"text-rotation-alignment" : "viewport",
				"text-padding" : 30
			},
			"paint" : {
				"text-color" : "#5B708F"
			}   
        }, {
			"id" : "Road/label/Octagon green white (Alt)",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Road/label",
			"filter" : ["all", ["==", "_label_class", 74], ["!in", "Viz", 3]],
			"minzoom" : 6,
			"layout" : {
				"symbol-placement" : "line",
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Regular"],
				"text-size" : 8.67,
				"text-letter-spacing" : 0.02,
				"text-max-width" : 8,
				"text-field" : "{_name}",
				"icon-image" : "Road/Octagon green white (Alt)/{_len}",
				"icon-rotation-alignment" : "viewport",
				"text-offset" : [0, 0.1],
				"text-rotation-alignment" : "viewport",
				"text-padding" : 30
			},
			"paint" : {
				"text-color" : "#FDFDFD"
			}
        }, {
			"id" : "Road/label/Hexagon orange black (Alt)",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Road/label",
			"filter" : ["all", ["==", "_label_class", 64], ["!in", "Viz", 3]],
			"minzoom" : 6,
			"layout" : {
				"symbol-placement" : "line",
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Regular"],
				"text-size" : 8.67,
				"text-letter-spacing" : 0.03,
				"text-max-width" : 8,
				"text-field" : "{_name}",
				"icon-image" : "Road/Hexagon orange black (Alt)/{_len}",
				"icon-rotation-alignment" : "viewport",
				"text-offset" : [0, 0.1],
				"text-rotation-alignment" : "viewport",
				"text-padding" : 30
			},
			"paint" : {
				"text-color" : "#000000"
			}
        }, {
			"id" : "Road/label/Hexagon green white (Alt)",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Road/label",
			"filter" : ["all", ["==", "_label_class", 62], ["!in", "Viz", 3]],
			"minzoom" : 6,
			"layout" : {
				"symbol-placement" : "line",
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Regular"],
				"text-size" : 8.67,
				"text-letter-spacing" : 0.03,
				"text-max-width" : 8,
				"text-field" : "{_name}",
				"icon-image" : "Road/Hexagon green white (Alt)/{_len}",
				"icon-rotation-alignment" : "viewport",
				"text-offset" : [0, 0.1],
				"text-rotation-alignment" : "viewport",
				"text-padding" : 30
			},
			"paint" : {
				"text-color" : "#FDFDFD"
			}    
        }, {
			"id" : "Road/label/Hexagon red white (Alt)",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Road/label",
			"filter" : ["all", ["==", "_label_class", 60], ["!in", "Viz", 3]],
			"minzoom" : 6,
			"layout" : {
				"symbol-placement" : "line",
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Regular"],
				"text-size" : 8.67,
				"text-letter-spacing" : 0.03,
				"text-max-width" : 8,
				"text-field" : "{_name}",
				"icon-image" : "Road/Hexagon red white (Alt)/{_len}",
				"icon-rotation-alignment" : "viewport",
				"text-offset" : [0, 0.1],
				"text-rotation-alignment" : "viewport",
				"text-padding" : 30
			},
			"paint" : {
				"text-color" : "#FFFFFF"
			}
        }, {
			"id" : "Road/label/Hexagon white black (Alt)",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Road/label",
			"filter" : ["all", ["==", "_label_class", 56], ["!in", "Viz", 3]],
			"minzoom" : 6,
			"layout" : {
				"symbol-placement" : "line",
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Regular"],
				"text-size" : 8.67,
				"text-letter-spacing" : 0.03,
				"text-max-width" : 8,
				"text-field" : "{_name}",
				"icon-image" : "Road/Hexagon white black (Alt)/{_len}",
				"icon-rotation-alignment" : "viewport",
				"text-offset" : [0, 0.1],
				"text-rotation-alignment" : "viewport",
				"text-padding" : 30
			},
			"paint" : {
				"text-color" : "#000000"
			} 
        }, {
			"id" : "Road/label/Pentagon green yellow (Alt)",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Road/label",
			"filter" : ["all", ["==", "_label_class", 54], ["!in", "Viz", 3]],
			"minzoom" : 6,
			"layout" : {
				"symbol-placement" : "line",
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Regular"],
				"text-size" : 9.33,
				"text-max-width" : 8,
				"text-field" : "{_name}",
				"icon-image" : "Road/Pentagon green yellow (Alt)/{_len}",
				"icon-rotation-alignment" : "viewport",
				"text-offset" : [0, 0.1],
				"text-rotation-alignment" : "viewport",
				"text-padding" : 30
			},
			"paint" : {
				"text-color" : "#FFFF73"
			}    
        }, {
			"id" : "Road/label/Pentagon green white (Alt)",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Road/label",
			"filter" : ["all", ["==", "_label_class", 52], ["!in", "Viz", 3]],
			"minzoom" : 6,
			"layout" : {
				"symbol-placement" : "line",
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Regular"],
				"text-size" : 8.67,
				"text-max-width" : 8,
				"text-field" : "{_name}",
				"icon-image" : "Road/Pentagon green white (Alt)/{_len}",
				"icon-rotation-alignment" : "viewport",
				"text-offset" : [0, 0.1],
				"text-rotation-alignment" : "viewport",
				"text-padding" : 30
			},
			"paint" : {
				"text-color" : "#FFFFFF"
			}    
        }, {
			"id" : "Road/label/Pentagon yellow black (Alt)",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Road/label",
			"filter" : ["all", ["==", "_label_class", 50], ["!in", "Viz", 3]],
			"minzoom" : 6,
			"layout" : {
				"symbol-placement" : "line",
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Regular"],
				"text-size" : 8.67,
				"text-letter-spacing" : 0.02,
				"text-max-width" : 8,
				"text-field" : "{_name}",
				"icon-image" : "Road/Pentagon yellow black (Alt)/{_len}",
				"icon-rotation-alignment" : "viewport",
				"text-offset" : [0, 0.1],
				"text-rotation-alignment" : "viewport",
				"text-padding" : 30
			},
			"paint" : {
				"text-color" : "#000000"
			}   
        }, {
			"id" : "Road/label/Pentagon blue white (Alt)",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Road/label",
			"filter" : ["all", ["==", "_label_class", 48], ["!in", "Viz", 3]],
			"minzoom" : 6,
			"layout" : {
				"symbol-placement" : "line",
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Regular"],
				"text-size" : 9.33,
				"text-letter-spacing" : 0.02,
				"text-max-width" : 8,
				"text-field" : "{_name}",
				"icon-image" : "Road/Pentagon blue white (Alt)/{_len}",
				"icon-rotation-alignment" : "viewport",
				"text-offset" : [0, 0.1],
				"text-rotation-alignment" : "viewport",
				"text-padding" : 30
			},
			"paint" : {
				"text-color" : "#FFFFFF"
			}  
        }, {
			"id" : "Road/label/Pentagon white black (Alt)",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Road/label",
			"filter" : ["all", ["==", "_label_class", 46], ["!in", "Viz", 3]],
			"minzoom" : 6,
			"layout" : {
				"symbol-placement" : "line",
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Regular"],
				"text-size" : 8.67,
				"text-max-width" : 8,
				"text-field" : "{_name}",
				"icon-image" : "Road/Pentagon white black (Alt)/{_len}",
				"icon-rotation-alignment" : "viewport",
				"text-offset" : [0, 0.3],
				"text-rotation-alignment" : "viewport",
				"text-padding" : 30
			},
			"paint" : {
				"text-color" : "#000000"
			}
		}, {
			"id" : "Road/label/Pentagon inverse white black (Alt)",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Road/label",
			"filter" : ["all", ["==", "_label_class", 44], ["!in", "Viz", 3]],
			"minzoom" : 6,
			"layout" : {
				"symbol-placement" : "line",
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Regular"],
				"text-size" : 9.33,
				"text-max-width" : 8,
				"text-field" : "{_name}",
				"icon-image" : "Road/Pentagon inverse white black (Alt)/{_len}",
				"icon-rotation-alignment" : "viewport",
				"text-offset" : [0, 0.3],
				"text-rotation-alignment" : "viewport",
				"text-padding" : 30
			},
			"paint" : {
				"text-color" : "#000000"
			}  
        }, {
			"id" : "Road/label/Rectangle green yellow (Alt)",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Road/label",
			"filter" : ["all", ["==", "_label_class", 42], ["!in", "Viz", 3]],
			"minzoom" : 6,
			"layout" : {
				"symbol-placement" : "line",
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Regular"],
				"text-size" : 8.67,
				"text-max-width" : 8,
				"text-field" : "{_name}",
				"icon-image" : "Road/Rectangle green yellow (Alt)/{_len}",
				"icon-rotation-alignment" : "viewport",
				"text-offset" : [0, 0.2],
				"text-rotation-alignment" : "viewport",
				"text-padding" : 30
			},
			"paint" : {
				"text-color" : "#FFFF73"
			}
        }, {
			"id" : "Road/label/Rectangle green white (Alt)",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Road/label",
			"filter" : ["all", ["==", "_label_class", 40], ["!in", "Viz", 3]],
			"minzoom" : 6,
			"layout" : {
				"symbol-placement" : "line",
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Regular"],
				"text-size" : 8.67,
				"text-letter-spacing" : 0.05,
				"text-max-width" : 8,
				"text-field" : "{_name}",
				"icon-image" : "Road/Rectangle green white (Alt)/{_len}",
				"icon-rotation-alignment" : "viewport",
				"text-offset" : [0, 0.2],
				"text-rotation-alignment" : "viewport",
				"text-padding" : 30
			},
			"paint" : {
				"text-color" : "#FFFFFF"
			}     
        }, {
			"id" : "Road/label/Rectangle yellow black (Alt)",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Road/label",
			"filter" : ["all", ["==", "_label_class", 38], ["!in", "Viz", 3]],
			"minzoom" : 6,
			"layout" : {
				"symbol-placement" : "line",
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Regular"],
				"text-size" : 8.67,
				"text-letter-spacing" : 0.05,
				"text-max-width" : 8,
				"text-field" : "{_name}",
				"icon-image" : "Road/Rectangle yellow black (Alt)/{_len}",
				"icon-rotation-alignment" : "viewport",
				"text-offset" : [0, 0.2],
				"text-rotation-alignment" : "viewport",
				"text-padding" : 30
			},
			"paint" : {
				"text-color" : "#000000"
			}
        }, {
			"id" : "Road/label/Hexagon blue white (Alt)",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Road/label",
			"filter" : ["all", ["==", "_label_class", 58], ["!in", "Viz", 3]],
			"minzoom" : 6,
			"layout" : {
				"symbol-placement" : "line",
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Regular"],
				"text-size" : 8.67,
				"text-letter-spacing" : 0.03,
				"text-max-width" : 8,
				"text-field" : "{_name}",
				"icon-image" : "Road/Hexagon blue white (Alt)/{_len}",
				"icon-rotation-alignment" : "viewport",
				"text-offset" : [0, 0.1],
				"text-rotation-alignment" : "viewport"
			},
			"paint" : {
				"text-color" : "#FDFDFD"
			}
        }, {
			"id" : "Road/label/Rectangle red white (Alt)",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Road/label",
			"filter" : ["all", ["==", "_label_class", 36], ["!in", "Viz", 3]],
			"minzoom" : 6,
			"layout" : {
				"symbol-placement" : "line",
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Regular"],
				"text-size" : 8.67,
				"text-letter-spacing" : 0.05,
				"text-max-width" : 8,
				"text-field" : "{_name}",
				"icon-image" : "Road/Rectangle red white (Alt)/{_len}",
				"icon-rotation-alignment" : "viewport",
				"text-offset" : [0, 0.2],
				"text-rotation-alignment" : "viewport",
				"text-padding" : 30
			},
			"paint" : {
				"text-color" : "#FFFFFF"
			}  
        }, {
			"id" : "Road/label/Rectangle blue white (Alt)",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Road/label",
			"filter" : ["all", ["==", "_label_class", 34], ["!in", "Viz", 3]],
			"minzoom" : 6,
			"layout" : {
				"symbol-placement" : "line",
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Regular"],
				"text-size" : 9.33,
				"text-max-width" : 8,
				"text-field" : "{_name}",
				"icon-image" : "Road/Rectangle blue white (Alt)/{_len}",
				"icon-rotation-alignment" : "viewport",
				"text-offset" : [0, 0.2],
				"text-rotation-alignment" : "viewport",
				"text-padding" : 30
			},
			"paint" : {
				"text-color" : "#FFFFFF"
			}
        }, {
			"id" : "Road/label/Rectangle white black (Alt)",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Road/label",
			"filter" : ["all", ["==", "_label_class", 32], ["!in", "Viz", 3]],
			"minzoom" : 6,
			"layout" : {
				"symbol-placement" : "line",
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Regular"],
				"text-size" : 8.67,
				"text-letter-spacing" : 0.05,
				"text-max-width" : 8,
				"text-field" : "{_name}",
				"icon-image" : "Road/Rectangle white black (Alt)/{_len}",
				"icon-rotation-alignment" : "viewport",
				"text-offset" : [0, 0.2],
				"text-rotation-alignment" : "viewport",
				"text-padding" : 30
			},
			"paint" : {
				"text-color" : "#000000"
			} 
        }, {
			"id" : "Road/label/V-shaped white black (Alt)",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Road/label",
			"filter" : ["all", ["==", "_label_class", 30], ["!in", "Viz", 3]],
			"minzoom" : 6,
			"layout" : {
				"symbol-placement" : "line",
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Regular"],
				"text-size" : 8.67,
				"text-max-width" : 8,
				"text-field" : "{_name}",
				"icon-image" : "Road/V-shaped white black (Alt)/{_len}",
				"icon-rotation-alignment" : "viewport",
				"text-offset" : [0, 0.1],
				"text-rotation-alignment" : "viewport",
				"text-padding" : 30
			},
			"paint" : {
				"text-color" : "#343434"
			}      
        }, {
			"id" : "Road/label/U-shaped blue white (Alt)",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Road/label",
			"filter" : ["all", ["==", "_label_class", 28], ["!in", "Viz", 3]],
			"minzoom" : 6,
			"layout" : {
				"symbol-placement" : "line",
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Regular"],
				"text-size" : 9.33,
				"text-letter-spacing" : 0.02,
				"text-max-width" : 8,
				"text-field" : "{_name}",
				"icon-image" : "Road/U-shaped blue white (Alt)/{_len}",
				"icon-rotation-alignment" : "viewport",
				"text-offset" : [0, 0.1],
				"text-rotation-alignment" : "viewport",
				"text-padding" : 30
			},
			"paint" : {
				"text-color" : "#FFFFFF"
			}
        }, {
			"id" : "Road/label/U-shaped red white (Alt)",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Road/label",
			"filter" : ["all", ["==", "_label_class", 26], ["!in", "Viz", 3]],
			"minzoom" : 6,
			"layout" : {
				"symbol-placement" : "line",
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Regular"],
				"text-size" : 9.33,
				"text-max-width" : 8,
				"text-field" : "{_name}",
				"icon-image" : "Road/U-shaped red white (Alt)/{_len}",
				"icon-rotation-alignment" : "viewport",
				"text-offset" : [0, 0.1],
				"text-rotation-alignment" : "viewport",
				"text-padding" : 30
			},
			"paint" : {
				"text-color" : "#FFFFFF"
			}   
        }, {
			"id" : "Road/label/U-shaped yellow black (Alt)",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Road/label",
			"filter" : ["all", ["==", "_label_class", 24], ["!in", "Viz", 3]],
			"minzoom" : 6,
			"layout" : {
				"symbol-placement" : "line",
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Regular"],
				"text-size" : 9.33,
				"text-letter-spacing" : 0.02,
				"text-max-width" : 8,
				"text-field" : "{_name}",
				"icon-image" : "Road/U-shaped yellow black (Alt)/{_len}",
				"icon-rotation-alignment" : "viewport",
				"text-offset" : [0, 0.1],
				"text-rotation-alignment" : "viewport",
				"text-padding" : 30
			},
			"paint" : {
				"text-color" : "#000000"
			}  
        }, {
			"id" : "Road/label/U-shaped green leaf (Alt)",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Road/label",
			"filter" : ["all", ["==", "_label_class", 22], ["!in", "Viz", 3]],
			"minzoom" : 6,
			"layout" : {
				"symbol-placement" : "line",
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Regular"],
				"text-size" : 8.67,
				"text-max-width" : 8,
				"text-field" : "{_name}",
				"icon-image" : "Road/U-shaped green leaf (Alt)/{_len}",
				"icon-rotation-alignment" : "viewport",
				"text-offset" : [0, 0.1],
				"text-rotation-alignment" : "viewport",
				"text-padding" : 30
			},
			"paint" : {
				"text-color" : "#343434"
			}
        }, {
			"id" : "Road/label/U-shaped white green (Alt)",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Road/label",
			"filter" : ["all", ["==", "_label_class", 20], ["!in", "Viz", 3]],
			"minzoom" : 6,
			"layout" : {
				"symbol-placement" : "line",
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Regular"],
				"text-size" : 8.67,
				"text-max-width" : 8,
				"text-field" : "{_name}",
				"icon-image" : "Road/U-shaped white green (Alt)/{_len}",
				"icon-rotation-alignment" : "viewport",
				"text-offset" : [0, 0.1],
				"text-rotation-alignment" : "viewport",
				"text-padding" : 30
			},
			"paint" : {
				"text-color" : "#000000"
			}  
        }, {
			"id" : "Road/label/U-shaped white black (Alt)",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Road/label",
			"filter" : ["all", ["==", "_label_class", 18], ["!in", "Viz", 3]],
			"minzoom" : 6,
			"layout" : {
				"symbol-placement" : "line",
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Regular"],
				"text-size" : 9.33,
				"text-max-width" : 8,
				"text-field" : "{_name}",
				"icon-image" : "Road/U-shaped white black (Alt)/{_len}",
				"icon-rotation-alignment" : "viewport",
				"text-offset" : [0, 0.1],
				"text-rotation-alignment" : "viewport",
				"text-padding" : 30
			},
			"paint" : {
				"text-color" : "#000000"
			}
		}, {
			"id" : "Road/label/Secondary Hwy red white (Alt)",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Road/label",
			"filter" : ["all", ["==", "_label_class", 16], ["!in", "Viz", 3]],
			"minzoom" : 6,
			"layout" : {
				"symbol-placement" : "line",
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Regular"],
				"text-size" : 8.67,
				"text-max-width" : 8,
				"text-field" : "{_name}",
				"icon-image" : "Road/Secondary Hwy red white (Alt)/{_len}",
				"icon-rotation-alignment" : "viewport",
				"text-offset" : [0, 0.1],
				"text-rotation-alignment" : "viewport"
			},
			"paint" : {
				"text-color" : "#FFFFFF"
			}
        }, {
			"id" : "Road/label/Secondary Hwy green white (Alt)",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Road/label",
			"filter" : ["all", ["==", "_label_class", 14], ["!in", "Viz", 3]],
			"minzoom" : 6,
			"layout" : {
				"symbol-placement" : "line",
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Regular"],
				"text-size" : 9.33,
				"text-max-width" : 8,
				"text-field" : "{_name}",
				"icon-image" : "Road/Secondary Hwy green white (Alt)/{_len}",
				"icon-rotation-alignment" : "viewport",
				"text-offset" : [0, 0.1],
				"text-rotation-alignment" : "viewport",
				"text-padding" : 30
			},
			"paint" : {
				"text-color" : "#FFFFFF"
			} 
        }, {
			"id" : "Road/label/Secondary Hwy white black (Alt)",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Road/label",
			"filter" : ["all", ["==", "_label_class", 12], ["!in", "Viz", 3]],
			"minzoom" : 6,
			"layout" : {
				"symbol-placement" : "line",
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Regular"],
				"text-size" : 8.67,
				"text-max-width" : 8,
				"text-field" : "{_name}",
				"icon-image" : "Road/Secondary Hwy white black (Alt)/{_len}",
				"icon-rotation-alignment" : "viewport",
				"text-offset" : [0, 0.1],
				"text-rotation-alignment" : "viewport",
                "text-padding" : 30
			},
			"paint" : {
			     "text-color" : "#000000"
			}
        }, {
			"id" : "Road/label/Shield white black (Alt)",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Road/label",
			"filter" : ["all", ["==", "_label_class", 10], ["!in", "Viz", 3]],
			"minzoom" : 6,
			"layout" : {
				"symbol-placement" : "line",
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Regular"],
				"text-size" : 9.33,
				"text-max-width" : 8,
				"text-field" : "{_name}",
				"icon-image" : "Road/Shield white black (Alt)/{_len}",
				"icon-rotation-alignment" : "viewport",
				"text-rotation-alignment" : "viewport",
				"text-padding" : 30
			},
			"paint" : {
				"text-color" : "#343434"
			}     
        }, {
			"id" : "Road/label/Shield blue white (Alt)",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Road/label",
			"filter" : ["all", ["==", "_label_class", 8], ["!in", "Viz", 3]],
			"minzoom" : 6,
			"layout" : {
				"symbol-placement" : "line",
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Regular"],
				"text-size" : 8.67,
				"text-max-width" : 8,
				"text-field" : "{_name}",
				"icon-image" : "Road/Shield blue white (Alt)/{_len}",
				"icon-rotation-alignment" : "viewport",
				"text-rotation-alignment" : "viewport",
                "text-padding" : 30
			},
			"paint" : {
				"text-color" : "#FDFDFD"
			}   
        }, {
			"id" : "Road/label/Octagon green white",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Road/label",
			"filter" : ["all", ["==", "_label_class", 73], ["!in", "Viz", 3]],
			"minzoom" : 6,
			"layout" : {
				"symbol-placement" : "line",
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Regular"],
				"text-size" : 8.67,
				"text-letter-spacing" : 0.02,
				"text-max-width" : 8,
				"text-field" : "{_name}",
				"icon-image" : "Road/Octagon green white/{_len}",
				"icon-rotation-alignment" : "viewport",
				"text-offset" : [0, 0.1],
				"text-rotation-alignment" : "viewport",
				"text-padding" : 30
			},
			"paint" : {
				"text-color" : "#FDFDFD"
			}
        }, {
			"id" : "Road/label/Hexagon orange black",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Road/label",
			"filter" : ["all", ["==", "_label_class", 63], ["!in", "Viz", 3]],
			"minzoom" : 6,
			"layout" : {
				"symbol-placement" : "line",
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Regular"],
				"text-size" : 8.67,
				"text-letter-spacing" : 0.03,
				"text-max-width" : 8,
				"text-field" : "{_name}",
				"icon-image" : "Road/Hexagon orange black/{_len}",
				"icon-rotation-alignment" : "viewport",
				"text-offset" : [0, 0.1],
				"text-rotation-alignment" : "viewport",
				"text-padding" : 30
			},
			"paint" : {
				"text-color" : "#000000"
			} 
        }, {
			"id" : "Road/label/Hexagon green white",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Road/label",
			"filter" : ["all", ["==", "_label_class", 61], ["!in", "Viz", 3]],
			"minzoom" : 6,
			"layout" : {
				"symbol-placement" : "line",
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Regular"],
				"text-size" : 8.67,
				"text-letter-spacing" : 0.03,
				"text-max-width" : 8,
				"text-field" : "{_name}",
				"icon-image" : "Road/Hexagon green white/{_len}",
				"icon-rotation-alignment" : "viewport",
				"text-offset" : [0, 0.1],
				"text-rotation-alignment" : "viewport",
				"text-padding" : 30
			},
			"paint" : {
				"text-color" : "#FDFDFD"
			} 
        }, {
			"id" : "Road/label/Hexagon red white",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Road/label",
			"filter" : ["all", ["==", "_label_class", 59], ["!in", "Viz", 3]],
			"minzoom" : 6,
			"layout" : {
				"symbol-placement" : "line",
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Regular"],
				"text-size" : 8.67,
				"text-letter-spacing" : 0.03,
				"text-max-width" : 8,
				"text-field" : "{_name}",
				"icon-image" : "Road/Hexagon red white/{_len}",
				"icon-rotation-alignment" : "viewport",
				"text-offset" : [0, 0.1],
				"text-rotation-alignment" : "viewport",
				"text-padding" : 30
			},
			"paint" : {
				"text-color" : "#FFFFFF"
			}    
        }, {
			"id" : "Road/label/Hexagon white black",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Road/label",
			"filter" : ["all", ["==", "_label_class", 55], ["!in", "Viz", 3]],
			"minzoom" : 6,
			"layout" : {
				"symbol-placement" : "line",
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Regular"],
				"text-size" : 8.67,
				"text-letter-spacing" : 0.03,
				"text-max-width" : 8,
				"text-field" : "{_name}",
				"icon-image" : "Road/Hexagon white black/{_len}",
				"icon-rotation-alignment" : "viewport",
				"text-offset" : [0, 0.1],
				"text-rotation-alignment" : "viewport",
				"text-padding" : 30
			},
			"paint" : {
				"text-color" : "#000000"
			}    
        }, {
			"id" : "Road/label/Pentagon green yellow",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Road/label",
			"filter" : ["all", ["==", "_label_class", 53], ["!in", "Viz", 3]],
			"minzoom" : 6,
			"layout" : {
				"symbol-placement" : "line",
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Regular"],
				"text-size" : 9.33,
				"text-max-width" : 8,
				"text-field" : "{_name}",
				"icon-image" : "Road/Pentagon green yellow/{_len}",
				"icon-rotation-alignment" : "viewport",
				"text-offset" : [0, 0.1],
				"text-rotation-alignment" : "viewport",
				"text-padding" : 30
			},
			"paint" : {
				"text-color" : "#FFFF73"
			}    
        }, {
			"id" : "Road/label/Pentagon green white",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Road/label",
			"filter" : ["all", ["==", "_label_class", 51], ["!in", "Viz", 3]],
			"minzoom" : 6,
			"layout" : {
				"symbol-placement" : "line",
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Regular"],
				"text-size" : 8.67,
				"text-max-width" : 8,
				"text-field" : "{_name}",
				"icon-image" : "Road/Pentagon green white/{_len}",
				"icon-rotation-alignment" : "viewport",
				"text-offset" : [0, 0.1],
				"text-rotation-alignment" : "viewport",
				"text-padding" : 30
			},
			"paint" : {
				"text-color" : "#FFFFFF"
			}
        }, {
			"id" : "Road/label/Pentagon yellow black",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Road/label",
			"filter" : ["all", ["==", "_label_class", 49], ["!in", "Viz", 3]],
			"minzoom" : 6,
			"layout" : {
				"symbol-placement" : "line",
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Regular"],
				"text-size" : 8.67,
				"text-letter-spacing" : 0.02,
				"text-max-width" : 8,
				"text-field" : "{_name}",
				"icon-image" : "Road/Pentagon yellow black/{_len}",
				"icon-rotation-alignment" : "viewport",
				"text-offset" : [0, 0.1],
				"text-rotation-alignment" : "viewport",
				"text-padding" : 30
			},
			"paint" : {
				"text-color" : "#000000"
			}
        }, {
			"id" : "Road/label/Pentagon blue white",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Road/label",
			"filter" : ["all", ["==", "_label_class", 47], ["!in", "Viz", 3]],
			"minzoom" : 6,
			"layout" : {
				"symbol-placement" : "line",
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Regular"],
				"text-size" : 9.33,
				"text-letter-spacing" : 0.02,
				"text-max-width" : 8,
				"text-field" : "{_name}",
				"icon-image" : "Road/Pentagon blue white/{_len}",
				"icon-rotation-alignment" : "viewport",
				"text-offset" : [0, 0.1],
				"text-rotation-alignment" : "viewport",
				"text-padding" : 30
			},
			"paint" : {
				"text-color" : "#FFFFFF"
			}   
        }, {
			"id" : "Road/label/Pentagon white black",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Road/label",
			"filter" : ["all", ["==", "_label_class", 45], ["!in", "Viz", 3]],
			"minzoom" : 6,
			"layout" : {
				"symbol-placement" : "line",
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Regular"],
				"text-size" : 8.67,
				"text-max-width" : 8,
				"text-field" : "{_name}",
				"icon-image" : "Road/Pentagon white black/{_len}",
				"icon-rotation-alignment" : "viewport",
				"text-offset" : [0, 0.3],
				"text-rotation-alignment" : "viewport",
				"text-padding" : 30
			},
			"paint" : {
				"text-color" : "#000000"
			}   
        }, {
			"id" : "Road/label/Pentagon inverse white black",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Road/label",
			"filter" : ["all", ["==", "_label_class", 43], ["!in", "Viz", 3]],
			"minzoom" : 6,
			"layout" : {
				"symbol-placement" : "line",
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Regular"],
				"text-size" : 9.33,
				"text-max-width" : 8,
				"text-field" : "{_name}",
				"icon-image" : "Road/Pentagon inverse white black/{_len}",
				"icon-rotation-alignment" : "viewport",
				"text-offset" : [0, 0.3],
				"text-rotation-alignment" : "viewport",
				"text-padding" : 30
			},
			"paint" : {
				"text-color" : "#000000"
			}    
        }, {
			"id" : "Road/label/Rectangle green yellow",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Road/label",
			"filter" : ["all", ["==", "_label_class", 41], ["!in", "Viz", 3]],
			"minzoom" : 6,
			"layout" : {
				"symbol-placement" : "line",
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Regular"],
				"text-size" : 8.67,
				"text-max-width" : 8,
				"text-field" : "{_name}",
				"icon-image" : "Road/Rectangle green yellow/{_len}",
				"icon-rotation-alignment" : "viewport",
				"text-offset" : [0, 0.2],
				"text-rotation-alignment" : "viewport",
				"text-padding" : 30
			},
			"paint" : {
				"text-color" : "#FFFF73"
			}   
        }, {
			"id" : "Road/label/Rectangle green white",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Road/label",
			"filter" : ["all", ["==", "_label_class", 39], ["!in", "Viz", 3]],
			"minzoom" : 6,
			"layout" : {
				"symbol-placement" : "line",
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Regular"],
				"text-size" : 8.67,
				"text-letter-spacing" : 0.05,
				"text-max-width" : 8,
				"text-field" : "{_name}",
				"icon-image" : "Road/Rectangle green white/{_len}",
				"icon-rotation-alignment" : "viewport",
				"text-offset" : [0, 0.2],
				"text-rotation-alignment" : "viewport",
				"text-padding" : 30
			},
			"paint" : {
				"text-color" : "#FFFFFF"
			}     
        }, {
			"id" : "Road/label/Rectangle yellow black",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Road/label",
			"filter" : ["all", ["==", "_label_class", 37], ["!in", "Viz", 3]],
			"minzoom" : 6,
			"layout" : {
				"symbol-placement" : "line",
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Regular"],
				"text-size" : 8.67,
				"text-letter-spacing" : 0.05,
				"text-max-width" : 8,
				"text-field" : "{_name}",
				"icon-image" : "Road/Rectangle yellow black/{_len}",
				"icon-rotation-alignment" : "viewport",
				"text-offset" : [0, 0.2],
				"text-rotation-alignment" : "viewport",
				"text-padding" : 30
			},
			"paint" : {
				"text-color" : "#000000"
			} 
        }, {
			"id" : "Road/label/Hexagon blue white",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Road/label",
			"filter" : ["all", ["==", "_label_class", 57], ["!in", "Viz", 3]],
			"minzoom" : 6,
			"layout" : {
				"symbol-placement" : "line",
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Regular"],
				"text-size" : 8.67,
				"text-letter-spacing" : 0.03,
				"text-max-width" : 8,
				"text-field" : "{_name}",
				"icon-image" : "Road/Hexagon blue white/{_len}",
				"icon-rotation-alignment" : "viewport",
				"text-offset" : [0, 0.1],
				"text-rotation-alignment" : "viewport"
			},
			"paint" : {
				"text-color" : "#FDFDFD"
			}
        }, {
			"id" : "Road/label/Rectangle red white",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Road/label",
			"filter" : ["all", ["==", "_label_class", 35], ["!in", "Viz", 3]],
			"minzoom" : 6,
			"layout" : {
				"symbol-placement" : "line",
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Regular"],
				"text-size" : 8.67,
				"text-letter-spacing" : 0.05,
				"text-max-width" : 8,
				"text-field" : "{_name}",
				"icon-image" : "Road/Rectangle red white/{_len}",
				"icon-rotation-alignment" : "viewport",
				"text-offset" : [0, 0.2],
				"text-rotation-alignment" : "viewport",
				"text-padding" : 30
			},
			"paint" : {
				"text-color" : "#FFFFFF"
			}  
        }, {
			"id" : "Road/label/Rectangle blue white",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Road/label",
			"filter" : ["all", ["==", "_label_class", 33], ["!in", "Viz", 3]],
			"minzoom" : 6,
			"layout" : {
				"symbol-placement" : "line",
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Regular"],
				"text-size" : 9.33,
				"text-max-width" : 8,
				"text-field" : "{_name}",
				"icon-image" : "Road/Rectangle blue white/{_len}",
				"icon-rotation-alignment" : "viewport",
				"text-offset" : [0, 0.2],
				"text-rotation-alignment" : "viewport",
				"text-padding" : 30
			},
			"paint" : {
				"text-color" : "#FFFFFF"
			}  
        }, {
			"id" : "Road/label/Rectangle white black",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Road/label",
			"filter" : ["all", ["==", "_label_class", 31], ["!in", "Viz", 3]],
			"minzoom" : 6,
			"layout" : {
				"symbol-placement" : "line",
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Regular"],
				"text-size" : 8.67,
				"text-letter-spacing" : 0.05,
				"text-max-width" : 8,
				"text-field" : "{_name}",
				"icon-image" : "Road/Rectangle white black/{_len}",
				"icon-rotation-alignment" : "viewport",
				"text-offset" : [0, 0.2],
				"text-rotation-alignment" : "viewport",
				"text-padding" : 30
			},
			"paint" : {
				"text-color" : "#000000"
			}   
        }, {
			"id" : "Road/label/V-shaped white black",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Road/label",
			"filter" : ["all", ["==", "_label_class", 29], ["!in", "Viz", 3]],
			"minzoom" : 6,
			"layout" : {
				"symbol-placement" : "line",
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Regular"],
				"text-size" : 8.67,
				"text-max-width" : 8,
				"text-field" : "{_name}",
				"icon-image" : "Road/V-shaped white black/{_len}",
				"icon-rotation-alignment" : "viewport",
				"text-offset" : [0, 0.1],
				"text-rotation-alignment" : "viewport",
				"text-padding" : 30
			},
			"paint" : {
				"text-color" : "#343434"
			}     
        }, {
			"id" : "Road/label/U-shaped blue white",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Road/label",
			"filter" : ["all", ["==", "_label_class", 27], ["!in", "Viz", 3]],
			"minzoom" : 6,
			"layout" : {
				"symbol-placement" : "line",
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Regular"],
				"text-size" : 9.33,
				"text-letter-spacing" : 0.02,
				"text-max-width" : 8,
				"text-field" : "{_name}",
				"icon-image" : "Road/U-shaped blue white/{_len}",
				"icon-rotation-alignment" : "viewport",
				"text-offset" : [0, 0.1],
				"text-rotation-alignment" : "viewport",
				"text-padding" : 30
			},
			"paint" : {
				"text-color" : "#FFFFFF"
			}
        }, {
			"id" : "Road/label/U-shaped red white",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Road/label",
			"filter" : ["all", ["==", "_label_class", 25], ["!in", "Viz", 3]],
			"minzoom" : 6,
			"layout" : {
				"symbol-placement" : "line",
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Regular"],
				"text-size" : 9.33,
				"text-max-width" : 8,
				"text-field" : "{_name}",
				"icon-image" : "Road/U-shaped red white/{_len}",
				"icon-rotation-alignment" : "viewport",
				"text-offset" : [0, 0.1],
				"text-rotation-alignment" : "viewport",
				"text-padding" : 30
			},
			"paint" : {
				"text-color" : "#FFFFFF"
			}    
        }, {
			"id" : "Road/label/U-shaped yellow black",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Road/label",
			"filter" : ["all", ["==", "_label_class", 23], ["!in", "Viz", 3]],
			"minzoom" : 6,
			"layout" : {
				"symbol-placement" : "line",
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Regular"],
				"text-size" : 9.33,
				"text-letter-spacing" : 0.02,
				"text-max-width" : 8,
				"text-field" : "{_name}",
				"icon-image" : "Road/U-shaped yellow black/{_len}",
				"icon-rotation-alignment" : "viewport",
				"text-offset" : [0, 0.1],
				"text-rotation-alignment" : "viewport",
				"text-padding" : 30
			},
			"paint" : {
				"text-color" : "#000000"
			}   
        }, {
			"id" : "Road/label/U-shaped green leaf",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Road/label",
			"filter" : ["all", ["==", "_label_class", 21], ["!in", "Viz", 3]],
			"minzoom" : 6,
			"layout" : {
				"symbol-placement" : "line",
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Regular"],
				"text-size" : 8.67,
				"text-max-width" : 8,
				"text-field" : "{_name}",
				"icon-image" : "Road/U-shaped green leaf/{_len}",
				"icon-rotation-alignment" : "viewport",
				"text-offset" : [0, 0.1],
				"text-rotation-alignment" : "viewport",
				"text-padding" : 30
			},
			"paint" : {
				"text-color" : "#343434"
			}    
        }, {
			"id" : "Road/label/U-shaped white green",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Road/label",
			"filter" : ["all", ["==", "_label_class", 19], ["!in", "Viz", 3]],
			"minzoom" : 6,
			"layout" : {
				"symbol-placement" : "line",
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Regular"],
				"text-size" : 8.67,
				"text-max-width" : 8,
				"text-field" : "{_name}",
				"icon-image" : "Road/U-shaped white green/{_len}",
				"icon-rotation-alignment" : "viewport",
				"text-offset" : [0, 0.1],
				"text-rotation-alignment" : "viewport",
				"text-padding" : 30
			},
			"paint" : {
				"text-color" : "#000000"
			}   
        }, {
			"id" : "Road/label/U-shaped white black",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Road/label",
			"filter" : ["all", ["==", "_label_class", 17], ["!in", "Viz", 3]],
			"minzoom" : 6,
			"layout" : {
				"symbol-placement" : "line",
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Regular"],
				"text-size" : 9.33,
				"text-max-width" : 8,
				"text-field" : "{_name}",
				"icon-image" : "Road/U-shaped white black/{_len}",
				"icon-rotation-alignment" : "viewport",
				"text-offset" : [0, 0.1],
				"text-rotation-alignment" : "viewport",
				"text-padding" : 30
			},
			"paint" : {
				"text-color" : "#000000"
			}       
        }, {
			"id" : "Road/label/Secondary Hwy red white",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Road/label",
			"filter" : ["all", ["==", "_label_class", 15], ["!in", "Viz", 3]],
			"minzoom" : 6,
			"layout" : {
				"symbol-placement" : "line",
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Regular"],
				"text-size" : 8.67,
				"text-max-width" : 8,
				"text-field" : "{_name}",
				"icon-image" : "Road/Secondary Hwy red white/{_len}",
				"icon-rotation-alignment" : "viewport",
				"text-offset" : [0, 0.1],
				"text-rotation-alignment" : "viewport",
				"text-padding" : 30
			},
			"paint" : {
				"text-color" : "#FFFFFF"
			}         
        }, {
			"id" : "Road/label/Secondary Hwy green white",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Road/label",
			"filter" : ["all", ["==", "_label_class", 13], ["!in", "Viz", 3]],
			"minzoom" : 6,
			"layout" : {
				"symbol-placement" : "line",
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Regular"],
				"text-size" : 9.33,
				"text-max-width" : 8,
				"text-field" : "{_name}",
				"icon-image" : "Road/Secondary Hwy green white/{_len}",
				"icon-rotation-alignment" : "viewport",
				"text-offset" : [0, 0.1],
				"text-rotation-alignment" : "viewport",
				"text-padding" : 30
			},
			"paint" : {
				"text-color" : "#FFFFFF"
			}
        }, {
			"id" : "Road/label/Secondary Hwy white black",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Road/label",
			"filter" : ["all", ["==", "_label_class", 11], ["!in", "Viz", 3]],
			"minzoom" : 6,
			"layout" : {
				"symbol-placement" : "line",
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Regular"],
				"text-size" : 8.67,
				"text-max-width" : 8,
				"text-field" : "{_name}",
				"icon-image" : "Road/Secondary Hwy white black/{_len}",
				"icon-rotation-alignment" : "viewport",
				"text-offset" : [0, 0.1],
				"text-rotation-alignment" : "viewport",
                "text-padding" : 30
			},
			"paint" : {
				"text-color" : "#000000"
			}
		}, {
			"id" : "Road/label/Shield white black",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Road/label",
			"filter" : ["all", ["==", "_label_class", 9], ["!in", "Viz", 3]],
			"minzoom" : 6,
			"layout" : {
				"symbol-placement" : "line",
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Regular"],
				"text-size" : 9.33,
				"text-max-width" : 8,
				"text-field" : "{_name}",
				"icon-image" : "Road/Shield white black/{_len}",
				"icon-rotation-alignment" : "viewport",
				"text-rotation-alignment" : "viewport",
				"text-padding" : 30
			},
			"paint" : {
				"text-color" : "#343434"
			}          
        }, {
			"id" : "Road/label/Shield blue white",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Road/label",
			"filter" : ["all", ["==", "_label_class", 7], ["!in", "Viz", 3]],
			"minzoom" : 6,
			"layout" : {
				"symbol-placement" : "line",
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Regular"],
				"text-size" : 8.67,
				"text-max-width" : 8,
				"text-field" : "{_name}",
				"icon-image" : "Road/Shield blue white/{_len}",
				"icon-rotation-alignment" : "viewport",
				"text-rotation-alignment" : "viewport",
                "text-padding" : 30
            },
			"paint" : {
				"text-color" : "#FDFDFD"
			}
        }, {
			"id" : "Pedestrian/label/Default",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Pedestrian/label",
			"minzoom" : 15,
			"layout" : {
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Regular"],
				"text-size" : 9.33,
				"text-letter-spacing" : 0.05,
				"text-max-width" : 8,
				"text-field" : "{_name_global}"
			},
			"paint" : {
				"text-color" : "#666666",
				"text-halo-color" : "#FDFDFD",
				"text-halo-width" : 0.67
			}
        }, {
			"id" : "Road/label/Pedestrian",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Road/label",
			"filter" : ["all", ["==", "_label_class", 6], ["!in", "Viz", 3]],
			"minzoom" : 15,
			"layout" : {
				"symbol-placement" : "line",
				"symbol-avoid-edges" : true,
                "symbol-spacing" : 1000,
				"text-font" : ["Arial Bold"],
				"text-size" : 9.33,
				"text-letter-spacing" : 0.05,
				"text-max-width" : 8,
				"text-field" : "{_name_global}"
			},
			"paint" : {
				"text-color" : "#666666",
				"text-halo-color" : "#FDFDFD",
				"text-halo-width" : 0.67
			}     
        }, {
			"id" : "Road/label/Local",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Road/label",
			"filter" : ["all", ["==", "_label_class", 5], ["!in", "Viz", 3]],
			"minzoom" : 12,
			"layout" : {
				"symbol-placement" : "line",
				"symbol-avoid-edges" : true,
                "symbol-spacing" : 1000,
				"text-font" : ["Arial Bold"],
                "text-size" : {
					"stops" : [[12, 8], [16, 10.67]]
				},
				"text-letter-spacing" : 0.09,
				"text-max-width" : 8,
				"text-field" : "{_name_global}",
				"text-padding" : 3
			},
			"paint" : {
                "text-color" : {
					"stops" : [[12, "#a5a48e"], [18, "#666666"]]
				},
                "text-halo-color" : {
					"stops" : [[12, "#F2EFCC"], [13, "#FDFDFD"]]
				},
				"text-halo-width" : 0.67
			}   
        }, {
			"id" : "Road/label/Minor",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Road/label",
			"filter" : ["all", ["==", "_label_class", 4], ["!in", "Viz", 3]],
			"minzoom" : 10,
			"layout" : {
				"symbol-placement" : "line",
				"symbol-avoid-edges" : true,
                "symbol-spacing" : 1000,
				"text-font" : ["Arial Bold"],
				"text-size" : {
					"stops" : [[10, 8], [12, 9], [14, 10.67]]
				},
				"text-letter-spacing" : 0.09,
				"text-max-width" : 8,
				"text-field" : "{_name_global}"
			},
			"paint" : {
                "text-color" : {
					"stops" : [[10, "#aaaaaa"], [12, "#919191"], [14, "#666666"]]
				},
                "text-halo-color" : {
					"stops" : [[10, "#F2EFCC"], [11, "#F7E9D2"]]
				},
				"text-halo-width" : 0.67
			}
		}, {
			"id" : "Road/label/Major, alt name",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Road/label",
			"filter" : ["all", ["==", "_label_class", 3], ["!in", "Viz", 3]],
			"minzoom" : 10,
			"layout" : {
				"symbol-placement" : "line",
				"symbol-avoid-edges" : true,
                "symbol-spacing" : 1000,
				"text-font" : ["Arial Bold"],
				"text-size" : {
					"stops" : [[10, 9], [12, 10.67]]
				},
				"text-letter-spacing" : 0.09,
				"text-max-width" : 8,
				"text-field" : "{_name}"
			},
			"paint" : {
				"text-color" : {
					"stops" : [[10, "#aaaaaa"], [11, "#919191"], [12, "#595959"]]
				},
                "text-halo-color" : {
					"stops" : [[10, "#F2EFCC"], [11, "#F2BDA3"]]
				},
				"text-halo-width" : 0.67
			}
		}, {
			"id" : "Road/label/Major",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Road/label",
			"filter" : ["all", ["==", "_label_class", 2], ["!in", "Viz", 3]],
			"minzoom" : 10,
			"layout" : {
				"symbol-placement" : "line",
				"symbol-avoid-edges" : true,
                "symbol-spacing" : 1000,
				"text-font" : ["Arial Bold"],
				"text-size" : {
					"stops" : [[10, 9], [12, 10.67]]
				},
				"text-letter-spacing" : 0.09,
				"text-max-width" : 8,
				"text-field" : "{_name_global}"
			},
			"paint" : {
                "text-color" : {
					"stops" : [[10, "#aaaaaa"], [11, "#919191"], [12, "#595959"]]
				},
                "text-halo-color" : {
					"stops" : [[10, "#F2EFCC"], [11, "#F2BDA3"]]
				},
				"text-halo-width" : 0.67
			}
		}, {
			"id" : "Road/label/Freeway Motorway, alt name",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Road/label",
			"filter" : ["all", ["==", "_label_class", 1], ["!in", "Viz", 3]],
			"minzoom" : 10,
			"layout" : {
				"symbol-placement" : "line",
				"symbol-avoid-edges" : true,
                "symbol-spacing" : 1000,
				"text-font" : ["Arial Bold"],
				"text-size" : {
					"stops" : [[10, 9], [12, 10.67]]
				},
				"text-letter-spacing" : 0.09,
				"text-max-width" : 8,
				"text-field" : "{_name}"
			},
			"paint" : {
				"text-color" : "#4C4C4C",
				"text-halo-color" : "#E69973",
				"text-halo-width" : 0.67
			}
        }, {
			"id" : "Road/label/Highway",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Road/label",
			"filter" : ["all", ["==", "_label_class", 75], ["!in", "Viz", 3]],
			"minzoom" : 10,
			"layout" : {
				"symbol-placement" : "line",
				"symbol-avoid-edges" : true,
                "symbol-spacing" : 1000,
				"text-font" : ["Arial Bold"],
				"text-size" : {
					"stops" : [[10, 9], [12, 10.67]]
				},
				"text-letter-spacing" : 0.09,
				"text-max-width" : 8,
				"text-field" : "{_name_global}"
			},
			"paint" : {
				"text-color" : "#4C4C4C",
				"text-halo-color" : "#E69973",
				"text-halo-width" : 0.67
			}  
        }, {
			"id" : "Road/label/Freeway Motorway",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Road/label",
			"filter" : ["all", ["==", "_label_class", 0], ["!in", "Viz", 3]],
			"minzoom" : 10,
			"layout" : {
				"symbol-placement" : "line",
				"symbol-avoid-edges" : true,
                "symbol-spacing" : 1000,
				"text-font" : ["Arial Bold"],
                "text-size" : {
					"stops" : [[10, 9], [12, 10.67]]
				},
				"text-letter-spacing" : 0.09,
				"text-max-width" : 8,
				"text-field" : "{_name_global}"
			},
			"paint" : {
				"text-color" : "#4C4C4C",
				"text-halo-color" : "#E69973",
				"text-halo-width" : 0.67
			}   
		}, {
			"id" : "Cemetery/label/Default",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Cemetery/label",
			"minzoom" : 13,
			"layout" : {
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Regular"],
				"text-size" : 10,
				"text-letter-spacing" : 0.05,
				"text-max-width" : 8,
				"text-field" : "{_name_global}"
			},
			"paint" : {
				"text-color" : "#728944",
				"text-halo-color" : "#E3ECBF",
				"text-halo-width" : 0.67
			}
        }, {
			"id" : "Freight/label/Default",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Freight/label",
			"minzoom" : 13,
			"layout" : {
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Regular"],
				"text-size" : 10,
				"text-letter-spacing" : 0.05,
				"text-max-width" : 8,
				"text-field" : "{_name_global}"
			},
			"paint" : {
				"text-color" : "#998973",
				"text-halo-color" : "#E8DEBB",
				"text-halo-width" : 0.67
			}  
        }, {
			"id" : "Water and wastewater/label/Default",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Water and wastewater/label",
			"minzoom" : 13,
			"layout" : {
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Regular"],
				"text-size" : 10,
				"text-letter-spacing" : 0.05,
				"text-max-width" : 8,
				"text-field" : "{_name_global}"
			},
			"paint" : {
				"text-color" : "#686868",
				"text-halo-color" : "#E3E2CE",
				"text-halo-width" : 0.67
			}    
        }, {
			"id" : "Port/label/Default",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Port/label",
            "minzoom" : 10,
			"layout" : {
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Regular"],
				"text-size" : 10,
				"text-letter-spacing" : 0.05,
				"text-max-width" : 8,
				"text-field" : "{_name_global}"
			},
			"paint" : {
				"text-color" : "#686868",
				"text-halo-color" : "#E3E2CE",
				"text-halo-width" : 0.67
			}   
        }, {
			"id" : "Industry/label/Default",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Industry/label",
			"minzoom" : 13,
			"layout" : {
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Regular"],
				"text-size" : 10,
				"text-letter-spacing" : 0.05,
				"text-max-width" : 8,
				"text-field" : "{_name_global}"
			},
			"paint" : {
				"text-color" : "#686868",
				"text-halo-color" : "#E3E2CE",
				"text-halo-width" : 0.67
			}   
        }, {
			"id" : "Government/label/Default",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Government/label",
			"minzoom" : 13,
			"layout" : {
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Regular"],
				"text-size" : 10,
				"text-letter-spacing" : 0.05,
				"text-max-width" : 8,
				"text-field" : "{_name_global}"
			},
			"paint" : {
				"text-color" : "#998973",
				"text-halo-color" : "#E8DEBB",
				"text-halo-width" : 0.67
			}    
        }, {
			"id" : "Finance/label/Default",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Finance/label",
			"minzoom" : 13,
			"layout" : {
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Regular"],
				"text-size" : 10,
				"text-letter-spacing" : 0.05,
				"text-max-width" : 8,
				"text-field" : "{_name_global}"
			},
			"paint" : {
				"text-color" : "#998973",
				"text-halo-color" : "#E8DEBB",
				"text-halo-width" : 0.67
			}   
        }, {
			"id" : "Emergency/label/Default",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Emergency/label",
			"minzoom" : 13,
			"layout" : {
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Regular"],
				"text-size" : 10,
				"text-letter-spacing" : 0.05,
				"text-max-width" : 8,
				"text-field" : "{_name_global}"
			},
			"paint" : {
				"text-color" : "#998973",
				"text-halo-color" : "#E8DEBB",
				"text-halo-width" : 0.67
			}  
        }, {
			"id" : "Indigenous/label/Default",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Indigenous/label",
			"minzoom" : 7,
			"layout" : {
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Regular"],
				"text-size" : 10,
				"text-letter-spacing" : 0.05,
				"text-max-width" : 8,
				"text-field" : "{_name_global}"
			},
			"paint" : {
				"text-color" : "#998973",
				"text-halo-color" : "#ede4c5",
				"text-halo-width" : 0.67
			}   
        }, {
			"id" : "Military/label/Default",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Military/label",
			"minzoom" : 6,
			"layout" : {
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Regular"],
				"text-size" : 10,
				"text-letter-spacing" : 0.05,
				"text-max-width" : 8,
				"text-field" : "{_name_global}",
				"text-padding" : 25
			},
			"paint" : {
				"text-color" : "#686868",
				"text-halo-color" : "#E3E2CE",
				"text-halo-width" : 0.67
			} 
		}, {
			"id" : "Transportation/label/Default",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Transportation/label",
			"minzoom" : 13,
			"layout" : {
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Regular"],
				"text-size" : 10,
				"text-letter-spacing" : 0.05,
				"text-max-width" : 8,
				"text-field" : "{_name_global}"
			},
			"paint" : {
				"text-color" : "#686868",
				"text-halo-color" : "#E3E2CE",
				"text-halo-width" : 0.67
			}
		}, {
			"id" : "Beach/label/Default",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Beach/label",
            "minzoom" : 13,
			"layout" : {
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Regular"],
				"text-size" : 9.33,
				"text-letter-spacing" : 0.08,
				"text-max-width" : 8,
				"text-field" : "{_name_global}"
			},
			"paint" : {
				"text-color" : "#B4A783",
				"text-halo-color" : "#F2F0CF",
				"text-halo-width" : 0.67
			}
		}, {
			"id" : "Golf course/label/Default",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Golf course/label",
			"minzoom" : 11,
			"layout" : {
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Regular"],
				"text-size" : 10,
				"text-letter-spacing" : 0.05,
				"text-max-width" : 8,
				"text-field" : "{_name_global}"
			},
			"paint" : {
				"text-color" : "#8A9766",
				"text-halo-color" : "#E3ECBF",
				"text-halo-width" : 0.67
			}
		}, {
			"id" : "Zoo/label/Default",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Zoo/label",
			"minzoom" : 11,
			"layout" : {
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Regular"],
				"text-size" : 10,
				"text-letter-spacing" : 0.05,
				"text-max-width" : 8,
				"text-field" : "{_name_global}"
			},
			"paint" : {
				"text-color" : "#797859",
				"text-halo-color" : "#dee3bc",
				"text-halo-width" : 0.67
			}
		}, {
			"id" : "Retail/label/Default",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Retail/label",
			"minzoom" : 13,
			"layout" : {
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Regular"],
				"text-size" : 10,
				"text-letter-spacing" : 0.05,
				"text-max-width" : 8,
				"text-field" : "{_name_global}"
			},
			"paint" : {
				"text-color" : "#BB956B",
				"text-halo-color" : "#F6E5B7",
				"text-halo-width" : 0.67
			}
		}, {
			"id" : "Landmark/label/Default",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Landmark/label",
			"minzoom" : 13,
			"layout" : {
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Regular"],
				"text-size" : 10,
				"text-letter-spacing" : 0.05,
				"text-max-width" : 8,
				"text-field" : "{_name_global}"
			},
			"paint" : {
				"text-color" : "#BB956B",
				"text-halo-color" : "#F6E5B7",
				"text-halo-width" : 0.67
			}
		}, {
			"id" : "Openspace or forest/label/Default",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Openspace or forest/label",
			"minzoom" : 9,
			"layout" : {
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Regular"],
				"text-size" : 10,
				"text-letter-spacing" : 0.05,
				"text-max-width" : 8,
				"text-field" : "{_name_global}"
			},
			"paint" : {
				"text-color" : "#797859",
				"text-halo-color" : "#dee3bc",
				"text-halo-width" : 0.67
			}
        }, {
			"id" : "Park or farming/label/Default",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Park or farming/label",
			"minzoom" : 11,
			"layout" : {
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Regular"],
				"text-size" : 10,
				"text-letter-spacing" : 0.05,
				"text-max-width" : 8,
				"text-field" : "{_name_global}",
				"text-padding" : 25
			},
			"paint" : {
				"text-color" : "#797859",
				"text-halo-color" : "#dee3bc",
				"text-halo-width" : 0.67
			} 
        }, {
			"id" : "Point of interest/Park",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Point of interest",
			"filter" : ["==", "_label_class", 1],
			"minzoom" : 9,
			"layout" : {
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Regular"],
				"text-size" : 10,
				"text-anchor" : "center",
				"text-letter-spacing" : 0.08,
				"text-max-width" : 8,
				"text-field" : "{_name_global}"
			},
			"paint" : {
				"text-color" : "#5C7533",
				"text-halo-color" : "#F2F0CF",
				"text-halo-width" : 0.93
			}  
        }, {
			"id" : "Education/label/Default",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Education/label",
			"minzoom" : 11,
			"layout" : {
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Regular"],
				"text-size" : 10,
				"text-letter-spacing" : 0.05,
				"text-max-width" : 8,
				"text-field" : "{_name_global}"
			},
			"paint" : {
				"text-color" : "#988D70",
				"text-halo-color" : "#E9E9AB",
				"text-halo-width" : 0.67
			}   
        }, {
			"id" : "Medical/label/Default",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Medical/label",
			"minzoom" : 11,
			"layout" : {
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Regular"],
				"text-size" : 10,
				"text-letter-spacing" : 0.05,
				"text-max-width" : 8,
				"text-field" : "{_name_global}"
			},
			"paint" : {
				"text-color" : "#CE8966",
				"text-halo-color" : "#F7DFB9",
				"text-halo-width" : 0.67
			}   
        }, {
			"id" : "Admin1 forest or park/label/Default",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Admin1 forest or park/label",
			"minzoom" : 9,
			"layout" : {
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Regular"],
				"text-size" : 10,
				"text-letter-spacing" : 0.05,
				"text-max-width" : 8,
				"text-field" : "{_name_global}",
				"text-padding" : 25
			},
			"paint" : {
				"text-color" : "#797859",
				"text-halo-color" : "#dee3bc",
				"text-halo-width" : 0.67
			}    
        }, {
			"id" : "Admin0 forest or park/label/Default",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Admin0 forest or park/label",
			"minzoom" : 6,
			"layout" : {
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Regular"],
				"text-size" : 10,
				"text-letter-spacing" : 0.05,
				"text-max-width" : 8,
				"text-field" : "{_name_global}",
				"text-padding" : 25
			},
			"paint" : {
				"text-color" : "#797859",
				"text-halo-color" : "#dee3bc",
				"text-halo-width" : 0.67
			}
        }, {
			"id" : "Airport/label/Airport property",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Airport/label",
			"minzoom" : 9,
			"layout" : {
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Regular"],
				"text-size" : 10.67,
				"text-letter-spacing" : 0.05,
				"text-max-width" : 8,
				"text-field" : "{_name_global}",
				"text-padding" : 15
			},
			"paint" : {
				"text-color" : "#686868",
				"text-halo-color" : "#E3E2CE",
				"text-halo-width" : 0.67
			}
		}, {
			"id" : "Exit/Default",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Exit",
			"minzoom" : 15,
			"layout" : {
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Regular"],
				"text-size" : 9.33,
				"text-anchor" : "center",
				"text-letter-spacing" : 0.05,
				"text-max-width" : 8,
				"text-field" : "{_name_global}",
				"icon-image" : "Exit/Default/{_len}",
				"icon-rotation-alignment" : "viewport",
				"text-offset" : [0, 0.3],
				"text-rotation-alignment" : "viewport"
			},
			"paint" : {
				"text-color" : "#343434"
			}
        }, {
			"id" : "Point of interest/General",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Point of interest",
			"filter" : ["==", "_label_class", 0],
			"minzoom" : 9,
			"layout" : {
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Regular"],
				"text-size" : 10,
				"text-anchor" : "center",
				"text-letter-spacing" : 0.08,
				"text-max-width" : 8,
				"text-field" : "{_name_global}",
				"text-padding" : 15
			},
			"paint" : {
				"text-color" : "#666659",
				"text-halo-color" : "#F2F0CF",
				"text-halo-width" : 0.93
			}
        }, {
			"id" : "Building/label/Default",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Building/label",
			"minzoom" : 15,
			"layout" : {
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Regular"],
				"text-size" : 10,
				"text-letter-spacing" : 0.08,
				"text-max-width" : 8,
				"text-field" : "{_name_global}",
                "text-padding" : 20
			},
			"paint" : {
				"text-color" : "#666659",
				"text-halo-color" : "#FAFAE8",
				"text-halo-width" : 0.67
			}    
        }, {
			"id" : "Point of interest/Bus station",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Point of interest",
			"filter" : ["==", "_symbol", 2],
			"minzoom" : 9,
			"layout" : {
				"symbol-avoid-edges" : true,
				"icon-image" : "Point of interest/Bus station",
				"icon-padding" : 1,
                "icon-size" : {"stops" :[[13, 0.6], [18, 1]]},
				"text-font" : ["Arial Regular"],
				"text-size" : 10.67,
				"text-anchor" : "bottom",
				"text-letter-spacing" : 0.04,
				"text-max-width" : 8,
				"text-field" : "{_name_global}",
                "text-offset" : [0, -0.9]
			},
			"paint" : {
				"text-color" : "#595959",
				"text-halo-color" : "#F2F0CF",
				"text-halo-width" : 0.93
			}
		}, {
			"id" : "Point of interest/Rail station",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Point of interest",
			"filter" : ["==", "_symbol", 3],
			"minzoom" : 9,
			"layout" : {
				"symbol-avoid-edges" : true,
				"icon-image" : "Point of interest/Rail station",
				"icon-padding" : 1,
                "icon-size" : {"stops" :[[13, 0.6], [18, 1]]},
				"text-font" : ["Arial Regular"],
				"text-size" : 10.67,
				"text-anchor" : "bottom",
				"text-letter-spacing" : 0.04,
				"text-max-width" : 8,
				"text-field" : "{_name_global}",
                "text-offset" : [0, -0.9]
			},
			"paint" : {
				"text-color" : "#595959",
				"text-halo-color" : "#F2F0CF",
				"text-halo-width" : 0.93
			}
		}, {
			"id" : "Admin2 area/label/small",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Admin2 area/label",
			"filter" : ["==", "_label_class", 1],
			"minzoom" : 10,
			"maxzoom" : 11,
			"layout" : {
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Regular"],
				"text-size" : 12,
				"text-max-width" : 8,
				"text-field" : "{_name}"
			},
			"paint" : {
				"text-color" : "#686868",
				"text-halo-color" : "#F5F2DC",
				"text-halo-width" : 0.93
			}
        }, {
			"id" : "Admin2 area/label/large",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Admin2 area/label",
			"filter" : ["==", "_label_class", 0],
			"minzoom" : 10,
			"maxzoom" : 11,
			"layout" : {
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Regular"],
				"text-size" : 13.33,
				"text-max-width" : 8,
				"text-field" : "{_name}"
			},
			"paint" : {
				"text-color" : "#686868",
				"text-halo-color" : "#F5F2DC",
				"text-halo-width" : 0.93
			}
        }, {
			"id" : "Admin1 area/label/x small",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Admin1 area/label",
			"filter" : ["==", "_label_class", 5],
			"minzoom" : 3,
			"maxzoom" : 10,
			"layout" : {
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Regular"],
				"text-max-width" : 8,
				"text-field" : "{_name}",
                "text-size" : {
					"stops" : [[3, 9], [10, 11]]
				}
			},
			"paint" : {
				"text-color" : {
					"stops" : [[3, "#9c9c9c"], [5, "#686868"]]
				},
				"text-halo-color" : "#F5F2DC",
				"text-halo-width" : 0.93
			}
		}, {
			"id" : "Admin1 area/label/small",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Admin1 area/label",
			"filter" : ["==", "_label_class", 4],
			"minzoom" : 3,
			"maxzoom" : 10,
			"layout" : {
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Regular"],
				"text-max-width" : 8,
				"text-field" : "{_name}",
                "text-size" : {
					"stops" : [[3, 9], [10, 11]]
				}
			},
			"paint" : {
				"text-color" : {
					"stops" : [[3, "#9c9c9c"], [5, "#686868"]]
				},
				"text-halo-color" : "#F5F2DC",
				"text-halo-width" : 0.93
			}   
        }, {
			"id" : "Admin1 area/label/medium",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Admin1 area/label",
			"filter" : ["==", "_label_class", 3],
			"minzoom" : 3,
			"maxzoom" : 10,
			"layout" : {
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Regular"],
				"text-max-width" : 8,
				"text-field" : "{_name}",
                "text-size" : {
					"stops" : [[3, 9], [10, 13]]
				}
			},
			"paint" : {
				"text-color" : {
					"stops" : [[3, "#9c9c9c"], [5, "#686868"]]
				},
				"text-halo-color" : "#F5F2DC",
				"text-halo-width" : 0.93
			}  
        }, {
			"id" : "Admin1 area/label/large",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Admin1 area/label",
			"filter" : ["==", "_label_class", 2],
			"minzoom" : 3,
			"maxzoom" : 10,
			"layout" : {
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Regular"],
				"text-max-width" : 8,
				"text-field" : "{_name}",
                "text-size" : {
					"stops" : [[3, 10], [10, 13]]
				},
				"text-letter-spacing" : 0.1
			},
			"paint" : {
				"text-color" : {
					"stops" : [[3, "#9c9c9c"], [5, "#686868"]]
				},
				"text-halo-color" : "#F5F2DC",
				"text-halo-width" : 0.93
			}
		}, {
			"id" : "Admin1 area/label/x large",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Admin1 area/label",
			"filter" : ["==", "_label_class", 1],
			"minzoom" : 3,
			"maxzoom" : 10,
			"layout" : {
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Regular"],
				"text-max-width" : 8,
				"text-field" : "{_name}",
                "text-size" : {
					"stops" : [[3, 10], [10, 16]]
				},
				"text-letter-spacing" : 0.1
			},
			"paint" : {
				"text-color" : {
					"stops" : [[3, "#9c9c9c"], [5, "#686868"]]
				},
				"text-halo-color" : "#F5F2DC",
				"text-halo-width" : 0.93
			}
		}, {
			"id" : "Admin1 area/label/2x large",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Admin1 area/label",
			"filter" : ["==", "_label_class", 0],
			"minzoom" : 3,
			"maxzoom" : 10,
			"layout" : {
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Regular"],
				"text-max-width" : 8,
				"text-field" : "{_name}",
                "text-size" : {
					"stops" : [[3, 11], [10, 16]]
				},
				"text-letter-spacing" : 0.1
			},
			"paint" : {
				"text-color" : {
					"stops" : [[3, "#9c9c9c"], [5, "#686868"]]
				},
				"text-halo-color" : "#F5F2DC",
				"text-halo-width" : 0.93
			}
        }, {
			"id" : "Admin0 point/x small",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Admin0 point",
			"filter" : ["==", "_label_class", 5],
            "minzoom" : 5,
			"maxzoom" : 10,
			"layout" : {
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Regular"],
				"text-anchor" : "center",
				"text-letter-spacing" : 0.05,
				"text-max-width" : 8,
				"text-field" : "{_name}",
                "text-size" : {
					"stops" : [[5, 11], [10, 12.5]]
				},
				"text-transform" : "uppercase"
			},
			"paint" : {
				"text-color" : "#737373",
				"text-halo-color" : "#F5F2DC",
				"text-halo-width" : 0.93
			}
		}, {
			"id" : "Admin0 point/small",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Admin0 point",
			"filter" : ["==", "_label_class", 4],
            "minzoom" : 4,
			"maxzoom" : 10,
			"layout" : {
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Regular"],
				"text-anchor" : "center",
				"text-letter-spacing" : 0.05,
				"text-max-width" : 8,
				"text-field" : "{_name}",
                "text-size" : {
					"stops" : [[4, 10], [10, 12.5]]
				},
				"text-transform" : "uppercase"
			},
			"paint" : {
				"text-color" : "#737373",
				"text-halo-color" : "#F5F2DC",
				"text-halo-width" : 0.93
			}
		}, {
			"id" : "Admin0 point/medium",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Admin0 point",
			"filter" : ["==", "_label_class", 3],
            "minzoom" : 2,
			"maxzoom" : 10,
			"layout" : {
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Regular"],
				"text-anchor" : "center",
				"text-letter-spacing" : 0.05,
				"text-max-width" : 6,
				"text-field" : "{_name}",
                "text-size" : {
					"stops" : [[2, 9.5], [10, 15.5]]
				},
				"text-transform" : "uppercase"
			},
			"paint" : {
				"text-color" : "#737373",
				"text-halo-color" : "#F5F2DC",
				"text-halo-width" : 0.93
			}
		}, {
			"id" : "Admin0 point/large",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Admin0 point",
			"filter" : ["==", "_label_class", 2],
            "minzoom" : 2,
			"maxzoom" : 10,
			"layout" : {
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Regular"],
				"text-anchor" : "center",
				"text-letter-spacing" : 0.1,
				"text-max-width" : 8,
				"text-field" : "{_name}",
                "text-size" : {
					"stops" : [[2, 9.5], [10, 15.5]]
				},
				"text-transform" : "uppercase"
			},
			"paint" : {
				"text-color" : "#737373",
				"text-halo-color" : "#F5F2DC",
				"text-halo-width" : 0.93
			}
		}, {
			"id" : "Admin0 point/x large",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Admin0 point",
			"filter" : ["==", "_label_class", 1],
            "minzoom" : 2,
			"maxzoom" : 10,
			"layout" : {
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Regular"],
				"text-anchor" : "center",
				"text-letter-spacing" : 0.12,
				"text-max-width" : 8,
				"text-field" : "{_name}",
                "text-size" : {
					"stops" : [[2, 9.5], [10, 18]]
				},
				"text-transform" : "uppercase"
			},
			"paint" : {
				"text-color" : "#737373",
				"text-halo-color" : "#F5F2DC",
				"text-halo-width" : 0.93
			}
		}, {
			"id" : "Admin0 point/2x large",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Admin0 point",
			"filter" : ["==", "_label_class", 0],
            "minzoom" : 2,
			"maxzoom" : 10,
			"layout" : {
				"symbol-avoid-edges" : true,
				"text-font" : ["Arial Regular"],
				"text-anchor" : "center",
				"text-letter-spacing" : 0.15,
				"text-max-width" : 8,
				"text-field" : "{_name}",
                "text-size" : {
					"stops" : [[2, 12], [10, 18]]
				},
				"text-transform" : "uppercase"
			},
			"paint" : {
				"text-color" : "#737373",
				"text-halo-color" : "#F5F2DC",
				"text-halo-width" : 0.93
			}
		}, {
			"id" : "Neighborhood",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Neighborhood",
			"minzoom" : 14,
			"maxzoom" : 17,
			"layout" : {
				"symbol-avoid-edges" : true,
				"icon-image" : "Neighborhood",
				"text-font" : ["Arial Regular"],
				"text-size" : {
					"stops" : [[14, 10], [15, 14], [17, 18]]
				},
				"text-letter-spacing" : 0.08,
				"text-max-width" : 8,
				"text-field" : "{_name_global}"
			},
			"paint" : {
				"text-color" : "#000000",
				"text-halo-color" : "#FFFFFF",
				"text-halo-width" : 2
			}
		}, {
			"id" : "City large scale/town small",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "City large scale",
			"filter" : ["==", "_label_class", 5],
            "minzoom" : 10,
			"maxzoom" : 17,
			"layout" : {
				"symbol-avoid-edges" : true,
				"icon-image" : "City large scale",
				"text-font" : ["Arial Regular"],
				"text-size" : {
					"stops" : [[10, 10], [15, 16], [17, 20]]
				},
				"text-letter-spacing" : 0.08,
				"text-max-width" : 8,
				"text-field" : "{_name_global}"
			},
			"paint" : {
				"text-color" : "#000000",
				"text-halo-color" : "#FFFFFF",
				"text-halo-width" : 2
			} 
        }, {
			"id" : "City large scale/town large",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "City large scale",
			"filter" : ["==", "_label_class", 4],
            "minzoom" : 10,
			"maxzoom" : 16,
			"layout" : {
				"symbol-avoid-edges" : true,
				"icon-image" : "City large scale",
				"text-font" : ["Arial Regular"],
				"text-size" : {
					"stops" : [[10, 10.5], [15, 18], [16, 20]]
				},
				"text-letter-spacing" : 0.09,
				"text-max-width" : 8,
				"text-field" : "{_name_global}"
			},
			"paint" : {
				"text-color" : "#000000",
				"text-halo-color" : "#FFFFFF",
				"text-halo-width" : 2
			} 
		}, {
			"id" : "City large scale/small",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "City large scale",
			"filter" : ["==", "_label_class", 3],
			"minzoom" : 10,
            "maxzoom" : 15,
			"layout" : {
				"symbol-avoid-edges" : true,
				"icon-image" : "City large scale",
                "text-font" : ["Arial Bold"],
                "text-size" : {
					"stops" : [[10, 11], [15, 18]]
				},
				"text-letter-spacing" : 0.1,
				"text-max-width" : 8,
				"text-field" : "{_name_global}"
			},
			"paint" : {
				"text-color" : "#000000",
				"text-halo-color" : "#FFFFFF",
				"text-halo-width" : 2
			}  
        }, {
			"id" : "City large scale/medium",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "City large scale",
			"filter" : ["==", "_label_class", 2],
			"minzoom" : 10,
            "maxzoom" : 15,
			"layout" : {
				"symbol-avoid-edges" : true,
				"icon-image" : "City large scale",
				"text-font" : ["Arial Bold"],
                "text-size" : {
					"stops" : [[10, 12], [14, 20]]
				},
				"text-letter-spacing" : 0.1,
				"text-max-width" : 8,
				"text-field" : "{_name_global}"
			},
			"paint" : {
				"text-color" : "#000000",
				"text-halo-color" : "#FFFFFF",
				"text-halo-width" : 2
			}  
        }, {
			"id" : "City large scale/large",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "City large scale",
			"filter" : ["==", "_label_class", 1],
			"minzoom" : 10,
            "maxzoom" : 14,
			"layout" : {
				"symbol-avoid-edges" : true,
				"icon-image" : "City large scale",
				"text-font" : ["Arial Bold"],
                "text-size" : {
					"stops" : [[10, 13], [14, 22]]
				},
				"text-letter-spacing" : 0.1,
				"text-max-width" : 8,
				"text-field" : "{_name_global}"
			},
			"paint" : {
				"text-color" : "#000000",
				"text-halo-color" : "#FFFFFF",
				"text-halo-width" : 2
			}  
        }, {
			"id" : "City large scale/x large",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "City large scale",
			"filter" : ["==", "_label_class", 0],
			"minzoom" : 10,
            "maxzoom" : 14,
			"layout" : {
				"symbol-avoid-edges" : true,
				"icon-image" : "City large scale",
				"text-font" : ["Arial Bold"],
                "text-size" : {
					"stops" : [[10, 14], [14, 25]]
				},
				"text-letter-spacing" : 0.1,
				"text-max-width" : 8,
				"text-field" : "{_name_global}"
			},
			"paint" : {
				"text-color" : "#000000",
				"text-halo-color" : "#FFFFFF",
				"text-halo-width" : 2
			}    
        }, {
			"id" : "City small scale/town small non capital",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "City small scale",
			"filter" : ["==", "_symbol", 17],
            "minzoom" : 2,
			"maxzoom" : 10,
			"layout" : {
				"symbol-avoid-edges" : true,
				"icon-image" : "City small scale/town small non capital",
				"icon-padding" : 1,
				"text-font" : ["Arial Regular"],
				"text-size" : 10,
				"text-anchor" : "bottom-left",
                "text-justify" : "left",
				"text-max-width" : 8,
				"text-field" : "{_name}",
                "text-offset" : [0.13, -0.13]
			},
			"paint" : {
				"text-color" : "#4E4E4E",
				"text-halo-color" : "#FFFFFF",
				"text-halo-width" : 0.67
			}    
        }, {
			"id" : "City small scale/town large non capital",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "City small scale",
			"filter" : ["==", "_symbol", 15],
            "minzoom" : 2,
			"maxzoom" : 10,
			"layout" : {
				"symbol-avoid-edges" : true,
				"icon-image" : "City small scale/town large non capital",
				"icon-padding" : 1,
				"text-font" : ["Arial Regular"],
				"text-size" : 10.67,
				"text-anchor" : "bottom-left",
                "text-justify" : "left",
				"text-max-width" : 8,
				"text-field" : "{_name}",
                "text-offset" : [0.13, -0.13]
			},
			"paint" : {
				"text-color" : "#4E4E4E",
				"text-halo-color" : "#FFFFFF",
				"text-halo-width" : 0.67
			}   
        }, {
			"id" : "City small scale/small non capital",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "City small scale",
			"filter" : ["==", "_symbol", 12],
            "minzoom" : 2,
			"maxzoom" : 10,
			"layout" : {
				"symbol-avoid-edges" : true,
				"icon-image" : "City small scale/small non capital",
				"icon-padding" : 1,
				"text-font" : ["Arial Regular"],
				"text-size" : 10.67,
				"text-anchor" : "bottom-left",
                "text-justify" : "left",
				"text-max-width" : 8,
				"text-field" : "{_name}",
                "text-offset" : [0.13, -0.13]
			},
			"paint" : {
				"text-color" : "#4E4E4E",
				"text-halo-color" : "#FFFFFF",
				"text-halo-width" : 0.67
			}   
        }, {
			"id" : "City small scale/medium non capital",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "City small scale",
			"filter" : ["==", "_symbol", 9],
            "minzoom" : 2,
			"maxzoom" : 10,
			"layout" : {
				"symbol-avoid-edges" : true,
				"icon-image" : "City small scale/medium non capital",
				"icon-padding" : 1,
				"text-font" : ["Arial Bold"],
				"text-size" : 10.67,
				"text-anchor" : "bottom-left",
                "text-justify" : "left",
				"text-max-width" : 8,
				"text-field" : "{_name}",
                "text-offset" : [0.13, -0.13]
			},
			"paint" : {
				"text-color" : "#343434",
				"text-halo-color" : "#FFFFFF",
				"text-halo-width" : 0.67
			}
        }, {
			"id" : "City small scale/other capital",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "City small scale",
			"filter" : ["==", "_symbol", 18],
            "minzoom" : 2,
			"maxzoom" : 10,
			"layout" : {
				"symbol-avoid-edges" : true,
				"icon-image" : "City small scale/other capital",
				"icon-padding" : 1,
				"text-font" : ["Arial Regular"],
				"text-size" : 10,
				"text-anchor" : "bottom-left",
                "text-justify" : "left",
				"text-max-width" : 8,
				"text-field" : "{_name}",
                "text-offset" : [0.13, -0.13]
			},
			"paint" : {
				"text-color" : "#4E4E4E",
				"text-halo-color" : "#FFFFFF",
				"text-halo-width" : 0.67
			}   
        }, {
			"id" : "City small scale/town large other capital",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "City small scale",
			"filter" : ["==", "_symbol", 14],
            "minzoom" : 2,
			"maxzoom" : 10,
			"layout" : {
				"symbol-avoid-edges" : true,
				"icon-image" : "City small scale/town large other capital",
				"icon-padding" : 1,
				"text-font" : ["Arial Regular"],
				"text-size" : 10.67,
				"text-anchor" : "bottom-left",
                "text-justify" : "left",
				"text-max-width" : 8,
				"text-field" : "{_name}",
                "text-offset" : [0.13, -0.13]
			},
			"paint" : {
				"text-color" : "#4E4E4E",
				"text-halo-color" : "#FFFFFF",
				"text-halo-width" : 0.67
			}   
        }, {
			"id" : "City small scale/small other capital",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "City small scale",
			"filter" : ["==", "_symbol", 11],
            "minzoom" : 2,
			"maxzoom" : 10,
			"layout" : {
				"symbol-avoid-edges" : true,
				"icon-image" : "City small scale/small other capital",
				"icon-padding" : 1,
				"text-font" : ["Arial Regular"],
				"text-size" : 10.67,
				"text-anchor" : "bottom-left",
                "text-justify" : "left",
				"text-max-width" : 8,
				"text-field" : "{_name}",
                "text-offset" : [0.13, -0.13]
			},
			"paint" : {
				"text-color" : "#4E4E4E",
				"text-halo-color" : "#FFFFFF",
				"text-halo-width" : 0.67
			}   
        }, {
			"id" : "City small scale/medium other capital",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "City small scale",
			"filter" : ["==", "_symbol", 8],
            "minzoom" : 2,
			"maxzoom" : 10,
			"layout" : {
				"symbol-avoid-edges" : true,
				"icon-image" : "City small scale/medium other capital",
				"icon-padding" : 1,
				"text-font" : ["Arial Bold"],
				"text-size" : 10.67,
				"text-anchor" : "bottom-left",
                "text-justify" : "left",
				"text-max-width" : 8,
				"text-field" : "{_name}",
                "text-offset" : [0.13, -0.13]
			},
			"paint" : {
				"text-color" : "#343434",
				"text-halo-color" : "#FFFFFF",
				"text-halo-width" : 0.67
			}
        }, {
			"id" : "City small scale/town small admin0 capital",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "City small scale",
			"filter" : ["==", "_symbol", 16],
            "minzoom" : 2,
			"maxzoom" : 10,
			"layout" : {
				"symbol-avoid-edges" : true,
				"icon-image" : "City small scale/town small admin0 capital",
				"icon-padding" : 1,
				"text-font" : ["Arial Regular"],
				"text-size" : 10,
				"text-anchor" : "bottom-left",
                "text-justify" : "left",
				"text-max-width" : 8,
				"text-field" : "{_name}",
                "text-offset" : [0.13, -0.13]
			},
			"paint" : {
				"text-color" : "#4E4E4E",
				"text-halo-color" : "#FFFFFF",
				"text-halo-width" : 0.67
			}   
        }, {
			"id" : "City small scale/town large admin0 capital",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "City small scale",
			"filter" : ["==", "_symbol", 13],
            "minzoom" : 2,
			"maxzoom" : 10,
			"layout" : {
				"symbol-avoid-edges" : true,
				"icon-image" : "City small scale/town large admin0 capital",
				"icon-padding" : 1,
				"text-font" : ["Arial Regular"],
				"text-size" : 10.67,
				"text-anchor" : "bottom-left",
                "text-justify" : "left",
				"text-max-width" : 8,
				"text-field" : "{_name}",
                "text-offset" : [0.13, -0.13]
			},
			"paint" : {
				"text-color" : "#4E4E4E",
				"text-halo-color" : "#FFFFFF",
				"text-halo-width" : 0.67
			}  
		}, {
			"id" : "City small scale/small admin0 capital",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "City small scale",
			"filter" : ["==", "_symbol", 10],
            "minzoom" : 2,
			"maxzoom" : 10,
			"layout" : {
				"symbol-avoid-edges" : true,
				"icon-image" : "City small scale/small admin0 capital",
				"icon-padding" : 1,
				"text-font" : ["Arial Regular"],
				"text-size" : 10.67,
				"text-anchor" : "bottom-left",
                "text-justify" : "left",
				"text-max-width" : 8,
				"text-field" : "{_name}",
                "text-offset" : [0.13, -0.13]
			},
			"paint" : {
				"text-color" : "#4E4E4E",
				"text-halo-color" : "#FFFFFF",
				"text-halo-width" : 0.67
			}
		}, {
			"id" : "City small scale/medium admin0 capital",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "City small scale",
			"filter" : ["==", "_symbol", 7],
            "minzoom" : 2,
			"maxzoom" : 10,
			"layout" : {
				"symbol-avoid-edges" : true,
				"icon-image" : "City small scale/medium admin0 capital",
				"icon-padding" : 1,
				"text-font" : ["Arial Bold"],
				"text-size" : 10.67,
				"text-anchor" : "bottom-left",
                "text-justify" : "left",
				"text-max-width" : 8,
				"text-field" : "{_name}",
                "text-offset" : [0.13, -0.13]
			},
			"paint" : {
				"text-color" : "#343434",
				"text-halo-color" : "#FFFFFF",
				"text-halo-width" : 0.67
			}
        }, {
			"id" : "City small scale/large other capital",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "City small scale",
			"filter" : ["==", "_symbol", 5],
            "minzoom" : 2,
			"maxzoom" : 10,
			"layout" : {
				"symbol-avoid-edges" : true,
				"icon-image" : "City small scale/large other capital",
				"icon-padding" : 1,
				"text-font" : ["Arial Bold"],
				"text-size" : 10.67,
				"text-anchor" : "bottom-left",
                "text-justify" : "left",
				"text-max-width" : 8,
				"text-field" : "{_name}",
                "text-offset" : [0.13, -0.13]
			},
			"paint" : {
				"text-color" : {
					"stops" : [[2, "#343434"], [3, "#000000"]]
				},
				"text-halo-color" : "#FFFFFF",
				"text-halo-width" : 0.67
			}
        }, {
			"id" : "City small scale/x large admin2 capital",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "City small scale",
			"filter" : ["==", "_symbol", 2],
            "minzoom" : 2,
			"maxzoom" : 10,
			"layout" : {
				"symbol-avoid-edges" : true,
				"icon-image" : "City small scale/x large admin2 capital",
				"icon-padding" : 1,
				"text-font" : ["Arial Bold"],
				"text-size" : 12,
				"text-anchor" : "bottom-left",
                "text-justify" : "left",
				"text-max-width" : 8,
				"text-field" : "{_name}",
                "text-offset" : [0.13, -0.13]
			},
			"paint" : {
				"text-color" : {
					"stops" : [[2, "#343434"], [3, "#000000"]]
				},
				"text-halo-color" : "#FFFFFF",
				"text-halo-width" : 0.67
			}
        }, {
			"id" : "City small scale/large non capital",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "City small scale",
			"filter" : ["==", "_symbol", 6],
            "minzoom" : 2,
			"maxzoom" : 10,
			"layout" : {
				"symbol-avoid-edges" : true,
				"icon-image" : "City small scale/large non capital",
				"icon-padding" : 1,
				"text-font" : ["Arial Bold"],
				"text-size" : 10.67,
				"text-anchor" : "bottom-left",
                "text-justify" : "left",
				"text-max-width" : 8,
				"text-field" : "{_name}",
                "text-offset" : [0.13, -0.13]
			},
			"paint" : {
				"text-color" : {
					"stops" : [[2, "#343434"], [3, "#000000"]]
				},
				"text-halo-color" : "#FFFFFF",
				"text-halo-width" : 0.67
			} 
        }, {
			"id" : "City small scale/large admin0 capital",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "City small scale",
			"filter" : ["==", "_symbol", 4],
            "minzoom" : 2,
			"maxzoom" : 10,
			"layout" : {
				"symbol-avoid-edges" : true,
				"icon-image" : "City small scale/large admin0 capital",
				"icon-padding" : 1,
				"text-font" : ["Arial Bold"],
				"text-size" : 10.67,
				"text-anchor" : "bottom-left",
                "text-justify" : "left",
				"text-max-width" : 8,
				"text-field" : "{_name}",
                "text-offset" : [0.13, -0.13]
			},
			"paint" : {
				"text-color" : {
					"stops" : [[2, "#2d2d2d"], [3, "#000000"]]
				},
				"text-halo-color" : "#FFFFFF",
				"text-halo-width" : 0.67
			} 
        }, {
			"id" : "City small scale/x large non capital",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "City small scale",
			"filter" : ["==", "_symbol", 3],
            "minzoom" : 2,
			"maxzoom" : 10,
			"layout" : {
				"symbol-avoid-edges" : true,
				"icon-image" : "City small scale/x large non capital",
				"icon-padding" : 1,
				"text-font" : ["Arial Bold"],
				"text-size" : 12,
				"text-anchor" : "bottom-left",
                "text-justify" : "left",
				"text-max-width" : 8,
				"text-field" : "{_name}",
                "text-offset" : [0.13, -0.13]
			},
			"paint" : {
				"text-color" : {
					"stops" : [[2, "#343434"], [3, "#000000"]]
				},
				"text-halo-color" : "#FFFFFF",
				"text-halo-width" : 0.67
			}
        }, {
			"id" : "City small scale/x large admin1 capital",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "City small scale",
			"filter" : ["==", "_symbol", 1],
            "minzoom" : 2,
			"maxzoom" : 10,
			"layout" : {
				"symbol-avoid-edges" : true,
				"icon-image" : "City small scale/x large admin1 capital",
				"icon-padding" : 1,
				"text-font" : ["Arial Bold"],
				"text-size" : 12,
				"text-anchor" : "bottom-left",
                "text-justify" : "left",
				"text-max-width" : 8,
				"text-field" : "{_name}",
                "text-offset" : [0.13, -0.13]
			},
			"paint" : {
				"text-color" : {
					"stops" : [[2, "#343434"], [3, "#000000"]]
				},
				"text-halo-color" : "#FFFFFF",
				"text-halo-width" : 0.67
			}
        }, {
			"id" : "City small scale/x large admin0 capital",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "City small scale",
			"filter" : ["==", "_symbol", 0],
            "minzoom" : 2,
			"maxzoom" : 10,
			"layout" : {
				"symbol-avoid-edges" : true,
				"icon-image" : "City small scale/x large admin0 capital",
				"icon-padding" : 1,
				"text-font" : ["Arial Bold"],
				"text-size" : 12,
				"text-anchor" : "bottom-left",
                "text-justify" : "left",
				"text-max-width" : 8,
				"text-field" : "{_name}",
                "text-offset" : [0.13, -0.13]
			},
			"paint" : {
				"text-color" : {
					"stops" : [[2, "#2d2d2d"], [3, "#000000"]]
				},
				"text-halo-color" : "#FFFFFF",
				"text-halo-width" : 0.67
			} 
        }, {
			"id" : "Continent",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Continent",
            "minzoom" : 0,
			"maxzoom" : 2,
			"layout" : {
				"symbol-avoid-edges" : true,
				"icon-image" : "Continent",
				"icon-allow-overlap" : true,
				"icon-padding" : 1,
				"text-font" : ["Arial Regular"],
                "text-size" : {
					"stops" : [[0, 9], [1, 12]]
				},
				"text-anchor" : "center",
				"text-letter-spacing" : 0.05,
				"text-max-width" : 8,
				"text-field" : "{_name_global}",
                "text-transform" : "uppercase"
			},
			"paint" : {
				"text-color" : "#828282",
				"text-halo-color" : "#F5F2DC",
				"text-halo-width" : 2
			}
        }, {
			"id" : "Disputed label point/Island",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Disputed label point",
            "filter" : ["all",["==", "_label_class", 1],["in", "DisputeID", 0]],
			"minzoom" : 6,
			"layout" : {
				"icon-image" : "Disputed label point",
				"icon-allow-overlap" : true,
				"text-font" : ["Arial Regular"],
				"text-size" : 10.67,
				"text-anchor" : "center",
				"text-letter-spacing" : 0.1,
				"text-max-width" : 8,
				"text-field" : "{_name}",
				"text-optional" : true
			},
			"paint" : {
				"text-color" : "#8C7962",
				"text-halo-color" : "#F2F0CF",
				"text-halo-width" : 0.67
			}
        }, {
			"id" : "Disputed label point/Waterbody",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Disputed label point",
            "filter" : ["all",["==", "_label_class", 0],["in", "DisputeID", 1006]],
			"minzoom" : 2,
            "maxzoom" : 10,
			"layout" : {
				"icon-image" : "Disputed label point",
				"icon-allow-overlap" : true,
				"text-font" : ["Arial Italic"],
				"text-size" : 11,
				"text-anchor" : "center",
				"text-letter-spacing" : 0.1,
				"text-max-width" : {"stops" : [[15.5, 7], [15.6, 9]]},
				"text-field" : "{_name}",
				"text-optional" : true
			},
			"paint" : {
				"text-color" : "#497AAB"
			}  
        }, {
           "id" : "Disputed label point/Admin0",
			"type" : "symbol",
			"source" : "esri",
			"source-layer" : "Disputed label point",
            "filter" : ["all",["==", "_label_class", 2],["in", "DisputeID", 1021]],
			"minzoom" : 2,
			"layout" : {
				"icon-image" : "Disputed label point",
				"icon-allow-overlap" : true,
				"text-font" : ["Arial Regular"],
                "text-size" : {
					"stops" : [[2, 9.5], [10, 15.5]]
				},
				"text-anchor" : "center",
				"text-letter-spacing" : 0.1,
				"text-max-width" : 8,
				"text-field" : "{_name}",
                "text-transform" : "uppercase",
				"text-optional" : true
			},
			"paint" : {
				"text-color" : "#737373",
                "text-halo-color" : "#F5F2DC",
				"text-halo-width" : 0.93
			}
		}
	]
}