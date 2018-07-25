/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
        
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
  /**/
      if(navigator.onLine) 
    {
       /* cordova.getAppVersion.getPackageName(function(pkgname){
           alert(pkgname);
        });*/
       var response =  appSetting('com.naat.app');
      var rowSize = response[0];
        sliderSettingWithData();
        showVideoPost(rowSize);
        showWallaperPost(rowSize);
       oneSignalNotification('e24cd419-e704-4dd1-bcb5-7185df9290fe');
        //admob start
        initAd('ca-app-pub-3940256099942544/6300978111' , 'ca-app-pub-3940256099942544/1033173712');
        showBannerFunc();
        showInterstitialFunc();
        //admob end
    

    }
    else
    {
        window.location.href = "noconnection.html";
    }  
        console.log('Received Event: ' + id);
    }
};

app.initialize();