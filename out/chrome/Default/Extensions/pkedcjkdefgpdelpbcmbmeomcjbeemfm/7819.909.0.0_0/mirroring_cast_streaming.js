'use strict';
var $mr$CastStreamingAnalytics$START_SUCCESS$$ = {TAB:0, $DESKTOP$:1, $OFFSCREEN_TAB$:2}, $mr$CastStreamingAnalytics$startTimingSessionLaunch$$ = function() {
  return new $mr$Timing$$("MediaRouter.CastStreaming.Session.Launch");
}, $mr$CastStreamingAnalytics$startTimingSessionLength$$ = function() {
  return new $mr$LongTiming$$("MediaRouter.CastStreaming.Session.Length");
}, $mr$CastStreamingAnalytics$recordMirrorStartSuccess$$ = function($type$jscomp$223$$) {
  $mr$Analytics$recordEnum$$("MediaRouter.CastStreaming.Start.Success", $type$jscomp$223$$, $mr$CastStreamingAnalytics$START_SUCCESS$$);
};
var $mr$mirror$cast$LogUploader$logger_$$ = $mr$Logger$getInstance$$("mr.mirror.cast.LogUploader"), $mr$mirror$cast$LogUploader$uploadLog$$ = function($blob$jscomp$15$$, $opt_feedbackId$$, $opt_callback$jscomp$167$$) {
  $mr$mirror$cast$LogUploader$uploadFile_$$("raw_events.log.gz", $blob$jscomp$15$$, $opt_feedbackId$$, $opt_callback$jscomp$167$$);
  return $opt_feedbackId$$ ? "https://crash-staging.corp.google.com/samples?reportid=&q=" + encodeURIComponent("UserComments='" + $opt_feedbackId$$ + "'") : "";
}, $mr$mirror$cast$LogUploader$uploadFile_$$ = function($name$jscomp$177$$, $data$jscomp$97$$, $opt_feedbackId$jscomp$1$$, $opt_callback$jscomp$169$$) {
  if (0 == $data$jscomp$97$$.size) {
    $mr$mirror$cast$LogUploader$logger_$$.info("Trying to upload an empty file to Crash"), $opt_callback$jscomp$169$$ && $opt_callback$jscomp$169$$(null);
  } else {
    var $formData$$ = new FormData;
    $formData$$.append("prod", "Cast");
    $formData$$.append("ver", chrome.runtime.getManifest().version);
    $formData$$.append($name$jscomp$177$$, $data$jscomp$97$$);
    $opt_feedbackId$jscomp$1$$ && $formData$$.append("comments", $opt_feedbackId$jscomp$1$$);
    $goog$net$XhrIo$send$$("https://clients2.google.com/cr/staging_report", function($e$jscomp$99_xhr$jscomp$13$$) {
      $e$jscomp$99_xhr$jscomp$13$$ = $e$jscomp$99_xhr$jscomp$13$$.target;
      var $reportId$jscomp$3$$ = null;
      $JSCompiler_StaticMethods_isSuccess$$($e$jscomp$99_xhr$jscomp$13$$) ? ($reportId$jscomp$3$$ = $JSCompiler_StaticMethods_getResponseText$$($e$jscomp$99_xhr$jscomp$13$$), $mr$mirror$cast$LogUploader$logger_$$.info("Upload to Crash succeeded: " + $reportId$jscomp$3$$)) : $mr$mirror$cast$LogUploader$logger_$$.info("Upload to Crash failed. HTTP status: " + $e$jscomp$99_xhr$jscomp$13$$.$getStatus$());
      $opt_callback$jscomp$169$$ && $opt_callback$jscomp$169$$($reportId$jscomp$3$$);
    }, "POST", $formData$$, void 0, 3E4);
  }
};
var $mr$mirror$cast$LogUtils$$ = function() {
  this.$b$ = 0;
  $mr$PersistentDataManager$register$$(this);
}, $mr$mirror$cast$LogUtils$getInstance$$ = function() {
  $mr$mirror$cast$LogUtils$instance_$$ || ($mr$mirror$cast$LogUtils$instance_$$ = new $mr$mirror$cast$LogUtils$$);
  return $mr$mirror$cast$LogUtils$instance_$$;
}, $JSCompiler_StaticMethods_shouldAutoUploadLog$$ = function() {
  var $JSCompiler_StaticMethods_shouldAutoUploadLog$self$$ = $mr$mirror$cast$LogUtils$getInstance$$(), $uploadSettings$$ = {fraction:1}, $autoSubmitTimeLimitMillis$$ = $uploadSettings$$.autoSubmitTimeLimitMillis, $nowMillis$$ = Date.now();
  return $JSCompiler_StaticMethods_shouldAutoUploadLog$self$$.$b$ && $autoSubmitTimeLimitMillis$$ && $nowMillis$$ - $JSCompiler_StaticMethods_shouldAutoUploadLog$self$$.$b$ < $autoSubmitTimeLimitMillis$$ ? !1 : Math.random() < $uploadSettings$$.fraction;
};
$mr$mirror$cast$LogUtils$$.prototype.$getStorageKey$ = function() {
  return "mirror.cast.LogUtils";
};
$mr$mirror$cast$LogUtils$$.prototype.$module$contents$mr$LogManager_LogManager_prototype$getData$ = function() {
  return [void 0, {lastAutoSubmitMillis:this.$b$}];
};
$mr$mirror$cast$LogUtils$$.prototype.$loadSavedData$ = function() {
  var $savedData$jscomp$18$$ = $mr$PersistentDataManager$getPersistentData$$(this);
  this.$b$ = $savedData$jscomp$18$$ && $savedData$jscomp$18$$.lastAutoSubmitMillis || 0;
};
var $mr$mirror$cast$LogUtils$instance_$$ = null;
$mr$Logger$getInstance$$("mr.mirror.cast.LogUtils");
var $module$contents$mr$mirror$cast$MessageType_MessageType$$ = {$OFFER$:"OFFER", $ANSWER$:"ANSWER", $PRESENTATION$:"PRESENTATION", $GET_STATUS$:"GET_STATUS", $STATUS_RESPONSE$:"STATUS_RESPONSE", $GET_CAPABILITIES$:"GET_CAPABILITIES", $CAPABILITIES_RESPONSE$:"CAPABILITIES_RESPONSE", $RPC$:"RPC"};
var $module$exports$mr$mirror$cast$ReceiverResponse$$ = function() {
  this.capabilities = this.status = this.$b$ = this.error = this.rpc = this.result = this.type = this.$f$ = this.sessionId = null;
}, $module$exports$mr$mirror$cast$ReceiverResponse$parse$$ = function($anything_byteView_humanReadableForm$$) {
  try {
    if ("string" !== typeof $anything_byteView_humanReadableForm$$) {
      throw SyntaxError("Cannot parse non-string as JSON");
    }
    var $response$jscomp$36$$;
    $module$exports$mr$mirror$cast$ReceiverResponse$processAsObject$$(JSON.parse($anything_byteView_humanReadableForm$$), function($object$jscomp$22$$) {
      $response$jscomp$36$$ = $module$exports$mr$mirror$cast$ReceiverResponse$coerce$$($object$jscomp$22$$);
    }, function() {
      throw Error("non-Object result from JSON parse");
    });
    return $goog$asserts$assert$$($response$jscomp$36$$);
  } catch ($err$jscomp$53$$) {
    var $parseError$$ = $err$jscomp$53$$ instanceof SyntaxError ? "JSON parse error: " + $err$jscomp$53$$.message : "Type coercion error: " + $err$jscomp$53$$.message;
  }
  "string" == typeof $anything_byteView_humanReadableForm$$ ? $anything_byteView_humanReadableForm$$ = "a string: " + $anything_byteView_humanReadableForm$$ : $anything_byteView_humanReadableForm$$ instanceof ArrayBuffer ? ($anything_byteView_humanReadableForm$$ = new Uint8Array($anything_byteView_humanReadableForm$$), $anything_byteView_humanReadableForm$$ = "an ArrayBuffer whose base64 is " + btoa(String.fromCharCode.apply(null, $anything_byteView_humanReadableForm$$))) : $anything_byteView_humanReadableForm$$ = 
  "of invalid data type " + typeof $anything_byteView_humanReadableForm$$;
  throw Error($parseError$$ + ". Input was " + $anything_byteView_humanReadableForm$$);
}, $module$exports$mr$mirror$cast$ReceiverResponse$coerce$$ = function($from$jscomp$2$$) {
  var $response$jscomp$37$$ = new $module$exports$mr$mirror$cast$ReceiverResponse$$;
  null != $from$jscomp$2$$.sessionId && ($response$jscomp$37$$.sessionId = String($from$jscomp$2$$.sessionId));
  $module$exports$mr$mirror$cast$ReceiverResponse$processAsNumber$$($from$jscomp$2$$.seqNum, function($number$jscomp$10$$) {
    $response$jscomp$37$$.$f$ = $number$jscomp$10$$;
  }, function() {
    throw Error('"seqNum" must be a number');
  });
  if ("type" in $from$jscomp$2$$) {
    for (var $upcased$$ = String($from$jscomp$2$$.type).toUpperCase(), $$jscomp$iter$252$$ = $$jscomp$makeIterator$$(Object.keys($module$contents$mr$mirror$cast$MessageType_MessageType$$)), $$jscomp$key$key$jscomp$5$$ = $$jscomp$iter$252$$.next(); !$$jscomp$key$key$jscomp$5$$.done; $$jscomp$key$key$jscomp$5$$ = $$jscomp$iter$252$$.next()) {
      if ($module$contents$mr$mirror$cast$MessageType_MessageType$$[$$jscomp$key$key$jscomp$5$$.value] == $upcased$$) {
        $response$jscomp$37$$.type = $upcased$$;
        break;
      }
    }
    if (!$response$jscomp$37$$.type) {
      throw Error('not a known message "type"');
    }
  }
  "result" in $from$jscomp$2$$ && ($response$jscomp$37$$.result = String($from$jscomp$2$$.result));
  if ("rpc" in $from$jscomp$2$$) {
    if ("string" !== typeof $from$jscomp$2$$.rpc) {
      throw Error('"rpc" must be a String containing a base64 payload');
    }
    $response$jscomp$37$$.rpc = new Uint8Array([].concat($$jscomp$arrayFromIterable$$(atob($from$jscomp$2$$.rpc))).map(function($c$jscomp$24$$) {
      return $c$jscomp$24$$.charCodeAt(0);
    }));
  }
  $module$exports$mr$mirror$cast$ReceiverResponse$processAsObject$$($from$jscomp$2$$.error, function($object$jscomp$23$$) {
    $response$jscomp$37$$.error = $module$exports$mr$mirror$cast$ReceiverResponse$Error$coerce$$($object$jscomp$23$$);
  }, function() {
    throw Error('"error" must be an Object');
  });
  $module$exports$mr$mirror$cast$ReceiverResponse$processAsObject$$($from$jscomp$2$$.answer, function($object$jscomp$24$$) {
    $response$jscomp$37$$.$b$ = $module$exports$mr$mirror$cast$ReceiverResponse$Answer$coerce$$($object$jscomp$24$$);
  }, function() {
    throw Error('"answer" must be an Object');
  });
  $module$exports$mr$mirror$cast$ReceiverResponse$processAsObject$$($from$jscomp$2$$.status, function($object$jscomp$25$$) {
    $response$jscomp$37$$.status = $module$exports$mr$mirror$cast$ReceiverResponse$Status$coerce$$($object$jscomp$25$$);
  }, function() {
    throw Error('"status" must be an Object');
  });
  $module$exports$mr$mirror$cast$ReceiverResponse$processAsObject$$($from$jscomp$2$$.capabilities, function($object$jscomp$26$$) {
    $response$jscomp$37$$.capabilities = $module$exports$mr$mirror$cast$ReceiverResponse$Capabilities$coerce$$($object$jscomp$26$$);
  }, function() {
    throw Error('"capabilities" must be an Object');
  });
  return $response$jscomp$37$$;
}, $module$exports$mr$mirror$cast$ReceiverResponse$processAsObject$$ = function($thing$$, $process$$, $notAnObject$$) {
  void 0 !== $thing$$ && ($thing$$ instanceof Object ? $process$$($thing$$) : $notAnObject$$());
}, $module$exports$mr$mirror$cast$ReceiverResponse$processAsNumber$$ = function($thing$jscomp$1$$, $process$jscomp$1$$, $notANumber$$) {
  void 0 !== $thing$jscomp$1$$ && ("number" !== typeof $thing$jscomp$1$$ ? $notANumber$$() : $process$jscomp$1$$($thing$jscomp$1$$));
}, $module$exports$mr$mirror$cast$ReceiverResponse$processAsNumberArray$$ = function($thing$jscomp$2$$, $process$jscomp$2$$, $notAnArrayOfNumbers$$) {
  void 0 !== $thing$jscomp$2$$ && ($thing$jscomp$2$$ instanceof Array && $thing$jscomp$2$$.every(function($elem$jscomp$6$$) {
    return "number" === typeof $elem$jscomp$6$$;
  }) ? $process$jscomp$2$$($thing$jscomp$2$$) : $notAnArrayOfNumbers$$());
}, $module$exports$mr$mirror$cast$ReceiverResponse$processAsStringArray$$ = function($thing$jscomp$3$$, $process$jscomp$3$$, $notAnArray$$) {
  void 0 !== $thing$jscomp$3$$ && ($thing$jscomp$3$$ instanceof Array ? $process$jscomp$3$$($thing$jscomp$3$$.map(function($s$jscomp$36$$) {
    return String($s$jscomp$36$$);
  })) : $notAnArray$$());
}, $module$exports$mr$mirror$cast$ReceiverResponse$Answer$$ = function() {
  this.$l$ = null;
  this.$b$ = [];
  this.$f$ = [];
  this.$g$ = this.$h$ = this.$m$ = null;
}, $module$exports$mr$mirror$cast$ReceiverResponse$Answer$coerce$$ = function($from$jscomp$3$$) {
  var $answer$$ = new $module$exports$mr$mirror$cast$ReceiverResponse$Answer$$;
  $module$exports$mr$mirror$cast$ReceiverResponse$processAsNumber$$($from$jscomp$3$$.udpPort, function($number$jscomp$11$$) {
    $answer$$.$l$ = $number$jscomp$11$$;
  }, function() {
    throw Error('"answer.udpPort" must be a number');
  });
  $module$exports$mr$mirror$cast$ReceiverResponse$processAsNumberArray$$($from$jscomp$3$$.sendIndexes, function($numberArray$$) {
    $answer$$.$b$ = $numberArray$$;
  }, function() {
    throw Error('"answer.sendIndexes" must be an array of numbers');
  });
  $module$exports$mr$mirror$cast$ReceiverResponse$processAsNumberArray$$($from$jscomp$3$$.ssrcs, function($numberArray$jscomp$1$$) {
    $answer$$.$f$ = $numberArray$jscomp$1$$;
  }, function() {
    throw Error('"answer.ssrcs" must be an array of numbers');
  });
  "IV" in $from$jscomp$3$$ && ($answer$$.$m$ = String($from$jscomp$3$$.IV));
  "receiverGetStatus" in $from$jscomp$3$$ && ($answer$$.$h$ = "true" == String($from$jscomp$3$$.receiverGetStatus).toLowerCase());
  "castMode" in $from$jscomp$3$$ && ($answer$$.$g$ = String($from$jscomp$3$$.castMode));
  return $answer$$;
}, $module$exports$mr$mirror$cast$ReceiverResponse$Error$$ = function() {
  this.details = this.description = this.code = null;
}, $module$exports$mr$mirror$cast$ReceiverResponse$Error$coerce$$ = function($from$jscomp$4$$) {
  var $error$jscomp$72$$ = new $module$exports$mr$mirror$cast$ReceiverResponse$Error$$;
  $module$exports$mr$mirror$cast$ReceiverResponse$processAsNumber$$($from$jscomp$4$$.code, function($number$jscomp$12$$) {
    $error$jscomp$72$$.code = $number$jscomp$12$$;
  }, function() {
    throw Error('"error.code" must be a number');
  });
  "description" in $from$jscomp$4$$ && ($error$jscomp$72$$.description = String($from$jscomp$4$$.description));
  $module$exports$mr$mirror$cast$ReceiverResponse$processAsObject$$($from$jscomp$4$$.details, function($object$jscomp$27$$) {
    $error$jscomp$72$$.details = $object$jscomp$27$$;
  }, function() {
    throw Error('"error.details" must be an Object');
  });
  return $error$jscomp$72$$;
}, $module$exports$mr$mirror$cast$ReceiverResponse$Status$$ = function() {
  this.$f$ = this.$b$ = null;
}, $module$exports$mr$mirror$cast$ReceiverResponse$Status$coerce$$ = function($from$jscomp$5$$) {
  var $status$jscomp$10$$ = new $module$exports$mr$mirror$cast$ReceiverResponse$Status$$;
  $module$exports$mr$mirror$cast$ReceiverResponse$processAsNumber$$($from$jscomp$5$$.wifiSnr, function($number$jscomp$13$$) {
    $status$jscomp$10$$.$b$ = $number$jscomp$13$$;
  }, function() {
    throw Error('"status.wifiSnr" must be a number');
  });
  $module$exports$mr$mirror$cast$ReceiverResponse$processAsNumberArray$$($from$jscomp$5$$.wifiSpeed, function($numberArray$jscomp$2$$) {
    $status$jscomp$10$$.$f$ = $numberArray$jscomp$2$$;
  }, function() {
    throw Error('"status.wifiSpeed" must be an array of numbers');
  });
  return $status$jscomp$10$$;
}, $module$exports$mr$mirror$cast$ReceiverResponse$Capabilities$$ = function() {
  this.$f$ = this.$b$ = null;
}, $module$exports$mr$mirror$cast$ReceiverResponse$Capabilities$coerce$$ = function($from$jscomp$6_keySystems$$) {
  var $capabilities$jscomp$8$$ = new $module$exports$mr$mirror$cast$ReceiverResponse$Capabilities$$;
  $module$exports$mr$mirror$cast$ReceiverResponse$processAsStringArray$$($from$jscomp$6_keySystems$$.mediaCaps, function($stringArray$jscomp$1$$) {
    $capabilities$jscomp$8$$.$b$ = $stringArray$jscomp$1$$;
  }, function() {
    throw Error('"capabilities.mediaCaps" must be an array');
  });
  if ("keySystems" in $from$jscomp$6_keySystems$$) {
    $from$jscomp$6_keySystems$$ = $from$jscomp$6_keySystems$$.keySystems;
    if (!($from$jscomp$6_keySystems$$ instanceof Array)) {
      throw Error('"capabilities.keySystems" must be an array');
    }
    $capabilities$jscomp$8$$.$f$ = $from$jscomp$6_keySystems$$.map(function($entry$jscomp$26$$) {
      var $keySystem$jscomp$1$$;
      $module$exports$mr$mirror$cast$ReceiverResponse$processAsObject$$($entry$jscomp$26$$, function($object$jscomp$28$$) {
        $keySystem$jscomp$1$$ = $module$exports$mr$mirror$cast$ReceiverResponse$KeySystem$coerce$$($object$jscomp$28$$);
      }, function() {
        throw Error('"capabilities.keySystems" entries must be *Objects');
      });
      return $keySystem$jscomp$1$$;
    });
  }
  return $capabilities$jscomp$8$$;
}, $module$exports$mr$mirror$cast$ReceiverResponse$KeySystem$$ = function() {
  this.$g$ = this.$o$ = this.$m$ = this.$l$ = this.$C$ = this.$b$ = this.$s$ = this.$f$ = this.initDataTypes = this.$h$ = null;
}, $module$exports$mr$mirror$cast$ReceiverResponse$KeySystem$coerce$$ = function($from$jscomp$7$$) {
  var $keySystem$jscomp$2$$ = new $module$exports$mr$mirror$cast$ReceiverResponse$KeySystem$$;
  "keySystemName" in $from$jscomp$7$$ && ($keySystem$jscomp$2$$.$h$ = String($from$jscomp$7$$.keySystemName));
  $module$exports$mr$mirror$cast$ReceiverResponse$processAsStringArray$$($from$jscomp$7$$.initDataTypes, function($stringArray$jscomp$2$$) {
    $keySystem$jscomp$2$$.initDataTypes = $stringArray$jscomp$2$$;
  }, function() {
    throw Error('"capabilities.initDataTypes" must be an array');
  });
  $module$exports$mr$mirror$cast$ReceiverResponse$processAsStringArray$$($from$jscomp$7$$.codecs, function($stringArray$jscomp$3$$) {
    $keySystem$jscomp$2$$.$f$ = $stringArray$jscomp$3$$;
  }, function() {
    throw Error('"capabilities.codecs" must be an array');
  });
  $module$exports$mr$mirror$cast$ReceiverResponse$processAsStringArray$$($from$jscomp$7$$.secureCodecs, function($stringArray$jscomp$4$$) {
    $keySystem$jscomp$2$$.$s$ = $stringArray$jscomp$4$$;
  }, function() {
    throw Error('"capabilities.secureCodecs" must be an array');
  });
  $module$exports$mr$mirror$cast$ReceiverResponse$processAsStringArray$$($from$jscomp$7$$.audioRobustness, function($stringArray$jscomp$5$$) {
    $keySystem$jscomp$2$$.$b$ = $stringArray$jscomp$5$$;
  }, function() {
    throw Error('"capabilities.audioRobustness" must be an array');
  });
  $module$exports$mr$mirror$cast$ReceiverResponse$processAsStringArray$$($from$jscomp$7$$.videoRobustness, function($stringArray$jscomp$6$$) {
    $keySystem$jscomp$2$$.$C$ = $stringArray$jscomp$6$$;
  }, function() {
    throw Error('"capabilities.videoRobustness" must be an array');
  });
  "persistentLicenseSessionSupport" in $from$jscomp$7$$ && ($keySystem$jscomp$2$$.$l$ = String($from$jscomp$7$$.persistentLicenseSessionSupport));
  "persistentReleaseMessageSessionSupport" in $from$jscomp$7$$ && ($keySystem$jscomp$2$$.$m$ = String($from$jscomp$7$$.persistentReleaseMessageSessionSupport));
  "persistentStateSupport" in $from$jscomp$7$$ && ($keySystem$jscomp$2$$.$o$ = String($from$jscomp$7$$.persistentStateSupport));
  "distinctiveIdentifierSupport" in $from$jscomp$7$$ && ($keySystem$jscomp$2$$.$g$ = String($from$jscomp$7$$.distinctiveIdentifierSupport));
  return $keySystem$jscomp$2$$;
};
var $module$exports$mr$mirror$cast$MessageDispatcher$$ = function($routeId$jscomp$124$$) {
  this.$logger_$ = $mr$Logger$getInstance$$("mr.mirror.cast.MessageDispatcher");
  this.$h$ = $routeId$jscomp$124$$;
  this.$b$ = null;
  this.$f$ = new Map;
  this.$g$ = 0;
};
$module$exports$mr$mirror$cast$MessageDispatcher$$.prototype.subscribe = function($type$jscomp$224$$, $callback$jscomp$383$$) {
  if (this.$f$.has($type$jscomp$224$$)) {
    throw Error("Attempt to multiple-subscribe to the same response type: " + $type$jscomp$224$$);
  }
  this.$f$.set($type$jscomp$224$$, $callback$jscomp$383$$);
  this.$g$ = 0;
  $JSCompiler_StaticMethods_mr_Logger_prototype$fine$$(this.$logger_$, "Added subscriber for " + $type$jscomp$224$$ + "-type messages.");
  this.$b$ || (this.$b$ = $JSCompiler_StaticMethods_getInternalMessenger$$(this.$h$), this.$b$.onMessage = this.$l$.bind(this));
};
var $JSCompiler_StaticMethods_module$exports$mr$mirror$cast$MessageDispatcher_prototype$unsubscribe$$ = function($JSCompiler_StaticMethods_module$exports$mr$mirror$cast$MessageDispatcher_prototype$unsubscribe$self$$, $type$jscomp$225$$) {
  $JSCompiler_StaticMethods_module$exports$mr$mirror$cast$MessageDispatcher_prototype$unsubscribe$self$$.$f$.delete($type$jscomp$225$$) && $JSCompiler_StaticMethods_mr_Logger_prototype$fine$$($JSCompiler_StaticMethods_module$exports$mr$mirror$cast$MessageDispatcher_prototype$unsubscribe$self$$.$logger_$, function() {
    return "Removed subscriber of " + $type$jscomp$225$$ + "-type messages.";
  });
  0 == $JSCompiler_StaticMethods_module$exports$mr$mirror$cast$MessageDispatcher_prototype$unsubscribe$self$$.$f$.size && $JSCompiler_StaticMethods_module$exports$mr$mirror$cast$MessageDispatcher_prototype$unsubscribe$self$$.$b$ && ($JSCompiler_StaticMethods_module$exports$mr$mirror$cast$MessageDispatcher_prototype$unsubscribe$self$$.$b$.$dispose$(), $JSCompiler_StaticMethods_module$exports$mr$mirror$cast$MessageDispatcher_prototype$unsubscribe$self$$.$b$ = null);
};
$module$exports$mr$mirror$cast$MessageDispatcher$$.prototype.sendMessage = function($message$jscomp$161$$) {
  return this.$b$ ? "RPC" == $message$jscomp$161$$.type ? this.$b$.sendMessage($message$jscomp$161$$, {namespace:"urn:x-cast:com.google.cast.remoting"}) : this.$b$.sendMessage($message$jscomp$161$$, {namespace:"urn:x-cast:com.google.cast.webrtc"}) : Promise.reject(Error("Require at least one subscriber before sending messages."));
};
var $JSCompiler_StaticMethods_requestReply$$ = function($JSCompiler_StaticMethods_requestReply$self$$, $message$jscomp$162$$, $responseType$jscomp$1$$, $timeout$jscomp$12$$, $callback$jscomp$384$$) {
  var $timeoutId$jscomp$1$$ = null, $stopProcessingReplies$$ = function() {
    $JSCompiler_StaticMethods_module$exports$mr$mirror$cast$MessageDispatcher_prototype$unsubscribe$$($JSCompiler_StaticMethods_requestReply$self$$, $responseType$jscomp$1$$);
    null != $timeoutId$jscomp$1$$ && (clearTimeout($timeoutId$jscomp$1$$), $timeoutId$jscomp$1$$ = null);
  };
  try {
    $JSCompiler_StaticMethods_requestReply$self$$.subscribe($responseType$jscomp$1$$, function($response$jscomp$38$$) {
      $callback$jscomp$384$$($response$jscomp$38$$) && $stopProcessingReplies$$();
    });
  } catch ($error$jscomp$73$$) {
    $callback$jscomp$384$$(null, $error$jscomp$73$$);
    return;
  }
  $timeoutId$jscomp$1$$ = setTimeout(function() {
    $stopProcessingReplies$$();
    $callback$jscomp$384$$(null, Error("timeout"));
  }, $timeout$jscomp$12$$);
  $JSCompiler_StaticMethods_requestReply$self$$.sendMessage($message$jscomp$162$$).catch(function($error$jscomp$74$$) {
    $stopProcessingReplies$$();
    $callback$jscomp$384$$(null, $error$jscomp$74$$);
  });
};
$module$exports$mr$mirror$cast$MessageDispatcher$$.prototype.$l$ = function($routeMessage$jscomp$3$$) {
  if ($routeMessage$jscomp$3$$ && "string" === typeof $routeMessage$jscomp$3$$.namespace_ && $routeMessage$jscomp$3$$.namespace_.startsWith("urn:x-cast:com.google.cast.")) {
    do {
      var $errorMessage$jscomp$3_response$jscomp$39$$ = void 0;
      try {
        $errorMessage$jscomp$3_response$jscomp$39$$ = $module$exports$mr$mirror$cast$ReceiverResponse$parse$$($routeMessage$jscomp$3$$.data);
      } catch ($parseError$jscomp$1$$) {
        $errorMessage$jscomp$3_response$jscomp$39$$ = $parseError$jscomp$1$$.message;
        break;
      }
      if ($errorMessage$jscomp$3_response$jscomp$39$$.type) {
        var $callback$jscomp$385$$ = this.$f$.get($errorMessage$jscomp$3_response$jscomp$39$$.type);
        if ($callback$jscomp$385$$) {
          try {
            $callback$jscomp$385$$($errorMessage$jscomp$3_response$jscomp$39$$);
            return;
          } catch ($error$jscomp$75$$) {
            $errorMessage$jscomp$3_response$jscomp$39$$ = "Error thrown during delivery. Response was: " + (JSON.stringify($errorMessage$jscomp$3_response$jscomp$39$$) + ". Error from subscriber callback was: ") + ($error$jscomp$75$$.message + ".");
          }
        } else {
          $errorMessage$jscomp$3_response$jscomp$39$$ = "Message was ignored: " + JSON.stringify($errorMessage$jscomp$3_response$jscomp$39$$);
        }
      } else {
        $errorMessage$jscomp$3_response$jscomp$39$$ = "Message did not include response type: " + JSON.stringify($errorMessage$jscomp$3_response$jscomp$39$$);
      }
    } while (0);
    10 > this.$g$ ? this.$logger_$.$warning$($errorMessage$jscomp$3_response$jscomp$39$$) : $JSCompiler_StaticMethods_mr_Logger_prototype$fine$$(this.$logger_$, $errorMessage$jscomp$3_response$jscomp$39$$);
    ++this.$g$;
  }
};
var $module$exports$mr$Sequencer$$ = function() {
  this.$b$ = Promise.resolve(1);
}, $JSCompiler_StaticMethods_conductFrom$$ = function($JSCompiler_StaticMethods_conductFrom$self$$, $fromCheckpoint$$, $executor$jscomp$1$$) {
  return $JSCompiler_StaticMethods_conduct$$($JSCompiler_StaticMethods_conductFrom$self$$, function($checkpoint$$) {
    return $checkpoint$$ == $fromCheckpoint$$;
  }, $executor$jscomp$1$$);
}, $JSCompiler_StaticMethods_conductFromAny$$ = function($JSCompiler_StaticMethods_conductFromAny$self$$, $executor$jscomp$2$$) {
  var $possibleCheckpoints$$ = [3, 4];
  return $JSCompiler_StaticMethods_conduct$$($JSCompiler_StaticMethods_conductFromAny$self$$, function($checkpoint$jscomp$1$$) {
    return -1 != $possibleCheckpoints$$.indexOf($checkpoint$jscomp$1$$);
  }, $executor$jscomp$2$$);
}, $JSCompiler_StaticMethods_recover$$ = function($JSCompiler_StaticMethods_recover$self$$, $executor$jscomp$3$$) {
  $JSCompiler_StaticMethods_recover$self$$.$b$ = $JSCompiler_StaticMethods_recover$self$$.$b$.catch(function() {
    return 1;
  });
  return $JSCompiler_StaticMethods_conduct$$($JSCompiler_StaticMethods_recover$self$$, function() {
    return !0;
  }, $executor$jscomp$3$$);
}, $JSCompiler_StaticMethods_conduct$$ = function($JSCompiler_StaticMethods_conduct$self$$, $checkpointTest$$, $executor$jscomp$4$$) {
  var $opResolve$$, $opReject$$, $opPromise$$ = new Promise(function($resolve$jscomp$56$$, $reject$jscomp$54$$) {
    $opResolve$$ = $resolve$jscomp$56$$;
    $opReject$$ = $reject$jscomp$54$$;
  });
  $JSCompiler_StaticMethods_conduct$self$$.$b$ = $JSCompiler_StaticMethods_conduct$self$$.$b$.then(function($startingCheckpoint$$) {
    if (!$checkpointTest$$($startingCheckpoint$$)) {
      return $opReject$$(Error("Operation requires a different starting checkpoint than " + $startingCheckpoint$$)), Promise.resolve($startingCheckpoint$$);
    }
    var $op$$ = new $module$exports$mr$Sequencer$Operation$$($startingCheckpoint$$);
    try {
      var $executorPromise$$ = $executor$jscomp$4$$($op$$);
    } catch ($error$jscomp$77$$) {
      $executorPromise$$ = Promise.reject($error$jscomp$77$$);
    }
    return $executorPromise$$.then(function($result$jscomp$82$$) {
      return $opResolve$$($result$jscomp$82$$);
    }, function($error$jscomp$78$$) {
      return $opReject$$($error$jscomp$78$$);
    }).then(function() {
      if (null === $op$$.$b$) {
        throw Error("A prior operation that started at " + ($startingCheckpoint$$ + " did not complete."));
      }
      return $op$$.$b$;
    });
  }, function($error$jscomp$79$$) {
    $opReject$$($error$jscomp$79$$);
    throw $error$jscomp$79$$;
  });
  return $opPromise$$;
}, $module$exports$mr$Sequencer$Operation$$ = function($startingCheckpoint$jscomp$1$$) {
  this.$f$ = $startingCheckpoint$jscomp$1$$;
  this.$b$ = null;
}, $JSCompiler_StaticMethods_module$exports$mr$Sequencer_Operation_prototype$complete$$ = function($JSCompiler_StaticMethods_module$exports$mr$Sequencer_Operation_prototype$complete$self$$, $newCheckpoint$$) {
  $JSCompiler_StaticMethods_module$exports$mr$Sequencer_Operation_prototype$complete$self$$.$b$ = "number" === typeof $newCheckpoint$$ ? $newCheckpoint$$ : $JSCompiler_StaticMethods_module$exports$mr$Sequencer_Operation_prototype$complete$self$$.$f$;
};
var $module$contents$mr$mirror$cast$StreamingLaunchWorkflow_ExtApi$$ = chrome.cast.streaming, $module$exports$mr$mirror$cast$StreamingLaunchWorkflow$$ = function($mirrorInitData$jscomp$1$$, $mirrorSettings$jscomp$7$$, $seqNumGenerator$$, $messageDispatcher$$, $testHooks$$) {
  this.$M$ = $mirrorInitData$jscomp$1$$.sessionId;
  this.$C$ = $mirrorInitData$jscomp$1$$.$sinkIpAddress$;
  this.$O$ = $mirrorInitData$jscomp$1$$.$sinkModelName$;
  this.$g$ = $mirrorSettings$jscomp$7$$;
  this.$L$ = $seqNumGenerator$$;
  this.$K$ = $messageDispatcher$$;
  this.$R$ = $module$exports$mr$mirror$cast$StreamingLaunchWorkflow$createTestHookRunner_$$($testHooks$$, "onAnswer", this.$C$);
  this.$T$ = $module$exports$mr$mirror$cast$StreamingLaunchWorkflow$createTestHookRunner_$$($testHooks$$, "onSessionStop", this.$C$);
  this.$logger_$ = $mr$Logger$getInstance$$("mr.mirror.cast.StreamingLaunchWorkflow");
  this.$G$ = new $module$exports$mr$Sequencer$$;
  this.$o$ = this.$H$ = this.$s$ = this.$f$ = this.$b$ = this.$m$ = this.$l$ = this.$h$ = null;
};
$module$exports$mr$mirror$cast$StreamingLaunchWorkflow$$.prototype.start = function($audioTrack$jscomp$1$$, $videoTrack$jscomp$1$$, $client$jscomp$6$$) {
  var $$jscomp$this$jscomp$150$$ = this;
  if (!$audioTrack$jscomp$1$$ && !$videoTrack$jscomp$1$$) {
    return Promise.reject(Error("No tracks to stream"));
  }
  var $isRemotingAudio$$ = $audioTrack$jscomp$1$$ instanceof $module$exports$mr$mirror$cast$StreamingLaunchWorkflow$RemotingTrack$$, $isRemotingVideo$$ = $videoTrack$jscomp$1$$ instanceof $module$exports$mr$mirror$cast$StreamingLaunchWorkflow$RemotingTrack$$;
  ($isRemotingAudio$$ && $videoTrack$jscomp$1$$ && !$isRemotingVideo$$ || $isRemotingVideo$$ && $audioTrack$jscomp$1$$ && !$isRemotingAudio$$) && $goog$asserts$fail$$("Mixing remoting and non-remoting tracks");
  return $JSCompiler_StaticMethods_conductFrom$$(this.$G$, 1, function($op$jscomp$1$$) {
    $$jscomp$this$jscomp$150$$.$h$ = $audioTrack$jscomp$1$$;
    $$jscomp$this$jscomp$150$$.$l$ = $videoTrack$jscomp$1$$;
    $$jscomp$this$jscomp$150$$.$m$ = $client$jscomp$6$$;
    $$jscomp$this$jscomp$150$$.$logger_$.info(function() {
      return "Launching streaming for " + $JSCompiler_StaticMethods_getActivityDescription$$($$jscomp$this$jscomp$150$$) + " to a " + ($$jscomp$this$jscomp$150$$.$O$ + ".");
    });
    return $JSCompiler_StaticMethods_createCastStreamingSession_$$($$jscomp$this$jscomp$150$$).then($$jscomp$this$jscomp$150$$.$J$.bind($$jscomp$this$jscomp$150$$)).then(function($offerCandidates$$) {
      return $JSCompiler_StaticMethods_sendOfferAndAwaitAnswer_$$($$jscomp$this$jscomp$150$$, $offerCandidates$$).then(function($answer$jscomp$1$$) {
        $$jscomp$this$jscomp$150$$.$R$();
        var $selectedOffers$$ = $JSCompiler_StaticMethods_selectOffersFromAnswer_$$($$jscomp$this$jscomp$150$$, $answer$jscomp$1$$, $offerCandidates$$);
        $$jscomp$this$jscomp$150$$.$b$ = $JSCompiler_StaticMethods_destroyStreamIfNoOffers_$$($$jscomp$this$jscomp$150$$, $$jscomp$this$jscomp$150$$.$b$, $selectedOffers$$);
        $$jscomp$this$jscomp$150$$.$f$ = $JSCompiler_StaticMethods_destroyStreamIfNoOffers_$$($$jscomp$this$jscomp$150$$, $$jscomp$this$jscomp$150$$.$f$, $selectedOffers$$);
        if (!$$jscomp$this$jscomp$150$$.$b$ && !$$jscomp$this$jscomp$150$$.$f$) {
          throw Error("Receiver did not select any offers from: " + JSON.stringify($offerCandidates$$));
        }
        $$jscomp$this$jscomp$150$$.$H$ = !!$answer$jscomp$1$$.$h$;
        $$jscomp$this$jscomp$150$$.$o$ = function($streamId$jscomp$9$$, $info$jscomp$16$$) {
          $streamId$jscomp$9$$ == $$jscomp$this$jscomp$150$$.$b$ ? $$jscomp$this$jscomp$150$$.$m$.$onStreamingError$("Audio stream (id=" + $streamId$jscomp$9$$ + ") error: " + $info$jscomp$16$$) : $streamId$jscomp$9$$ == $$jscomp$this$jscomp$150$$.$f$ && $$jscomp$this$jscomp$150$$.$m$.$onStreamingError$("Video stream (id=" + $streamId$jscomp$9$$ + ") error: " + $info$jscomp$16$$);
        };
        $module$contents$mr$mirror$cast$StreamingLaunchWorkflow_ExtApi$$.rtpStream.onError.addListener($$jscomp$this$jscomp$150$$.$o$);
        return $JSCompiler_StaticMethods_startTransportAndRtpStreams_$$($$jscomp$this$jscomp$150$$, $answer$jscomp$1$$, $selectedOffers$$);
      });
    }).then(function() {
      $$jscomp$this$jscomp$150$$.$logger_$.info(function() {
        return "Launched streaming for " + $JSCompiler_StaticMethods_getActivityDescription$$($$jscomp$this$jscomp$150$$);
      });
      $$jscomp$this$jscomp$150$$.$m$.$didStartStreaming$($$jscomp$this$jscomp$150$$);
      $JSCompiler_StaticMethods_module$exports$mr$Sequencer_Operation_prototype$complete$$($op$jscomp$1$$, 2);
      return {$audioStreamId$:$$jscomp$this$jscomp$150$$.$b$, $videoStreamId$:$$jscomp$this$jscomp$150$$.$f$};
    });
  });
};
$module$exports$mr$mirror$cast$StreamingLaunchWorkflow$$.prototype.stop = function() {
  var $$jscomp$this$jscomp$151$$ = this;
  return $JSCompiler_StaticMethods_recover$$(this.$G$, function($op$jscomp$2$$) {
    if (!$$jscomp$this$jscomp$151$$.$h$ && !$$jscomp$this$jscomp$151$$.$l$) {
      return $JSCompiler_StaticMethods_module$exports$mr$Sequencer_Operation_prototype$complete$$($op$jscomp$2$$, 1), Promise.resolve();
    }
    $$jscomp$this$jscomp$151$$.$logger_$.info(function() {
      return "Stopping streaming for " + $JSCompiler_StaticMethods_getActivityDescription$$($$jscomp$this$jscomp$151$$) + ".";
    });
    $$jscomp$this$jscomp$151$$.$o$ && ($module$contents$mr$mirror$cast$StreamingLaunchWorkflow_ExtApi$$.rtpStream.onError.removeListener($$jscomp$this$jscomp$151$$.$o$), $$jscomp$this$jscomp$151$$.$o$ = null);
    if ($$jscomp$this$jscomp$151$$.$m$) {
      var $collectionCompletePromise$$ = $$jscomp$this$jscomp$151$$.$m$.$willStopStreaming$();
      $$jscomp$this$jscomp$151$$.$m$ = null;
    } else {
      $collectionCompletePromise$$ = Promise.resolve();
    }
    return $collectionCompletePromise$$.then(function() {
      $$jscomp$this$jscomp$151$$.$b$ && ($module$contents$mr$mirror$cast$StreamingLaunchWorkflow_ExtApi$$.rtpStream.stop($$jscomp$this$jscomp$151$$.$b$), $module$contents$mr$mirror$cast$StreamingLaunchWorkflow_ExtApi$$.rtpStream.destroy($$jscomp$this$jscomp$151$$.$b$), $$jscomp$this$jscomp$151$$.$b$ = null);
      $$jscomp$this$jscomp$151$$.$f$ && ($module$contents$mr$mirror$cast$StreamingLaunchWorkflow_ExtApi$$.rtpStream.stop($$jscomp$this$jscomp$151$$.$f$), $module$contents$mr$mirror$cast$StreamingLaunchWorkflow_ExtApi$$.rtpStream.destroy($$jscomp$this$jscomp$151$$.$f$), $$jscomp$this$jscomp$151$$.$f$ = null);
      $$jscomp$this$jscomp$151$$.$s$ && ($module$contents$mr$mirror$cast$StreamingLaunchWorkflow_ExtApi$$.udpTransport.destroy($$jscomp$this$jscomp$151$$.$s$), $$jscomp$this$jscomp$151$$.$s$ = null);
      $$jscomp$this$jscomp$151$$.$T$();
      $$jscomp$this$jscomp$151$$.$logger_$.info(function() {
        return "Stopped streaming for " + $JSCompiler_StaticMethods_getActivityDescription$$($$jscomp$this$jscomp$151$$) + ".";
      });
      $$jscomp$this$jscomp$151$$.$h$ = null;
      $$jscomp$this$jscomp$151$$.$l$ = null;
      $JSCompiler_StaticMethods_module$exports$mr$Sequencer_Operation_prototype$complete$$($op$jscomp$2$$, 1);
    });
  });
};
var $JSCompiler_StaticMethods_takeEvents$$ = function($JSCompiler_StaticMethods_takeEvents$self$$, $tags$jscomp$2$$) {
  var $tagsJson$$ = JSON.stringify($tags$jscomp$2$$);
  return Promise.all([$JSCompiler_StaticMethods_takeEvents$self$$.$b$ && new Promise(function($resolve$jscomp$57$$) {
    return $module$contents$mr$mirror$cast$StreamingLaunchWorkflow_ExtApi$$.rtpStream.getRawEvents($JSCompiler_StaticMethods_takeEvents$self$$.$b$, $tagsJson$$, $resolve$jscomp$57$$);
  }), $JSCompiler_StaticMethods_takeEvents$self$$.$f$ && new Promise(function($resolve$jscomp$58$$) {
    return $module$contents$mr$mirror$cast$StreamingLaunchWorkflow_ExtApi$$.rtpStream.getRawEvents($JSCompiler_StaticMethods_takeEvents$self$$.$f$, $tagsJson$$, $resolve$jscomp$58$$);
  })]).catch(function($error$jscomp$80$$) {
    $JSCompiler_StaticMethods_takeEvents$self$$.$logger_$.error("Unexpected error when calling getRawEvents()", $error$jscomp$80$$);
    return [];
  }).then(function($allRawEvents$$) {
    return new Blob($allRawEvents$$.filter(function($x$jscomp$105$$) {
      return !!$x$jscomp$105$$;
    }), {type:"application/gzip"});
  });
}, $JSCompiler_StaticMethods_getStatsAndReset$$ = function($JSCompiler_StaticMethods_getStatsAndReset$self$$) {
  return Promise.all([$JSCompiler_StaticMethods_getStatsAndReset$self$$.$b$ && new Promise(function($resolve$jscomp$59$$) {
    return $module$contents$mr$mirror$cast$StreamingLaunchWorkflow_ExtApi$$.rtpStream.getStats($JSCompiler_StaticMethods_getStatsAndReset$self$$.$b$, $resolve$jscomp$59$$);
  }), $JSCompiler_StaticMethods_getStatsAndReset$self$$.$f$ && new Promise(function($resolve$jscomp$60$$) {
    return $module$contents$mr$mirror$cast$StreamingLaunchWorkflow_ExtApi$$.rtpStream.getStats($JSCompiler_StaticMethods_getStatsAndReset$self$$.$f$, $resolve$jscomp$60$$);
  })]).catch(function($error$jscomp$81$$) {
    $JSCompiler_StaticMethods_getStatsAndReset$self$$.$logger_$.error("Unexpected error when calling getStats()", $error$jscomp$81$$);
    return [];
  }).then(function($allStats$$) {
    return Object.assign.apply(Object, [{}].concat($$jscomp$arrayFromIterable$$($allStats$$.filter(function($x$jscomp$106$$) {
      return !!$x$jscomp$106$$;
    }))));
  });
}, $JSCompiler_StaticMethods_getActivityDescription$$ = function($JSCompiler_StaticMethods_getActivityDescription$self$$) {
  if ($JSCompiler_StaticMethods_getActivityDescription$self$$.$h$ && $JSCompiler_StaticMethods_getActivityDescription$self$$.$l$) {
    var $trackTypes$$ = "audio+video ";
  } else {
    if ($JSCompiler_StaticMethods_getActivityDescription$self$$.$h$) {
      $trackTypes$$ = "audio-only ";
    } else {
      if ($JSCompiler_StaticMethods_getActivityDescription$self$$.$l$) {
        $trackTypes$$ = "video-only ";
      } else {
        return "stopped";
      }
    }
  }
  return $JSCompiler_StaticMethods_getActivityDescription$self$$.$h$ instanceof $module$exports$mr$mirror$cast$StreamingLaunchWorkflow$RemotingTrack$$ || $JSCompiler_StaticMethods_getActivityDescription$self$$.$l$ instanceof $module$exports$mr$mirror$cast$StreamingLaunchWorkflow$RemotingTrack$$ ? $trackTypes$$ + "remoting" : $trackTypes$$ + "streaming";
}, $JSCompiler_StaticMethods_createCastStreamingSession_$$ = function($JSCompiler_StaticMethods_createCastStreamingSession_$self$$) {
  return new Promise(function($resolve$jscomp$61$$) {
    var $createCallback$jscomp$1$$ = function($audioStreamId$$, $videoStreamId$$, $udpTransportId$$) {
      $audioStreamId$$ && !$JSCompiler_StaticMethods_createCastStreamingSession_$self$$.$h$ && ($module$contents$mr$mirror$cast$StreamingLaunchWorkflow_ExtApi$$.rtpStream.destroy($audioStreamId$$), $audioStreamId$$ = null);
      $videoStreamId$$ && !$JSCompiler_StaticMethods_createCastStreamingSession_$self$$.$l$ && ($module$contents$mr$mirror$cast$StreamingLaunchWorkflow_ExtApi$$.rtpStream.destroy($videoStreamId$$), $videoStreamId$$ = null);
      $JSCompiler_StaticMethods_createCastStreamingSession_$self$$.$logger_$.info(function() {
        return "Created Cast Streaming session: audioStreamId=" + $audioStreamId$$ + ", videoStreamId=" + $videoStreamId$$ + ".";
      });
      $JSCompiler_StaticMethods_createCastStreamingSession_$self$$.$b$ = $audioStreamId$$;
      $JSCompiler_StaticMethods_createCastStreamingSession_$self$$.$f$ = $videoStreamId$$;
      $JSCompiler_StaticMethods_createCastStreamingSession_$self$$.$s$ = $udpTransportId$$;
      $resolve$jscomp$61$$();
    };
    $JSCompiler_StaticMethods_createCastStreamingSession_$self$$.$h$ instanceof $module$exports$mr$mirror$cast$StreamingLaunchWorkflow$RemotingTrack$$ || $JSCompiler_StaticMethods_createCastStreamingSession_$self$$.$l$ instanceof $module$exports$mr$mirror$cast$StreamingLaunchWorkflow$RemotingTrack$$ ? $module$contents$mr$mirror$cast$StreamingLaunchWorkflow_ExtApi$$.session.create(null, null, $createCallback$jscomp$1$$) : ($goog$asserts$assert$$($JSCompiler_StaticMethods_createCastStreamingSession_$self$$.$h$ || 
    $JSCompiler_StaticMethods_createCastStreamingSession_$self$$.$l$), $module$contents$mr$mirror$cast$StreamingLaunchWorkflow_ExtApi$$.session.create($JSCompiler_StaticMethods_createCastStreamingSession_$self$$.$h$, $JSCompiler_StaticMethods_createCastStreamingSession_$self$$.$l$, $createCallback$jscomp$1$$));
  });
};
$module$exports$mr$mirror$cast$StreamingLaunchWorkflow$$.prototype.$J$ = function() {
  for (var $aesKey$$ = $goog$crypt$byteArrayToHex$$(), $aesIv$$ = $goog$crypt$byteArrayToHex$$(), $candidates$$ = [], $$jscomp$iter$254$$ = $$jscomp$makeIterator$$([this.$b$, this.$f$]), $$jscomp$key$streamId_streamId$jscomp$10$$ = $$jscomp$iter$254$$.next(); !$$jscomp$key$streamId_streamId$jscomp$10$$.done; $$jscomp$key$streamId_streamId$jscomp$10$$ = $$jscomp$iter$254$$.next()) {
    if ($$jscomp$key$streamId_streamId$jscomp$10$$ = $$jscomp$key$streamId_streamId$jscomp$10$$.value) {
      for (var $isAudio$$ = $$jscomp$key$streamId_streamId$jscomp$10$$ == this.$b$, $payloadType$$ = $isAudio$$ ? 127 : 96, $randomSsrc$$ = $isAudio$$ ? Math.floor(499999 * Math.random()) + 1 : Math.floor(499999 * Math.random()) + 500001, $timebase$$ = $isAudio$$ ? 48000 : 90000, $$jscomp$iter$253$$ = $$jscomp$makeIterator$$($module$contents$mr$mirror$cast$StreamingLaunchWorkflow_ExtApi$$.rtpStream.getSupportedParams($$jscomp$key$streamId_streamId$jscomp$10$$)), $$jscomp$key$params_params$jscomp$26$$ = 
      $$jscomp$iter$253$$.next(); !$$jscomp$key$params_params$jscomp$26$$.done; $$jscomp$key$params_params$jscomp$26$$ = $$jscomp$iter$253$$.next()) {
        $$jscomp$key$params_params$jscomp$26$$ = $$jscomp$key$params_params$jscomp$26$$.value, $$jscomp$key$params_params$jscomp$26$$.payload.payloadType = $payloadType$$, $$jscomp$key$params_params$jscomp$26$$.payload.maxLatency = this.$g$.maxLatencyMillis, $$jscomp$key$params_params$jscomp$26$$.payload.minLatency = this.$g$.minLatencyMillis, $$jscomp$key$params_params$jscomp$26$$.payload.animatedLatency = this.$g$.animatedLatencyMillis, $$jscomp$key$params_params$jscomp$26$$.payload.ssrc = $randomSsrc$$, 
        $$jscomp$key$params_params$jscomp$26$$.payload.clockRate = $timebase$$, $$jscomp$key$params_params$jscomp$26$$.payload.aesKey = $aesKey$$, $$jscomp$key$params_params$jscomp$26$$.payload.aesIvMask = $aesIv$$, $isAudio$$ ? ($$jscomp$key$params_params$jscomp$26$$.payload.channels = 2, $$jscomp$key$params_params$jscomp$26$$.payload.maxBitrate = this.$g$.audioBitrate, $$jscomp$key$params_params$jscomp$26$$.payload.maxFrameRate = 100) : ($$jscomp$key$params_params$jscomp$26$$.payload.minBitrate = 
        this.$g$.minVideoBitrate, $$jscomp$key$params_params$jscomp$26$$.payload.maxBitrate = this.$g$.maxVideoBitrate, $$jscomp$key$params_params$jscomp$26$$.payload.maxFrameRate = this.$g$.maxFrameRate), $candidates$$.push(new $module$exports$mr$mirror$cast$StreamingLaunchWorkflow$Offer_$$($$jscomp$key$streamId_streamId$jscomp$10$$, $$jscomp$key$params_params$jscomp$26$$));
      }
    }
  }
  return $candidates$$;
};
var $JSCompiler_StaticMethods_destroyStreamIfNoOffers_$$ = function($JSCompiler_StaticMethods_destroyStreamIfNoOffers_$self$$, $streamId$jscomp$11$$, $offers$$) {
  $streamId$jscomp$11$$ && !$offers$$.some(function($e$jscomp$100$$) {
    return $e$jscomp$100$$.$streamId$ == $streamId$jscomp$11$$;
  }) && ($JSCompiler_StaticMethods_destroyStreamIfNoOffers_$self$$.$logger_$.$warning$("Destroying RTP stream not selected by the receiver: id=" + $streamId$jscomp$11$$), $module$contents$mr$mirror$cast$StreamingLaunchWorkflow_ExtApi$$.rtpStream.destroy($streamId$jscomp$11$$), $streamId$jscomp$11$$ = null);
  return $streamId$jscomp$11$$;
}, $JSCompiler_StaticMethods_sendOfferAndAwaitAnswer_$$ = function($JSCompiler_StaticMethods_sendOfferAndAwaitAnswer_$self$$, $candidates$jscomp$1$$) {
  return new Promise(function($resolve$jscomp$62$$, $reject$jscomp$55$$) {
    for (var $streamList$$ = [], $index$jscomp$104$$ = 0; $index$jscomp$104$$ < $candidates$jscomp$1$$.length; ++$index$jscomp$104$$) {
      var $params$jscomp$27$$ = $candidates$jscomp$1$$[$index$jscomp$104$$].params, $stream$jscomp$13$$ = {index:$index$jscomp$104$$, codecName:$params$jscomp$27$$.payload.codecName.toLowerCase(), rtpProfile:"cast", rtpPayloadType:$params$jscomp$27$$.payload.payloadType, ssrc:$params$jscomp$27$$.payload.ssrc, targetDelay:$params$jscomp$27$$.payload.animatedLatency, aesKey:$params$jscomp$27$$.payload.aesKey, aesIvMask:$params$jscomp$27$$.payload.aesIvMask, timeBase:"1/" + $params$jscomp$27$$.payload.clockRate, 
      receiverRtcpEventLog:$JSCompiler_StaticMethods_sendOfferAndAwaitAnswer_$self$$.$g$.enableLogging, rtpExtensions:["adaptive_playout_delay"]};
      $JSCompiler_StaticMethods_sendOfferAndAwaitAnswer_$self$$.$g$.dscpEnabled && ($stream$jscomp$13$$.receiverRtcpDscp = 46);
      127 == $params$jscomp$27$$.payload.payloadType ? Object.assign($stream$jscomp$13$$, {type:"audio_source", bitRate:0 < $params$jscomp$27$$.payload.maxBitrate ? 1000 * $params$jscomp$27$$.payload.maxBitrate : 60 * $params$jscomp$27$$.payload.maxFrameRate + $params$jscomp$27$$.payload.clockRate * $params$jscomp$27$$.payload.channels, sampleRate:$params$jscomp$27$$.payload.clockRate, channels:$params$jscomp$27$$.payload.channels}) : Object.assign($stream$jscomp$13$$, {type:"video_source", renderMode:"video", 
      maxFrameRate:Math.round(1000 * $params$jscomp$27$$.payload.maxFrameRate) + "/1000", maxBitRate:1000 * $params$jscomp$27$$.payload.maxBitrate, resolutions:[{width:$JSCompiler_StaticMethods_sendOfferAndAwaitAnswer_$self$$.$g$.maxWidth, height:$JSCompiler_StaticMethods_sendOfferAndAwaitAnswer_$self$$.$g$.maxHeight}]});
      $streamList$$.push($stream$jscomp$13$$);
    }
    var $castMode$$ = $JSCompiler_StaticMethods_sendOfferAndAwaitAnswer_$self$$.$h$ instanceof $module$exports$mr$mirror$cast$StreamingLaunchWorkflow$RemotingTrack$$ || $JSCompiler_StaticMethods_sendOfferAndAwaitAnswer_$self$$.$l$ instanceof $module$exports$mr$mirror$cast$StreamingLaunchWorkflow$RemotingTrack$$ ? "remoting" : "mirroring", $offerMessage$$ = {type:"OFFER", sessionId:$JSCompiler_StaticMethods_sendOfferAndAwaitAnswer_$self$$.$M$, seqNum:$JSCompiler_StaticMethods_getNext$$($JSCompiler_StaticMethods_sendOfferAndAwaitAnswer_$self$$.$L$), 
    offer:{castMode:$castMode$$, receiverGetStatus:!0, supportedStreams:$streamList$$}};
    $JSCompiler_StaticMethods_sendOfferAndAwaitAnswer_$self$$.$logger_$.info(function() {
      return "Sending OFFER message: " + JSON.stringify($offerMessage$$);
    });
    $JSCompiler_StaticMethods_requestReply$$($JSCompiler_StaticMethods_sendOfferAndAwaitAnswer_$self$$.$K$, $offerMessage$$, "ANSWER", 10000, function($response$jscomp$40$$, $error$jscomp$82_receiverMode$$) {
      if (null == $response$jscomp$40$$) {
        $reject$jscomp$55$$($error$jscomp$82_receiverMode$$);
      } else {
        if ("ok" == $response$jscomp$40$$.result && $response$jscomp$40$$.$b$) {
          if ($response$jscomp$40$$.$f$ != $offerMessage$$.seqNum) {
            return $JSCompiler_StaticMethods_sendOfferAndAwaitAnswer_$self$$.$logger_$.$warning$("Ignoring ANSWER for OFFER with different seqNum: " + JSON.stringify($response$jscomp$40$$)), !1;
          }
          (($error$jscomp$82_receiverMode$$ = $response$jscomp$40$$.$b$.$g$) && $error$jscomp$82_receiverMode$$ != $castMode$$ || !$error$jscomp$82_receiverMode$$ && "mirroring" != $castMode$$) && $JSCompiler_StaticMethods_sendOfferAndAwaitAnswer_$self$$.$logger_$.error("Expected receiver to ANSWER with castMode=" + $castMode$$ + ", but got: " + $error$jscomp$82_receiverMode$$);
          $JSCompiler_StaticMethods_mr_Logger_prototype$fine$$($JSCompiler_StaticMethods_sendOfferAndAwaitAnswer_$self$$.$logger_$, function() {
            return "Received ANSWER: " + JSON.stringify($response$jscomp$40$$);
          });
          $resolve$jscomp$62$$($response$jscomp$40$$.$b$);
        } else {
          $reject$jscomp$55$$(Error("Non-OK ANSWER received: " + JSON.stringify($response$jscomp$40$$)));
        }
      }
      return !0;
    });
  });
}, $JSCompiler_StaticMethods_selectOffersFromAnswer_$$ = function($JSCompiler_StaticMethods_selectOffersFromAnswer_$self$$, $answer$jscomp$2$$, $candidates$jscomp$2$$) {
  if ($answer$jscomp$2$$.$b$.length != $answer$jscomp$2$$.$f$.length) {
    return $JSCompiler_StaticMethods_selectOffersFromAnswer_$self$$.$logger_$.error("sendIndexes.length != ssrcs.length in ANSWER: " + JSON.stringify($answer$jscomp$2$$)), [];
  }
  for (var $selectedOffers$jscomp$1$$ = [], $$jscomp$loop$398$$ = {}, $i$jscomp$303$$ = 0; $i$jscomp$303$$ < $answer$jscomp$2$$.$b$.length; $$jscomp$loop$398$$ = {$$jscomp$loop$prop$candidate$400$:$$jscomp$loop$398$$.$$jscomp$loop$prop$candidate$400$}, ++$i$jscomp$303$$) {
    var $index$jscomp$105$$ = $answer$jscomp$2$$.$b$[$i$jscomp$303$$];
    if (0 > $index$jscomp$105$$ || $index$jscomp$105$$ >= $candidates$jscomp$2$$.length) {
      return $JSCompiler_StaticMethods_selectOffersFromAnswer_$self$$.$logger_$.error("Receiver selected invalid index (" + $index$jscomp$105$$ + " < " + $candidates$jscomp$2$$.length + ") in ANSWER: " + JSON.stringify($answer$jscomp$2$$)), [];
    }
    $$jscomp$loop$398$$.$$jscomp$loop$prop$candidate$400$ = $candidates$jscomp$2$$[$index$jscomp$105$$];
    if ($selectedOffers$jscomp$1$$.some(function($$jscomp$loop$398$jscomp$1$$) {
      return function($e$jscomp$101$$) {
        return $e$jscomp$101$$.$streamId$ == $$jscomp$loop$398$jscomp$1$$.$$jscomp$loop$prop$candidate$400$.$streamId$;
      };
    }($$jscomp$loop$398$$))) {
      return $JSCompiler_StaticMethods_selectOffersFromAnswer_$self$$.$logger_$.error("Receiver selected same RTP stream twice in ANSWER: " + JSON.stringify($answer$jscomp$2$$)), [];
    }
    $$jscomp$loop$398$$.$$jscomp$loop$prop$candidate$400$.params.payload.feedbackSsrc = $answer$jscomp$2$$.$f$[$index$jscomp$105$$];
    if ($selectedOffers$jscomp$1$$.some(function($$jscomp$loop$398$jscomp$2$$) {
      return function($e$jscomp$102$$) {
        return $e$jscomp$102$$.params.payload.feedbackSsrc == $$jscomp$loop$398$jscomp$2$$.$$jscomp$loop$prop$candidate$400$.params.payload.feedbackSsrc;
      };
    }($$jscomp$loop$398$$))) {
      return $JSCompiler_StaticMethods_selectOffersFromAnswer_$self$$.$logger_$.error("Receiver provided same SSRC for two different RTP streams in ANSWER: " + JSON.stringify($answer$jscomp$2$$)), [];
    }
    $selectedOffers$jscomp$1$$.push($$jscomp$loop$398$$.$$jscomp$loop$prop$candidate$400$);
  }
  return $selectedOffers$jscomp$1$$;
}, $JSCompiler_StaticMethods_startTransportAndRtpStreams_$$ = function($JSCompiler_StaticMethods_startTransportAndRtpStreams_$self$$, $answer$jscomp$3$$, $selectedOffers$jscomp$2$$) {
  var $rtpStreamStartedListener$$ = null, $cleanup$jscomp$5$$ = function() {
    $rtpStreamStartedListener$$ && ($module$contents$mr$mirror$cast$StreamingLaunchWorkflow_ExtApi$$.rtpStream.onStarted.removeListener($rtpStreamStartedListener$$), $rtpStreamStartedListener$$ = null);
  };
  return (new Promise(function($resolve$jscomp$63$$, $reject$jscomp$56$$) {
    var $receiverPort$jscomp$1$$ = $answer$jscomp$3$$.$l$ || 2344;
    $JSCompiler_StaticMethods_startTransportAndRtpStreams_$self$$.$logger_$.info(function() {
      return "Starting RTP streams to receiver at " + ($JSCompiler_StaticMethods_startTransportAndRtpStreams_$self$$.$C$ + ":" + $receiverPort$jscomp$1$$) + (" for selected offers: " + JSON.stringify($selectedOffers$jscomp$2$$));
    });
    var $$jscomp$iter$255_udpTransportId$jscomp$1$$ = $JSCompiler_StaticMethods_startTransportAndRtpStreams_$self$$.$s$ || -1;
    $JSCompiler_StaticMethods_startTransportAndRtpStreams_$self$$.$g$.dscpEnabled && ($JSCompiler_StaticMethods_startTransportAndRtpStreams_$self$$.$logger_$.info("Enabled DSCP in sender."), $module$contents$mr$mirror$cast$StreamingLaunchWorkflow_ExtApi$$.udpTransport.setOptions($$jscomp$iter$255_udpTransportId$jscomp$1$$, {DSCP:!0}));
    $module$contents$mr$mirror$cast$StreamingLaunchWorkflow_ExtApi$$.udpTransport.setDestination($$jscomp$iter$255_udpTransportId$jscomp$1$$, {address:$JSCompiler_StaticMethods_startTransportAndRtpStreams_$self$$.$C$, port:$receiverPort$jscomp$1$$});
    var $streamIdsNotYetStarted$$ = new Set($selectedOffers$jscomp$2$$.map(function($e$jscomp$103$$) {
      return $e$jscomp$103$$.$streamId$;
    }));
    $rtpStreamStartedListener$$ = function($streamId$jscomp$12$$) {
      $streamIdsNotYetStarted$$.delete($streamId$jscomp$12$$);
      0 == $streamIdsNotYetStarted$$.size && $resolve$jscomp$63$$();
    };
    $module$contents$mr$mirror$cast$StreamingLaunchWorkflow_ExtApi$$.rtpStream.onStarted.addListener($rtpStreamStartedListener$$);
    $$jscomp$iter$255_udpTransportId$jscomp$1$$ = $$jscomp$makeIterator$$($selectedOffers$jscomp$2$$);
    for (var $$jscomp$key$offer_offer$$ = $$jscomp$iter$255_udpTransportId$jscomp$1$$.next(); !$$jscomp$key$offer_offer$$.done; $$jscomp$key$offer_offer$$ = $$jscomp$iter$255_udpTransportId$jscomp$1$$.next()) {
      $$jscomp$key$offer_offer$$ = $$jscomp$key$offer_offer$$.value, $module$contents$mr$mirror$cast$StreamingLaunchWorkflow_ExtApi$$.rtpStream.toggleLogging($$jscomp$key$offer_offer$$.$streamId$, $JSCompiler_StaticMethods_startTransportAndRtpStreams_$self$$.$g$.enableLogging), $module$contents$mr$mirror$cast$StreamingLaunchWorkflow_ExtApi$$.rtpStream.start($$jscomp$key$offer_offer$$.$streamId$, $$jscomp$key$offer_offer$$.params);
    }
    setTimeout(function() {
      $reject$jscomp$56$$(Error("Timeout: RTP streams failed to start."));
    }, 10000);
  })).then($cleanup$jscomp$5$$).catch(function($error$jscomp$83$$) {
    $cleanup$jscomp$5$$();
    throw $error$jscomp$83$$;
  });
}, $module$exports$mr$mirror$cast$StreamingLaunchWorkflow$createTestHookRunner_$$ = function($testHooks$jscomp$1$$, $method$jscomp$22$$, $receiverIpAddress$$) {
  var $$jscomp$this$jscomp$157$$ = this;
  return $testHooks$jscomp$1$$ && $method$jscomp$22$$ in $testHooks$jscomp$1$$ ? function() {
    try {
      $testHooks$jscomp$1$$[$method$jscomp$22$$]($receiverIpAddress$$);
    } catch ($error$jscomp$84$$) {
      $$jscomp$this$jscomp$157$$.$logger_$.error("Error from testHooks." + $method$jscomp$22$$, $error$jscomp$84$$);
    }
  } : function() {
  };
}, $module$exports$mr$mirror$cast$StreamingLaunchWorkflow$Offer_$$ = function($streamId$jscomp$13$$, $params$jscomp$28$$) {
  this.$streamId$ = $streamId$jscomp$13$$;
  this.params = $params$jscomp$28$$;
}, $module$exports$mr$mirror$cast$StreamingLaunchWorkflow$RemotingTrack$$ = function() {
};
var $module$exports$mr$mirror$cast$MediaRemoter$$ = function($mirrorRoute$$, $capabilities$jscomp$9$$, $mirrorSettings$jscomp$8$$, $seqNumGenerator$jscomp$1$$, $messageDispatcher$jscomp$1$$, $testHooks$jscomp$2$$) {
  this.$o$ = $mirrorRoute$$;
  this.$K$ = $module$exports$mr$mirror$cast$MediaRemoter$toMojoRemotingSinkMetadata_$$($capabilities$jscomp$9$$, $mr$Assertions$assert$$(this.$o$.$mirrorInitData$));
  this.$L$ = new $module$exports$mr$mirror$cast$StreamingLaunchWorkflow$$($mr$Assertions$assert$$(this.$o$.$mirrorInitData$), $mirrorSettings$jscomp$8$$, $seqNumGenerator$jscomp$1$$, $messageDispatcher$jscomp$1$$, $testHooks$jscomp$2$$);
  this.$H$ = $messageDispatcher$jscomp$1$$;
  this.$l$ = new $module$exports$mr$Sequencer$$;
  this.$g$ = new $module$exports$mr$mirror$cast$MediaRemoter$RpcPipe_$$;
  this.$G$ = new mojo.Binding(mojo.MirrorServiceRemoter, this, null);
  this.$logger_$ = $mr$Logger$getInstance$$("mr.mirror.cast.MediaRemoter");
  this.$C$ = this.$b$ = this.$m$ = this.$h$ = this.$J$ = null;
  this.$f$ = !0;
  this.$s$ = this.$M$.bind(this);
};
$module$exports$mr$mirror$cast$MediaRemoter$$.prototype.initialize = function($requestCallback$$, $client$jscomp$7$$) {
  var $$jscomp$this$jscomp$158$$ = this;
  return $JSCompiler_StaticMethods_conductFrom$$(this.$l$, 1, function($op$jscomp$3$$) {
    $$jscomp$this$jscomp$158$$.$J$ = $requestCallback$$;
    $$jscomp$this$jscomp$158$$.$h$ = $client$jscomp$7$$;
    var $remoterPtr$$ = $$jscomp$this$jscomp$158$$.$G$.createInterfacePtrAndBind();
    $$jscomp$this$jscomp$158$$.$G$.setConnectionErrorHandler(function() {
      $$jscomp$this$jscomp$158$$.$logger_$.info("Remoter mojo pipe connection error.");
      $JSCompiler_StaticMethods_shutdown$$($$jscomp$this$jscomp$158$$);
    });
    $$jscomp$this$jscomp$158$$.$b$ = new mojo.MirrorServiceRemotingSourcePtr;
    var $tabId$jscomp$40$$ = $mr$MediaSourceUtils$getMirrorTabId$$($$jscomp$this$jscomp$158$$.$o$.mediaSource || "");
    if (!$tabId$jscomp$40$$) {
      throw Error("Failed to parse tab ID from source:\n          " + $$jscomp$this$jscomp$158$$.$o$.mediaSource);
    }
    $$jscomp$this$jscomp$158$$.$logger_$.info("Connecting remoter to browser: tabId=" + $tabId$jscomp$40$$);
    $mr$Assertions$assert$$($mr$Module$moduleById_$$.get("mr.ProviderManager") || null, "ProviderManager missing").onMediaRemoterCreated($tabId$jscomp$40$$, $remoterPtr$$, mojo.makeRequest($$jscomp$this$jscomp$158$$.$b$));
    $$jscomp$this$jscomp$158$$.$b$.ptr.setConnectionErrorHandler(function() {
      $$jscomp$this$jscomp$158$$.$logger_$.info("RemotingSource mojo pipe connection error.");
      $JSCompiler_StaticMethods_shutdown$$($$jscomp$this$jscomp$158$$);
    });
    return $JSCompiler_StaticMethods_initMediaRemotingPrefValue_$$($$jscomp$this$jscomp$158$$).then(function() {
      if ($$jscomp$this$jscomp$158$$.$f$) {
        $$jscomp$this$jscomp$158$$.$b$.onSinkAvailable($$jscomp$this$jscomp$158$$.$K$);
      }
      $JSCompiler_StaticMethods_module$exports$mr$Sequencer_Operation_prototype$complete$$($op$jscomp$3$$, 2);
    });
  });
};
var $JSCompiler_StaticMethods_shutdown$$ = function($JSCompiler_StaticMethods_shutdown$self$$) {
  return $JSCompiler_StaticMethods_recover$$($JSCompiler_StaticMethods_shutdown$self$$.$l$, function($op$jscomp$4$$) {
    $JSCompiler_StaticMethods_shutdown$self$$.$b$ && ($JSCompiler_StaticMethods_shutdown$self$$.$b$.ptr.reset(), $JSCompiler_StaticMethods_shutdown$self$$.$b$ = null);
    var $endCallback$$ = $JSCompiler_StaticMethods_shutdown$self$$.$m$;
    $JSCompiler_StaticMethods_shutdown$self$$.$m$ = null;
    $JSCompiler_StaticMethods_shutdown$self$$.$h$ = null;
    $JSCompiler_StaticMethods_shutdown$self$$.$J$ = null;
    $JSCompiler_StaticMethods_shutdown$self$$.$G$.close();
    chrome.settingsPrivate.onPrefsChanged.hasListener($JSCompiler_StaticMethods_shutdown$self$$.$s$) && chrome.settingsPrivate.onPrefsChanged.removeListener($JSCompiler_StaticMethods_shutdown$self$$.$s$);
    return new Promise(function($resolve$jscomp$64$$) {
      window.setTimeout(function() {
        $JSCompiler_StaticMethods_shutdownStreamingAndMessaging_$$($JSCompiler_StaticMethods_shutdown$self$$).then(function() {
          $JSCompiler_StaticMethods_module$exports$mr$Sequencer_Operation_prototype$complete$$($op$jscomp$4$$, 1);
          $resolve$jscomp$64$$();
          $endCallback$$ && $endCallback$$();
        });
      }, 250);
    });
  });
};
$JSCompiler_prototypeAlias$$ = $module$exports$mr$mirror$cast$MediaRemoter$$.prototype;
$JSCompiler_prototypeAlias$$.$sendMessageToSink$ = function($message$jscomp$164$$) {
  $JSCompiler_StaticMethods_module$exports$mr$mirror$cast$MediaRemoter_RpcPipe__prototype$sendToReceiver$$(this.$g$, $message$jscomp$164$$);
};
$JSCompiler_prototypeAlias$$.$didStartStreaming$ = function($streamingMonitor$jscomp$1$$) {
  this.$h$ && this.$h$.$didStartStreaming$($streamingMonitor$jscomp$1$$);
};
$JSCompiler_prototypeAlias$$.$willStopStreaming$ = function() {
  return this.$h$ ? this.$h$.$willStopStreaming$() : Promise.resolve();
};
$JSCompiler_prototypeAlias$$.$onStreamingError$ = function($message$jscomp$165$$, $error$jscomp$85$$) {
  this.$logger_$.error("Error during streaming: " + $message$jscomp$165$$, $error$jscomp$85$$);
  if (this.$b$) {
    this.$b$.onError();
  }
  $JSCompiler_StaticMethods_shutdown$$(this);
};
$JSCompiler_prototypeAlias$$.start = function() {
  var $$jscomp$this$jscomp$160$$ = this, $infoLoggingIsOn$$ = !1;
  this.$logger_$.info(function() {
    $infoLoggingIsOn$$ = !0;
    return "Starting next media remoting session.";
  });
  $infoLoggingIsOn$$ && $JSCompiler_StaticMethods_startReporting$$(this.$g$, function($report$jscomp$1$$) {
    return $$jscomp$this$jscomp$160$$.$logger_$.info($report$jscomp$1$$);
  });
  $JSCompiler_StaticMethods_startQueueingMessagesToReceiver$$(this.$g$);
  $JSCompiler_StaticMethods_conductFrom$$(this.$l$, 2, function($op$jscomp$5$$) {
    return $mr$Assertions$assert$$($$jscomp$this$jscomp$160$$.$J$)().then(function($endCallback$jscomp$1$$) {
      $$jscomp$this$jscomp$160$$.$m$ = $endCallback$jscomp$1$$;
      $$jscomp$this$jscomp$160$$.$H$.subscribe("RPC", function($data$jscomp$inline_2510_response$jscomp$41$$) {
        if ($data$jscomp$inline_2510_response$jscomp$41$$.rpc) {
          var $JSCompiler_StaticMethods_sendToSource$self$jscomp$inline_2509$$ = $$jscomp$this$jscomp$160$$.$g$;
          $data$jscomp$inline_2510_response$jscomp$41$$ = $data$jscomp$inline_2510_response$jscomp$41$$.rpc;
          $JSCompiler_StaticMethods_sendToSource$self$jscomp$inline_2509$$.$g$ && (++$JSCompiler_StaticMethods_sendToSource$self$jscomp$inline_2509$$.$o$, $JSCompiler_StaticMethods_sendToSource$self$jscomp$inline_2509$$.$h$ += $data$jscomp$inline_2510_response$jscomp$41$$.length, $JSCompiler_StaticMethods_sendToSource$self$jscomp$inline_2509$$.$g$($data$jscomp$inline_2510_response$jscomp$41$$));
        }
      });
      $JSCompiler_StaticMethods_module$exports$mr$Sequencer_Operation_prototype$complete$$($op$jscomp$5$$, 3);
    }).catch(function($error$jscomp$86$$) {
      return $JSCompiler_StaticMethods_shutdownStreamingAndMessaging_$$($$jscomp$this$jscomp$160$$).then(function() {
        $JSCompiler_StaticMethods_module$exports$mr$Sequencer_Operation_prototype$complete$$($op$jscomp$5$$);
        throw $error$jscomp$86$$;
      });
    });
  }).then(function() {
    $$jscomp$this$jscomp$160$$.$logger_$.info("Remoting started successfully.");
  }).catch(function($error$jscomp$87$$) {
    $$jscomp$this$jscomp$160$$.$logger_$.error("Failed to start remoting", $error$jscomp$87$$);
    $mr$Assertions$assert$$($$jscomp$this$jscomp$160$$.$b$).onError();
  });
};
$JSCompiler_prototypeAlias$$.$startDataStreams$ = function($withAudio$$, $withVideo$$) {
  var $$jscomp$this$jscomp$161$$ = this;
  return $JSCompiler_StaticMethods_conductFrom$$(this.$l$, 3, function($op$jscomp$6$$) {
    return $$jscomp$this$jscomp$161$$.$L$.start($withAudio$$ ? new $module$exports$mr$mirror$cast$StreamingLaunchWorkflow$RemotingTrack$$ : null, $withVideo$$ ? new $module$exports$mr$mirror$cast$StreamingLaunchWorkflow$RemotingTrack$$ : null, $$jscomp$this$jscomp$161$$).then(function($streamIdentifiers$$) {
      $JSCompiler_StaticMethods_startTwoWayMessaging$$($$jscomp$this$jscomp$161$$.$g$, function($messageToReceiver$$) {
        return $$jscomp$this$jscomp$161$$.$H$.sendMessage($messageToReceiver$$);
      }, function($messageToSource$$) {
        $mr$Assertions$assert$$($$jscomp$this$jscomp$161$$.$b$).onMessageFromSink($messageToSource$$);
      });
      $JSCompiler_StaticMethods_module$exports$mr$Sequencer_Operation_prototype$complete$$($op$jscomp$6$$, 4);
      return {audio_stream_id:$streamIdentifiers$$.$audioStreamId$ || -1, video_stream_id:$streamIdentifiers$$.$videoStreamId$ || -1};
    }).catch(function($error$jscomp$88$$) {
      return $JSCompiler_StaticMethods_shutdownStreamingAndMessaging_$$($$jscomp$this$jscomp$161$$).then(function() {
        $JSCompiler_StaticMethods_module$exports$mr$Sequencer_Operation_prototype$complete$$($op$jscomp$6$$);
        throw $error$jscomp$88$$;
      });
    });
  }).catch(function($error$jscomp$89$$) {
    $$jscomp$this$jscomp$161$$.$logger_$.error("Failed to start remoting streams", $error$jscomp$89$$);
    $JSCompiler_StaticMethods_shutdown$$($$jscomp$this$jscomp$161$$);
    return {audio_stream_id:-1, video_stream_id:-1};
  });
};
$JSCompiler_prototypeAlias$$.stop = function($reason$jscomp$36$$) {
  var $$jscomp$this$jscomp$162$$ = this;
  $JSCompiler_StaticMethods_conductFromAny$$(this.$l$, function($op$jscomp$7$$) {
    $mr$Assertions$assert$$($$jscomp$this$jscomp$162$$.$b$).onStopped($reason$jscomp$36$$);
    return $JSCompiler_StaticMethods_shutdownStreamingAndMessaging_$$($$jscomp$this$jscomp$162$$).then(function() {
      $$jscomp$this$jscomp$162$$.$logger_$.info("Remoting stopped.");
      $JSCompiler_StaticMethods_module$exports$mr$Sequencer_Operation_prototype$complete$$($op$jscomp$7$$, 5);
      $mr$Assertions$assert$$($$jscomp$this$jscomp$162$$.$m$)().then(function() {
        return $JSCompiler_StaticMethods_conductFrom$$($$jscomp$this$jscomp$162$$.$l$, 5, function($op$jscomp$8$$) {
          if ($$jscomp$this$jscomp$162$$.$b$ && $$jscomp$this$jscomp$162$$.$f$) {
            $$jscomp$this$jscomp$162$$.$b$.onSinkAvailable($$jscomp$this$jscomp$162$$.$K$);
          }
          $JSCompiler_StaticMethods_module$exports$mr$Sequencer_Operation_prototype$complete$$($op$jscomp$8$$, 2);
          return Promise.resolve();
        });
      }).catch(function($error$jscomp$90$$) {
        throw $error$jscomp$90$$;
      });
      $$jscomp$this$jscomp$162$$.$m$ = null;
    });
  }).catch(function($error$jscomp$91$$) {
    $$jscomp$this$jscomp$162$$.$logger_$.error("Failed to stop remoting: ", $error$jscomp$91$$);
    $JSCompiler_StaticMethods_shutdown$$($$jscomp$this$jscomp$162$$);
  });
};
$JSCompiler_prototypeAlias$$.$estimateTransmissionCapacity$ = function() {
  null === this.$C$ && (this.$C$ = $module$contents$mr$DongleUtils_DongleUtils$getSetupInfo$$($mr$Assertions$assert$$(this.$o$.$mirrorInitData$).$sinkIpAddress$).then(function($info$jscomp$17$$) {
    return $info$jscomp$17$$.$f$ || !1;
  }));
  return this.$C$.then(function($isOnEthernet$$) {
    return {rate:($isOnEthernet$$ ? 10000000 : 5000000) / 8.0};
  });
};
var $JSCompiler_StaticMethods_shutdownStreamingAndMessaging_$$ = function($JSCompiler_StaticMethods_shutdownStreamingAndMessaging_$self$$) {
  return $JSCompiler_StaticMethods_shutdownStreamingAndMessaging_$self$$.$L$.stop().then(function() {
    $JSCompiler_StaticMethods_module$exports$mr$mirror$cast$MessageDispatcher_prototype$unsubscribe$$($JSCompiler_StaticMethods_shutdownStreamingAndMessaging_$self$$.$H$, "RPC");
    $JSCompiler_StaticMethods_stopMessaging$$($JSCompiler_StaticMethods_shutdownStreamingAndMessaging_$self$$.$g$);
    $JSCompiler_StaticMethods_stopReporting$$($JSCompiler_StaticMethods_shutdownStreamingAndMessaging_$self$$.$g$);
  });
}, $JSCompiler_StaticMethods_initMediaRemotingPrefValue_$$ = function($JSCompiler_StaticMethods_initMediaRemotingPrefValue_$self$$) {
  return new Promise(function($resolve$jscomp$65$$) {
    chrome.settingsPrivate.getPref("media_router.media_remoting.enabled", function($pref$jscomp$3$$) {
      chrome.runtime.lastError ? $JSCompiler_StaticMethods_initMediaRemotingPrefValue_$self$$.$logger_$.error("Encountered error getting media remoting pref: " + JSON.stringify(chrome.runtime.lastError)) : $pref$jscomp$3$$.type != chrome.settingsPrivate.PrefType.BOOLEAN ? $JSCompiler_StaticMethods_initMediaRemotingPrefValue_$self$$.$logger_$.error("Pref value not a boolean: " + JSON.stringify($pref$jscomp$3$$)) : ($JSCompiler_StaticMethods_initMediaRemotingPrefValue_$self$$.$f$ = !!$pref$jscomp$3$$.value, 
      $JSCompiler_StaticMethods_initMediaRemotingPrefValue_$self$$.$logger_$.info("Initializing mediaRemotingEnabled_ with value read from pref: " + $JSCompiler_StaticMethods_initMediaRemotingPrefValue_$self$$.$f$));
      chrome.settingsPrivate.onPrefsChanged.hasListener($JSCompiler_StaticMethods_initMediaRemotingPrefValue_$self$$.$s$) || chrome.settingsPrivate.onPrefsChanged.addListener($JSCompiler_StaticMethods_initMediaRemotingPrefValue_$self$$.$s$);
      $resolve$jscomp$65$$();
    });
  });
};
$module$exports$mr$mirror$cast$MediaRemoter$$.prototype.$M$ = function($$jscomp$iter$256_mediaRemotingEnabled_prefs$jscomp$1$$) {
  if (this.$b$) {
    $$jscomp$iter$256_mediaRemotingEnabled_prefs$jscomp$1$$ = $$jscomp$makeIterator$$($$jscomp$iter$256_mediaRemotingEnabled_prefs$jscomp$1$$);
    for (var $$jscomp$key$pref$jscomp$1_pref$jscomp$4$$ = $$jscomp$iter$256_mediaRemotingEnabled_prefs$jscomp$1$$.next(); !$$jscomp$key$pref$jscomp$1_pref$jscomp$4$$.done; $$jscomp$key$pref$jscomp$1_pref$jscomp$4$$ = $$jscomp$iter$256_mediaRemotingEnabled_prefs$jscomp$1$$.next()) {
      if ($$jscomp$key$pref$jscomp$1_pref$jscomp$4$$ = $$jscomp$key$pref$jscomp$1_pref$jscomp$4$$.value, "media_router.media_remoting.enabled" == $$jscomp$key$pref$jscomp$1_pref$jscomp$4$$.key) {
        if ($$jscomp$key$pref$jscomp$1_pref$jscomp$4$$.type != chrome.settingsPrivate.PrefType.BOOLEAN) {
          this.$logger_$.error("Pref value not a boolean: " + JSON.stringify($$jscomp$key$pref$jscomp$1_pref$jscomp$4$$));
          break;
        }
        $$jscomp$iter$256_mediaRemotingEnabled_prefs$jscomp$1$$ = !!$$jscomp$key$pref$jscomp$1_pref$jscomp$4$$.value;
        if (this.$f$ == $$jscomp$iter$256_mediaRemotingEnabled_prefs$jscomp$1$$) {
          break;
        }
        this.$f$ = $$jscomp$iter$256_mediaRemotingEnabled_prefs$jscomp$1$$;
        this.$logger_$.info("mediaRemotingEnabled_ changed to: " + this.$f$);
        if (this.$f$) {
          this.$b$.onSinkAvailable(this.$K$);
        } else {
          this.$b$.onStopped(mojo.RemotingStopReason.USER_DISABLED);
        }
        break;
      }
    }
  }
};
var $module$exports$mr$mirror$cast$MediaRemoter$toMojoRemotingSinkMetadata_$$ = function($capabilities$jscomp$10$$, $mirrorInitData$jscomp$2$$) {
  var $$jscomp$this$jscomp$165$$ = this, $sink_metadata$$ = new mojo.RemotingSinkMetadata;
  $sink_metadata$$.features = [];
  $sink_metadata$$.friendly_name = $mirrorInitData$jscomp$2$$.$sinkFriendlyName$ || "";
  $sink_metadata$$.audio_capabilities = [];
  $sink_metadata$$.video_capabilities = [];
  var $AudioCapability$$ = mojo.RemotingSinkAudioCapability, $VideoCapability$$ = mojo.RemotingSinkVideoCapability, $audioCaps$$ = $sink_metadata$$.audio_capabilities, $videoCaps$$ = $sink_metadata$$.video_capabilities, $modelName$jscomp$4$$ = $mirrorInitData$jscomp$2$$.$sinkModelName$ || "";
  ($capabilities$jscomp$10$$.$b$ || []).forEach(function($capName$$) {
    switch($capName$$) {
      case "audio":
        $audioCaps$$.push($AudioCapability$$.CODEC_BASELINE_SET);
        break;
      case "aac":
        $audioCaps$$.push($AudioCapability$$.CODEC_AAC);
        break;
      case "opus":
        $audioCaps$$.push($AudioCapability$$.CODEC_OPUS);
        break;
      case "video":
        $videoCaps$$.push($VideoCapability$$.CODEC_BASELINE_SET);
        break;
      case "4k":
        $videoCaps$$.push($VideoCapability$$.SUPPORT_4K);
        break;
      case "h264":
        $videoCaps$$.push($VideoCapability$$.CODEC_H264);
        break;
      case "vp8":
        $videoCaps$$.push($VideoCapability$$.CODEC_VP8);
        break;
      case "vp9":
        $modelName$jscomp$4$$.startsWith("Chromecast Ultra") && $videoCaps$$.push($VideoCapability$$.CODEC_VP9);
        break;
      case "hevc":
        $modelName$jscomp$4$$.startsWith("Chromecast Ultra") && $videoCaps$$.push($VideoCapability$$.CODEC_HEVC);
        break;
      default:
        $$jscomp$this$jscomp$165$$.$logger_$.info("Unknown mediaCap name: " + $capName$$);
    }
  });
  $mirrorInitData$jscomp$2$$.$sinkModelName$ && "Chromecast Ultra" == $mirrorInitData$jscomp$2$$.$sinkModelName$ && $videoCaps$$.push($VideoCapability$$.SUPPORT_4K);
  return $sink_metadata$$;
};
$module$exports$mr$mirror$cast$MediaRemoter$$.prototype.estimateTransmissionCapacity = $module$exports$mr$mirror$cast$MediaRemoter$$.prototype.$estimateTransmissionCapacity$;
$module$exports$mr$mirror$cast$MediaRemoter$$.prototype.stop = $module$exports$mr$mirror$cast$MediaRemoter$$.prototype.stop;
$module$exports$mr$mirror$cast$MediaRemoter$$.prototype.startDataStreams = $module$exports$mr$mirror$cast$MediaRemoter$$.prototype.$startDataStreams$;
$module$exports$mr$mirror$cast$MediaRemoter$$.prototype.start = $module$exports$mr$mirror$cast$MediaRemoter$$.prototype.start;
$module$exports$mr$mirror$cast$MediaRemoter$$.prototype.sendMessageToSink = $module$exports$mr$mirror$cast$MediaRemoter$$.prototype.$sendMessageToSink$;
var $module$exports$mr$mirror$cast$MediaRemoter$RpcPipe_$$ = function() {
  this.$g$ = this.$f$ = this.$b$ = null;
  this.$C$ = this.$h$ = this.$o$ = this.$l$ = this.$s$ = 0;
  this.$m$ = null;
}, $JSCompiler_StaticMethods_startQueueingMessagesToReceiver$$ = function($JSCompiler_StaticMethods_startQueueingMessagesToReceiver$self$$) {
  $mr$Assertions$assert$$(!$JSCompiler_StaticMethods_startQueueingMessagesToReceiver$self$$.$b$);
  $mr$Assertions$assert$$(!$JSCompiler_StaticMethods_startQueueingMessagesToReceiver$self$$.$f$);
  $JSCompiler_StaticMethods_startQueueingMessagesToReceiver$self$$.$b$ = [];
  $JSCompiler_StaticMethods_resetStats_$$($JSCompiler_StaticMethods_startQueueingMessagesToReceiver$self$$, performance.now());
}, $JSCompiler_StaticMethods_startTwoWayMessaging$$ = function($JSCompiler_StaticMethods_startTwoWayMessaging$self$$, $messagesToSend_sendToReceiver$$, $sendToSource$$) {
  $mr$Assertions$assert$$(!$JSCompiler_StaticMethods_startTwoWayMessaging$self$$.$f$);
  $mr$Assertions$assert$$(!$JSCompiler_StaticMethods_startTwoWayMessaging$self$$.$g$);
  $JSCompiler_StaticMethods_startTwoWayMessaging$self$$.$f$ = $messagesToSend_sendToReceiver$$;
  $JSCompiler_StaticMethods_startTwoWayMessaging$self$$.$g$ = $sendToSource$$;
  $JSCompiler_StaticMethods_startTwoWayMessaging$self$$.$b$ ? ($messagesToSend_sendToReceiver$$ = $JSCompiler_StaticMethods_startTwoWayMessaging$self$$.$b$, $JSCompiler_StaticMethods_startTwoWayMessaging$self$$.$b$ = null, $messagesToSend_sendToReceiver$$.forEach(function($message$jscomp$167$$) {
    return $JSCompiler_StaticMethods_module$exports$mr$mirror$cast$MediaRemoter_RpcPipe__prototype$sendToReceiver$$($JSCompiler_StaticMethods_startTwoWayMessaging$self$$, $message$jscomp$167$$.data).then($message$jscomp$167$$.$sendResolved$, $message$jscomp$167$$.$sendRejected$);
  })) : $JSCompiler_StaticMethods_resetStats_$$($JSCompiler_StaticMethods_startTwoWayMessaging$self$$, performance.now());
}, $JSCompiler_StaticMethods_stopMessaging$$ = function($JSCompiler_StaticMethods_stopMessaging$self$$) {
  if ($JSCompiler_StaticMethods_stopMessaging$self$$.$b$) {
    var $error$jscomp$92$$ = Error("Stop before delivering pending message");
    $JSCompiler_StaticMethods_stopMessaging$self$$.$b$.forEach(function($message$jscomp$168$$) {
      return $message$jscomp$168$$.$sendRejected$($error$jscomp$92$$);
    });
    $JSCompiler_StaticMethods_stopMessaging$self$$.$b$ = null;
  }
  $JSCompiler_StaticMethods_stopMessaging$self$$.$f$ = null;
  $JSCompiler_StaticMethods_stopMessaging$self$$.$g$ = null;
}, $JSCompiler_StaticMethods_module$exports$mr$mirror$cast$MediaRemoter_RpcPipe__prototype$sendToReceiver$$ = function($JSCompiler_StaticMethods_module$exports$mr$mirror$cast$MediaRemoter_RpcPipe__prototype$sendToReceiver$self$$, $data$jscomp$98$$) {
  if ($JSCompiler_StaticMethods_module$exports$mr$mirror$cast$MediaRemoter_RpcPipe__prototype$sendToReceiver$self$$.$f$) {
    var $base64EncodedData$$ = btoa(String.fromCharCode.apply(null, $data$jscomp$98$$));
    ++$JSCompiler_StaticMethods_module$exports$mr$mirror$cast$MediaRemoter_RpcPipe__prototype$sendToReceiver$self$$.$s$;
    $JSCompiler_StaticMethods_module$exports$mr$mirror$cast$MediaRemoter_RpcPipe__prototype$sendToReceiver$self$$.$l$ += $data$jscomp$98$$.length;
    return $JSCompiler_StaticMethods_module$exports$mr$mirror$cast$MediaRemoter_RpcPipe__prototype$sendToReceiver$self$$.$f$({type:"RPC", rpc:$base64EncodedData$$});
  }
  return $JSCompiler_StaticMethods_module$exports$mr$mirror$cast$MediaRemoter_RpcPipe__prototype$sendToReceiver$self$$.$b$ ? new Promise(function($resolve$jscomp$66$$, $reject$jscomp$58$$) {
    $JSCompiler_StaticMethods_module$exports$mr$mirror$cast$MediaRemoter_RpcPipe__prototype$sendToReceiver$self$$.$b$.push({data:$data$jscomp$98$$, $sendResolved$:$resolve$jscomp$66$$, $sendRejected$:$reject$jscomp$58$$});
  }) : Promise.reject(Error("RPC pipe not started"));
}, $JSCompiler_StaticMethods_startReporting$$ = function($JSCompiler_StaticMethods_startReporting$self$$, $reportCallback$$) {
  $JSCompiler_StaticMethods_stopReporting$$($JSCompiler_StaticMethods_startReporting$self$$);
  $JSCompiler_StaticMethods_startReporting$self$$.$m$ = setInterval(function() {
    if ($JSCompiler_StaticMethods_startReporting$self$$.$b$) {
      var $JSCompiler_inline_result$jscomp$572_now$jscomp$inline_2538$$ = $JSCompiler_StaticMethods_startReporting$self$$.$b$.length + " messages are waiting to send.";
    } else {
      $JSCompiler_inline_result$jscomp$572_now$jscomp$inline_2538$$ = performance.now();
      var $elapsedSeconds$jscomp$inline_2539_report$jscomp$inline_2540$$ = ($JSCompiler_inline_result$jscomp$572_now$jscomp$inline_2538$$ - $JSCompiler_StaticMethods_startReporting$self$$.$C$) / 1000.0;
      $elapsedSeconds$jscomp$inline_2539_report$jscomp$inline_2540$$ = "Over the past " + $elapsedSeconds$jscomp$inline_2539_report$jscomp$inline_2540$$.toFixed(1) + " seconds, sent " + ($JSCompiler_StaticMethods_startReporting$self$$.$s$ + " messages (" + Math.round($JSCompiler_StaticMethods_startReporting$self$$.$l$ / $elapsedSeconds$jscomp$inline_2539_report$jscomp$inline_2540$$) + " bytes/sec) and received ") + ($JSCompiler_StaticMethods_startReporting$self$$.$o$ + " messages (" + Math.round($JSCompiler_StaticMethods_startReporting$self$$.$h$ / 
      $elapsedSeconds$jscomp$inline_2539_report$jscomp$inline_2540$$) + " bytes/sec).");
      $JSCompiler_StaticMethods_resetStats_$$($JSCompiler_StaticMethods_startReporting$self$$, $JSCompiler_inline_result$jscomp$572_now$jscomp$inline_2538$$);
      $JSCompiler_inline_result$jscomp$572_now$jscomp$inline_2538$$ = $elapsedSeconds$jscomp$inline_2539_report$jscomp$inline_2540$$;
    }
    $reportCallback$$($JSCompiler_inline_result$jscomp$572_now$jscomp$inline_2538$$);
  }, 3000);
}, $JSCompiler_StaticMethods_stopReporting$$ = function($JSCompiler_StaticMethods_stopReporting$self$$) {
  null != $JSCompiler_StaticMethods_stopReporting$self$$.$m$ && (clearInterval($JSCompiler_StaticMethods_stopReporting$self$$.$m$), $JSCompiler_StaticMethods_stopReporting$self$$.$m$ = null);
}, $JSCompiler_StaticMethods_resetStats_$$ = function($JSCompiler_StaticMethods_resetStats_$self$$, $from$jscomp$8$$) {
  $JSCompiler_StaticMethods_resetStats_$self$$.$s$ = 0;
  $JSCompiler_StaticMethods_resetStats_$self$$.$l$ = 0;
  $JSCompiler_StaticMethods_resetStats_$self$$.$o$ = 0;
  $JSCompiler_StaticMethods_resetStats_$self$$.$h$ = 0;
  $JSCompiler_StaticMethods_resetStats_$self$$.$C$ = $from$jscomp$8$$;
};
var $mr$MediaStreamUtils$getAudioTrack$$ = function($stream$jscomp$14$$) {
  return $stream$jscomp$14$$ && $stream$jscomp$14$$.getAudioTracks() && 0 < $stream$jscomp$14$$.getAudioTracks().length ? $stream$jscomp$14$$.getAudioTracks()[0] : null;
}, $mr$MediaStreamUtils$getVideoTrack$$ = function($stream$jscomp$15$$) {
  return $stream$jscomp$15$$ && $stream$jscomp$15$$.getVideoTracks() && 0 < $stream$jscomp$15$$.getVideoTracks().length ? $stream$jscomp$15$$.getVideoTracks()[0] : null;
};
var $module$exports$mr$mirror$cast$MediaStreamer$$ = function($mirrorInitData$jscomp$3$$, $mirrorSettings$jscomp$9$$, $seqNumGenerator$jscomp$2$$, $messageDispatcher$jscomp$2$$, $testHooks$jscomp$3$$) {
  this.$g$ = new $module$exports$mr$mirror$cast$StreamingLaunchWorkflow$$($mirrorInitData$jscomp$3$$, $mirrorSettings$jscomp$9$$, $seqNumGenerator$jscomp$2$$, $messageDispatcher$jscomp$2$$, void 0 === $testHooks$jscomp$3$$ ? null : $testHooks$jscomp$3$$);
  this.$logger_$ = $mr$Logger$getInstance$$("mr.mirror.cast.MediaStreamer");
  this.$l$ = new $module$exports$mr$Sequencer$$;
  this.$h$ = this.$f$ = this.$b$ = this.$m$ = null;
};
$module$exports$mr$mirror$cast$MediaStreamer$$.prototype.start = function($mediaStream$jscomp$4$$, $client$jscomp$8$$) {
  var $$jscomp$this$jscomp$169$$ = this;
  return $JSCompiler_StaticMethods_conductFrom$$(this.$l$, 1, function($op$jscomp$9$$) {
    $$jscomp$this$jscomp$169$$.$m$ = $mediaStream$jscomp$4$$;
    $$jscomp$this$jscomp$169$$.$b$ = $mr$MediaStreamUtils$getAudioTrack$$($mediaStream$jscomp$4$$);
    $$jscomp$this$jscomp$169$$.$b$ && "ended" == $$jscomp$this$jscomp$169$$.$b$.readyState && ($$jscomp$this$jscomp$169$$.$b$ = null);
    $$jscomp$this$jscomp$169$$.$f$ = $mr$MediaStreamUtils$getVideoTrack$$($mediaStream$jscomp$4$$);
    $$jscomp$this$jscomp$169$$.$f$ && "ended" == $$jscomp$this$jscomp$169$$.$f$.readyState && ($$jscomp$this$jscomp$169$$.$f$ = null);
    if (!$$jscomp$this$jscomp$169$$.$b$ && !$$jscomp$this$jscomp$169$$.$f$) {
      return $JSCompiler_StaticMethods_module$exports$mr$Sequencer_Operation_prototype$complete$$($op$jscomp$9$$), Promise.reject(Error("No MediaStream tracks to stream."));
    }
    $$jscomp$this$jscomp$169$$.$h$ = $client$jscomp$8$$;
    return $$jscomp$this$jscomp$169$$.$g$.start($$jscomp$this$jscomp$169$$.$b$, $$jscomp$this$jscomp$169$$.$f$, $$jscomp$this$jscomp$169$$.$h$).then(function() {
      return $JSCompiler_StaticMethods_module$exports$mr$Sequencer_Operation_prototype$complete$$($op$jscomp$9$$, 2);
    });
  });
};
$module$exports$mr$mirror$cast$MediaStreamer$$.prototype.stop = function() {
  var $$jscomp$this$jscomp$170$$ = this;
  return $JSCompiler_StaticMethods_recover$$(this.$l$, function($op$jscomp$10$$) {
    return $$jscomp$this$jscomp$170$$.$g$.stop().then(function() {
      $$jscomp$this$jscomp$170$$.$b$ = null;
      $$jscomp$this$jscomp$170$$.$f$ = null;
      $$jscomp$this$jscomp$170$$.$m$ = null;
      $$jscomp$this$jscomp$170$$.$h$ = null;
      $JSCompiler_StaticMethods_module$exports$mr$Sequencer_Operation_prototype$complete$$($op$jscomp$10$$, 1);
    });
  });
};
var $JSCompiler_StaticMethods_module$exports$mr$mirror$cast$MediaStreamer_prototype$suspend$$ = function($JSCompiler_StaticMethods_module$exports$mr$mirror$cast$MediaStreamer_prototype$suspend$self$$) {
  return $JSCompiler_StaticMethods_conductFrom$$($JSCompiler_StaticMethods_module$exports$mr$mirror$cast$MediaStreamer_prototype$suspend$self$$.$l$, 2, function($op$jscomp$11$$) {
    $JSCompiler_StaticMethods_module$exports$mr$mirror$cast$MediaStreamer_prototype$suspend$self$$.$logger_$.info("Suspending media streaming...");
    return $JSCompiler_StaticMethods_module$exports$mr$mirror$cast$MediaStreamer_prototype$suspend$self$$.$g$.stop().then(function() {
      $JSCompiler_StaticMethods_module$exports$mr$mirror$cast$MediaStreamer_prototype$suspend$self$$.$logger_$.info("Suspended media streaming.");
      $JSCompiler_StaticMethods_module$exports$mr$Sequencer_Operation_prototype$complete$$($op$jscomp$11$$, 3);
    });
  });
};
$module$exports$mr$mirror$cast$MediaStreamer$$.prototype.resume = function() {
  var $$jscomp$this$jscomp$172$$ = this;
  return $JSCompiler_StaticMethods_conductFrom$$(this.$l$, 3, function($op$jscomp$12$$) {
    $$jscomp$this$jscomp$172$$.$b$ && "ended" == $$jscomp$this$jscomp$172$$.$b$.readyState && ($$jscomp$this$jscomp$172$$.$b$ = null);
    $$jscomp$this$jscomp$172$$.$f$ && "ended" == $$jscomp$this$jscomp$172$$.$f$.readyState && ($$jscomp$this$jscomp$172$$.$f$ = null);
    if (!$$jscomp$this$jscomp$172$$.$b$ && !$$jscomp$this$jscomp$172$$.$f$) {
      return Promise.reject(Error("Cannot resume: All tracks have ended."));
    }
    $$jscomp$this$jscomp$172$$.$logger_$.info("Resuming media streaming...");
    return $$jscomp$this$jscomp$172$$.$g$.start($$jscomp$this$jscomp$172$$.$b$, $$jscomp$this$jscomp$172$$.$f$, $goog$asserts$assert$$($$jscomp$this$jscomp$172$$.$h$)).then(function() {
      $$jscomp$this$jscomp$172$$.$logger_$.info("Resumed media streaming.");
      $JSCompiler_StaticMethods_module$exports$mr$Sequencer_Operation_prototype$complete$$($op$jscomp$12$$, 2);
    });
  });
};
var $module$exports$mr$mirror$cast$WifiStatusMonitor$$ = function($sessionId$jscomp$42$$, $seqNumGenerator$jscomp$3$$, $messageDispatcher$jscomp$3$$) {
  this.$l$ = $sessionId$jscomp$42$$;
  this.$h$ = $seqNumGenerator$jscomp$3$$;
  this.$g$ = $messageDispatcher$jscomp$3$$;
  this.$logger_$ = $mr$Logger$getInstance$$("mr.mirror.cast.WifiStatusMonitor");
  this.$b$ = null;
  this.$f$ = [];
};
$module$exports$mr$mirror$cast$WifiStatusMonitor$$.prototype.start = function() {
  var $$jscomp$this$jscomp$173$$ = this;
  null == this.$b$ && ($JSCompiler_StaticMethods_mr_Logger_prototype$fine$$(this.$logger_$, "Starting Wifi Status Monitoring."), this.$f$ = [], this.$g$.subscribe("STATUS_RESPONSE", function($response$jscomp$42$$) {
    return $JSCompiler_StaticMethods_onReceiverResponse_$$($$jscomp$this$jscomp$173$$, $response$jscomp$42$$);
  }), this.$b$ = setInterval(function() {
    return $JSCompiler_StaticMethods_sendStatusQuery_$$($$jscomp$this$jscomp$173$$);
  }, 12E4), $JSCompiler_StaticMethods_sendStatusQuery_$$(this));
};
$module$exports$mr$mirror$cast$WifiStatusMonitor$$.prototype.stop = function() {
  null != this.$b$ && ($JSCompiler_StaticMethods_mr_Logger_prototype$fine$$(this.$logger_$, "Stopping Wifi Status Monitoring."), clearInterval(this.$b$), this.$b$ = null, $JSCompiler_StaticMethods_module$exports$mr$mirror$cast$MessageDispatcher_prototype$unsubscribe$$(this.$g$, "STATUS_RESPONSE"));
};
var $JSCompiler_StaticMethods_onReceiverResponse_$$ = function($JSCompiler_StaticMethods_onReceiverResponse_$self$$, $response$jscomp$43$$) {
  if (null != $JSCompiler_StaticMethods_onReceiverResponse_$self$$.$b$) {
    if ($response$jscomp$43$$.status) {
      var $dataPoint$$ = {};
      null != $response$jscomp$43$$.status.$b$ && ($dataPoint$$.wifiSnr = $response$jscomp$43$$.status.$b$);
      null != $response$jscomp$43$$.status.$f$ && ($dataPoint$$.wifiSpeed = $response$jscomp$43$$.status.$f$[3]);
      0 == Object.keys($dataPoint$$).length ? $JSCompiler_StaticMethods_onReceiverResponse_$self$$.$logger_$.$warning$(function() {
        return "No status fields populated in response: " + JSON.stringify($response$jscomp$43$$);
      }) : ($dataPoint$$.timestamp = Date.now(), 30 == $JSCompiler_StaticMethods_onReceiverResponse_$self$$.$f$.length && $JSCompiler_StaticMethods_onReceiverResponse_$self$$.$f$.shift(), $JSCompiler_StaticMethods_onReceiverResponse_$self$$.$f$.push($dataPoint$$), $JSCompiler_StaticMethods_onReceiverResponse_$self$$.$logger_$.info(function() {
        return "Current Wifi status: " + JSON.stringify($dataPoint$$);
      }));
    } else {
      $JSCompiler_StaticMethods_onReceiverResponse_$self$$.$logger_$.$warning$(function() {
        return "Ignoring response without status: " + JSON.stringify($response$jscomp$43$$);
      });
    }
  }
}, $JSCompiler_StaticMethods_sendStatusQuery_$$ = function($JSCompiler_StaticMethods_sendStatusQuery_$self$$) {
  $JSCompiler_StaticMethods_sendStatusQuery_$self$$.$g$.sendMessage({type:"GET_STATUS", sessionId:$JSCompiler_StaticMethods_sendStatusQuery_$self$$.$l$, seqNum:$JSCompiler_StaticMethods_getNext$$($JSCompiler_StaticMethods_sendStatusQuery_$self$$.$h$), get_status:["wifiSnr", "wifiSpeed"]});
};
var $module$exports$mr$mirror$cast$SessionMonitor$$ = function($mirrorSettings$jscomp$10$$, $mirrorInitData$jscomp$4$$, $maxRetentionBytes$$, $wifiMonitor$$) {
  this.$K$ = $mirrorInitData$jscomp$4$$.$sinkIpAddress$;
  this.$o$ = {extVersion:chrome.runtime.getManifest().version, extChannel:"internal", mirrorSettings:$JSCompiler_StaticMethods_toJsonString$$($mirrorSettings$jscomp$10$$), sender:navigator.userAgent || "UNKNOWN", receiverProductName:$mirrorInitData$jscomp$4$$.$sinkModelName$};
  this.$J$ = $maxRetentionBytes$$;
  this.$H$ = $wifiMonitor$$;
  this.$h$ = this.$f$ = this.$s$ = this.$m$ = this.$l$ = this.$C$ = this.$g$ = null;
  this.$b$ = [];
};
$module$exports$mr$mirror$cast$SessionMonitor$$.prototype.$didStartStreaming$ = function($streamingMonitor$jscomp$2$$) {
  null != this.$f$ && clearInterval(this.$f$);
  this.$g$ = $streamingMonitor$jscomp$2$$;
  this.$C$ = Date.now();
  this.$f$ = setInterval(this.$G$.bind(this, $streamingMonitor$jscomp$2$$), 9E5);
};
$module$exports$mr$mirror$cast$SessionMonitor$$.prototype.$willStopStreaming$ = function() {
  null != this.$f$ && (clearInterval(this.$f$), this.$f$ = null);
  if (null != this.$g$) {
    var $finalSnapshotPromise$$ = this.$G$(this.$g$);
    this.$g$ = null;
    return $finalSnapshotPromise$$;
  }
  return Promise.resolve();
};
$module$exports$mr$mirror$cast$SessionMonitor$$.prototype.$onStreamingError$ = function($message$jscomp$169$$, $error$jscomp$93$$) {
  null == this.$l$ && (this.$l$ = Date.now(), "function" === typeof $message$jscomp$169$$ ? this.$m$ = $message$jscomp$169$$() : "string" === typeof $message$jscomp$169$$ && (this.$m$ = $message$jscomp$169$$), $error$jscomp$93$$ && "string" === typeof $error$jscomp$93$$.stack && (this.$s$ = $error$jscomp$93$$.stack));
};
var $JSCompiler_StaticMethods_module$exports$mr$mirror$cast$SessionMonitor_prototype$assembleBundlesAndClear$$ = function($JSCompiler_StaticMethods_module$exports$mr$mirror$cast$SessionMonitor_prototype$assembleBundlesAndClear$self$$, $bundleSizes$$) {
  return (null == $JSCompiler_StaticMethods_module$exports$mr$mirror$cast$SessionMonitor_prototype$assembleBundlesAndClear$self$$.$g$ ? Promise.resolve() : $JSCompiler_StaticMethods_module$exports$mr$mirror$cast$SessionMonitor_prototype$assembleBundlesAndClear$self$$.$G$($JSCompiler_StaticMethods_module$exports$mr$mirror$cast$SessionMonitor_prototype$assembleBundlesAndClear$self$$.$g$)).then(function() {
    var $bundles$$ = $bundleSizes$$.map(function($maxBytes_snapshotSlice$$) {
      $maxBytes_snapshotSlice$$ = $JSCompiler_StaticMethods_makeSliceOfSnapshots_$$($JSCompiler_StaticMethods_module$exports$mr$mirror$cast$SessionMonitor_prototype$assembleBundlesAndClear$self$$, $maxBytes_snapshotSlice$$);
      var $eventsPieces$$ = $maxBytes_snapshotSlice$$.map(function($x$jscomp$107$$) {
        return $x$jscomp$107$$.events;
      }).filter(function($x$jscomp$108$$) {
        return null != $x$jscomp$108$$;
      }), $statsPieces$$ = ["["];
      $maxBytes_snapshotSlice$$.map(function($x$jscomp$109$$) {
        return $x$jscomp$109$$.$stats$;
      }).forEach(function($stats$jscomp$1$$, $index$jscomp$106$$) {
        0 < $index$jscomp$106$$ && $statsPieces$$.push(",");
        $statsPieces$$.push($stats$jscomp$1$$);
      });
      $statsPieces$$.push("]");
      return {events:new Blob($eventsPieces$$, {type:"application/gzip"}), $stats$:new Blob($statsPieces$$, {type:"application/json"})};
    });
    $JSCompiler_StaticMethods_module$exports$mr$mirror$cast$SessionMonitor_prototype$assembleBundlesAndClear$self$$.$b$ = [];
    return $bundles$$;
  });
};
$module$exports$mr$mirror$cast$SessionMonitor$$.prototype.$G$ = function($streamingMonitor$jscomp$3$$) {
  var $$jscomp$this$jscomp$175$$ = this;
  if (null != this.$h$) {
    return this.$h$;
  }
  var $tagsPromise$$ = $module$contents$mr$DongleUtils_DongleUtils$getSetupInfo$$(this.$K$).then(function($info$jscomp$18_tags$jscomp$3$$) {
    $info$jscomp$18_tags$jscomp$3$$ = {receiverVersion:$info$jscomp$18_tags$jscomp$3$$.$b$, receiverConnected:$info$jscomp$18_tags$jscomp$3$$.$h$, receiverOnEthernet:$info$jscomp$18_tags$jscomp$3$$.$f$, receiverHasUpdatePending:$info$jscomp$18_tags$jscomp$3$$.$g$, receiverUptimeSeconds:$info$jscomp$18_tags$jscomp$3$$.$l$};
    Object.assign($info$jscomp$18_tags$jscomp$3$$, $$jscomp$this$jscomp$175$$.$o$);
    var $endTime$jscomp$4$$ = Date.now();
    Object.assign($info$jscomp$18_tags$jscomp$3$$, {startTime:$$jscomp$this$jscomp$175$$.$C$, endTime:$endTime$jscomp$4$$, activity:$JSCompiler_StaticMethods_getActivityDescription$$($streamingMonitor$jscomp$3$$), receiverWifiStatus:Array.from($$jscomp$this$jscomp$175$$.$H$.$f$)});
    $$jscomp$this$jscomp$175$$.$C$ = $endTime$jscomp$4$$;
    null != $$jscomp$this$jscomp$175$$.$l$ && (Object.assign($info$jscomp$18_tags$jscomp$3$$, {streamingErrorTime:$$jscomp$this$jscomp$175$$.$l$, streamingErrorMessage:$$jscomp$this$jscomp$175$$.$m$, streamingErrorCause:$$jscomp$this$jscomp$175$$.$s$}), $$jscomp$this$jscomp$175$$.$l$ = null, $$jscomp$this$jscomp$175$$.$m$ = null, $$jscomp$this$jscomp$175$$.$s$ = null);
    return $info$jscomp$18_tags$jscomp$3$$;
  });
  return (this.$h$ = Promise.all([$tagsPromise$$.then(function($tags$jscomp$4$$) {
    return $JSCompiler_StaticMethods_takeEvents$$($streamingMonitor$jscomp$3$$, $tags$jscomp$4$$);
  }), $tagsPromise$$, $JSCompiler_StaticMethods_getStatsAndReset$$($streamingMonitor$jscomp$3$$)]).then(function($$jscomp$destructuring$var27_events$jscomp$4$$) {
    var $$jscomp$destructuring$var28_stats$jscomp$2$$ = $$jscomp$makeIterator$$($$jscomp$destructuring$var27_events$jscomp$4$$);
    $$jscomp$destructuring$var27_events$jscomp$4$$ = $$jscomp$destructuring$var28_stats$jscomp$2$$.next().value;
    var $tags$jscomp$5$$ = $$jscomp$destructuring$var28_stats$jscomp$2$$.next().value;
    $$jscomp$destructuring$var28_stats$jscomp$2$$ = $$jscomp$destructuring$var28_stats$jscomp$2$$.next().value;
    $$jscomp$this$jscomp$175$$.$b$.push({events:$$jscomp$destructuring$var27_events$jscomp$4$$, $stats$:new Blob([JSON.stringify(Object.assign({tags:$tags$jscomp$5$$}, $$jscomp$destructuring$var28_stats$jscomp$2$$))], {type:"application/json"})});
    $$jscomp$this$jscomp$175$$.$b$ = $JSCompiler_StaticMethods_makeSliceOfSnapshots_$$($$jscomp$this$jscomp$175$$, $$jscomp$this$jscomp$175$$.$J$);
    $$jscomp$this$jscomp$175$$.$h$ = null;
  })) || Promise.resolve();
};
var $JSCompiler_StaticMethods_makeSliceOfSnapshots_$$ = function($JSCompiler_StaticMethods_makeSliceOfSnapshots_$self$$, $maxBytes$jscomp$1$$) {
  $maxBytes$jscomp$1$$ -= 2;
  for (var $slice$$ = [], $i$jscomp$304$$ = $JSCompiler_StaticMethods_makeSliceOfSnapshots_$self$$.$b$.length - 1; 0 <= $i$jscomp$304$$; --$i$jscomp$304$$) {
    $maxBytes$jscomp$1$$ -= $JSCompiler_StaticMethods_makeSliceOfSnapshots_$self$$.$b$[$i$jscomp$304$$].$stats$.size + 1;
    if (0 > $maxBytes$jscomp$1$$) {
      break;
    }
    $slice$$.push({events:null, $stats$:$JSCompiler_StaticMethods_makeSliceOfSnapshots_$self$$.$b$[$i$jscomp$304$$].$stats$});
    if (null != $JSCompiler_StaticMethods_makeSliceOfSnapshots_$self$$.$b$[$i$jscomp$304$$].events) {
      var $blobSize$$ = $JSCompiler_StaticMethods_makeSliceOfSnapshots_$self$$.$b$[$i$jscomp$304$$].events.size;
      $maxBytes$jscomp$1$$ >= $blobSize$$ && ($slice$$[$slice$$.length - 1].events = $JSCompiler_StaticMethods_makeSliceOfSnapshots_$self$$.$b$[$i$jscomp$304$$].events, $maxBytes$jscomp$1$$ -= $blobSize$$);
    }
  }
  return $slice$$.reverse();
};
var $mr$NetworkUtils$logger_$$ = $mr$Logger$getInstance$$("mr.NetworkUtils"), $mr$NetworkUtils$setTDLSState_$$ = function($ipAddress$jscomp$19$$, $state$jscomp$15$$) {
  if (!$mr$mirror$Config$isTDLSSupportedByPlatform$$) {
    return Promise.reject("TDLS feature not enabled.");
  }
  $mr$NetworkUtils$logger_$$.info("setTDLSState_: ip=" + $ipAddress$jscomp$19$$ + ", state=" + $state$jscomp$15$$);
  return new Promise(function($resolve$jscomp$67$$, $reject$jscomp$59$$) {
    chrome.networkingPrivate.setWifiTDLSEnabledState($ipAddress$jscomp$19$$, $state$jscomp$15$$, function($status$jscomp$11$$) {
      chrome.runtime.lastError ? ($mr$NetworkUtils$logger_$$.$warning$("Unable to set TDLS state: state = " + $state$jscomp$15$$ + ", error = " + chrome.runtime.lastError.message), $reject$jscomp$59$$("Unable to set TDLS state to " + $state$jscomp$15$$ + ".")) : ($mr$NetworkUtils$logger_$$.info("TDLS state changed: state = " + $state$jscomp$15$$ + ", status = " + $status$jscomp$11$$), $resolve$jscomp$67$$($status$jscomp$11$$));
    });
  });
};
var $module$contents$mr$mirror$cast$Session_Session$$ = function($mirrorSettings$jscomp$11$$, $route$jscomp$91$$, $maxLogsRetentionBytes$$, $testHooks$jscomp$4$$) {
  $testHooks$jscomp$4$$ = void 0 === $testHooks$jscomp$4$$ ? null : $testHooks$jscomp$4$$;
  $mr$mirror$Session$$.call(this, $route$jscomp$91$$);
  var $mirrorInitData$jscomp$5$$ = $goog$asserts$assert$$($route$jscomp$91$$.$mirrorInitData$);
  this.$H$ = $mirrorInitData$jscomp$5$$.sessionId;
  this.$M$ = $mirrorInitData$jscomp$5$$.$sinkIpAddress$;
  this.$G$ = $mirrorSettings$jscomp$11$$;
  this.$O$ = $testHooks$jscomp$4$$;
  this.$logger_$ = $mr$Logger$getInstance$$("mr.mirror.cast.Session");
  this.$C$ = new $module$exports$mr$Sequencer$$;
  this.$s$ = new $mr$IdGenerator$$("mirror.cast.SeqNumGenerator");
  this.$o$ = new $module$exports$mr$mirror$cast$MessageDispatcher$$($route$jscomp$91$$.id);
  this.$m$ = new $module$exports$mr$mirror$cast$MediaStreamer$$($mirrorInitData$jscomp$5$$, this.$G$, this.$s$, this.$o$, this.$O$);
  this.$l$ = null;
  this.$b$ = new $module$exports$mr$mirror$cast$SessionMonitor$$($mirrorSettings$jscomp$11$$, $mirrorInitData$jscomp$5$$, $maxLogsRetentionBytes$$, new $module$exports$mr$mirror$cast$WifiStatusMonitor$$(this.$H$, this.$s$, this.$o$));
  this.$h$ = !1;
  this.$J$ = null;
};
$$jscomp$inherits$$($module$contents$mr$mirror$cast$Session_Session$$, $mr$mirror$Session$$);
$JSCompiler_prototypeAlias$$ = $module$contents$mr$mirror$cast$Session_Session$$.prototype;
$JSCompiler_prototypeAlias$$.start = function($mediaStream$jscomp$5$$) {
  var $$jscomp$this$jscomp$176$$ = this;
  return $JSCompiler_StaticMethods_conductFrom$$(this.$C$, 1, function($op$jscomp$13$$) {
    var $sessionStartTiming$$ = $mr$CastStreamingAnalytics$startTimingSessionLaunch$$();
    return $JSCompiler_StaticMethods_maybeEnableTdls_$$($$jscomp$this$jscomp$176$$).then(function($enabledTdls$$) {
      $$jscomp$this$jscomp$176$$.$h$ = $enabledTdls$$;
      return $$jscomp$this$jscomp$176$$.$m$.start($mediaStream$jscomp$5$$, $$jscomp$this$jscomp$176$$);
    }).then(function() {
      if ($$jscomp$this$jscomp$176$$.$m$.$g$.$H$) {
        var $JSCompiler_StaticMethods_didStartSession$self$jscomp$inline_2542$$ = $$jscomp$this$jscomp$176$$.$b$;
        $JSCompiler_StaticMethods_didStartSession$self$jscomp$inline_2542$$.$o$.tdlsIsOn = $$jscomp$this$jscomp$176$$.$h$;
        $JSCompiler_StaticMethods_didStartSession$self$jscomp$inline_2542$$.$H$.start();
        $JSCompiler_StaticMethods_maybeActivateMediaRemotingInTheBackground_$$($$jscomp$this$jscomp$176$$);
      } else {
        $$jscomp$this$jscomp$176$$.$b$.$o$.tdlsIsOn = $$jscomp$this$jscomp$176$$.$h$;
      }
      $sessionStartTiming$$.end();
      $$jscomp$this$jscomp$176$$.$J$ = $mr$CastStreamingAnalytics$startTimingSessionLength$$();
      $JSCompiler_StaticMethods_module$exports$mr$Sequencer_Operation_prototype$complete$$($op$jscomp$13$$, 2);
      return $$jscomp$this$jscomp$176$$;
    });
  });
};
$JSCompiler_prototypeAlias$$.stop = function() {
  var $$jscomp$this$jscomp$177$$ = this;
  return $JSCompiler_StaticMethods_recover$$(this.$C$, function($op$jscomp$14$$) {
    $$jscomp$this$jscomp$177$$.$J$ && ($$jscomp$this$jscomp$177$$.$J$.end(), $$jscomp$this$jscomp$177$$.$J$ = null);
    $$jscomp$this$jscomp$177$$.$b$.$H$.stop();
    return $$jscomp$this$jscomp$177$$.$m$.stop().then(function() {
      return $$jscomp$this$jscomp$177$$.$l$ ? $JSCompiler_StaticMethods_shutdown$$($$jscomp$this$jscomp$177$$.$l$) : Promise.resolve();
    }).then(function() {
      $$jscomp$this$jscomp$177$$.$l$ = null;
      return $$jscomp$this$jscomp$177$$.$h$ ? $JSCompiler_StaticMethods_disableTdls_$$($$jscomp$this$jscomp$177$$) : Promise.resolve();
    }).then(function() {
      $$jscomp$this$jscomp$177$$.$h$ = !1;
      $JSCompiler_StaticMethods_module$exports$mr$Sequencer_Operation_prototype$complete$$($op$jscomp$14$$, 4);
    });
  });
};
$JSCompiler_prototypeAlias$$.$sendActivityToSink$ = function() {
  var $$jscomp$this$jscomp$178$$ = this, $message$jscomp$170$$ = {sessionId:this.$H$, seqNum:$JSCompiler_StaticMethods_getNext$$(this.$s$), type:"PRESENTATION", icons:[], title:$JSCompiler_StaticMethods_getCastRemoteTitle$$(this.$activity$)};
  this.$logger_$.info("Sending session metadata update to receiver: " + this.$H$);
  this.$o$.sendMessage($message$jscomp$170$$).catch(function($error$jscomp$94$$) {
    $$jscomp$this$jscomp$178$$.$logger_$.$warning$("Failed to send activity to sink: " + $error$jscomp$94$$.message);
  });
};
$JSCompiler_prototypeAlias$$.$didStartStreaming$ = function($streamingMonitor$jscomp$4$$) {
  this.$b$.$didStartStreaming$($streamingMonitor$jscomp$4$$);
};
$JSCompiler_prototypeAlias$$.$willStopStreaming$ = function() {
  return this.$b$.$willStopStreaming$();
};
$JSCompiler_prototypeAlias$$.$onStreamingError$ = function($message$jscomp$171$$, $error$jscomp$95$$) {
  this.$b$.$onStreamingError$($message$jscomp$171$$, $error$jscomp$95$$);
  this.$logger_$.error($message$jscomp$171$$, $error$jscomp$95$$);
  this.stop();
};
var $JSCompiler_StaticMethods_module$contents$mr$mirror$cast$Session_Session_prototype$assembleBundlesAndClear$$ = function($JSCompiler_StaticMethods_module$contents$mr$mirror$cast$Session_Session_prototype$assembleBundlesAndClear$self$$, $bundleSizes$jscomp$1$$) {
  return $JSCompiler_StaticMethods_module$exports$mr$mirror$cast$SessionMonitor_prototype$assembleBundlesAndClear$$($JSCompiler_StaticMethods_module$contents$mr$mirror$cast$Session_Session_prototype$assembleBundlesAndClear$self$$.$b$, $bundleSizes$jscomp$1$$);
}, $JSCompiler_StaticMethods_maybeEnableTdls_$$ = function($JSCompiler_StaticMethods_maybeEnableTdls_$self$$) {
  $JSCompiler_StaticMethods_maybeEnableTdls_$self$$.$logger_$.info("maybeEnableTdls_: useTdls = " + $JSCompiler_StaticMethods_maybeEnableTdls_$self$$.$G$.useTdls);
  return $JSCompiler_StaticMethods_maybeEnableTdls_$self$$.$G$.useTdls ? $mr$NetworkUtils$setTDLSState_$$($JSCompiler_StaticMethods_maybeEnableTdls_$self$$.$M$, !0).then(function($status$jscomp$12$$) {
    if ("Connected" == $status$jscomp$12$$) {
      return $JSCompiler_StaticMethods_maybeEnableTdls_$self$$.$logger_$.info("Successfully enabled TDLS."), !0;
    }
    $JSCompiler_StaticMethods_maybeEnableTdls_$self$$.$logger_$.$warning$("Did not enable TDLS: result=" + $status$jscomp$12$$);
    return !1;
  }).catch(function($error$jscomp$96$$) {
    $JSCompiler_StaticMethods_maybeEnableTdls_$self$$.$logger_$.$warning$("Error while calling enableTDLS()", $error$jscomp$96$$);
    return !1;
  }) : Promise.resolve(!1);
}, $JSCompiler_StaticMethods_disableTdls_$$ = function($JSCompiler_StaticMethods_disableTdls_$self$$) {
  return $mr$NetworkUtils$setTDLSState_$$($JSCompiler_StaticMethods_disableTdls_$self$$.$M$, !1).catch(function($error$jscomp$97$$) {
    return $JSCompiler_StaticMethods_disableTdls_$self$$.$logger_$.error("Error while turning TDLS back off", $error$jscomp$97$$);
  });
}, $JSCompiler_StaticMethods_maybeActivateMediaRemotingInTheBackground_$$ = function($JSCompiler_StaticMethods_maybeActivateMediaRemotingInTheBackground_$self$$) {
  $JSCompiler_StaticMethods_queryForCapabilities_$$($JSCompiler_StaticMethods_maybeActivateMediaRemotingInTheBackground_$self$$).then(function($capabilities$jscomp$11$$) {
    ($capabilities$jscomp$11$$.$b$ || []).includes("video") ? $JSCompiler_StaticMethods_spawnMediaRemoter_$$($JSCompiler_StaticMethods_maybeActivateMediaRemotingInTheBackground_$self$$, $capabilities$jscomp$11$$) : $JSCompiler_StaticMethods_maybeActivateMediaRemotingInTheBackground_$self$$.$logger_$.$warning$(function() {
      return "Receiver incapable of Media Remoting: " + JSON.stringify($capabilities$jscomp$11$$);
    });
  }).catch(function($error$jscomp$98$$) {
    $JSCompiler_StaticMethods_maybeActivateMediaRemotingInTheBackground_$self$$.$logger_$.$warning$("None/Invalid capabilites response. Media Remoting disabled.", $error$jscomp$98$$);
  });
}, $JSCompiler_StaticMethods_queryForCapabilities_$$ = function($JSCompiler_StaticMethods_queryForCapabilities_$self$$) {
  return new Promise(function($resolve$jscomp$68$$, $reject$jscomp$60$$) {
    var $queryMessage$$ = {type:"GET_CAPABILITIES", sessionId:$JSCompiler_StaticMethods_queryForCapabilities_$self$$.$H$, seqNum:$JSCompiler_StaticMethods_getNext$$($JSCompiler_StaticMethods_queryForCapabilities_$self$$.$s$)};
    $JSCompiler_StaticMethods_queryForCapabilities_$self$$.$logger_$.info(function() {
      return "Sending GET_CAPABILITIES message: " + JSON.stringify($queryMessage$$);
    });
    $JSCompiler_StaticMethods_requestReply$$($JSCompiler_StaticMethods_queryForCapabilities_$self$$.$o$, $queryMessage$$, "CAPABILITIES_RESPONSE", 30000, function($response$jscomp$44$$, $error$jscomp$99$$) {
      if (null == $response$jscomp$44$$) {
        return $reject$jscomp$60$$($error$jscomp$99$$), !0;
      }
      if ("ok" != $response$jscomp$44$$.result || !$response$jscomp$44$$.capabilities) {
        return $reject$jscomp$60$$(Error("Bad response: " + JSON.stringify($response$jscomp$44$$))), !0;
      }
      if ($response$jscomp$44$$.$f$ != $queryMessage$$.seqNum) {
        return $JSCompiler_StaticMethods_queryForCapabilities_$self$$.$logger_$.info(function() {
          return "Ignoring CAPABILITIES_RESPONSE with different seqNum: " + JSON.stringify($response$jscomp$44$$);
        }), !1;
      }
      $JSCompiler_StaticMethods_mr_Logger_prototype$fine$$($JSCompiler_StaticMethods_queryForCapabilities_$self$$.$logger_$, function() {
        return "Received CAPABILITIES_RESPONSE: " + JSON.stringify($response$jscomp$44$$);
      });
      $resolve$jscomp$68$$($response$jscomp$44$$.capabilities);
      return !0;
    });
  });
}, $JSCompiler_StaticMethods_spawnMediaRemoter_$$ = function($JSCompiler_StaticMethods_spawnMediaRemoter_$self$$, $capabilities$jscomp$12$$) {
  $JSCompiler_StaticMethods_conductFrom$$($JSCompiler_StaticMethods_spawnMediaRemoter_$self$$.$C$, 2, function($op$jscomp$15$$) {
    var $model$jscomp$1$$ = $JSCompiler_StaticMethods_spawnMediaRemoter_$self$$.$f$.$mirrorInitData$.$sinkModelName$ || "<UNKNOWN>";
    if (!$model$jscomp$1$$.startsWith("Chromecast") && !$model$jscomp$1$$.startsWith("Eureka Dongle")) {
      return $JSCompiler_StaticMethods_spawnMediaRemoter_$self$$.$logger_$.$warning$('HACK: Media Remoting disabled because the receiver model--"' + ($model$jscomp$1$$ + '" according to discovery--is not a Chromecast.')), $JSCompiler_StaticMethods_module$exports$mr$Sequencer_Operation_prototype$complete$$($op$jscomp$15$$), Promise.resolve();
    }
    $JSCompiler_StaticMethods_spawnMediaRemoter_$self$$.$l$ = new $module$exports$mr$mirror$cast$MediaRemoter$$($JSCompiler_StaticMethods_spawnMediaRemoter_$self$$.$f$, $capabilities$jscomp$12$$, $JSCompiler_StaticMethods_spawnMediaRemoter_$self$$.$G$, $JSCompiler_StaticMethods_spawnMediaRemoter_$self$$.$s$, $JSCompiler_StaticMethods_spawnMediaRemoter_$self$$.$o$, $JSCompiler_StaticMethods_spawnMediaRemoter_$self$$.$O$);
    return $JSCompiler_StaticMethods_spawnMediaRemoter_$self$$.$l$.initialize($JSCompiler_StaticMethods_spawnMediaRemoter_$self$$.$R$.bind($JSCompiler_StaticMethods_spawnMediaRemoter_$self$$), $JSCompiler_StaticMethods_spawnMediaRemoter_$self$$).catch(function($error$jscomp$100$$) {
      $JSCompiler_StaticMethods_spawnMediaRemoter_$self$$.$logger_$.error("Media Remoting start failed: " + $error$jscomp$100$$.message, $error$jscomp$100$$);
    }).then(function() {
      return $JSCompiler_StaticMethods_module$exports$mr$Sequencer_Operation_prototype$complete$$($op$jscomp$15$$);
    });
  });
};
$module$contents$mr$mirror$cast$Session_Session$$.prototype.$R$ = function() {
  var $$jscomp$this$jscomp$184$$ = this;
  return $JSCompiler_StaticMethods_conductFrom$$(this.$C$, 2, function($op$jscomp$16$$) {
    return new Promise(function($resolve$jscomp$69$$, $reject$jscomp$61$$) {
      $JSCompiler_StaticMethods_module$exports$mr$mirror$cast$MediaStreamer_prototype$suspend$$($$jscomp$this$jscomp$184$$.$m$).then(function() {
        $JSCompiler_StaticMethods_module$exports$mr$Sequencer_Operation_prototype$complete$$($op$jscomp$16$$, 3);
        $$jscomp$this$jscomp$184$$.$K$ = !0;
        $JSCompiler_StaticMethods_mr_mirror_Session_prototype$onActivityUpdated$$($$jscomp$this$jscomp$184$$);
        $resolve$jscomp$69$$($$jscomp$this$jscomp$184$$.$T$.bind($$jscomp$this$jscomp$184$$));
      }).catch(function($error$jscomp$101$$) {
        $$jscomp$this$jscomp$184$$.$onStreamingError$("Failed to suspend MediaStreamer before starting remoting", $error$jscomp$101$$);
        $reject$jscomp$61$$($error$jscomp$101$$);
      });
    });
  });
};
$module$contents$mr$mirror$cast$Session_Session$$.prototype.$T$ = function() {
  var $$jscomp$this$jscomp$185$$ = this;
  return $JSCompiler_StaticMethods_conductFrom$$(this.$C$, 3, function($op$jscomp$17$$) {
    return new Promise(function($resolve$jscomp$70$$, $reject$jscomp$62$$) {
      $$jscomp$this$jscomp$185$$.$m$.resume().then(function() {
        $JSCompiler_StaticMethods_module$exports$mr$Sequencer_Operation_prototype$complete$$($op$jscomp$17$$, 2);
        $$jscomp$this$jscomp$185$$.$K$ = !1;
        $JSCompiler_StaticMethods_mr_mirror_Session_prototype$onActivityUpdated$$($$jscomp$this$jscomp$185$$);
        $resolve$jscomp$70$$();
      }).catch(function($error$jscomp$102$$) {
        $$jscomp$this$jscomp$185$$.$onStreamingError$("Failed resume MediaStreamer after ending remoting mode", $error$jscomp$102$$);
        $reject$jscomp$62$$($error$jscomp$102$$);
      });
    });
  });
};
var $mr$mirror$cast$Service$$ = function() {
  $mr$mirror$Service$$.call(this, "cast_streaming");
  this.$o$ = this.$C$ = this.$K$ = this.$J$ = this.$l$ = this.$ba$ = null;
  this.$V$ = this.$L$ = "";
  this.$W$ = this.$g$ = !1;
  this.$Z$ = this.$fa$.bind(this);
  this.$M$ = this.$O$ = this.$R$ = this.$T$ = this.$m$ = null;
};
$$jscomp$inherits$$($mr$mirror$cast$Service$$, $mr$mirror$Service$$);
$JSCompiler_prototypeAlias$$ = $mr$mirror$cast$Service$$.prototype;
$JSCompiler_prototypeAlias$$.$doInitialize$ = function($useMirroringService$jscomp$2$$) {
  this.$g$ = $useMirroringService$jscomp$2$$ || !1;
  this.$W$ = !0;
};
$JSCompiler_prototypeAlias$$.getName = function() {
  return "cast_streaming";
};
$JSCompiler_prototypeAlias$$.$mr_mirror_Service_prototype$startMirroring$ = function($route$jscomp$92$$, $sourceUrn$jscomp$119$$, $mirrorSettings$jscomp$12$$, $opt_presentationId$jscomp$11$$, $opt_streamStartedCallback$jscomp$7$$) {
  var $$jscomp$this$jscomp$186$$ = this;
  if (!this.$g$) {
    return $mr$mirror$Service$$.prototype.$mr_mirror_Service_prototype$startMirroring$.call(this, $route$jscomp$92$$, $sourceUrn$jscomp$119$$, $mirrorSettings$jscomp$12$$, $opt_presentationId$jscomp$11$$, $opt_streamStartedCallback$jscomp$7$$);
  }
  this.$logger$.info("Start mirroring on route " + $route$jscomp$92$$.id);
  if (!this.$W$) {
    return $module$contents$mr$CancellablePromise_CancellablePromise$reject$$(Error("Not initialized"));
  }
  var $promise$jscomp$28$$ = new Promise(function($resolve$jscomp$71$$, $reject$jscomp$63$$) {
    $$jscomp$this$jscomp$186$$.$s$().then(function() {
      if ($mr$MediaSourceUtils$isDesktopMirrorSource$$($sourceUrn$jscomp$119$$) && $mirrorSettings$jscomp$12$$.shouldCaptureVideo) {
        return $mr$mirror$MirrorMediaStream$requestScreenCaptureSourceId$$(!1).then(function($streamId$jscomp$14$$) {
          $$jscomp$this$jscomp$186$$.$V$ = $streamId$jscomp$14$$;
        });
      }
    }).then(function() {
      return $opt_streamStartedCallback$jscomp$7$$ ? $opt_streamStartedCallback$jscomp$7$$($route$jscomp$92$$).$b$ : $route$jscomp$92$$;
    }).then(function($updatedRoute$jscomp$2$$) {
      $$jscomp$this$jscomp$186$$.$L$ = $sourceUrn$jscomp$119$$;
      $JSCompiler_StaticMethods_setUpMojoObjs_$$($$jscomp$this$jscomp$186$$, $updatedRoute$jscomp$2$$);
      var $observerPtr$$ = $$jscomp$this$jscomp$186$$.$J$.createInterfacePtrAndBind(), $outboundChannelPtr$$ = $$jscomp$this$jscomp$186$$.$K$.createInterfacePtrAndBind(), $sessionParams$$ = $JSCompiler_StaticMethods_createSessionParams_$$($updatedRoute$jscomp$2$$, $mirrorSettings$jscomp$12$$);
      $JSCompiler_StaticMethods_getMirroringServiceHost_$$($$jscomp$this$jscomp$186$$, $updatedRoute$jscomp$2$$, $sourceUrn$jscomp$119$$, $opt_presentationId$jscomp$11$$);
      if (!$$jscomp$this$jscomp$186$$.$l$) {
        throw new $mr$mirror$Error$$("Error to get mirroring service host");
      }
      $$jscomp$this$jscomp$186$$.$C$ = new mojo.MirroringCastMessageChannelPtr;
      $$jscomp$this$jscomp$186$$.$T$ = $mr$CastStreamingAnalytics$startTimingSessionLaunch$$();
      $$jscomp$this$jscomp$186$$.$l$.start($sessionParams$$, $observerPtr$$, $outboundChannelPtr$$, mojo.makeRequest($$jscomp$this$jscomp$186$$.$C$));
      $$jscomp$this$jscomp$186$$.$m$ = new $mr$mirror$Session$$($route$jscomp$92$$, $$jscomp$this$jscomp$186$$.$h$.$handleMirrorActivityUpdate$.bind($$jscomp$this$jscomp$186$$.$h$));
      $JSCompiler_StaticMethods_mr_mirror_Session_prototype$onActivityUpdated$$($$jscomp$this$jscomp$186$$.$m$);
      $JSCompiler_StaticMethods_setUpTabUpdateListener_$$($$jscomp$this$jscomp$186$$, $updatedRoute$jscomp$2$$, $sourceUrn$jscomp$119$$);
      $$jscomp$this$jscomp$186$$.$O$ = function() {
        return $resolve$jscomp$71$$($updatedRoute$jscomp$2$$);
      };
      $$jscomp$this$jscomp$186$$.$M$ = $reject$jscomp$63$$;
    }).catch(function($err$jscomp$54$$) {
      $$jscomp$this$jscomp$186$$.$logger$.info("Mirroring launch error: " + $err$jscomp$54$$);
      $$jscomp$this$jscomp$186$$.$recordMirrorStartFailure$($err$jscomp$54$$.reason);
      $reject$jscomp$63$$($err$jscomp$54$$);
    });
  });
  return $module$contents$mr$CancellablePromise_CancellablePromise$forPromise$$($promise$jscomp$28$$);
};
$JSCompiler_prototypeAlias$$.$createMirrorSession$ = function($mirrorSettings$jscomp$13$$, $route$jscomp$93$$) {
  $mr$Assertions$assert$$(!this.$g$);
  return new $module$contents$mr$mirror$cast$Session_Session$$($mirrorSettings$jscomp$13$$, $route$jscomp$93$$, 20969472, this.$ba$);
};
$JSCompiler_prototypeAlias$$.$recordTabMirrorStartSuccess$ = function() {
  $mr$CastStreamingAnalytics$recordMirrorStartSuccess$$(0);
};
$JSCompiler_prototypeAlias$$.$recordDesktopMirrorStartSuccess$ = function() {
  $mr$CastStreamingAnalytics$recordMirrorStartSuccess$$(1);
};
$JSCompiler_prototypeAlias$$.$recordOffscreenTabMirrorStartSuccess$ = function() {
  $mr$CastStreamingAnalytics$recordMirrorStartSuccess$$(2);
};
$JSCompiler_prototypeAlias$$.$recordMirrorSessionEnded$ = function() {
  $mr$Analytics$recordEvent$$("MediaRouter.CastStreaming.Session.End");
};
$JSCompiler_prototypeAlias$$.$recordMirrorStartFailure$ = function($reason$jscomp$37$$) {
  $mr$Analytics$recordEnum$$("MediaRouter.CastStreaming.Start.Failure", $reason$jscomp$37$$, $mr$MirrorAnalytics$CapturingFailure$$);
};
$JSCompiler_prototypeAlias$$.$recordStreamEnded$ = function() {
  $mr$Analytics$recordEvent$$("MediaRouter.CastStreaming.Stream.End");
};
$JSCompiler_prototypeAlias$$.$beforeCleanUpSession$ = function($session$jscomp$39$$) {
  var $$jscomp$this$jscomp$187$$ = this;
  return this.$g$ ? Promise.resolve() : (new Promise(function($resolve$jscomp$72$$) {
    return chrome.metricsPrivate.getIsCrashReportingEnabled($resolve$jscomp$72$$);
  })).then(function($crashReportingIsEnabled$$) {
    var $shouldAutoUploadEvents$$ = $crashReportingIsEnabled$$ && $JSCompiler_StaticMethods_shouldAutoUploadLog$$();
    "true" == window.localStorage["e2eTestService.castStreamingMirrorLogEnabled"] && ($shouldAutoUploadEvents$$ = !0);
    var $bundleSizes$jscomp$2$$ = [9351424];
    $shouldAutoUploadEvents$$ && $bundleSizes$jscomp$2$$.push(20969472);
    return $JSCompiler_StaticMethods_module$contents$mr$mirror$cast$Session_Session_prototype$assembleBundlesAndClear$$($session$jscomp$39$$, $bundleSizes$jscomp$2$$).then(function($bundles$jscomp$1_savePromise$$) {
      var $uploadableBundle$$ = $bundles$jscomp$1_savePromise$$[$bundles$jscomp$1_savePromise$$.length - 1];
      $bundles$jscomp$1_savePromise$$ = $mr$PersistentDataManager$writeBlob$$($bundles$jscomp$1_savePromise$$[0].events).catch(function($error$jscomp$103$$) {
        $$jscomp$this$jscomp$187$$.$logger$.error("Failed to persist events Blob.", $error$jscomp$103$$);
      });
      $bundles$jscomp$1_savePromise$$ = Promise.all([$bundles$jscomp$1_savePromise$$, new Promise(function($resolve$jscomp$73$$) {
        var $reader$jscomp$10$$ = new FileReader;
        $reader$jscomp$10$$.onloadend = function() {
          try {
            window.localStorage["e2eTestService.castStreamingMirrorStats"] = $reader$jscomp$10$$.result;
          } catch ($error$jscomp$104$$) {
            $$jscomp$this$jscomp$187$$.$logger$.$warning$("Failed to persist stats for E2E Test Service.", $error$jscomp$104$$);
          }
          $resolve$jscomp$73$$();
        };
        $reader$jscomp$10$$.readAsText($uploadableBundle$$.$stats$);
      })]);
      $shouldAutoUploadEvents$$ && 0 < $uploadableBundle$$.events.size ? $mr$mirror$cast$LogUploader$uploadLog$$($uploadableBundle$$.events, void 0, $$jscomp$this$jscomp$187$$.$onAutoUploadLogComplete_$.bind($$jscomp$this$jscomp$187$$)) : $crashReportingIsEnabled$$ && $mr$mirror$cast$LogUploader$uploadFile_$$("stats.json", $uploadableBundle$$.$stats$, void 0, void 0);
      return $bundles$jscomp$1_savePromise$$;
    });
  });
};
$JSCompiler_prototypeAlias$$.$onAutoUploadLogComplete_$ = function($reportId$jscomp$4$$) {
  $reportId$jscomp$4$$ && ($mr$mirror$cast$LogUtils$getInstance$$().$b$ = Date.now(), window.localStorage["e2eTestService.castStreamingMirrorLogId"] = $reportId$jscomp$4$$);
};
$JSCompiler_prototypeAlias$$.$mr_mirror_Service_prototype$requestLogUpload$ = function($feedbackId$jscomp$3$$) {
  if (this.$g$) {
    return $mr$Assertions$rejectNotImplemented$$();
  }
  this.$logger$.info("Received message to upload logs for " + $feedbackId$jscomp$3$$);
  return this.$b$ ? $JSCompiler_StaticMethods_module$contents$mr$mirror$cast$Session_Session_prototype$assembleBundlesAndClear$$(this.$b$, [20969472]).then(function($$jscomp$destructuring$var29_bundle$jscomp$2$$) {
    $$jscomp$destructuring$var29_bundle$jscomp$2$$ = $$jscomp$makeIterator$$($$jscomp$destructuring$var29_bundle$jscomp$2$$).next().value;
    return 0 == $$jscomp$destructuring$var29_bundle$jscomp$2$$.events.size ? "" : $mr$mirror$cast$LogUploader$uploadLog$$($$jscomp$destructuring$var29_bundle$jscomp$2$$.events, $feedbackId$jscomp$3$$);
  }) : Promise.resolve($JSCompiler_StaticMethods_maybeUploadSavedLogs_$$(this, $feedbackId$jscomp$3$$));
};
var $JSCompiler_StaticMethods_maybeUploadSavedLogs_$$ = function($JSCompiler_StaticMethods_maybeUploadSavedLogs_$self$$, $feedbackId$jscomp$4$$) {
  var $JSCompiler_inline_result$jscomp$482_asString$jscomp$inline_2561_blob$jscomp$16_buffer$jscomp$inline_2564_viewOfPayload$jscomp$inline_2566$$ = window.localStorage.getItem("mr.temp.mirror.cast.Service.eventsBlob");
  if (null == $JSCompiler_inline_result$jscomp$482_asString$jscomp$inline_2561_blob$jscomp$16_buffer$jscomp$inline_2564_viewOfPayload$jscomp$inline_2566$$ || 1 > $JSCompiler_inline_result$jscomp$482_asString$jscomp$inline_2561_blob$jscomp$16_buffer$jscomp$inline_2564_viewOfPayload$jscomp$inline_2566$$.length) {
    $JSCompiler_inline_result$jscomp$482_asString$jscomp$inline_2561_blob$jscomp$16_buffer$jscomp$inline_2564_viewOfPayload$jscomp$inline_2566$$ = null;
  } else {
    for (var $charCodes$jscomp$inline_2562_flagByte$jscomp$inline_2565$$ = new Uint16Array($JSCompiler_inline_result$jscomp$482_asString$jscomp$inline_2561_blob$jscomp$16_buffer$jscomp$inline_2564_viewOfPayload$jscomp$inline_2566$$.length), $i$jscomp$inline_2563$$ = 0; $i$jscomp$inline_2563$$ < $JSCompiler_inline_result$jscomp$482_asString$jscomp$inline_2561_blob$jscomp$16_buffer$jscomp$inline_2564_viewOfPayload$jscomp$inline_2566$$.length; ++$i$jscomp$inline_2563$$) {
      $charCodes$jscomp$inline_2562_flagByte$jscomp$inline_2565$$[$i$jscomp$inline_2563$$] = $JSCompiler_inline_result$jscomp$482_asString$jscomp$inline_2561_blob$jscomp$16_buffer$jscomp$inline_2564_viewOfPayload$jscomp$inline_2566$$.charCodeAt($i$jscomp$inline_2563$$);
    }
    $JSCompiler_inline_result$jscomp$482_asString$jscomp$inline_2561_blob$jscomp$16_buffer$jscomp$inline_2564_viewOfPayload$jscomp$inline_2566$$ = $charCodes$jscomp$inline_2562_flagByte$jscomp$inline_2565$$.buffer;
    $charCodes$jscomp$inline_2562_flagByte$jscomp$inline_2565$$ = (new Uint8Array($JSCompiler_inline_result$jscomp$482_asString$jscomp$inline_2561_blob$jscomp$16_buffer$jscomp$inline_2564_viewOfPayload$jscomp$inline_2566$$, $JSCompiler_inline_result$jscomp$482_asString$jscomp$inline_2561_blob$jscomp$16_buffer$jscomp$inline_2564_viewOfPayload$jscomp$inline_2566$$.byteLength - 1, 1))[0];
    $JSCompiler_inline_result$jscomp$482_asString$jscomp$inline_2561_blob$jscomp$16_buffer$jscomp$inline_2564_viewOfPayload$jscomp$inline_2566$$ = new Uint8Array($JSCompiler_inline_result$jscomp$482_asString$jscomp$inline_2561_blob$jscomp$16_buffer$jscomp$inline_2564_viewOfPayload$jscomp$inline_2566$$, 0, $JSCompiler_inline_result$jscomp$482_asString$jscomp$inline_2561_blob$jscomp$16_buffer$jscomp$inline_2564_viewOfPayload$jscomp$inline_2566$$.byteLength - (0 == $charCodes$jscomp$inline_2562_flagByte$jscomp$inline_2565$$ ? 
    2 : 1));
    $JSCompiler_inline_result$jscomp$482_asString$jscomp$inline_2561_blob$jscomp$16_buffer$jscomp$inline_2564_viewOfPayload$jscomp$inline_2566$$ = new Blob([$JSCompiler_inline_result$jscomp$482_asString$jscomp$inline_2561_blob$jscomp$16_buffer$jscomp$inline_2564_viewOfPayload$jscomp$inline_2566$$], {type:"application/gzip"});
  }
  if (null != $JSCompiler_inline_result$jscomp$482_asString$jscomp$inline_2561_blob$jscomp$16_buffer$jscomp$inline_2564_viewOfPayload$jscomp$inline_2566$$ && 0 != $JSCompiler_inline_result$jscomp$482_asString$jscomp$inline_2561_blob$jscomp$16_buffer$jscomp$inline_2564_viewOfPayload$jscomp$inline_2566$$.size) {
    return $mr$PersistentDataManager$writeBlob$$(new Blob), $JSCompiler_StaticMethods_maybeUploadSavedLogs_$self$$.$logger$.info("Uploading saved logs for feedback."), $mr$mirror$cast$LogUploader$uploadLog$$($JSCompiler_inline_result$jscomp$482_asString$jscomp$inline_2561_blob$jscomp$16_buffer$jscomp$inline_2564_viewOfPayload$jscomp$inline_2566$$, $feedbackId$jscomp$4$$);
  }
};
$JSCompiler_prototypeAlias$$ = $mr$mirror$cast$Service$$.prototype;
$JSCompiler_prototypeAlias$$.$setTestHooks$ = function($testHooks$jscomp$5$$) {
  this.$ba$ = $testHooks$jscomp$5$$;
};
$JSCompiler_prototypeAlias$$.onError = function($error$jscomp$105$$) {
  this.$M$ && (this.$M$($error$jscomp$105$$), this.$O$ = this.$M$ = null, this.$recordMirrorStartFailure$(9));
  $mr$Assertions$assert$$(this.$g$);
  this.$logger$.info("Mirroring service error: " + $error$jscomp$105$$);
  this.$s$();
};
$JSCompiler_prototypeAlias$$.didStart = function() {
  this.$O$ && (this.$O$(), this.$O$ = this.$M$ = null);
  $mr$Assertions$assert$$(this.$g$);
  this.$T$ && (this.$T$.end(), this.$T$ = null);
  this.$R$ = $mr$CastStreamingAnalytics$startTimingSessionLength$$();
  $mr$MediaSourceUtils$isTabMirrorSource$$(this.$L$) ? this.$recordTabMirrorStartSuccess$() : $mr$MediaSourceUtils$isDesktopMirrorSource$$(this.$L$) ? this.$recordDesktopMirrorStartSuccess$() : $mr$MediaSourceUtils$isPresentationSource$$(this.$L$) && this.$recordOffscreenTabMirrorStartSuccess$();
};
$JSCompiler_prototypeAlias$$.didStop = function() {
  $mr$Assertions$assert$$(this.$g$);
  this.$s$();
};
$JSCompiler_prototypeAlias$$.send = function($message$jscomp$172$$) {
  $mr$Assertions$assert$$(this.$g$);
  if (this.$o$) {
    var $messageToSend$$ = JSON.parse($message$jscomp$172$$.jsonFormatData);
    $JSCompiler_StaticMethods_mr_Logger_prototype$fine$$(this.$logger$, function() {
      return "Sending message: " + JSON.stringify($messageToSend$$);
    });
    this.$o$.sendMessage($message$jscomp$172$$.jsonFormatData, {namespace:$message$jscomp$172$$.messageNamespace});
  }
};
$JSCompiler_prototypeAlias$$.$onCastMessage_$ = function($castMessage$$) {
  $mr$Assertions$assert$$(this.$g$);
  if ($castMessage$$ && ($castMessage$$.namespace_ === mojo.MirroringWebRtcNamespace || $castMessage$$.namespace_ === mojo.MirroringRemotingNamespace) && this.$C$) {
    var $message$jscomp$173$$ = new mojo.MirroringCastMessage;
    $message$jscomp$173$$.messageNamespace = $castMessage$$.namespace_;
    "string" !== typeof $castMessage$$.data ? this.$logger$.info("Received non-string as JSON") : ($message$jscomp$173$$.jsonFormatData = $castMessage$$.data, this.$C$.send($message$jscomp$173$$));
  }
};
var $JSCompiler_StaticMethods_setUpMojoObjs_$$ = function($JSCompiler_StaticMethods_setUpMojoObjs_$self$$, $route$jscomp$94$$) {
  $mr$Assertions$assert$$($JSCompiler_StaticMethods_setUpMojoObjs_$self$$.$g$);
  $JSCompiler_StaticMethods_setUpMojoObjs_$self$$.$J$ = new mojo.Binding(mojo.MirroringSessionObserver, $JSCompiler_StaticMethods_setUpMojoObjs_$self$$, null);
  $JSCompiler_StaticMethods_setUpMojoObjs_$self$$.$K$ = new mojo.Binding(mojo.MirroringCastMessageChannel, $JSCompiler_StaticMethods_setUpMojoObjs_$self$$, null);
  $JSCompiler_StaticMethods_setUpMojoObjs_$self$$.$o$ = $JSCompiler_StaticMethods_getInternalMessenger$$($route$jscomp$94$$.id);
  $JSCompiler_StaticMethods_setUpMojoObjs_$self$$.$o$.onMessage = $JSCompiler_StaticMethods_setUpMojoObjs_$self$$.$onCastMessage_$.bind($JSCompiler_StaticMethods_setUpMojoObjs_$self$$);
}, $JSCompiler_StaticMethods_createSessionParams_$$ = function($route$jscomp$95$$, $mirrorSettings$jscomp$14$$) {
  var $sessionParams$jscomp$1$$ = new mojo.MirroringSessionParameters;
  $sessionParams$jscomp$1$$.receiverAddress = new mojo.IPAddress;
  $sessionParams$jscomp$1$$.receiverAddress.addressBytes = $route$jscomp$95$$.$mirrorInitData$.$sinkIpAddress$.split(".").map(function($x$jscomp$110$$) {
    return parseInt($x$jscomp$110$$, 10);
  });
  $mr$Assertions$assert$$(4 == $sessionParams$jscomp$1$$.receiverAddress.addressBytes.length);
  $sessionParams$jscomp$1$$.receiverModelName = $route$jscomp$95$$.$mirrorInitData$.$sinkModelName$;
  $mr$Assertions$assert$$($mirrorSettings$jscomp$14$$.shouldCaptureVideo || $mirrorSettings$jscomp$14$$.shouldCaptureAudio);
  $sessionParams$jscomp$1$$.type = $mirrorSettings$jscomp$14$$.shouldCaptureVideo && $mirrorSettings$jscomp$14$$.shouldCaptureAudio ? mojo.MirroringSessionType.AUDIO_AND_VIDEO : $mirrorSettings$jscomp$14$$.shouldCaptureVideo ? mojo.MirroringSessionType.VIDEO_ONLY : mojo.MirroringSessionType.AUDIO_ONLY;
  return $sessionParams$jscomp$1$$;
}, $JSCompiler_StaticMethods_getMirroringServiceHost_$$ = function($JSCompiler_StaticMethods_getMirroringServiceHost_$self$$, $currentTabId_presentation_url_route$jscomp$96$$, $sourceUrn$jscomp$120$$, $opt_presentationId$jscomp$12$$) {
  $JSCompiler_StaticMethods_getMirroringServiceHost_$self$$.$l$ = new mojo.MirroringServiceHostPtr;
  $currentTabId_presentation_url_route$jscomp$96$$ = $currentTabId_presentation_url_route$jscomp$96$$.$mirrorInitData$.tabId || -1;
  $mr$MediaSourceUtils$isTabMirrorSource$$($sourceUrn$jscomp$120$$) ? $JSCompiler_StaticMethods_getMirroringServiceHost_$self$$.$h$.getMirroringServiceHostForTab($currentTabId_presentation_url_route$jscomp$96$$, mojo.makeRequest($JSCompiler_StaticMethods_getMirroringServiceHost_$self$$.$l$)) : $mr$MediaSourceUtils$isDesktopMirrorSource$$($sourceUrn$jscomp$120$$) ? $JSCompiler_StaticMethods_getMirroringServiceHost_$self$$.$h$.getMirroringServiceHostForDesktop(-1, $JSCompiler_StaticMethods_getMirroringServiceHost_$self$$.$V$, 
  mojo.makeRequest($JSCompiler_StaticMethods_getMirroringServiceHost_$self$$.$l$)) : $mr$MediaSourceUtils$isPresentationSource$$($sourceUrn$jscomp$120$$) ? ($currentTabId_presentation_url_route$jscomp$96$$ = new mojo.Url, $currentTabId_presentation_url_route$jscomp$96$$.url = $sourceUrn$jscomp$120$$, $JSCompiler_StaticMethods_getMirroringServiceHost_$self$$.$h$.getMirroringServiceHostForOffscreenTab($currentTabId_presentation_url_route$jscomp$96$$, $opt_presentationId$jscomp$12$$ || "", mojo.makeRequest($JSCompiler_StaticMethods_getMirroringServiceHost_$self$$.$l$))) : 
  $JSCompiler_StaticMethods_getMirroringServiceHost_$self$$.$l$ = null;
}, $JSCompiler_StaticMethods_setUpTabUpdateListener_$$ = function($JSCompiler_StaticMethods_setUpTabUpdateListener_$self$$, $route$jscomp$97$$, $sourceUrn$jscomp$121$$) {
  $mr$MediaSourceUtils$isTabMirrorSource$$($sourceUrn$jscomp$121$$) && !chrome.tabs.onUpdated.hasListener($JSCompiler_StaticMethods_setUpTabUpdateListener_$self$$.$Z$) && chrome.tabs.onUpdated.addListener($JSCompiler_StaticMethods_setUpTabUpdateListener_$self$$.$Z$);
  ($mr$MediaSourceUtils$isTabMirrorSource$$($sourceUrn$jscomp$121$$) || $mr$MediaSourceUtils$isPresentationSource$$($sourceUrn$jscomp$121$$)) && $JSCompiler_StaticMethods_setTabId$$($JSCompiler_StaticMethods_setUpTabUpdateListener_$self$$.$m$, $route$jscomp$97$$.$mirrorInitData$.tabId);
};
$mr$mirror$cast$Service$$.prototype.$fa$ = function($tabId$jscomp$41$$, $changeInfo$jscomp$2$$, $tab$jscomp$7$$) {
  $mr$EventAnalytics$recordEvent$$(14);
  this.$m$ && $JSCompiler_StaticMethods_onTabUpdated$$(this.$m$, $tabId$jscomp$41$$, $changeInfo$jscomp$2$$, $tab$jscomp$7$$);
};
$mr$mirror$cast$Service$$.prototype.$s$ = function() {
  chrome.tabs.onUpdated.removeListener(this.$Z$);
  return this.$g$ ? this.$W$ ? this.$l$ ? (this.$l$.ptr.reset(), this.$C$ = this.$l$ = null, this.$o$ && this.$o$.$dispose$(), this.$o$ = null, this.$J$ && (this.$J$.close(), this.$J$ = null), this.$K$ && (this.$K$.close(), this.$K$ = null), this.$h$.$onMirrorSessionEnded$(this.$m$.$f$.id), this.$m$ = null, this.$V$ = this.$L$ = "", this.$R$ && (this.$R$.end(), this.$R$ = null), this.$recordMirrorSessionEnded$(), Promise.resolve(!0)) : Promise.resolve(!1) : Promise.reject("Not initialized") : $mr$mirror$Service$$.prototype.$s$.call(this);
};
$mr$mirror$cast$Service$$.prototype.$mr_mirror_Service_prototype$updateMirroring$ = function($route$jscomp$98$$, $sourceUrn$jscomp$122$$, $mirrorSettings$jscomp$15$$, $opt_presentationId$jscomp$13$$, $opt_tabId$jscomp$17$$, $opt_streamStartedCallback$jscomp$8$$) {
  return this.$g$ ? $module$contents$mr$CancellablePromise_CancellablePromise$reject$$(Error("Mirroring service does not support updating stream")) : $mr$mirror$Service$$.prototype.$mr_mirror_Service_prototype$updateMirroring$.call(this, $route$jscomp$98$$, $sourceUrn$jscomp$122$$, $mirrorSettings$jscomp$15$$, $opt_presentationId$jscomp$13$$, $opt_tabId$jscomp$17$$, $opt_streamStartedCallback$jscomp$8$$);
};
$mr$mirror$cast$Service$$.prototype.send = $mr$mirror$cast$Service$$.prototype.send;
$mr$mirror$cast$Service$$.prototype.didStop = $mr$mirror$cast$Service$$.prototype.didStop;
$mr$mirror$cast$Service$$.prototype.didStart = $mr$mirror$cast$Service$$.prototype.didStart;
$mr$mirror$cast$Service$$.prototype.onError = $mr$mirror$cast$Service$$.prototype.onError;
var $mr$mirror$cast$Service$INSTANCE_$$ = new $mr$mirror$cast$Service$$;
$mr$Module$onModuleLoaded$$("mr.mirror.cast.Service", $mr$mirror$cast$Service$INSTANCE_$$);

