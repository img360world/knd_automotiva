(function(){
    var script = {
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "children": [
  "this.MainViewer",
  "this.Container_22BB12F4_3075_D173_4184_EC3BC4955417",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_4041C033_7558_FB6E_41CE_BFE427F3AF92",
  "this.Container_062AB830_1140_E215_41AF_6C9D65345420",
  "this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
  "this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
  "this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
  "this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
  "this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9"
 ],
 "id": "rootPlayer",
 "scrollBarColor": "#000000",
 "vrPolyfillScale": 0.71,
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "mobileMipmappingEnabled": false,
 "borderSize": 0,
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "scrollBarVisible": "rollOver",
 "minHeight": 20,
 "class": "Player",
 "definitions": [{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_03C0D315_0F9F_0DCE_41A3_1C46F07FEB97_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -15.34,
  "pitch": 0
 },
 "id": "camera_135BA8D7_0FAB_1C4B_41AC_AB307C0469E5",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -1.02,
   "backwardYaw": 167.52,
   "distance": 1,
   "panorama": "this.panorama_03C0D315_0F9F_0DCE_41A3_1C46F07FEB97"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 100.84,
   "backwardYaw": -71.39,
   "distance": 1,
   "panorama": "this.panorama_03D70BD4_0F9F_7C4E_419C_5C543C04090C"
  }
 ],
 "hfovMin": "135%",
 "hfovMax": 130,
 "hfov": 360,
 "id": "panorama_03C2009D_0F9F_0CFF_419A_FDDC75CEC3C0",
 "thumbnailUrl": "media/panorama_03C2009D_0F9F_0CFF_419A_FDDC75CEC3C0_t.jpg",
 "label": "SAM_105_6821",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "url": "media/panorama_03C2009D_0F9F_0CFF_419A_FDDC75CEC3C0_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "url": "media/panorama_03C2009D_0F9F_0CFF_419A_FDDC75CEC3C0_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_03C2009D_0F9F_0CFF_419A_FDDC75CEC3C0_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_03C2009D_0F9F_0CFF_419A_FDDC75CEC3C0_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "url": "media/panorama_03C2009D_0F9F_0CFF_419A_FDDC75CEC3C0_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "url": "media/panorama_03C2009D_0F9F_0CFF_419A_FDDC75CEC3C0_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_03C2009D_0F9F_0CFF_419A_FDDC75CEC3C0_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_03C2009D_0F9F_0CFF_419A_FDDC75CEC3C0_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "url": "media/panorama_03C2009D_0F9F_0CFF_419A_FDDC75CEC3C0_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "url": "media/panorama_03C2009D_0F9F_0CFF_419A_FDDC75CEC3C0_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_03C2009D_0F9F_0CFF_419A_FDDC75CEC3C0_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_03C2009D_0F9F_0CFF_419A_FDDC75CEC3C0_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "url": "media/panorama_03C2009D_0F9F_0CFF_419A_FDDC75CEC3C0_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "url": "media/panorama_03C2009D_0F9F_0CFF_419A_FDDC75CEC3C0_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_03C2009D_0F9F_0CFF_419A_FDDC75CEC3C0_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_03C2009D_0F9F_0CFF_419A_FDDC75CEC3C0_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "url": "media/panorama_03C2009D_0F9F_0CFF_419A_FDDC75CEC3C0_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "url": "media/panorama_03C2009D_0F9F_0CFF_419A_FDDC75CEC3C0_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_03C2009D_0F9F_0CFF_419A_FDDC75CEC3C0_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_03C2009D_0F9F_0CFF_419A_FDDC75CEC3C0_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "url": "media/panorama_03C2009D_0F9F_0CFF_419A_FDDC75CEC3C0_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "url": "media/panorama_03C2009D_0F9F_0CFF_419A_FDDC75CEC3C0_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_03C2009D_0F9F_0CFF_419A_FDDC75CEC3C0_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_03C2009D_0F9F_0CFF_419A_FDDC75CEC3C0_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_03C2009D_0F9F_0CFF_419A_FDDC75CEC3C0_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_00C374CA_0FA9_345A_41A8_2B403A2596E0",
  "this.overlay_00136291_0FA9_0CC7_4177_69E8B40D3B89",
  "this.panorama_03C2009D_0F9F_0CFF_419A_FDDC75CEC3C0_tcap0"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -19.02,
   "backwardYaw": 164.66,
   "distance": 1,
   "panorama": "this.panorama_03C6D4F4_0F9F_144D_419F_10B47B57C187"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 167.52,
   "backwardYaw": -1.02,
   "distance": 1,
   "panorama": "this.panorama_03C2009D_0F9F_0CFF_419A_FDDC75CEC3C0"
  }
 ],
 "hfovMin": "135%",
 "hfovMax": 130,
 "hfov": 360,
 "id": "panorama_03C0D315_0F9F_0DCE_41A3_1C46F07FEB97",
 "thumbnailUrl": "media/panorama_03C0D315_0F9F_0DCE_41A3_1C46F07FEB97_t.jpg",
 "label": "SAM_105_6822",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "url": "media/panorama_03C0D315_0F9F_0DCE_41A3_1C46F07FEB97_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "url": "media/panorama_03C0D315_0F9F_0DCE_41A3_1C46F07FEB97_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_03C0D315_0F9F_0DCE_41A3_1C46F07FEB97_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_03C0D315_0F9F_0DCE_41A3_1C46F07FEB97_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "url": "media/panorama_03C0D315_0F9F_0DCE_41A3_1C46F07FEB97_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "url": "media/panorama_03C0D315_0F9F_0DCE_41A3_1C46F07FEB97_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_03C0D315_0F9F_0DCE_41A3_1C46F07FEB97_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_03C0D315_0F9F_0DCE_41A3_1C46F07FEB97_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "url": "media/panorama_03C0D315_0F9F_0DCE_41A3_1C46F07FEB97_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "url": "media/panorama_03C0D315_0F9F_0DCE_41A3_1C46F07FEB97_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_03C0D315_0F9F_0DCE_41A3_1C46F07FEB97_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_03C0D315_0F9F_0DCE_41A3_1C46F07FEB97_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "url": "media/panorama_03C0D315_0F9F_0DCE_41A3_1C46F07FEB97_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "url": "media/panorama_03C0D315_0F9F_0DCE_41A3_1C46F07FEB97_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_03C0D315_0F9F_0DCE_41A3_1C46F07FEB97_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_03C0D315_0F9F_0DCE_41A3_1C46F07FEB97_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "url": "media/panorama_03C0D315_0F9F_0DCE_41A3_1C46F07FEB97_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "url": "media/panorama_03C0D315_0F9F_0DCE_41A3_1C46F07FEB97_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_03C0D315_0F9F_0DCE_41A3_1C46F07FEB97_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_03C0D315_0F9F_0DCE_41A3_1C46F07FEB97_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "url": "media/panorama_03C0D315_0F9F_0DCE_41A3_1C46F07FEB97_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "url": "media/panorama_03C0D315_0F9F_0DCE_41A3_1C46F07FEB97_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_03C0D315_0F9F_0DCE_41A3_1C46F07FEB97_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_03C0D315_0F9F_0DCE_41A3_1C46F07FEB97_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_03C0D315_0F9F_0DCE_41A3_1C46F07FEB97_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_00FD6CC0_0FA7_3445_41A7_5F8DE1B9D518",
  "this.overlay_000F55F8_0FA7_7446_4162_5C407E07D71A",
  "this.panorama_03C0D315_0F9F_0DCE_41A3_1C46F07FEB97_tcap0"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -79.16,
  "pitch": 0
 },
 "id": "camera_13601891_0FAB_1CC7_41A0_076D97A22818",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 178.98,
  "pitch": 0
 },
 "id": "camera_134EF8F7_0FAB_1C4B_41AA_AC335AD70327",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -12.48,
  "pitch": 0
 },
 "id": "camera_13351918_0FAB_1DC5_418D_3296DE33D124",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_03D70BD4_0F9F_7C4E_419C_5C543C04090C_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 160.98,
  "pitch": 0
 },
 "id": "camera_1376683C_0FAB_1C3D_416C_3FFB12AA7AA4",
 "automaticZoomSpeed": 10
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_02824144_0F9F_0C4E_41A6_89D2C6B88BE9",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_02824144_0F9F_0C4E_41A6_89D2C6B88BE9_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_03D70BD4_0F9F_7C4E_419C_5C543C04090C",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_03D70BD4_0F9F_7C4E_419C_5C543C04090C_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_03C2009D_0F9F_0CFF_419A_FDDC75CEC3C0",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_03C2009D_0F9F_0CFF_419A_FDDC75CEC3C0_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_03C0D315_0F9F_0DCE_41A3_1C46F07FEB97",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_03C0D315_0F9F_0DCE_41A3_1C46F07FEB97_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_03C6D4F4_0F9F_144D_419F_10B47B57C187",
   "camera": "this.panorama_03C6D4F4_0F9F_144D_419F_10B47B57C187_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "end": "this.trigger('tourEnded')"
  }
 ],
 "id": "mainPlayList"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_03C2009D_0F9F_0CFF_419A_FDDC75CEC3C0_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 108.61,
  "pitch": 0
 },
 "id": "camera_1327293C_0FAB_1C3D_415F_0B9DAA4AF13E",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_03C6D4F4_0F9F_144D_419F_10B47B57C187_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_02824144_0F9F_0C4E_41A6_89D2C6B88BE9_camera",
 "displayMovements": [
  {
   "class": "TargetRotationalCameraDisplayMovement",
   "easing": "linear",
   "duration": 1000
  },
  {
   "class": "TargetRotationalCameraDisplayMovement",
   "targetPitch": 0,
   "targetStereographicFactor": 0,
   "easing": "cubic_in_out",
   "duration": 3000
  }
 ],
 "automaticZoomSpeed": 10,
 "displayOriginPosition": {
  "class": "RotationalCameraDisplayPosition",
  "hfov": 165,
  "yaw": 0,
  "stereographicFactor": 1,
  "pitch": -90
 }
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -21.89,
  "pitch": 0
 },
 "id": "camera_135758B5_0FAB_1CCF_41A3_B4D5B5938E1D",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 158.11,
   "backwardYaw": -10.43,
   "distance": 1,
   "panorama": "this.panorama_02824144_0F9F_0C4E_41A6_89D2C6B88BE9"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -71.39,
   "backwardYaw": 100.84,
   "distance": 1,
   "panorama": "this.panorama_03C2009D_0F9F_0CFF_419A_FDDC75CEC3C0"
  }
 ],
 "hfovMin": "135%",
 "hfovMax": 130,
 "hfov": 360,
 "id": "panorama_03D70BD4_0F9F_7C4E_419C_5C543C04090C",
 "thumbnailUrl": "media/panorama_03D70BD4_0F9F_7C4E_419C_5C543C04090C_t.jpg",
 "label": "SAM_105_6820",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "url": "media/panorama_03D70BD4_0F9F_7C4E_419C_5C543C04090C_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "url": "media/panorama_03D70BD4_0F9F_7C4E_419C_5C543C04090C_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_03D70BD4_0F9F_7C4E_419C_5C543C04090C_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_03D70BD4_0F9F_7C4E_419C_5C543C04090C_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "url": "media/panorama_03D70BD4_0F9F_7C4E_419C_5C543C04090C_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "url": "media/panorama_03D70BD4_0F9F_7C4E_419C_5C543C04090C_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_03D70BD4_0F9F_7C4E_419C_5C543C04090C_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_03D70BD4_0F9F_7C4E_419C_5C543C04090C_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "url": "media/panorama_03D70BD4_0F9F_7C4E_419C_5C543C04090C_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "url": "media/panorama_03D70BD4_0F9F_7C4E_419C_5C543C04090C_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_03D70BD4_0F9F_7C4E_419C_5C543C04090C_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_03D70BD4_0F9F_7C4E_419C_5C543C04090C_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "url": "media/panorama_03D70BD4_0F9F_7C4E_419C_5C543C04090C_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "url": "media/panorama_03D70BD4_0F9F_7C4E_419C_5C543C04090C_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_03D70BD4_0F9F_7C4E_419C_5C543C04090C_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_03D70BD4_0F9F_7C4E_419C_5C543C04090C_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "url": "media/panorama_03D70BD4_0F9F_7C4E_419C_5C543C04090C_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "url": "media/panorama_03D70BD4_0F9F_7C4E_419C_5C543C04090C_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_03D70BD4_0F9F_7C4E_419C_5C543C04090C_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_03D70BD4_0F9F_7C4E_419C_5C543C04090C_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "url": "media/panorama_03D70BD4_0F9F_7C4E_419C_5C543C04090C_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "url": "media/panorama_03D70BD4_0F9F_7C4E_419C_5C543C04090C_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_03D70BD4_0F9F_7C4E_419C_5C543C04090C_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_03D70BD4_0F9F_7C4E_419C_5C543C04090C_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_03D70BD4_0F9F_7C4E_419C_5C543C04090C_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_00DE3577_0FA9_144B_4141_0B7EB8F24C6D",
  "this.overlay_0041256B_0FA9_145B_4192_4A01978651D6",
  "this.panorama_03D70BD4_0F9F_7C4E_419C_5C543C04090C_tcap0"
 ]
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_02824144_0F9F_0C4E_41A6_89D2C6B88BE9",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_02824144_0F9F_0C4E_41A6_89D2C6B88BE9_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_03D70BD4_0F9F_7C4E_419C_5C543C04090C",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_03D70BD4_0F9F_7C4E_419C_5C543C04090C_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_03C2009D_0F9F_0CFF_419A_FDDC75CEC3C0",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_03C2009D_0F9F_0CFF_419A_FDDC75CEC3C0_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_03C0D315_0F9F_0DCE_41A3_1C46F07FEB97",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_03C0D315_0F9F_0DCE_41A3_1C46F07FEB97_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_03C6D4F4_0F9F_144D_419F_10B47B57C187",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_03C6D4F4_0F9F_144D_419F_10B47B57C187_camera"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -10.43,
   "backwardYaw": 158.11,
   "distance": 1,
   "panorama": "this.panorama_03D70BD4_0F9F_7C4E_419C_5C543C04090C"
  }
 ],
 "hfovMin": "135%",
 "hfovMax": 130,
 "hfov": 360,
 "id": "panorama_02824144_0F9F_0C4E_41A6_89D2C6B88BE9",
 "thumbnailUrl": "media/panorama_02824144_0F9F_0C4E_41A6_89D2C6B88BE9_t.jpg",
 "label": "SAM_105_6819",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "url": "media/panorama_02824144_0F9F_0C4E_41A6_89D2C6B88BE9_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "url": "media/panorama_02824144_0F9F_0C4E_41A6_89D2C6B88BE9_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_02824144_0F9F_0C4E_41A6_89D2C6B88BE9_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_02824144_0F9F_0C4E_41A6_89D2C6B88BE9_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "url": "media/panorama_02824144_0F9F_0C4E_41A6_89D2C6B88BE9_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "url": "media/panorama_02824144_0F9F_0C4E_41A6_89D2C6B88BE9_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_02824144_0F9F_0C4E_41A6_89D2C6B88BE9_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_02824144_0F9F_0C4E_41A6_89D2C6B88BE9_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "url": "media/panorama_02824144_0F9F_0C4E_41A6_89D2C6B88BE9_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "url": "media/panorama_02824144_0F9F_0C4E_41A6_89D2C6B88BE9_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_02824144_0F9F_0C4E_41A6_89D2C6B88BE9_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_02824144_0F9F_0C4E_41A6_89D2C6B88BE9_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "url": "media/panorama_02824144_0F9F_0C4E_41A6_89D2C6B88BE9_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "url": "media/panorama_02824144_0F9F_0C4E_41A6_89D2C6B88BE9_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_02824144_0F9F_0C4E_41A6_89D2C6B88BE9_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_02824144_0F9F_0C4E_41A6_89D2C6B88BE9_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "url": "media/panorama_02824144_0F9F_0C4E_41A6_89D2C6B88BE9_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "url": "media/panorama_02824144_0F9F_0C4E_41A6_89D2C6B88BE9_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_02824144_0F9F_0C4E_41A6_89D2C6B88BE9_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_02824144_0F9F_0C4E_41A6_89D2C6B88BE9_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "url": "media/panorama_02824144_0F9F_0C4E_41A6_89D2C6B88BE9_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "url": "media/panorama_02824144_0F9F_0C4E_41A6_89D2C6B88BE9_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_02824144_0F9F_0C4E_41A6_89D2C6B88BE9_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_02824144_0F9F_0C4E_41A6_89D2C6B88BE9_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_02824144_0F9F_0C4E_41A6_89D2C6B88BE9_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_00C1CBF8_0FAB_1C46_4192_94B13044B7E3",
  "this.panorama_02824144_0F9F_0C4E_41A6_89D2C6B88BE9_tcap0"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 164.66,
   "backwardYaw": -19.02,
   "distance": 1,
   "panorama": "this.panorama_03C0D315_0F9F_0DCE_41A3_1C46F07FEB97"
  }
 ],
 "hfovMin": "135%",
 "hfovMax": 130,
 "hfov": 360,
 "id": "panorama_03C6D4F4_0F9F_144D_419F_10B47B57C187",
 "thumbnailUrl": "media/panorama_03C6D4F4_0F9F_144D_419F_10B47B57C187_t.jpg",
 "label": "SAM_105_6823",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "url": "media/panorama_03C6D4F4_0F9F_144D_419F_10B47B57C187_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "url": "media/panorama_03C6D4F4_0F9F_144D_419F_10B47B57C187_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_03C6D4F4_0F9F_144D_419F_10B47B57C187_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_03C6D4F4_0F9F_144D_419F_10B47B57C187_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "url": "media/panorama_03C6D4F4_0F9F_144D_419F_10B47B57C187_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "url": "media/panorama_03C6D4F4_0F9F_144D_419F_10B47B57C187_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_03C6D4F4_0F9F_144D_419F_10B47B57C187_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_03C6D4F4_0F9F_144D_419F_10B47B57C187_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "url": "media/panorama_03C6D4F4_0F9F_144D_419F_10B47B57C187_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "url": "media/panorama_03C6D4F4_0F9F_144D_419F_10B47B57C187_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_03C6D4F4_0F9F_144D_419F_10B47B57C187_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_03C6D4F4_0F9F_144D_419F_10B47B57C187_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "url": "media/panorama_03C6D4F4_0F9F_144D_419F_10B47B57C187_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "url": "media/panorama_03C6D4F4_0F9F_144D_419F_10B47B57C187_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_03C6D4F4_0F9F_144D_419F_10B47B57C187_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_03C6D4F4_0F9F_144D_419F_10B47B57C187_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "url": "media/panorama_03C6D4F4_0F9F_144D_419F_10B47B57C187_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "url": "media/panorama_03C6D4F4_0F9F_144D_419F_10B47B57C187_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_03C6D4F4_0F9F_144D_419F_10B47B57C187_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_03C6D4F4_0F9F_144D_419F_10B47B57C187_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "url": "media/panorama_03C6D4F4_0F9F_144D_419F_10B47B57C187_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "url": "media/panorama_03C6D4F4_0F9F_144D_419F_10B47B57C187_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_03C6D4F4_0F9F_144D_419F_10B47B57C187_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_03C6D4F4_0F9F_144D_419F_10B47B57C187_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_03C6D4F4_0F9F_144D_419F_10B47B57C187_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_009A7AAA_0FA7_7CDA_41A1_661DE1D1BF9B",
  "this.panorama_03C6D4F4_0F9F_144D_419F_10B47B57C187_tcap0"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 169.57,
  "pitch": 0
 },
 "id": "camera_137DE86B_0FAB_1C5B_4173_5333346467A6",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaPlayer",
 "viewerArea": "this.MainViewer",
 "buttonCardboardView": "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "displayPlaybackBar": true,
 "touchControlMode": "drag_rotation",
 "id": "MainViewerPanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "mouseControlMode": "drag_rotation"
},
{
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipBorderColor": "#767676",
 "id": "MainViewer",
 "left": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipOpacity": 0.5,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": 13,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "width": "100%",
 "minHeight": 50,
 "class": "ViewerArea",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 7,
 "playbackBarRight": 0,
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipShadowColor": "#333333",
 "progressBarBorderSize": 0,
 "playbackBarBorderRadius": 0,
 "paddingRight": 0,
 "shadow": false,
 "minWidth": 100,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "height": "100%",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "toolTipShadowOpacity": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Georgia",
 "transitionMode": "blending",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "paddingLeft": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "playbackBarHeadShadowColor": "#000000",
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "progressHeight": 10,
 "borderSize": 0,
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowHorizontalLength": 0,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "top": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipPaddingRight": 10,
 "toolTipPaddingLeft": 10,
 "progressBorderRadius": 0,
 "toolTipPaddingTop": 7,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "toolTipBorderRadius": 3,
 "paddingTop": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "borderRadius": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "paddingBottom": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 5,
 "data": {
  "name": "Main Viewer"
 },
 "progressBorderColor": "#FFFFFF",
 "playbackBarHeadOpacity": 1,
 "transitionDuration": 500,
 "toolTipShadowSpread": 0
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Container_22BBC2F4_3075_D173_41B4_71F7A3560C34",
  "this.Container_22BBD2F4_3075_D173_41B4_8504C593E6BF",
  "this.Label_22BB22F4_3075_D173_41BB_3ACDC6CCCC83",
  "this.Label_22BB32F4_3075_D173_4191_C8B45B85DEB8"
 ],
 "id": "Container_22BB12F4_3075_D173_4184_EC3BC4955417",
 "left": 70,
 "width": 550,
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "creationPolicy": "inAdvance",
 "class": "Container",
 "top": 34,
 "contentOpaque": false,
 "verticalAlign": "top",
 "height": 140,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "shadow": false,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "--STICKER"
 },
 "visible": false,
 "propagateClick": true,
 "overflow": "visible",
 "paddingLeft": 0
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "scrollBarColor": "#000000",
 "width": 115.05,
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "right": "0%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "class": "Container",
 "top": "0%",
 "contentOpaque": false,
 "verticalAlign": "top",
 "height": 641,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "shadow": false,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "-- SETTINGS"
 },
 "propagateClick": true,
 "overflow": "scroll",
 "paddingLeft": 0
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4",
  "this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD"
 ],
 "id": "Container_4041C033_7558_FB6E_41CE_BFE427F3AF92",
 "left": "0%",
 "width": 330,
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "class": "Container",
 "top": "0%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "shadow": false,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "--- LEFT PANEL 4 (Community)"
 },
 "height": "100%",
 "propagateClick": false,
 "overflow": "scroll",
 "paddingLeft": 0
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "children": [
  "this.Container_062A782F_1140_E20B_41AF_B3E5DE341773",
  "this.Container_062A9830_1140_E215_41A7_5F2BBE5C20E4"
 ],
 "id": "Container_062AB830_1140_E215_41AF_6C9D65345420",
 "left": "0%",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "0%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "creationPolicy": "inAdvance",
 "class": "Container",
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "top": "0%",
 "contentOpaque": false,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "shadow": false,
 "backgroundOpacity": 0.6,
 "paddingRight": 0,
 "gap": 10,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "--INFO photo"
 },
 "visible": false,
 "propagateClick": true,
 "overflow": "scroll",
 "paddingLeft": 0
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "0%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "creationPolicy": "inAdvance",
 "class": "Container",
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "top": "0%",
 "contentOpaque": false,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "shadow": false,
 "backgroundOpacity": 0.6,
 "paddingRight": 0,
 "gap": 10,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "--PANORAMA LIST"
 },
 "visible": false,
 "propagateClick": true,
 "overflow": "scroll",
 "paddingLeft": 0
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "left": "0%",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "0%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "creationPolicy": "inAdvance",
 "class": "Container",
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "top": "0%",
 "contentOpaque": false,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "shadow": false,
 "backgroundOpacity": 0.6,
 "paddingRight": 0,
 "gap": 10,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "--LOCATION"
 },
 "visible": false,
 "propagateClick": true,
 "overflow": "scroll",
 "paddingLeft": 0
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "children": [
  "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3"
 ],
 "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
 "left": "0%",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "0%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "creationPolicy": "inAdvance",
 "class": "Container",
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "top": "0%",
 "contentOpaque": false,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "shadow": false,
 "backgroundOpacity": 0.6,
 "paddingRight": 0,
 "gap": 10,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "--FLOORPLAN"
 },
 "visible": false,
 "propagateClick": true,
 "overflow": "scroll",
 "paddingLeft": 0
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "left": "0%",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "0%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "creationPolicy": "inAdvance",
 "class": "Container",
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "top": "0%",
 "contentOpaque": false,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "shadow": false,
 "backgroundOpacity": 0.6,
 "paddingRight": 0,
 "gap": 10,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "--PHOTOALBUM"
 },
 "visible": false,
 "propagateClick": true,
 "overflow": "scroll",
 "paddingLeft": 0
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "children": [
  "this.Container_1E19923C_57F1_802D_41C4_18DBE75E48C1",
  "this.Container_1E18A23C_57F1_802D_41B9_D08FA26C7F4C"
 ],
 "id": "Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9",
 "left": "0%",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#04A3E1",
 "right": "0%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "creationPolicy": "inAdvance",
 "class": "Container",
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "top": "0%",
 "contentOpaque": false,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "shadow": false,
 "backgroundOpacity": 0.6,
 "paddingRight": 0,
 "gap": 10,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, false, 0, null, null, false)",
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "--REALTOR"
 },
 "visible": false,
 "propagateClick": true,
 "overflow": "scroll",
 "paddingLeft": 0
},
{
 "paddingLeft": 0,
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "width": 58,
 "borderSize": 0,
 "horizontalAlign": "center",
 "minHeight": 1,
 "class": "IconButton",
 "transparencyActive": true,
 "verticalAlign": "middle",
 "height": 58,
 "mode": "toggle",
 "paddingRight": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "propagateClick": true,
 "cursor": "hand"
},
{
 "paddingLeft": 0,
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "width": 58,
 "borderSize": 0,
 "horizontalAlign": "center",
 "minHeight": 1,
 "class": "IconButton",
 "transparencyActive": true,
 "verticalAlign": "middle",
 "height": 58,
 "mode": "toggle",
 "paddingRight": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton MUTE"
 },
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "propagateClick": true,
 "cursor": "hand"
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_03C0D315_0F9F_0DCE_41A3_1C46F07FEB97, this.camera_13351918_0FAB_1DC5_418D_3296DE33D124); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 34.98,
   "image": "this.AnimatedImageResource_1F3DA0C5_0FBB_0C4E_4181_C8D28EA48ADF",
   "pitch": -30.27,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -1.02,
   "distance": 100
  }
 ],
 "id": "overlay_00C374CA_0FA9_345A_41A8_2B403A2596E0",
 "data": {
  "label": "Arrow 08c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 34.98,
   "yaw": -1.02,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_03C2009D_0F9F_0CFF_419A_FDDC75CEC3C0_0_HS_0_0_0_map.gif",
      "width": 38,
      "height": 16
     }
    ]
   },
   "pitch": -30.27
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_03D70BD4_0F9F_7C4E_419C_5C543C04090C, this.camera_1327293C_0FAB_1C3D_415F_0B9DAA4AF13E); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 33.15,
   "image": "this.AnimatedImageResource_1E8FBC21_0FA9_1BC7_4173_3214028FBAB0",
   "pitch": -17.59,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 100.84,
   "distance": 100
  }
 ],
 "id": "overlay_00136291_0FA9_0CC7_4177_69E8B40D3B89",
 "data": {
  "label": "Arrow 08c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 33.15,
   "yaw": 100.84,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_03C2009D_0F9F_0CFF_419A_FDDC75CEC3C0_0_HS_1_0_0_map.gif",
      "width": 38,
      "height": 16
     }
    ]
   },
   "pitch": -17.59
  }
 ]
},
{
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_02824144_0F9F_0C4E_41A6_89D2C6B88BE9_tcap0.png",
    "width": 850,
    "height": 850
   }
  ]
 },
 "hfov": 45,
 "rotate": false,
 "id": "panorama_03C2009D_0F9F_0CFF_419A_FDDC75CEC3C0_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_03C6D4F4_0F9F_144D_419F_10B47B57C187, this.camera_135BA8D7_0FAB_1C4B_41AC_AB307C0469E5); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 34.08,
   "image": "this.AnimatedImageResource_1F3D20C5_0FBB_0C49_41A2_83DF50FF4AAF",
   "pitch": -11.45,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -19.02,
   "distance": 100
  }
 ],
 "id": "overlay_00FD6CC0_0FA7_3445_41A7_5F8DE1B9D518",
 "data": {
  "label": "Arrow 08c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 34.08,
   "yaw": -19.02,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_03C0D315_0F9F_0DCE_41A3_1C46F07FEB97_0_HS_0_0_0_map.gif",
      "width": 38,
      "height": 16
     }
    ]
   },
   "pitch": -11.45
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_03C2009D_0F9F_0CFF_419A_FDDC75CEC3C0, this.camera_134EF8F7_0FAB_1C4B_41AA_AC335AD70327); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 33.15,
   "image": "this.AnimatedImageResource_1D44C5E0_0FBB_3446_4191_17DEA8E8AC99",
   "pitch": -17.59,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 167.52,
   "distance": 100
  }
 ],
 "id": "overlay_000F55F8_0FA7_7446_4162_5C407E07D71A",
 "data": {
  "label": "Arrow 08c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 33.15,
   "yaw": 167.52,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_03C0D315_0F9F_0DCE_41A3_1C46F07FEB97_0_HS_1_0_0_map.gif",
      "width": 38,
      "height": 16
     }
    ]
   },
   "pitch": -17.59
  }
 ]
},
{
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_02824144_0F9F_0C4E_41A6_89D2C6B88BE9_tcap0.png",
    "width": 850,
    "height": 850
   }
  ]
 },
 "hfov": 45,
 "rotate": false,
 "id": "panorama_03C0D315_0F9F_0DCE_41A3_1C46F07FEB97_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_03C2009D_0F9F_0CFF_419A_FDDC75CEC3C0, this.camera_13601891_0FAB_1CC7_41A0_076D97A22818); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 29.78,
   "image": "this.AnimatedImageResource_1F3C30C4_0FBB_0C4E_4188_E8E200EA041A",
   "pitch": -31.09,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -71.39,
   "distance": 100
  }
 ],
 "id": "overlay_00DE3577_0FA9_144B_4141_0B7EB8F24C6D",
 "data": {
  "label": "Arrow 08c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 29.78,
   "yaw": -71.39,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_03D70BD4_0F9F_7C4E_419C_5C543C04090C_0_HS_0_0_0_map.gif",
      "width": 38,
      "height": 16
     }
    ]
   },
   "pitch": -31.09
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_02824144_0F9F_0C4E_41A6_89D2C6B88BE9, this.camera_137DE86B_0FAB_1C5B_4173_5333346467A6); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 30.03,
   "image": "this.AnimatedImageResource_1D47C5DF_0FBB_347A_41A8_50D1814074C4",
   "pitch": -30.27,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 158.11,
   "distance": 100
  }
 ],
 "id": "overlay_0041256B_0FA9_145B_4192_4A01978651D6",
 "data": {
  "label": "Arrow 08c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 30.03,
   "yaw": 158.11,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_03D70BD4_0F9F_7C4E_419C_5C543C04090C_0_HS_1_0_0_map.gif",
      "width": 38,
      "height": 16
     }
    ]
   },
   "pitch": -30.27
  }
 ]
},
{
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_02824144_0F9F_0C4E_41A6_89D2C6B88BE9_tcap0.png",
    "width": 850,
    "height": 850
   }
  ]
 },
 "hfov": 45,
 "rotate": false,
 "id": "panorama_03D70BD4_0F9F_7C4E_419C_5C543C04090C_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_03D70BD4_0F9F_7C4E_419C_5C543C04090C, this.camera_135758B5_0FAB_1CCF_41A3_B4D5B5938E1D); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 30.28,
   "image": "this.AnimatedImageResource_1F3F30C3_0FBB_0C4A_41AA_BE33C30C0ECD",
   "pitch": -29.45,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -10.43,
   "distance": 100
  }
 ],
 "id": "overlay_00C1CBF8_0FAB_1C46_4192_94B13044B7E3",
 "data": {
  "label": "Arrow 08c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 30.28,
   "yaw": -10.43,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_02824144_0F9F_0C4E_41A6_89D2C6B88BE9_0_HS_0_0_0_map.gif",
      "width": 38,
      "height": 16
     }
    ]
   },
   "pitch": -29.45
  }
 ]
},
{
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_02824144_0F9F_0C4E_41A6_89D2C6B88BE9_tcap0.png",
    "width": 850,
    "height": 850
   }
  ]
 },
 "hfov": 45,
 "rotate": false,
 "id": "panorama_02824144_0F9F_0C4E_41A6_89D2C6B88BE9_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_03C0D315_0F9F_0DCE_41A3_1C46F07FEB97, this.camera_1376683C_0FAB_1C3D_416C_3FFB12AA7AA4); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 32.75,
   "image": "this.AnimatedImageResource_1F32A0C7_0FBB_0C4A_41A5_5EEF281A54CC",
   "pitch": -19.64,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 164.66,
   "distance": 100
  }
 ],
 "id": "overlay_009A7AAA_0FA7_7CDA_41A1_661DE1D1BF9B",
 "data": {
  "label": "Arrow 08c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 32.75,
   "yaw": 164.66,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_03C6D4F4_0F9F_144D_419F_10B47B57C187_0_HS_0_0_0_map.gif",
      "width": 38,
      "height": 16
     }
    ]
   },
   "pitch": -19.64
  }
 ]
},
{
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_02824144_0F9F_0C4E_41A6_89D2C6B88BE9_tcap0.png",
    "width": 850,
    "height": 850
   }
  ]
 },
 "hfov": 45,
 "rotate": false,
 "id": "panorama_03C6D4F4_0F9F_144D_419F_10B47B57C187_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "paddingLeft": 0,
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "width": 58,
 "borderSize": 0,
 "horizontalAlign": "center",
 "minHeight": 1,
 "class": "IconButton",
 "transparencyActive": true,
 "verticalAlign": "middle",
 "height": 58,
 "mode": "push",
 "paddingRight": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton VR"
 },
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "propagateClick": true,
 "cursor": "hand"
},
{
 "paddingLeft": 0,
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "width": 58,
 "borderSize": 0,
 "horizontalAlign": "center",
 "minHeight": 1,
 "class": "IconButton",
 "transparencyActive": true,
 "verticalAlign": "middle",
 "height": 58,
 "mode": "toggle",
 "paddingRight": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton HS "
 },
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "propagateClick": true,
 "cursor": "hand"
},
{
 "paddingLeft": 0,
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "width": 58,
 "borderSize": 0,
 "horizontalAlign": "center",
 "minHeight": 1,
 "class": "IconButton",
 "transparencyActive": true,
 "verticalAlign": "middle",
 "height": 58,
 "mode": "toggle",
 "paddingRight": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton GYRO"
 },
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "propagateClick": true,
 "cursor": "hand"
},
{
 "scrollBarWidth": 10,
 "shadowHorizontalLength": 0,
 "id": "Container_22BBC2F4_3075_D173_41B4_71F7A3560C34",
 "left": "0%",
 "width": 366,
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "shadowVerticalLength": 0,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "verticalAlign": "top",
 "top": 2,
 "contentOpaque": false,
 "shadowBlurRadius": 7,
 "height": 78,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "shadow": true,
 "backgroundOpacity": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "shadowOpacity": 0.3,
 "paddingRight": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "shadowSpread": 1,
 "paddingBottom": 0,
 "propagateClick": true,
 "data": {
  "name": "white block"
 },
 "minWidth": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "overflow": "scroll",
 "paddingLeft": 0
},
{
 "scrollBarWidth": 10,
 "shadowHorizontalLength": 0,
 "id": "Container_22BBD2F4_3075_D173_41B4_8504C593E6BF",
 "left": 0,
 "width": 366,
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "shadowVerticalLength": 0,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "verticalAlign": "top",
 "top": 86,
 "contentOpaque": false,
 "shadowBlurRadius": 7,
 "height": 46,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "shadow": true,
 "backgroundOpacity": 1,
 "backgroundColor": [
  "#5CA1DE"
 ],
 "gap": 10,
 "shadowOpacity": 0.3,
 "paddingRight": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "shadowSpread": 1,
 "paddingBottom": 0,
 "propagateClick": true,
 "data": {
  "name": "blue block"
 },
 "minWidth": 1,
 "backgroundColorRatios": [
  0.01
 ],
 "overflow": "scroll",
 "paddingLeft": 0
},
{
 "fontFamily": "Oswald",
 "id": "Label_22BB22F4_3075_D173_41BB_3ACDC6CCCC83",
 "left": 10,
 "width": 391,
 "fontColor": "#000000",
 "borderSize": 0,
 "horizontalAlign": "left",
 "minHeight": 1,
 "text": "LOREM IPSUM",
 "class": "Label",
 "top": 0,
 "verticalAlign": "top",
 "height": 75,
 "paddingRight": 0,
 "fontSize": 61,
 "shadow": false,
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "textDecoration": "none",
 "propagateClick": true,
 "data": {
  "name": "text 1"
 },
 "fontWeight": "bold",
 "paddingLeft": 0
},
{
 "fontFamily": "Oswald",
 "id": "Label_22BB32F4_3075_D173_4191_C8B45B85DEB8",
 "left": 12,
 "width": 385,
 "fontColor": "#FFFFFF",
 "textShadowColor": "#000000",
 "borderSize": 0,
 "horizontalAlign": "left",
 "textShadowOpacity": 1,
 "minHeight": 1,
 "text": "DOLOR SIT AMET, CONSECTETUR",
 "class": "Label",
 "top": 90,
 "verticalAlign": "top",
 "height": 44,
 "paddingRight": 0,
 "fontSize": 28,
 "shadow": false,
 "backgroundOpacity": 0,
 "textShadowBlurRadius": 10,
 "paddingTop": 0,
 "textShadowHorizontalLength": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "textDecoration": "none",
 "propagateClick": true,
 "data": {
  "name": "text 2"
 },
 "fontWeight": "normal",
 "textShadowVerticalLength": 0,
 "paddingLeft": 0
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "scrollBarColor": "#000000",
 "width": 110,
 "layout": "horizontal",
 "scrollBarOpacity": 0.5,
 "right": "0%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "class": "Container",
 "top": "0%",
 "contentOpaque": false,
 "verticalAlign": "middle",
 "height": 110,
 "horizontalAlign": "center",
 "scrollBarMargin": 2,
 "shadow": false,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "button menu sup"
 },
 "propagateClick": true,
 "overflow": "visible",
 "paddingLeft": 0
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
  "this.IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "scrollBarColor": "#000000",
 "layout": "vertical",
 "scrollBarOpacity": 0.5,
 "right": "0%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "class": "Container",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "bottom": "0%",
 "paddingRight": 0,
 "horizontalAlign": "center",
 "contentOpaque": false,
 "shadow": false,
 "backgroundOpacity": 0,
 "width": "91.304%",
 "gap": 3,
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "-button set"
 },
 "height": "85.959%",
 "visible": false,
 "propagateClick": true,
 "overflow": "scroll",
 "paddingLeft": 0
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Container_21F34780_3014_BF93_41A2_9BF700588BEC",
  "this.IconButton_223F0171_3014_B375_41C1_61063C3D73B3"
 ],
 "id": "Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4",
 "left": "0%",
 "width": 66,
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "creationPolicy": "inAdvance",
 "class": "Container",
 "top": "0%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "shadow": false,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "- COLLAPSE"
 },
 "height": "100%",
 "visible": false,
 "propagateClick": true,
 "overflow": "scroll",
 "paddingLeft": 0
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Container_4521E58D_74A8_853A_418A_CF7FF914DD83",
  "this.IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882"
 ],
 "id": "Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD",
 "scrollBarColor": "#000000",
 "width": 330,
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "right": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "class": "Container",
 "top": "0%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "shadow": false,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "- EXPANDED"
 },
 "height": "100%",
 "propagateClick": false,
 "overflow": "visible",
 "paddingLeft": 0
},
{
 "children": [
  "this.Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
  "this.Container_062A082F_1140_E20A_4193_DF1A4391DC79"
 ],
 "id": "Container_062A782F_1140_E20B_41AF_B3E5DE341773",
 "left": "15%",
 "layout": "horizontal",
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "right": "15%",
 "borderSize": 0,
 "shadowVerticalLength": 0,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "verticalAlign": "top",
 "top": "10%",
 "contentOpaque": false,
 "bottom": "10%",
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "shadow": true,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "gap": 10,
 "paddingRight": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "propagateClick": false,
 "data": {
  "name": "Global"
 },
 "backgroundImageUrl": "skin/Container_062A782F_1140_E20B_41AF_B3E5DE341773.jpg",
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "shadowHorizontalLength": 0
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.IconButton_062A8830_1140_E215_419D_3439F16CCB3E"
 ],
 "id": "Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
 "left": "15%",
 "layout": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "15%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "class": "Container",
 "verticalAlign": "top",
 "top": "10%",
 "contentOpaque": false,
 "bottom": "80%",
 "paddingRight": 20,
 "horizontalAlign": "right",
 "scrollBarMargin": 2,
 "shadow": false,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 20,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "Container X global"
 },
 "propagateClick": false,
 "overflow": "visible",
 "paddingLeft": 0
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "15%",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "right": "15%",
 "borderSize": 0,
 "shadowVerticalLength": 0,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "shadowHorizontalLength": 0,
 "verticalAlign": "top",
 "top": "10%",
 "contentOpaque": false,
 "bottom": "10%",
 "shadowBlurRadius": 25,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "horizontalAlign": "center",
 "scrollBarMargin": 2,
 "shadow": true,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "gap": 10,
 "shadowSpread": 1,
 "paddingTop": 0,
 "shadowOpacity": 0.3,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "propagateClick": true,
 "data": {
  "name": "Global"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "overflow": "visible",
 "paddingLeft": 0
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA"
 ],
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "left": "15%",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "right": "15%",
 "borderSize": 0,
 "shadowVerticalLength": 0,
 "class": "Container",
 "minHeight": 1,
 "shadowHorizontalLength": 0,
 "scrollBarOpacity": 0.5,
 "verticalAlign": "top",
 "top": "10%",
 "scrollBarVisible": "rollOver",
 "bottom": "10%",
 "shadowBlurRadius": 25,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "shadow": true,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "gap": 10,
 "shadowSpread": 1,
 "paddingTop": 0,
 "shadowOpacity": 0.3,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "propagateClick": true,
 "data": {
  "name": "Global"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "overflow": "scroll",
 "paddingLeft": 0
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "left": "15%",
 "layout": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "15%",
 "borderSize": 0,
 "minHeight": 1,
 "class": "Container",
 "verticalAlign": "top",
 "top": "10%",
 "scrollBarVisible": "rollOver",
 "bottom": "80%",
 "paddingRight": 20,
 "horizontalAlign": "right",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "shadow": false,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 20,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "Container X global"
 },
 "propagateClick": true,
 "overflow": "visible",
 "paddingLeft": 0
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.MapViewer",
  "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C"
 ],
 "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
 "left": "15%",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "right": "15%",
 "borderSize": 0,
 "shadowVerticalLength": 0,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "shadowHorizontalLength": 0,
 "verticalAlign": "top",
 "top": "10%",
 "contentOpaque": false,
 "bottom": "10%",
 "shadowBlurRadius": 25,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "horizontalAlign": "center",
 "scrollBarMargin": 2,
 "shadow": true,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "gap": 10,
 "shadowSpread": 1,
 "paddingTop": 0,
 "shadowOpacity": 0.3,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "propagateClick": true,
 "data": {
  "name": "Global"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "overflow": "visible",
 "paddingLeft": 0
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "left": "15%",
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "right": "15%",
 "borderSize": 0,
 "shadowVerticalLength": 0,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "shadowHorizontalLength": 0,
 "verticalAlign": "top",
 "top": "10%",
 "contentOpaque": false,
 "bottom": "10%",
 "shadowBlurRadius": 25,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "horizontalAlign": "center",
 "scrollBarMargin": 2,
 "shadow": true,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "gap": 10,
 "shadowSpread": 1,
 "paddingTop": 0,
 "shadowOpacity": 0.3,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "propagateClick": true,
 "data": {
  "name": "Global"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "overflow": "visible",
 "paddingLeft": 0
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Container_1E19E23C_57F1_802D_41D1_9B8B4D1D2BBD",
  "this.Container_1E19D23C_57F1_802D_41B0_92437DF80B82"
 ],
 "id": "Container_1E19923C_57F1_802D_41C4_18DBE75E48C1",
 "left": "15%",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "right": "15%",
 "borderSize": 0,
 "shadowVerticalLength": 0,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "shadowHorizontalLength": 0,
 "verticalAlign": "top",
 "top": "10%",
 "contentOpaque": false,
 "bottom": "10%",
 "shadowBlurRadius": 25,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "shadow": true,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "gap": 10,
 "shadowSpread": 1,
 "paddingTop": 0,
 "shadowOpacity": 0.3,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "propagateClick": false,
 "data": {
  "name": "Global"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "overflow": "scroll",
 "paddingLeft": 0
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF"
 ],
 "id": "Container_1E18A23C_57F1_802D_41B9_D08FA26C7F4C",
 "left": "15%",
 "layout": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "15%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "class": "Container",
 "verticalAlign": "top",
 "top": "10%",
 "contentOpaque": false,
 "bottom": "80%",
 "paddingRight": 20,
 "horizontalAlign": "right",
 "scrollBarMargin": 2,
 "shadow": false,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 20,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "Container X global"
 },
 "propagateClick": false,
 "overflow": "visible",
 "paddingLeft": 0
},
{
 "class": "AnimatedImageResource",
 "rowCount": 7,
 "frameCount": 32,
 "frameDuration": 41,
 "colCount": 5,
 "id": "AnimatedImageResource_1F3DA0C5_0FBB_0C4E_4181_C8D28EA48ADF",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_03C2009D_0F9F_0CFF_419A_FDDC75CEC3C0_0_HS_0_0.png",
   "width": 600,
   "height": 350
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 7,
 "frameCount": 32,
 "frameDuration": 41,
 "colCount": 5,
 "id": "AnimatedImageResource_1E8FBC21_0FA9_1BC7_4173_3214028FBAB0",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_03C2009D_0F9F_0CFF_419A_FDDC75CEC3C0_0_HS_1_0.png",
   "width": 600,
   "height": 350
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 7,
 "frameCount": 32,
 "frameDuration": 41,
 "colCount": 5,
 "id": "AnimatedImageResource_1F3D20C5_0FBB_0C49_41A2_83DF50FF4AAF",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_03C0D315_0F9F_0DCE_41A3_1C46F07FEB97_0_HS_0_0.png",
   "width": 600,
   "height": 350
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 7,
 "frameCount": 32,
 "frameDuration": 41,
 "colCount": 5,
 "id": "AnimatedImageResource_1D44C5E0_0FBB_3446_4191_17DEA8E8AC99",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_03C0D315_0F9F_0DCE_41A3_1C46F07FEB97_0_HS_1_0.png",
   "width": 600,
   "height": 350
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 7,
 "frameCount": 32,
 "frameDuration": 41,
 "colCount": 5,
 "id": "AnimatedImageResource_1F3C30C4_0FBB_0C4E_4188_E8E200EA041A",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_03D70BD4_0F9F_7C4E_419C_5C543C04090C_0_HS_0_0.png",
   "width": 600,
   "height": 350
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 7,
 "frameCount": 32,
 "frameDuration": 41,
 "colCount": 5,
 "id": "AnimatedImageResource_1D47C5DF_0FBB_347A_41A8_50D1814074C4",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_03D70BD4_0F9F_7C4E_419C_5C543C04090C_0_HS_1_0.png",
   "width": 600,
   "height": 350
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 7,
 "frameCount": 32,
 "frameDuration": 41,
 "colCount": 5,
 "id": "AnimatedImageResource_1F3F30C3_0FBB_0C4A_41AA_BE33C30C0ECD",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_02824144_0F9F_0C4E_41A6_89D2C6B88BE9_0_HS_0_0.png",
   "width": 600,
   "height": 350
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 7,
 "frameCount": 32,
 "frameDuration": 41,
 "colCount": 5,
 "id": "AnimatedImageResource_1F32A0C7_0FBB_0C4A_41A5_5EEF281A54CC",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_03C6D4F4_0F9F_144D_419F_10B47B57C187_0_HS_0_0.png",
   "width": 600,
   "height": 350
  }
 ]
},
{
 "paddingLeft": 0,
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "width": 60,
 "borderSize": 0,
 "horizontalAlign": "center",
 "minHeight": 1,
 "class": "IconButton",
 "transparencyActive": true,
 "verticalAlign": "middle",
 "height": 60,
 "mode": "toggle",
 "paddingRight": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "image button menu"
 },
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "propagateClick": true,
 "cursor": "hand"
},
{
 "paddingLeft": 0,
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "width": 58,
 "borderSize": 0,
 "horizontalAlign": "center",
 "minHeight": 1,
 "class": "IconButton",
 "transparencyActive": true,
 "verticalAlign": "middle",
 "height": 58,
 "mode": "push",
 "paddingRight": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "paddingTop": 0,
 "click": "this.shareTwitter(window.location.href)",
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton TWITTER"
 },
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "propagateClick": true,
 "cursor": "hand"
},
{
 "paddingLeft": 0,
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
 "width": 58,
 "borderSize": 0,
 "horizontalAlign": "center",
 "minHeight": 1,
 "class": "IconButton",
 "transparencyActive": true,
 "verticalAlign": "middle",
 "height": 58,
 "mode": "push",
 "paddingRight": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "paddingTop": 0,
 "click": "this.shareFacebook(window.location.href)",
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton FB"
 },
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png",
 "propagateClick": true,
 "cursor": "hand"
},
{
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "id": "Container_21F34780_3014_BF93_41A2_9BF700588BEC",
 "left": "0%",
 "width": 36,
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "class": "Container",
 "top": "0%",
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000"
 ],
 "horizontalAlign": "left",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "shadow": false,
 "backgroundOpacity": 0.4,
 "minWidth": 1,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": "100%",
 "paddingBottom": 0,
 "data": {
  "name": "Container black"
 },
 "propagateClick": true,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0
 ]
},
{
 "cursor": "hand",
 "maxHeight": 80,
 "maxWidth": 80,
 "id": "IconButton_223F0171_3014_B375_41C1_61063C3D73B3",
 "left": 10,
 "width": 50,
 "borderSize": 0,
 "horizontalAlign": "center",
 "minHeight": 1,
 "class": "IconButton",
 "transparencyActive": true,
 "top": "40%",
 "bottom": "40%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "shadow": false,
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_223F0171_3014_B375_41C1_61063C3D73B3_rollover.png",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, false, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, false, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, true, 0, null, null, false)",
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton arrow"
 },
 "iconURL": "skin/IconButton_223F0171_3014_B375_41C1_61063C3D73B3.png",
 "propagateClick": true,
 "paddingLeft": 0
},
{
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "children": [
  "this.Container_0B85764A_2D07_4D95_41A5_3AC872515A8C"
 ],
 "id": "Container_4521E58D_74A8_853A_418A_CF7FF914DD83",
 "left": "0%",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "class": "Container",
 "verticalAlign": "top",
 "top": "0%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "horizontalAlign": "left",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "shadow": false,
 "backgroundOpacity": 0.3,
 "minWidth": 1,
 "width": "90%",
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": "100%",
 "paddingBottom": 0,
 "data": {
  "name": "Container"
 },
 "propagateClick": false,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "cursor": "hand",
 "maxHeight": 50,
 "maxWidth": 50,
 "id": "IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882",
 "width": 50,
 "right": 9,
 "borderSize": 0,
 "horizontalAlign": "center",
 "minHeight": 1,
 "class": "IconButton",
 "transparencyActive": true,
 "top": "40%",
 "bottom": "40%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "shadow": false,
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882_rollover.png",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false)",
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton collapse"
 },
 "iconURL": "skin/IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882.png",
 "visible": false,
 "propagateClick": true,
 "paddingLeft": 0
},
{
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "children": [
  "this.Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A"
 ],
 "id": "Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "class": "Container",
 "verticalAlign": "middle",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000"
 ],
 "horizontalAlign": "center",
 "paddingRight": 0,
 "contentOpaque": false,
 "shadow": false,
 "backgroundOpacity": 1,
 "width": "85%",
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "-left"
 },
 "height": "100%",
 "propagateClick": false,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0
 ]
},
{
 "paddingLeft": 50,
 "scrollBarWidth": 10,
 "children": [
  "this.Container_062A3830_1140_E215_4195_1698933FE51C",
  "this.Container_062A2830_1140_E215_41AA_EB25B7BD381C",
  "this.Container_062AE830_1140_E215_4180_196ED689F4BD"
 ],
 "id": "Container_062A082F_1140_E20A_4193_DF1A4391DC79",
 "scrollBarColor": "#0069A3",
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.51,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "class": "Container",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "horizontalAlign": "left",
 "paddingRight": 50,
 "contentOpaque": false,
 "shadow": false,
 "backgroundOpacity": 1,
 "width": "50%",
 "gap": 0,
 "paddingTop": 20,
 "borderRadius": 0,
 "minWidth": 460,
 "paddingBottom": 20,
 "data": {
  "name": "-right"
 },
 "height": "100%",
 "propagateClick": false,
 "overflow": "visible",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "paddingLeft": 0,
 "maxHeight": 60,
 "maxWidth": 60,
 "height": "75%",
 "id": "IconButton_062A8830_1140_E215_419D_3439F16CCB3E",
 "borderSize": 0,
 "horizontalAlign": "center",
 "minHeight": 50,
 "class": "IconButton",
 "transparencyActive": false,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "width": "25%",
 "mode": "push",
 "shadow": false,
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_rollover.jpg",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed.jpg",
 "borderRadius": 0,
 "minWidth": 50,
 "paddingBottom": 0,
 "data": {
  "name": "X"
 },
 "iconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E.jpg",
 "propagateClick": false,
 "cursor": "hand"
},
{
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "children": [
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "class": "Container",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 140,
 "horizontalAlign": "left",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "width": "100%",
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "header"
 },
 "propagateClick": true,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "itemMaxWidth": 1000,
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "left": 0,
 "itemLabelHorizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#04A3E1",
 "itemThumbnailOpacity": 1,
 "itemMode": "normal",
 "itemLabelFontStyle": "italic",
 "itemPaddingRight": 3,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "class": "ThumbnailGrid",
 "horizontalAlign": "center",
 "itemLabelFontFamily": "Oswald",
 "itemMaxHeight": 1000,
 "itemBorderRadius": 0,
 "verticalAlign": "middle",
 "paddingRight": 70,
 "selectedItemThumbnailShadowBlurRadius": 16,
 "itemOpacity": 1,
 "selectedItemThumbnailShadowVerticalLength": 0,
 "selectedItemLabelFontColor": "#04A3E1",
 "itemLabelPosition": "bottom",
 "shadow": false,
 "backgroundOpacity": 0,
 "minWidth": 1,
 "itemHorizontalAlign": "center",
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "itemBackgroundOpacity": 0,
 "itemPaddingLeft": 3,
 "itemThumbnailBorderRadius": 0,
 "width": "100%",
 "height": "92%",
 "itemBackgroundColor": [],
 "propagateClick": true,
 "itemWidth": 220,
 "itemBackgroundColorRatios": [],
 "itemPaddingTop": 3,
 "paddingLeft": 70,
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "itemMinHeight": 50,
 "borderSize": 0,
 "selectedItemThumbnailShadow": true,
 "itemLabelTextDecoration": "none",
 "rollOverItemLabelFontColor": "#04A3E1",
 "itemLabelFontWeight": "normal",
 "selectedItemLabelFontWeight": "bold",
 "rollOverItemThumbnailShadow": true,
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "scrollBarMargin": 2,
 "bottom": -0.2,
 "itemLabelFontSize": 16,
 "itemVerticalAlign": "top",
 "itemMinWidth": 50,
 "itemThumbnailScaleMode": "fit_outside",
 "itemHeight": 160,
 "gap": 26,
 "itemThumbnailHeight": 125,
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "paddingTop": 10,
 "itemLabelFontColor": "#666666",
 "itemBackgroundColorDirection": "vertical",
 "borderRadius": 5,
 "paddingBottom": 70,
 "data": {
  "name": "ThumbnailList"
 },
 "itemPaddingBottom": 3,
 "scrollBarWidth": 10,
 "itemThumbnailShadow": false,
 "itemLabelGap": 7,
 "itemThumbnailWidth": 220
},
{
 "paddingLeft": 0,
 "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "scrollEnabled": true,
 "class": "WebFrame",
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.834618437342!2d-44.19423108508468!3d-19.973456186579437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6c3650c516c15%3A0x916974cf450e02aa!2sKND%20Pintura%20Automotiva!5e0!3m2!1spt-BR!2sbr!4v1623763529724!5m2!1spt-BR!2sbr",
 "backgroundColor": [
  "#FFFFFF"
 ],
 "paddingRight": 0,
 "insetBorder": false,
 "shadow": false,
 "backgroundOpacity": 1,
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "WebFrame"
 },
 "height": "100%",
 "propagateClick": true,
 "backgroundColorRatios": [
  0
 ]
},
{
 "paddingLeft": 0,
 "maxHeight": 60,
 "maxWidth": 60,
 "height": "75%",
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "borderSize": 0,
 "horizontalAlign": "center",
 "minHeight": 50,
 "class": "IconButton",
 "transparencyActive": false,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "width": "25%",
 "mode": "push",
 "shadow": false,
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "borderRadius": 0,
 "minWidth": 50,
 "paddingBottom": 0,
 "data": {
  "name": "X"
 },
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
 "propagateClick": true,
 "cursor": "hand"
},
{
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipBorderColor": "#767676",
 "id": "MapViewer",
 "left": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipOpacity": 1,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": 12,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "width": "100%",
 "minHeight": 1,
 "class": "ViewerArea",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "playbackBarRight": 0,
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipShadowColor": "#333333",
 "progressBarBorderSize": 0,
 "playbackBarBorderRadius": 0,
 "paddingRight": 0,
 "shadow": false,
 "minWidth": 1,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "height": "99.975%",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "transitionMode": "blending",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "paddingLeft": 0,
 "toolTipShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "playbackBarHeadShadowColor": "#000000",
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "borderSize": 0,
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowHorizontalLength": 0,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "top": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingTop": 4,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "toolTipBorderRadius": 3,
 "paddingTop": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "borderRadius": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "paddingBottom": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 0,
 "data": {
  "name": "Floor Plan"
 },
 "progressBorderColor": "#FFFFFF",
 "playbackBarHeadOpacity": 1,
 "transitionDuration": 500,
 "toolTipShadowSpread": 0
},
{
 "children": [
  "this.IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E"
 ],
 "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "class": "Container",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 140,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "width": "100%",
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "header"
 },
 "scrollBarWidth": 10,
 "overflow": "scroll",
 "paddingLeft": 0,
 "propagateClick": true
},
{
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "class": "Container",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "horizontalAlign": "left",
 "paddingRight": 0,
 "contentOpaque": false,
 "shadow": false,
 "backgroundOpacity": 0.3,
 "width": "100%",
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "Container photo"
 },
 "height": "100%",
 "propagateClick": true,
 "overflow": "visible",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "children": [
  "this.Image_1E19C23C_57F1_802D_41D1_9DC72DB5C1E1"
 ],
 "id": "Container_1E19E23C_57F1_802D_41D1_9B8B4D1D2BBD",
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "class": "Container",
 "verticalAlign": "middle",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000"
 ],
 "horizontalAlign": "center",
 "paddingRight": 0,
 "contentOpaque": false,
 "shadow": false,
 "backgroundOpacity": 1,
 "width": "55%",
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "-left"
 },
 "height": "100%",
 "propagateClick": false,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0
 ]
},
{
 "paddingLeft": 60,
 "scrollBarWidth": 10,
 "children": [
  "this.Container_1E18223C_57F1_802D_41D5_C1ECF1EB519F",
  "this.Container_1E18323C_57F1_802D_41AC_3EB4DE555BBC",
  "this.Container_1E18523C_57F1_802D_41B1_88C86CD9A273"
 ],
 "id": "Container_1E19D23C_57F1_802D_41B0_92437DF80B82",
 "scrollBarColor": "#0069A3",
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.51,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "class": "Container",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "horizontalAlign": "left",
 "paddingRight": 60,
 "contentOpaque": false,
 "shadow": false,
 "backgroundOpacity": 1,
 "width": "45%",
 "gap": 0,
 "paddingTop": 20,
 "borderRadius": 0,
 "minWidth": 460,
 "paddingBottom": 20,
 "data": {
  "name": "-right"
 },
 "height": "100%",
 "propagateClick": false,
 "overflow": "visible",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "paddingLeft": 0,
 "maxHeight": 60,
 "maxWidth": 60,
 "height": "75%",
 "id": "IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF",
 "borderSize": 0,
 "horizontalAlign": "center",
 "minHeight": 50,
 "class": "IconButton",
 "transparencyActive": false,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "width": "25%",
 "mode": "push",
 "shadow": false,
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF_rollover.jpg",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, false, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF_pressed.jpg",
 "borderRadius": 0,
 "minWidth": 50,
 "paddingBottom": 0,
 "data": {
  "name": "X"
 },
 "iconURL": "skin/IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF.jpg",
 "propagateClick": false,
 "cursor": "hand"
},
{
 "paddingLeft": 40,
 "scrollBarWidth": 10,
 "children": [
  "this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE",
  "this.Container_19256A12_2D07_45B5_41AB_E9DE96B2DFF3",
  "this.Container_2A2CB53C_310E_0014_41C3_AB834B10253B",
  "this.Container_159EADDD_31FA_0014_41C8_8A5203EC627B",
  "this.Container_17569D7D_31FA_0015_41C4_CBC688763A8D",
  "this.Container_1758A215_31FA_0014_41B6_9A4A5384548B",
  "this.Container_17EBA2B7_3106_0014_41A9_D6C96D0633AE",
  "this.Container_168D8311_3106_01EC_41B0_F2D40886AB88",
  "this.Image_1E251A68_0FA7_1C46_418F_2104E991A06A"
 ],
 "id": "Container_0B85764A_2D07_4D95_41A5_3AC872515A8C",
 "left": "0%",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "class": "Container",
 "verticalAlign": "top",
 "top": "0%",
 "backgroundColor": [
  "#000000"
 ],
 "horizontalAlign": "left",
 "paddingRight": 40,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "shadow": false,
 "backgroundOpacity": 0.7,
 "minWidth": 1,
 "width": "100%",
 "gap": 10,
 "paddingTop": 40,
 "borderRadius": 0,
 "height": "100%",
 "paddingBottom": 40,
 "data": {
  "name": "- Buttons set"
 },
 "propagateClick": true,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0
 ]
},
{
 "maxHeight": 1000,
 "maxWidth": 2000,
 "scaleMode": "fit_outside",
 "id": "Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A",
 "left": "0%",
 "borderSize": 0,
 "horizontalAlign": "center",
 "minHeight": 1,
 "class": "Image",
 "verticalAlign": "middle",
 "top": "0%",
 "url": "skin/Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A.jpg",
 "paddingRight": 0,
 "width": "100%",
 "shadow": false,
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "Image"
 },
 "height": "100%",
 "propagateClick": false,
 "paddingLeft": 0
},
{
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "id": "Container_062A3830_1140_E215_4195_1698933FE51C",
 "scrollBarColor": "#000000",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 0,
 "class": "Container",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 60,
 "horizontalAlign": "right",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "width": "100%",
 "gap": 0,
 "paddingTop": 20,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "Container space"
 },
 "propagateClick": false,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "children": [
  "this.HTMLText_062AD830_1140_E215_41B0_321699661E7F",
  "this.Button_062AF830_1140_E215_418D_D2FC11B12C47"
 ],
 "id": "Container_062A2830_1140_E215_41AA_EB25B7BD381C",
 "scrollBarColor": "#E73B2C",
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.79,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 520,
 "class": "Container",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "horizontalAlign": "left",
 "paddingRight": 0,
 "contentOpaque": false,
 "shadow": false,
 "backgroundOpacity": 0.3,
 "width": "100%",
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 100,
 "paddingBottom": 30,
 "data": {
  "name": "Container text"
 },
 "height": "100%",
 "propagateClick": false,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "id": "Container_062AE830_1140_E215_4180_196ED689F4BD",
 "scrollBarColor": "#000000",
 "width": 370,
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "class": "Container",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "height": 40,
 "horizontalAlign": "left",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "Container space"
 },
 "propagateClick": false,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "paddingLeft": 0,
 "maxHeight": 60,
 "maxWidth": 60,
 "height": "36.14%",
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "right": 20,
 "borderSize": 0,
 "horizontalAlign": "right",
 "minHeight": 50,
 "class": "IconButton",
 "transparencyActive": false,
 "verticalAlign": "top",
 "top": 20,
 "paddingRight": 0,
 "width": "100%",
 "mode": "push",
 "shadow": false,
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "borderRadius": 0,
 "minWidth": 50,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton X"
 },
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
 "propagateClick": true,
 "cursor": "hand"
},
{
 "paddingLeft": 0,
 "maxHeight": 60,
 "maxWidth": 60,
 "height": "36.14%",
 "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
 "right": 20,
 "borderSize": 0,
 "horizontalAlign": "right",
 "minHeight": 50,
 "class": "IconButton",
 "transparencyActive": false,
 "verticalAlign": "top",
 "top": 20,
 "paddingRight": 0,
 "width": "100%",
 "mode": "push",
 "shadow": false,
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.jpg",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.jpg",
 "borderRadius": 0,
 "minWidth": 50,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton X"
 },
 "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.jpg",
 "propagateClick": true,
 "cursor": "hand"
},
{
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipBorderColor": "#767676",
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "left": "0%",
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipOpacity": 1,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": 12,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "width": "100%",
 "minHeight": 1,
 "class": "ViewerArea",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "playbackBarRight": 0,
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipShadowColor": "#333333",
 "progressBarBorderSize": 0,
 "playbackBarBorderRadius": 0,
 "paddingRight": 0,
 "shadow": false,
 "minWidth": 1,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "height": "100%",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "transitionMode": "blending",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "paddingLeft": 0,
 "toolTipShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "playbackBarHeadShadowColor": "#000000",
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "borderSize": 0,
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowHorizontalLength": 0,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "top": "0%",
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingTop": 4,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "toolTipBorderRadius": 3,
 "paddingTop": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "borderRadius": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "paddingBottom": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 0,
 "data": {
  "name": "Viewer photoalbum 1"
 },
 "progressBorderColor": "#FFFFFF",
 "playbackBarHeadOpacity": 1,
 "transitionDuration": 500,
 "toolTipShadowSpread": 0
},
{
 "cursor": "hand",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "left": 10,
 "borderSize": 0,
 "horizontalAlign": "center",
 "minHeight": 50,
 "class": "IconButton",
 "transparencyActive": false,
 "verticalAlign": "middle",
 "top": "20%",
 "width": "14.22%",
 "bottom": "20%",
 "paddingRight": 0,
 "mode": "push",
 "shadow": false,
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "borderRadius": 0,
 "minWidth": 50,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton <"
 },
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
 "propagateClick": true,
 "paddingLeft": 0
},
{
 "cursor": "hand",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "right": 10,
 "borderSize": 0,
 "horizontalAlign": "center",
 "minHeight": 50,
 "class": "IconButton",
 "transparencyActive": false,
 "verticalAlign": "middle",
 "top": "20%",
 "width": "14.22%",
 "bottom": "20%",
 "paddingRight": 0,
 "mode": "push",
 "shadow": false,
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "borderRadius": 0,
 "minWidth": 50,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton >"
 },
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
 "propagateClick": true,
 "paddingLeft": 0
},
{
 "paddingLeft": 0,
 "maxHeight": 60,
 "maxWidth": 60,
 "height": "10%",
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "right": 20,
 "borderSize": 0,
 "horizontalAlign": "right",
 "minHeight": 50,
 "class": "IconButton",
 "transparencyActive": false,
 "verticalAlign": "top",
 "top": 20,
 "paddingRight": 0,
 "width": "10%",
 "mode": "push",
 "shadow": false,
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "borderRadius": 0,
 "minWidth": 50,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton X"
 },
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
 "propagateClick": true,
 "cursor": "hand"
},
{
 "maxHeight": 1000,
 "maxWidth": 2000,
 "scaleMode": "fit_outside",
 "id": "Image_1E19C23C_57F1_802D_41D1_9DC72DB5C1E1",
 "left": "0%",
 "borderSize": 0,
 "horizontalAlign": "center",
 "minHeight": 1,
 "class": "Image",
 "verticalAlign": "bottom",
 "top": "0%",
 "url": "skin/Image_1E19C23C_57F1_802D_41D1_9DC72DB5C1E1.jpg",
 "paddingRight": 0,
 "width": "100%",
 "shadow": false,
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "Image40635"
 },
 "height": "100%",
 "propagateClick": false,
 "paddingLeft": 0
},
{
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "id": "Container_1E18223C_57F1_802D_41D5_C1ECF1EB519F",
 "scrollBarColor": "#000000",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 0,
 "class": "Container",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "horizontalAlign": "right",
 "paddingRight": 0,
 "contentOpaque": false,
 "shadow": false,
 "backgroundOpacity": 0.3,
 "width": "100%",
 "gap": 0,
 "paddingTop": 20,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "Container space"
 },
 "height": "5%",
 "propagateClick": false,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "children": [
  "this.HTMLText_1E18123C_57F1_802D_41D2_B0CD0D6533F4",
  "this.Container_1E18623C_57F1_802D_41D5_C4D10C61A206"
 ],
 "id": "Container_1E18323C_57F1_802D_41AC_3EB4DE555BBC",
 "scrollBarColor": "#E73B2C",
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.79,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 520,
 "class": "Container",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "horizontalAlign": "left",
 "paddingRight": 0,
 "contentOpaque": false,
 "shadow": false,
 "backgroundOpacity": 0.3,
 "width": "100%",
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 100,
 "paddingBottom": 30,
 "data": {
  "name": "Container text"
 },
 "height": "100%",
 "propagateClick": false,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "id": "Container_1E18523C_57F1_802D_41B1_88C86CD9A273",
 "scrollBarColor": "#000000",
 "width": 370,
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "class": "Container",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "height": 40,
 "horizontalAlign": "left",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "Container space"
 },
 "propagateClick": false,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Container_208C289A_3033_51B4_41BC_C3F8D8B8F86D",
  "this.Container_106C4A62_2D09_C594_41C0_0D00619DF541",
  "this.Button_0A054365_2D09_CB9F_4145_8C365B373D19",
  "this.Container_152401E8_2D0B_4694_41C5_9141C985F9C3",
  "this.Button_0B73474A_2D18_CB95_41B5_180037BA80BC",
  "this.Container_1BA343A6_2D0B_4A9D_41A8_3A02573B3B89",
  "this.Button_1D2C4FDF_2D7F_BAAB_4198_FBD1E9E469FF",
  "this.Container_15283BED_2D08_DA6F_41C5_5635F0C6DB03",
  "this.Button_0399826A_2D79_4594_41BA_934A50D0E6B4",
  "this.Container_146FF082_2D09_C695_41C4_13DE74CDAF5E",
  "this.Container_207ECEAD_3035_51EC_41A3_EE49910C654D"
 ],
 "id": "Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE",
 "scrollBarColor": "#000000",
 "layout": "vertical",
 "scrollBarOpacity": 0.5,
 "right": "0%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "class": "Container",
 "verticalAlign": "middle",
 "top": "26%",
 "contentOpaque": false,
 "bottom": "26%",
 "paddingRight": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "shadow": false,
 "backgroundOpacity": 0,
 "width": "100%",
 "gap": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "-Level 1"
 },
 "propagateClick": true,
 "overflow": "scroll",
 "paddingLeft": 0
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Container_193B8A52_2D1B_C5B5_41C3_F44FF520A3F0",
  "this.HTMLText_29DD1615_3597_79DF_41C4_7593739E5260",
  "this.Container_2B9EE463_3593_BA7B_4195_8E8F4568BB13",
  "this.Container_283049D5_35F3_AA5F_419D_20B6A59ABCA6"
 ],
 "id": "Container_19256A12_2D07_45B5_41AB_E9DE96B2DFF3",
 "left": "0%",
 "layout": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "class": "Container",
 "verticalAlign": "bottom",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "bottom": "0%",
 "height": 130,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "width": "100%",
 "gap": 5,
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "-Container footer"
 },
 "propagateClick": true,
 "overflow": "scroll",
 "paddingLeft": 0
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Button_2A2DA53B_310E_001C_41C7_8885E712C50B",
  "this.Container_2A2DB53B_310E_001C_41BA_0206228E495C",
  "this.Container_1303E3BB_3106_001D_41C8_60D6F4D70B2F",
  "this.Button_2A2D853B_310E_001C_41C4_1C2E2BAFC35D",
  "this.Button_2A2DE53B_310E_001C_41BB_C7AB6950A4DD",
  "this.Button_2A2C253B_310E_001C_41B6_D3A7F4F68C3E",
  "this.Button_2A2C053B_310E_001C_41A2_583DE489828C",
  "this.Button_2A2C753B_310E_001C_41C4_B649CCC20E3D",
  "this.Button_2A2C553C_310E_0014_41C4_86393D0ADCC7",
  "this.Button_15EF2665_3106_0035_41AE_9BACA1A48D02",
  "this.Button_15F5A318_3106_001C_41C5_9AA2EF2184CF",
  "this.Button_1203FDB8_3106_001C_41B6_C9BE8EDD0DA9",
  "this.Button_13D4FC1E_310A_0017_41BA_DDA6D071C1BA"
 ],
 "id": "Container_2A2CB53C_310E_0014_41C3_AB834B10253B",
 "left": "0%",
 "layout": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "creationPolicy": "inAdvance",
 "class": "Container",
 "verticalAlign": "middle",
 "top": "25%",
 "contentOpaque": false,
 "bottom": "25%",
 "paddingRight": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "shadow": false,
 "backgroundOpacity": 0,
 "width": "100%",
 "gap": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "-Level 2-1"
 },
 "visible": false,
 "propagateClick": true,
 "overflow": "scroll",
 "paddingLeft": 0
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1",
  "this.Container_15A14DDC_31FA_0014_41BE_C93192DD207E",
  "this.Container_15A16DDC_31FA_0014_4199_0FBF7553300D",
  "this.Button_15A10DDC_31FA_0014_4185_021C898E177D",
  "this.Button_15A13DDC_31FA_0014_41C5_41AE80876834",
  "this.Button_15A12DDC_31FA_0014_416B_ED845741AE5F",
  "this.Button_159EDDDC_31FA_0014_419A_61C18E43FE01",
  "this.Button_159ECDDC_31FA_0014_41B9_2D5AB1021813",
  "this.Button_159EFDDC_31FA_0014_41C6_9CF7032F84E0",
  "this.Button_159EEDDC_31FA_0014_41B6_22A86B2D2FEB",
  "this.Button_159E9DDC_31FA_0015_41B6_CB1D433C7673",
  "this.Button_159E8DDD_31FA_0014_41C5_F18F441AF371",
  "this.Button_159EBDDD_31FA_0014_41C8_935504B30727"
 ],
 "id": "Container_159EADDD_31FA_0014_41C8_8A5203EC627B",
 "left": "0%",
 "layout": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "creationPolicy": "inAdvance",
 "class": "Container",
 "verticalAlign": "middle",
 "top": "25%",
 "contentOpaque": false,
 "bottom": "25%",
 "paddingRight": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "shadow": false,
 "backgroundOpacity": 0,
 "width": "100%",
 "gap": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "-Level 2-2"
 },
 "visible": false,
 "propagateClick": true,
 "overflow": "scroll",
 "paddingLeft": 0
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Button_1757CD7D_31FA_0015_4143_A9E37B16A50B",
  "this.Container_17579D7D_31FA_0015_41A1_D2B94269F28D",
  "this.Container_17578D7D_31FA_0015_41BE_353D3005648A",
  "this.Button_1757AD7D_31FA_0015_41C7_FB79F56FA149",
  "this.Button_17565D7D_31FA_0015_4193_78BBCB2DC70F",
  "this.Button_17564D7D_31FA_0015_41B8_A9191CD56C52",
  "this.Button_17567D7D_31FA_0015_41C2_1E0D0AF05C7A",
  "this.Button_17566D7D_31FA_0015_41AD_98D7C60C694F",
  "this.Button_17561D7D_31FA_0015_41B5_BD72FAC26B8B",
  "this.Button_17560D7D_31FA_0015_41C4_7F0EC7540CC2",
  "this.Button_17562D7D_31FA_0015_41A3_96B282B30DBA",
  "this.Button_1756DD7D_31FA_0015_41A5_988B67FCF8B7",
  "this.Button_1756FD7D_31FA_0015_41C7_DA2AAC2AAAEC"
 ],
 "id": "Container_17569D7D_31FA_0015_41C4_CBC688763A8D",
 "left": "0%",
 "layout": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "creationPolicy": "inAdvance",
 "class": "Container",
 "verticalAlign": "middle",
 "top": "25%",
 "contentOpaque": false,
 "bottom": "25%",
 "paddingRight": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "shadow": false,
 "backgroundOpacity": 0,
 "width": "100%",
 "gap": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "-Level 2-3"
 },
 "visible": false,
 "propagateClick": true,
 "overflow": "scroll",
 "paddingLeft": 0
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Button_175A5214_31FA_0014_4198_930DF49BADD9",
  "this.Container_175A4215_31FA_0014_41B2_5B8676CC3F2F",
  "this.Container_1759B215_31FA_0014_41C0_84C99CBD5517",
  "this.Button_1759A215_31FA_0014_41C7_F6B1044E5BB3",
  "this.Button_17598215_31FA_0014_41AC_1166AB319171",
  "this.Button_1759F215_31FA_0014_41BD_BBFA5FB0D882",
  "this.Button_1759D215_31FA_0014_41AD_B6C5744A0B97",
  "this.Button_17593215_31FA_0014_41C0_42BAFB0080F0",
  "this.Button_17592215_31FA_0014_41B2_AA3B5CC318B8",
  "this.Button_17590215_31FA_0014_41C1_2B2D012DCC76",
  "this.Button_17597215_31FA_0014_41C0_9BEE1DE4D7F6",
  "this.Button_17596215_31FA_0014_41C6_A42670770708",
  "this.Button_1758B215_31FA_0014_41BC_C4EAC2A9544B"
 ],
 "id": "Container_1758A215_31FA_0014_41B6_9A4A5384548B",
 "left": "0%",
 "layout": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "creationPolicy": "inAdvance",
 "class": "Container",
 "verticalAlign": "middle",
 "top": "25%",
 "contentOpaque": false,
 "bottom": "25%",
 "paddingRight": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "shadow": false,
 "backgroundOpacity": 0,
 "width": "100%",
 "gap": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "-Level 2-4"
 },
 "visible": false,
 "propagateClick": true,
 "overflow": "scroll",
 "paddingLeft": 0
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C",
  "this.Container_17EA92B7_3106_0014_41A6_2B88DF32BBA7",
  "this.Container_17EAA2B7_3106_0014_41B0_ACBB1485A79E",
  "this.Button_17EAB2B7_3106_0014_41A7_209417AD3E9A",
  "this.Button_17EAD2B7_3106_0014_41C0_0B5453B4841D",
  "this.Button_17EAE2B7_3106_0014_41C7_DB7FC43AAEE0",
  "this.Button_17EB02B7_3106_0014_41AF_05D9AC36B189",
  "this.Button_17EB32B7_3106_0014_41C8_467BF6AECBE8",
  "this.Button_17EB42B7_3106_0014_41B0_CE70CBDDF438",
  "this.Button_17EB52B7_3106_0014_419C_439E593AEC43",
  "this.Button_17EB62B7_3106_0014_41C5_43B38271B353",
  "this.Button_17EB72B7_3106_0014_41B9_61857077BF4A",
  "this.Button_17EB92B7_3106_0014_41B2_34A3E3F63779"
 ],
 "id": "Container_17EBA2B7_3106_0014_41A9_D6C96D0633AE",
 "left": "0%",
 "layout": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "creationPolicy": "inAdvance",
 "class": "Container",
 "verticalAlign": "middle",
 "top": "25%",
 "contentOpaque": false,
 "bottom": "25%",
 "paddingRight": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "shadow": false,
 "backgroundOpacity": 0,
 "width": "100%",
 "gap": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "-Level 2-5"
 },
 "visible": false,
 "propagateClick": true,
 "overflow": "scroll",
 "paddingLeft": 0
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Button_168CA310_3106_01EC_41C7_72CE0522951A",
  "this.Container_168C8310_3106_01EC_4187_B16F315A4A23",
  "this.Container_168D7310_3106_01EC_41BE_5FCBD9E27BE4",
  "this.Button_168D6310_3106_01EC_41B8_A0B6BE627547",
  "this.Button_168D5310_3106_01EC_41B5_96D9387401B8",
  "this.Button_168D3310_3106_01EC_41AC_5D524E4677A5",
  "this.Button_168D2310_3106_01EC_41B8_9D7D1B2B55FA",
  "this.Button_168D0310_3106_01EC_41A1_FA8FC42E6FF3",
  "this.Button_168DE310_3106_01EC_4192_6A9F468A0ADE",
  "this.Button_168DD310_3106_01EC_4190_7815FA70349E",
  "this.Button_168DB310_3106_01EC_41B2_3511AA5E40E1",
  "this.Button_168DA310_3106_01EC_41BE_DF88732C2A28",
  "this.Button_168D9311_3106_01EC_41A8_3BD8769525D6"
 ],
 "id": "Container_168D8311_3106_01EC_41B0_F2D40886AB88",
 "left": "0%",
 "layout": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "creationPolicy": "inAdvance",
 "class": "Container",
 "verticalAlign": "middle",
 "top": "25%",
 "contentOpaque": false,
 "bottom": "25%",
 "paddingRight": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "shadow": false,
 "backgroundOpacity": 0,
 "width": "100%",
 "gap": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "-Level 2-6"
 },
 "visible": false,
 "propagateClick": true,
 "overflow": "scroll",
 "paddingLeft": 0
},
{
 "maxHeight": 383,
 "maxWidth": 683,
 "scaleMode": "fit_inside",
 "id": "Image_1E251A68_0FA7_1C46_418F_2104E991A06A",
 "left": "0%",
 "borderSize": 0,
 "horizontalAlign": "center",
 "minHeight": 1,
 "class": "Image",
 "verticalAlign": "middle",
 "top": "0%",
 "url": "skin/Image_1E251A68_0FA7_1C46_418F_2104E991A06A.PNG",
 "paddingRight": 0,
 "width": "100%",
 "shadow": false,
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "Image8476"
 },
 "height": "24.283%",
 "propagateClick": false,
 "paddingLeft": 0
},
{
 "id": "HTMLText_062AD830_1140_E215_41B0_321699661E7F",
 "scrollBarColor": "#04A3E1",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "class": "HTMLText",
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "width": "100%",
 "shadow": false,
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 20,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:8.46vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.98vh;font-family:'Oswald';\"><B><I>LOREM IPSUM</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.98vh;font-family:'Oswald';\"><B><I>DOLOR SIT AMET</I></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.49vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.16vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.49vh;font-family:'Oswald';\"><B>CONSECTETUR ADIPISCING ELIT. MORBI BIBENDUM PHARETRA LOREM, ACCUMSAN SAN NULLA.</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.16vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.16vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.16vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV><p STYLE=\"margin:0; line-height:1.16vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.16vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.16vh;font-family:Arial, Helvetica, sans-serif;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></DIV><p STYLE=\"margin:0; line-height:2.49vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.16vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.49vh;font-family:'Oswald';\"><B><I>DONEC FEUGIAT:</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.16vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.66vh;\"> </SPAN>\u2022 Nisl nec mi sollicitudin facilisis </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.16vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Nam sed faucibus est.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.16vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Ut eget lorem sed leo.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.16vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.16vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></DIV><p STYLE=\"margin:0; line-height:2.49vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.16vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.49vh;font-family:'Oswald';\"><B><I>LOREM IPSUM:</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.82vh;font-family:'Oswald';\"><B>$150,000</B></SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText"
 },
 "height": "100%",
 "scrollBarWidth": 10,
 "paddingLeft": 10,
 "propagateClick": false
},
{
 "textDecoration": "none",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0
 ],
 "id": "Button_062AF830_1140_E215_418D_D2FC11B12C47",
 "width": 180,
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "horizontalAlign": "center",
 "iconHeight": 32,
 "minHeight": 1,
 "class": "Button",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "height": 50,
 "mode": "push",
 "backgroundColor": [
  "#04A3E1"
 ],
 "fontSize": "2.39vh",
 "rollOverBackgroundOpacity": 1,
 "shadow": false,
 "backgroundOpacity": 0.7,
 "paddingRight": 0,
 "iconBeforeLabel": true,
 "gap": 5,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingTop": 0,
 "label": "LOREM IPSUM",
 "borderRadius": 50,
 "minWidth": 1,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "propagateClick": false,
 "pressedBackgroundOpacity": 1,
 "data": {
  "name": "Button"
 },
 "iconWidth": 32,
 "cursor": "hand",
 "fontWeight": "bold"
},
{
 "id": "HTMLText_1E18123C_57F1_802D_41D2_B0CD0D6533F4",
 "scrollBarColor": "#04A3E1",
 "scrollBarOpacity": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "class": "HTMLText",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "width": "100%",
 "shadow": false,
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:8.46vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.98vh;font-family:'Oswald';\"><B><I>LOREM IPSUM</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.98vh;font-family:'Oswald';\"><B><I>DOLOR SIT AMET</I></B></SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText18899"
 },
 "height": "46%",
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "propagateClick": false
},
{
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "children": [
  "this.Image_1E18723C_57F1_802D_41C5_8325536874A5",
  "this.HTMLText_1E18423C_57F1_802D_41C4_458DB7F892AC"
 ],
 "id": "Container_1E18623C_57F1_802D_41D5_C4D10C61A206",
 "scrollBarColor": "#000000",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "class": "Container",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "horizontalAlign": "left",
 "paddingRight": 0,
 "contentOpaque": false,
 "shadow": false,
 "backgroundOpacity": 0.3,
 "width": "100%",
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "- content"
 },
 "height": "75%",
 "propagateClick": false,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "id": "Container_208C289A_3033_51B4_41BC_C3F8D8B8F86D",
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "class": "Container",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 1,
 "horizontalAlign": "left",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "width": "100%",
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "line"
 },
 "propagateClick": true,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "id": "Container_106C4A62_2D09_C594_41C0_0D00619DF541",
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "class": "Container",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 1,
 "horizontalAlign": "left",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "width": "100%",
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "line"
 },
 "propagateClick": true,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button Panorama List"
 },
 "shadowSpread": 1,
 "id": "Button_0A054365_2D09_CB9F_4145_8C365B373D19",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "class": "Button",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 50,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "paddingRight": 0,
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadow": false,
 "backgroundOpacity": 0,
 "width": "100%",
 "gap": 23,
 "paddingTop": 0,
 "label": "INSTAGRAM",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.openLink('https://www.instagram.com/kndpintura/', '_blank')",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "id": "Container_152401E8_2D0B_4694_41C5_9141C985F9C3",
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "class": "Container",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 1,
 "horizontalAlign": "left",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "width": "100%",
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "line"
 },
 "propagateClick": true,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedLabel": "Inserdt Text",
 "data": {
  "name": "Button Location"
 },
 "shadowSpread": 1,
 "id": "Button_0B73474A_2D18_CB95_41B5_180037BA80BC",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "class": "Button",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 50,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "paddingRight": 0,
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadow": false,
 "backgroundOpacity": 0,
 "width": "100%",
 "gap": 5,
 "paddingTop": 0,
 "label": "WHATSAPP",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.openLink('https://wa.me/5534984093795', '_blank')",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "id": "Container_1BA343A6_2D0B_4A9D_41A8_3A02573B3B89",
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "class": "Container",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 1,
 "horizontalAlign": "left",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "width": "100%",
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "line"
 },
 "propagateClick": true,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button Floorplan"
 },
 "shadowSpread": 1,
 "id": "Button_1D2C4FDF_2D7F_BAAB_4198_FBD1E9E469FF",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "class": "Button",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 50,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "paddingRight": 0,
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadow": false,
 "backgroundOpacity": 0,
 "width": "100%",
 "gap": 5,
 "paddingTop": 0,
 "label": "TELEFONE CELULAR",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.openLink('tel:034984093795', '_blank')",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "id": "Container_15283BED_2D08_DA6F_41C5_5635F0C6DB03",
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "class": "Container",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 1,
 "horizontalAlign": "left",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "width": "100%",
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "line"
 },
 "propagateClick": true,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button Photoalbum"
 },
 "shadowSpread": 1,
 "id": "Button_0399826A_2D79_4594_41BA_934A50D0E6B4",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "class": "Button",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 50,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "paddingRight": 0,
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadow": false,
 "backgroundOpacity": 0,
 "width": "100%",
 "gap": 5,
 "paddingTop": 0,
 "label": "LOCALIZA\u00c7\u00c3O",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.openLink('https://www.google.com.br/maps/dir/-23.4123462,-51.9580417/knd+pintura+automotiva+betim+mg/@-21.637286,-52.5693409,6z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0xa6c3650c516c15:0x916974cf450e02aa!2m2!1d-44.1920409!2d-19.9734841', '_blank')",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "id": "Container_146FF082_2D09_C695_41C4_13DE74CDAF5E",
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "class": "Container",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 1,
 "horizontalAlign": "left",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "width": "100%",
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "line"
 },
 "propagateClick": true,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "id": "Container_207ECEAD_3035_51EC_41A3_EE49910C654D",
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "class": "Container",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 1,
 "horizontalAlign": "left",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "width": "100%",
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "line"
 },
 "propagateClick": true,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "id": "Container_193B8A52_2D1B_C5B5_41C3_F44FF520A3F0",
 "scrollBarColor": "#000000",
 "width": 40,
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "class": "Container",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "height": 2,
 "horizontalAlign": "left",
 "backgroundColor": [
  "#5CA1DE"
 ],
 "shadow": false,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "blue line"
 },
 "propagateClick": true,
 "overflow": "visible",
 "backgroundColorRatios": [
  0
 ]
},
{
 "id": "HTMLText_29DD1615_3597_79DF_41C4_7593739E5260",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "class": "HTMLText",
 "scrollBarMargin": 2,
 "width": "100%",
 "height": 78,
 "paddingRight": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Company Name</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>www.loremipsum.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>info@loremipsum.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Tlf.: +11 111 111 111</I></SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText47602"
 },
 "visible": false,
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "propagateClick": true
},
{
 "children": [
  "this.IconButton_2B90E40F_3593_B9CB_41B4_408768336038",
  "this.IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83",
  "this.IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F",
  "this.IconButton_2B917411_3593_B9D7_41C6_8D1102463EC5"
 ],
 "id": "Container_2B9EE463_3593_BA7B_4195_8E8F4568BB13",
 "scrollBarColor": "#000000",
 "layout": "horizontal",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "class": "Container",
 "verticalAlign": "bottom",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 56,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "width": "100%",
 "gap": 7,
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "-Container Icons 1"
 },
 "scrollBarWidth": 10,
 "overflow": "visible",
 "paddingLeft": 0,
 "propagateClick": false
},
{
 "children": [
  "this.IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F"
 ],
 "id": "Container_283049D5_35F3_AA5F_419D_20B6A59ABCA6",
 "scrollBarColor": "#000000",
 "layout": "horizontal",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "class": "Container",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 44,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "width": "100%",
 "gap": 7,
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "-Container Icons 2"
 },
 "scrollBarWidth": 10,
 "overflow": "visible",
 "paddingLeft": 0,
 "propagateClick": false
},
{
 "iconURL": "skin/Button_2A2DA53B_310E_001C_41C7_8885E712C50B.png",
 "paddingLeft": 5,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button <BACK"
 },
 "shadowSpread": 1,
 "id": "Button_2A2DA53B_310E_001C_41C7_8885E712C50B",
 "rollOverFontFamily": "Oswald",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 30,
 "minHeight": 1,
 "class": "Button",
 "verticalAlign": "middle",
 "rollOverFontSize": 18,
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 50,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "paddingRight": 0,
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadow": false,
 "backgroundOpacity": 0,
 "width": "100%",
 "rollOverIconURL": "skin/Button_2A2DA53B_310E_001C_41C7_8885E712C50B_rollover.png",
 "paddingTop": 0,
 "label": "BACK",
 "borderRadius": 0,
 "minWidth": 1,
 "gap": 5,
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 30,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "click": "this.setComponentVisibility(this.Container_2A2CB53C_310E_0014_41C3_AB834B10253B, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "pressedBackgroundOpacity": 1
},
{
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "id": "Container_2A2DB53B_310E_001C_41BA_0206228E495C",
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "class": "Container",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 1,
 "horizontalAlign": "left",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "backgroundOpacity": 0.5,
 "paddingRight": 0,
 "width": "100%",
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "line"
 },
 "propagateClick": true,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "id": "Container_1303E3BB_3106_001D_41C8_60D6F4D70B2F",
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "class": "Container",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 8,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "width": "100%",
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "line separator"
 },
 "scrollBarWidth": 10,
 "overflow": "scroll",
 "paddingLeft": 0,
 "propagateClick": true
},
{
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 1"
 },
 "shadowSpread": 1,
 "id": "Button_2A2D853B_310E_001C_41C4_1C2E2BAFC35D",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "class": "Button",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 15,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "paddingRight": 0,
 "fontSize": 18,
 "rollOverShadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "shadow": false,
 "backgroundOpacity": 0,
 "width": "100%",
 "gap": 5,
 "paddingTop": 0,
 "label": "Main Entrance",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "rollOverShadowBlurRadius": 18,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 2"
 },
 "shadowSpread": 1,
 "id": "Button_2A2DE53B_310E_001C_41BB_C7AB6950A4DD",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "class": "Button",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "paddingRight": 0,
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadow": false,
 "backgroundOpacity": 0,
 "width": "100%",
 "gap": 23,
 "paddingTop": 0,
 "label": "Lobby",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedLabel": "Reception",
 "data": {
  "name": "Button text 3"
 },
 "shadowSpread": 1,
 "id": "Button_2A2C253B_310E_001C_41B6_D3A7F4F68C3E",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "class": "Button",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "paddingRight": 0,
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadow": false,
 "backgroundOpacity": 0,
 "width": "100%",
 "gap": 5,
 "paddingTop": 0,
 "label": "Reception",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 4"
 },
 "shadowSpread": 1,
 "id": "Button_2A2C053B_310E_001C_41A2_583DE489828C",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "class": "Button",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "paddingRight": 0,
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadow": false,
 "backgroundOpacity": 0,
 "width": "100%",
 "gap": 5,
 "paddingTop": 0,
 "label": "Meeting Area 1",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 5"
 },
 "shadowSpread": 1,
 "id": "Button_2A2C753B_310E_001C_41C4_B649CCC20E3D",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "class": "Button",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "paddingRight": 0,
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadow": false,
 "backgroundOpacity": 0,
 "width": "100%",
 "gap": 5,
 "paddingTop": 0,
 "label": "Meeting Area 2",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 6"
 },
 "shadowSpread": 1,
 "id": "Button_2A2C553C_310E_0014_41C4_86393D0ADCC7",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "class": "Button",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "paddingRight": 0,
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadow": false,
 "backgroundOpacity": 0,
 "width": "100%",
 "gap": 5,
 "paddingTop": 0,
 "label": "Bar",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 7"
 },
 "shadowSpread": 1,
 "id": "Button_15EF2665_3106_0035_41AE_9BACA1A48D02",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "class": "Button",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "paddingRight": 0,
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadow": false,
 "backgroundOpacity": 0,
 "width": "100%",
 "gap": 5,
 "paddingTop": 0,
 "label": "Chill Out",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 8"
 },
 "shadowSpread": 1,
 "id": "Button_15F5A318_3106_001C_41C5_9AA2EF2184CF",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "class": "Button",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "paddingRight": 0,
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadow": false,
 "backgroundOpacity": 0,
 "width": "100%",
 "gap": 5,
 "paddingTop": 0,
 "label": "Terrace",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 9"
 },
 "shadowSpread": 1,
 "id": "Button_1203FDB8_3106_001C_41B6_C9BE8EDD0DA9",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "class": "Button",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "paddingRight": 0,
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadow": false,
 "backgroundOpacity": 0,
 "width": "100%",
 "gap": 5,
 "paddingTop": 0,
 "label": "Garden",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "visible": false,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 10"
 },
 "shadowSpread": 1,
 "id": "Button_13D4FC1E_310A_0017_41BA_DDA6D071C1BA",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "width": "100%",
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "class": "Button",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "paddingRight": 0,
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadow": false,
 "backgroundOpacity": 0,
 "gap": 5,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "visible": false,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "iconURL": "skin/Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1.png",
 "paddingLeft": 5,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button <BACK"
 },
 "shadowSpread": 1,
 "id": "Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1",
 "rollOverFontFamily": "Oswald",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 30,
 "minHeight": 1,
 "class": "Button",
 "verticalAlign": "middle",
 "rollOverFontSize": 18,
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 50,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "paddingRight": 0,
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadow": false,
 "backgroundOpacity": 0,
 "width": "100%",
 "rollOverIconURL": "skin/Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1_rollover.png",
 "paddingTop": 0,
 "label": "BACK",
 "borderRadius": 0,
 "minWidth": 1,
 "gap": 5,
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 30,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "click": "this.setComponentVisibility(this.Container_159EADDD_31FA_0014_41C8_8A5203EC627B, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "pressedBackgroundOpacity": 1
},
{
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "id": "Container_15A14DDC_31FA_0014_41BE_C93192DD207E",
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "class": "Container",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 1,
 "horizontalAlign": "left",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "backgroundOpacity": 0.5,
 "paddingRight": 0,
 "width": "100%",
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "line"
 },
 "propagateClick": true,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "id": "Container_15A16DDC_31FA_0014_4199_0FBF7553300D",
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "class": "Container",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 8,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "width": "100%",
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "line separator"
 },
 "scrollBarWidth": 10,
 "overflow": "scroll",
 "paddingLeft": 0,
 "propagateClick": true
},
{
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 1"
 },
 "shadowSpread": 1,
 "id": "Button_15A10DDC_31FA_0014_4185_021C898E177D",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "class": "Button",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 15,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "paddingRight": 0,
 "fontSize": 18,
 "rollOverShadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "shadow": false,
 "backgroundOpacity": 0,
 "width": "100%",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "rollOverShadowBlurRadius": 18,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 2"
 },
 "shadowSpread": 1,
 "id": "Button_15A13DDC_31FA_0014_41C5_41AE80876834",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "class": "Button",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "paddingRight": 0,
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadow": false,
 "backgroundOpacity": 0,
 "width": "100%",
 "gap": 23,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedLabel": "Lorem Ipsum",
 "data": {
  "name": "Button text 3"
 },
 "shadowSpread": 1,
 "id": "Button_15A12DDC_31FA_0014_416B_ED845741AE5F",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "class": "Button",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "paddingRight": 0,
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadow": false,
 "backgroundOpacity": 0,
 "width": "100%",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 4"
 },
 "shadowSpread": 1,
 "id": "Button_159EDDDC_31FA_0014_419A_61C18E43FE01",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "class": "Button",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "paddingRight": 0,
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadow": false,
 "backgroundOpacity": 0,
 "width": "100%",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 5"
 },
 "shadowSpread": 1,
 "id": "Button_159ECDDC_31FA_0014_41B9_2D5AB1021813",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "class": "Button",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "paddingRight": 0,
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadow": false,
 "backgroundOpacity": 0,
 "width": "100%",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 6"
 },
 "shadowSpread": 1,
 "id": "Button_159EFDDC_31FA_0014_41C6_9CF7032F84E0",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "class": "Button",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "paddingRight": 0,
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadow": false,
 "backgroundOpacity": 0,
 "width": "100%",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem ipsum",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 7"
 },
 "shadowSpread": 1,
 "id": "Button_159EEDDC_31FA_0014_41B6_22A86B2D2FEB",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "class": "Button",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "paddingRight": 0,
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadow": false,
 "backgroundOpacity": 0,
 "width": "100%",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 8"
 },
 "shadowSpread": 1,
 "id": "Button_159E9DDC_31FA_0015_41B6_CB1D433C7673",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "class": "Button",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "paddingRight": 0,
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadow": false,
 "backgroundOpacity": 0,
 "width": "100%",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 9"
 },
 "shadowSpread": 1,
 "id": "Button_159E8DDD_31FA_0014_41C5_F18F441AF371",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "class": "Button",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "paddingRight": 0,
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadow": false,
 "backgroundOpacity": 0,
 "width": "100%",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 10"
 },
 "shadowSpread": 1,
 "id": "Button_159EBDDD_31FA_0014_41C8_935504B30727",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "width": "100%",
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "class": "Button",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "paddingRight": 0,
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadow": false,
 "backgroundOpacity": 0,
 "gap": 5,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "iconURL": "skin/Button_1757CD7D_31FA_0015_4143_A9E37B16A50B.png",
 "paddingLeft": 5,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button <BACK"
 },
 "shadowSpread": 1,
 "id": "Button_1757CD7D_31FA_0015_4143_A9E37B16A50B",
 "rollOverFontFamily": "Oswald",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 30,
 "minHeight": 1,
 "class": "Button",
 "verticalAlign": "middle",
 "rollOverFontSize": 18,
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 50,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "paddingRight": 0,
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadow": false,
 "backgroundOpacity": 0,
 "width": "100%",
 "rollOverIconURL": "skin/Button_1757CD7D_31FA_0015_4143_A9E37B16A50B_rollover.png",
 "paddingTop": 0,
 "label": "BACK",
 "borderRadius": 0,
 "minWidth": 1,
 "gap": 5,
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 30,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "click": "this.setComponentVisibility(this.Container_17569D7D_31FA_0015_41C4_CBC688763A8D, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "pressedBackgroundOpacity": 1
},
{
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "id": "Container_17579D7D_31FA_0015_41A1_D2B94269F28D",
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "class": "Container",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 1,
 "horizontalAlign": "left",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "backgroundOpacity": 0.5,
 "paddingRight": 0,
 "width": "100%",
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "line"
 },
 "propagateClick": true,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "id": "Container_17578D7D_31FA_0015_41BE_353D3005648A",
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "class": "Container",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 8,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "width": "100%",
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "line separator"
 },
 "scrollBarWidth": 10,
 "overflow": "scroll",
 "paddingLeft": 0,
 "propagateClick": true
},
{
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 1"
 },
 "shadowSpread": 1,
 "id": "Button_1757AD7D_31FA_0015_41C7_FB79F56FA149",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "class": "Button",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 15,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "paddingRight": 0,
 "fontSize": 18,
 "rollOverShadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "shadow": false,
 "backgroundOpacity": 0,
 "width": "100%",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "rollOverShadowBlurRadius": 18,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 2"
 },
 "shadowSpread": 1,
 "id": "Button_17565D7D_31FA_0015_4193_78BBCB2DC70F",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "class": "Button",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "paddingRight": 0,
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadow": false,
 "backgroundOpacity": 0,
 "width": "100%",
 "gap": 23,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedLabel": "Lorem Ipsum",
 "data": {
  "name": "Button text 3"
 },
 "shadowSpread": 1,
 "id": "Button_17564D7D_31FA_0015_41B8_A9191CD56C52",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "class": "Button",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "paddingRight": 0,
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadow": false,
 "backgroundOpacity": 0,
 "width": "100%",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 4"
 },
 "shadowSpread": 1,
 "id": "Button_17567D7D_31FA_0015_41C2_1E0D0AF05C7A",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "class": "Button",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "paddingRight": 0,
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadow": false,
 "backgroundOpacity": 0,
 "width": "100%",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 5"
 },
 "shadowSpread": 1,
 "id": "Button_17566D7D_31FA_0015_41AD_98D7C60C694F",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "class": "Button",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "paddingRight": 0,
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadow": false,
 "backgroundOpacity": 0,
 "width": "100%",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 6"
 },
 "shadowSpread": 1,
 "id": "Button_17561D7D_31FA_0015_41B5_BD72FAC26B8B",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "class": "Button",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "paddingRight": 0,
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadow": false,
 "backgroundOpacity": 0,
 "width": "100%",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem ipsum",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 7"
 },
 "shadowSpread": 1,
 "id": "Button_17560D7D_31FA_0015_41C4_7F0EC7540CC2",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "class": "Button",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "paddingRight": 0,
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadow": false,
 "backgroundOpacity": 0,
 "width": "100%",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 8"
 },
 "shadowSpread": 1,
 "id": "Button_17562D7D_31FA_0015_41A3_96B282B30DBA",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "class": "Button",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "paddingRight": 0,
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadow": false,
 "backgroundOpacity": 0,
 "width": "100%",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 9"
 },
 "shadowSpread": 1,
 "id": "Button_1756DD7D_31FA_0015_41A5_988B67FCF8B7",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "class": "Button",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "paddingRight": 0,
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadow": false,
 "backgroundOpacity": 0,
 "width": "100%",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 10"
 },
 "shadowSpread": 1,
 "id": "Button_1756FD7D_31FA_0015_41C7_DA2AAC2AAAEC",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "width": "100%",
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "class": "Button",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "paddingRight": 0,
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadow": false,
 "backgroundOpacity": 0,
 "gap": 5,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "iconURL": "skin/Button_175A5214_31FA_0014_4198_930DF49BADD9.png",
 "paddingLeft": 5,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button <BACK"
 },
 "shadowSpread": 1,
 "id": "Button_175A5214_31FA_0014_4198_930DF49BADD9",
 "rollOverFontFamily": "Oswald",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 30,
 "minHeight": 1,
 "class": "Button",
 "verticalAlign": "middle",
 "rollOverFontSize": 18,
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 50,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "paddingRight": 0,
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadow": false,
 "backgroundOpacity": 0,
 "width": "100%",
 "rollOverIconURL": "skin/Button_175A5214_31FA_0014_4198_930DF49BADD9_rollover.png",
 "paddingTop": 0,
 "label": "BACK",
 "borderRadius": 0,
 "minWidth": 1,
 "gap": 5,
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 30,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "click": "this.setComponentVisibility(this.Container_1758A215_31FA_0014_41B6_9A4A5384548B, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "pressedBackgroundOpacity": 1
},
{
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "id": "Container_175A4215_31FA_0014_41B2_5B8676CC3F2F",
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "class": "Container",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 1,
 "horizontalAlign": "left",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "backgroundOpacity": 0.5,
 "paddingRight": 0,
 "width": "100%",
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "line"
 },
 "propagateClick": true,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "id": "Container_1759B215_31FA_0014_41C0_84C99CBD5517",
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "class": "Container",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 8,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "width": "100%",
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "line separator"
 },
 "scrollBarWidth": 10,
 "overflow": "scroll",
 "paddingLeft": 0,
 "propagateClick": true
},
{
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 1"
 },
 "shadowSpread": 1,
 "id": "Button_1759A215_31FA_0014_41C7_F6B1044E5BB3",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "class": "Button",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 15,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "paddingRight": 0,
 "fontSize": 18,
 "rollOverShadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "shadow": false,
 "backgroundOpacity": 0,
 "width": "100%",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "rollOverShadowBlurRadius": 18,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 2"
 },
 "shadowSpread": 1,
 "id": "Button_17598215_31FA_0014_41AC_1166AB319171",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "class": "Button",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "paddingRight": 0,
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadow": false,
 "backgroundOpacity": 0,
 "width": "100%",
 "gap": 23,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedLabel": "Lorem Ipsum",
 "data": {
  "name": "Button text 3"
 },
 "shadowSpread": 1,
 "id": "Button_1759F215_31FA_0014_41BD_BBFA5FB0D882",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "class": "Button",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "paddingRight": 0,
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadow": false,
 "backgroundOpacity": 0,
 "width": "100%",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 4"
 },
 "shadowSpread": 1,
 "id": "Button_1759D215_31FA_0014_41AD_B6C5744A0B97",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "class": "Button",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "paddingRight": 0,
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadow": false,
 "backgroundOpacity": 0,
 "width": "100%",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 5"
 },
 "shadowSpread": 1,
 "id": "Button_17593215_31FA_0014_41C0_42BAFB0080F0",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "class": "Button",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "paddingRight": 0,
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadow": false,
 "backgroundOpacity": 0,
 "width": "100%",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 6"
 },
 "shadowSpread": 1,
 "id": "Button_17592215_31FA_0014_41B2_AA3B5CC318B8",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "class": "Button",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "paddingRight": 0,
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadow": false,
 "backgroundOpacity": 0,
 "width": "100%",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem ipsum",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 7"
 },
 "shadowSpread": 1,
 "id": "Button_17590215_31FA_0014_41C1_2B2D012DCC76",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "class": "Button",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "paddingRight": 0,
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadow": false,
 "backgroundOpacity": 0,
 "width": "100%",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 8"
 },
 "shadowSpread": 1,
 "id": "Button_17597215_31FA_0014_41C0_9BEE1DE4D7F6",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "class": "Button",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "paddingRight": 0,
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadow": false,
 "backgroundOpacity": 0,
 "width": "100%",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 9"
 },
 "shadowSpread": 1,
 "id": "Button_17596215_31FA_0014_41C6_A42670770708",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "class": "Button",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "paddingRight": 0,
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadow": false,
 "backgroundOpacity": 0,
 "width": "100%",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 10"
 },
 "shadowSpread": 1,
 "id": "Button_1758B215_31FA_0014_41BC_C4EAC2A9544B",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "width": "100%",
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "class": "Button",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "paddingRight": 0,
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadow": false,
 "backgroundOpacity": 0,
 "gap": 5,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "iconURL": "skin/Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C.png",
 "paddingLeft": 5,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button <BACK"
 },
 "shadowSpread": 1,
 "id": "Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C",
 "rollOverFontFamily": "Oswald",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 30,
 "minHeight": 1,
 "class": "Button",
 "verticalAlign": "middle",
 "rollOverFontSize": 18,
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 50,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "paddingRight": 0,
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadow": false,
 "backgroundOpacity": 0,
 "width": "100%",
 "rollOverIconURL": "skin/Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C_rollover.png",
 "paddingTop": 0,
 "label": "BACK",
 "borderRadius": 0,
 "minWidth": 1,
 "gap": 5,
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 30,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "click": "this.setComponentVisibility(this.Container_17EBA2B7_3106_0014_41A9_D6C96D0633AE, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "pressedBackgroundOpacity": 1
},
{
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "id": "Container_17EA92B7_3106_0014_41A6_2B88DF32BBA7",
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "class": "Container",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 1,
 "horizontalAlign": "left",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "backgroundOpacity": 0.5,
 "paddingRight": 0,
 "width": "100%",
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "line"
 },
 "propagateClick": true,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "id": "Container_17EAA2B7_3106_0014_41B0_ACBB1485A79E",
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "class": "Container",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 8,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "width": "100%",
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "line separator"
 },
 "scrollBarWidth": 10,
 "overflow": "scroll",
 "paddingLeft": 0,
 "propagateClick": true
},
{
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 1"
 },
 "shadowSpread": 1,
 "id": "Button_17EAB2B7_3106_0014_41A7_209417AD3E9A",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "class": "Button",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 15,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "paddingRight": 0,
 "fontSize": 18,
 "rollOverShadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "shadow": false,
 "backgroundOpacity": 0,
 "width": "100%",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "rollOverShadowBlurRadius": 18,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 2"
 },
 "shadowSpread": 1,
 "id": "Button_17EAD2B7_3106_0014_41C0_0B5453B4841D",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "class": "Button",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "paddingRight": 0,
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadow": false,
 "backgroundOpacity": 0,
 "width": "100%",
 "gap": 23,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedLabel": "Lorem Ipsum",
 "data": {
  "name": "Button text 3"
 },
 "shadowSpread": 1,
 "id": "Button_17EAE2B7_3106_0014_41C7_DB7FC43AAEE0",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "class": "Button",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "paddingRight": 0,
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadow": false,
 "backgroundOpacity": 0,
 "width": "100%",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 4"
 },
 "shadowSpread": 1,
 "id": "Button_17EB02B7_3106_0014_41AF_05D9AC36B189",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "class": "Button",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "paddingRight": 0,
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadow": false,
 "backgroundOpacity": 0,
 "width": "100%",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 5"
 },
 "shadowSpread": 1,
 "id": "Button_17EB32B7_3106_0014_41C8_467BF6AECBE8",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "class": "Button",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "paddingRight": 0,
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadow": false,
 "backgroundOpacity": 0,
 "width": "100%",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 6"
 },
 "shadowSpread": 1,
 "id": "Button_17EB42B7_3106_0014_41B0_CE70CBDDF438",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "class": "Button",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "paddingRight": 0,
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadow": false,
 "backgroundOpacity": 0,
 "width": "100%",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem ipsum",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 7"
 },
 "shadowSpread": 1,
 "id": "Button_17EB52B7_3106_0014_419C_439E593AEC43",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "class": "Button",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "paddingRight": 0,
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadow": false,
 "backgroundOpacity": 0,
 "width": "100%",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 8"
 },
 "shadowSpread": 1,
 "id": "Button_17EB62B7_3106_0014_41C5_43B38271B353",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "class": "Button",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "paddingRight": 0,
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadow": false,
 "backgroundOpacity": 0,
 "width": "100%",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 9"
 },
 "shadowSpread": 1,
 "id": "Button_17EB72B7_3106_0014_41B9_61857077BF4A",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "class": "Button",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "paddingRight": 0,
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadow": false,
 "backgroundOpacity": 0,
 "width": "100%",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 10"
 },
 "shadowSpread": 1,
 "id": "Button_17EB92B7_3106_0014_41B2_34A3E3F63779",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "width": "100%",
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "class": "Button",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "paddingRight": 0,
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadow": false,
 "backgroundOpacity": 0,
 "gap": 5,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "iconURL": "skin/Button_168CA310_3106_01EC_41C7_72CE0522951A.png",
 "paddingLeft": 5,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button <BACK"
 },
 "shadowSpread": 1,
 "id": "Button_168CA310_3106_01EC_41C7_72CE0522951A",
 "rollOverFontFamily": "Oswald",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 30,
 "minHeight": 1,
 "class": "Button",
 "verticalAlign": "middle",
 "rollOverFontSize": 18,
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 50,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "paddingRight": 0,
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadow": false,
 "backgroundOpacity": 0,
 "width": "100%",
 "rollOverIconURL": "skin/Button_168CA310_3106_01EC_41C7_72CE0522951A_rollover.png",
 "paddingTop": 0,
 "label": "BACK",
 "borderRadius": 0,
 "minWidth": 1,
 "gap": 5,
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 30,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "click": "this.setComponentVisibility(this.Container_168D8311_3106_01EC_41B0_F2D40886AB88, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "pressedBackgroundOpacity": 1
},
{
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "id": "Container_168C8310_3106_01EC_4187_B16F315A4A23",
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "class": "Container",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 1,
 "horizontalAlign": "left",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "backgroundOpacity": 0.5,
 "paddingRight": 0,
 "width": "100%",
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "line"
 },
 "propagateClick": true,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "id": "Container_168D7310_3106_01EC_41BE_5FCBD9E27BE4",
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "class": "Container",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 8,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "width": "100%",
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "line separator"
 },
 "scrollBarWidth": 10,
 "overflow": "scroll",
 "paddingLeft": 0,
 "propagateClick": true
},
{
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 1"
 },
 "shadowSpread": 1,
 "id": "Button_168D6310_3106_01EC_41B8_A0B6BE627547",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "class": "Button",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 15,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "paddingRight": 0,
 "fontSize": 18,
 "rollOverShadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "shadow": false,
 "backgroundOpacity": 0,
 "width": "100%",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "rollOverShadowBlurRadius": 18,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 2"
 },
 "shadowSpread": 1,
 "id": "Button_168D5310_3106_01EC_41B5_96D9387401B8",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "class": "Button",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "paddingRight": 0,
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadow": false,
 "backgroundOpacity": 0,
 "width": "100%",
 "gap": 23,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedLabel": "Lorem Ipsum",
 "data": {
  "name": "Button text 3"
 },
 "shadowSpread": 1,
 "id": "Button_168D3310_3106_01EC_41AC_5D524E4677A5",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "class": "Button",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "paddingRight": 0,
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadow": false,
 "backgroundOpacity": 0,
 "width": "100%",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 4"
 },
 "shadowSpread": 1,
 "id": "Button_168D2310_3106_01EC_41B8_9D7D1B2B55FA",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "class": "Button",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "paddingRight": 0,
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadow": false,
 "backgroundOpacity": 0,
 "width": "100%",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 5"
 },
 "shadowSpread": 1,
 "id": "Button_168D0310_3106_01EC_41A1_FA8FC42E6FF3",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "class": "Button",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "paddingRight": 0,
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadow": false,
 "backgroundOpacity": 0,
 "width": "100%",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 6"
 },
 "shadowSpread": 1,
 "id": "Button_168DE310_3106_01EC_4192_6A9F468A0ADE",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "class": "Button",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "paddingRight": 0,
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadow": false,
 "backgroundOpacity": 0,
 "width": "100%",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem ipsum",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 7"
 },
 "shadowSpread": 1,
 "id": "Button_168DD310_3106_01EC_4190_7815FA70349E",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "class": "Button",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "paddingRight": 0,
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadow": false,
 "backgroundOpacity": 0,
 "width": "100%",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 8"
 },
 "shadowSpread": 1,
 "id": "Button_168DB310_3106_01EC_41B2_3511AA5E40E1",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "class": "Button",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "paddingRight": 0,
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadow": false,
 "backgroundOpacity": 0,
 "width": "100%",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 9"
 },
 "shadowSpread": 1,
 "id": "Button_168DA310_3106_01EC_41BE_DF88732C2A28",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "class": "Button",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "paddingRight": 0,
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadow": false,
 "backgroundOpacity": 0,
 "width": "100%",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 10"
 },
 "shadowSpread": 1,
 "id": "Button_168D9311_3106_01EC_41A8_3BD8769525D6",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "width": "100%",
 "horizontalAlign": "left",
 "iconHeight": 32,
 "minHeight": 1,
 "class": "Button",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "height": 36,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "paddingRight": 0,
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadow": false,
 "backgroundOpacity": 0,
 "gap": 5,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "maxHeight": 200,
 "maxWidth": 200,
 "scaleMode": "fit_inside",
 "id": "Image_1E18723C_57F1_802D_41C5_8325536874A5",
 "horizontalAlign": "left",
 "borderSize": 0,
 "width": "25%",
 "minHeight": 1,
 "class": "Image",
 "verticalAlign": "top",
 "paddingRight": 0,
 "url": "skin/Image_1E18723C_57F1_802D_41C5_8325536874A5.jpg",
 "shadow": false,
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "agent photo"
 },
 "height": "100%",
 "propagateClick": false,
 "paddingLeft": 0
},
{
 "id": "HTMLText_1E18423C_57F1_802D_41C4_458DB7F892AC",
 "scrollBarColor": "#04A3E1",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "class": "HTMLText",
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "width": "75%",
 "shadow": false,
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.49vh;font-family:'Oswald';\"><B><I>JOHN DOE</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.49vh;font-family:'Oswald';\"><I>Licensed Real Estate Salesperson</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.82vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.16vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.82vh;font-family:'Oswald';\"><I>Tlf.: +11 111 111 111</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.82vh;font-family:'Oswald';\"><I>jhondoe@realestate.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.82vh;font-family:'Oswald';\"><I>www.loremipsum.com</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.16vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.16vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.16vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.16vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.16vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV></div>",
 "data": {
  "name": "HTMLText19460"
 },
 "height": "100%",
 "scrollBarWidth": 10,
 "paddingLeft": 10,
 "propagateClick": false
},
{
 "paddingLeft": 0,
 "maxHeight": 101,
 "maxWidth": 101,
 "id": "IconButton_2B90E40F_3593_B9CB_41B4_408768336038",
 "width": 44,
 "borderSize": 0,
 "horizontalAlign": "center",
 "minHeight": 1,
 "class": "IconButton",
 "transparencyActive": true,
 "verticalAlign": "middle",
 "height": 44,
 "mode": "push",
 "paddingRight": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_2B90E40F_3593_B9CB_41B4_408768336038_rollover.png",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, true, 0, null, null, false)",
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton Info"
 },
 "iconURL": "skin/IconButton_2B90E40F_3593_B9CB_41B4_408768336038.png",
 "propagateClick": false,
 "cursor": "hand"
},
{
 "paddingLeft": 0,
 "maxHeight": 101,
 "maxWidth": 101,
 "id": "IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83",
 "width": 44,
 "borderSize": 0,
 "horizontalAlign": "center",
 "minHeight": 1,
 "class": "IconButton",
 "transparencyActive": false,
 "verticalAlign": "middle",
 "height": 44,
 "mode": "push",
 "paddingRight": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83_rollover.png",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, true, 0, null, null, false)",
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton Thumblist"
 },
 "iconURL": "skin/IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83.png",
 "propagateClick": false,
 "cursor": "hand"
},
{
 "paddingLeft": 0,
 "maxHeight": 101,
 "maxWidth": 101,
 "id": "IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F",
 "width": 44,
 "borderSize": 0,
 "horizontalAlign": "center",
 "minHeight": 1,
 "class": "IconButton",
 "transparencyActive": false,
 "verticalAlign": "middle",
 "height": 44,
 "mode": "push",
 "paddingRight": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F_rollover.png",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, true, 0, null, null, false)",
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton Location"
 },
 "iconURL": "skin/IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F.png",
 "propagateClick": false,
 "cursor": "hand"
},
{
 "paddingLeft": 0,
 "maxHeight": 101,
 "maxWidth": 101,
 "id": "IconButton_2B917411_3593_B9D7_41C6_8D1102463EC5",
 "width": 44,
 "borderSize": 0,
 "horizontalAlign": "center",
 "minHeight": 1,
 "class": "IconButton",
 "transparencyActive": false,
 "verticalAlign": "middle",
 "height": 44,
 "mode": "push",
 "paddingRight": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_2B917411_3593_B9D7_41C6_8D1102463EC5_rollover.png",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, true, 0, null, null, false)",
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton Photoalbum"
 },
 "iconURL": "skin/IconButton_2B917411_3593_B9D7_41C6_8D1102463EC5.png",
 "propagateClick": false,
 "cursor": "hand"
},
{
 "paddingLeft": 0,
 "maxHeight": 101,
 "maxWidth": 101,
 "id": "IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F",
 "width": 50,
 "borderSize": 0,
 "horizontalAlign": "center",
 "minHeight": 1,
 "class": "IconButton",
 "transparencyActive": false,
 "verticalAlign": "middle",
 "height": 50,
 "mode": "push",
 "paddingRight": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F_pressed.png",
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton --"
 },
 "iconURL": "skin/IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F.png",
 "visible": false,
 "propagateClick": false,
 "cursor": "hand"
}],
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "scripts": {
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "existsKey": function(key){  return key in window; },
  "registerKey": function(key, value){  window[key] = value; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "unregisterKey": function(key){  delete window[key]; },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getKey": function(key){  return window[key]; }
 },
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "defaultVRPointer": "laser",
 "horizontalAlign": "left",
 "paddingRight": 0,
 "downloadEnabled": false,
 "contentOpaque": false,
 "shadow": false,
 "backgroundPreloadEnabled": true,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 20,
 "mouseWheelEnabled": true,
 "paddingBottom": 0,
 "width": "100%",
 "desktopMipmappingEnabled": false,
 "height": "100%",
 "propagateClick": true,
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "overflow": "visible",
 "data": {
  "name": "Player468"
 }
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
