(function(){
    var script = {
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailList_2DA7B5FF_3F4B_ECB5_41C8_2350C73E7421_playlist,this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.ThumbnailGrid_2F8BA686_0D4F_6B7E_419C_EB65DD1505BB_playlist,this.mainPlayList]); this.playList_74DE24CD_7B16_E0CA_41DE_874716F79FA8.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "rootPlayer",
 "children": [
  "this.MainViewer",
  "this.ThumbnailList_2DA7B5FF_3F4B_ECB5_41C8_2350C73E7421",
  "this.Container_2FB3FCBB_3D08_4DF5_4162_C18A37E4C23C",
  "this.Container_32CC4EA6_16EF_8891_41B3_C36F5FCE49B7",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_04FE7C2D_1216_75ED_4197_E539B3CD3A95",
  "this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
  "this.Container_1812EA3F_1663_8BEF_41AF_0A4CCC089B5F",
  "this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
  "this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
  "this.Container_0DEC3FED_12FA_D26D_419F_4067E8C6DA08",
  "this.Container_88BCD1D1_901E_7E07_41CF_8C0D5687069A",
  "this.Container_23233B1A_31FC_4D4B_41A9_49E61F73EA68",
  "this.veilPopupPanorama",
  "this.zoomImagePopupPanorama",
  "this.closeButtonPopupPanorama"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "paddingLeft": 0,
 "paddingRight": 0,
 "propagateClick": false,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "class": "Player",
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 0.82,
 "verticalAlign": "top",
 "minWidth": 20,
 "layout": "absolute",
 "definitions": [{
 "levels": [
  {
   "url": "media/popup_D4BD66EE_DB61_0831_41E6_9460AE72C9CF_0_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 900
  },
  {
   "url": "media/popup_D4BD66EE_DB61_0831_41E6_9460AE72C9CF_0_1.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 768
  },
  {
   "url": "media/popup_D4BD66EE_DB61_0831_41E6_9460AE72C9CF_0_2.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 384
  }
 ],
 "id": "ImageResource_C8CA8AA1_DB67_1833_41C6_9D31CD8321A8",
 "class": "ImageResource"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_2E1941CB_3CAF_8A11_41CA_397AC689B439_6_t.jpg",
 "id": "album_2E1941CB_3CAF_8A11_41CA_397AC689B439_6",
 "width": 667,
 "label": "LINE_ALBUM_\u0e1b\u0e23\u0e32\u0e2a\u0e32\u0e17_\u0e52\u0e52\u0e50\u0e56\u0e50\u0e56_12",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_2E1941CB_3CAF_8A11_41CA_397AC689B439_6.JPG"
   }
  ]
 },
 "height": 1000
},
{
 "initialPosition": {
  "yaw": -28.55,
  "class": "PanoramaCameraPosition",
  "pitch": 5.49
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_FDF55F2D_F6D7_A16A_41E9_3BB4418749A0_camera",
 "manualRotationSpeed": 1000
},
{
 "initialPosition": {
  "yaw": -30.75,
  "class": "PanoramaCameraPosition",
  "pitch": 15.1
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_FCA66D0A_F6D7_A12F_41D3_F7A4F25CD0FE_camera"
},
{
 "autoplay": true,
 "loop": true,
 "class": "MediaAudio",
 "id": "audio_2A88D526_3F7B_ED57_41AA_8C9AF950CAA1",
 "audio": {
  "class": "AudioResource",
  "oggUrl": "media/audio_2A88D526_3F7B_ED57_41AA_8C9AF950CAA1.ogg",
  "mp3Url": "media/audio_2A88D526_3F7B_ED57_41AA_8C9AF950CAA1.mp3"
 },
 "data": {
  "label": "Untitled Session 31_mixdown"
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCB069C1_F6D4_A11D_41B4_D58FFB70AFAE_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FCB069C1_F6D4_A11D_41B4_D58FFB70AFAE_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FCB069C1_F6D4_A11D_41B4_D58FFB70AFAE_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB069C1_F6D4_A11D_41B4_D58FFB70AFAE_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCB069C1_F6D4_A11D_41B4_D58FFB70AFAE_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FCB069C1_F6D4_A11D_41B4_D58FFB70AFAE_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FCB069C1_F6D4_A11D_41B4_D58FFB70AFAE_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB069C1_F6D4_A11D_41B4_D58FFB70AFAE_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCB069C1_F6D4_A11D_41B4_D58FFB70AFAE_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FCB069C1_F6D4_A11D_41B4_D58FFB70AFAE_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FCB069C1_F6D4_A11D_41B4_D58FFB70AFAE_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB069C1_F6D4_A11D_41B4_D58FFB70AFAE_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCB069C1_F6D4_A11D_41B4_D58FFB70AFAE_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FCB069C1_F6D4_A11D_41B4_D58FFB70AFAE_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FCB069C1_F6D4_A11D_41B4_D58FFB70AFAE_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB069C1_F6D4_A11D_41B4_D58FFB70AFAE_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_FCB069C1_F6D4_A11D_41B4_D58FFB70AFAE_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCB069C1_F6D4_A11D_41B4_D58FFB70AFAE_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FCB069C1_F6D4_A11D_41B4_D58FFB70AFAE_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FCB069C1_F6D4_A11D_41B4_D58FFB70AFAE_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB069C1_F6D4_A11D_41B4_D58FFB70AFAE_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCB069C1_F6D4_A11D_41B4_D58FFB70AFAE_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FCB069C1_F6D4_A11D_41B4_D58FFB70AFAE_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FCB069C1_F6D4_A11D_41B4_D58FFB70AFAE_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCB069C1_F6D4_A11D_41B4_D58FFB70AFAE_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "\u0e20\u0e32\u0e1e\u0e17\u0e355",
 "hfovMin": "135%",
 "id": "panorama_FCB069C1_F6D4_A11D_41B4_D58FFB70AFAE",
 "overlays": [
  "this.overlay_F5AFDD20_FB42_19B0_41E9_E7FE972F2109",
  "this.overlay_0B03F9F3_05C6_3E6D_4191_CDF3D57BC117",
  "this.overlay_0B03A74A_05C6_33BF_4196_54CD0DF1043D",
  "this.overlay_0A958CEE_05C6_3677_418E_A616755080DE"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -99.21,
   "class": "AdjacentPanorama",
   "backwardYaw": 74.25,
   "panorama": "this.panorama_FC217FE0_F6D7_A11B_41EA_38827B03EC94",
   "distance": 1
  },
  {
   "yaw": 36.95,
   "class": "AdjacentPanorama",
   "backwardYaw": -132.22,
   "panorama": "this.panorama_FCA66D0A_F6D7_A12F_41D3_F7A4F25CD0FE",
   "distance": 1
  },
  {
   "yaw": -30.68,
   "class": "AdjacentPanorama",
   "backwardYaw": 153.78,
   "panorama": "this.panorama_FCA50949_F6D4_612A_41CC_65AF6127F229",
   "distance": 1
  },
  {
   "yaw": 147.34,
   "class": "AdjacentPanorama",
   "backwardYaw": -27.52,
   "panorama": "this.panorama_FCBC1D7C_F6D4_E1EB_41E1_A702CEA4A43F",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_FCB069C1_F6D4_A11D_41B4_D58FFB70AFAE_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -27.74,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_7678C621_7B16_E37A_41DB_05678F533270",
 "manualRotationSpeed": 1000
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA53B21_F6D4_611D_41DE_C4B1A6849AF8_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FCA53B21_F6D4_611D_41DE_C4B1A6849AF8_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FCA53B21_F6D4_611D_41DE_C4B1A6849AF8_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCA53B21_F6D4_611D_41DE_C4B1A6849AF8_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA53B21_F6D4_611D_41DE_C4B1A6849AF8_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FCA53B21_F6D4_611D_41DE_C4B1A6849AF8_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FCA53B21_F6D4_611D_41DE_C4B1A6849AF8_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCA53B21_F6D4_611D_41DE_C4B1A6849AF8_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA53B21_F6D4_611D_41DE_C4B1A6849AF8_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FCA53B21_F6D4_611D_41DE_C4B1A6849AF8_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FCA53B21_F6D4_611D_41DE_C4B1A6849AF8_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCA53B21_F6D4_611D_41DE_C4B1A6849AF8_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA53B21_F6D4_611D_41DE_C4B1A6849AF8_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FCA53B21_F6D4_611D_41DE_C4B1A6849AF8_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FCA53B21_F6D4_611D_41DE_C4B1A6849AF8_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCA53B21_F6D4_611D_41DE_C4B1A6849AF8_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_FCA53B21_F6D4_611D_41DE_C4B1A6849AF8_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA53B21_F6D4_611D_41DE_C4B1A6849AF8_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FCA53B21_F6D4_611D_41DE_C4B1A6849AF8_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FCA53B21_F6D4_611D_41DE_C4B1A6849AF8_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCA53B21_F6D4_611D_41DE_C4B1A6849AF8_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA53B21_F6D4_611D_41DE_C4B1A6849AF8_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FCA53B21_F6D4_611D_41DE_C4B1A6849AF8_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FCA53B21_F6D4_611D_41DE_C4B1A6849AF8_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCA53B21_F6D4_611D_41DE_C4B1A6849AF8_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "\u0e20\u0e32\u0e1e\u0e17\u0e3518",
 "hfovMin": "135%",
 "id": "panorama_FCA53B21_F6D4_611D_41DE_C4B1A6849AF8",
 "overlays": [
  "this.overlay_2BFB2450_3D71_B2E7_41CA_035F824E0DA6",
  "this.overlay_2A061E66_3D71_EEA8_4190_5468DC692B28",
  "this.overlay_2BF7F5D9_3D71_7D98_41CB_12EA02EC8146"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 28.53,
   "class": "AdjacentPanorama",
   "backwardYaw": -79.62,
   "panorama": "this.panorama_FC217FE0_F6D7_A11B_41EA_38827B03EC94",
   "distance": 1
  },
  {
   "yaw": -115.17,
   "class": "AdjacentPanorama",
   "backwardYaw": 39.59,
   "panorama": "this.panorama_FCA528A4_F6D4_6F1B_41ED_942C08D16866",
   "distance": 1
  },
  {
   "yaw": -120.32,
   "class": "AdjacentPanorama",
   "backwardYaw": 60.31,
   "panorama": "this.panorama_FCA56553_F6D5_A13D_41D6_27B8C7E3AB13",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_FCA53B21_F6D4_611D_41DE_C4B1A6849AF8_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -119.69,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_7408285D_7B16_EFCA_41BC_F0930C2D4649"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": -20.22,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_2ED773A7_3F5A_6554_4193_4E1BD9295AEA",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_2ED773A7_3F5A_6554_4193_4E1BD9295AEA_0_1.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 768
   }
  ]
 },
 "pitch": -3.71,
 "hideEasing": "cubic_out",
 "hfov": 8.02
},
{
 "initialPosition": {
  "yaw": 59.68,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_76A866A7_7B16_E346_41D1_47DEAB58A6B2"
},
{
 "initialPosition": {
  "yaw": 152.54,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_75146700_7B16_E13B_41DA_E023A46ECD1E"
},
{
 "initialPosition": {
  "yaw": 80.79,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_754A1768_7B16_E1CA_41CA_F726433D6C1F"
},
{
 "duration": 60000,
 "thumbnailUrl": "media/photo_24408C3B_31E4_4B49_41C7_191E9D3F3D82_t.png",
 "id": "photo_24408C3B_31E4_4B49_41C7_191E9D3F3D82",
 "width": 512,
 "label": "\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e2b\u0e32 (6)",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/photo_24408C3B_31E4_4B49_41C7_191E9D3F3D82.png"
   }
  ]
 },
 "height": 800
},
{
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "class": "PanoramaPlayer",
 "displayPlaybackBar": true,
 "touchControlMode": "drag_rotation",
 "viewerArea": "this.MainViewer",
 "gyroscopeVerticalDraggingEnabled": true,
 "id": "MainViewerPanoramaPlayer",
 "buttonCardboardView": [
  "this.IconButton_30AC9FB1_16E7_88F3_41B2_18944AAAD6FA",
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB"
 ],
 "mouseControlMode": "drag_acceleration"
},
{
 "initialPosition": {
  "yaw": -121.45,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_6B71256D_7B16_E1C5_41D2_278163D8B729"
},
{
 "initialPosition": {
  "yaw": -26.91,
  "class": "PanoramaCameraPosition",
  "pitch": 25.26
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_FCA53B21_F6D4_611D_41DE_C4B1A6849AF8_camera"
},
{
 "initialPosition": {
  "yaw": -110.88,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_745E68A9_7B16_EF4A_41C7_A9B9249BEFF6"
},
{
 "initialPosition": {
  "yaw": 102.63,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_753C472D_7B16_E14A_41AC_C7D49FB8ED2A"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FD815AAE_F6D4_E367_418C_B5D1094DAF3E_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FD815AAE_F6D4_E367_418C_B5D1094DAF3E_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FD815AAE_F6D4_E367_418C_B5D1094DAF3E_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FD815AAE_F6D4_E367_418C_B5D1094DAF3E_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FD815AAE_F6D4_E367_418C_B5D1094DAF3E_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FD815AAE_F6D4_E367_418C_B5D1094DAF3E_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FD815AAE_F6D4_E367_418C_B5D1094DAF3E_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FD815AAE_F6D4_E367_418C_B5D1094DAF3E_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FD815AAE_F6D4_E367_418C_B5D1094DAF3E_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FD815AAE_F6D4_E367_418C_B5D1094DAF3E_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FD815AAE_F6D4_E367_418C_B5D1094DAF3E_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FD815AAE_F6D4_E367_418C_B5D1094DAF3E_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FD815AAE_F6D4_E367_418C_B5D1094DAF3E_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FD815AAE_F6D4_E367_418C_B5D1094DAF3E_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FD815AAE_F6D4_E367_418C_B5D1094DAF3E_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FD815AAE_F6D4_E367_418C_B5D1094DAF3E_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_FD815AAE_F6D4_E367_418C_B5D1094DAF3E_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FD815AAE_F6D4_E367_418C_B5D1094DAF3E_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FD815AAE_F6D4_E367_418C_B5D1094DAF3E_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FD815AAE_F6D4_E367_418C_B5D1094DAF3E_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FD815AAE_F6D4_E367_418C_B5D1094DAF3E_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FD815AAE_F6D4_E367_418C_B5D1094DAF3E_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FD815AAE_F6D4_E367_418C_B5D1094DAF3E_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FD815AAE_F6D4_E367_418C_B5D1094DAF3E_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FD815AAE_F6D4_E367_418C_B5D1094DAF3E_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "\u0e20\u0e32\u0e1e\u0e17\u0e351",
 "hfovMin": "135%",
 "id": "panorama_FD815AAE_F6D4_E367_418C_B5D1094DAF3E",
 "overlays": [
  "this.overlay_E4026CBD_F6F3_A765_41E7_082A72EC8296",
  "this.overlay_1DF1E55D_3F11_F298_41CA_D2A95D9FA0CA",
  "this.overlay_192318E4_3FEE_93A8_41C8_240F5DA80E62",
  "this.overlay_815F0FCA_8FE5_C204_41C2_16D90244C9FB",
  "this.popup_D42DF1A5_DB63_0832_41B8_A748DCCA2514",
  "this.overlay_3AA7F39E_3402_0F00_41C5_80BE24EC429D"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -29.69,
   "class": "AdjacentPanorama",
   "backwardYaw": 154.37,
   "panorama": "this.panorama_FCBC1D7C_F6D4_E1EB_41E1_A702CEA4A43F",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_FD815AAE_F6D4_E367_418C_B5D1094DAF3E_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_2E1941CB_3CAF_8A11_41CA_397AC689B439_1_t.jpg",
 "id": "album_2E1941CB_3CAF_8A11_41CA_397AC689B439_1",
 "width": 667,
 "label": "LINE_ALBUM_\u0e1b\u0e23\u0e32\u0e2a\u0e32\u0e17_\u0e52\u0e52\u0e50\u0e56\u0e50\u0e56_2",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_2E1941CB_3CAF_8A11_41CA_397AC689B439_1.JPG"
   }
  ]
 },
 "height": 1000
},
{
 "duration": 60000,
 "thumbnailUrl": "media/photo_2440358E_31E4_454B_41BC_33DD2F7C04A5_t.png",
 "id": "photo_2440358E_31E4_454B_41BC_33DD2F7C04A5",
 "width": 512,
 "label": "\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e2b\u0e32 (3)",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/photo_2440358E_31E4_454B_41BC_33DD2F7C04A5.png"
   }
  ]
 },
 "height": 800
},
{
 "items": [
  {
   "media": "this.panorama_FD815AAE_F6D4_E367_418C_B5D1094DAF3E",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FD815AAE_F6D4_E367_418C_B5D1094DAF3E_camera"
  },
  {
   "media": "this.panorama_FCBC1D7C_F6D4_E1EB_41E1_A702CEA4A43F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FCBC1D7C_F6D4_E1EB_41E1_A702CEA4A43F_camera"
  },
  {
   "media": "this.panorama_FDF55F2D_F6D7_A16A_41E9_3BB4418749A0",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FDF55F2D_F6D7_A16A_41E9_3BB4418749A0_camera"
  },
  {
   "media": "this.panorama_FCA7DBF4_F6D7_A0FA_41E5_BA666E5CACE5",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FCA7DBF4_F6D7_A0FA_41E5_BA666E5CACE5_camera"
  },
  {
   "media": "this.panorama_FCB069C1_F6D4_A11D_41B4_D58FFB70AFAE",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FCB069C1_F6D4_A11D_41B4_D58FFB70AFAE_camera"
  },
  {
   "media": "this.panorama_FC217FE0_F6D7_A11B_41EA_38827B03EC94",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FC217FE0_F6D7_A11B_41EA_38827B03EC94_camera"
  },
  {
   "media": "this.panorama_FCA66D0A_F6D7_A12F_41D3_F7A4F25CD0FE",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FCA66D0A_F6D7_A12F_41D3_F7A4F25CD0FE_camera"
  },
  {
   "media": "this.panorama_FCA50949_F6D4_612A_41CC_65AF6127F229",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FCA50949_F6D4_612A_41CC_65AF6127F229_camera"
  },
  {
   "media": "this.panorama_FCA53548_F6D4_612A_41BB_D48002FC4710",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FCA53548_F6D4_612A_41BB_D48002FC4710_camera"
  },
  {
   "media": "this.panorama_FCA4D2A9_F6D4_A36A_41D9_85B9D4C4B9F2",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FCA4D2A9_F6D4_A36A_41D9_85B9D4C4B9F2_camera"
  },
  {
   "media": "this.panorama_FCA56EEA_F6D4_A0EE_41E0_B66C2536057D",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FCA56EEA_F6D4_A0EE_41E0_B66C2536057D_camera"
  },
  {
   "media": "this.panorama_FCA4CB49_F6D4_A12D_41A1_AD6390F9B90D",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FCA4CB49_F6D4_A12D_41A1_AD6390F9B90D_camera"
  },
  {
   "media": "this.panorama_FCA4B893_F6D4_EF3D_41E8_B23814B283CC",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FCA4B893_F6D4_EF3D_41E8_B23814B283CC_camera"
  },
  {
   "media": "this.panorama_FCA346B9_F6D4_E36A_41E8_FB37D8789519",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FCA346B9_F6D4_E36A_41E8_FB37D8789519_camera"
  },
  {
   "media": "this.panorama_FCA51430_F6D4_A77A_41E9_F0A0E79636A3",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FCA51430_F6D4_A77A_41E9_F0A0E79636A3_camera"
  },
  {
   "media": "this.panorama_FCA50179_F6D4_A1EA_41C4_D9C52C70FA89",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FCA50179_F6D4_A1EA_41C4_D9C52C70FA89_camera"
  },
  {
   "media": "this.panorama_FCA5FE4B_F6D4_A32E_41D5_48F03BD57F7A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FCA5FE4B_F6D4_A32E_41D5_48F03BD57F7A_camera"
  },
  {
   "media": "this.panorama_FCA53B21_F6D4_611D_41DE_C4B1A6849AF8",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FCA53B21_F6D4_611D_41DE_C4B1A6849AF8_camera"
  },
  {
   "media": "this.panorama_FCA528A4_F6D4_6F1B_41ED_942C08D16866",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FCA528A4_F6D4_6F1B_41ED_942C08D16866_camera"
  },
  {
   "media": "this.panorama_FCA56553_F6D5_A13D_41D6_27B8C7E3AB13",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FCA56553_F6D5_A13D_41D6_27B8C7E3AB13_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 20, 0)",
   "media": "this.album_2E1941CB_3CAF_8A11_41CA_397AC689B439",
   "class": "PhotoAlbumPlayListItem",
   "player": "this.MainViewerPhotoAlbumPlayer"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": 66.92,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_7493E90B_7B16_E14E_41C7_4A6CE9D04858"
},
{
 "initialPosition": {
  "yaw": -30.75,
  "class": "PanoramaCameraPosition",
  "pitch": 4.12
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_FD815AAE_F6D4_E367_418C_B5D1094DAF3E_camera",
 "manualRotationSpeed": 1014
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCBC1D7C_F6D4_E1EB_41E1_A702CEA4A43F_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FCBC1D7C_F6D4_E1EB_41E1_A702CEA4A43F_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FCBC1D7C_F6D4_E1EB_41E1_A702CEA4A43F_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCBC1D7C_F6D4_E1EB_41E1_A702CEA4A43F_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCBC1D7C_F6D4_E1EB_41E1_A702CEA4A43F_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FCBC1D7C_F6D4_E1EB_41E1_A702CEA4A43F_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FCBC1D7C_F6D4_E1EB_41E1_A702CEA4A43F_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCBC1D7C_F6D4_E1EB_41E1_A702CEA4A43F_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCBC1D7C_F6D4_E1EB_41E1_A702CEA4A43F_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FCBC1D7C_F6D4_E1EB_41E1_A702CEA4A43F_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FCBC1D7C_F6D4_E1EB_41E1_A702CEA4A43F_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCBC1D7C_F6D4_E1EB_41E1_A702CEA4A43F_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCBC1D7C_F6D4_E1EB_41E1_A702CEA4A43F_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FCBC1D7C_F6D4_E1EB_41E1_A702CEA4A43F_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FCBC1D7C_F6D4_E1EB_41E1_A702CEA4A43F_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCBC1D7C_F6D4_E1EB_41E1_A702CEA4A43F_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_FCBC1D7C_F6D4_E1EB_41E1_A702CEA4A43F_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCBC1D7C_F6D4_E1EB_41E1_A702CEA4A43F_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FCBC1D7C_F6D4_E1EB_41E1_A702CEA4A43F_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FCBC1D7C_F6D4_E1EB_41E1_A702CEA4A43F_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCBC1D7C_F6D4_E1EB_41E1_A702CEA4A43F_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCBC1D7C_F6D4_E1EB_41E1_A702CEA4A43F_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FCBC1D7C_F6D4_E1EB_41E1_A702CEA4A43F_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FCBC1D7C_F6D4_E1EB_41E1_A702CEA4A43F_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCBC1D7C_F6D4_E1EB_41E1_A702CEA4A43F_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "\u0e20\u0e32\u0e1e\u0e17\u0e352",
 "hfovMin": "135%",
 "id": "panorama_FCBC1D7C_F6D4_E1EB_41E1_A702CEA4A43F",
 "overlays": [
  "this.overlay_E22992E1_F6F5_E31D_41E0_12DDF1FCEE42",
  "this.overlay_F5013F06_FB3E_3970_41DD_576673C1575A",
  "this.overlay_E8E6569E_FB42_0891_41B3_02CDEBB02D6E",
  "this.overlay_E8299038_FB42_0790_41D7_651625D70CED"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -27.52,
   "class": "AdjacentPanorama",
   "backwardYaw": 147.34,
   "panorama": "this.panorama_FCB069C1_F6D4_A11D_41B4_D58FFB70AFAE",
   "distance": 1
  },
  {
   "yaw": -105.74,
   "class": "AdjacentPanorama",
   "backwardYaw": 50.39,
   "panorama": "this.panorama_FCA7DBF4_F6D7_A0FA_41E5_BA666E5CACE5",
   "distance": 1
  },
  {
   "yaw": 38.39,
   "class": "AdjacentPanorama",
   "backwardYaw": 152.26,
   "panorama": "this.panorama_FDF55F2D_F6D7_A16A_41E9_3BB4418749A0",
   "distance": 1
  },
  {
   "yaw": 154.37,
   "class": "AdjacentPanorama",
   "backwardYaw": -29.69,
   "panorama": "this.panorama_FD815AAE_F6D4_E367_418C_B5D1094DAF3E",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_FCBC1D7C_F6D4_E1EB_41E1_A702CEA4A43F_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 60.69,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_759D7794_7B16_E15A_41CB_08E22E9C2B92"
},
{
 "initialPosition": {
  "yaw": 152.28,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_6B2F8530_7B16_E15A_41CE_91899C4E62CF"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA4D2A9_F6D4_A36A_41D9_85B9D4C4B9F2_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FCA4D2A9_F6D4_A36A_41D9_85B9D4C4B9F2_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FCA4D2A9_F6D4_A36A_41D9_85B9D4C4B9F2_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCA4D2A9_F6D4_A36A_41D9_85B9D4C4B9F2_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA4D2A9_F6D4_A36A_41D9_85B9D4C4B9F2_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FCA4D2A9_F6D4_A36A_41D9_85B9D4C4B9F2_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FCA4D2A9_F6D4_A36A_41D9_85B9D4C4B9F2_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCA4D2A9_F6D4_A36A_41D9_85B9D4C4B9F2_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA4D2A9_F6D4_A36A_41D9_85B9D4C4B9F2_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FCA4D2A9_F6D4_A36A_41D9_85B9D4C4B9F2_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FCA4D2A9_F6D4_A36A_41D9_85B9D4C4B9F2_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCA4D2A9_F6D4_A36A_41D9_85B9D4C4B9F2_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA4D2A9_F6D4_A36A_41D9_85B9D4C4B9F2_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FCA4D2A9_F6D4_A36A_41D9_85B9D4C4B9F2_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FCA4D2A9_F6D4_A36A_41D9_85B9D4C4B9F2_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCA4D2A9_F6D4_A36A_41D9_85B9D4C4B9F2_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_FCA4D2A9_F6D4_A36A_41D9_85B9D4C4B9F2_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA4D2A9_F6D4_A36A_41D9_85B9D4C4B9F2_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FCA4D2A9_F6D4_A36A_41D9_85B9D4C4B9F2_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FCA4D2A9_F6D4_A36A_41D9_85B9D4C4B9F2_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCA4D2A9_F6D4_A36A_41D9_85B9D4C4B9F2_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA4D2A9_F6D4_A36A_41D9_85B9D4C4B9F2_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FCA4D2A9_F6D4_A36A_41D9_85B9D4C4B9F2_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FCA4D2A9_F6D4_A36A_41D9_85B9D4C4B9F2_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCA4D2A9_F6D4_A36A_41D9_85B9D4C4B9F2_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "\u0e20\u0e32\u0e1e\u0e17\u0e3510",
 "hfovMin": "135%",
 "id": "panorama_FCA4D2A9_F6D4_A36A_41D9_85B9D4C4B9F2",
 "overlays": [
  "this.overlay_1322261F_05C2_15D4_418D_5BB72376CF04",
  "this.overlay_12FE4AC0_05CE_12AB_418B_9F80CA48577C",
  "this.overlay_13215DA6_05CE_76F4_4197_1E173E8E1FBE",
  "this.overlay_13483FEA_05CE_327C_4154_1F4979CF80E6",
  "this.overlay_1F0EFA3A_05C6_3DDC_4184_EF1EE0D97779"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 113.57,
   "class": "AdjacentPanorama",
   "backwardYaw": -64.67,
   "panorama": "this.panorama_FCA56EEA_F6D4_A0EE_41E0_B66C2536057D",
   "distance": 1
  },
  {
   "yaw": -119.31,
   "class": "AdjacentPanorama",
   "backwardYaw": -27.72,
   "panorama": "this.panorama_FCA50179_F6D4_A1EA_41C4_D9C52C70FA89",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_FCA51430_F6D4_A77A_41E9_F0A0E79636A3"
  },
  {
   "yaw": 17.48,
   "class": "AdjacentPanorama",
   "backwardYaw": 20.38,
   "panorama": "this.panorama_FCA50949_F6D4_612A_41CC_65AF6127F229",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_FCA5FE4B_F6D4_A32E_41D5_48F03BD57F7A"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_FCA4D2A9_F6D4_A36A_41D9_85B9D4C4B9F2_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA66D0A_F6D7_A12F_41D3_F7A4F25CD0FE_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FCA66D0A_F6D7_A12F_41D3_F7A4F25CD0FE_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FCA66D0A_F6D7_A12F_41D3_F7A4F25CD0FE_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCA66D0A_F6D7_A12F_41D3_F7A4F25CD0FE_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA66D0A_F6D7_A12F_41D3_F7A4F25CD0FE_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FCA66D0A_F6D7_A12F_41D3_F7A4F25CD0FE_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FCA66D0A_F6D7_A12F_41D3_F7A4F25CD0FE_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCA66D0A_F6D7_A12F_41D3_F7A4F25CD0FE_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA66D0A_F6D7_A12F_41D3_F7A4F25CD0FE_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FCA66D0A_F6D7_A12F_41D3_F7A4F25CD0FE_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FCA66D0A_F6D7_A12F_41D3_F7A4F25CD0FE_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCA66D0A_F6D7_A12F_41D3_F7A4F25CD0FE_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA66D0A_F6D7_A12F_41D3_F7A4F25CD0FE_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FCA66D0A_F6D7_A12F_41D3_F7A4F25CD0FE_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FCA66D0A_F6D7_A12F_41D3_F7A4F25CD0FE_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCA66D0A_F6D7_A12F_41D3_F7A4F25CD0FE_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_FCA66D0A_F6D7_A12F_41D3_F7A4F25CD0FE_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA66D0A_F6D7_A12F_41D3_F7A4F25CD0FE_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FCA66D0A_F6D7_A12F_41D3_F7A4F25CD0FE_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FCA66D0A_F6D7_A12F_41D3_F7A4F25CD0FE_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCA66D0A_F6D7_A12F_41D3_F7A4F25CD0FE_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA66D0A_F6D7_A12F_41D3_F7A4F25CD0FE_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FCA66D0A_F6D7_A12F_41D3_F7A4F25CD0FE_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FCA66D0A_F6D7_A12F_41D3_F7A4F25CD0FE_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCA66D0A_F6D7_A12F_41D3_F7A4F25CD0FE_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "\u0e20\u0e32\u0e1e\u0e17\u0e357",
 "hfovMin": "135%",
 "id": "panorama_FCA66D0A_F6D7_A12F_41D3_F7A4F25CD0FE",
 "overlays": [
  "this.overlay_1764AB3E_05DE_13D4_4192_C06427D09EB5",
  "this.overlay_1649E660_05DE_126B_4196_547143F7B544",
  "this.overlay_1762078A_05DE_12BC_4193_BA48F5365B70"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -132.22,
   "class": "AdjacentPanorama",
   "backwardYaw": 36.95,
   "panorama": "this.panorama_FCB069C1_F6D4_A11D_41B4_D58FFB70AFAE",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_FCA53B21_F6D4_611D_41DE_C4B1A6849AF8"
  },
  {
   "yaw": 24.5,
   "class": "AdjacentPanorama",
   "backwardYaw": -78.24,
   "panorama": "this.panorama_FCA5FE4B_F6D4_A32E_41D5_48F03BD57F7A",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_FCA66D0A_F6D7_A12F_41D3_F7A4F25CD0FE_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -28.55,
  "class": "PanoramaCameraPosition",
  "pitch": 17.57
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_FCA528A4_F6D4_6F1B_41ED_942C08D16866_camera"
},
{
 "initialPosition": {
  "yaw": -169.43,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_769C365E_7B16_E3C6_41C2_073B4923B5B4"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA7DBF4_F6D7_A0FA_41E5_BA666E5CACE5_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FCA7DBF4_F6D7_A0FA_41E5_BA666E5CACE5_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FCA7DBF4_F6D7_A0FA_41E5_BA666E5CACE5_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCA7DBF4_F6D7_A0FA_41E5_BA666E5CACE5_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA7DBF4_F6D7_A0FA_41E5_BA666E5CACE5_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FCA7DBF4_F6D7_A0FA_41E5_BA666E5CACE5_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FCA7DBF4_F6D7_A0FA_41E5_BA666E5CACE5_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCA7DBF4_F6D7_A0FA_41E5_BA666E5CACE5_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA7DBF4_F6D7_A0FA_41E5_BA666E5CACE5_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FCA7DBF4_F6D7_A0FA_41E5_BA666E5CACE5_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FCA7DBF4_F6D7_A0FA_41E5_BA666E5CACE5_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCA7DBF4_F6D7_A0FA_41E5_BA666E5CACE5_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA7DBF4_F6D7_A0FA_41E5_BA666E5CACE5_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FCA7DBF4_F6D7_A0FA_41E5_BA666E5CACE5_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FCA7DBF4_F6D7_A0FA_41E5_BA666E5CACE5_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCA7DBF4_F6D7_A0FA_41E5_BA666E5CACE5_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_FCA7DBF4_F6D7_A0FA_41E5_BA666E5CACE5_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA7DBF4_F6D7_A0FA_41E5_BA666E5CACE5_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FCA7DBF4_F6D7_A0FA_41E5_BA666E5CACE5_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FCA7DBF4_F6D7_A0FA_41E5_BA666E5CACE5_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCA7DBF4_F6D7_A0FA_41E5_BA666E5CACE5_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA7DBF4_F6D7_A0FA_41E5_BA666E5CACE5_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FCA7DBF4_F6D7_A0FA_41E5_BA666E5CACE5_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FCA7DBF4_F6D7_A0FA_41E5_BA666E5CACE5_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCA7DBF4_F6D7_A0FA_41E5_BA666E5CACE5_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "\u0e20\u0e32\u0e1e\u0e17\u0e354",
 "hfovMin": "135%",
 "id": "panorama_FCA7DBF4_F6D7_A0FA_41E5_BA666E5CACE5",
 "overlays": [
  "this.overlay_15BB92B0_05CE_F2EB_4185_8A30B959DEF2",
  "this.overlay_1E5F3BD1_3F36_95E8_41BE_F57E56104CEA",
  "this.popup_1FC0960C_3F31_FE78_41CB_CF9DC7CBAF44",
  "this.overlay_1C7C7BCF_3F1F_95F8_41CE_CBB2D3133910",
  "this.overlay_9F213916_8FEE_4E0C_41D1_32EDBA4C6620",
  "this.popup_D4C50A50_DB61_1810_41E5_DECF913FDE16"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_FCB069C1_F6D4_A11D_41B4_D58FFB70AFAE"
  },
  {
   "yaw": 50.39,
   "class": "AdjacentPanorama",
   "backwardYaw": -105.74,
   "panorama": "this.panorama_FCBC1D7C_F6D4_E1EB_41E1_A702CEA4A43F",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_FCA7DBF4_F6D7_A0FA_41E5_BA666E5CACE5_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA4CB49_F6D4_A12D_41A1_AD6390F9B90D_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FCA4CB49_F6D4_A12D_41A1_AD6390F9B90D_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FCA4CB49_F6D4_A12D_41A1_AD6390F9B90D_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCA4CB49_F6D4_A12D_41A1_AD6390F9B90D_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA4CB49_F6D4_A12D_41A1_AD6390F9B90D_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FCA4CB49_F6D4_A12D_41A1_AD6390F9B90D_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FCA4CB49_F6D4_A12D_41A1_AD6390F9B90D_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCA4CB49_F6D4_A12D_41A1_AD6390F9B90D_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA4CB49_F6D4_A12D_41A1_AD6390F9B90D_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FCA4CB49_F6D4_A12D_41A1_AD6390F9B90D_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FCA4CB49_F6D4_A12D_41A1_AD6390F9B90D_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCA4CB49_F6D4_A12D_41A1_AD6390F9B90D_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA4CB49_F6D4_A12D_41A1_AD6390F9B90D_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FCA4CB49_F6D4_A12D_41A1_AD6390F9B90D_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FCA4CB49_F6D4_A12D_41A1_AD6390F9B90D_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCA4CB49_F6D4_A12D_41A1_AD6390F9B90D_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_FCA4CB49_F6D4_A12D_41A1_AD6390F9B90D_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA4CB49_F6D4_A12D_41A1_AD6390F9B90D_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FCA4CB49_F6D4_A12D_41A1_AD6390F9B90D_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FCA4CB49_F6D4_A12D_41A1_AD6390F9B90D_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCA4CB49_F6D4_A12D_41A1_AD6390F9B90D_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA4CB49_F6D4_A12D_41A1_AD6390F9B90D_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FCA4CB49_F6D4_A12D_41A1_AD6390F9B90D_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FCA4CB49_F6D4_A12D_41A1_AD6390F9B90D_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCA4CB49_F6D4_A12D_41A1_AD6390F9B90D_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "\u0e20\u0e32\u0e1e\u0e17\u0e3512",
 "hfovMin": "135%",
 "id": "panorama_FCA4CB49_F6D4_A12D_41A1_AD6390F9B90D",
 "overlays": [
  "this.overlay_1C21F08A_05C2_EEBF_4172_A2598903D99B",
  "this.overlay_1F46B643_05C2_15AD_4175_D45C55821173",
  "this.overlay_1FEF9F96_05CE_32D7_418D_358C768C7AE6"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -116.8,
   "class": "AdjacentPanorama",
   "backwardYaw": 62.81,
   "panorama": "this.panorama_FCA4B893_F6D4_EF3D_41E8_B23814B283CC",
   "distance": 1
  },
  {
   "yaw": -128.23,
   "class": "AdjacentPanorama",
   "backwardYaw": 55.41,
   "panorama": "this.panorama_FCA346B9_F6D4_E36A_41E8_FB37D8789519",
   "distance": 1
  },
  {
   "yaw": 21.75,
   "class": "AdjacentPanorama",
   "backwardYaw": -77.11,
   "panorama": "this.panorama_FCA56553_F6D5_A13D_41D6_27B8C7E3AB13",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_FCA4CB49_F6D4_A12D_41A1_AD6390F9B90D_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -20.59,
  "class": "PanoramaCameraPosition",
  "pitch": 15.65
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_FCA56EEA_F6D4_A0EE_41E0_B66C2536057D_camera"
},
{
 "initialPosition": {
  "yaw": 152.54,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_750E571E_7B16_E146_41DA_98CC29D582BE"
},
{
 "initialPosition": {
  "yaw": -28,
  "class": "PanoramaCameraPosition",
  "pitch": 6.04
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_FCBC1D7C_F6D4_E1EB_41E1_A702CEA4A43F_camera",
 "manualRotationSpeed": 1014
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA528A4_F6D4_6F1B_41ED_942C08D16866_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FCA528A4_F6D4_6F1B_41ED_942C08D16866_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FCA528A4_F6D4_6F1B_41ED_942C08D16866_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCA528A4_F6D4_6F1B_41ED_942C08D16866_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA528A4_F6D4_6F1B_41ED_942C08D16866_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FCA528A4_F6D4_6F1B_41ED_942C08D16866_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FCA528A4_F6D4_6F1B_41ED_942C08D16866_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCA528A4_F6D4_6F1B_41ED_942C08D16866_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA528A4_F6D4_6F1B_41ED_942C08D16866_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FCA528A4_F6D4_6F1B_41ED_942C08D16866_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FCA528A4_F6D4_6F1B_41ED_942C08D16866_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCA528A4_F6D4_6F1B_41ED_942C08D16866_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA528A4_F6D4_6F1B_41ED_942C08D16866_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FCA528A4_F6D4_6F1B_41ED_942C08D16866_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FCA528A4_F6D4_6F1B_41ED_942C08D16866_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCA528A4_F6D4_6F1B_41ED_942C08D16866_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_FCA528A4_F6D4_6F1B_41ED_942C08D16866_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA528A4_F6D4_6F1B_41ED_942C08D16866_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FCA528A4_F6D4_6F1B_41ED_942C08D16866_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FCA528A4_F6D4_6F1B_41ED_942C08D16866_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCA528A4_F6D4_6F1B_41ED_942C08D16866_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA528A4_F6D4_6F1B_41ED_942C08D16866_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FCA528A4_F6D4_6F1B_41ED_942C08D16866_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FCA528A4_F6D4_6F1B_41ED_942C08D16866_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCA528A4_F6D4_6F1B_41ED_942C08D16866_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "\u0e20\u0e32\u0e1e\u0e17\u0e3519",
 "hfovMin": "135%",
 "id": "panorama_FCA528A4_F6D4_6F1B_41ED_942C08D16866",
 "overlays": [
  "this.overlay_2A813B47_3D6F_76E8_41CD_44337F9B141A",
  "this.overlay_25354E8D_3D6F_EE78_41C2_FD554ACD84FE",
  "this.overlay_1D3057EB_3F16_9DB8_41B2_F6C934FEB4E1"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 39.59,
   "class": "AdjacentPanorama",
   "backwardYaw": -115.17,
   "panorama": "this.panorama_FCA53B21_F6D4_611D_41DE_C4B1A6849AF8",
   "distance": 1
  },
  {
   "yaw": -92.56,
   "class": "AdjacentPanorama",
   "backwardYaw": 58.55,
   "panorama": "this.panorama_FCA56553_F6D5_A13D_41D6_27B8C7E3AB13",
   "distance": 1
  },
  {
   "yaw": -27.46,
   "class": "AdjacentPanorama",
   "backwardYaw": -114.66,
   "panorama": "this.panorama_FCA53548_F6D4_612A_41BB_D48002FC4710",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_FCA528A4_F6D4_6F1B_41ED_942C08D16866_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 63.2,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_7521A73C_7B16_E14A_41DA_5FBBB34C8A4B"
},
{
 "items": [
  {
   "media": "this.panorama_FD815AAE_F6D4_E367_418C_B5D1094DAF3E",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2DA7B5FF_3F4B_ECB5_41C8_2350C73E7421_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FD815AAE_F6D4_E367_418C_B5D1094DAF3E_camera"
  },
  {
   "media": "this.panorama_FCBC1D7C_F6D4_E1EB_41E1_A702CEA4A43F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2DA7B5FF_3F4B_ECB5_41C8_2350C73E7421_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FCBC1D7C_F6D4_E1EB_41E1_A702CEA4A43F_camera"
  },
  {
   "media": "this.panorama_FDF55F2D_F6D7_A16A_41E9_3BB4418749A0",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2DA7B5FF_3F4B_ECB5_41C8_2350C73E7421_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FDF55F2D_F6D7_A16A_41E9_3BB4418749A0_camera"
  },
  {
   "media": "this.panorama_FCA7DBF4_F6D7_A0FA_41E5_BA666E5CACE5",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2DA7B5FF_3F4B_ECB5_41C8_2350C73E7421_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FCA7DBF4_F6D7_A0FA_41E5_BA666E5CACE5_camera"
  },
  {
   "media": "this.panorama_FCB069C1_F6D4_A11D_41B4_D58FFB70AFAE",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2DA7B5FF_3F4B_ECB5_41C8_2350C73E7421_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FCB069C1_F6D4_A11D_41B4_D58FFB70AFAE_camera"
  },
  {
   "media": "this.panorama_FC217FE0_F6D7_A11B_41EA_38827B03EC94",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2DA7B5FF_3F4B_ECB5_41C8_2350C73E7421_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FC217FE0_F6D7_A11B_41EA_38827B03EC94_camera"
  },
  {
   "media": "this.panorama_FCA66D0A_F6D7_A12F_41D3_F7A4F25CD0FE",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2DA7B5FF_3F4B_ECB5_41C8_2350C73E7421_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FCA66D0A_F6D7_A12F_41D3_F7A4F25CD0FE_camera"
  },
  {
   "media": "this.panorama_FCA50949_F6D4_612A_41CC_65AF6127F229",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2DA7B5FF_3F4B_ECB5_41C8_2350C73E7421_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FCA50949_F6D4_612A_41CC_65AF6127F229_camera"
  },
  {
   "media": "this.panorama_FCA53548_F6D4_612A_41BB_D48002FC4710",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2DA7B5FF_3F4B_ECB5_41C8_2350C73E7421_playlist, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FCA53548_F6D4_612A_41BB_D48002FC4710_camera"
  },
  {
   "media": "this.panorama_FCA4D2A9_F6D4_A36A_41D9_85B9D4C4B9F2",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2DA7B5FF_3F4B_ECB5_41C8_2350C73E7421_playlist, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FCA4D2A9_F6D4_A36A_41D9_85B9D4C4B9F2_camera"
  },
  {
   "media": "this.panorama_FCA56EEA_F6D4_A0EE_41E0_B66C2536057D",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2DA7B5FF_3F4B_ECB5_41C8_2350C73E7421_playlist, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FCA56EEA_F6D4_A0EE_41E0_B66C2536057D_camera"
  },
  {
   "media": "this.panorama_FCA4CB49_F6D4_A12D_41A1_AD6390F9B90D",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2DA7B5FF_3F4B_ECB5_41C8_2350C73E7421_playlist, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FCA4CB49_F6D4_A12D_41A1_AD6390F9B90D_camera"
  },
  {
   "media": "this.panorama_FCA4B893_F6D4_EF3D_41E8_B23814B283CC",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2DA7B5FF_3F4B_ECB5_41C8_2350C73E7421_playlist, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FCA4B893_F6D4_EF3D_41E8_B23814B283CC_camera"
  },
  {
   "media": "this.panorama_FCA346B9_F6D4_E36A_41E8_FB37D8789519",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2DA7B5FF_3F4B_ECB5_41C8_2350C73E7421_playlist, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FCA346B9_F6D4_E36A_41E8_FB37D8789519_camera"
  },
  {
   "media": "this.panorama_FCA51430_F6D4_A77A_41E9_F0A0E79636A3",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2DA7B5FF_3F4B_ECB5_41C8_2350C73E7421_playlist, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FCA51430_F6D4_A77A_41E9_F0A0E79636A3_camera"
  },
  {
   "media": "this.panorama_FCA50179_F6D4_A1EA_41C4_D9C52C70FA89",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2DA7B5FF_3F4B_ECB5_41C8_2350C73E7421_playlist, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FCA50179_F6D4_A1EA_41C4_D9C52C70FA89_camera"
  },
  {
   "media": "this.panorama_FCA5FE4B_F6D4_A32E_41D5_48F03BD57F7A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2DA7B5FF_3F4B_ECB5_41C8_2350C73E7421_playlist, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FCA5FE4B_F6D4_A32E_41D5_48F03BD57F7A_camera"
  },
  {
   "media": "this.panorama_FCA53B21_F6D4_611D_41DE_C4B1A6849AF8",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2DA7B5FF_3F4B_ECB5_41C8_2350C73E7421_playlist, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FCA53B21_F6D4_611D_41DE_C4B1A6849AF8_camera"
  },
  {
   "media": "this.panorama_FCA528A4_F6D4_6F1B_41ED_942C08D16866",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2DA7B5FF_3F4B_ECB5_41C8_2350C73E7421_playlist, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FCA528A4_F6D4_6F1B_41ED_942C08D16866_camera"
  },
  {
   "media": "this.panorama_FCA56553_F6D5_A13D_41D6_27B8C7E3AB13",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2DA7B5FF_3F4B_ECB5_41C8_2350C73E7421_playlist, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FCA56553_F6D5_A13D_41D6_27B8C7E3AB13_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2DA7B5FF_3F4B_ECB5_41C8_2350C73E7421_playlist, 20, 0)",
   "media": "this.album_2E1941CB_3CAF_8A11_41CA_397AC689B439",
   "class": "PhotoAlbumPlayListItem",
   "player": "this.MainViewerPhotoAlbumPlayer"
  }
 ],
 "id": "ThumbnailList_2DA7B5FF_3F4B_ECB5_41C8_2350C73E7421_playlist",
 "class": "PlayList"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_26E77056_3D12_B2E8_41B8_22308B428753_t.jpg",
 "id": "photo_26E77056_3D12_B2E8_41B8_22308B428753",
 "width": 667,
 "label": "LINE_ALBUM_\u0e1b\u0e23\u0e32\u0e2a\u0e32\u0e17_\u0e52\u0e52\u0e50\u0e56\u0e50\u0e57_25",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/photo_26E77056_3D12_B2E8_41B8_22308B428753.JPG"
   }
  ]
 },
 "height": 1000
},
{
 "levels": [
  {
   "url": "media/popup_1FC0960C_3F31_FE78_41CB_CF9DC7CBAF44_0_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 900
  },
  {
   "url": "media/popup_1FC0960C_3F31_FE78_41CB_CF9DC7CBAF44_0_1.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 768
  },
  {
   "url": "media/popup_1FC0960C_3F31_FE78_41CB_CF9DC7CBAF44_0_2.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 384
  }
 ],
 "id": "ImageResource_1FBB265F_3F17_BE98_4197_61A586B5BCF5",
 "class": "ImageResource"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_21CD3C3A_3D12_9298_41C9_7192652B752F_t.jpg",
 "id": "photo_21CD3C3A_3D12_9298_41C9_7192652B752F",
 "width": 667,
 "label": "LINE_ALBUM_\u0e1b\u0e23\u0e32\u0e2a\u0e32\u0e17_\u0e52\u0e52\u0e50\u0e56\u0e50\u0e57_14",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/photo_21CD3C3A_3D12_9298_41C9_7192652B752F.JPG"
   }
  ]
 },
 "height": 1000
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA51430_F6D4_A77A_41E9_F0A0E79636A3_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FCA51430_F6D4_A77A_41E9_F0A0E79636A3_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FCA51430_F6D4_A77A_41E9_F0A0E79636A3_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCA51430_F6D4_A77A_41E9_F0A0E79636A3_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA51430_F6D4_A77A_41E9_F0A0E79636A3_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FCA51430_F6D4_A77A_41E9_F0A0E79636A3_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FCA51430_F6D4_A77A_41E9_F0A0E79636A3_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCA51430_F6D4_A77A_41E9_F0A0E79636A3_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA51430_F6D4_A77A_41E9_F0A0E79636A3_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FCA51430_F6D4_A77A_41E9_F0A0E79636A3_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FCA51430_F6D4_A77A_41E9_F0A0E79636A3_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCA51430_F6D4_A77A_41E9_F0A0E79636A3_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA51430_F6D4_A77A_41E9_F0A0E79636A3_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FCA51430_F6D4_A77A_41E9_F0A0E79636A3_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FCA51430_F6D4_A77A_41E9_F0A0E79636A3_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCA51430_F6D4_A77A_41E9_F0A0E79636A3_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_FCA51430_F6D4_A77A_41E9_F0A0E79636A3_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA51430_F6D4_A77A_41E9_F0A0E79636A3_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FCA51430_F6D4_A77A_41E9_F0A0E79636A3_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FCA51430_F6D4_A77A_41E9_F0A0E79636A3_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCA51430_F6D4_A77A_41E9_F0A0E79636A3_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA51430_F6D4_A77A_41E9_F0A0E79636A3_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FCA51430_F6D4_A77A_41E9_F0A0E79636A3_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FCA51430_F6D4_A77A_41E9_F0A0E79636A3_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCA51430_F6D4_A77A_41E9_F0A0E79636A3_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "\u0e20\u0e32\u0e1e\u0e17\u0e3515",
 "hfovMin": "135%",
 "id": "panorama_FCA51430_F6D4_A77A_41E9_F0A0E79636A3",
 "overlays": [
  "this.overlay_2F8A28F0_3D72_B3A8_41C5_2F9EA9F69940",
  "this.overlay_2F871A8B_3D73_967F_41B9_B551757E5355",
  "this.overlay_24C798E7_3D16_F3A9_41C6_D6DAFDFDDEDE"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 16.71,
   "class": "AdjacentPanorama",
   "backwardYaw": -84.06,
   "panorama": "this.panorama_FCA4B893_F6D4_EF3D_41E8_B23814B283CC",
   "distance": 1
  },
  {
   "yaw": -104.87,
   "class": "AdjacentPanorama",
   "backwardYaw": 35.44,
   "panorama": "this.panorama_FCA50179_F6D4_A1EA_41C4_D9C52C70FA89",
   "distance": 1
  },
  {
   "yaw": -113.08,
   "class": "AdjacentPanorama",
   "backwardYaw": 64.46,
   "panorama": "this.panorama_FCA5FE4B_F6D4_A32E_41D5_48F03BD57F7A",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_FCA51430_F6D4_A77A_41E9_F0A0E79636A3_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA5FE4B_F6D4_A32E_41D5_48F03BD57F7A_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FCA5FE4B_F6D4_A32E_41D5_48F03BD57F7A_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FCA5FE4B_F6D4_A32E_41D5_48F03BD57F7A_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCA5FE4B_F6D4_A32E_41D5_48F03BD57F7A_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA5FE4B_F6D4_A32E_41D5_48F03BD57F7A_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FCA5FE4B_F6D4_A32E_41D5_48F03BD57F7A_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FCA5FE4B_F6D4_A32E_41D5_48F03BD57F7A_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCA5FE4B_F6D4_A32E_41D5_48F03BD57F7A_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA5FE4B_F6D4_A32E_41D5_48F03BD57F7A_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FCA5FE4B_F6D4_A32E_41D5_48F03BD57F7A_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FCA5FE4B_F6D4_A32E_41D5_48F03BD57F7A_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCA5FE4B_F6D4_A32E_41D5_48F03BD57F7A_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA5FE4B_F6D4_A32E_41D5_48F03BD57F7A_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FCA5FE4B_F6D4_A32E_41D5_48F03BD57F7A_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FCA5FE4B_F6D4_A32E_41D5_48F03BD57F7A_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCA5FE4B_F6D4_A32E_41D5_48F03BD57F7A_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_FCA5FE4B_F6D4_A32E_41D5_48F03BD57F7A_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA5FE4B_F6D4_A32E_41D5_48F03BD57F7A_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FCA5FE4B_F6D4_A32E_41D5_48F03BD57F7A_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FCA5FE4B_F6D4_A32E_41D5_48F03BD57F7A_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCA5FE4B_F6D4_A32E_41D5_48F03BD57F7A_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA5FE4B_F6D4_A32E_41D5_48F03BD57F7A_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FCA5FE4B_F6D4_A32E_41D5_48F03BD57F7A_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FCA5FE4B_F6D4_A32E_41D5_48F03BD57F7A_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCA5FE4B_F6D4_A32E_41D5_48F03BD57F7A_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "\u0e20\u0e32\u0e1e\u0e17\u0e3517",
 "hfovMin": "135%",
 "id": "panorama_FCA5FE4B_F6D4_A32E_41D5_48F03BD57F7A",
 "overlays": [
  "this.overlay_283E1286_3D7E_B668_419A_E4A2DF8D58A7",
  "this.overlay_2B50ECCC_3D7E_93F8_41C8_B0B130EE7299",
  "this.overlay_2877756B_3D71_92B8_41B2_80F98EFAF65A"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -78.24,
   "class": "AdjacentPanorama",
   "backwardYaw": 24.5,
   "panorama": "this.panorama_FCA66D0A_F6D7_A12F_41D3_F7A4F25CD0FE",
   "distance": 1
  },
  {
   "yaw": 64.46,
   "class": "AdjacentPanorama",
   "backwardYaw": -113.08,
   "panorama": "this.panorama_FCA51430_F6D4_A77A_41E9_F0A0E79636A3",
   "distance": 1
  },
  {
   "yaw": 64.96,
   "class": "AdjacentPanorama",
   "backwardYaw": -93.44,
   "panorama": "this.panorama_FCA50179_F6D4_A1EA_41C4_D9C52C70FA89",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_FCA5FE4B_F6D4_A32E_41D5_48F03BD57F7A_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_28917475_3224_BDAD_41BD_A9CA0FA89DF6",
   "class": "MapPlayListItem",
   "player": "this.MapViewerMapPlayer"
  }
 ],
 "id": "playList_74DE24CD_7B16_E0CA_41DE_874716F79FA8",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": -26.22,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_75F4E7F7_7B16_E0C6_41D7_AED29177B9A0"
},
{
 "initialPosition": {
  "yaw": -129.61,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_7673E612_7B16_E35E_41D7_C5A058D2593D",
 "manualRotationSpeed": 1000
},
{
 "levels": [
  {
   "url": "media/popup_8075D38B_8FEA_4204_41C7_47580EB38A2E_0_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 900
  },
  {
   "url": "media/popup_8075D38B_8FEA_4204_41C7_47580EB38A2E_0_1.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 768
  },
  {
   "url": "media/popup_8075D38B_8FEA_4204_41C7_47580EB38A2E_0_2.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 384
  }
 ],
 "id": "ImageResource_9E864BAD_8FEA_C21C_41C2_FEC4C10FA5AA",
 "class": "ImageResource"
},
{
 "initialPosition": {
  "yaw": -26.91,
  "class": "PanoramaCameraPosition",
  "pitch": 13.18
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_FC217FE0_F6D7_A11B_41EA_38827B03EC94_camera"
},
{
 "items": [
  {
   "begin": "this.loopAlbum(this.playList_74D894CE_7B16_E0C6_41C6_47A057748BDE, 0)",
   "media": "this.album_2E1941CB_3CAF_8A11_41CA_397AC689B439",
   "class": "PhotoAlbumPlayListItem",
   "player": "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9CPhotoAlbumPlayer"
  }
 ],
 "id": "playList_74D894CE_7B16_E0C6_41C6_47A057748BDE",
 "class": "PlayList"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_2E1941CB_3CAF_8A11_41CA_397AC689B439_4_t.jpg",
 "id": "album_2E1941CB_3CAF_8A11_41CA_397AC689B439_4",
 "width": 1000,
 "label": "LINE_ALBUM_\u0e1b\u0e23\u0e32\u0e2a\u0e32\u0e17_\u0e52\u0e52\u0e50\u0e56\u0e50\u0e56_10",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_2E1941CB_3CAF_8A11_41CA_397AC689B439_4.JPG"
   }
  ]
 },
 "height": 667
},
{
 "initialPosition": {
  "yaw": -162.52,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_76C686C6_7B16_E0C6_41C2_F852895FB3F5"
},
{
 "initialPosition": {
  "yaw": -28.83,
  "class": "PanoramaCameraPosition",
  "pitch": 26.63
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_FCA51430_F6D4_A77A_41E9_F0A0E79636A3_camera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA50949_F6D4_612A_41CC_65AF6127F229_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FCA50949_F6D4_612A_41CC_65AF6127F229_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FCA50949_F6D4_612A_41CC_65AF6127F229_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCA50949_F6D4_612A_41CC_65AF6127F229_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA50949_F6D4_612A_41CC_65AF6127F229_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FCA50949_F6D4_612A_41CC_65AF6127F229_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FCA50949_F6D4_612A_41CC_65AF6127F229_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCA50949_F6D4_612A_41CC_65AF6127F229_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA50949_F6D4_612A_41CC_65AF6127F229_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FCA50949_F6D4_612A_41CC_65AF6127F229_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FCA50949_F6D4_612A_41CC_65AF6127F229_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCA50949_F6D4_612A_41CC_65AF6127F229_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA50949_F6D4_612A_41CC_65AF6127F229_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FCA50949_F6D4_612A_41CC_65AF6127F229_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FCA50949_F6D4_612A_41CC_65AF6127F229_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCA50949_F6D4_612A_41CC_65AF6127F229_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_FCA50949_F6D4_612A_41CC_65AF6127F229_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA50949_F6D4_612A_41CC_65AF6127F229_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FCA50949_F6D4_612A_41CC_65AF6127F229_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FCA50949_F6D4_612A_41CC_65AF6127F229_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCA50949_F6D4_612A_41CC_65AF6127F229_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA50949_F6D4_612A_41CC_65AF6127F229_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FCA50949_F6D4_612A_41CC_65AF6127F229_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FCA50949_F6D4_612A_41CC_65AF6127F229_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCA50949_F6D4_612A_41CC_65AF6127F229_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "\u0e20\u0e32\u0e1e\u0e17\u0e358",
 "hfovMin": "135%",
 "id": "panorama_FCA50949_F6D4_612A_41CC_65AF6127F229",
 "overlays": [
  "this.overlay_161EA6B9_05C2_12DD_414E_5813A71AF7B4",
  "this.overlay_117311EF_05C2_6E74_417C_D091F78A68C1",
  "this.overlay_11E18968_05C2_7E7C_4197_4DC8D12B68C7",
  "this.overlay_1384B805_05C6_3DB4_4193_4328ED4E76AF",
  "this.overlay_12BD51A3_05C6_EEEC_4182_652ED72036FB",
  "this.overlay_1FE93B50_3F33_F6E7_41B4_37E11D41D902",
  "this.overlay_18ED4D9F_3FF1_ED98_41B9_3F0C7D93E364",
  "this.overlay_9C553CCA_8CD2_6D44_41DA_42205A1EEC2C",
  "this.popup_D4BD66EE_DB61_0831_41E6_9460AE72C9CF"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 20.38,
   "class": "AdjacentPanorama",
   "backwardYaw": 17.48,
   "panorama": "this.panorama_FCA4D2A9_F6D4_A36A_41D9_85B9D4C4B9F2",
   "distance": 1
  },
  {
   "yaw": 153.78,
   "class": "AdjacentPanorama",
   "backwardYaw": -30.68,
   "panorama": "this.panorama_FCB069C1_F6D4_A11D_41B4_D58FFB70AFAE",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_FC217FE0_F6D7_A11B_41EA_38827B03EC94"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_FCA66D0A_F6D7_A12F_41D3_F7A4F25CD0FE"
  },
  {
   "yaw": -77.37,
   "class": "AdjacentPanorama",
   "backwardYaw": 108.92,
   "panorama": "this.panorama_FCA53548_F6D4_612A_41BB_D48002FC4710",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_FCA50949_F6D4_612A_41CC_65AF6127F229_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -158.25,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_76A7B699_7B16_E34A_41CD_BDD8560500D1"
},
{
 "initialPosition": {
  "yaw": -29.65,
  "class": "PanoramaCameraPosition",
  "pitch": 29.93
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_FCA5FE4B_F6D4_A32E_41D5_48F03BD57F7A_camera"
},
{
 "initialPosition": {
  "yaw": -29.1,
  "class": "PanoramaCameraPosition",
  "pitch": 7.96
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_FCA53548_F6D4_612A_41BB_D48002FC4710_camera"
},
{
 "initialPosition": {
  "yaw": 154.3,
  "class": "PanoramaCameraPosition",
  "pitch": 7.14
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_FCA4D2A9_F6D4_A36A_41D9_85B9D4C4B9F2_camera"
},
{
 "initialPosition": {
  "yaw": -163.29,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_755BC759_7B16_E1CA_41CA_6C766F972C41"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": -28.32,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_D4BD66EE_DB61_0831_41E6_9460AE72C9CF",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_D4BD66EE_DB61_0831_41E6_9460AE72C9CF_0_1.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 768
   }
  ]
 },
 "pitch": 19.82,
 "hideEasing": "cubic_out",
 "hfov": 19.96
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": -26.27,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_8075D38B_8FEA_4204_41C7_47580EB38A2E",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_8075D38B_8FEA_4204_41C7_47580EB38A2E_0_1.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 768
   }
  ]
 },
 "pitch": -7.75,
 "hideEasing": "cubic_out",
 "hfov": 10.46
},
{
 "initialPosition": {
  "yaw": -153.48,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_76E746F2_7B16_E0DE_41D2_DE973CE5F831"
},
{
 "initialPosition": {
  "yaw": 100.38,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_75EAD82A_7B16_EF4F_41B8_AB62C782E8D8"
},
{
 "initialPosition": {
  "yaw": 74.26,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_6B5BF550_7B16_E1DA_41D9_1A43EE9570FC",
 "manualRotationSpeed": 1014
},
{
 "fieldOfViewOverlayInsideColor": "#FFFFFF",
 "id": "map_28917475_3224_BDAD_41BD_A9CA0FA89DF6",
 "fieldOfViewOverlayOutsideColor": "#000000",
 "width": 2176,
 "label": "Asset 4@4x",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/map_28917475_3224_BDAD_41BD_A9CA0FA89DF6.png",
    "width": 2176,
    "class": "ImageResourceLevel",
    "height": 1389
   },
   {
    "url": "media/map_28917475_3224_BDAD_41BD_A9CA0FA89DF6_lq.png",
    "width": 320,
    "tags": "preload",
    "class": "ImageResourceLevel",
    "height": 205
   }
  ]
 },
 "minimumZoomFactor": 0.5,
 "overlays": [
  "this.overlay_2B82678F_3224_7B7D_41C4_1135B5B20EBD",
  "this.overlay_2B269459_3227_DDE4_41B7_DD3553466381",
  "this.overlay_2BE20992_3227_D764_41B0_66D3362BA9CF",
  "this.overlay_2B15A4FA_3224_FEA4_418A_1C0241DBDD28",
  "this.overlay_2B80BC0D_3225_CD7D_41C1_CB67FED7F0E2",
  "this.overlay_2B1341C6_3224_B6EF_41BC_D5873A615D43",
  "this.overlay_2B10A3D2_3224_DAE4_41C8_5A6558C3C510",
  "this.overlay_2B128902_3224_7767_41C8_5592287BF073",
  "this.overlay_2B1DC4C7_322B_DEEC_41C6_7F55186A8687"
 ],
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "thumbnailUrl": "media/map_28917475_3224_BDAD_41BD_A9CA0FA89DF6_t.png",
 "fieldOfViewOverlayRadiusScale": 0.3,
 "fieldOfViewOverlayOutsideOpacity": 0,
 "initialZoomFactor": 1,
 "scaleMode": "fit_inside",
 "class": "Map",
 "maximumZoomFactor": 1.2,
 "height": 1389
},
{
 "initialPosition": {
  "yaw": 115.33,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_6B25751E_7B16_E146_41CE_A267E9EED3CD"
},
{
 "initialPosition": {
  "yaw": 65.34,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_6B7BB57D_7B16_E1CA_41D0_5938D5ADD0B4"
},
{
 "initialPosition": {
  "yaw": -25.63,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_756F9786_7B16_E146_41D6_04AA492283FC",
 "manualRotationSpeed": 1014
},
{
 "initialPosition": {
  "yaw": 95.94,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_764055D4_7B16_E0DA_41D1_B35B96DE2710"
},
{
 "initialPosition": {
  "yaw": -30.47,
  "class": "PanoramaCameraPosition",
  "pitch": 25.26
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_FCA56553_F6D5_A13D_41D6_27B8C7E3AB13_camera"
},
{
 "initialPosition": {
  "yaw": 47.78,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_75C417DE_7B16_E0C6_41DC_C33829190787"
},
{
 "initialPosition": {
  "yaw": -151.47,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_75788777_7B16_E1C6_41DB_4EAE8EAC8C84"
},
{
 "initialPosition": {
  "yaw": -33.22,
  "class": "PanoramaCameraPosition",
  "pitch": 29.38
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_FCA4B893_F6D4_EF3D_41E8_B23814B283CC_camera"
},
{
 "initialPosition": {
  "yaw": 152.48,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_75E4C811_7B16_EF5A_41D8_7092BBB3049D",
 "manualRotationSpeed": 1014
},
{
 "levels": [
  {
   "url": "media/popup_D42DF1A5_DB63_0832_41B8_A748DCCA2514_0_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 900
  },
  {
   "url": "media/popup_D42DF1A5_DB63_0832_41B8_A748DCCA2514_0_1.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 768
  },
  {
   "url": "media/popup_D42DF1A5_DB63_0832_41B8_A748DCCA2514_0_2.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 384
  }
 ],
 "id": "ImageResource_C8FC7A96_DB67_1811_41E2_550D2C2DC1B0",
 "class": "ImageResource"
},
{
 "initialPosition": {
  "yaw": 86.56,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_7483591C_7B16_E14A_41DB_7D1AA9450558"
},
{
 "items": [
  {
   "media": "this.panorama_FD815AAE_F6D4_E367_418C_B5D1094DAF3E",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_2F8BA686_0D4F_6B7E_419C_EB65DD1505BB_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FD815AAE_F6D4_E367_418C_B5D1094DAF3E_camera"
  },
  {
   "media": "this.panorama_FCBC1D7C_F6D4_E1EB_41E1_A702CEA4A43F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_2F8BA686_0D4F_6B7E_419C_EB65DD1505BB_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FCBC1D7C_F6D4_E1EB_41E1_A702CEA4A43F_camera"
  },
  {
   "media": "this.panorama_FDF55F2D_F6D7_A16A_41E9_3BB4418749A0",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_2F8BA686_0D4F_6B7E_419C_EB65DD1505BB_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FDF55F2D_F6D7_A16A_41E9_3BB4418749A0_camera"
  },
  {
   "media": "this.panorama_FCA7DBF4_F6D7_A0FA_41E5_BA666E5CACE5",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_2F8BA686_0D4F_6B7E_419C_EB65DD1505BB_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FCA7DBF4_F6D7_A0FA_41E5_BA666E5CACE5_camera"
  },
  {
   "media": "this.panorama_FCB069C1_F6D4_A11D_41B4_D58FFB70AFAE",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_2F8BA686_0D4F_6B7E_419C_EB65DD1505BB_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FCB069C1_F6D4_A11D_41B4_D58FFB70AFAE_camera"
  },
  {
   "media": "this.panorama_FC217FE0_F6D7_A11B_41EA_38827B03EC94",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_2F8BA686_0D4F_6B7E_419C_EB65DD1505BB_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FC217FE0_F6D7_A11B_41EA_38827B03EC94_camera"
  },
  {
   "media": "this.panorama_FCA66D0A_F6D7_A12F_41D3_F7A4F25CD0FE",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_2F8BA686_0D4F_6B7E_419C_EB65DD1505BB_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FCA66D0A_F6D7_A12F_41D3_F7A4F25CD0FE_camera"
  },
  {
   "media": "this.panorama_FCA50949_F6D4_612A_41CC_65AF6127F229",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_2F8BA686_0D4F_6B7E_419C_EB65DD1505BB_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FCA50949_F6D4_612A_41CC_65AF6127F229_camera"
  },
  {
   "media": "this.panorama_FCA53548_F6D4_612A_41BB_D48002FC4710",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_2F8BA686_0D4F_6B7E_419C_EB65DD1505BB_playlist, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FCA53548_F6D4_612A_41BB_D48002FC4710_camera"
  },
  {
   "media": "this.panorama_FCA4D2A9_F6D4_A36A_41D9_85B9D4C4B9F2",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_2F8BA686_0D4F_6B7E_419C_EB65DD1505BB_playlist, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FCA4D2A9_F6D4_A36A_41D9_85B9D4C4B9F2_camera"
  },
  {
   "media": "this.panorama_FCA56EEA_F6D4_A0EE_41E0_B66C2536057D",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_2F8BA686_0D4F_6B7E_419C_EB65DD1505BB_playlist, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FCA56EEA_F6D4_A0EE_41E0_B66C2536057D_camera"
  },
  {
   "media": "this.panorama_FCA4CB49_F6D4_A12D_41A1_AD6390F9B90D",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_2F8BA686_0D4F_6B7E_419C_EB65DD1505BB_playlist, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FCA4CB49_F6D4_A12D_41A1_AD6390F9B90D_camera"
  },
  {
   "media": "this.panorama_FCA4B893_F6D4_EF3D_41E8_B23814B283CC",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_2F8BA686_0D4F_6B7E_419C_EB65DD1505BB_playlist, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FCA4B893_F6D4_EF3D_41E8_B23814B283CC_camera"
  },
  {
   "media": "this.panorama_FCA346B9_F6D4_E36A_41E8_FB37D8789519",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_2F8BA686_0D4F_6B7E_419C_EB65DD1505BB_playlist, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FCA346B9_F6D4_E36A_41E8_FB37D8789519_camera"
  },
  {
   "media": "this.panorama_FCA51430_F6D4_A77A_41E9_F0A0E79636A3",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_2F8BA686_0D4F_6B7E_419C_EB65DD1505BB_playlist, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FCA51430_F6D4_A77A_41E9_F0A0E79636A3_camera"
  },
  {
   "media": "this.panorama_FCA50179_F6D4_A1EA_41C4_D9C52C70FA89",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_2F8BA686_0D4F_6B7E_419C_EB65DD1505BB_playlist, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FCA50179_F6D4_A1EA_41C4_D9C52C70FA89_camera"
  },
  {
   "media": "this.panorama_FCA5FE4B_F6D4_A32E_41D5_48F03BD57F7A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_2F8BA686_0D4F_6B7E_419C_EB65DD1505BB_playlist, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FCA5FE4B_F6D4_A32E_41D5_48F03BD57F7A_camera"
  },
  {
   "media": "this.panorama_FCA53B21_F6D4_611D_41DE_C4B1A6849AF8",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_2F8BA686_0D4F_6B7E_419C_EB65DD1505BB_playlist, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FCA53B21_F6D4_611D_41DE_C4B1A6849AF8_camera"
  },
  {
   "media": "this.panorama_FCA528A4_F6D4_6F1B_41ED_942C08D16866",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_2F8BA686_0D4F_6B7E_419C_EB65DD1505BB_playlist, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FCA528A4_F6D4_6F1B_41ED_942C08D16866_camera"
  },
  {
   "media": "this.panorama_FCA56553_F6D5_A13D_41D6_27B8C7E3AB13",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_2F8BA686_0D4F_6B7E_419C_EB65DD1505BB_playlist, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FCA56553_F6D5_A13D_41D6_27B8C7E3AB13_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_2F8BA686_0D4F_6B7E_419C_EB65DD1505BB_playlist, 20, 0)",
   "media": "this.album_2E1941CB_3CAF_8A11_41CA_397AC689B439",
   "class": "PhotoAlbumPlayListItem",
   "player": "this.MainViewerPhotoAlbumPlayer"
  }
 ],
 "id": "ThumbnailGrid_2F8BA686_0D4F_6B7E_419C_EB65DD1505BB_playlist",
 "class": "PlayList"
},
{
 "duration": 60000,
 "thumbnailUrl": "media/photo_2440B9E8_31E4_4CF7_41AC_6D4331F9E891_t.png",
 "id": "photo_2440B9E8_31E4_4CF7_41AC_6D4331F9E891",
 "width": 512,
 "label": "\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e2b\u0e32 (5)",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/photo_2440B9E8_31E4_4CF7_41AC_6D4331F9E891.png"
   }
  ]
 },
 "height": 800
},
{
 "initialPosition": {
  "yaw": 87.44,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_76D356B6_7B16_E346_41D6_C40EFCF3A619"
},
{
 "viewerArea": "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "buttonNext": "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9CPhotoAlbumPlayer",
 "class": "PhotoAlbumPlayer",
 "buttonPrevious": "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": -15.7,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_1FC0960C_3F31_FE78_41CB_CF9DC7CBAF44",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_1FC0960C_3F31_FE78_41CB_CF9DC7CBAF44_0_1.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 768
   }
  ]
 },
 "pitch": -11.87,
 "hideEasing": "cubic_out",
 "hfov": 12.29
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FDF55F2D_F6D7_A16A_41E9_3BB4418749A0_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FDF55F2D_F6D7_A16A_41E9_3BB4418749A0_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FDF55F2D_F6D7_A16A_41E9_3BB4418749A0_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FDF55F2D_F6D7_A16A_41E9_3BB4418749A0_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FDF55F2D_F6D7_A16A_41E9_3BB4418749A0_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FDF55F2D_F6D7_A16A_41E9_3BB4418749A0_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FDF55F2D_F6D7_A16A_41E9_3BB4418749A0_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FDF55F2D_F6D7_A16A_41E9_3BB4418749A0_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FDF55F2D_F6D7_A16A_41E9_3BB4418749A0_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FDF55F2D_F6D7_A16A_41E9_3BB4418749A0_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FDF55F2D_F6D7_A16A_41E9_3BB4418749A0_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FDF55F2D_F6D7_A16A_41E9_3BB4418749A0_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FDF55F2D_F6D7_A16A_41E9_3BB4418749A0_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FDF55F2D_F6D7_A16A_41E9_3BB4418749A0_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FDF55F2D_F6D7_A16A_41E9_3BB4418749A0_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FDF55F2D_F6D7_A16A_41E9_3BB4418749A0_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_FDF55F2D_F6D7_A16A_41E9_3BB4418749A0_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FDF55F2D_F6D7_A16A_41E9_3BB4418749A0_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FDF55F2D_F6D7_A16A_41E9_3BB4418749A0_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FDF55F2D_F6D7_A16A_41E9_3BB4418749A0_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FDF55F2D_F6D7_A16A_41E9_3BB4418749A0_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FDF55F2D_F6D7_A16A_41E9_3BB4418749A0_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FDF55F2D_F6D7_A16A_41E9_3BB4418749A0_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FDF55F2D_F6D7_A16A_41E9_3BB4418749A0_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FDF55F2D_F6D7_A16A_41E9_3BB4418749A0_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "\u0e20\u0e32\u0e1e\u0e17\u0e353",
 "hfovMin": "135%",
 "id": "panorama_FDF55F2D_F6D7_A16A_41E9_3BB4418749A0",
 "overlays": [
  "this.overlay_15EF4F36_05C2_13D7_417A_A34D13053BF2",
  "this.overlay_1EA201D5_3F32_95E8_41B9_F3C6C2E1BE99",
  "this.overlay_1C335D55_3F11_92E8_41C1_BE40D1D68651",
  "this.popup_2ED773A7_3F5A_6554_4193_4E1BD9295AEA",
  "this.overlay_9F182BED_8FEA_C21F_41DE_952F9B6CE0F6",
  "this.popup_8075D38B_8FEA_4204_41C7_47580EB38A2E"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_FCB069C1_F6D4_A11D_41B4_D58FFB70AFAE"
  },
  {
   "yaw": 152.26,
   "class": "AdjacentPanorama",
   "backwardYaw": 38.39,
   "panorama": "this.panorama_FCBC1D7C_F6D4_E1EB_41E1_A702CEA4A43F",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_FDF55F2D_F6D7_A16A_41E9_3BB4418749A0_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 102.89,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_76BC968A_7B16_E34E_41C4_1AA15ACFE60D"
},
{
 "levels": [
  {
   "url": "media/popup_D4C50A50_DB61_1810_41E5_DECF913FDE16_0_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 900
  },
  {
   "url": "media/popup_D4C50A50_DB61_1810_41E5_DECF913FDE16_0_1.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 768
  },
  {
   "url": "media/popup_D4C50A50_DB61_1810_41E5_DECF913FDE16_0_2.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 384
  }
 ],
 "id": "ImageResource_C8C7FA9C_DB67_1810_41DC_E5EA785CEF00",
 "class": "ImageResource"
},
{
 "duration": 60000,
 "thumbnailUrl": "media/photo_2441839A_31E4_BD4B_41B2_2E8DD3FC613D_t.png",
 "id": "photo_2441839A_31E4_BD4B_41B2_2E8DD3FC613D",
 "width": 512,
 "label": "\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e2b\u0e32 (2)",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/photo_2441839A_31E4_BD4B_41B2_2E8DD3FC613D.png"
   }
  ]
 },
 "height": 800
},
{
 "initialPosition": {
  "yaw": -71.08,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_76FDE6E3_7B16_E0FE_41D4_E3B42E38A4EC"
},
{
 "initialPosition": {
  "yaw": 75.13,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_758307A3_7B16_E17E_41B4_9E16FD7B4CE2"
},
{
 "viewerArea": "this.MapViewer",
 "id": "MapViewerMapPlayer",
 "class": "MapPlayer",
 "movementMode": "constrained"
},
{
 "initialPosition": {
  "yaw": -27.93,
  "class": "PanoramaCameraPosition",
  "pitch": 20.33
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_FCA50949_F6D4_612A_41CC_65AF6127F229_camera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA56EEA_F6D4_A0EE_41E0_B66C2536057D_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FCA56EEA_F6D4_A0EE_41E0_B66C2536057D_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FCA56EEA_F6D4_A0EE_41E0_B66C2536057D_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCA56EEA_F6D4_A0EE_41E0_B66C2536057D_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA56EEA_F6D4_A0EE_41E0_B66C2536057D_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FCA56EEA_F6D4_A0EE_41E0_B66C2536057D_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FCA56EEA_F6D4_A0EE_41E0_B66C2536057D_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCA56EEA_F6D4_A0EE_41E0_B66C2536057D_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA56EEA_F6D4_A0EE_41E0_B66C2536057D_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FCA56EEA_F6D4_A0EE_41E0_B66C2536057D_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FCA56EEA_F6D4_A0EE_41E0_B66C2536057D_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCA56EEA_F6D4_A0EE_41E0_B66C2536057D_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA56EEA_F6D4_A0EE_41E0_B66C2536057D_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FCA56EEA_F6D4_A0EE_41E0_B66C2536057D_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FCA56EEA_F6D4_A0EE_41E0_B66C2536057D_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCA56EEA_F6D4_A0EE_41E0_B66C2536057D_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_FCA56EEA_F6D4_A0EE_41E0_B66C2536057D_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA56EEA_F6D4_A0EE_41E0_B66C2536057D_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FCA56EEA_F6D4_A0EE_41E0_B66C2536057D_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FCA56EEA_F6D4_A0EE_41E0_B66C2536057D_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCA56EEA_F6D4_A0EE_41E0_B66C2536057D_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA56EEA_F6D4_A0EE_41E0_B66C2536057D_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FCA56EEA_F6D4_A0EE_41E0_B66C2536057D_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FCA56EEA_F6D4_A0EE_41E0_B66C2536057D_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCA56EEA_F6D4_A0EE_41E0_B66C2536057D_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "\u0e20\u0e32\u0e1e\u0e17\u0e3511",
 "hfovMin": "135%",
 "id": "panorama_FCA56EEA_F6D4_A0EE_41E0_B66C2536057D",
 "overlays": [
  "this.overlay_1D2561BF_05C6_6ED4_4160_36C731F2058C",
  "this.overlay_121DA431_05C6_15ED_4182_6ED3C17C7EAB",
  "this.overlay_1DD0D99E_05C6_1ED7_415B_9A23C035DCB9",
  "this.overlay_1D703EC1_05C2_32AC_4191_0BDFE77E7FF3",
  "this.overlay_1CF946C0_05DE_72AC_4168_5E6823067370"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -64.67,
   "class": "AdjacentPanorama",
   "backwardYaw": 113.57,
   "panorama": "this.panorama_FCA4D2A9_F6D4_A36A_41D9_85B9D4C4B9F2",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_FCA4CB49_F6D4_A12D_41A1_AD6390F9B90D"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_FCA4B893_F6D4_EF3D_41E8_B23814B283CC"
  },
  {
   "yaw": 161.68,
   "class": "AdjacentPanorama",
   "backwardYaw": -28.33,
   "panorama": "this.panorama_FCA346B9_F6D4_E36A_41E8_FB37D8789519",
   "distance": 1
  },
  {
   "yaw": 26.52,
   "class": "AdjacentPanorama",
   "backwardYaw": 10.57,
   "panorama": "this.panorama_FCA53548_F6D4_612A_41BB_D48002FC4710",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_FCA56EEA_F6D4_A0EE_41E0_B66C2536057D_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -66.43,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_7663363F_7B16_E346_41B5_FCD79F3E4CB3"
},
{
 "initialPosition": {
  "yaw": -28.55,
  "class": "PanoramaCameraPosition",
  "pitch": 15.92
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_FCA50179_F6D4_A1EA_41C4_D9C52C70FA89_camera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA56553_F6D5_A13D_41D6_27B8C7E3AB13_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FCA56553_F6D5_A13D_41D6_27B8C7E3AB13_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FCA56553_F6D5_A13D_41D6_27B8C7E3AB13_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCA56553_F6D5_A13D_41D6_27B8C7E3AB13_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA56553_F6D5_A13D_41D6_27B8C7E3AB13_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FCA56553_F6D5_A13D_41D6_27B8C7E3AB13_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FCA56553_F6D5_A13D_41D6_27B8C7E3AB13_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCA56553_F6D5_A13D_41D6_27B8C7E3AB13_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA56553_F6D5_A13D_41D6_27B8C7E3AB13_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FCA56553_F6D5_A13D_41D6_27B8C7E3AB13_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FCA56553_F6D5_A13D_41D6_27B8C7E3AB13_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCA56553_F6D5_A13D_41D6_27B8C7E3AB13_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA56553_F6D5_A13D_41D6_27B8C7E3AB13_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FCA56553_F6D5_A13D_41D6_27B8C7E3AB13_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FCA56553_F6D5_A13D_41D6_27B8C7E3AB13_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCA56553_F6D5_A13D_41D6_27B8C7E3AB13_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_FCA56553_F6D5_A13D_41D6_27B8C7E3AB13_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA56553_F6D5_A13D_41D6_27B8C7E3AB13_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FCA56553_F6D5_A13D_41D6_27B8C7E3AB13_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FCA56553_F6D5_A13D_41D6_27B8C7E3AB13_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCA56553_F6D5_A13D_41D6_27B8C7E3AB13_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA56553_F6D5_A13D_41D6_27B8C7E3AB13_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FCA56553_F6D5_A13D_41D6_27B8C7E3AB13_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FCA56553_F6D5_A13D_41D6_27B8C7E3AB13_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCA56553_F6D5_A13D_41D6_27B8C7E3AB13_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "\u0e20\u0e32\u0e1e\u0e17\u0e3520",
 "hfovMin": "135%",
 "id": "panorama_FCA56553_F6D5_A13D_41D6_27B8C7E3AB13",
 "overlays": [
  "this.overlay_256E6790_3D11_9E68_41CA_C2BA5C90455A",
  "this.overlay_25BA2C19_3D11_9299_41CC_43EE8B621783",
  "this.overlay_244E499E_3D13_7598_41C5_C9E1A35AEA5B"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -77.11,
   "class": "AdjacentPanorama",
   "backwardYaw": 21.75,
   "panorama": "this.panorama_FCA4CB49_F6D4_A12D_41A1_AD6390F9B90D",
   "distance": 1
  },
  {
   "yaw": 60.31,
   "class": "AdjacentPanorama",
   "backwardYaw": -120.32,
   "panorama": "this.panorama_FCA53B21_F6D4_611D_41DE_C4B1A6849AF8",
   "distance": 1
  },
  {
   "yaw": 58.55,
   "class": "AdjacentPanorama",
   "backwardYaw": -92.56,
   "panorama": "this.panorama_FCA528A4_F6D4_6F1B_41ED_942C08D16866",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_FCA56553_F6D5_A13D_41D6_27B8C7E3AB13_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "thumbnailUrl": "media/album_2E1941CB_3CAF_8A11_41CA_397AC689B439_t.png",
 "id": "album_2E1941CB_3CAF_8A11_41CA_397AC689B439",
 "class": "PhotoAlbum",
 "label": "\u0e20\u0e32\u0e1e\u0e1b\u0e23\u0e32\u0e2a\u0e32\u0e17",
 "playList": "this.album_2E1941CB_3CAF_8A11_41CA_397AC689B439_AlbumPlayList"
},
{
 "initialPosition": {
  "yaw": -115.04,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_75B2C7B1_7B16_E15D_41A6_6E879F0CCE39"
},
{
 "initialPosition": {
  "yaw": -28.55,
  "class": "PanoramaCameraPosition",
  "pitch": -21.69
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_FCA7DBF4_F6D7_A0FA_41E5_BA666E5CACE5_camera",
 "manualRotationSpeed": 1000
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA50179_F6D4_A1EA_41C4_D9C52C70FA89_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FCA50179_F6D4_A1EA_41C4_D9C52C70FA89_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FCA50179_F6D4_A1EA_41C4_D9C52C70FA89_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCA50179_F6D4_A1EA_41C4_D9C52C70FA89_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA50179_F6D4_A1EA_41C4_D9C52C70FA89_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FCA50179_F6D4_A1EA_41C4_D9C52C70FA89_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FCA50179_F6D4_A1EA_41C4_D9C52C70FA89_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCA50179_F6D4_A1EA_41C4_D9C52C70FA89_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA50179_F6D4_A1EA_41C4_D9C52C70FA89_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FCA50179_F6D4_A1EA_41C4_D9C52C70FA89_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FCA50179_F6D4_A1EA_41C4_D9C52C70FA89_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCA50179_F6D4_A1EA_41C4_D9C52C70FA89_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA50179_F6D4_A1EA_41C4_D9C52C70FA89_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FCA50179_F6D4_A1EA_41C4_D9C52C70FA89_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FCA50179_F6D4_A1EA_41C4_D9C52C70FA89_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCA50179_F6D4_A1EA_41C4_D9C52C70FA89_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_FCA50179_F6D4_A1EA_41C4_D9C52C70FA89_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA50179_F6D4_A1EA_41C4_D9C52C70FA89_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FCA50179_F6D4_A1EA_41C4_D9C52C70FA89_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FCA50179_F6D4_A1EA_41C4_D9C52C70FA89_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCA50179_F6D4_A1EA_41C4_D9C52C70FA89_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA50179_F6D4_A1EA_41C4_D9C52C70FA89_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FCA50179_F6D4_A1EA_41C4_D9C52C70FA89_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FCA50179_F6D4_A1EA_41C4_D9C52C70FA89_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCA50179_F6D4_A1EA_41C4_D9C52C70FA89_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "\u0e20\u0e32\u0e1e\u0e17\u0e3516",
 "hfovMin": "135%",
 "id": "panorama_FCA50179_F6D4_A1EA_41C4_D9C52C70FA89",
 "overlays": [
  "this.overlay_29C8BAFA_3D73_B798_41BA_75BBD4019042",
  "this.overlay_2878F73D_3D73_BE98_41BB_BB9034933993",
  "this.overlay_1EEBD59D_3F13_BD98_41C3_79AAE5511B80"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -27.72,
   "class": "AdjacentPanorama",
   "backwardYaw": -119.31,
   "panorama": "this.panorama_FCA4D2A9_F6D4_A36A_41D9_85B9D4C4B9F2",
   "distance": 1
  },
  {
   "yaw": 35.44,
   "class": "AdjacentPanorama",
   "backwardYaw": -104.87,
   "panorama": "this.panorama_FCA51430_F6D4_A77A_41E9_F0A0E79636A3",
   "distance": 1
  },
  {
   "yaw": -93.44,
   "class": "AdjacentPanorama",
   "backwardYaw": 64.96,
   "panorama": "this.panorama_FCA5FE4B_F6D4_A32E_41D5_48F03BD57F7A",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_FCA50179_F6D4_A1EA_41C4_D9C52C70FA89_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_2E1941CB_3CAF_8A11_41CA_397AC689B439_2_t.jpg",
 "id": "album_2E1941CB_3CAF_8A11_41CA_397AC689B439_2",
 "width": 667,
 "label": "LINE_ALBUM_\u0e1b\u0e23\u0e32\u0e2a\u0e32\u0e17_\u0e52\u0e52\u0e50\u0e56\u0e50\u0e56_5",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_2E1941CB_3CAF_8A11_41CA_397AC689B439_2.JPG"
   }
  ]
 },
 "height": 1000
},
{
 "initialPosition": {
  "yaw": -144.56,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_764C25E3_7B16_E0FD_41DE_138E74FA7C73"
},
{
 "initialPosition": {
  "yaw": -105.75,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_75D797CF_7B16_E0C6_41D8_EC500A4D5AA1"
},
{
 "initialPosition": {
  "yaw": -159.62,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_6B52853F_7B16_E146_41CD_F5130E82EE36"
},
{
 "duration": 60000,
 "thumbnailUrl": "media/photo_27A24B92_31E4_CD5B_41C2_D692C115B7B5_t.png",
 "id": "photo_27A24B92_31E4_CD5B_41C2_D692C115B7B5",
 "width": 512,
 "label": "\u0e17\u0e31\u0e1a\u0e2b\u0e25\u0e31\u0e07 (2)",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/photo_27A24B92_31E4_CD5B_41C2_D692C115B7B5.png"
   }
  ]
 },
 "height": 800
},
{
 "initialPosition": {
  "yaw": 80.66,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_7556774A_7B16_E1CF_41CD_DE8894CB5507"
},
{
 "initialPosition": {
  "yaw": -155.5,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_746D88F7_7B16_E0C6_41BD_FE2ED6A55BE6"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": -28.53,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_D4C50A50_DB61_1810_41E5_DECF913FDE16",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_D4C50A50_DB61_1810_41E5_DECF913FDE16_0_1.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 768
   }
  ]
 },
 "pitch": -22.43,
 "hideEasing": "cubic_out",
 "hfov": 34.56
},
{
 "duration": 60000,
 "thumbnailUrl": "media/photo_24415771_31E4_45D9_41C2_B196BE579660_t.png",
 "id": "photo_24415771_31E4_45D9_41C2_B196BE579660",
 "width": 512,
 "label": "\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e2b\u0e32 (4)",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/photo_24415771_31E4_45D9_41C2_B196BE579660.png"
   }
  ]
 },
 "height": 800
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA53548_F6D4_612A_41BB_D48002FC4710_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FCA53548_F6D4_612A_41BB_D48002FC4710_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FCA53548_F6D4_612A_41BB_D48002FC4710_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCA53548_F6D4_612A_41BB_D48002FC4710_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA53548_F6D4_612A_41BB_D48002FC4710_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FCA53548_F6D4_612A_41BB_D48002FC4710_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FCA53548_F6D4_612A_41BB_D48002FC4710_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCA53548_F6D4_612A_41BB_D48002FC4710_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA53548_F6D4_612A_41BB_D48002FC4710_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FCA53548_F6D4_612A_41BB_D48002FC4710_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FCA53548_F6D4_612A_41BB_D48002FC4710_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCA53548_F6D4_612A_41BB_D48002FC4710_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA53548_F6D4_612A_41BB_D48002FC4710_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FCA53548_F6D4_612A_41BB_D48002FC4710_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FCA53548_F6D4_612A_41BB_D48002FC4710_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCA53548_F6D4_612A_41BB_D48002FC4710_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_FCA53548_F6D4_612A_41BB_D48002FC4710_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA53548_F6D4_612A_41BB_D48002FC4710_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FCA53548_F6D4_612A_41BB_D48002FC4710_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FCA53548_F6D4_612A_41BB_D48002FC4710_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCA53548_F6D4_612A_41BB_D48002FC4710_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA53548_F6D4_612A_41BB_D48002FC4710_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FCA53548_F6D4_612A_41BB_D48002FC4710_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FCA53548_F6D4_612A_41BB_D48002FC4710_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCA53548_F6D4_612A_41BB_D48002FC4710_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "\u0e20\u0e32\u0e1e\u0e17\u0e359",
 "hfovMin": "135%",
 "id": "panorama_FCA53548_F6D4_612A_41BB_D48002FC4710",
 "overlays": [
  "this.overlay_1189580A_05CE_7DBF_417D_4CD40AD39131",
  "this.overlay_1100561A_05CE_15DF_4184_67FAB168692B",
  "this.overlay_13D24D9F_05CE_76D5_4187_D6EE3EE4B873",
  "this.overlay_10756154_05C6_2FAB_4193_E12C9411F856",
  "this.overlay_13D24A9A_05C7_F2DC_4192_C0336C6562D0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 10.57,
   "class": "AdjacentPanorama",
   "backwardYaw": 26.52,
   "panorama": "this.panorama_FCA56EEA_F6D4_A0EE_41E0_B66C2536057D",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_FCA53B21_F6D4_611D_41DE_C4B1A6849AF8"
  },
  {
   "yaw": -114.66,
   "class": "AdjacentPanorama",
   "backwardYaw": -27.46,
   "panorama": "this.panorama_FCA528A4_F6D4_6F1B_41ED_942C08D16866",
   "distance": 1
  },
  {
   "yaw": -68.94,
   "class": "AdjacentPanorama",
   "backwardYaw": -27.46,
   "panorama": "this.panorama_FCA528A4_F6D4_6F1B_41ED_942C08D16866",
   "distance": 1
  },
  {
   "yaw": -174.71,
   "class": "AdjacentPanorama",
   "backwardYaw": -27.46,
   "panorama": "this.panorama_FCA528A4_F6D4_6F1B_41ED_942C08D16866",
   "distance": 1
  },
  {
   "yaw": 108.92,
   "class": "AdjacentPanorama",
   "backwardYaw": -77.37,
   "panorama": "this.panorama_FCA50949_F6D4_612A_41CC_65AF6127F229",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_FCA56553_F6D5_A13D_41D6_27B8C7E3AB13"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_FCA53548_F6D4_612A_41BB_D48002FC4710_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 151.67,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_766BF64E_7B16_E3C7_41D8_6C55942A488A"
},
{
 "items": [
  {
   "media": "this.panorama_FD815AAE_F6D4_E367_418C_B5D1094DAF3E",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FD815AAE_F6D4_E367_418C_B5D1094DAF3E_camera"
  },
  {
   "media": "this.panorama_FCBC1D7C_F6D4_E1EB_41E1_A702CEA4A43F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FCBC1D7C_F6D4_E1EB_41E1_A702CEA4A43F_camera"
  },
  {
   "media": "this.panorama_FDF55F2D_F6D7_A16A_41E9_3BB4418749A0",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FDF55F2D_F6D7_A16A_41E9_3BB4418749A0_camera"
  },
  {
   "media": "this.panorama_FCA7DBF4_F6D7_A0FA_41E5_BA666E5CACE5",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FCA7DBF4_F6D7_A0FA_41E5_BA666E5CACE5_camera"
  },
  {
   "media": "this.panorama_FCB069C1_F6D4_A11D_41B4_D58FFB70AFAE",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FCB069C1_F6D4_A11D_41B4_D58FFB70AFAE_camera"
  },
  {
   "media": "this.panorama_FC217FE0_F6D7_A11B_41EA_38827B03EC94",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FC217FE0_F6D7_A11B_41EA_38827B03EC94_camera"
  },
  {
   "media": "this.panorama_FCA66D0A_F6D7_A12F_41D3_F7A4F25CD0FE",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FCA66D0A_F6D7_A12F_41D3_F7A4F25CD0FE_camera"
  },
  {
   "media": "this.panorama_FCA50949_F6D4_612A_41CC_65AF6127F229",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FCA50949_F6D4_612A_41CC_65AF6127F229_camera"
  },
  {
   "media": "this.panorama_FCA53548_F6D4_612A_41BB_D48002FC4710",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FCA53548_F6D4_612A_41BB_D48002FC4710_camera"
  },
  {
   "media": "this.panorama_FCA4D2A9_F6D4_A36A_41D9_85B9D4C4B9F2",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FCA4D2A9_F6D4_A36A_41D9_85B9D4C4B9F2_camera"
  },
  {
   "media": "this.panorama_FCA56EEA_F6D4_A0EE_41E0_B66C2536057D",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FCA56EEA_F6D4_A0EE_41E0_B66C2536057D_camera"
  },
  {
   "media": "this.panorama_FCA4CB49_F6D4_A12D_41A1_AD6390F9B90D",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FCA4CB49_F6D4_A12D_41A1_AD6390F9B90D_camera"
  },
  {
   "media": "this.panorama_FCA4B893_F6D4_EF3D_41E8_B23814B283CC",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FCA4B893_F6D4_EF3D_41E8_B23814B283CC_camera"
  },
  {
   "media": "this.panorama_FCA346B9_F6D4_E36A_41E8_FB37D8789519",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FCA346B9_F6D4_E36A_41E8_FB37D8789519_camera"
  },
  {
   "media": "this.panorama_FCA51430_F6D4_A77A_41E9_F0A0E79636A3",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FCA51430_F6D4_A77A_41E9_F0A0E79636A3_camera"
  },
  {
   "media": "this.panorama_FCA50179_F6D4_A1EA_41C4_D9C52C70FA89",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FCA50179_F6D4_A1EA_41C4_D9C52C70FA89_camera"
  },
  {
   "media": "this.panorama_FCA5FE4B_F6D4_A32E_41D5_48F03BD57F7A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FCA5FE4B_F6D4_A32E_41D5_48F03BD57F7A_camera"
  },
  {
   "media": "this.panorama_FCA53B21_F6D4_611D_41DE_C4B1A6849AF8",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FCA53B21_F6D4_611D_41DE_C4B1A6849AF8_camera"
  },
  {
   "media": "this.panorama_FCA528A4_F6D4_6F1B_41ED_942C08D16866",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FCA528A4_F6D4_6F1B_41ED_942C08D16866_camera"
  },
  {
   "media": "this.panorama_FCA56553_F6D5_A13D_41D6_27B8C7E3AB13",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FCA56553_F6D5_A13D_41D6_27B8C7E3AB13_camera"
  },
  {
   "media": "this.album_2E1941CB_3CAF_8A11_41CA_397AC689B439",
   "end": "this.trigger('tourEnded')",
   "class": "PhotoAlbumPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 0)",
   "player": "this.MainViewerPhotoAlbumPlayer"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_2E1941CB_3CAF_8A11_41CA_397AC689B439_0_t.jpg",
 "id": "album_2E1941CB_3CAF_8A11_41CA_397AC689B439_0",
 "width": 667,
 "label": "LINE_ALBUM_\u0e1b\u0e23\u0e32\u0e2a\u0e32\u0e17_\u0e52\u0e52\u0e50\u0e56\u0e50\u0e56_0",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_2E1941CB_3CAF_8A11_41CA_397AC689B439_0.JPG"
   }
  ]
 },
 "height": 1000
},
{
 "initialPosition": {
  "yaw": -18.32,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_74383876_7B16_EFC7_41CC_A63EA11CF109"
},
{
 "initialPosition": {
  "yaw": -32.66,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_7675C603_7B16_E33D_41D2_E711D5A0BE10"
},
{
 "initialPosition": {
  "yaw": -141.61,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_75A0B7C0_7B16_E13A_41B6_5AF7C3E190B8",
 "manualRotationSpeed": 1014
},
{
 "initialPosition": {
  "yaw": 152.54,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_7519B70F_7B16_E145_41DE_09D25C70DCE6"
},
{
 "initialPosition": {
  "yaw": -28.83,
  "class": "PanoramaCameraPosition",
  "pitch": 32.4
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_FCA4CB49_F6D4_A12D_41A1_AD6390F9B90D_camera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FC217FE0_F6D7_A11B_41EA_38827B03EC94_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FC217FE0_F6D7_A11B_41EA_38827B03EC94_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FC217FE0_F6D7_A11B_41EA_38827B03EC94_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FC217FE0_F6D7_A11B_41EA_38827B03EC94_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FC217FE0_F6D7_A11B_41EA_38827B03EC94_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FC217FE0_F6D7_A11B_41EA_38827B03EC94_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FC217FE0_F6D7_A11B_41EA_38827B03EC94_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FC217FE0_F6D7_A11B_41EA_38827B03EC94_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FC217FE0_F6D7_A11B_41EA_38827B03EC94_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FC217FE0_F6D7_A11B_41EA_38827B03EC94_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FC217FE0_F6D7_A11B_41EA_38827B03EC94_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FC217FE0_F6D7_A11B_41EA_38827B03EC94_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FC217FE0_F6D7_A11B_41EA_38827B03EC94_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FC217FE0_F6D7_A11B_41EA_38827B03EC94_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FC217FE0_F6D7_A11B_41EA_38827B03EC94_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FC217FE0_F6D7_A11B_41EA_38827B03EC94_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_FC217FE0_F6D7_A11B_41EA_38827B03EC94_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FC217FE0_F6D7_A11B_41EA_38827B03EC94_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FC217FE0_F6D7_A11B_41EA_38827B03EC94_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FC217FE0_F6D7_A11B_41EA_38827B03EC94_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FC217FE0_F6D7_A11B_41EA_38827B03EC94_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FC217FE0_F6D7_A11B_41EA_38827B03EC94_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FC217FE0_F6D7_A11B_41EA_38827B03EC94_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FC217FE0_F6D7_A11B_41EA_38827B03EC94_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FC217FE0_F6D7_A11B_41EA_38827B03EC94_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "\u0e20\u0e32\u0e1e\u0e17\u0e356",
 "hfovMin": "135%",
 "id": "panorama_FC217FE0_F6D7_A11B_41EA_38827B03EC94",
 "overlays": [
  "this.overlay_1444AB24_05C2_13F4_4173_AE57046E5F4E",
  "this.overlay_17A28175_05C2_2E54_4189_F859D2745BB0",
  "this.overlay_14551007_05C6_2DB4_4194_827FF7874642"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 74.25,
   "class": "AdjacentPanorama",
   "backwardYaw": -99.21,
   "panorama": "this.panorama_FCB069C1_F6D4_A11D_41B4_D58FFB70AFAE",
   "distance": 1
  },
  {
   "yaw": -79.62,
   "class": "AdjacentPanorama",
   "backwardYaw": 28.53,
   "panorama": "this.panorama_FCA53B21_F6D4_611D_41DE_C4B1A6849AF8",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_FCA66D0A_F6D7_A12F_41D3_F7A4F25CD0FE"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_FC217FE0_F6D7_A11B_41EA_38827B03EC94_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 149.32,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_76C956D4_7B16_E0DA_41CD_977032249A9B"
},
{
 "initialPosition": {
  "yaw": -124.59,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_768A067B_7B16_E3CE_41D4_9B874DC759C8"
},
{
 "initialPosition": {
  "yaw": 51.77,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_742FA890_7B16_EF5A_41D8_F67312C07B4B"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA4B893_F6D4_EF3D_41E8_B23814B283CC_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FCA4B893_F6D4_EF3D_41E8_B23814B283CC_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FCA4B893_F6D4_EF3D_41E8_B23814B283CC_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCA4B893_F6D4_EF3D_41E8_B23814B283CC_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA4B893_F6D4_EF3D_41E8_B23814B283CC_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FCA4B893_F6D4_EF3D_41E8_B23814B283CC_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FCA4B893_F6D4_EF3D_41E8_B23814B283CC_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCA4B893_F6D4_EF3D_41E8_B23814B283CC_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA4B893_F6D4_EF3D_41E8_B23814B283CC_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FCA4B893_F6D4_EF3D_41E8_B23814B283CC_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FCA4B893_F6D4_EF3D_41E8_B23814B283CC_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCA4B893_F6D4_EF3D_41E8_B23814B283CC_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA4B893_F6D4_EF3D_41E8_B23814B283CC_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FCA4B893_F6D4_EF3D_41E8_B23814B283CC_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FCA4B893_F6D4_EF3D_41E8_B23814B283CC_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCA4B893_F6D4_EF3D_41E8_B23814B283CC_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_FCA4B893_F6D4_EF3D_41E8_B23814B283CC_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA4B893_F6D4_EF3D_41E8_B23814B283CC_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FCA4B893_F6D4_EF3D_41E8_B23814B283CC_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FCA4B893_F6D4_EF3D_41E8_B23814B283CC_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCA4B893_F6D4_EF3D_41E8_B23814B283CC_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA4B893_F6D4_EF3D_41E8_B23814B283CC_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FCA4B893_F6D4_EF3D_41E8_B23814B283CC_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FCA4B893_F6D4_EF3D_41E8_B23814B283CC_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCA4B893_F6D4_EF3D_41E8_B23814B283CC_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "\u0e20\u0e32\u0e1e\u0e17\u0e3513",
 "hfovMin": "135%",
 "id": "panorama_FCA4B893_F6D4_EF3D_41E8_B23814B283CC",
 "overlays": [
  "this.overlay_1F1B70D2_05C6_EEAC_4196_AD59F77F53D5",
  "this.overlay_1F132707_05C6_33B4_4191_6595C625E030",
  "this.overlay_1EAD62C5_05C2_32B5_4175_F7238480628C"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 62.81,
   "class": "AdjacentPanorama",
   "backwardYaw": -116.8,
   "panorama": "this.panorama_FCA4CB49_F6D4_A12D_41A1_AD6390F9B90D",
   "distance": 1
  },
  {
   "yaw": 69.12,
   "class": "AdjacentPanorama",
   "backwardYaw": -99.34,
   "panorama": "this.panorama_FCA346B9_F6D4_E36A_41E8_FB37D8789519",
   "distance": 1
  },
  {
   "yaw": -84.06,
   "class": "AdjacentPanorama",
   "backwardYaw": 16.71,
   "panorama": "this.panorama_FCA51430_F6D4_A77A_41E9_F0A0E79636A3",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_FCA4B893_F6D4_EF3D_41E8_B23814B283CC_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "duration": 60000,
 "thumbnailUrl": "media/photo_244770EB_31E4_5CC9_41AC_AECF84C9CC23_t.png",
 "id": "photo_244770EB_31E4_5CC9_41AC_AECF84C9CC23",
 "width": 512,
 "label": "\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e2b\u0e32",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/photo_244770EB_31E4_5CC9_41AC_AECF84C9CC23.png"
   }
  ]
 },
 "height": 800
},
{
 "initialPosition": {
  "yaw": 101.76,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_747D88DC_7B16_E0CA_41BF_00FF6911FC7E"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": -115.71,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_D42DF1A5_DB63_0832_41B8_A748DCCA2514",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_D42DF1A5_DB63_0832_41B8_A748DCCA2514_0_1.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 768
   }
  ]
 },
 "pitch": -0.68,
 "hideEasing": "cubic_out",
 "hfov": 22.02
},
{
 "initialPosition": {
  "yaw": -143.05,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_744E68C2_7B16_EF3E_41D7_D832A609BB35"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA346B9_F6D4_E36A_41E8_FB37D8789519_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FCA346B9_F6D4_E36A_41E8_FB37D8789519_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FCA346B9_F6D4_E36A_41E8_FB37D8789519_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCA346B9_F6D4_E36A_41E8_FB37D8789519_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA346B9_F6D4_E36A_41E8_FB37D8789519_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FCA346B9_F6D4_E36A_41E8_FB37D8789519_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FCA346B9_F6D4_E36A_41E8_FB37D8789519_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCA346B9_F6D4_E36A_41E8_FB37D8789519_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA346B9_F6D4_E36A_41E8_FB37D8789519_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FCA346B9_F6D4_E36A_41E8_FB37D8789519_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FCA346B9_F6D4_E36A_41E8_FB37D8789519_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCA346B9_F6D4_E36A_41E8_FB37D8789519_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA346B9_F6D4_E36A_41E8_FB37D8789519_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FCA346B9_F6D4_E36A_41E8_FB37D8789519_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FCA346B9_F6D4_E36A_41E8_FB37D8789519_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCA346B9_F6D4_E36A_41E8_FB37D8789519_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_FCA346B9_F6D4_E36A_41E8_FB37D8789519_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA346B9_F6D4_E36A_41E8_FB37D8789519_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FCA346B9_F6D4_E36A_41E8_FB37D8789519_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FCA346B9_F6D4_E36A_41E8_FB37D8789519_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCA346B9_F6D4_E36A_41E8_FB37D8789519_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA346B9_F6D4_E36A_41E8_FB37D8789519_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FCA346B9_F6D4_E36A_41E8_FB37D8789519_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FCA346B9_F6D4_E36A_41E8_FB37D8789519_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCA346B9_F6D4_E36A_41E8_FB37D8789519_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "\u0e20\u0e32\u0e1e\u0e17\u0e3514",
 "hfovMin": "135%",
 "id": "panorama_FCA346B9_F6D4_E36A_41E8_FB37D8789519",
 "overlays": [
  "this.overlay_1A29A2A6_0643_F2F4_4190_EB54538BB52F",
  "this.overlay_1AD7C2D4_0642_7254_4185_36408BD4F94C",
  "this.overlay_1E44A24E_3F2E_96F8_41B6_0CA1D0BDB22C"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -28.33,
   "class": "AdjacentPanorama",
   "backwardYaw": 161.68,
   "panorama": "this.panorama_FCA56EEA_F6D4_A0EE_41E0_B66C2536057D",
   "distance": 1
  },
  {
   "yaw": 55.41,
   "class": "AdjacentPanorama",
   "backwardYaw": -128.23,
   "panorama": "this.panorama_FCA4CB49_F6D4_A12D_41A1_AD6390F9B90D",
   "distance": 1
  },
  {
   "yaw": -99.34,
   "class": "AdjacentPanorama",
   "backwardYaw": 69.12,
   "panorama": "this.panorama_FCA4B893_F6D4_EF3D_41E8_B23814B283CC",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_FCA346B9_F6D4_E36A_41E8_FB37D8789519_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 150.31,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_7666362F_7B16_E345_41CE_1C3887CF5626",
 "manualRotationSpeed": 1014
},
{
 "levels": [
  {
   "url": "media/popup_2ED773A7_3F5A_6554_4193_4E1BD9295AEA_0_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 900
  },
  {
   "url": "media/popup_2ED773A7_3F5A_6554_4193_4E1BD9295AEA_0_1.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 768
  },
  {
   "url": "media/popup_2ED773A7_3F5A_6554_4193_4E1BD9295AEA_0_2.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 384
  }
 ],
 "id": "ImageResource_2EDE12D9_3F5A_A4FD_41B6_3968CE4A73A1",
 "class": "ImageResource"
},
{
 "viewerArea": "this.MainViewer",
 "buttonNext": "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "id": "MainViewerPhotoAlbumPlayer",
 "class": "PhotoAlbumPlayer",
 "buttonPrevious": "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482"
},
{
 "initialPosition": {
  "yaw": -140.41,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_741AB844_7B16_EF3A_41C9_FC0153B30E60"
},
{
 "initialPosition": {
  "yaw": -115.54,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_764F35F4_7B16_E0DA_41D7_888A84DB36A8"
},
{
 "initialPosition": {
  "yaw": 64.83,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_6B4EE55E_7B16_E1C6_41A8_50EA0356FAAB"
},
{
 "initialPosition": {
  "yaw": -117.19,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_7687266C_7B16_E3CA_41C4_F04916C78C88"
},
{
 "initialPosition": {
  "yaw": -29.65,
  "class": "PanoramaCameraPosition",
  "pitch": 18.67
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_FCA346B9_F6D4_E36A_41E8_FB37D8789519_camera"
},
{
 "initialPosition": {
  "yaw": -33.77,
  "class": "PanoramaCameraPosition",
  "pitch": 22.79
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_FCB069C1_F6D4_A11D_41B4_D58FFB70AFAE_camera"
},
{
 "progressBarBorderSize": 0,
 "id": "MainViewer",
 "left": 0,
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "paddingLeft": 0,
 "playbackBarProgressBorderColor": "#000000",
 "minHeight": 50,
 "toolTipFontFamily": "DRboran",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "class": "ViewerArea",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "transitionDuration": 500,
 "minWidth": 100,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "toolTipFontColor": "#606060",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "borderSize": 0,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "toolTipBackgroundColor": "#F6F6F6",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 0,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "show": "this.playGlobalAudio(this.audio_2A88D526_3F7B_ED57_41AA_8C9AF950CAA1)",
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "paddingRight": 0,
 "progressBorderRadius": 0,
 "borderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "top": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 5,
 "toolTipShadowVerticalLength": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "toolTipShadowBlurRadius": 3,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBorderColor": "#000000",
 "toolTipPaddingBottom": 4,
 "paddingBottom": 0,
 "toolTipFontSize": "12px",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadShadowVerticalLength": 0,
 "data": {
  "name": "Main Viewer"
 },
 "playbackBarHeight": 10,
 "toolTipFontWeight": "normal",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "horizontalAlign": "left",
 "itemLabelPosition": "bottom",
 "id": "ThumbnailList_2DA7B5FF_3F4B_ECB5_41C8_2350C73E7421",
 "left": "1.57%",
 "width": 131,
 "itemBorderRadius": 0,
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "itemVerticalAlign": "middle",
 "paddingLeft": 20,
 "itemPaddingLeft": 3,
 "minHeight": 20,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "ThumbnailList",
 "verticalAlign": "top",
 "itemOpacity": 1,
 "height": "68.357%",
 "playList": "this.ThumbnailList_2DA7B5FF_3F4B_ECB5_41C8_2350C73E7421_playlist",
 "itemThumbnailShadowSpread": 1,
 "minWidth": 20,
 "itemBackgroundColor": [],
 "itemThumbnailOpacity": 1,
 "itemBackgroundColorRatios": [],
 "itemPaddingTop": 3,
 "borderSize": 0,
 "itemPaddingRight": 3,
 "rollOverItemBackgroundOpacity": 0,
 "rollOverItemLabelFontWeight": "bold",
 "itemThumbnailShadowOpacity": 0.54,
 "scrollBarColor": "#FFFFFF",
 "shadow": false,
 "itemLabelTextDecoration": "none",
 "itemBackgroundOpacity": 0,
 "selectedItemLabelFontColor": "#FFCC00",
 "scrollBarOpacity": 0.5,
 "itemLabelFontWeight": "normal",
 "layout": "vertical",
 "itemThumbnailHeight": 75,
 "scrollBarVisible": "rollOver",
 "itemThumbnailScaleMode": "fit_outside",
 "itemLabelFontSize": 14,
 "itemThumbnailShadowBlurRadius": 8,
 "paddingRight": 20,
 "itemLabelGap": 8,
 "borderRadius": 5,
 "itemBackgroundColorDirection": "vertical",
 "itemThumbnailShadow": true,
 "bottom": "13.78%",
 "itemThumbnailWidth": 75,
 "itemLabelFontColor": "#FFFFFF",
 "itemHorizontalAlign": "center",
 "gap": 13,
 "itemThumbnailShadowVerticalLength": 3,
 "selectedItemLabelFontWeight": "bold",
 "itemThumbnailShadowColor": "#000000",
 "paddingBottom": 10,
 "itemPaddingBottom": 3,
 "itemLabelHorizontalAlign": "center",
 "itemLabelFontStyle": "normal",
 "itemMode": "normal",
 "paddingTop": 10,
 "data": {
  "name": "ThumbnailList35762"
 },
 "itemThumbnailShadowHorizontalLength": 3,
 "itemThumbnailBorderRadius": 5,
 "itemLabelFontFamily": "Arial"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_2FB3FCBB_3D08_4DF5_4162_C18A37E4C23C",
 "left": "0.06%",
 "children": [
  "this.Label_2F6118C5_3D08_F59D_41C4_11987998A9C9",
  "this.Label_2ED1BA17_3D18_54BD_41CA_B3CE5075FA84"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "width": "29.513%",
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "class": "Container",
 "top": "0.09%",
 "borderRadius": 0,
 "height": "15.311%",
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "text"
 },
 "shadow": false,
 "show": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false); this.setComponentVisibility(this.Container_1812EA3F_1663_8BEF_41AF_0A4CCC089B5F, false, 0, null, null, false); this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false); this.setComponentVisibility(this.Container_0DEC3FED_12FA_D26D_419F_4067E8C6DA08, false, 0, null, null, false)"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_32CC4EA6_16EF_8891_41B3_C36F5FCE49B7",
 "left": "0%",
 "children": [
  "this.Image_9511127C_9B79_D2C1_41D8_D080B87BFD84",
  "this.Container_9A7696F9_9256_4198_41E2_40E7CF09A427",
  "this.IconButton_30AC9FB1_16E7_88F3_41B2_18944AAAD6FA"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "overflow": "visible",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "class": "Container",
 "verticalAlign": "top",
 "bottom": "0%",
 "height": "8.983%",
 "minWidth": 1,
 "layout": "absolute",
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--- MENU"
 },
 "shadow": false,
 "backgroundImageUrl": "skin/Container_32CC4EA6_16EF_8891_41B3_C36F5FCE49B7.png"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "backgroundOpacity": 0,
 "width": 121.05,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "propagateClick": false,
 "class": "Container",
 "top": "0.88%",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "height": 687,
 "minWidth": 1,
 "layout": "absolute",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-- SETTINGS"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_04FE7C2D_1216_75ED_4197_E539B3CD3A95",
 "left": "0%",
 "children": [
  "this.Container_04FF5C2C_1216_7593_41B2_1B5CFADF351D",
  "this.Container_04FF9C2D_1216_75ED_41A8_E3495D8F554E"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "top": "0%",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "click": "this.setComponentVisibility(this.Container_04FE7C2D_1216_75ED_4197_E539B3CD3A95, false, 0, null, null, false)",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "contentOpaque": false,
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "--INFO"
 },
 "shadow": false,
 "visible": false,
 "gap": 10
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "top": "0%",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--PANORAMA LIST"
 },
 "shadow": false,
 "visible": false,
 "gap": 10
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_1812EA3F_1663_8BEF_41AF_0A4CCC089B5F",
 "left": "0%",
 "children": [
  "this.Container_1813AA3E_1663_8BF1_41A2_CA5EE3718362",
  "this.Container_1812AA3F_1663_8BEF_41A4_02F566B1BC6D"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "top": "0%",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "click": "this.setComponentVisibility(this.Container_1812EA3F_1663_8BEF_41AF_0A4CCC089B5F, false, 0, null, null, false)",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--LOCATION"
 },
 "shadow": false,
 "visible": false,
 "gap": 10
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
 "left": "0%",
 "children": [
  "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "top": "0%",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--FLOORPLAN"
 },
 "shadow": false,
 "visible": false,
 "gap": 10
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "left": "0%",
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "top": "0%",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--PHOTOALBUM"
 },
 "shadow": false,
 "visible": false,
 "gap": 10
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0DEC3FED_12FA_D26D_419F_4067E8C6DA08",
 "left": "0%",
 "children": [
  "this.Container_0DEF7FEC_12FA_D293_4197_332CA20EDBCF",
  "this.Container_0DEC1FED_12FA_D26D_41AE_8CE7699C44D8"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "top": "0%",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "click": "this.setComponentVisibility(this.Container_0DEC3FED_12FA_D26D_419F_4067E8C6DA08, false, 0, null, null, false)",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--CONTACT"
 },
 "shadow": false,
 "visible": false,
 "gap": 10
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_88BCD1D1_901E_7E07_41CF_8C0D5687069A",
 "left": "0%",
 "children": [
  "this.Container_88BC91D1_901E_7E07_41D9_A20DEBA4D3B3",
  "this.Container_88BCF1D1_901E_7E07_41CD_1761465E05A3"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "top": "0%",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "click": "this.setComponentVisibility(this.Container_88BCD1D1_901E_7E07_41CF_8C0D5687069A, false, 0, null, null, false)",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--LOCATION3"
 },
 "shadow": false,
 "visible": false,
 "gap": 10
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_23233B1A_31FC_4D4B_41A9_49E61F73EA68",
 "left": "0%",
 "children": [
  "this.Container_23C46705_31FC_4539_41A4_0918401BF401",
  "this.Container_23517DC2_31FD_C53B_4195_E6F65D423CBB"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "click": "this.setComponentVisibility(this.Container_23233B1A_31FC_4D4B_41A9_49E61F73EA68, false, 0, null, null, false)",
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": "99.746%",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--ebook"
 },
 "shadow": false,
 "visible": false,
 "gap": 10
},
{
 "id": "veilPopupPanorama",
 "left": 0,
 "showEffect": {
  "duration": 350,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "backgroundOpacity": 0.55,
 "right": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 0,
 "class": "UIComponent",
 "top": 0,
 "bottom": 0,
 "backgroundColor": [
  "#000000"
 ],
 "minWidth": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "data": {
  "name": "UIComponent1484"
 },
 "shadow": false,
 "visible": false
},
{
 "id": "zoomImagePopupPanorama",
 "left": 0,
 "backgroundOpacity": 1,
 "right": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "backgroundColorRatios": [],
 "propagateClick": false,
 "minHeight": 0,
 "class": "ZoomImage",
 "top": 0,
 "bottom": 0,
 "backgroundColor": [],
 "minWidth": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "scaleMode": "custom",
 "data": {
  "name": "ZoomImage1485"
 },
 "shadow": false,
 "visible": false
},
{
 "textDecoration": "none",
 "fontFamily": "Arial",
 "horizontalAlign": "center",
 "id": "closeButtonPopupPanorama",
 "backgroundOpacity": 0.3,
 "showEffect": {
  "duration": 350,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "shadowColor": "#000000",
 "right": 10,
 "iconHeight": 20,
 "paddingRight": 5,
 "paddingLeft": 5,
 "borderRadius": 0,
 "iconColor": "#000000",
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "propagateClick": false,
 "minHeight": 0,
 "class": "CloseButton",
 "top": 10,
 "verticalAlign": "middle",
 "rollOverIconColor": "#666666",
 "pressedIconColor": "#888888",
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "borderColor": "#000000",
 "minWidth": 0,
 "mode": "push",
 "fontSize": "1.29vmin",
 "paddingTop": 5,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 5,
 "label": "",
 "fontStyle": "normal",
 "borderSize": 0,
 "iconLineWidth": 5,
 "gap": 5,
 "layout": "horizontal",
 "data": {
  "name": "CloseButton1486"
 },
 "shadow": false,
 "iconWidth": 20,
 "visible": false,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "horizontalAlign": "center",
 "maxWidth": 58,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "backgroundOpacity": 0,
 "maxHeight": 58,
 "width": 58,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "class": "IconButton",
 "verticalAlign": "middle",
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "IconButton MUTE"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxWidth": 58,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "backgroundOpacity": 0,
 "maxHeight": 58,
 "width": 58,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "class": "IconButton",
 "verticalAlign": "middle",
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "cursor": "hand"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 17.61,
   "yaw": -30.68,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCB069C1_F6D4_A11D_41B4_D58FFB70AFAE_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.76
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_FCA50949_F6D4_612A_41CC_65AF6127F229, this.camera_75F4E7F7_7B16_E0C6_41D7_AED29177B9A0); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_EA2046DC_FB42_0890_41E8_9F9974E39A53",
   "pitch": -3.76,
   "hfov": 17.61,
   "yaw": -30.68,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_F5AFDD20_FB42_19B0_41E9_E7FE972F2109",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.55,
   "yaw": -99.21,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCB069C1_F6D4_A11D_41B4_D58FFB70AFAE_0_HS_1_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.62
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_FC217FE0_F6D7_A11B_41EA_38827B03EC94, this.camera_75D797CF_7B16_E0C6_41D8_EC500A4D5AA1); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_164194F7_05C2_3654_4195_4AD9E1B4FE6B",
   "pitch": -11.62,
   "hfov": 14.55,
   "yaw": -99.21,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_0B03F9F3_05C6_3E6D_4191_CDF3D57BC117",
 "data": {
  "label": "Circle Point 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.65,
   "yaw": 36.95,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCB069C1_F6D4_A11D_41B4_D58FFB70AFAE_0_HS_2_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.48
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_FCA66D0A_F6D7_A12F_41D3_F7A4F25CD0FE, this.camera_75C417DE_7B16_E0C6_41DC_C33829190787); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_164E24F7_05C2_3654_4132_0703384B3966",
   "pitch": -9.48,
   "hfov": 14.65,
   "yaw": 36.95,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_0B03A74A_05C6_33BF_4196_54CD0DF1043D",
 "data": {
  "label": "Circle Point 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.41,
   "yaw": 147.34,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCB069C1_F6D4_A11D_41B4_D58FFB70AFAE_0_HS_3_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.02
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_FCBC1D7C_F6D4_E1EB_41E1_A702CEA4A43F, this.camera_75E4C811_7B16_EF5A_41D8_7092BBB3049D); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_164E64F7_05C2_3654_4183_03CC30D5E4B3",
   "pitch": -17.02,
   "hfov": 14.41,
   "yaw": 147.34,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_0A958CEE_05C6_3677_418E_A616755080DE",
 "data": {
  "label": "Arrow 06b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.49,
   "yaw": 28.53,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA53B21_F6D4_611D_41DE_C4B1A6849AF8_0_HS_0_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.35
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_FC217FE0_F6D7_A11B_41EA_38827B03EC94, this.camera_75EAD82A_7B16_EF4F_41B8_AB62C782E8D8); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_2700F526_3D72_F2A8_41BE_145728E0EA8D",
   "pitch": -7.35,
   "hfov": 14.49,
   "yaw": 28.53,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_2BFB2450_3D71_B2E7_41CA_035F824E0DA6",
 "data": {
  "label": "Circle Point 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.07,
   "yaw": -115.17,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA53B21_F6D4_611D_41DE_C4B1A6849AF8_0_HS_1_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.64
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_FCA528A4_F6D4_6F1B_41ED_942C08D16866, this.camera_741AB844_7B16_EF3A_41C9_FC0153B30E60); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_271F1526_3D72_F2A8_41A5_AE716EAD9FDA",
   "pitch": -15.64,
   "hfov": 14.07,
   "yaw": -115.17,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_2A061E66_3D71_EEA8_4190_5468DC692B28",
 "data": {
  "label": "Circle Point 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.77,
   "yaw": -120.32,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA53B21_F6D4_611D_41DE_C4B1A6849AF8_0_HS_2_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.59
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_FCA56553_F6D5_A13D_41D6_27B8C7E3AB13, this.camera_7408285D_7B16_EFCA_41BC_F0930C2D4649); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_271F6527_3D72_F2A8_41C7_A5775D6192B0",
   "pitch": -6.59,
   "hfov": 9.77,
   "yaw": -120.32,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_2BF7F5D9_3D71_7D98_41CB_12EA02EC8146",
 "data": {
  "label": "Circle Point 01c"
 }
},
{
 "horizontalAlign": "center",
 "maxWidth": 58,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "backgroundOpacity": 0,
 "maxHeight": 58,
 "width": 58,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "class": "IconButton",
 "verticalAlign": "middle",
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "IconButton HS "
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxWidth": 58,
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "backgroundOpacity": 0,
 "maxHeight": 58,
 "width": 58,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "class": "IconButton",
 "verticalAlign": "middle",
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "IconButton GYRO"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxWidth": 49,
 "id": "IconButton_30AC9FB1_16E7_88F3_41B2_18944AAAD6FA",
 "backgroundOpacity": 0,
 "maxHeight": 37,
 "right": 30,
 "width": 49,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_30AC9FB1_16E7_88F3_41B2_18944AAAD6FA_rollover.png",
 "propagateClick": false,
 "class": "IconButton",
 "verticalAlign": "middle",
 "bottom": 8,
 "height": 37,
 "minWidth": 1,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_30AC9FB1_16E7_88F3_41B2_18944AAAD6FA.png",
 "transparencyActive": true,
 "shadow": false,
 "visible": false,
 "data": {
  "name": "IconButton VR"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxWidth": 58,
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "backgroundOpacity": 0,
 "maxHeight": 58,
 "width": 58,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "propagateClick": false,
 "class": "IconButton",
 "verticalAlign": "middle",
 "height": 58,
 "minWidth": 1,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "transparencyActive": true,
 "shadow": false,
 "visible": false,
 "data": {
  "name": "IconButton VR"
 },
 "cursor": "hand"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.11,
   "yaw": -29.69,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FD815AAE_F6D4_E367_418C_B5D1094DAF3E_0_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.62
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_FCBC1D7C_F6D4_E1EB_41E1_A702CEA4A43F, this.camera_756F9786_7B16_E146_41D6_04AA492283FC); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_E8BDA6F0_FB4E_0890_41E7_3398A7E027E0",
   "pitch": -6.62,
   "hfov": 10.11,
   "yaw": -29.69,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E4026CBD_F6F3_A765_41E7_082A72EC8296",
 "data": {
  "label": "Arrow 06b"
 },
 "enabled": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.94,
   "yaw": -108.4,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FD815AAE_F6D4_E367_418C_B5D1094DAF3E_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 8.98
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_2E3AF280_3F5A_A74B_41C7_B9CCCDB4C9B8",
   "pitch": 8.98,
   "hfov": 7.94,
   "yaw": -108.4,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_1DF1E55D_3F11_F298_41CA_D2A95D9FA0CA",
 "data": {
  "label": "Info Red 03"
 },
 "enabled": false
},
{
 "bleachingDistance": 0.4,
 "yaw": -112.17,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 13.88,
 "bleaching": 0.7,
 "id": "overlay_192318E4_3FEE_93A8_41C8_240F5DA80E62"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 22.51,
   "yaw": -115.71,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FD815AAE_F6D4_E367_418C_B5D1094DAF3E_0_HS_3_1_0_map.gif",
      "width": 175,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -0.68
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_D42DF1A5_DB63_0832_41B8_A748DCCA2514, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_C8FC7A96_DB67_1811_41E2_550D2C2DC1B0, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 22.51,
   "roll": 0,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FD815AAE_F6D4_E367_418C_B5D1094DAF3E_0_HS_3_0.png",
      "width": 486,
      "class": "ImageResourceLevel",
      "height": 554
     }
    ]
   },
   "pitch": -0.68,
   "yaw": -115.71,
   "distance": 50
  }
 ],
 "id": "overlay_815F0FCA_8FE5_C204_41C2_16D90244C9FB",
 "data": {
  "label": "Polygon"
 }
},
{
 "useHandCursor": false,
 "maps": [
  {
   "width": 127.08,
   "yaw": 81.69,
   "class": "FlatHotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FD815AAE_F6D4_E367_418C_B5D1094DAF3E_0_HS_4_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.67,
   "offsetY": 47.66,
   "height": 95.31,
   "offsetX": 63.54
  }
 ],
 "class": "FlatHotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.AnimatedImageResource_7630FAFE_7B12_20C6_41D0_EEF639A54DCE.play()",
   "class": "FlatHotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": false,
 "items": [
  {
   "offsetY": 47.66,
   "width": 127.08,
   "class": "FlatHotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7630FAFE_7B12_20C6_41D0_EEF639A54DCE",
   "pitch": -1.67,
   "yaw": 81.69,
   "height": 95.31,
   "offsetX": 63.54
  }
 ],
 "id": "overlay_3AA7F39E_3402_0F00_41C5_80BE24EC429D",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.63,
   "yaw": -27.52,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCBC1D7C_F6D4_E1EB_41E1_A702CEA4A43F_0_HS_2_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.43
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_FCB069C1_F6D4_A11D_41B4_D58FFB70AFAE, this.camera_7675C603_7B16_E33D_41D2_E711D5A0BE10); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_EF2F3FC6_FB46_18F0_41DA_D36EFA420A01",
   "pitch": -6.43,
   "hfov": 12.63,
   "yaw": -27.52,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E22992E1_F6F5_E31D_41E0_12DDF1FCEE42",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.3,
   "yaw": 154.37,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCBC1D7C_F6D4_E1EB_41E1_A702CEA4A43F_0_HS_3_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.62
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_FD815AAE_F6D4_E367_418C_B5D1094DAF3E, this.camera_7666362F_7B16_E345_41CE_1C3887CF5626); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_EF2F5FC6_FB46_18F0_41D3_04C41D515F06",
   "pitch": -18.62,
   "hfov": 12.3,
   "yaw": 154.37,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_F5013F06_FB3E_3970_41DD_576673C1575A",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.4,
   "yaw": -105.74,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCBC1D7C_F6D4_E1EB_41E1_A702CEA4A43F_0_HS_4_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.44
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_FCA7DBF4_F6D7_A0FA_41E5_BA666E5CACE5, this.camera_7673E612_7B16_E35E_41D7_C5A058D2593D); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_EF2CEFC7_FB46_18F0_41B6_8AE08985AA5E",
   "pitch": -13.44,
   "hfov": 14.4,
   "yaw": -105.74,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E8E6569E_FB42_0891_41B3_02CDEBB02D6E",
 "data": {
  "label": "19"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.72,
   "yaw": 38.39,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCBC1D7C_F6D4_E1EB_41E1_A702CEA4A43F_0_HS_5_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.17
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_FDF55F2D_F6D7_A16A_41E9_3BB4418749A0, this.camera_7678C621_7B16_E37A_41DB_05678F533270); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_EF2C2FC7_FB46_18F0_41C3_5279960014B1",
   "pitch": -11.17,
   "hfov": 13.72,
   "yaw": 38.39,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E8299038_FB42_0790_41D7_651625D70CED",
 "data": {
  "label": "Circle Point 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.91,
   "yaw": 17.48,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA4D2A9_F6D4_A36A_41D9_85B9D4C4B9F2_0_HS_0_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.86
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_FCA50949_F6D4_612A_41CC_65AF6127F229, this.camera_6B52853F_7B16_E146_41CD_F5130E82EE36); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1C771A63_05C2_126C_4177_5B54CAE51417",
   "pitch": -9.86,
   "hfov": 12.91,
   "yaw": 17.48,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_1322261F_05C2_15D4_418D_5BB72376CF04",
 "data": {
  "label": "2"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.67,
   "yaw": 113.57,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA4D2A9_F6D4_A36A_41D9_85B9D4C4B9F2_0_HS_1_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.73
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_FCA56EEA_F6D4_A0EE_41E0_B66C2536057D, this.camera_6B25751E_7B16_E146_41CE_A267E9EED3CD); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1C777A63_05C2_126C_418E_8D394ED379D2",
   "pitch": -8.73,
   "hfov": 16.67,
   "yaw": 113.57,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_12FE4AC0_05CE_12AB_418B_9F80CA48577C",
 "data": {
  "label": "1"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.72,
   "yaw": -59.9,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA4D2A9_F6D4_A36A_41D9_85B9D4C4B9F2_0_HS_2_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.26
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1C77AA63_05C2_126C_418C_0879076D3A31",
   "pitch": -14.26,
   "hfov": 11.72,
   "yaw": -59.9,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_13215DA6_05CE_76F4_4197_1E173E8E1FBE",
 "data": {
  "label": "3"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.19,
   "yaw": -119.31,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA4D2A9_F6D4_A36A_41D9_85B9D4C4B9F2_0_HS_3_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -22.55
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_FCA50179_F6D4_A1EA_41C4_D9C52C70FA89, this.camera_6B2F8530_7B16_E15A_41CE_91899C4E62CF); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1C760A64_05C2_1274_4194_8761F1A1BE2D",
   "pitch": -22.55,
   "hfov": 14.19,
   "yaw": -119.31,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_13483FEA_05CE_327C_4154_1F4979CF80E6",
 "data": {
  "label": "4"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.23,
   "yaw": -166.67,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA4D2A9_F6D4_A36A_41D9_85B9D4C4B9F2_0_HS_4_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.5
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1CCA6146_05DE_2FB7_4192_91388E697815",
   "pitch": -13.5,
   "hfov": 13.23,
   "yaw": -166.67,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_1F0EFA3A_05C6_3DDC_4184_EF1EE0D97779",
 "data": {
  "label": "5"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.54,
   "yaw": -132.22,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA66D0A_F6D7_A12F_41D3_F7A4F25CD0FE_0_HS_0_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.75
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_FCB069C1_F6D4_A11D_41B4_D58FFB70AFAE, this.camera_744E68C2_7B16_EF3E_41D7_D832A609BB35); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1D34F0C7_05C2_2EB5_4174_F84784C55CE8",
   "pitch": -12.75,
   "hfov": 12.54,
   "yaw": -132.22,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_1764AB3E_05DE_13D4_4192_C06427D09EB5",
 "data": {
  "label": "1"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.01,
   "yaw": 24.5,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA66D0A_F6D7_A12F_41D3_F7A4F25CD0FE_0_HS_1_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.7
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_FCA5FE4B_F6D4_A32E_41D5_48F03BD57F7A, this.camera_747D88DC_7B16_E0CA_41BF_00FF6911FC7E); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1D3490C7_05C2_2EB5_418F_59C18245DD2F",
   "pitch": -6.7,
   "hfov": 9.01,
   "yaw": 24.5,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_1649E660_05DE_126B_4196_547143F7B544",
 "data": {
  "label": "2"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.11,
   "yaw": -121.24,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA66D0A_F6D7_A12F_41D3_F7A4F25CD0FE_0_HS_2_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.88
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1D3430C8_05C2_2EBB_4162_05F93843241C",
   "pitch": -5.88,
   "hfov": 8.11,
   "yaw": -121.24,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_1762078A_05DE_12BC_4193_BA48F5365B70",
 "data": {
  "label": "Circle Point 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.18,
   "yaw": 50.39,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA7DBF4_F6D7_A0FA_41E5_BA666E5CACE5_0_HS_0_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.88
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_FCBC1D7C_F6D4_E1EB_41E1_A702CEA4A43F, this.camera_6B5BF550_7B16_E1DA_41D9_1A43EE9570FC); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_11BD6FAD_05CE_F2F4_4187_C2CB723DB143",
   "pitch": -13.88,
   "hfov": 14.18,
   "yaw": 50.39,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_15BB92B0_05CE_F2EB_4185_8A30B959DEF2",
 "data": {
  "label": "Circle Point 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.29,
   "yaw": -15.7,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA7DBF4_F6D7_A0FA_41E5_BA666E5CACE5_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.87
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_1FC0960C_3F31_FE78_41CB_CF9DC7CBAF44, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_1FBB265F_3F17_BE98_4197_61A586B5BCF5, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1FE8761D_3F17_BE98_41C6_2ED86D232CE7",
   "pitch": -11.87,
   "hfov": 12.29,
   "yaw": -15.7,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_1E5F3BD1_3F36_95E8_41BE_F57E56104CEA",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.32,
   "yaw": -11.54,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA7DBF4_F6D7_A0FA_41E5_BA666E5CACE5_0_HS_4_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.45
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1A143BF6_3F12_95A8_41CE_EAFA0F124615",
   "pitch": -3.45,
   "hfov": 10.32,
   "yaw": -11.54,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_1C7C7BCF_3F1F_95F8_41CE_CBB2D3133910",
 "data": {
  "label": "Circle Point 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 36.99,
   "yaw": -28.53,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA7DBF4_F6D7_A0FA_41E5_BA666E5CACE5_0_HS_5_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 113
     }
    ]
   },
   "pitch": -22.43
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_D4C50A50_DB61_1810_41E5_DECF913FDE16, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_C8C7FA9C_DB67_1810_41DC_E5EA785CEF00, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 36.99,
   "roll": 0,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA7DBF4_F6D7_A0FA_41E5_BA666E5CACE5_0_HS_5_0.png",
      "width": 817,
      "class": "ImageResourceLevel",
      "height": 463
     }
    ]
   },
   "pitch": -22.43,
   "yaw": -28.53,
   "distance": 50
  }
 ],
 "id": "overlay_9F213916_8FEE_4E0C_41D1_32EDBA4C6620",
 "data": {
  "label": "Polygon"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.28,
   "yaw": -116.8,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA4CB49_F6D4_A12D_41A1_AD6390F9B90D_0_HS_1_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.09
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_FCA4B893_F6D4_EF3D_41E8_B23814B283CC, this.camera_7687266C_7B16_E3CA_41C4_F04916C78C88); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1ABBB570_05C6_366B_4173_40B9069BE818",
   "pitch": -6.09,
   "hfov": 8.28,
   "yaw": -116.8,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_1C21F08A_05C2_EEBF_4172_A2598903D99B",
 "data": {
  "label": "Circle Point 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.01,
   "yaw": 21.75,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA4CB49_F6D4_A12D_41A1_AD6390F9B90D_0_HS_2_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.72
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_FCA56553_F6D5_A13D_41D6_27B8C7E3AB13, this.camera_76BC968A_7B16_E34E_41C4_1AA15ACFE60D); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1A5AB670_05C2_126B_4196_FD1024C358F0",
   "pitch": -6.72,
   "hfov": 13.01,
   "yaw": 21.75,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_1F46B643_05C2_15AD_4175_D45C55821173",
 "data": {
  "label": "Circle Point 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.67,
   "yaw": -128.23,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA4CB49_F6D4_A12D_41A1_AD6390F9B90D_0_HS_3_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.76
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_FCA346B9_F6D4_E36A_41E8_FB37D8789519, this.camera_768A067B_7B16_E3CE_41D4_9B874DC759C8); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1ABA6570_05C6_366B_418F_F4EDA0415F29",
   "pitch": -14.76,
   "hfov": 12.67,
   "yaw": -128.23,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_1FEF9F96_05CE_32D7_418D_358C768C7AE6",
 "data": {
  "label": "Circle Point 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.38,
   "yaw": 39.59,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA528A4_F6D4_6F1B_41ED_942C08D16866_0_HS_0_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.99
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_FCA53B21_F6D4_611D_41DE_C4B1A6849AF8, this.camera_6B4EE55E_7B16_E1C6_41A8_50EA0356FAAB); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_274EAB18_3D12_B667_41A8_C3FE12C9D162",
   "pitch": -10.99,
   "hfov": 11.38,
   "yaw": 39.59,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_2A813B47_3D6F_76E8_41CD_44337F9B141A",
 "data": {
  "label": "Circle Point 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.37,
   "yaw": -92.56,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA528A4_F6D4_6F1B_41ED_942C08D16866_0_HS_1_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.24
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_FCA56553_F6D5_A13D_41D6_27B8C7E3AB13, this.camera_6B71256D_7B16_E1C5_41D2_278163D8B729); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_274D1B18_3D12_B667_41C8_A84DB9366DFF",
   "pitch": -11.24,
   "hfov": 11.37,
   "yaw": -92.56,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_25354E8D_3D6F_EE78_41C2_FD554ACD84FE",
 "data": {
  "label": "Circle Point 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.62,
   "yaw": -27.46,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA528A4_F6D4_6F1B_41ED_942C08D16866_0_HS_2_0_0_map.gif",
      "width": 22,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.2
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_FCA53548_F6D4_612A_41BB_D48002FC4710, this.camera_6B7BB57D_7B16_E1CA_41D0_5938D5ADD0B4); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1FDFA637_3F17_BEA8_41C6_7D98CDEBFCC5",
   "pitch": -3.2,
   "hfov": 10.62,
   "yaw": -27.46,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_1D3057EB_3F16_9DB8_41B2_F6C934FEB4E1",
 "data": {
  "label": "Arrow 04a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.77,
   "yaw": -113.08,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA51430_F6D4_A77A_41E9_F0A0E79636A3_0_HS_0_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.67
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_FCA5FE4B_F6D4_A32E_41D5_48F03BD57F7A, this.camera_764F35F4_7B16_E0DA_41D7_888A84DB36A8); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_2B03A229_3D71_96B8_419D_3677DB369B4C",
   "pitch": -4.67,
   "hfov": 6.77,
   "yaw": -113.08,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_2F8A28F0_3D72_B3A8_41C5_2F9EA9F69940",
 "data": {
  "label": "2"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 19.65,
   "yaw": -104.87,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA51430_F6D4_A77A_41E9_F0A0E79636A3_0_HS_1_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.56
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_FCA50179_F6D4_A1EA_41C4_D9C52C70FA89, this.camera_764C25E3_7B16_E0FD_41DE_138E74FA7C73); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_25AECA13_3D76_9669_41B0_D4CE785360AB",
   "pitch": -12.56,
   "hfov": 19.65,
   "yaw": -104.87,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_2F871A8B_3D73_967F_41B9_B551757E5355",
 "data": {
  "label": "1"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 19.96,
   "yaw": 16.71,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA51430_F6D4_A77A_41E9_F0A0E79636A3_0_HS_2_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.52
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_FCA4B893_F6D4_EF3D_41E8_B23814B283CC, this.camera_764055D4_7B16_E0DA_41D1_B35B96DE2710); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_2429D18A_3D17_F278_41CA_A06A3B946C2A",
   "pitch": -7.52,
   "hfov": 19.96,
   "yaw": 16.71,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_24C798E7_3D16_F3A9_41C6_D6DAFDFDDEDE",
 "data": {
  "label": "1"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.96,
   "yaw": 64.46,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA5FE4B_F6D4_A32E_41D5_48F03BD57F7A_0_HS_0_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.86
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_FCA51430_F6D4_A77A_41E9_F0A0E79636A3, this.camera_7493E90B_7B16_E14E_41C7_4A6CE9D04858); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_2701C526_3D72_F2A8_41CE_5B496ABADDEF",
   "pitch": -8.86,
   "hfov": 9.96,
   "yaw": 64.46,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_283E1286_3D7E_B668_419A_E4A2DF8D58A7",
 "data": {
  "label": "Circle Point 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.56,
   "yaw": 64.96,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA5FE4B_F6D4_A32E_41D5_48F03BD57F7A_0_HS_1_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.65
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_FCA50179_F6D4_A1EA_41C4_D9C52C70FA89, this.camera_7483591C_7B16_E14A_41DB_7D1AA9450558); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_2A3841B3_3D73_95A9_41B1_BB205A350205",
   "pitch": -18.65,
   "hfov": 9.56,
   "yaw": 64.96,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_2B50ECCC_3D7E_93F8_41C8_B0B130EE7299",
 "data": {
  "label": "Circle Point 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.04,
   "yaw": -78.24,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA5FE4B_F6D4_A32E_41D5_48F03BD57F7A_0_HS_2_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.59
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_FCA66D0A_F6D7_A12F_41D3_F7A4F25CD0FE, this.camera_746D88F7_7B16_E0C6_41BD_FE2ED6A55BE6); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_2A3821B3_3D73_95A9_41BD_A746EF10350E",
   "pitch": -5.59,
   "hfov": 10.04,
   "yaw": -78.24,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_2877756B_3D71_92B8_41B2_80F98EFAF65A",
 "data": {
  "label": "Circle Point 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.19,
   "yaw": -77.37,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA50949_F6D4_612A_41CC_65AF6127F229_0_HS_0_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.75
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_FCA53548_F6D4_612A_41BB_D48002FC4710, this.camera_76FDE6E3_7B16_E0FE_41D4_E3B42E38A4EC); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_134D5CCA_05C2_16BC_418F_DD17507A9704",
   "pitch": -8.75,
   "hfov": 14.19,
   "yaw": -77.37,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_161EA6B9_05C2_12DD_414E_5813A71AF7B4",
 "data": {
  "label": "4"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.43,
   "yaw": 20.38,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA50949_F6D4_612A_41CC_65AF6127F229_0_HS_1_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.75
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_FCA4D2A9_F6D4_A36A_41D9_85B9D4C4B9F2, this.camera_76C686C6_7B16_E0C6_41C2_F852895FB3F5); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_134D8CCA_05C2_16BC_415E_543F0BC71F57",
   "pitch": -10.75,
   "hfov": 14.43,
   "yaw": 20.38,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_117311EF_05C2_6E74_417C_D091F78A68C1",
 "data": {
  "label": "3"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.66,
   "yaw": 153.78,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA50949_F6D4_612A_41CC_65AF6127F229_0_HS_2_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.15
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_FCB069C1_F6D4_A11D_41B4_D58FFB70AFAE, this.camera_76C956D4_7B16_E0DA_41CD_977032249A9B); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1C725A61_05C2_126C_4179_FE6373877C3C",
   "pitch": -16.15,
   "hfov": 12.66,
   "yaw": 153.78,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_11E18968_05C2_7E7C_4197_4DC8D12B68C7",
 "data": {
  "label": "1"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.37,
   "yaw": 105.8,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA50949_F6D4_612A_41CC_65AF6127F229_0_HS_3_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.64
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1C728A62_05C2_126C_4195_52010E533C18",
   "pitch": -13.64,
   "hfov": 10.37,
   "yaw": 105.8,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_1384B805_05C6_3DB4_4193_4328ED4E76AF",
 "data": {
  "label": "2"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.46,
   "yaw": -158.49,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA50949_F6D4_612A_41CC_65AF6127F229_0_HS_4_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.38
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1C72FA62_05C2_126C_418D_2DA6BDB47D02",
   "pitch": -11.38,
   "hfov": 10.46,
   "yaw": -158.49,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_12BD51A3_05C6_EEEC_4182_652ED72036FB",
 "data": {
  "label": "5"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.3,
   "yaw": -18.34,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA50949_F6D4_612A_41CC_65AF6127F229_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 28.33
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_2E3FF28B_3F5A_A75D_41C7_DC2AC792BFF5",
   "pitch": 28.33,
   "hfov": 7.3,
   "yaw": -18.34,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_1FE93B50_3F33_F6E7_41B4_37E11D41D902",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "bleachingDistance": 0.4,
 "yaw": -42.08,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 49.05,
 "bleaching": 0.7,
 "id": "overlay_18ED4D9F_3FF1_ED98_41B9_3F0C7D93E364"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 21.08,
   "yaw": -28.32,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA50949_F6D4_612A_41CC_65AF6127F229_0_HS_7_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 109
     }
    ]
   },
   "pitch": 19.82
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_D4BD66EE_DB61_0831_41E6_9460AE72C9CF, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_C8CA8AA1_DB67_1833_41C6_9D31CD8321A8, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 21.08,
   "roll": 0,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA50949_F6D4_612A_41CC_65AF6127F229_0_HS_7_0.png",
      "width": 454,
      "class": "ImageResourceLevel",
      "height": 249
     }
    ]
   },
   "pitch": 19.82,
   "yaw": -28.32,
   "distance": 50
  }
 ],
 "id": "overlay_9C553CCA_8CD2_6D44_41DA_42205A1EEC2C",
 "data": {
  "label": "Polygon"
 }
},
{
 "useHandCursor": true,
 "map": {
  "width": 128.58,
  "x": 142.55,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_28917475_3224_BDAD_41BD_A9CA0FA89DF6_HS_0_map.gif",
     "width": 26,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "y": 856.55,
  "offsetY": 0,
  "height": 78.95,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 142.55,
  "y": 856.55,
  "width": 128.58,
  "class": "HotspotMapOverlayImage",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_28917475_3224_BDAD_41BD_A9CA0FA89DF6_HS_0.png",
     "width": 128,
     "class": "ImageResourceLevel",
     "height": 78
    }
   ]
  },
  "height": 78.95
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_2B82678F_3224_7B7D_41C4_1135B5B20EBD",
 "data": {
  "label": "1"
 }
},
{
 "useHandCursor": true,
 "map": {
  "width": 128.58,
  "x": 753.2,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_28917475_3224_BDAD_41BD_A9CA0FA89DF6_HS_1_map.gif",
     "width": 26,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "y": 778.35,
  "offsetY": 0,
  "height": 78.95,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 753.2,
  "y": 778.35,
  "width": 128.58,
  "class": "HotspotMapOverlayImage",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_28917475_3224_BDAD_41BD_A9CA0FA89DF6_HS_1.png",
     "width": 128,
     "class": "ImageResourceLevel",
     "height": 78
    }
   ]
  },
  "height": 78.95
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_2B269459_3227_DDE4_41B7_DD3553466381",
 "data": {
  "label": "4"
 }
},
{
 "useHandCursor": true,
 "map": {
  "width": 128.58,
  "x": 498,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_28917475_3224_BDAD_41BD_A9CA0FA89DF6_HS_2_map.gif",
     "width": 26,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "y": 893.1,
  "offsetY": 0,
  "height": 78.95,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 498,
  "y": 893.1,
  "width": 128.58,
  "class": "HotspotMapOverlayImage",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_28917475_3224_BDAD_41BD_A9CA0FA89DF6_HS_2.png",
     "width": 128,
     "class": "ImageResourceLevel",
     "height": 78
    }
   ]
  },
  "height": 78.95
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_2BE20992_3227_D764_41B0_66D3362BA9CF",
 "data": {
  "label": "4"
 }
},
{
 "useHandCursor": true,
 "map": {
  "width": 128.58,
  "x": 700.7,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_28917475_3224_BDAD_41BD_A9CA0FA89DF6_HS_3_map.gif",
     "width": 26,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "y": 639.54,
  "offsetY": 0,
  "height": 78.95,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 700.7,
  "y": 639.54,
  "width": 128.58,
  "class": "HotspotMapOverlayImage",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_28917475_3224_BDAD_41BD_A9CA0FA89DF6_HS_3.png",
     "width": 128,
     "class": "ImageResourceLevel",
     "height": 78
    }
   ]
  },
  "height": 78.95
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_2B15A4FA_3224_FEA4_418A_1C0241DBDD28",
 "data": {
  "label": "5"
 }
},
{
 "useHandCursor": true,
 "map": {
  "width": 128.58,
  "x": 979.5,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_28917475_3224_BDAD_41BD_A9CA0FA89DF6_HS_4_map.gif",
     "width": 26,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "y": 776.16,
  "offsetY": 0,
  "height": 78.95,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 979.5,
  "y": 776.16,
  "width": 128.58,
  "class": "HotspotMapOverlayImage",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_28917475_3224_BDAD_41BD_A9CA0FA89DF6_HS_4.png",
     "width": 128,
     "class": "ImageResourceLevel",
     "height": 78
    }
   ]
  },
  "height": 78.95
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_2B80BC0D_3225_CD7D_41C1_CB67FED7F0E2",
 "data": {
  "label": "5"
 }
},
{
 "useHandCursor": true,
 "map": {
  "width": 128.58,
  "x": 928.1,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_28917475_3224_BDAD_41BD_A9CA0FA89DF6_HS_5_map.gif",
     "width": 26,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "y": 663.15,
  "offsetY": 0,
  "height": 78.95,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 928.1,
  "y": 663.15,
  "width": 128.58,
  "class": "HotspotMapOverlayImage",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_28917475_3224_BDAD_41BD_A9CA0FA89DF6_HS_5.png",
     "width": 128,
     "class": "ImageResourceLevel",
     "height": 78
    }
   ]
  },
  "height": 78.95
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_2B1341C6_3224_B6EF_41BC_D5873A615D43",
 "data": {
  "label": "7"
 }
},
{
 "useHandCursor": true,
 "map": {
  "width": 128.58,
  "x": 896.93,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_28917475_3224_BDAD_41BD_A9CA0FA89DF6_HS_6_map.gif",
     "width": 26,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "y": 518.23,
  "offsetY": 0,
  "height": 78.95,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 896.93,
  "y": 518.23,
  "width": 128.58,
  "class": "HotspotMapOverlayImage",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_28917475_3224_BDAD_41BD_A9CA0FA89DF6_HS_6.png",
     "width": 128,
     "class": "ImageResourceLevel",
     "height": 78
    }
   ]
  },
  "height": 78.95
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_2B10A3D2_3224_DAE4_41C8_5A6558C3C510",
 "data": {
  "label": "9"
 }
},
{
 "useHandCursor": true,
 "map": {
  "width": 128.58,
  "x": 1155.77,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_28917475_3224_BDAD_41BD_A9CA0FA89DF6_HS_7_map.gif",
     "width": 26,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "y": 689.4,
  "offsetY": 0,
  "height": 78.95,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 1155.77,
  "y": 689.4,
  "width": 128.58,
  "class": "HotspotMapOverlayImage",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_28917475_3224_BDAD_41BD_A9CA0FA89DF6_HS_7.png",
     "width": 128,
     "class": "ImageResourceLevel",
     "height": 78
    }
   ]
  },
  "height": 78.95
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_2B128902_3224_7767_41C8_5592287BF073",
 "data": {
  "label": "8"
 }
},
{
 "useHandCursor": true,
 "map": {
  "width": 128.58,
  "x": 1219.02,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_28917475_3224_BDAD_41BD_A9CA0FA89DF6_HS_8_map.gif",
     "width": 26,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "y": 501.46,
  "offsetY": 0,
  "height": 78.95,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 1219.02,
  "y": 501.46,
  "width": 128.58,
  "class": "HotspotMapOverlayImage",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_28917475_3224_BDAD_41BD_A9CA0FA89DF6_HS_8.png",
     "width": 128,
     "class": "ImageResourceLevel",
     "height": 78
    }
   ]
  },
  "height": 78.95
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_2B1DC4C7_322B_DEEC_41C6_7F55186A8687",
 "data": {
  "label": "10"
 }
},
{
 "progressBarBorderSize": 0,
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "left": "0%",
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "paddingLeft": 0,
 "playbackBarProgressBorderColor": "#000000",
 "minHeight": 1,
 "toolTipFontFamily": "DRboran",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "class": "ViewerArea",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "transitionDuration": 500,
 "minWidth": 1,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "toolTipFontColor": "#606060",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "borderSize": 0,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "toolTipBackgroundColor": "#F6F6F6",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 2,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "show": "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_74D894CE_7B16_E0C6_41C6_47A057748BDE.set('selectedIndex', -1); }, this); this.playList_74D894CE_7B16_E0C6_41C6_47A057748BDE.set('selectedIndex', 0)",
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "paddingRight": 0,
 "progressBorderRadius": 0,
 "borderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "top": "0%",
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "toolTipShadowVerticalLength": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "toolTipShadowBlurRadius": 3,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBorderColor": "#000000",
 "toolTipPaddingBottom": 4,
 "paddingBottom": 0,
 "toolTipFontSize": "12px",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadShadowVerticalLength": 0,
 "data": {
  "name": "Viewer photoalbum 1"
 },
 "playbackBarHeight": 10,
 "toolTipFontWeight": "normal",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "backgroundOpacity": 0,
 "right": 10,
 "width": "14%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "propagateClick": false,
 "class": "IconButton",
 "top": "20%",
 "bottom": "20%",
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "IconButton29918"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxWidth": 60,
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "left": 10,
 "maxHeight": 60,
 "backgroundOpacity": 0,
 "width": 165,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "propagateClick": false,
 "class": "IconButton",
 "top": "20%",
 "verticalAlign": "middle",
 "bottom": "20%",
 "minWidth": 50,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "IconButton27247"
 },
 "cursor": "hand"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 17.06,
   "yaw": 152.26,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FDF55F2D_F6D7_A16A_41E9_3BB4418749A0_0_HS_0_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.87
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_FCBC1D7C_F6D4_E1EB_41E1_A702CEA4A43F, this.camera_75A0B7C0_7B16_E13A_41B6_5AF7C3E190B8); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_11BD1FAD_05CE_F2F4_4190_351DE17540E2",
   "pitch": -10.87,
   "hfov": 17.06,
   "yaw": 152.26,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_15EF4F36_05C2_13D7_417A_A34D13053BF2",
 "data": {
  "label": "Circle Point 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.02,
   "yaw": -20.22,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FDF55F2D_F6D7_A16A_41E9_3BB4418749A0_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.71
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_2ED773A7_3F5A_6554_4193_4E1BD9295AEA, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_2EDE12D9_3F5A_A4FD_41B6_3968CE4A73A1, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_2E3DF283_3F5A_A74D_41C5_6D5E4C55CE9B",
   "pitch": -3.71,
   "hfov": 8.02,
   "yaw": -20.22,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_1EA201D5_3F32_95E8_41B9_F3C6C2E1BE99",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.31,
   "yaw": -143.68,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FDF55F2D_F6D7_A16A_41E9_3BB4418749A0_0_HS_2_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.71
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1A17EBF6_3F12_95A8_41BC_E9742BB1B74D",
   "pitch": -3.71,
   "hfov": 8.31,
   "yaw": -143.68,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_1C335D55_3F11_92E8_41C1_BE40D1D68651",
 "data": {
  "label": "Circle Point 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.89,
   "yaw": -26.27,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FDF55F2D_F6D7_A16A_41E9_3BB4418749A0_0_HS_3_1_0_map.gif",
      "width": 116,
      "class": "ImageResourceLevel",
      "height": 36
     }
    ]
   },
   "pitch": -7.75
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_8075D38B_8FEA_4204_41C7_47580EB38A2E, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_9E864BAD_8FEA_C21C_41C2_FEC4C10FA5AA, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 10.89,
   "roll": 0,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FDF55F2D_F6D7_A16A_41E9_3BB4418749A0_0_HS_3_0.png",
      "width": 232,
      "class": "ImageResourceLevel",
      "height": 73
     }
    ]
   },
   "pitch": -7.75,
   "yaw": -26.27,
   "distance": 50
  }
 ],
 "id": "overlay_9F182BED_8FEA_C21F_41DE_952F9B6CE0F6",
 "data": {
  "label": "Polygon"
 }
},
{
 "progressBarBorderSize": 0,
 "id": "MapViewer",
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "paddingLeft": 0,
 "playbackBarProgressBorderColor": "#000000",
 "minHeight": 1,
 "toolTipFontFamily": "DRboran",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "class": "ViewerArea",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "transitionDuration": 500,
 "minWidth": 1,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "toolTipFontColor": "#606060",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "borderSize": 0,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 2,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "paddingRight": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 0,
 "toolTipShadowVerticalLength": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBorderColor": "#000000",
 "toolTipPaddingBottom": 4,
 "paddingBottom": 0,
 "toolTipFontSize": "12px",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadShadowVerticalLength": 0,
 "data": {
  "name": "Floor Plan"
 },
 "playbackBarHeight": 10,
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.57,
   "yaw": 113.44,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA56EEA_F6D4_A0EE_41E0_B66C2536057D_0_HS_0_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.39
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1CCA0147_05DE_2FB5_4181_EEAF06799C7B",
   "pitch": -15.39,
   "hfov": 14.57,
   "yaw": 113.44,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_1D2561BF_05C6_6ED4_4160_36C731F2058C",
 "data": {
  "label": "1"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.85,
   "yaw": -64.67,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA56EEA_F6D4_A0EE_41E0_B66C2536057D_0_HS_1_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.61
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_FCA4D2A9_F6D4_A36A_41D9_85B9D4C4B9F2, this.camera_7663363F_7B16_E346_41B5_FCD79F3E4CB3); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1CCAC147_05DE_2FB5_4170_F957379B66A6",
   "pitch": -10.61,
   "hfov": 14.85,
   "yaw": -64.67,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_121DA431_05C6_15ED_4182_6ED3C17C7EAB",
 "data": {
  "label": "2"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.89,
   "yaw": 26.52,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA56EEA_F6D4_A0EE_41E0_B66C2536057D_0_HS_2_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.86
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_FCA53548_F6D4_612A_41BB_D48002FC4710, this.camera_769C365E_7B16_E3C6_41C2_073B4923B5B4); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1CCD6147_05DE_2FB5_4197_341BCF94BF89",
   "pitch": -9.86,
   "hfov": 14.89,
   "yaw": 26.52,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_1DD0D99E_05C6_1ED7_415B_9A23C035DCB9",
 "data": {
  "label": "3"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.27,
   "yaw": -156.62,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA56EEA_F6D4_A0EE_41E0_B66C2536057D_0_HS_3_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -19.16
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1CCD3147_05DE_2FB5_416D_7ECDE00D31DA",
   "pitch": -19.16,
   "hfov": 14.27,
   "yaw": -156.62,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_1D703EC1_05C2_32AC_4191_0BDFE77E7FF3",
 "data": {
  "label": "4"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.29,
   "yaw": 161.68,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA56EEA_F6D4_A0EE_41E0_B66C2536057D_0_HS_4_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.9
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_FCA346B9_F6D4_E36A_41E8_FB37D8789519, this.camera_766BF64E_7B16_E3C7_41D8_6C55942A488A); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1ABB056E_05C6_3675_4182_87774DB536A8",
   "pitch": -18.9,
   "hfov": 14.29,
   "yaw": 161.68,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_1CF946C0_05DE_72AC_4168_5E6823067370",
 "data": {
  "label": "1"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.61,
   "yaw": 58.55,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA56553_F6D5_A13D_41D6_27B8C7E3AB13_0_HS_0_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.03
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_FCA528A4_F6D4_6F1B_41ED_942C08D16866, this.camera_76D356B6_7B16_E346_41D6_C40EFCF3A619); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_274D9B19_3D12_B699_41CD_E14787B6C9C7",
   "pitch": -18.03,
   "hfov": 14.61,
   "yaw": 58.55,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_256E6790_3D11_9E68_41CA_C2BA5C90455A",
 "data": {
  "label": "Circle Point 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.74,
   "yaw": 60.31,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA56553_F6D5_A13D_41D6_27B8C7E3AB13_0_HS_1_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.1
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_FCA53B21_F6D4_611D_41DE_C4B1A6849AF8, this.camera_76A866A7_7B16_E346_41D1_47DEAB58A6B2); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_274C5B19_3D12_B699_41C5_5D18A7666908",
   "pitch": -8.1,
   "hfov": 9.74,
   "yaw": 60.31,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_25BA2C19_3D11_9299_41CC_43EE8B621783",
 "data": {
  "label": "Circle Point 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.19,
   "yaw": -77.11,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA56553_F6D5_A13D_41D6_27B8C7E3AB13_0_HS_2_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.23
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_FCA4CB49_F6D4_A12D_41A1_AD6390F9B90D, this.camera_76A7B699_7B16_E34A_41CD_BDD8560500D1); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_274C2B19_3D12_B699_419B_84D41E0514DC",
   "pitch": -9.23,
   "hfov": 11.19,
   "yaw": -77.11,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_244E499E_3D13_7598_41C5_C9E1A35AEA5B",
 "data": {
  "label": "Circle Point 01c"
 }
},
{
 "items": [
  {
   "media": "this.album_2E1941CB_3CAF_8A11_41CA_397AC689B439_0",
   "class": "PhotoPlayListItem",
   "camera": {
    "class": "PhotoCamera",
    "scaleMode": "none"
   }
  },
  {
   "media": "this.album_2E1941CB_3CAF_8A11_41CA_397AC689B439_1",
   "class": "PhotoPlayListItem",
   "camera": {
    "class": "PhotoCamera",
    "scaleMode": "none"
   }
  },
  {
   "media": "this.album_2E1941CB_3CAF_8A11_41CA_397AC689B439_2",
   "class": "PhotoPlayListItem",
   "camera": {
    "class": "PhotoCamera",
    "scaleMode": "none"
   }
  },
  {
   "media": "this.album_2E1941CB_3CAF_8A11_41CA_397AC689B439_4",
   "class": "PhotoPlayListItem",
   "camera": {
    "class": "PhotoCamera",
    "scaleMode": "none"
   }
  },
  {
   "media": "this.album_2E1941CB_3CAF_8A11_41CA_397AC689B439_6",
   "class": "PhotoPlayListItem",
   "camera": {
    "class": "PhotoCamera",
    "scaleMode": "none"
   }
  },
  {
   "media": "this.photo_21CD3C3A_3D12_9298_41C9_7192652B752F",
   "class": "PhotoPlayListItem",
   "camera": {
    "class": "PhotoCamera",
    "scaleMode": "none"
   }
  },
  {
   "media": "this.photo_26E77056_3D12_B2E8_41B8_22308B428753",
   "class": "PhotoPlayListItem",
   "camera": {
    "class": "PhotoCamera",
    "scaleMode": "none"
   }
  },
  {
   "media": "this.photo_27A24B92_31E4_CD5B_41C2_D692C115B7B5",
   "class": "PhotoPlayListItem",
   "camera": {
    "class": "PhotoCamera",
    "scaleMode": "fit_inside"
   }
  },
  {
   "media": "this.photo_2441839A_31E4_BD4B_41B2_2E8DD3FC613D",
   "class": "PhotoPlayListItem",
   "camera": {
    "class": "PhotoCamera",
    "scaleMode": "fit_inside"
   }
  },
  {
   "media": "this.photo_2440358E_31E4_454B_41BC_33DD2F7C04A5",
   "class": "PhotoPlayListItem",
   "camera": {
    "class": "PhotoCamera",
    "scaleMode": "fit_inside"
   }
  },
  {
   "media": "this.photo_24415771_31E4_45D9_41C2_B196BE579660",
   "class": "PhotoPlayListItem",
   "camera": {
    "class": "PhotoCamera",
    "scaleMode": "fit_inside"
   }
  },
  {
   "media": "this.photo_2440B9E8_31E4_4CF7_41AC_6D4331F9E891",
   "class": "PhotoPlayListItem",
   "camera": {
    "class": "PhotoCamera",
    "scaleMode": "fit_inside"
   }
  },
  {
   "media": "this.photo_24408C3B_31E4_4B49_41C7_191E9D3F3D82",
   "class": "PhotoPlayListItem",
   "camera": {
    "class": "PhotoCamera",
    "scaleMode": "fit_inside"
   }
  },
  {
   "media": "this.photo_244770EB_31E4_5CC9_41AC_AECF84C9CC23",
   "class": "PhotoPlayListItem",
   "camera": {
    "class": "PhotoCamera",
    "scaleMode": "fit_inside"
   }
  }
 ],
 "id": "album_2E1941CB_3CAF_8A11_41CA_397AC689B439_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.65,
   "yaw": 35.44,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA50179_F6D4_A1EA_41C4_D9C52C70FA89_0_HS_0_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.49
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_FCA51430_F6D4_A77A_41E9_F0A0E79636A3, this.camera_758307A3_7B16_E17E_41B4_9E16FD7B4CE2); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_2B02E22A_3D71_96B8_41C3_CCB178480D18",
   "pitch": -10.49,
   "hfov": 11.65,
   "yaw": 35.44,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_29C8BAFA_3D73_B798_41BA_75BBD4019042",
 "data": {
  "label": "2"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.61,
   "yaw": -93.44,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA50179_F6D4_A1EA_41C4_D9C52C70FA89_0_HS_1_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.49
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_FCA5FE4B_F6D4_A32E_41D5_48F03BD57F7A, this.camera_75B2C7B1_7B16_E15D_41A6_6E879F0CCE39); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_2B02B22A_3D71_96B8_41C8_2E3BFB98A771",
   "pitch": -11.49,
   "hfov": 11.61,
   "yaw": -93.44,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_2878F73D_3D73_BE98_41BB_BB9034933993",
 "data": {
  "label": "1"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.62,
   "yaw": -27.72,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA50179_F6D4_A1EA_41C4_D9C52C70FA89_0_HS_2_0_0_map.gif",
      "width": 22,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.45
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_FCA4D2A9_F6D4_A36A_41D9_85B9D4C4B9F2, this.camera_759D7794_7B16_E15A_41CB_08E22E9C2B92); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1FDC3632_3F17_BEA8_41B4_BBB76B10CDCF",
   "pitch": -3.45,
   "hfov": 10.62,
   "yaw": -27.72,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_1EEBD59D_3F13_BD98_41C3_79AAE5511B80",
 "data": {
  "label": "Arrow 04a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 17.46,
   "yaw": -114.66,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA53548_F6D4_612A_41BB_D48002FC4710_0_HS_0_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -20.41
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_FCA528A4_F6D4_6F1B_41ED_942C08D16866, this.camera_75146700_7B16_E13B_41DA_E023A46ECD1E); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1D2AC0C8_05C2_2EBB_4166_2F2D8DD7E542",
   "pitch": -20.41,
   "hfov": 17.46,
   "yaw": -114.66,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_1189580A_05CE_7DBF_417D_4CD40AD39131",
 "data": {
  "label": "1"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.74,
   "yaw": 10.57,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA53548_F6D4_612A_41BB_D48002FC4710_0_HS_1_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.35
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_FCA56EEA_F6D4_A0EE_41E0_B66C2536057D, this.camera_76E746F2_7B16_E0DE_41D2_DE973CE5F831); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_134CBCCA_05C2_16BC_415E_EA1BD7065E5E",
   "pitch": -7.35,
   "hfov": 13.74,
   "yaw": 10.57,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_1100561A_05CE_15DF_4184_67FAB168692B",
 "data": {
  "label": "2"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.94,
   "yaw": 108.92,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA53548_F6D4_612A_41BB_D48002FC4710_0_HS_2_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.73
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_FCA50949_F6D4_612A_41CC_65AF6127F229, this.camera_753C472D_7B16_E14A_41AC_C7D49FB8ED2A); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_134CECCB_05C2_16BC_4181_87E32A37037F",
   "pitch": -8.73,
   "hfov": 13.94,
   "yaw": 108.92,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_13D24D9F_05CE_76D5_4187_D6EE3EE4B873",
 "data": {
  "label": "3"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.74,
   "yaw": -68.94,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA53548_F6D4_612A_41BB_D48002FC4710_0_HS_3_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 18); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_134B0CCB_05C2_16BC_4159_83184AF0E32E",
   "pitch": -13,
   "hfov": 13.74,
   "yaw": -68.94,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_10756154_05C6_2FAB_4193_E12C9411F856",
 "data": {
  "label": "4"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.77,
   "yaw": -174.71,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA53548_F6D4_612A_41BB_D48002FC4710_0_HS_4_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.5
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_FCA528A4_F6D4_6F1B_41ED_942C08D16866, this.camera_750E571E_7B16_E146_41DA_98CC29D582BE); this.mainPlayList.set('selectedIndex', 18); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_134BFCCB_05C2_16BC_4183_71769B6EC8CC",
   "pitch": -12.5,
   "hfov": 13.77,
   "yaw": -174.71,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_13D24A9A_05C7_F2DC_4192_C0336C6562D0",
 "data": {
  "label": "5"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.21,
   "yaw": 74.25,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FC217FE0_F6D7_A11B_41EA_38827B03EC94_0_HS_0_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_FCB069C1_F6D4_A11D_41B4_D58FFB70AFAE, this.camera_754A1768_7B16_E1CA_41CA_F726433D6C1F); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1261CF79_05C5_F25C_4184_FB5D377E8C37",
   "pitch": -13,
   "hfov": 15.21,
   "yaw": 74.25,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_1444AB24_05C2_13F4_4173_AE57046E5F4E",
 "data": {
  "label": "1"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.27,
   "yaw": -79.62,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FC217FE0_F6D7_A11B_41EA_38827B03EC94_0_HS_1_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.22
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_FCA53B21_F6D4_611D_41DE_C4B1A6849AF8, this.camera_75788777_7B16_E1C6_41DB_4EAE8EAC8C84); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_127E1F79_05C5_F25C_4179_2F57E2E47D60",
   "pitch": -6.22,
   "hfov": 13.27,
   "yaw": -79.62,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_17A28175_05C2_2E54_4189_F859D2745BB0",
 "data": {
  "label": "2"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.03,
   "yaw": 65.96,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FC217FE0_F6D7_A11B_41EA_38827B03EC94_0_HS_2_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.97
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_127E7F79_05C5_F25C_418C_23E870CE5E27",
   "pitch": -5.97,
   "hfov": 9.03,
   "yaw": 65.96,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_14551007_05C6_2DB4_4194_827FF7874642",
 "data": {
  "label": "3"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.7,
   "yaw": 62.81,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA4B893_F6D4_EF3D_41E8_B23814B283CC_0_HS_0_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.72
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_FCA4CB49_F6D4_A12D_41A1_AD6390F9B90D, this.camera_7521A73C_7B16_E14A_41DA_5FBBB34C8A4B); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_2424F8ED_0642_FE75_418A_0F52826B09B5",
   "pitch": -7.72,
   "hfov": 6.7,
   "yaw": 62.81,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_1F1B70D2_05C6_EEAC_4196_AD59F77F53D5",
 "data": {
  "label": "Circle Point 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.34,
   "yaw": 69.12,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA4B893_F6D4_EF3D_41E8_B23814B283CC_0_HS_1_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.43
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_FCA346B9_F6D4_E36A_41E8_FB37D8789519, this.camera_7556774A_7B16_E1CF_41CD_DE8894CB5507); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_181B9AC5_0642_F2B4_4197_FF77A12867E1",
   "pitch": -13.43,
   "hfov": 10.34,
   "yaw": 69.12,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_1F132707_05C6_33B4_4191_6595C625E030",
 "data": {
  "label": "Circle Point 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.56,
   "yaw": -84.06,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA4B893_F6D4_EF3D_41E8_B23814B283CC_0_HS_2_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.48
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_FCA51430_F6D4_A77A_41E9_F0A0E79636A3, this.camera_755BC759_7B16_E1CA_41CA_6C766F972C41); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_181BBAC5_0642_F2B4_4194_FC8ACB837BE4",
   "pitch": -5.48,
   "hfov": 11.56,
   "yaw": -84.06,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_1EAD62C5_05C2_32B5_4175_F7238480628C",
 "data": {
  "label": "Circle Point 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.74,
   "yaw": 55.41,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA346B9_F6D4_E36A_41E8_FB37D8789519_0_HS_0_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.13
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_FCA4CB49_F6D4_A12D_41A1_AD6390F9B90D, this.camera_742FA890_7B16_EF5A_41D8_F67312C07B4B); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_181BEAC6_0642_F2B4_4197_DDE25C4C1388",
   "pitch": -13.13,
   "hfov": 13.74,
   "yaw": 55.41,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_1A29A2A6_0643_F2F4_4190_EB54538BB52F",
 "data": {
  "label": "Circle Point 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.78,
   "yaw": -99.34,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA346B9_F6D4_E36A_41E8_FB37D8789519_0_HS_1_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.37
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_FCA4B893_F6D4_EF3D_41E8_B23814B283CC, this.camera_745E68A9_7B16_EF4A_41C7_A9B9249BEFF6); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_181B0AC6_0642_F2B4_4193_3826EA1E82C4",
   "pitch": -12.37,
   "hfov": 13.78,
   "yaw": -99.34,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_1AD7C2D4_0642_7254_4185_36408BD4F94C",
 "data": {
  "label": "Circle Point 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.86,
   "yaw": -28.33,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCA346B9_F6D4_E36A_41E8_FB37D8789519_0_HS_2_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.72
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_FCA56EEA_F6D4_A0EE_41E0_B66C2536057D, this.camera_74383876_7B16_EFC7_41CC_A63EA11CF109); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_1FD2462F_3F17_BEB8_41A0_0D12091ECA4E",
   "pitch": -5.72,
   "hfov": 12.86,
   "yaw": -28.33,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_1E44A24E_3F2E_96F8_41B6_0CA1D0BDB22C",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "textShadowBlurRadius": 3,
 "fontFamily": "DRboran",
 "horizontalAlign": "center",
 "id": "Label_2F6118C5_3D08_F59D_41C4_11987998A9C9",
 "backgroundOpacity": 0,
 "width": "89.122%",
 "textShadowColor": "#000000",
 "right": "4.64%",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "text": "ปราสาทศีขรภูมิ",
 "minHeight": 1,
 "propagateClick": false,
 "textShadowHorizontalLength": 1,
 "class": "Label",
 "top": "0.25%",
 "textShadowOpacity": 0.94,
 "height": "85.95%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "fontSize": "8vmin",
 "textShadowVerticalLength": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "fontStyle": "normal",
 "borderSize": 0,
 "data": {
  "name": "Label9027"
 },
 "shadow": false,
 "fontWeight": "normal",
 "textDecoration": "none",
 "fontColor": "#996600"
},
{
 "textShadowBlurRadius": 3,
 "fontFamily": "DRboran",
 "horizontalAlign": "center",
 "id": "Label_2ED1BA17_3D18_54BD_41CA_B3CE5075FA84",
 "left": "6.85%",
 "width": "65.558%",
 "textShadowColor": "#000000",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "text": " ตำบลระแงง อำเภอศีขรภูมิ จังหวัดสุรินทร์",
 "minHeight": 1,
 "propagateClick": false,
 "textShadowHorizontalLength": 1,
 "class": "Label",
 "textShadowVerticalLength": 1,
 "textShadowOpacity": 1,
 "bottom": "21.32%",
 "height": "17.544%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "fontSize": "2.11vmin",
 "paddingBottom": 0,
 "fontStyle": "normal",
 "paddingTop": 0,
 "borderSize": 0,
 "data": {
  "name": "Label10339"
 },
 "shadow": false,
 "fontWeight": "normal",
 "textDecoration": "none",
 "fontColor": "#FFFFFF"
},
{
 "horizontalAlign": "center",
 "maxHeight": 2,
 "maxWidth": 3000,
 "id": "Image_9511127C_9B79_D2C1_41D8_D080B87BFD84",
 "left": "0%",
 "backgroundOpacity": 0,
 "right": "0%",
 "paddingRight": 0,
 "url": "skin/Image_9511127C_9B79_D2C1_41D8_D080B87BFD84.png",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "class": "Image",
 "verticalAlign": "middle",
 "bottom": 53,
 "height": 2,
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_outside",
 "data": {
  "name": "white line"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_9A7696F9_9256_4198_41E2_40E7CF09A427",
 "left": "0%",
 "width": 1199,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "children": [
  "this.Button_03D37B27_0C7A_63B3_41A1_89572D8C8762",
  "this.Button_1CA392FC_0C0A_2295_41A3_18DEA65FB6AD",
  "this.Button_1FE4B611_0C0A_256F_418E_EA27E66F8360",
  "this.Button_1EBF3282_0C0A_1D6D_4190_52FC7F8C00A5",
  "this.Button_1FDDCF4A_0C0A_23FD_417A_1C14E098FDFD",
  "this.Button_20D80777_31EC_45D9_41B9_6726937F48CE"
 ],
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 30,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "class": "Container",
 "verticalAlign": "middle",
 "bottom": "0%",
 "scrollBarWidth": 10,
 "height": 51,
 "minWidth": 1,
 "layout": "horizontal",
 "paddingBottom": 0,
 "gap": 3,
 "paddingTop": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-button set container"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "backgroundOpacity": 0,
 "width": 110,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "overflow": "visible",
 "minHeight": 1,
 "propagateClick": false,
 "class": "Container",
 "top": "0%",
 "verticalAlign": "middle",
 "scrollBarWidth": 10,
 "height": 110,
 "minWidth": 1,
 "layout": "horizontal",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "button menu sup"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "backgroundOpacity": 0,
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
  "this.IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521"
 ],
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "width": "91.304%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "propagateClick": false,
 "class": "Container",
 "bottom": "0%",
 "height": "85.959%",
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "vertical",
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "gap": 3,
 "paddingTop": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-button set"
 },
 "shadow": false,
 "visible": false
},
{
 "shadowHorizontalLength": 0,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_04FF5C2C_1216_7593_41B2_1B5CFADF351D",
 "left": "10%",
 "children": [
  "this.Container_04FF2C2C_1216_7593_4195_88C3C7049763",
  "this.Container_04FF0C2C_1216_7593_419A_8AC354592A51"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "10%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "class": "Container",
 "top": "5%",
 "verticalAlign": "top",
 "bottom": "5%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "horizontal",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "shadowVerticalLength": 0
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_04FF9C2D_1216_75ED_41A8_E3495D8F554E",
 "left": "10%",
 "children": [
  "this.IconButton_04FE6C2D_1216_75ED_41A3_C531DD2D317A"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "10%",
 "scrollBarMargin": 2,
 "paddingRight": 20,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "visible",
 "propagateClick": false,
 "minHeight": 1,
 "class": "Container",
 "top": "5%",
 "verticalAlign": "top",
 "bottom": "84.78%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "layout": "vertical",
 "borderSize": 0,
 "paddingTop": 20,
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "shadow": false
},
{
 "shadowHorizontalLength": 0,
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "15%",
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "15%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "visible",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "class": "Container",
 "top": "7%",
 "verticalAlign": "top",
 "bottom": "7%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "vertical",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "shadowVerticalLength": 0
},
{
 "shadowHorizontalLength": 0,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_1813AA3E_1663_8BF1_41A2_CA5EE3718362",
 "left": "10%",
 "children": [
  "this.Container_1813DA3E_1663_8BF1_4193_F28A53801FBC",
  "this.Container_1813FA3E_1663_8BF1_4180_5027A2A87866"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "10%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "class": "Container",
 "top": "5%",
 "verticalAlign": "top",
 "bottom": "5%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "horizontal",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "shadowVerticalLength": 0
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_1812AA3F_1663_8BEF_41A4_02F566B1BC6D",
 "left": "10%",
 "children": [
  "this.IconButton_1812DA3F_1663_8BEF_41A5_6E0723037CA1"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "10%",
 "scrollBarMargin": 2,
 "paddingRight": 20,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "visible",
 "minHeight": 1,
 "propagateClick": false,
 "class": "Container",
 "top": "5%",
 "verticalAlign": "top",
 "bottom": "85.18%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "layout": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 20,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "shadow": false
},
{
 "shadowHorizontalLength": 0,
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
 "left": "15%",
 "children": [
  "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
  "this.MapViewer",
  "this.ThumbnailGrid_2F8BA686_0D4F_6B7E_419C_EB65DD1505BB"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "15%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "visible",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "class": "Container",
 "top": "7%",
 "verticalAlign": "top",
 "bottom": "7%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "vertical",
 "click": "this.setMediaBehaviour(this.playList_74DE24CD_7B16_E0CA_41DE_874716F79FA8, 0)",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "gap": 10,
 "shadowVerticalLength": 0
},
{
 "shadowHorizontalLength": 0,
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "left": "15%",
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "15%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderRadius": 0,
 "overflow": "visible",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "class": "Container",
 "top": "7%",
 "verticalAlign": "top",
 "bottom": "7%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "vertical",
 "borderSize": 0,
 "paddingTop": 10,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 10,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "shadowVerticalLength": 0
},
{
 "shadowHorizontalLength": 0,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0DEF7FEC_12FA_D293_4197_332CA20EDBCF",
 "left": "10%",
 "children": [
  "this.Container_0DEC9FEC_12FA_D293_41A0_DAD5B350B643",
  "this.Container_0DECBFED_12FA_D26D_41AD_EE1B8CC7BCC8"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "10%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "class": "Container",
 "top": "5%",
 "verticalAlign": "top",
 "bottom": "5%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "horizontal",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "shadowVerticalLength": 0
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_0DEC1FED_12FA_D26D_41AE_8CE7699C44D8",
 "left": "10%",
 "children": [
  "this.IconButton_0DEC0FED_12FA_D26D_41B1_C01AE2D2C1D4"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "10%",
 "scrollBarMargin": 2,
 "paddingRight": 20,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "visible",
 "minHeight": 1,
 "propagateClick": false,
 "class": "Container",
 "top": "5%",
 "verticalAlign": "top",
 "bottom": "80%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "layout": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 20,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "shadow": false
},
{
 "shadowHorizontalLength": 0,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_88BC91D1_901E_7E07_41D9_A20DEBA4D3B3",
 "left": "15%",
 "children": [
  "this.WebFrame_88BCE1D1_901E_7E07_41D6_F07A962BFEF2"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "15%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "class": "Container",
 "top": "10%",
 "verticalAlign": "top",
 "bottom": "10%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "horizontal",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "shadowVerticalLength": 0
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_88BCF1D1_901E_7E07_41CD_1761465E05A3",
 "left": "15%",
 "children": [
  "this.IconButton_88BCC1D1_901E_7E07_41DC_0350D692EDFB"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "15%",
 "scrollBarMargin": 2,
 "paddingRight": 20,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "visible",
 "minHeight": 1,
 "propagateClick": false,
 "class": "Container",
 "top": "10%",
 "verticalAlign": "top",
 "bottom": "80%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "layout": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 20,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "shadow": false
},
{
 "shadowHorizontalLength": 0,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_23C46705_31FC_4539_41A4_0918401BF401",
 "left": "15%",
 "children": [
  "this.WebFrame_23D706CB_31FC_44C9_41C5_27062A397FA0"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "15%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "class": "Container",
 "top": "10%",
 "verticalAlign": "top",
 "bottom": "10%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "horizontal",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "shadow": true,
 "visible": false,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "shadowVerticalLength": 0
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_23517DC2_31FD_C53B_4195_E6F65D423CBB",
 "left": "15%",
 "children": [
  "this.IconButton_237B1D3B_31FD_C549_41BB_6A4CA50CC557"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "15%",
 "scrollBarMargin": 2,
 "paddingRight": 20,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "visible",
 "propagateClick": false,
 "minHeight": 1,
 "class": "Container",
 "top": "10%",
 "verticalAlign": "top",
 "bottom": "80%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "layout": "vertical",
 "borderSize": 0,
 "paddingTop": 20,
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "shadow": false,
 "visible": false
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FCB069C1_F6D4_A11D_41B4_D58FFB70AFAE_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_EA2046DC_FB42_0890_41E8_9F9974E39A53",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FCB069C1_F6D4_A11D_41B4_D58FFB70AFAE_0_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_164194F7_05C2_3654_4195_4AD9E1B4FE6B",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FCB069C1_F6D4_A11D_41B4_D58FFB70AFAE_0_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_164E24F7_05C2_3654_4132_0703384B3966",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FCB069C1_F6D4_A11D_41B4_D58FFB70AFAE_0_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_164E64F7_05C2_3654_4183_03CC30D5E4B3",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FCA53B21_F6D4_611D_41DE_C4B1A6849AF8_0_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_2700F526_3D72_F2A8_41BE_145728E0EA8D",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FCA53B21_F6D4_611D_41DE_C4B1A6849AF8_0_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_271F1526_3D72_F2A8_41A5_AE716EAD9FDA",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FCA53B21_F6D4_611D_41DE_C4B1A6849AF8_0_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_271F6527_3D72_F2A8_41C7_A5775D6192B0",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FD815AAE_F6D4_E367_418C_B5D1094DAF3E_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_E8BDA6F0_FB4E_0890_41E7_3398A7E027E0",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FD815AAE_F6D4_E367_418C_B5D1094DAF3E_0_HS_2_0.png",
   "width": 500,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_2E3AF280_3F5A_A74B_41C7_B9CCCDB4C9B8",
 "rowCount": 6,
 "frameCount": 24
},
{
 "autoplay": false,
 "colCount": 13,
 "class": "AnimatedImageResource",
 "frameDuration": 29,
 "levels": [
  {
   "url": "media/panorama_FD815AAE_F6D4_E367_418C_B5D1094DAF3E_0_HS_4_0.png",
   "width": 10400,
   "class": "ImageResourceLevel",
   "height": 8400
  }
 ],
 "id": "AnimatedImageResource_7630FAFE_7B12_20C6_41D0_EEF639A54DCE",
 "rowCount": 14,
 "frameCount": 178
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FCBC1D7C_F6D4_E1EB_41E1_A702CEA4A43F_0_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_EF2F3FC6_FB46_18F0_41DA_D36EFA420A01",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FCBC1D7C_F6D4_E1EB_41E1_A702CEA4A43F_0_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_EF2F5FC6_FB46_18F0_41D3_04C41D515F06",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FCBC1D7C_F6D4_E1EB_41E1_A702CEA4A43F_0_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_EF2CEFC7_FB46_18F0_41B6_8AE08985AA5E",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FCBC1D7C_F6D4_E1EB_41E1_A702CEA4A43F_0_HS_5_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_EF2C2FC7_FB46_18F0_41C3_5279960014B1",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FCA4D2A9_F6D4_A36A_41D9_85B9D4C4B9F2_0_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_1C771A63_05C2_126C_4177_5B54CAE51417",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FCA4D2A9_F6D4_A36A_41D9_85B9D4C4B9F2_0_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_1C777A63_05C2_126C_418E_8D394ED379D2",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FCA4D2A9_F6D4_A36A_41D9_85B9D4C4B9F2_0_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_1C77AA63_05C2_126C_418C_0879076D3A31",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FCA4D2A9_F6D4_A36A_41D9_85B9D4C4B9F2_0_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_1C760A64_05C2_1274_4194_8761F1A1BE2D",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FCA4D2A9_F6D4_A36A_41D9_85B9D4C4B9F2_0_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_1CCA6146_05DE_2FB7_4192_91388E697815",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FCA66D0A_F6D7_A12F_41D3_F7A4F25CD0FE_0_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_1D34F0C7_05C2_2EB5_4174_F84784C55CE8",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FCA66D0A_F6D7_A12F_41D3_F7A4F25CD0FE_0_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_1D3490C7_05C2_2EB5_418F_59C18245DD2F",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FCA66D0A_F6D7_A12F_41D3_F7A4F25CD0FE_0_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_1D3430C8_05C2_2EBB_4162_05F93843241C",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FCA7DBF4_F6D7_A0FA_41E5_BA666E5CACE5_0_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_11BD6FAD_05CE_F2F4_4187_C2CB723DB143",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FCA7DBF4_F6D7_A0FA_41E5_BA666E5CACE5_0_HS_3_0.png",
   "width": 500,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_1FE8761D_3F17_BE98_41C6_2ED86D232CE7",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FCA7DBF4_F6D7_A0FA_41E5_BA666E5CACE5_0_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_1A143BF6_3F12_95A8_41CE_EAFA0F124615",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FCA4CB49_F6D4_A12D_41A1_AD6390F9B90D_0_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_1ABBB570_05C6_366B_4173_40B9069BE818",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FCA4CB49_F6D4_A12D_41A1_AD6390F9B90D_0_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_1A5AB670_05C2_126B_4196_FD1024C358F0",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FCA4CB49_F6D4_A12D_41A1_AD6390F9B90D_0_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_1ABA6570_05C6_366B_418F_F4EDA0415F29",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FCA528A4_F6D4_6F1B_41ED_942C08D16866_0_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_274EAB18_3D12_B667_41A8_C3FE12C9D162",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FCA528A4_F6D4_6F1B_41ED_942C08D16866_0_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_274D1B18_3D12_B667_41C8_A84DB9366DFF",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FCA528A4_F6D4_6F1B_41ED_942C08D16866_0_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 510
  }
 ],
 "id": "AnimatedImageResource_1FDFA637_3F17_BEA8_41C6_7D98CDEBFCC5",
 "rowCount": 6,
 "frameCount": 21
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FCA51430_F6D4_A77A_41E9_F0A0E79636A3_0_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_2B03A229_3D71_96B8_419D_3677DB369B4C",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FCA51430_F6D4_A77A_41E9_F0A0E79636A3_0_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_25AECA13_3D76_9669_41B0_D4CE785360AB",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FCA51430_F6D4_A77A_41E9_F0A0E79636A3_0_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_2429D18A_3D17_F278_41CA_A06A3B946C2A",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FCA5FE4B_F6D4_A32E_41D5_48F03BD57F7A_0_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_2701C526_3D72_F2A8_41CE_5B496ABADDEF",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FCA5FE4B_F6D4_A32E_41D5_48F03BD57F7A_0_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_2A3841B3_3D73_95A9_41B1_BB205A350205",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FCA5FE4B_F6D4_A32E_41D5_48F03BD57F7A_0_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_2A3821B3_3D73_95A9_41BD_A746EF10350E",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FCA50949_F6D4_612A_41CC_65AF6127F229_0_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_134D5CCA_05C2_16BC_418F_DD17507A9704",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FCA50949_F6D4_612A_41CC_65AF6127F229_0_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_134D8CCA_05C2_16BC_415E_543F0BC71F57",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FCA50949_F6D4_612A_41CC_65AF6127F229_0_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_1C725A61_05C2_126C_4179_FE6373877C3C",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FCA50949_F6D4_612A_41CC_65AF6127F229_0_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_1C728A62_05C2_126C_4195_52010E533C18",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FCA50949_F6D4_612A_41CC_65AF6127F229_0_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_1C72FA62_05C2_126C_418D_2DA6BDB47D02",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FCA50949_F6D4_612A_41CC_65AF6127F229_0_HS_5_0.png",
   "width": 500,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_2E3FF28B_3F5A_A75D_41C7_DC2AC792BFF5",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FDF55F2D_F6D7_A16A_41E9_3BB4418749A0_0_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_11BD1FAD_05CE_F2F4_4190_351DE17540E2",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FDF55F2D_F6D7_A16A_41E9_3BB4418749A0_0_HS_1_0.png",
   "width": 500,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_2E3DF283_3F5A_A74D_41C5_6D5E4C55CE9B",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FDF55F2D_F6D7_A16A_41E9_3BB4418749A0_0_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_1A17EBF6_3F12_95A8_41BC_E9742BB1B74D",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FCA56EEA_F6D4_A0EE_41E0_B66C2536057D_0_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_1CCA0147_05DE_2FB5_4181_EEAF06799C7B",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FCA56EEA_F6D4_A0EE_41E0_B66C2536057D_0_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_1CCAC147_05DE_2FB5_4170_F957379B66A6",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FCA56EEA_F6D4_A0EE_41E0_B66C2536057D_0_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_1CCD6147_05DE_2FB5_4197_341BCF94BF89",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FCA56EEA_F6D4_A0EE_41E0_B66C2536057D_0_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_1CCD3147_05DE_2FB5_416D_7ECDE00D31DA",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FCA56EEA_F6D4_A0EE_41E0_B66C2536057D_0_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_1ABB056E_05C6_3675_4182_87774DB536A8",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FCA56553_F6D5_A13D_41D6_27B8C7E3AB13_0_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_274D9B19_3D12_B699_41CD_E14787B6C9C7",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FCA56553_F6D5_A13D_41D6_27B8C7E3AB13_0_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_274C5B19_3D12_B699_41C5_5D18A7666908",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FCA56553_F6D5_A13D_41D6_27B8C7E3AB13_0_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_274C2B19_3D12_B699_419B_84D41E0514DC",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FCA50179_F6D4_A1EA_41C4_D9C52C70FA89_0_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_2B02E22A_3D71_96B8_41C3_CCB178480D18",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FCA50179_F6D4_A1EA_41C4_D9C52C70FA89_0_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_2B02B22A_3D71_96B8_41C8_2E3BFB98A771",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FCA50179_F6D4_A1EA_41C4_D9C52C70FA89_0_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 510
  }
 ],
 "id": "AnimatedImageResource_1FDC3632_3F17_BEA8_41B4_BBB76B10CDCF",
 "rowCount": 6,
 "frameCount": 21
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FCA53548_F6D4_612A_41BB_D48002FC4710_0_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_1D2AC0C8_05C2_2EBB_4166_2F2D8DD7E542",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FCA53548_F6D4_612A_41BB_D48002FC4710_0_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_134CBCCA_05C2_16BC_415E_EA1BD7065E5E",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FCA53548_F6D4_612A_41BB_D48002FC4710_0_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_134CECCB_05C2_16BC_4181_87E32A37037F",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FCA53548_F6D4_612A_41BB_D48002FC4710_0_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_134B0CCB_05C2_16BC_4159_83184AF0E32E",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FCA53548_F6D4_612A_41BB_D48002FC4710_0_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_134BFCCB_05C2_16BC_4183_71769B6EC8CC",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FC217FE0_F6D7_A11B_41EA_38827B03EC94_0_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_1261CF79_05C5_F25C_4184_FB5D377E8C37",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FC217FE0_F6D7_A11B_41EA_38827B03EC94_0_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_127E1F79_05C5_F25C_4179_2F57E2E47D60",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FC217FE0_F6D7_A11B_41EA_38827B03EC94_0_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_127E7F79_05C5_F25C_418C_23E870CE5E27",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FCA4B893_F6D4_EF3D_41E8_B23814B283CC_0_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_2424F8ED_0642_FE75_418A_0F52826B09B5",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FCA4B893_F6D4_EF3D_41E8_B23814B283CC_0_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_181B9AC5_0642_F2B4_4197_FF77A12867E1",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FCA4B893_F6D4_EF3D_41E8_B23814B283CC_0_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_181BBAC5_0642_F2B4_4194_FC8ACB837BE4",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FCA346B9_F6D4_E36A_41E8_FB37D8789519_0_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_181BEAC6_0642_F2B4_4197_DDE25C4C1388",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FCA346B9_F6D4_E36A_41E8_FB37D8789519_0_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_181B0AC6_0642_F2B4_4193_3826EA1E82C4",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FCA346B9_F6D4_E36A_41E8_FB37D8789519_0_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_1FD2462F_3F17_BEB8_41A0_0D12091ECA4E",
 "rowCount": 6,
 "frameCount": 24
},
{
 "textDecoration": "none",
 "fontFamily": "Montserrat",
 "horizontalAlign": "center",
 "data": {
  "name": "Button house info"
 },
 "id": "Button_03D37B27_0C7A_63B3_41A1_89572D8C8762",
 "backgroundOpacity": 0,
 "width": 110,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#BBD149"
 ],
 "click": "this.setComponentVisibility(this.Container_04FE7C2D_1216_75ED_4197_E539B3CD3A95, true, 0, null, null, false)",
 "iconHeight": 0,
 "borderRadius": 0,
 "pressedBackgroundColor": [
  "#BBD149"
 ],
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "class": "Button",
 "verticalAlign": "middle",
 "pressedBackgroundOpacity": 1,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 40,
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000"
 ],
 "fontSize": 12,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "HOUSE INFO",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "normal",
 "gap": 5,
 "rollOverShadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "shadow": false,
 "iconWidth": 0,
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "bold"
},
{
 "textDecoration": "none",
 "fontFamily": "Montserrat",
 "horizontalAlign": "center",
 "data": {
  "name": "Button location"
 },
 "id": "Button_1CA392FC_0C0A_2295_41A3_18DEA65FB6AD",
 "backgroundOpacity": 0,
 "width": 90,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#BBD149"
 ],
 "click": "this.setComponentVisibility(this.Container_1812EA3F_1663_8BEF_41AF_0A4CCC089B5F, true, 0, null, null, false)",
 "iconHeight": 32,
 "borderRadius": 0,
 "pressedBackgroundColor": [
  "#BBD149"
 ],
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "class": "Button",
 "verticalAlign": "middle",
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 40,
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 12,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "LOCATION",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "normal",
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "bold"
},
{
 "textDecoration": "none",
 "fontFamily": "Montserrat",
 "horizontalAlign": "center",
 "data": {
  "name": "Button floorplan"
 },
 "id": "Button_1FE4B611_0C0A_256F_418E_EA27E66F8360",
 "backgroundOpacity": 0,
 "width": 103,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#BBD149"
 ],
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, true, 0, null, null, false)",
 "iconHeight": 32,
 "borderRadius": 0,
 "pressedBackgroundColor": [
  "#BBD149"
 ],
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "class": "Button",
 "verticalAlign": "middle",
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 40,
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 12,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "FLOORPLAN",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "normal",
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "bold"
},
{
 "textDecoration": "none",
 "fontFamily": "Montserrat",
 "horizontalAlign": "center",
 "data": {
  "name": "Button photoalbum"
 },
 "id": "Button_1EBF3282_0C0A_1D6D_4190_52FC7F8C00A5",
 "backgroundOpacity": 0,
 "width": 112,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#BBD149"
 ],
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, true, 0, null, null, false)",
 "iconHeight": 32,
 "borderRadius": 0,
 "pressedBackgroundColor": [
  "#BBD149"
 ],
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "class": "Button",
 "verticalAlign": "middle",
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 40,
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 12,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "PHOTOALBUM",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "normal",
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "bold"
},
{
 "textDecoration": "none",
 "fontFamily": "Montserrat",
 "horizontalAlign": "center",
 "data": {
  "name": "Button panorama list"
 },
 "id": "Button_1FDDCF4A_0C0A_23FD_417A_1C14E098FDFD",
 "backgroundOpacity": 0,
 "width": 74.65,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#BBD149"
 ],
 "click": "this.setComponentVisibility(this.Container_88BCD1D1_901E_7E07_41CF_8C0D5687069A, true, 0, null, null, false)",
 "iconHeight": 32,
 "borderRadius": 0,
 "pressedBackgroundColor": [
  "#BBD149"
 ],
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "class": "Button",
 "verticalAlign": "middle",
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 40,
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 12,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "VIDEO ",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "normal",
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "bold"
},
{
 "textDecoration": "none",
 "fontFamily": "Montserrat",
 "horizontalAlign": "center",
 "data": {
  "name": "Button panorama list"
 },
 "id": "Button_20D80777_31EC_45D9_41B9_6726937F48CE",
 "backgroundOpacity": 0,
 "width": 74.65,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#BBD149"
 ],
 "click": "this.setComponentVisibility(this.Container_23233B1A_31FC_4D4B_41A9_49E61F73EA68, true, 0, null, null, false); this.openLink('https://www.flipsnack.com/68AC9E77C6F/_ebook.html', '_blank')",
 "iconHeight": 32,
 "borderRadius": 0,
 "pressedBackgroundColor": [
  "#BBD149"
 ],
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "class": "Button",
 "verticalAlign": "middle",
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 40,
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 12,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "E-BOOK",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "normal",
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "shadow": false,
 "iconWidth": 32,
 "visible": false,
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "bold"
},
{
 "horizontalAlign": "center",
 "maxWidth": 60,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "backgroundOpacity": 0,
 "maxHeight": 60,
 "width": 60,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "class": "IconButton",
 "verticalAlign": "middle",
 "height": 60,
 "minWidth": 1,
 "mode": "toggle",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "paddingBottom": 0,
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "borderSize": 0,
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "image button menu"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxWidth": 58,
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "backgroundOpacity": 0,
 "maxHeight": 58,
 "width": 58,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "propagateClick": false,
 "class": "IconButton",
 "verticalAlign": "middle",
 "height": 58,
 "minWidth": 1,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "click": "this.shareTwitter(window.location.href)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "transparencyActive": true,
 "shadow": false,
 "visible": false,
 "data": {
  "name": "IconButton TWITTER"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxWidth": 58,
 "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
 "backgroundOpacity": 0,
 "maxHeight": 58,
 "width": 58,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "propagateClick": false,
 "class": "IconButton",
 "verticalAlign": "middle",
 "height": 58,
 "minWidth": 1,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "click": "this.shareFacebook(window.location.href)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png",
 "transparencyActive": true,
 "shadow": false,
 "visible": false,
 "data": {
  "name": "IconButton FB"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_04FF2C2C_1216_7593_4195_88C3C7049763",
 "backgroundOpacity": 1,
 "children": [
  "this.Image_2CE0BC5C_3CD1_9A37_41C5_E12C7027697E"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "50%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF"
 ],
 "verticalAlign": "middle",
 "minWidth": 1,
 "layout": "absolute",
 "height": "100%",
 "paddingTop": 10,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 10,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-left"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.51,
 "id": "Container_04FF0C2C_1216_7593_419A_8AC354592A51",
 "backgroundOpacity": 1,
 "children": [
  "this.Container_04FF1C2C_1216_7593_417B_D7E74ABC91E3",
  "this.Container_04FFEC2C_1216_7593_41A4_4CD23AB66B04",
  "this.Container_04FF8C2D_1216_75ED_41A5_B4FCB592F167"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "50%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 60,
 "paddingRight": 60,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 400,
 "layout": "vertical",
 "height": "100%",
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 20,
 "gap": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#0069A3",
 "data": {
  "name": "-right"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_04FE6C2D_1216_75ED_41A3_C531DD2D317A",
 "backgroundOpacity": 0,
 "width": "25%",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_04FE6C2D_1216_75ED_41A3_C531DD2D317A_rollover.jpg",
 "propagateClick": false,
 "class": "IconButton",
 "height": "75%",
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_04FE6C2D_1216_75ED_41A3_C531DD2D317A_pressed.jpg",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_04FE7C2D_1216_75ED_4197_E539B3CD3A95, false, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_04FE6C2D_1216_75ED_41A3_C531DD2D317A.jpg",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "X"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12",
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "height": 90,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "header"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "itemLabelPosition": "bottom",
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "backgroundOpacity": 0,
 "width": "100%",
 "selectedItemThumbnailShadowBlurRadius": 16,
 "itemBorderRadius": 0,
 "itemMinHeight": 50,
 "scrollBarMargin": 2,
 "selectedItemThumbnailShadowVerticalLength": 0,
 "rollOverItemLabelFontColor": "#A2B935",
 "itemVerticalAlign": "top",
 "paddingLeft": 70,
 "itemPaddingLeft": 3,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "ThumbnailGrid",
 "itemOpacity": 1,
 "height": "100%",
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "verticalAlign": "middle",
 "minWidth": 1,
 "itemMinWidth": 50,
 "itemBackgroundColor": [],
 "itemThumbnailOpacity": 1,
 "itemBackgroundColorRatios": [],
 "itemPaddingTop": 3,
 "borderSize": 0,
 "itemPaddingRight": 3,
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "scrollBarColor": "#BBD149",
 "itemHeight": 156,
 "shadow": false,
 "itemLabelTextDecoration": "none",
 "itemBackgroundOpacity": 0,
 "selectedItemLabelFontColor": "#A2B935",
 "scrollBarOpacity": 0.5,
 "itemLabelFontWeight": "bold",
 "itemThumbnailHeight": 125,
 "rollOverItemThumbnailShadow": true,
 "scrollBarVisible": "rollOver",
 "itemThumbnailScaleMode": "fit_outside",
 "itemLabelFontSize": 14,
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "borderRadius": 5,
 "itemLabelGap": 7,
 "paddingRight": 70,
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "itemBackgroundColorDirection": "vertical",
 "itemThumbnailShadow": false,
 "selectedItemThumbnailShadow": true,
 "itemThumbnailWidth": 220,
 "itemLabelFontColor": "#666666",
 "itemHorizontalAlign": "center",
 "gap": 26,
 "itemMaxHeight": 1000,
 "selectedItemLabelFontWeight": "bold",
 "paddingBottom": 70,
 "itemPaddingBottom": 3,
 "itemMaxWidth": 1000,
 "paddingTop": 10,
 "itemLabelHorizontalAlign": "center",
 "itemLabelFontStyle": "normal",
 "itemWidth": 220,
 "itemMode": "normal",
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "data": {
  "name": "ThumbnailList5161"
 },
 "itemThumbnailBorderRadius": 0,
 "rollOverItemThumbnailShadowColor": "#A2B935",
 "itemLabelFontFamily": "Times New Roman"
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_1813DA3E_1663_8BF1_4193_F28A53801FBC",
 "backgroundOpacity": 1,
 "children": [
  "this.WebFrame_198A3B12_1666_89B6_41B5_4C2585EFD00E"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "70%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF"
 ],
 "verticalAlign": "middle",
 "minWidth": 1,
 "layout": "absolute",
 "height": "100%",
 "paddingTop": 10,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 10,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-left"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.51,
 "id": "Container_1813FA3E_1663_8BF1_4180_5027A2A87866",
 "backgroundOpacity": 1,
 "children": [
  "this.Container_18121A3E_1663_8BF1_41B4_AB4C2B45EFFF",
  "this.Container_18120A3E_1663_8BF1_419D_69232EA5FB3D",
  "this.Container_18128A3F_1663_8BEF_41B6_51D1938FA48A"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "30%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 40,
 "paddingRight": 50,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 350,
 "layout": "vertical",
 "height": "100%",
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 20,
 "gap": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#0069A3",
 "data": {
  "name": "-right"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_1812DA3F_1663_8BEF_41A5_6E0723037CA1",
 "backgroundOpacity": 0,
 "width": "25%",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_1812DA3F_1663_8BEF_41A5_6E0723037CA1_rollover.jpg",
 "propagateClick": false,
 "class": "IconButton",
 "height": "75%",
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_1812DA3F_1663_8BEF_41A5_6E0723037CA1_pressed.jpg",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_1812EA3F_1663_8BEF_41AF_0A4CCC089B5F, false, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_1812DA3F_1663_8BEF_41A5_6E0723037CA1.jpg",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "X"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_2F8A4686_0D4F_6B71_4183_10C1696E2923",
  "this.IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "height": 90,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "header"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "itemLabelPosition": "bottom",
 "id": "ThumbnailGrid_2F8BA686_0D4F_6B7E_419C_EB65DD1505BB",
 "backgroundOpacity": 0.05,
 "width": "100%",
 "selectedItemThumbnailShadowBlurRadius": 16,
 "itemBorderRadius": 0,
 "itemMinHeight": 50,
 "scrollBarMargin": 2,
 "selectedItemThumbnailShadowVerticalLength": 0,
 "rollOverItemLabelFontColor": "#04A3E1",
 "itemVerticalAlign": "top",
 "paddingLeft": 70,
 "itemPaddingLeft": 3,
 "minHeight": 1,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "ThumbnailGrid",
 "itemOpacity": 1,
 "backgroundColor": [
  "#000000"
 ],
 "playList": "this.ThumbnailGrid_2F8BA686_0D4F_6B7E_419C_EB65DD1505BB_playlist",
 "verticalAlign": "middle",
 "minWidth": 1,
 "itemMinWidth": 50,
 "height": "100%",
 "itemBackgroundColor": [],
 "itemThumbnailOpacity": 1,
 "itemBackgroundColorRatios": [],
 "itemPaddingTop": 3,
 "borderSize": 0,
 "itemPaddingRight": 3,
 "backgroundColorDirection": "vertical",
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "scrollBarColor": "#04A3E1",
 "itemHeight": 156,
 "shadow": false,
 "itemLabelTextDecoration": "none",
 "itemBackgroundOpacity": 0,
 "selectedItemLabelFontColor": "#04A3E1",
 "scrollBarOpacity": 0.5,
 "itemLabelFontWeight": "normal",
 "itemThumbnailHeight": 125,
 "scrollBarVisible": "rollOver",
 "itemThumbnailScaleMode": "fit_outside",
 "itemLabelFontSize": 14,
 "rollOverItemThumbnailShadow": true,
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "borderRadius": 5,
 "itemLabelGap": 7,
 "paddingRight": 70,
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "backgroundColorRatios": [
  0
 ],
 "itemBackgroundColorDirection": "vertical",
 "itemThumbnailShadow": false,
 "selectedItemThumbnailShadow": true,
 "itemThumbnailWidth": 220,
 "itemLabelFontColor": "#666666",
 "itemHorizontalAlign": "center",
 "gap": 26,
 "itemMaxHeight": 1000,
 "selectedItemLabelFontWeight": "bold",
 "paddingBottom": 70,
 "itemPaddingBottom": 3,
 "itemMaxWidth": 1000,
 "paddingTop": 10,
 "itemLabelHorizontalAlign": "center",
 "itemLabelFontStyle": "normal",
 "itemWidth": 220,
 "itemMode": "normal",
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "data": {
  "name": "ThumbnailList5161"
 },
 "visible": false,
 "itemThumbnailBorderRadius": 0,
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "itemLabelFontFamily": "Montserrat"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "backgroundOpacity": 0.3,
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": "100%",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container photo"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_0DEC9FEC_12FA_D293_41A0_DAD5B350B643",
 "backgroundOpacity": 1,
 "children": [
  "this.Image_0DEC8FEC_12FA_D26C_4162_7A2BAB1DA270"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "85%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF"
 ],
 "verticalAlign": "middle",
 "minWidth": 1,
 "layout": "absolute",
 "height": "100%",
 "paddingTop": 10,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 10,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-left"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.51,
 "id": "Container_0DECBFED_12FA_D26D_41AD_EE1B8CC7BCC8",
 "backgroundOpacity": 1,
 "children": [
  "this.Container_0DECAFED_12FA_D26D_4191_988031ED4C85",
  "this.Container_0DECDFED_12FA_D26D_41A3_11915FF353DB",
  "this.Container_0DECEFED_12FA_D26D_4184_68D80FD2C88F"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "50%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 50,
 "paddingRight": 50,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 460,
 "layout": "vertical",
 "height": "100%",
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 20,
 "gap": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#0069A3",
 "data": {
  "name": "-right"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_0DEC0FED_12FA_D26D_41B1_C01AE2D2C1D4",
 "backgroundOpacity": 0,
 "width": "25%",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_0DEC0FED_12FA_D26D_41B1_C01AE2D2C1D4_rollover.jpg",
 "propagateClick": false,
 "class": "IconButton",
 "height": "75%",
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_0DEC0FED_12FA_D26D_41B1_C01AE2D2C1D4_pressed.jpg",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_0DEC3FED_12FA_D26D_419F_4067E8C6DA08, false, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_0DEC0FED_12FA_D26D_41B1_C01AE2D2C1D4.jpg",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "X"
 },
 "cursor": "hand"
},
{
 "id": "WebFrame_88BCE1D1_901E_7E07_41D6_F07A962BFEF2",
 "backgroundOpacity": 1,
 "width": "100%",
 "borderRadius": 0,
 "insetBorder": false,
 "paddingLeft": 0,
 "paddingRight": 0,
 "url": "//www.youtube.com/embed/_mCmO-DFzbg?v=_mCmO-DFzbg&ab_channel=WinaiSimmalee",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 1,
 "class": "WebFrame",
 "backgroundColor": [
  "#FFFFFF"
 ],
 "minWidth": 1,
 "height": "100%",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "borderSize": 0,
 "scrollEnabled": true,
 "data": {
  "name": "WebFrame48191"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_88BCC1D1_901E_7E07_41DC_0350D692EDFB",
 "backgroundOpacity": 0,
 "width": "25%",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_88BCC1D1_901E_7E07_41DC_0350D692EDFB_rollover.jpg",
 "propagateClick": false,
 "class": "IconButton",
 "height": "75%",
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_88BCC1D1_901E_7E07_41DC_0350D692EDFB_pressed.jpg",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_88BCD1D1_901E_7E07_41CF_8C0D5687069A, false, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_88BCC1D1_901E_7E07_41DC_0350D692EDFB.jpg",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "X"
 },
 "cursor": "hand"
},
{
 "id": "WebFrame_23D706CB_31FC_44C9_41C5_27062A397FA0",
 "backgroundOpacity": 1,
 "width": "100%",
 "borderRadius": 0,
 "insetBorder": false,
 "paddingLeft": 0,
 "paddingRight": 0,
 "url": "https://www.flipsnack.com/68AC9E77C6F/_ebook.html",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 1,
 "class": "WebFrame",
 "backgroundColor": [
  "#FFFFFF"
 ],
 "minWidth": 1,
 "height": "100%",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "borderSize": 0,
 "scrollEnabled": true,
 "data": {
  "name": "WebFrame48191"
 },
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_237B1D3B_31FD_C549_41BB_6A4CA50CC557",
 "backgroundOpacity": 0,
 "width": "25%",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_237B1D3B_31FD_C549_41BB_6A4CA50CC557_rollover.jpg",
 "propagateClick": false,
 "class": "IconButton",
 "height": "75%",
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_237B1D3B_31FD_C549_41BB_6A4CA50CC557_pressed.jpg",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_23233B1A_31FC_4D4B_41A9_49E61F73EA68, false, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_237B1D3B_31FD_C549_41BB_6A4CA50CC557.jpg",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "X"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 1000,
 "maxWidth": 667,
 "id": "Image_2CE0BC5C_3CD1_9A37_41C5_E12C7027697E",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "url": "skin/Image_2CE0BC5C_3CD1_9A37_41C5_E12C7027697E.JPG",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "class": "Image",
 "top": "0%",
 "height": "100%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image5972"
 },
 "shadow": false
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_04FF1C2C_1216_7593_417B_D7E74ABC91E3",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "class": "Container",
 "height": 60,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "horizontal",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.79,
 "id": "Container_04FFEC2C_1216_7593_41A4_4CD23AB66B04",
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_04FFCC2C_1216_7593_41A3_D345BDE131A2",
  "this.Container_0BD17D93_1236_F6B5_4193_247950F46092",
  "this.Container_04FFDC2C_1216_7593_41A7_64E2588509FB"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 200,
 "scrollBarWidth": 10,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 100,
 "layout": "vertical",
 "height": "100%",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#E73B2C",
 "data": {
  "name": "Container text"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_04FF8C2D_1216_75ED_41A5_B4FCB592F167",
 "backgroundOpacity": 0.3,
 "width": 370,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "verticalAlign": "top",
 "height": 40,
 "minWidth": 1,
 "layout": "horizontal",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12",
 "left": "0%",
 "width": "77.115%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 80,
 "borderRadius": 0,
 "minHeight": 100,
 "propagateClick": false,
 "class": "HTMLText",
 "top": "0%",
 "height": "100%",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "paddingTop": 36,
 "paddingBottom": 0,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.18vh;font-family:'Otama.ep';\"><B>PANORAMA LIST/</B></SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText54192"
 },
 "shadow": false
},
{
 "horizontalAlign": "right",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "backgroundOpacity": 0,
 "right": 20,
 "width": "25%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "propagateClick": false,
 "class": "IconButton",
 "top": 20,
 "height": "75%",
 "verticalAlign": "top",
 "minWidth": 50,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "paddingBottom": 0,
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "X"
 },
 "cursor": "hand"
},
{
 "id": "WebFrame_198A3B12_1666_89B6_41B5_4C2585EFD00E",
 "left": "0%",
 "backgroundOpacity": 1,
 "right": "0%",
 "paddingRight": 0,
 "insetBorder": false,
 "paddingLeft": 0,
 "borderRadius": 0,
 "url": "https://th.wikipedia.org/wiki/%E0%B8%9B%E0%B8%A3%E0%B8%B2%E0%B8%AA%E0%B8%B2%E0%B8%97%E0%B8%A8%E0%B8%B5%E0%B8%82%E0%B8%A3%E0%B8%A0%E0%B8%B9%E0%B8%A1%E0%B8%B4#/map/0",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 1,
 "class": "WebFrame",
 "top": "0%",
 "bottom": "0%",
 "backgroundColor": [
  "#FFFFFF"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "scrollEnabled": true,
 "data": {
  "name": "WebFrame5113"
 },
 "shadow": false
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_18121A3E_1663_8BF1_41B4_AB4C2B45EFFF",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "class": "Container",
 "height": 60,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "horizontal",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.79,
 "id": "Container_18120A3E_1663_8BF1_419D_69232EA5FB3D",
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_18125A3F_1663_8BEF_4196_AE566E10BAFC",
  "this.Container_18124A3F_1663_8BEF_4167_4F797ED9B565",
  "this.HTMLText_18127A3F_1663_8BEF_4175_B0DF8CE38BFE",
  "this.Button_18126A3F_1663_8BEF_41A4_B0EDA1A5F4E3"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 520,
 "scrollBarWidth": 10,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 100,
 "layout": "vertical",
 "height": "100%",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 30,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#E73B2C",
 "data": {
  "name": "Container text"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_18128A3F_1663_8BEF_41B6_51D1938FA48A",
 "backgroundOpacity": 0.3,
 "width": 370,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "verticalAlign": "top",
 "height": 40,
 "minWidth": 1,
 "layout": "horizontal",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_2F8A4686_0D4F_6B71_4183_10C1696E2923",
 "left": "0%",
 "width": "77.115%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 80,
 "borderRadius": 0,
 "minHeight": 100,
 "propagateClick": false,
 "class": "HTMLText",
 "top": "0%",
 "height": "100%",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "paddingTop": 36,
 "paddingBottom": 0,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.18vh;font-family:'Otama.ep';\"><B>FLOORPLAN/</B></SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText54192"
 },
 "shadow": false
},
{
 "horizontalAlign": "right",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
 "backgroundOpacity": 0,
 "right": 20,
 "width": "25%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.jpg",
 "propagateClick": false,
 "class": "IconButton",
 "top": 20,
 "height": "75%",
 "verticalAlign": "top",
 "minWidth": 50,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.jpg",
 "paddingBottom": 0,
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.jpg",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "IconButton54739"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "right",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "backgroundOpacity": 0,
 "right": 20,
 "width": "10%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "propagateClick": false,
 "class": "IconButton",
 "top": 20,
 "height": "10%",
 "verticalAlign": "top",
 "minWidth": 50,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "paddingBottom": 0,
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "IconButton54739"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 1000,
 "maxWidth": 2000,
 "id": "Image_0DEC8FEC_12FA_D26C_4162_7A2BAB1DA270",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "url": "skin/Image_0DEC8FEC_12FA_D26C_4162_7A2BAB1DA270.jpg",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "class": "Image",
 "top": "0%",
 "height": "100%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_outside",
 "data": {
  "name": "Image"
 },
 "shadow": false
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_0DECAFED_12FA_D26D_4191_988031ED4C85",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "class": "Container",
 "height": 60,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "horizontal",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.79,
 "id": "Container_0DECDFED_12FA_D26D_41A3_11915FF353DB",
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_30F7AFD1_12F6_52B5_41AC_902D90554335",
  "this.Container_30C72FD2_121E_72B7_4185_0FFA7496FDA6",
  "this.HTMLText_0DECCFED_12FA_D26D_418B_9646D02C4859",
  "this.Button_0DECFFED_12FA_D26D_419B_F907711405D7"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 520,
 "scrollBarWidth": 10,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 100,
 "layout": "vertical",
 "height": "100%",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 30,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#E73B2C",
 "data": {
  "name": "Container text"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0DECEFED_12FA_D26D_4184_68D80FD2C88F",
 "backgroundOpacity": 0.3,
 "width": 370,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "verticalAlign": "top",
 "height": 40,
 "minWidth": 1,
 "layout": "horizontal",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0,
 "id": "HTMLText_04FFCC2C_1216_7593_41A3_D345BDE131A2",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "HTMLText",
 "height": "28%",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:5.21vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.4vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#996600;font-size:7.5vh;font-family:'DRboran';\"><B>\u0e1b\u0e23\u0e32\u0e2a\u0e32\u0e17\u0e28\u0e35\u0e02\u0e23\u0e20\u0e39\u0e21\u0e34</B></SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#99BB1B",
 "data": {
  "name": "HTMLText18899"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0BD17D93_1236_F6B5_4193_247950F46092",
 "backgroundOpacity": 1,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "height": 7,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "backgroundColor": [
  "#000000"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_04FFDC2C_1216_7593_41A7_64E2588509FB",
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_0B1CF751_121B_B3B2_41AA_8DF6E24BB6F1"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "horizontal",
 "height": "70%",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 22,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "- content"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0,
 "id": "HTMLText_18125A3F_1663_8BEF_4196_AE566E10BAFC",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "HTMLText",
 "height": "30%",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:4.07vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.4vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#996600;font-size:4.07vh;font-family:'DRboran';\"><B>\u0e1b\u0e23\u0e32\u0e2a\u0e32\u0e17\u0e28\u0e35\u0e02\u0e23\u0e20\u0e39\u0e21\u0e34</B></SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#BBD149",
 "data": {
  "name": "HTMLText24905"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_18124A3F_1663_8BEF_4167_4F797ED9B565",
 "backgroundOpacity": 1,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "height": 7,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "backgroundColor": [
  "#000000"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_18127A3F_1663_8BEF_4175_B0DF8CE38BFE",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "HTMLText",
 "height": "100%",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 20,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#99bb1b;font-size:2.29vh;font-family:'RSU';\"><B>\u0e17\u0e35\u0e48\u0e2d\u0e22\u0e39\u0e48 : \u0e15\u0e33\u0e1a\u0e25\u0e23\u0e30\u0e41\u0e07\u0e07 \u0e2d\u0e33\u0e40\u0e20\u0e2d\u0e28\u0e35\u0e02\u0e23\u0e20\u0e39\u0e21\u0e34 \u0e08\u0e31\u0e07\u0e2b\u0e27\u0e31\u0e14\u0e2a\u0e38\u0e23\u0e34\u0e19\u0e17\u0e23\u0e4c</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.29vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.4vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:2.29vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.4vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "scrollBarColor": "#B3D237",
 "data": {
  "name": "HTMLText"
 },
 "shadow": false
},
{
 "textDecoration": "none",
 "fontFamily": "RSU",
 "horizontalAlign": "center",
 "id": "Button_18126A3F_1663_8BEF_41A4_B0EDA1A5F4E3",
 "backgroundOpacity": 0.7,
 "width": 207,
 "shadowColor": "#000000",
 "gap": 5,
 "iconHeight": 32,
 "paddingRight": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingLeft": 0,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 1,
 "class": "Button",
 "click": "this.openLink('https://www.google.com/maps/dir/13.6941001,100.6759779/%E0%B8%9B%E0%B8%A3%E0%B8%B2%E0%B8%AA%E0%B8%B2%E0%B8%97%E0%B8%A8%E0%B8%B5%E0%B8%82%E0%B8%A3%E0%B8%A0%E0%B8%B9%E0%B8%A1%E0%B8%B4+%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%A7%E0%B8%B1%E0%B8%95%E0%B8%B4/@14.3203996,99.9131266,7z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3117423624777d49:0xace0ac8ccc4d46f6!2m2!1d103.7987695!2d14.9445014', '_blank')",
 "verticalAlign": "middle",
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 59,
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#99BB1B"
 ],
 "fontSize": 30,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "normal",
 "borderSize": 0,
 "label": "\u0e40\u0e2a\u0e49\u0e19\u0e17\u0e32\u0e07",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 1,
 "data": {
  "name": "Button31015"
 },
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "bold"
},
{
 "scrollBarOpacity": 0,
 "id": "HTMLText_30F7AFD1_12F6_52B5_41AC_902D90554335",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "HTMLText",
 "height": "52%",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.96vh;font-family:'Otama.ep';\">CONTACT</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:10.55vh;font-family:'Otama.ep';\"><B>INFO</B></SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#BBD149",
 "data": {
  "name": "HTMLText24905"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_30C72FD2_121E_72B7_4185_0FFA7496FDA6",
 "backgroundOpacity": 1,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "height": 7,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "backgroundColor": [
  "#000000"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "black line"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_0DECCFED_12FA_D26D_418B_9646D02C4859",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "HTMLText",
 "height": "100%",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 20,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#99bb1b;font-size:3.18vh;font-family:'Antonio';\"><B>LOREM IPSUM</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:0.13vh;font-family:'Open Sans Semibold';\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#99bb1b;font-size:3.18vh;font-family:'Antonio';\"><B>CONTACT:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:0.13vh;font-family:'Open Sans Semibold';\">E-mail:</SPAN><SPAN STYLE=\"color:#999999;font-size:0.13vh;font-family:'Open Sans Semibold';\"> Info@loremipsum.com </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:0.13vh;font-family:'Open Sans Semibold';\">Web: </SPAN><SPAN STYLE=\"color:#999999;font-size:0.13vh;font-family:'Open Sans Semibold';\">www.loremipsum.com</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:0.13vh;font-family:'Open Sans Semibold';\">Tlf.:</SPAN><SPAN STYLE=\"color:#999999;font-size:0.13vh;font-family:'Open Sans Semibold';\"> +11 111 111 111</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:0.13vh;font-family:'Open Sans Semibold';\">Address:</SPAN><SPAN STYLE=\"color:#999999;font-size:0.13vh;font-family:'Open Sans Semibold';\"> line 1</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:0.13vh;font-family:'Open Sans Semibold';\">Address line 2</SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#B3D237",
 "data": {
  "name": "HTMLText"
 },
 "shadow": false
},
{
 "textDecoration": "none",
 "fontFamily": "Antonio",
 "horizontalAlign": "center",
 "id": "Button_0DECFFED_12FA_D26D_419B_F907711405D7",
 "backgroundOpacity": 0.7,
 "width": 207,
 "shadowColor": "#000000",
 "gap": 5,
 "iconHeight": 32,
 "paddingRight": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingLeft": 0,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 1,
 "class": "Button",
 "click": "this.openLink('http://www.loremipsum.com', '_blank')",
 "verticalAlign": "middle",
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 59,
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#99BB1B"
 ],
 "fontSize": "3.26vh",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "normal",
 "borderSize": 0,
 "label": "BOOK NOW",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 1,
 "data": {
  "name": "Button book now"
 },
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "bold"
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_0B1CF751_121B_B3B2_41AA_8DF6E24BB6F1",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "HTMLText",
 "height": "100%",
 "minWidth": 1,
 "paddingTop": 20,
 "paddingBottom": 0,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.4vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#99bb1b;font-family:'RSU';\"><B>\u0e17\u0e35\u0e48\u0e15\u0e31\u0e49\u0e07 \u0e1a\u0e49\u0e32\u0e19\u0e1b\u0e23\u0e32\u0e2a\u0e32\u0e17 \u0e15\u0e33\u0e1a\u0e25\u0e23\u0e30\u0e41\u0e07\u0e07 \u0e2d\u0e33\u0e40\u0e20\u0e2d\u0e28\u0e35\u0e02\u0e23\u0e20\u0e39\u0e21\u0e34 \u0e08\u0e31\u0e07\u0e2b\u0e27\u0e31\u0e14\u0e2a\u0e38\u0e23\u0e34\u0e19\u0e17\u0e23\u0e4c</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.4vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#99bb1b;font-family:'RSU';\"><B>\u0e2d\u0e32\u0e22\u0e38\u0e2a\u0e21\u0e31\u0e22 \u0e2d\u0e32\u0e22\u0e38\u0e23\u0e32\u0e27\u0e1e\u0e38\u0e17\u0e18\u0e28\u0e15\u0e27\u0e23\u0e23\u0e29\u0e17\u0e35\u0e48 \u0e51\u0e57</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.4vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#99bb1b;font-family:'RSU';\"><B> \u0e41\u0e25\u0e30\u0e1a\u0e39\u0e23\u0e13\u0e30\u0e1b\u0e0f\u0e34\u0e2a\u0e31\u0e07\u0e02\u0e23\u0e13\u0e4c\u0e23\u0e32\u0e27\u0e1e\u0e38\u0e17\u0e18\u0e28\u0e15\u0e27\u0e23\u0e23\u0e29\u0e17\u0e35\u0e48 \u0e52\u0e52 \u2013 \u0e52\u0e53</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.4vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.4vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.4vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.4vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.4vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'RSU';\"> \u0e23\u0e32\u0e22\u0e25\u0e30\u0e40\u0e2d\u0e35\u0e22\u0e14 \u0e1b\u0e23\u0e32\u0e2a\u0e32\u0e17\u0e28\u0e35\u0e02\u0e23\u0e20\u0e39\u0e21\u0e34 \u0e01\u0e48\u0e2d\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e14\u0e49\u0e27\u0e22\u0e2d\u0e34\u0e10 \u0e2b\u0e34\u0e19\u0e17\u0e23\u0e32\u0e22 \u0e41\u0e25\u0e30\u0e28\u0e34\u0e25\u0e32\u0e41\u0e25\u0e07 \u0e1b\u0e23\u0e30\u0e01\u0e2d\u0e1a\u0e14\u0e49\u0e27\u0e22 \u0e1b\u0e23\u0e32\u0e2a\u0e32\u0e17\u0e2d\u0e34\u0e10 \u0e55 \u0e2d\u0e07\u0e04\u0e4c \u0e2b\u0e31\u0e19\u0e2b\u0e19\u0e49\u0e32\u0e44\u0e1b\u0e17\u0e32\u0e07\u0e17\u0e34\u0e28\u0e15\u0e30\u0e27\u0e31\u0e19\u0e2d\u0e2d\u0e01 \u0e21\u0e35\u0e41\u0e1c\u0e19\u0e1c\u0e31\u0e07\u0e40\u0e1b\u0e47\u0e19\u0e23\u0e39\u0e1b\u0e2a\u0e35\u0e48\u0e40\u0e2b\u0e25\u0e35\u0e48\u0e22\u0e21\u0e08\u0e31\u0e15\u0e38\u0e23\u0e31\u0e2a \u0e42\u0e14\u0e22\u0e21\u0e35\u0e1b\u0e23\u0e32\u0e2a\u0e32\u0e17\u0e1b\u0e23\u0e30\u0e18\u0e32\u0e19 \u0e51 \u0e2d\u0e07\u0e04\u0e4c\u0e2d\u0e22\u0e39\u0e48\u0e15\u0e23\u0e07\u0e01\u0e25\u0e32\u0e07 \u0e41\u0e25\u0e30\u0e21\u0e35\u0e1b\u0e23\u0e32\u0e2a\u0e32\u0e17\u0e1a\u0e23\u0e34\u0e27\u0e32\u0e23 \u0e54 \u0e2d\u0e07\u0e04\u0e4c \u0e25\u0e49\u0e2d\u0e21\u0e2d\u0e22\u0e39\u0e48\u0e17\u0e31\u0e49\u0e07 \u0e54 \u0e17\u0e34\u0e28</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.4vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'RSU';\"> </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.4vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'RSU';\"> \u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14\u0e15\u0e31\u0e49\u0e07\u0e2d\u0e22\u0e39\u0e48\u0e1a\u0e19\u0e10\u0e32\u0e19\u0e28\u0e34\u0e25\u0e32\u0e41\u0e25\u0e07\u0e40\u0e14\u0e35\u0e22\u0e27\u0e01\u0e31\u0e19\u0e41\u0e25\u0e30\u0e21\u0e35\u0e2a\u0e23\u0e30\u0e19\u0e49\u0e33\u0e25\u0e49\u0e2d\u0e21\u0e23\u0e2d\u0e1a\u0e40\u0e27\u0e49\u0e19\u0e17\u0e32\u0e07\u0e40\u0e02\u0e49\u0e32\u0e14\u0e49\u0e32\u0e19\u0e2b\u0e19\u0e49\u0e32\u0e14\u0e49\u0e32\u0e19\u0e2b\u0e25\u0e31\u0e07\u0e1b\u0e23\u0e32\u0e2a\u0e32\u0e17\u0e1b\u0e23\u0e30\u0e18\u0e32\u0e19 \u0e21\u0e35\u0e41\u0e1c\u0e19\u0e1c\u0e31\u0e07\u0e40\u0e1b\u0e47\u0e19\u0e23\u0e39\u0e1b\u0e2a\u0e35\u0e48\u0e40\u0e2b\u0e25\u0e35\u0e48\u0e22\u0e21\u0e08\u0e31\u0e15\u0e38\u0e23\u0e31\u0e2a\u0e22\u0e48\u0e2d\u0e21\u0e38\u0e21 \u0e44\u0e21\u0e48\u0e21\u0e35\u0e21\u0e38\u0e02\u0e22\u0e37\u0e48\u0e19 \u0e21\u0e35\u0e1b\u0e23\u0e30\u0e15\u0e39\u0e17\u0e32\u0e07\u0e40\u0e02\u0e49\u0e32-\u0e2d\u0e2d\u0e01\u0e14\u0e49\u0e32\u0e19\u0e17\u0e34\u0e28\u0e15\u0e30\u0e27\u0e31\u0e19\u0e2d\u0e2d\u0e01\u0e40\u0e1e\u0e35\u0e22\u0e07\u0e14\u0e49\u0e32\u0e19\u0e40\u0e14\u0e35\u0e22\u0e27 \u0e17\u0e31\u0e1a\u0e2b\u0e25\u0e31\u0e07\u0e41\u0e01\u0e30\u0e2a\u0e25\u0e31\u0e01\u0e08\u0e32\u0e01\u0e2b\u0e34\u0e19\u0e17\u0e23\u0e32\u0e22\u0e23\u0e39\u0e1b\u0e28\u0e34\u0e27\u0e19\u0e32\u0e0f\u0e23\u0e32\u0e0a\u0e1a\u0e19\u0e41\u0e17\u0e48\u0e19 \u0e21\u0e35\u0e23\u0e39\u0e1b\u0e2b\u0e07\u0e2a\u0e4c\u0e41\u0e1a\u0e01 \u0e53 \u0e15\u0e31\u0e27\u0e2d\u0e22\u0e39\u0e48\u0e40\u0e2b\u0e19\u0e37\u0e2d\u0e40\u0e28\u0e35\u0e22\u0e23\u0e40\u0e01\u0e35\u0e22\u0e23\u0e15\u0e34\u0e21\u0e38\u0e02 \u0e21\u0e35\u0e23\u0e39\u0e1b\u0e1e\u0e23\u0e30\u0e04\u0e40\u0e13\u0e28 \u0e1e\u0e23\u0e30\u0e1e\u0e23\u0e2b\u0e21 \u0e1e\u0e23\u0e30\u0e27\u0e34\u0e29\u0e13\u0e38 \u0e41\u0e25\u0e30\u0e1e\u0e23\u0e30\u0e2d\u0e38\u0e21\u0e32\u0e2d\u0e22\u0e39\u0e48\u0e14\u0e49\u0e32\u0e19\u0e25\u0e48\u0e32\u0e07 \u0e2a\u0e48\u0e27\u0e19\u0e40\u0e2a\u0e32\u0e1b\u0e23\u0e30\u0e14\u0e31\u0e1a\u0e01\u0e23\u0e2d\u0e1a\u0e1b\u0e23\u0e30\u0e15\u0e39\u0e2a\u0e25\u0e31\u0e01\u0e40\u0e1b\u0e47\u0e19\u0e25\u0e32\u0e22\u0e40\u0e17\u0e1e\u0e18\u0e34\u0e14\u0e32 \u0e25\u0e32\u0e22\u0e01\u0e49\u0e32\u0e21\u0e1b\u0e39 \u0e41\u0e25\u0e30\u0e23\u0e39\u0e1b\u0e17\u0e27\u0e32\u0e23\u0e1a\u0e32\u0e25 \u0e2a\u0e48\u0e27\u0e19\u0e1a\u0e23\u0e34\u0e40\u0e27\u0e13\u0e2b\u0e19\u0e49\u0e32\u0e1a\u0e31\u0e19\u0e40\u0e1b\u0e47\u0e19\u0e2d\u0e34\u0e10\u0e1b\u0e23\u0e30\u0e14\u0e31\u0e1a\u0e25\u0e27\u0e14\u0e25\u0e32\u0e22\u0e1b\u0e39\u0e19\u0e1b\u0e31\u0e49\u0e19</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.4vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.4vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.4vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'RSU';\"> \u0e1b\u0e23\u0e32\u0e2a\u0e32\u0e17\u0e1a\u0e23\u0e34\u0e27\u0e32\u0e23 \u0e21\u0e35\u0e41\u0e1c\u0e19\u0e1c\u0e31\u0e07\u0e40\u0e1b\u0e47\u0e19\u0e23\u0e39\u0e1b\u0e2a\u0e35\u0e48\u0e40\u0e2b\u0e25\u0e35\u0e48\u0e22\u0e21\u0e08\u0e31\u0e15\u0e38\u0e23\u0e31\u0e2a\u0e22\u0e48\u0e2d\u0e21\u0e38\u0e21 \u0e21\u0e35\u0e1b\u0e23\u0e30\u0e15\u0e39\u0e17\u0e32\u0e07\u0e40\u0e02\u0e49\u0e32-\u0e2d\u0e2d\u0e01\u0e14\u0e49\u0e32\u0e19\u0e17\u0e34\u0e28\u0e15\u0e30\u0e27\u0e31\u0e19\u0e2d\u0e2d\u0e01\u0e14\u0e49\u0e32\u0e19\u0e40\u0e14\u0e35\u0e22\u0e27 \u0e1e\u0e1a\u0e17\u0e31\u0e1a\u0e2b\u0e25\u0e31\u0e07 \u0e52 \u0e0a\u0e34\u0e49\u0e19 \u0e2a\u0e25\u0e31\u0e01\u0e14\u0e49\u0e27\u0e22\u0e2b\u0e34\u0e19\u0e17\u0e23\u0e32\u0e22 \u0e0a\u0e34\u0e49\u0e19\u0e17\u0e35\u0e48\u0e2b\u0e19\u0e36\u0e48\u0e07\u0e2a\u0e25\u0e31\u0e01\u0e40\u0e1b\u0e47\u0e19\u0e20\u0e32\u0e1e\u0e1e\u0e23\u0e30\u0e01\u0e24\u0e29\u0e13\u0e30\u0e1b\u0e23\u0e30\u0e25\u0e2d\u0e07\u0e01\u0e33\u0e25\u0e31\u0e07\u0e01\u0e31\u0e1a\u0e0a\u0e49\u0e32\u0e07\u0e41\u0e25\u0e30\u0e04\u0e0a\u0e2a\u0e35\u0e2b\u0e4c \u0e0a\u0e34\u0e49\u0e19\u0e17\u0e35\u0e48\u0e2a\u0e2d\u0e07\u0e2a\u0e25\u0e31\u0e01\u0e40\u0e1b\u0e47\u0e19\u0e20\u0e32\u0e1e\u0e1e\u0e23\u0e30\u0e01\u0e24\u0e29\u0e13\u0e30\u0e1b\u0e23\u0e30\u0e25\u0e2d\u0e07\u0e01\u0e33\u0e25\u0e31\u0e07\u0e01\u0e31\u0e1a\u0e04\u0e0a\u0e2a\u0e35\u0e2b\u0e4c</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.4vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'RSU';\"> </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.4vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'RSU';\"> \u0e1b\u0e31\u0e08\u0e08\u0e38\u0e1a\u0e31\u0e19\u0e1b\u0e23\u0e32\u0e2a\u0e32\u0e17\u0e28\u0e35\u0e02\u0e23\u0e20\u0e39\u0e21\u0e34\u0e44\u0e14\u0e49\u0e23\u0e31\u0e1a\u0e01\u0e32\u0e23\u0e1a\u0e39\u0e23\u0e13\u0e30\u0e08\u0e32\u0e01\u0e01\u0e23\u0e21\u0e28\u0e34\u0e25\u0e1b\u0e32\u0e01\u0e23\u0e41\u0e25\u0e49\u0e27 \u0e42\u0e1a\u0e23\u0e32\u0e13\u0e27\u0e31\u0e15\u0e16\u0e38\u0e17\u0e35\u0e48\u0e1e\u0e1a\u0e19\u0e33\u0e21\u0e32\u0e08\u0e31\u0e14\u0e41\u0e2a\u0e14\u0e07\u0e17\u0e35\u0e48\u0e1e\u0e34\u0e1e\u0e34\u0e18\u0e20\u0e31\u0e13\u0e11\u0e2a\u0e16\u0e32\u0e19\u0e41\u0e2b\u0e48\u0e07\u0e0a\u0e32\u0e15\u0e34 \u0e2a\u0e38\u0e23\u0e34\u0e19\u0e17\u0e23\u0e4c \u0e2d\u0e32\u0e17\u0e34 \u0e17\u0e31\u0e1a\u0e2b\u0e25\u0e31\u0e07\u0e23\u0e39\u0e1b\u0e1e\u0e23\u0e30\u0e01\u0e24\u0e29\u0e13\u0e30\u0e17\u0e31\u0e49\u0e07 \u0e52 \u0e0a\u0e34\u0e49\u0e19 \u0e01\u0e25\u0e35\u0e1a\u0e02\u0e19\u0e38\u0e19 \u0e23\u0e27\u0e21\u0e16\u0e36\u0e07\u0e41\u0e1a\u0e1a\u0e08\u0e33\u0e25\u0e2d\u0e07\u0e1b\u0e23\u0e32\u0e2a\u0e32\u0e17</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.4vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'RSU';\">\u0e40\u0e1b\u0e34\u0e14\u0e43\u0e2b\u0e49\u0e40\u0e02\u0e49\u0e32\u0e0a\u0e21\u0e17\u0e38\u0e01\u0e27\u0e31\u0e19 \u0e40\u0e27\u0e25\u0e32 \u0e50\u0e57.\u0e50\u0e50 \u2013 \u0e51\u0e58.\u0e50\u0e50 \u0e19.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.4vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.4vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:0.64vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.4vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:0.64vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.4vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:0.64vh;font-family:'RSU';\"> </SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.64vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.4vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:0.64vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.4vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:0.64vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.4vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:0.64vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.4vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "scrollBarColor": "#99BB1B",
 "data": {
  "name": "HTMLText12940"
 },
 "shadow": false
}],
 "desktopMipmappingEnabled": false,
 "backgroundPreloadEnabled": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "height": "100%",
 "contentOpaque": false,
 "scripts": {
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "existsKey": function(key){  return key in window; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getKey": function(key){  return window[key]; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "registerKey": function(key, value){  window[key] = value; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "unregisterKey": function(key){  delete window[key]; },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } }
 },
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "scrollBarColor": "#000000",
 "data": {
  "name": "Player468"
 },
 "mouseWheelEnabled": true,
 "shadow": false,
 "downloadEnabled": false,
 "defaultVRPointer": "laser",
 "gap": 10
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
