'use strict';
var $mr$WebRtcAnalytics$START_SUCCESS$$ = {TAB:0, $DESKTOP$:1, $OFFSCREEN_TAB$:2}, $mr$WebRtcAnalytics$recordMirrorStartSuccess$$ = function($type$jscomp$344$$) {
  $mr$Analytics$recordEnum$$("MediaRouter.WebRtc.Start.Success", $type$jscomp$344$$, $mr$WebRtcAnalytics$START_SUCCESS$$);
};
var $mr$mirror$webrtc$CloudWebRtcSession$$ = function($mirrorSettings$jscomp$16$$, $route$jscomp$101$$) {
  $mr$mirror$Session$$.call(this, $route$jscomp$101$$);
  this.$H$ = $mirrorSettings$jscomp$16$$;
  this.$h$ = new $mr$PromiseResolver$$;
  this.$b$ = $JSCompiler_StaticMethods_getInternalMessenger$$($route$jscomp$101$$.id);
  this.$m$ = new $mr$PromiseResolver$$;
  this.$G$ = !1;
  this.$o$ = null;
  this.$C$ = !1;
  this.$s$ = this.$l$ = null;
  $JSCompiler_StaticMethods_mr_mirror_webrtc_CloudWebRtcSession_prototype$setUpMessagePort_$$(this);
  $JSCompiler_StaticMethods_mr_mirror_webrtc_CloudWebRtcSession_prototype$setUpPeerConnection_$$(this);
  this.$b$.sendMessage(new $mr$webrtc$Message$$("GET_TURN_CREDENTIALS"));
};
$$jscomp$inherits$$($mr$mirror$webrtc$CloudWebRtcSession$$, $mr$mirror$Session$$);
$mr$mirror$webrtc$CloudWebRtcSession$$.prototype.start = function($mediaStream$jscomp$23$$) {
  var $$jscomp$this$jscomp$540$$ = this;
  return this.$h$.$b$.then(function($pc$jscomp$10$$) {
    if ($pc$jscomp$10$$.$b$) {
      return Promise.reject(new $mr$mirror$Error$$("Mirroring already started"));
    }
    if ($$jscomp$this$jscomp$540$$.$o$) {
      return Promise.reject(new $mr$mirror$Error$$("Session permanently stopped"));
    }
    $$jscomp$this$jscomp$540$$.$l$ = new $mr$Timing$$("MediaRouter.WebRtc.Session.Launch");
    $pc$jscomp$10$$.$peerConnection_$.addStream($mediaStream$jscomp$23$$);
    $pc$jscomp$10$$.start();
    return $$jscomp$this$jscomp$540$$.$m$.$b$;
  });
};
$mr$mirror$webrtc$CloudWebRtcSession$$.prototype.stop = function() {
  var $$jscomp$this$jscomp$541$$ = this;
  this.$m$.reject(new $mr$mirror$Error$$("Session stop requested."));
  this.$s$ && (this.$s$.end(), this.$s$ = null);
  if (this.$o$) {
    return this.$o$;
  }
  this.$C$ = this.$G$ = !1;
  this.$l$ = null;
  return this.$o$ = this.$h$.$b$.then(function($pc$jscomp$11$$) {
    $pc$jscomp$11$$.stop();
  }).then(function() {
    return $$jscomp$this$jscomp$541$$.$b$.$dispose$();
  }).catch(function($error$jscomp$226$$) {
    $$jscomp$this$jscomp$541$$.$b$.$dispose$();
    throw $error$jscomp$226$$;
  });
};
var $JSCompiler_StaticMethods_mr_mirror_webrtc_CloudWebRtcSession_prototype$setUpMessagePort_$$ = function($JSCompiler_StaticMethods_mr_mirror_webrtc_CloudWebRtcSession_prototype$setUpMessagePort_$self$$) {
  $JSCompiler_StaticMethods_mr_mirror_webrtc_CloudWebRtcSession_prototype$setUpMessagePort_$self$$.$b$.onMessage = function($message$jscomp$693$$) {
    if (!$message$jscomp$693$$.type) {
      throw Error("Message has no type.");
    }
    switch($message$jscomp$693$$.type) {
      case "TURN_CREDENTIALS":
        $JSCompiler_StaticMethods_mr_mirror_webrtc_CloudWebRtcSession_prototype$setUpMessagePort_$self$$.$h$.resolve(new $mr$webrtc$PeerConnection$$($JSCompiler_StaticMethods_mr_mirror_webrtc_CloudWebRtcSession_prototype$setUpMessagePort_$self$$.$f$.id, $message$jscomp$693$$.data.credentials));
        break;
      case "ANSWER":
        $JSCompiler_StaticMethods_mr_mirror_webrtc_CloudWebRtcSession_prototype$setUpMessagePort_$self$$.$h$.$b$.then(function($pc$jscomp$12$$) {
          $JSCompiler_StaticMethods_mr_webrtc_PeerConnection_prototype$setRemoteDescription$$($pc$jscomp$12$$, $message$jscomp$693$$.data);
        });
        break;
      case "KNOCK_ANSWER":
        $JSCompiler_StaticMethods_mr_mirror_webrtc_CloudWebRtcSession_prototype$setUpMessagePort_$self$$.$C$ = !0;
        $JSCompiler_StaticMethods_mr_mirror_webrtc_CloudWebRtcSession_prototype$setUpMessagePort_$self$$.$h$.$b$.then(function($pc$jscomp$13$$) {
          $JSCompiler_StaticMethods_mr_webrtc_PeerConnection_prototype$setRemoteDescription$$($pc$jscomp$13$$, $message$jscomp$693$$.data);
        });
        break;
      case "STOP":
        $JSCompiler_StaticMethods_mr_mirror_webrtc_CloudWebRtcSession_prototype$setUpMessagePort_$self$$.$m$.reject(new $mr$mirror$Error$$("Stop signal received"));
        $JSCompiler_StaticMethods_mr_mirror_webrtc_CloudWebRtcSession_prototype$setUpMessagePort_$self$$.stop();
        break;
      default:
        throw new $mr$mirror$Error$$("Unknown message type: " + $message$jscomp$693$$.type);
    }
  };
}, $JSCompiler_StaticMethods_mr_mirror_webrtc_CloudWebRtcSession_prototype$setUpPeerConnection_$$ = function($JSCompiler_StaticMethods_mr_mirror_webrtc_CloudWebRtcSession_prototype$setUpPeerConnection_$self$$) {
  $JSCompiler_StaticMethods_mr_mirror_webrtc_CloudWebRtcSession_prototype$setUpPeerConnection_$self$$.$h$.$b$.then(function($pc$jscomp$14$$) {
    $JSCompiler_StaticMethods_setOnOfferDescriptionReady$$($pc$jscomp$14$$, function($description$jscomp$25$$) {
      $JSCompiler_StaticMethods_mr_mirror_webrtc_CloudWebRtcSession_prototype$setUpPeerConnection_$self$$.$b$.sendMessage(new $mr$webrtc$Message$$("OFFER", new $mr$webrtc$OfferMessageData$$($description$jscomp$25$$, $JSCompiler_StaticMethods_mr_mirror_webrtc_CloudWebRtcSession_prototype$setUpPeerConnection_$self$$.$H$, $mr$webrtc$PeerConnection$MEDIA_CONSTRAINTS$$)));
    });
    $JSCompiler_StaticMethods_setOnDataChannelMessage$$($pc$jscomp$14$$, function($message$jscomp$695_message$jscomp$inline_6387$$) {
      $message$jscomp$695_message$jscomp$inline_6387$$ = $mr$webrtc$Message$fromString$$($message$jscomp$695_message$jscomp$inline_6387$$);
      $JSCompiler_StaticMethods_mr_mirror_webrtc_CloudWebRtcSession_prototype$setUpPeerConnection_$self$$.$b$.sendMessage($message$jscomp$695_message$jscomp$inline_6387$$);
    });
    $JSCompiler_StaticMethods_setOnConnectionSuccess$$($pc$jscomp$14$$, function() {
      $JSCompiler_StaticMethods_mr_mirror_webrtc_CloudWebRtcSession_prototype$setUpPeerConnection_$self$$.$G$ = !0;
      $JSCompiler_StaticMethods_mr_mirror_webrtc_CloudWebRtcSession_prototype$setUpPeerConnection_$self$$.$b$.sendMessage(new $mr$webrtc$Message$$("SESSION_START_SUCCESS"));
      !$JSCompiler_StaticMethods_mr_mirror_webrtc_CloudWebRtcSession_prototype$setUpPeerConnection_$self$$.$C$ && $JSCompiler_StaticMethods_mr_mirror_webrtc_CloudWebRtcSession_prototype$setUpPeerConnection_$self$$.$l$ && $JSCompiler_StaticMethods_mr_mirror_webrtc_CloudWebRtcSession_prototype$setUpPeerConnection_$self$$.$l$.end();
      $JSCompiler_StaticMethods_mr_mirror_webrtc_CloudWebRtcSession_prototype$setUpPeerConnection_$self$$.$l$ = null;
      $JSCompiler_StaticMethods_mr_mirror_webrtc_CloudWebRtcSession_prototype$setUpPeerConnection_$self$$.$s$ = new $mr$LongTiming$$("MediaRouter.WebRtc.Session.Length");
      $JSCompiler_StaticMethods_mr_mirror_webrtc_CloudWebRtcSession_prototype$setUpPeerConnection_$self$$.$m$.resolve($JSCompiler_StaticMethods_mr_mirror_webrtc_CloudWebRtcSession_prototype$setUpPeerConnection_$self$$);
    });
    $JSCompiler_StaticMethods_setOnConnectionClosed$$($pc$jscomp$14$$, function() {
      $JSCompiler_StaticMethods_mr_mirror_webrtc_CloudWebRtcSession_prototype$setUpPeerConnection_$self$$.$b$.sendMessage(new $mr$webrtc$Message$$("SESSION_END"));
    });
    $JSCompiler_StaticMethods_setOnConnectionFailure$$($pc$jscomp$14$$, function($error$jscomp$227$$) {
      $JSCompiler_StaticMethods_mr_mirror_webrtc_CloudWebRtcSession_prototype$setUpPeerConnection_$self$$.$G$ || $JSCompiler_StaticMethods_mr_mirror_webrtc_CloudWebRtcSession_prototype$setUpPeerConnection_$self$$.$m$.reject($error$jscomp$227$$);
      $JSCompiler_StaticMethods_mr_mirror_webrtc_CloudWebRtcSession_prototype$setUpPeerConnection_$self$$.$b$.sendMessage(new $mr$webrtc$Message$$("SESSION_FAILURE"));
    });
  });
};
var $mr$mirror$webrtc$WebRtcService$$ = function() {
  $mr$mirror$Service$$.call(this, "webrtc");
};
$$jscomp$inherits$$($mr$mirror$webrtc$WebRtcService$$, $mr$mirror$Service$$);
$JSCompiler_prototypeAlias$$ = $mr$mirror$webrtc$WebRtcService$$.prototype;
$JSCompiler_prototypeAlias$$.$createMirrorSession$ = function($mirrorSettings$jscomp$17$$, $route$jscomp$102$$) {
  return new $mr$mirror$webrtc$CloudWebRtcSession$$($mirrorSettings$jscomp$17$$, $route$jscomp$102$$);
};
$JSCompiler_prototypeAlias$$.$recordTabMirrorStartSuccess$ = function() {
  $mr$WebRtcAnalytics$recordMirrorStartSuccess$$(0);
};
$JSCompiler_prototypeAlias$$.$recordDesktopMirrorStartSuccess$ = function() {
  $mr$WebRtcAnalytics$recordMirrorStartSuccess$$(1);
};
$JSCompiler_prototypeAlias$$.$recordOffscreenTabMirrorStartSuccess$ = function() {
  $mr$WebRtcAnalytics$recordMirrorStartSuccess$$(2);
};
$JSCompiler_prototypeAlias$$.$recordMirrorSessionEnded$ = function() {
  $mr$Analytics$recordEvent$$("MediaRouter.WebRtc.Session.End");
};
$JSCompiler_prototypeAlias$$.$recordMirrorStartFailure$ = function($reason$jscomp$81$$) {
  $mr$Analytics$recordEnum$$("MediaRouter.WebRtc.Start.Failure", $reason$jscomp$81$$, $mr$MirrorAnalytics$CapturingFailure$$);
};
$JSCompiler_prototypeAlias$$.$recordStreamEnded$ = function() {
  $mr$Analytics$recordEvent$$("MediaRouter.WebRtc.Stream.End");
};
var $mr$mirror$webrtc$WebRtcService$INSTANCE_$$ = new $mr$mirror$webrtc$WebRtcService$$;
$mr$Module$onModuleLoaded$$("mr.mirror.webrtc.WebRtcService", $mr$mirror$webrtc$WebRtcService$INSTANCE_$$);

