(function(){'use strict';
var $JSCompiler_prototypeAlias$$, $$jscomp$arrayIteratorImpl$$ = function($array$jscomp$6$$) {
  var $index$jscomp$66$$ = 0;
  return function() {
    return $index$jscomp$66$$ < $array$jscomp$6$$.length ? {done:!1, value:$array$jscomp$6$$[$index$jscomp$66$$++]} : {done:!0};
  };
}, $$jscomp$makeIterator$$ = function($iterable$jscomp$2$$) {
  var $iteratorFunction$$ = "undefined" != typeof Symbol && Symbol.iterator && $iterable$jscomp$2$$[Symbol.iterator];
  return $iteratorFunction$$ ? $iteratorFunction$$.call($iterable$jscomp$2$$) : {next:$$jscomp$arrayIteratorImpl$$($iterable$jscomp$2$$)};
}, $$jscomp$objectCreate$$ = "function" == typeof Object.create ? Object.create : function($prototype$$) {
  var $ctor$$ = function() {
  };
  $ctor$$.prototype = $prototype$$;
  return new $ctor$$;
}, $JSCompiler_temp$jscomp$8$$;
if ("function" == typeof Object.setPrototypeOf) {
  $JSCompiler_temp$jscomp$8$$ = Object.setPrototypeOf;
} else {
  var $JSCompiler_inline_result$jscomp$9$$;
  a: {
    var $x$jscomp$inline_39$$ = {$a$:!0}, $y$jscomp$inline_40$$ = {};
    try {
      $y$jscomp$inline_40$$.__proto__ = $x$jscomp$inline_39$$;
      $JSCompiler_inline_result$jscomp$9$$ = $y$jscomp$inline_40$$.$a$;
      break a;
    } catch ($e$jscomp$inline_41$$) {
    }
    $JSCompiler_inline_result$jscomp$9$$ = !1;
  }
  $JSCompiler_temp$jscomp$8$$ = $JSCompiler_inline_result$jscomp$9$$ ? function($target$jscomp$84$$, $proto$jscomp$3$$) {
    $target$jscomp$84$$.__proto__ = $proto$jscomp$3$$;
    if ($target$jscomp$84$$.__proto__ !== $proto$jscomp$3$$) {
      throw new TypeError($target$jscomp$84$$ + " is not extensible");
    }
    return $target$jscomp$84$$;
  } : null;
}
var $$jscomp$setPrototypeOf$$ = $JSCompiler_temp$jscomp$8$$, $$jscomp$inherits$$ = function($childCtor$$, $parentCtor$$) {
  $childCtor$$.prototype = $$jscomp$objectCreate$$($parentCtor$$.prototype);
  $childCtor$$.prototype.constructor = $childCtor$$;
  if ($$jscomp$setPrototypeOf$$) {
    $$jscomp$setPrototypeOf$$($childCtor$$, $parentCtor$$);
  } else {
    for (var $p$$ in $parentCtor$$) {
      if ("prototype" != $p$$) {
        if (Object.defineProperties) {
          var $descriptor$jscomp$2$$ = Object.getOwnPropertyDescriptor($parentCtor$$, $p$$);
          $descriptor$jscomp$2$$ && Object.defineProperty($childCtor$$, $p$$, $descriptor$jscomp$2$$);
        } else {
          $childCtor$$[$p$$] = $parentCtor$$[$p$$];
        }
      }
    }
  }
}, $goog$global$$ = this || self, $goog$isString$$ = function($val$jscomp$2$$) {
  return "string" == typeof $val$jscomp$2$$;
}, $goog$nullFunction$$ = function() {
}, $goog$typeOf$$ = function($value$jscomp$96$$) {
  var $s$jscomp$6$$ = typeof $value$jscomp$96$$;
  if ("object" == $s$jscomp$6$$) {
    if ($value$jscomp$96$$) {
      if ($value$jscomp$96$$ instanceof Array) {
        return "array";
      }
      if ($value$jscomp$96$$ instanceof Object) {
        return $s$jscomp$6$$;
      }
      var $className$$ = Object.prototype.toString.call($value$jscomp$96$$);
      if ("[object Window]" == $className$$) {
        return "object";
      }
      if ("[object Array]" == $className$$ || "number" == typeof $value$jscomp$96$$.length && "undefined" != typeof $value$jscomp$96$$.splice && "undefined" != typeof $value$jscomp$96$$.propertyIsEnumerable && !$value$jscomp$96$$.propertyIsEnumerable("splice")) {
        return "array";
      }
      if ("[object Function]" == $className$$ || "undefined" != typeof $value$jscomp$96$$.call && "undefined" != typeof $value$jscomp$96$$.propertyIsEnumerable && !$value$jscomp$96$$.propertyIsEnumerable("call")) {
        return "function";
      }
    } else {
      return "null";
    }
  } else {
    if ("function" == $s$jscomp$6$$ && "undefined" == typeof $value$jscomp$96$$.call) {
      return "object";
    }
  }
  return $s$jscomp$6$$;
}, $goog$isArrayLike$$ = function($val$jscomp$8$$) {
  var $type$jscomp$142$$ = $goog$typeOf$$($val$jscomp$8$$);
  return "array" == $type$jscomp$142$$ || "object" == $type$jscomp$142$$ && "number" == typeof $val$jscomp$8$$.length;
}, $goog$UID_PROPERTY_$$ = "closure_uid_" + (1e9 * Math.random() >>> 0), $goog$uidCounter_$$ = 0, $goog$bindNative_$$ = function($fn$jscomp$1$$, $selfObj$jscomp$2$$, $var_args$jscomp$35$$) {
  return $fn$jscomp$1$$.call.apply($fn$jscomp$1$$.bind, arguments);
}, $goog$bindJs_$$ = function($fn$jscomp$2$$, $selfObj$jscomp$3$$, $var_args$jscomp$36$$) {
  if (!$fn$jscomp$2$$) {
    throw Error();
  }
  if (2 < arguments.length) {
    var $boundArgs$$ = Array.prototype.slice.call(arguments, 2);
    return function() {
      var $newArgs$$ = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply($newArgs$$, $boundArgs$$);
      return $fn$jscomp$2$$.apply($selfObj$jscomp$3$$, $newArgs$$);
    };
  }
  return function() {
    return $fn$jscomp$2$$.apply($selfObj$jscomp$3$$, arguments);
  };
}, $goog$bind$$ = function($fn$jscomp$3$$, $selfObj$jscomp$4$$, $var_args$jscomp$37$$) {
  Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? $goog$bind$$ = $goog$bindNative_$$ : $goog$bind$$ = $goog$bindJs_$$;
  return $goog$bind$$.apply(null, arguments);
}, $goog$now$$ = Date.now || function() {
  return +new Date;
}, $goog$exportSymbol$$ = function($parts$jscomp$inline_46_publicPath$$, $object$$) {
  $parts$jscomp$inline_46_publicPath$$ = $parts$jscomp$inline_46_publicPath$$.split(".");
  var $cur$jscomp$inline_47$$ = $goog$global$$;
  $parts$jscomp$inline_46_publicPath$$[0] in $cur$jscomp$inline_47$$ || "undefined" == typeof $cur$jscomp$inline_47$$.execScript || $cur$jscomp$inline_47$$.execScript("var " + $parts$jscomp$inline_46_publicPath$$[0]);
  for (var $part$jscomp$inline_48$$; $parts$jscomp$inline_46_publicPath$$.length && ($part$jscomp$inline_48$$ = $parts$jscomp$inline_46_publicPath$$.shift());) {
    $parts$jscomp$inline_46_publicPath$$.length || void 0 === $object$$ ? $cur$jscomp$inline_47$$[$part$jscomp$inline_48$$] && $cur$jscomp$inline_47$$[$part$jscomp$inline_48$$] !== Object.prototype[$part$jscomp$inline_48$$] ? $cur$jscomp$inline_47$$ = $cur$jscomp$inline_47$$[$part$jscomp$inline_48$$] : $cur$jscomp$inline_47$$ = $cur$jscomp$inline_47$$[$part$jscomp$inline_48$$] = {} : $cur$jscomp$inline_47$$[$part$jscomp$inline_48$$] = $object$$;
  }
}, $goog$inherits$$ = function($childCtor$jscomp$1$$, $parentCtor$jscomp$1$$) {
  function $tempCtor$$() {
  }
  $tempCtor$$.prototype = $parentCtor$jscomp$1$$.prototype;
  $childCtor$jscomp$1$$.prototype = new $tempCtor$$;
  $childCtor$jscomp$1$$.prototype.constructor = $childCtor$jscomp$1$$;
};
var chrome = chrome || window.chrome || {};
chrome.cast = chrome.cast || {};
chrome.cast.media = chrome.cast.media || {};
var mojo = {};
chrome.cast.VERSION = [1, 2];
$goog$exportSymbol$$("chrome.cast.VERSION", chrome.cast.VERSION);
chrome.cast.$usingPresentationApi$ = !0;
$goog$exportSymbol$$("chrome.cast.usingPresentationApi", chrome.cast.$usingPresentationApi$);
chrome.cast.Error = function($code$jscomp$6$$, $opt_description$jscomp$1$$, $opt_details$$) {
  this.code = $code$jscomp$6$$;
  this.description = $opt_description$jscomp$1$$ || null;
  this.details = $opt_details$$ || null;
};
$goog$exportSymbol$$("chrome.cast.Error", chrome.cast.Error);
chrome.cast.$SenderApplication$ = function($platform$$) {
  this.platform = $platform$$;
  this.packageId = this.url = null;
};
$goog$exportSymbol$$("chrome.cast.SenderApplication", chrome.cast.$SenderApplication$);
chrome.cast.Image = function($url$jscomp$27$$) {
  this.url = $url$jscomp$27$$;
  this.width = this.height = null;
};
$goog$exportSymbol$$("chrome.cast.Image", chrome.cast.Image);
chrome.cast.Volume = function($opt_level$$, $opt_muted$$) {
  this.level = void 0 !== $opt_level$$ ? $opt_level$$ : null;
  this.muted = void 0 !== $opt_muted$$ ? $opt_muted$$ : null;
};
$goog$exportSymbol$$("chrome.cast.Volume", chrome.cast.Volume);
chrome.cast.$AutoJoinPolicy$ = {CUSTOM_CONTROLLER_SCOPED:"custom_controller_scoped", TAB_AND_ORIGIN_SCOPED:"tab_and_origin_scoped", ORIGIN_SCOPED:"origin_scoped", PAGE_SCOPED:"page_scoped"};
$goog$exportSymbol$$("chrome.cast.AutoJoinPolicy", chrome.cast.$AutoJoinPolicy$);
chrome.cast.$DefaultActionPolicy$ = {CREATE_SESSION:"create_session", CAST_THIS_TAB:"cast_this_tab"};
$goog$exportSymbol$$("chrome.cast.DefaultActionPolicy", chrome.cast.$DefaultActionPolicy$);
chrome.cast.$Capability$ = {VIDEO_OUT:"video_out", AUDIO_OUT:"audio_out", VIDEO_IN:"video_in", AUDIO_IN:"audio_in", MULTIZONE_GROUP:"multizone_group"};
$goog$exportSymbol$$("chrome.cast.Capability", chrome.cast.$Capability$);
chrome.cast.$ErrorCode$ = {CANCEL:"cancel", TIMEOUT:"timeout", API_NOT_INITIALIZED:"api_not_initialized", INVALID_PARAMETER:"invalid_parameter", EXTENSION_NOT_COMPATIBLE:"extension_not_compatible", EXTENSION_MISSING:"extension_missing", RECEIVER_UNAVAILABLE:"receiver_unavailable", SESSION_ERROR:"session_error", CHANNEL_ERROR:"channel_error", LOAD_MEDIA_FAILED:"load_media_failed"};
$goog$exportSymbol$$("chrome.cast.ErrorCode", chrome.cast.$ErrorCode$);
chrome.cast.$ReceiverAvailability$ = {AVAILABLE:"available", UNAVAILABLE:"unavailable"};
$goog$exportSymbol$$("chrome.cast.ReceiverAvailability", chrome.cast.$ReceiverAvailability$);
chrome.cast.$SenderPlatform$ = {CHROME:"chrome", IOS:"ios", ANDROID:"android"};
$goog$exportSymbol$$("chrome.cast.SenderPlatform", chrome.cast.$SenderPlatform$);
chrome.cast.$ReceiverType$ = {CAST:"cast", DIAL:"dial", HANGOUT:"hangout", CUSTOM:"custom"};
$goog$exportSymbol$$("chrome.cast.ReceiverType", chrome.cast.$ReceiverType$);
chrome.cast.$DialAppState$ = {RUNNING:"running", STOPPED:"stopped", ERROR:"error"};
$goog$exportSymbol$$("chrome.cast.DialAppState", chrome.cast.$DialAppState$);
chrome.cast.$ReceiverAction$ = {CAST:"cast", STOP:"stop"};
$goog$exportSymbol$$("chrome.cast.ReceiverAction", chrome.cast.$ReceiverAction$);
chrome.cast.$SessionStatus$ = {CONNECTED:"connected", DISCONNECTED:"disconnected", STOPPED:"stopped"};
$goog$exportSymbol$$("chrome.cast.SessionStatus", chrome.cast.$SessionStatus$);
chrome.cast.$VolumeControlType$ = {ATTENUATION:"attenuation", FIXED:"fixed", MASTER:"master"};
$goog$exportSymbol$$("chrome.cast.VolumeControlType", chrome.cast.$VolumeControlType$);
var $goog$debug$Error$$ = function($opt_msg$$) {
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, $goog$debug$Error$$);
  } else {
    var $stack$$ = Error().stack;
    $stack$$ && (this.stack = $stack$$);
  }
  $opt_msg$$ && (this.message = String($opt_msg$$));
};
$goog$inherits$$($goog$debug$Error$$, Error);
$goog$debug$Error$$.prototype.name = "CustomError";
var $goog$asserts$AssertionError$$ = function($messagePattern_splitParts$jscomp$inline_52$$, $messageArgs$$) {
  $messagePattern_splitParts$jscomp$inline_52$$ = $messagePattern_splitParts$jscomp$inline_52$$.split("%s");
  for (var $returnString$jscomp$inline_53$$ = "", $subLast$jscomp$inline_54$$ = $messagePattern_splitParts$jscomp$inline_52$$.length - 1, $i$jscomp$inline_55$$ = 0; $i$jscomp$inline_55$$ < $subLast$jscomp$inline_54$$; $i$jscomp$inline_55$$++) {
    $returnString$jscomp$inline_53$$ += $messagePattern_splitParts$jscomp$inline_52$$[$i$jscomp$inline_55$$] + ($i$jscomp$inline_55$$ < $messageArgs$$.length ? $messageArgs$$[$i$jscomp$inline_55$$] : "%s");
  }
  $goog$debug$Error$$.call(this, $returnString$jscomp$inline_53$$ + $messagePattern_splitParts$jscomp$inline_52$$[$subLast$jscomp$inline_54$$]);
};
$goog$inherits$$($goog$asserts$AssertionError$$, $goog$debug$Error$$);
$goog$asserts$AssertionError$$.prototype.name = "AssertionError";
var $goog$asserts$doAssertFailure_$$ = function($defaultMessage$$, $defaultArgs$$, $givenMessage$$, $givenArgs$$) {
  var $message$jscomp$40$$ = "Assertion failed";
  if ($givenMessage$$) {
    $message$jscomp$40$$ += ": " + $givenMessage$$;
    var $args$jscomp$4$$ = $givenArgs$$;
  } else {
    $defaultMessage$$ && ($message$jscomp$40$$ += ": " + $defaultMessage$$, $args$jscomp$4$$ = $defaultArgs$$);
  }
  throw new $goog$asserts$AssertionError$$("" + $message$jscomp$40$$, $args$jscomp$4$$ || []);
}, $goog$asserts$assert$$ = function($condition$jscomp$2$$, $opt_message$jscomp$8$$, $var_args$jscomp$42$$) {
  $condition$jscomp$2$$ || $goog$asserts$doAssertFailure_$$("", null, $opt_message$jscomp$8$$, Array.prototype.slice.call(arguments, 2));
  return $condition$jscomp$2$$;
}, $goog$asserts$fail$$ = function($opt_message$jscomp$10$$, $var_args$jscomp$44$$) {
  throw new $goog$asserts$AssertionError$$("Failure" + ($opt_message$jscomp$10$$ ? ": " + $opt_message$jscomp$10$$ : ""), Array.prototype.slice.call(arguments, 1));
}, $goog$asserts$assertString$$ = function($value$jscomp$99$$, $opt_message$jscomp$12$$, $var_args$jscomp$46$$) {
  $goog$isString$$($value$jscomp$99$$) || $goog$asserts$doAssertFailure_$$("Expected string but got %s: %s.", [$goog$typeOf$$($value$jscomp$99$$), $value$jscomp$99$$], $opt_message$jscomp$12$$, Array.prototype.slice.call(arguments, 2));
};
var $goog$array$forEach$$ = Array.prototype.forEach ? function($arr$jscomp$12$$, $f$jscomp$8$$, $opt_obj$jscomp$3$$) {
  $goog$asserts$assert$$(null != $arr$jscomp$12$$.length);
  Array.prototype.forEach.call($arr$jscomp$12$$, $f$jscomp$8$$, $opt_obj$jscomp$3$$);
} : function($arr$jscomp$13$$, $f$jscomp$9$$, $opt_obj$jscomp$4$$) {
  for (var $l$jscomp$1$$ = $arr$jscomp$13$$.length, $arr2$$ = $goog$isString$$($arr$jscomp$13$$) ? $arr$jscomp$13$$.split("") : $arr$jscomp$13$$, $i$jscomp$26$$ = 0; $i$jscomp$26$$ < $l$jscomp$1$$; $i$jscomp$26$$++) {
    $i$jscomp$26$$ in $arr2$$ && $f$jscomp$9$$.call($opt_obj$jscomp$4$$, $arr2$$[$i$jscomp$26$$], $i$jscomp$26$$, $arr$jscomp$13$$);
  }
}, $goog$array$findIndex$$ = function($arr$jscomp$30$$, $f$jscomp$25$$) {
  for (var $l$jscomp$7$$ = $arr$jscomp$30$$.length, $arr2$jscomp$6$$ = $goog$isString$$($arr$jscomp$30$$) ? $arr$jscomp$30$$.split("") : $arr$jscomp$30$$, $i$jscomp$33$$ = 0; $i$jscomp$33$$ < $l$jscomp$7$$; $i$jscomp$33$$++) {
    if ($i$jscomp$33$$ in $arr2$jscomp$6$$ && $f$jscomp$25$$.call(void 0, $arr2$jscomp$6$$[$i$jscomp$33$$], $i$jscomp$33$$, $arr$jscomp$30$$)) {
      return $i$jscomp$33$$;
    }
  }
  return -1;
};
var $goog$string$Const$$ = function($opt_token$jscomp$1$$, $opt_content$$) {
  this.$b$ = $opt_token$jscomp$1$$ === $goog$string$Const$GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_$$ && $opt_content$$ || "";
  this.$c$ = $goog$string$Const$TYPE_MARKER_$$;
};
$goog$string$Const$$.prototype.toString = function() {
  return "Const{" + this.$b$ + "}";
};
var $goog$string$Const$unwrap$$ = function($stringConst$$) {
  if ($stringConst$$ instanceof $goog$string$Const$$ && $stringConst$$.constructor === $goog$string$Const$$ && $stringConst$$.$c$ === $goog$string$Const$TYPE_MARKER_$$) {
    return $stringConst$$.$b$;
  }
  $goog$asserts$fail$$("expected object of type Const, got '" + $stringConst$$ + "'");
  return "type_error:Const";
}, $goog$string$Const$TYPE_MARKER_$$ = {}, $goog$string$Const$GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_$$ = {};
var $goog$string$internal$AMP_RE_$$ = /&/g, $goog$string$internal$LT_RE_$$ = /</g, $goog$string$internal$GT_RE_$$ = />/g, $goog$string$internal$QUOT_RE_$$ = /"/g, $goog$string$internal$SINGLE_QUOTE_RE_$$ = /'/g, $goog$string$internal$NULL_RE_$$ = /\x00/g, $goog$string$internal$ALL_RE_$$ = /[\x00&<>"']/;
var $goog$labs$userAgent$util$userAgent_$$;
a: {
  var $navigator$jscomp$inline_61$$ = $goog$global$$.navigator;
  if ($navigator$jscomp$inline_61$$) {
    var $userAgent$jscomp$inline_62$$ = $navigator$jscomp$inline_61$$.userAgent;
    if ($userAgent$jscomp$inline_62$$) {
      $goog$labs$userAgent$util$userAgent_$$ = $userAgent$jscomp$inline_62$$;
      break a;
    }
  }
  $goog$labs$userAgent$util$userAgent_$$ = "";
}
var $goog$labs$userAgent$util$matchUserAgent$$ = function($str$jscomp$36$$) {
  return -1 != $goog$labs$userAgent$util$userAgent_$$.indexOf($str$jscomp$36$$);
};
var $goog$html$SafeHtml$$ = function() {
  this.$b$ = "";
  this.$c$ = $goog$html$SafeHtml$TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_$$;
};
$goog$html$SafeHtml$$.prototype.toString = function() {
  return "SafeHtml{" + this.$b$ + "}";
};
var $goog$html$SafeHtml$unwrapTrustedHTML$$ = function($safeHtml$jscomp$1$$) {
  if ($safeHtml$jscomp$1$$ instanceof $goog$html$SafeHtml$$ && $safeHtml$jscomp$1$$.constructor === $goog$html$SafeHtml$$ && $safeHtml$jscomp$1$$.$c$ === $goog$html$SafeHtml$TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_$$) {
    return $safeHtml$jscomp$1$$.$b$;
  }
  $goog$asserts$fail$$("expected object of type SafeHtml, got '" + $safeHtml$jscomp$1$$ + "' of type " + $goog$typeOf$$($safeHtml$jscomp$1$$));
  return "type_error:SafeHtml";
}, $goog$html$SafeHtml$TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_$$ = {}, $JSCompiler_StaticMethods_goog_html_SafeHtml_prototype$initSecurityPrivateDoNotAccessOrElse_$$ = function($html$jscomp$8$$) {
  var $JSCompiler_StaticMethods_goog_html_SafeHtml_prototype$initSecurityPrivateDoNotAccessOrElse_$self$$ = new $goog$html$SafeHtml$$;
  $JSCompiler_StaticMethods_goog_html_SafeHtml_prototype$initSecurityPrivateDoNotAccessOrElse_$self$$.$b$ = $html$jscomp$8$$;
  return $JSCompiler_StaticMethods_goog_html_SafeHtml_prototype$initSecurityPrivateDoNotAccessOrElse_$self$$;
};
$JSCompiler_StaticMethods_goog_html_SafeHtml_prototype$initSecurityPrivateDoNotAccessOrElse_$$("<!DOCTYPE html>");
var $goog$html$SafeHtml$EMPTY$$ = $JSCompiler_StaticMethods_goog_html_SafeHtml_prototype$initSecurityPrivateDoNotAccessOrElse_$$("");
$JSCompiler_StaticMethods_goog_html_SafeHtml_prototype$initSecurityPrivateDoNotAccessOrElse_$$("<br>");
var $goog$dom$safe$SET_INNER_HTML_DISALLOWED_TAGS_$$ = {MATH:!0, SCRIPT:!0, STYLE:!0, SVG:!0, TEMPLATE:!0}, $goog$dom$safe$isInnerHtmlCleanupRecursive_$$ = function($fn$jscomp$8$$) {
  var $called$$ = !1, $value$jscomp$110$$;
  return function() {
    $called$$ || ($value$jscomp$110$$ = $fn$jscomp$8$$(), $called$$ = !0);
    return $value$jscomp$110$$;
  };
}(function() {
  if ("undefined" === typeof document) {
    return !1;
  }
  var $div$$ = document.createElement("div"), $childDiv_innerChild$$ = document.createElement("div");
  $childDiv_innerChild$$.appendChild(document.createElement("div"));
  $div$$.appendChild($childDiv_innerChild$$);
  if (!$div$$.firstChild) {
    return !1;
  }
  $childDiv_innerChild$$ = $div$$.firstChild.firstChild;
  $div$$.innerHTML = $goog$html$SafeHtml$unwrapTrustedHTML$$($goog$html$SafeHtml$EMPTY$$);
  return !$childDiv_innerChild$$.parentElement;
});
var $goog$string$unescapeEntitiesUsingDom_$$ = function($str$jscomp$58$$) {
  var $seen$jscomp$1$$ = {"&amp;":"&", "&lt;":"<", "&gt;":">", "&quot;":'"'};
  var $div$jscomp$1$$ = $goog$global$$.document.createElement("div");
  return $str$jscomp$58$$.replace($goog$string$HTML_ENTITY_PATTERN_$$, function($s$jscomp$11$$, $entity_justification$jscomp$inline_69_n$jscomp$6$$) {
    var $JSCompiler_inline_result$jscomp$15_html$jscomp$inline_68_value$jscomp$130$$ = $seen$jscomp$1$$[$s$jscomp$11$$];
    if ($JSCompiler_inline_result$jscomp$15_html$jscomp$inline_68_value$jscomp$130$$) {
      return $JSCompiler_inline_result$jscomp$15_html$jscomp$inline_68_value$jscomp$130$$;
    }
    "#" == $entity_justification$jscomp$inline_69_n$jscomp$6$$.charAt(0) && ($entity_justification$jscomp$inline_69_n$jscomp$6$$ = Number("0" + $entity_justification$jscomp$inline_69_n$jscomp$6$$.substr(1)), isNaN($entity_justification$jscomp$inline_69_n$jscomp$6$$) || ($JSCompiler_inline_result$jscomp$15_html$jscomp$inline_68_value$jscomp$130$$ = String.fromCharCode($entity_justification$jscomp$inline_69_n$jscomp$6$$)));
    if (!$JSCompiler_inline_result$jscomp$15_html$jscomp$inline_68_value$jscomp$130$$) {
      $JSCompiler_inline_result$jscomp$15_html$jscomp$inline_68_value$jscomp$130$$ = $s$jscomp$11$$ + " ";
      $entity_justification$jscomp$inline_69_n$jscomp$6$$ = new $goog$string$Const$$($goog$string$Const$GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_$$, "Single HTML entity.");
      $goog$asserts$assertString$$($goog$string$Const$unwrap$$($entity_justification$jscomp$inline_69_n$jscomp$6$$), "must provide justification");
      $goog$asserts$assert$$(!/^[\s\xa0]*$/.test($goog$string$Const$unwrap$$($entity_justification$jscomp$inline_69_n$jscomp$6$$)), "must provide non-empty justification");
      $JSCompiler_inline_result$jscomp$15_html$jscomp$inline_68_value$jscomp$130$$ = $JSCompiler_StaticMethods_goog_html_SafeHtml_prototype$initSecurityPrivateDoNotAccessOrElse_$$($JSCompiler_inline_result$jscomp$15_html$jscomp$inline_68_value$jscomp$130$$);
      if ($goog$dom$safe$SET_INNER_HTML_DISALLOWED_TAGS_$$[$div$jscomp$1$$.tagName.toUpperCase()]) {
        throw Error("goog.dom.safe.setInnerHtml cannot be used to set content of " + $div$jscomp$1$$.tagName + ".");
      }
      if ($goog$dom$safe$isInnerHtmlCleanupRecursive_$$()) {
        for (; $div$jscomp$1$$.lastChild;) {
          $div$jscomp$1$$.removeChild($div$jscomp$1$$.lastChild);
        }
      }
      $div$jscomp$1$$.innerHTML = $goog$html$SafeHtml$unwrapTrustedHTML$$($JSCompiler_inline_result$jscomp$15_html$jscomp$inline_68_value$jscomp$130$$);
      $JSCompiler_inline_result$jscomp$15_html$jscomp$inline_68_value$jscomp$130$$ = $div$jscomp$1$$.firstChild.nodeValue.slice(0, -1);
    }
    return $seen$jscomp$1$$[$s$jscomp$11$$] = $JSCompiler_inline_result$jscomp$15_html$jscomp$inline_68_value$jscomp$130$$;
  });
}, $goog$string$unescapePureXmlEntities_$$ = function($str$jscomp$59$$) {
  return $str$jscomp$59$$.replace(/&([^;]+);/g, function($s$jscomp$12$$, $entity$jscomp$1_n$jscomp$7$$) {
    switch($entity$jscomp$1_n$jscomp$7$$) {
      case "amp":
        return "&";
      case "lt":
        return "<";
      case "gt":
        return ">";
      case "quot":
        return '"';
      default:
        return "#" != $entity$jscomp$1_n$jscomp$7$$.charAt(0) || ($entity$jscomp$1_n$jscomp$7$$ = Number("0" + $entity$jscomp$1_n$jscomp$7$$.substr(1)), isNaN($entity$jscomp$1_n$jscomp$7$$)) ? $s$jscomp$12$$ : String.fromCharCode($entity$jscomp$1_n$jscomp$7$$);
    }
  });
}, $goog$string$HTML_ENTITY_PATTERN_$$ = /&([^;\s<&]+);?/g;
chrome.cast.$ApiConfig$ = function($sessionRequest$$, $sessionListener$$, $receiverListener$$, $opt_autoJoinPolicy$$, $opt_defaultActionPolicy$$) {
  this.sessionRequest = $sessionRequest$$;
  this.sessionListener = $sessionListener$$;
  this.receiverListener = $receiverListener$$;
  this.autoJoinPolicy = $opt_autoJoinPolicy$$ || chrome.cast.$AutoJoinPolicy$.TAB_AND_ORIGIN_SCOPED;
  this.defaultActionPolicy = $opt_defaultActionPolicy$$ || chrome.cast.$DefaultActionPolicy$.CREATE_SESSION;
  this.customDialLaunchCallback = null;
  this.invisibleSender = !1;
  this.additionalSessionRequests = [];
};
$goog$exportSymbol$$("chrome.cast.ApiConfig", chrome.cast.$ApiConfig$);
chrome.cast.$DialRequest$ = function($appName$$, $opt_launchParameter$$) {
  this.appName = $appName$$;
  this.launchParameter = $opt_launchParameter$$ || null;
};
$goog$exportSymbol$$("chrome.cast.DialRequest", chrome.cast.$DialRequest$);
chrome.cast.$DialLaunchData$ = function($receiver$$, $appState$$, $opt_extraData$$) {
  this.receiver = $receiver$$;
  this.appState = $appState$$;
  this.extraData = $opt_extraData$$ || null;
};
$goog$exportSymbol$$("chrome.cast.DialLaunchData", chrome.cast.$DialLaunchData$);
chrome.cast.$DialLaunchResponse$ = function($doLaunch$$, $opt_launchParameter$jscomp$1$$) {
  this.doLaunch = $doLaunch$$;
  this.launchParameter = $opt_launchParameter$jscomp$1$$ || null;
};
$goog$exportSymbol$$("chrome.cast.DialLaunchResponse", chrome.cast.$DialLaunchResponse$);
chrome.cast.$SessionRequest$ = function($appId$jscomp$3$$, $opt_capabilities$$, $opt_timeout$$) {
  this.appId = $appId$jscomp$3$$;
  this.capabilities = "array" == $goog$typeOf$$($opt_capabilities$$) ? $opt_capabilities$$ : [chrome.cast.$Capability$.VIDEO_OUT, chrome.cast.$Capability$.AUDIO_OUT];
  this.requestSessionTimeout = $opt_timeout$$ || chrome.cast.timeout.requestSession;
  this.dialRequest = this.language = null;
};
$goog$exportSymbol$$("chrome.cast.SessionRequest", chrome.cast.$SessionRequest$);
chrome.cast.$Receiver$ = function($label$jscomp$9_str$jscomp$inline_506$$, $friendlyName$$, $opt_capabilities$jscomp$1$$, $opt_volume$$) {
  this.label = $label$jscomp$9_str$jscomp$inline_506$$;
  $label$jscomp$9_str$jscomp$inline_506$$ = $friendlyName$$;
  $goog$string$internal$ALL_RE_$$.test($label$jscomp$9_str$jscomp$inline_506$$) && (-1 != $label$jscomp$9_str$jscomp$inline_506$$.indexOf("&") && ($label$jscomp$9_str$jscomp$inline_506$$ = $label$jscomp$9_str$jscomp$inline_506$$.replace($goog$string$internal$AMP_RE_$$, "&amp;")), -1 != $label$jscomp$9_str$jscomp$inline_506$$.indexOf("<") && ($label$jscomp$9_str$jscomp$inline_506$$ = $label$jscomp$9_str$jscomp$inline_506$$.replace($goog$string$internal$LT_RE_$$, "&lt;")), -1 != $label$jscomp$9_str$jscomp$inline_506$$.indexOf(">") && 
  ($label$jscomp$9_str$jscomp$inline_506$$ = $label$jscomp$9_str$jscomp$inline_506$$.replace($goog$string$internal$GT_RE_$$, "&gt;")), -1 != $label$jscomp$9_str$jscomp$inline_506$$.indexOf('"') && ($label$jscomp$9_str$jscomp$inline_506$$ = $label$jscomp$9_str$jscomp$inline_506$$.replace($goog$string$internal$QUOT_RE_$$, "&quot;")), -1 != $label$jscomp$9_str$jscomp$inline_506$$.indexOf("'") && ($label$jscomp$9_str$jscomp$inline_506$$ = $label$jscomp$9_str$jscomp$inline_506$$.replace($goog$string$internal$SINGLE_QUOTE_RE_$$, 
  "&#39;")), -1 != $label$jscomp$9_str$jscomp$inline_506$$.indexOf("\x00") && ($label$jscomp$9_str$jscomp$inline_506$$ = $label$jscomp$9_str$jscomp$inline_506$$.replace($goog$string$internal$NULL_RE_$$, "&#0;")));
  this.friendlyName = $label$jscomp$9_str$jscomp$inline_506$$;
  this.capabilities = $opt_capabilities$jscomp$1$$ || [];
  this.volume = $opt_volume$$ || null;
  this.receiverType = chrome.cast.$ReceiverType$.CAST;
  this.displayStatus = this.isActiveInput = null;
};
$goog$exportSymbol$$("chrome.cast.Receiver", chrome.cast.$Receiver$);
chrome.cast.$ReceiverDisplayStatus$ = function($statusText$$, $appImages$$) {
  this.statusText = $statusText$$;
  this.appImages = $appImages$$;
  this.showStop = null;
};
$goog$exportSymbol$$("chrome.cast.ReceiverDisplayStatus", chrome.cast.$ReceiverDisplayStatus$);
chrome.cast.$Timeout$ = function() {
  this.requestSession = 60000;
  this.sendCustomMessage = this.setReceiverVolume = this.stopSession = this.leaveSession = 3000;
};
$goog$exportSymbol$$("chrome.cast.Timeout", chrome.cast.$Timeout$);
chrome.cast.timeout = new chrome.cast.$Timeout$;
$goog$exportSymbol$$("chrome.cast.timeout", chrome.cast.timeout);
chrome.cast.$AUTO_JOIN_PRESENTATION_ID$ = "auto-join";
chrome.cast.$PRESENTATION_ID_PREFIX$ = "cast-session_";
chrome.cast.media.$HdrType$ = {SDR:"sdr", HDR:"hdr", DV:"dv"};
$goog$exportSymbol$$("chrome.cast.media.HdrType", chrome.cast.media.$HdrType$);
chrome.cast.media.$HlsSegmentFormat$ = {AAC:"aac", AC3:"ac3", MP3:"mp3", TS:"ts", TS_AAC:"ts_aac", E_AC3:"e_ac3", FMP4:"fmp4"};
$goog$exportSymbol$$("chrome.cast.media.HlsSegmentFormat", chrome.cast.media.$HlsSegmentFormat$);
chrome.cast.media.$HlsVideoSegmentFormat$ = {MPEG2_TS:"mpeg2_ts", FMP4:"fmp4"};
$goog$exportSymbol$$("chrome.cast.media.HlsVideoSegmentFormat", chrome.cast.media.$HlsVideoSegmentFormat$);
chrome.cast.media.$MediaCommand$ = {PAUSE:"pause", SEEK:"seek", STREAM_VOLUME:"stream_volume", STREAM_MUTE:"stream_mute"};
$goog$exportSymbol$$("chrome.cast.media.MediaCommand", chrome.cast.media.$MediaCommand$);
chrome.cast.media.$QueueType$ = {ALBUM:"ALBUM", PLAYLIST:"PLAYLIST", AUDIOBOOK:"AUDIOBOOK", RADIO_STATION:"RADIO_STATION", PODCAST_SERIES:"PODCAST_SERIES", TV_SERIES:"TV_SERIES", VIDEO_PLAYLIST:"VIDEO_PLAYLIST", LIVE_TV:"LIVE_TV", MOVIE:"MOVIE"};
$goog$exportSymbol$$("chrome.cast.media.QueueType", chrome.cast.media.$QueueType$);
chrome.cast.media.$ContainerType$ = {GENERIC_CONTAINER:0, AUDIOBOOK_CONTAINER:1};
$goog$exportSymbol$$("chrome.cast.media.ContainerType", chrome.cast.media.$ContainerType$);
chrome.cast.media.$MetadataType$ = {GENERIC:0, MOVIE:1, TV_SHOW:2, MUSIC_TRACK:3, PHOTO:4, AUDIOBOOK_CHAPTER:5};
$goog$exportSymbol$$("chrome.cast.media.MetadataType", chrome.cast.media.$MetadataType$);
chrome.cast.media.$PlayerState$ = {IDLE:"IDLE", PLAYING:"PLAYING", PAUSED:"PAUSED", BUFFERING:"BUFFERING"};
$goog$exportSymbol$$("chrome.cast.media.PlayerState", chrome.cast.media.$PlayerState$);
chrome.cast.media.$RepeatMode$ = {OFF:"REPEAT_OFF", ALL:"REPEAT_ALL", SINGLE:"REPEAT_SINGLE", ALL_AND_SHUFFLE:"REPEAT_ALL_AND_SHUFFLE"};
$goog$exportSymbol$$("chrome.cast.media.RepeatMode", chrome.cast.media.$RepeatMode$);
chrome.cast.media.$ResumeState$ = {PLAYBACK_START:"PLAYBACK_START", PLAYBACK_PAUSE:"PLAYBACK_PAUSE"};
$goog$exportSymbol$$("chrome.cast.media.ResumeState", chrome.cast.media.$ResumeState$);
chrome.cast.media.$StreamType$ = {BUFFERED:"BUFFERED", LIVE:"LIVE", OTHER:"OTHER"};
$goog$exportSymbol$$("chrome.cast.media.StreamType", chrome.cast.media.$StreamType$);
chrome.cast.media.$IdleReason$ = {CANCELLED:"CANCELLED", INTERRUPTED:"INTERRUPTED", FINISHED:"FINISHED", ERROR:"ERROR"};
$goog$exportSymbol$$("chrome.cast.media.IdleReason", chrome.cast.media.$IdleReason$);
chrome.cast.media.$TrackType$ = {TEXT:"TEXT", AUDIO:"AUDIO", VIDEO:"VIDEO"};
$goog$exportSymbol$$("chrome.cast.media.TrackType", chrome.cast.media.$TrackType$);
chrome.cast.media.$TextTrackType$ = {SUBTITLES:"SUBTITLES", CAPTIONS:"CAPTIONS", DESCRIPTIONS:"DESCRIPTIONS", CHAPTERS:"CHAPTERS", METADATA:"METADATA"};
$goog$exportSymbol$$("chrome.cast.media.TextTrackType", chrome.cast.media.$TextTrackType$);
chrome.cast.media.$TextTrackEdgeType$ = {NONE:"NONE", OUTLINE:"OUTLINE", DROP_SHADOW:"DROP_SHADOW", RAISED:"RAISED", DEPRESSED:"DEPRESSED"};
$goog$exportSymbol$$("chrome.cast.media.TextTrackEdgeType", chrome.cast.media.$TextTrackEdgeType$);
chrome.cast.media.$TextTrackWindowType$ = {NONE:"NONE", NORMAL:"NORMAL", ROUNDED_CORNERS:"ROUNDED_CORNERS"};
$goog$exportSymbol$$("chrome.cast.media.TextTrackWindowType", chrome.cast.media.$TextTrackWindowType$);
chrome.cast.media.$TextTrackFontGenericFamily$ = {SANS_SERIF:"SANS_SERIF", MONOSPACED_SANS_SERIF:"MONOSPACED_SANS_SERIF", SERIF:"SERIF", MONOSPACED_SERIF:"MONOSPACED_SERIF", CASUAL:"CASUAL", CURSIVE:"CURSIVE", SMALL_CAPITALS:"SMALL_CAPITALS"};
$goog$exportSymbol$$("chrome.cast.media.TextTrackFontGenericFamily", chrome.cast.media.$TextTrackFontGenericFamily$);
chrome.cast.media.$TextTrackFontStyle$ = {NORMAL:"NORMAL", BOLD:"BOLD", BOLD_ITALIC:"BOLD_ITALIC", ITALIC:"ITALIC"};
$goog$exportSymbol$$("chrome.cast.media.TextTrackFontStyle", chrome.cast.media.$TextTrackFontStyle$);
chrome.cast.media.$UserAction$ = {LIKE:"LIKE", DISLIKE:"DISLIKE", FOLLOW:"FOLLOW", UNFOLLOW:"UNFOLLOW"};
$goog$exportSymbol$$("chrome.cast.media.UserAction", chrome.cast.media.$UserAction$);
chrome.cast.media.$GetStatusRequest$ = function() {
  this.customData = null;
};
$goog$exportSymbol$$("chrome.cast.media.GetStatusRequest", chrome.cast.media.$GetStatusRequest$);
chrome.cast.media.$PauseRequest$ = function() {
  this.customData = null;
};
$goog$exportSymbol$$("chrome.cast.media.PauseRequest", chrome.cast.media.$PauseRequest$);
chrome.cast.media.$PlayRequest$ = function() {
  this.customData = null;
};
$goog$exportSymbol$$("chrome.cast.media.PlayRequest", chrome.cast.media.$PlayRequest$);
chrome.cast.media.$SeekRequest$ = function() {
  this.customData = this.resumeState = this.currentTime = null;
};
$goog$exportSymbol$$("chrome.cast.media.SeekRequest", chrome.cast.media.$SeekRequest$);
chrome.cast.media.$StopRequest$ = function() {
  this.customData = null;
};
$goog$exportSymbol$$("chrome.cast.media.StopRequest", chrome.cast.media.$StopRequest$);
chrome.cast.media.$VolumeRequest$ = function($volume$$) {
  this.volume = $volume$$;
  this.customData = null;
};
$goog$exportSymbol$$("chrome.cast.media.VolumeRequest", chrome.cast.media.$VolumeRequest$);
chrome.cast.media.$LoadRequest$ = function($mediaInfo$$) {
  this.type = "LOAD";
  this.requestId = 0;
  this.sessionId = null;
  this.media = $mediaInfo$$;
  this.activeTrackIds = null;
  this.autoplay = !0;
  this.customData = this.currentTime = null;
};
$goog$exportSymbol$$("chrome.cast.media.LoadRequest", chrome.cast.media.$LoadRequest$);
chrome.cast.media.$PrecacheRequest$ = function($data$jscomp$68$$) {
  this.type = "PRECACHE";
  this.requestId = 0;
  this.precacheData = $data$jscomp$68$$;
};
chrome.cast.media.$EditTracksInfoRequest$ = function($opt_activeTrackIds$$, $opt_textTrackStyle$$) {
  this.requestId = 0;
  this.activeTrackIds = $opt_activeTrackIds$$ || null;
  this.textTrackStyle = $opt_textTrackStyle$$ || null;
};
$goog$exportSymbol$$("chrome.cast.media.EditTracksInfoRequest", chrome.cast.media.$EditTracksInfoRequest$);
chrome.cast.media.$ContainerMetadata$ = function($type$jscomp$150$$) {
  this.containerType = $type$jscomp$150$$ = void 0 === $type$jscomp$150$$ ? chrome.cast.media.$ContainerType$.GENERIC_CONTAINER : $type$jscomp$150$$;
  this.containerDuration = this.containerImages = this.sections = this.title = void 0;
};
$goog$exportSymbol$$("chrome.cast.media.ContainerMetadata", chrome.cast.media.$ContainerMetadata$);
chrome.cast.media.$MediaMetadata$ = function($type$jscomp$151$$) {
  this.metadataType = this.type = $type$jscomp$151$$;
  this.queueItemId = this.sectionStartTimeInContainer = this.sectionStartAbsoluteTime = this.sectionStartTimeInMedia = this.sectionDuration = void 0;
};
$goog$exportSymbol$$("chrome.cast.media.MediaMetadata", chrome.cast.media.$MediaMetadata$);
chrome.cast.media.$GenericMediaMetadata$ = function() {
  chrome.cast.media.$MediaMetadata$.call(this, chrome.cast.media.$MetadataType$.GENERIC);
  this.releaseDate = this.releaseYear = this.images = this.subtitle = this.title = void 0;
};
$$jscomp$inherits$$(chrome.cast.media.$GenericMediaMetadata$, chrome.cast.media.$MediaMetadata$);
$goog$exportSymbol$$("chrome.cast.media.GenericMediaMetadata", chrome.cast.media.$GenericMediaMetadata$);
chrome.cast.media.$MovieMediaMetadata$ = function() {
  chrome.cast.media.$MediaMetadata$.call(this, chrome.cast.media.$MetadataType$.MOVIE);
  this.releaseDate = this.releaseYear = this.images = this.subtitle = this.studio = this.title = void 0;
};
$$jscomp$inherits$$(chrome.cast.media.$MovieMediaMetadata$, chrome.cast.media.$MediaMetadata$);
$goog$exportSymbol$$("chrome.cast.media.MovieMediaMetadata", chrome.cast.media.$MovieMediaMetadata$);
chrome.cast.media.$TvShowMediaMetadata$ = function() {
  chrome.cast.media.$MediaMetadata$.call(this, chrome.cast.media.$MetadataType$.TV_SHOW);
  this.originalAirdate = this.releaseYear = this.images = this.episode = this.episodeNumber = this.season = this.seasonNumber = this.episodeTitle = this.title = this.seriesTitle = void 0;
};
$$jscomp$inherits$$(chrome.cast.media.$TvShowMediaMetadata$, chrome.cast.media.$MediaMetadata$);
$goog$exportSymbol$$("chrome.cast.media.TvShowMediaMetadata", chrome.cast.media.$TvShowMediaMetadata$);
chrome.cast.media.$MusicTrackMediaMetadata$ = function() {
  chrome.cast.media.$MediaMetadata$.call(this, chrome.cast.media.$MetadataType$.MUSIC_TRACK);
  this.releaseDate = this.releaseYear = this.images = this.discNumber = this.trackNumber = this.artistName = this.songName = this.composer = this.artist = this.albumArtist = this.title = this.albumName = void 0;
};
$$jscomp$inherits$$(chrome.cast.media.$MusicTrackMediaMetadata$, chrome.cast.media.$MediaMetadata$);
$goog$exportSymbol$$("chrome.cast.media.MusicTrackMediaMetadata", chrome.cast.media.$MusicTrackMediaMetadata$);
chrome.cast.media.$PhotoMediaMetadata$ = function() {
  chrome.cast.media.$MediaMetadata$.call(this, chrome.cast.media.$MetadataType$.PHOTO);
  this.creationDateTime = this.height = this.width = this.longitude = this.latitude = this.images = this.location = this.artist = this.title = void 0;
};
$$jscomp$inherits$$(chrome.cast.media.$PhotoMediaMetadata$, chrome.cast.media.$MediaMetadata$);
$goog$exportSymbol$$("chrome.cast.media.PhotoMediaMetadata", chrome.cast.media.$PhotoMediaMetadata$);
chrome.cast.media.$AudiobookContainerMetadata$ = function() {
  chrome.cast.media.$ContainerMetadata$.call(this, chrome.cast.media.$ContainerType$.AUDIOBOOK_CONTAINER);
  this.releaseDate = this.publisher = this.narrators = this.authors = void 0;
};
$$jscomp$inherits$$(chrome.cast.media.$AudiobookContainerMetadata$, chrome.cast.media.$ContainerMetadata$);
$goog$exportSymbol$$("chrome.cast.media.AudiobookContainerMetadata", chrome.cast.media.$AudiobookContainerMetadata$);
chrome.cast.media.$AudiobookChapterMediaMetadata$ = function() {
  chrome.cast.media.$MediaMetadata$.call(this, chrome.cast.media.$MetadataType$.AUDIOBOOK_CHAPTER);
  this.images = this.subtitle = this.bookTitle = this.chapterNumber = this.title = this.chapterTitle = void 0;
};
$$jscomp$inherits$$(chrome.cast.media.$AudiobookChapterMediaMetadata$, chrome.cast.media.$MediaMetadata$);
$goog$exportSymbol$$("chrome.cast.media.AudiobookChapterMediaMetadata", chrome.cast.media.$AudiobookChapterMediaMetadata$);
chrome.cast.media.$MediaInfo$ = function($contentId$$, $contentType$jscomp$4$$) {
  this.contentId = $contentId$$;
  this.contentUrl = void 0;
  this.streamType = chrome.cast.media.$StreamType$.BUFFERED;
  this.contentType = $contentType$jscomp$4$$;
  this.metadata = null;
  this.entity = void 0;
  this.duration = null;
  this.startAbsoluteTime = void 0;
  this.customData = this.textTrackStyle = this.tracks = null;
  this.userActionStates = this.hlsVideoSegmentFormat = this.hlsSegmentFormat = this.vmapAdsRequest = this.breakClips = this.breaks = void 0;
};
$goog$exportSymbol$$("chrome.cast.media.MediaInfo", chrome.cast.media.$MediaInfo$);
chrome.cast.media.$QueueItem$ = function($mediaInfo$jscomp$1$$) {
  this.itemId = null;
  this.media = $mediaInfo$jscomp$1$$;
  this.autoplay = !0;
  this.startTime = 0;
  this.playbackDuration = null;
  this.preloadTime = 0;
  this.customData = this.activeTrackIds = null;
};
$goog$exportSymbol$$("chrome.cast.media.QueueItem", chrome.cast.media.$QueueItem$);
chrome.cast.media.$DEFAULT_MEDIA_RECEIVER_APP_ID$ = "CC1AD845";
$goog$exportSymbol$$("chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID", chrome.cast.media.$DEFAULT_MEDIA_RECEIVER_APP_ID$);
chrome.cast.media.timeout = {};
chrome.cast.media.timeout.load = 0;
$goog$exportSymbol$$("chrome.cast.media.timeout.load", chrome.cast.media.timeout.load);
chrome.cast.media.timeout.$getStatus$ = 0;
$goog$exportSymbol$$("chrome.cast.media.timeout.getStatus", chrome.cast.media.timeout.$getStatus$);
chrome.cast.media.timeout.play = 0;
$goog$exportSymbol$$("chrome.cast.media.timeout.play", chrome.cast.media.timeout.play);
chrome.cast.media.timeout.pause = 0;
$goog$exportSymbol$$("chrome.cast.media.timeout.pause", chrome.cast.media.timeout.pause);
chrome.cast.media.timeout.seek = 0;
$goog$exportSymbol$$("chrome.cast.media.timeout.seek", chrome.cast.media.timeout.seek);
chrome.cast.media.timeout.stop = 0;
$goog$exportSymbol$$("chrome.cast.media.timeout.stop", chrome.cast.media.timeout.stop);
chrome.cast.media.timeout.$setVolume$ = 0;
$goog$exportSymbol$$("chrome.cast.media.timeout.setVolume", chrome.cast.media.timeout.$setVolume$);
chrome.cast.media.timeout.$editTracksInfo$ = 0;
$goog$exportSymbol$$("chrome.cast.media.timeout.editTracksInfo", chrome.cast.media.timeout.$editTracksInfo$);
chrome.cast.media.timeout.$queue$ = 0;
$goog$exportSymbol$$("chrome.cast.media.timeout.queue", chrome.cast.media.timeout.$queue$);
chrome.cast.media.$Track$ = function($trackId$jscomp$1$$, $trackType$$) {
  this.trackId = $trackId$jscomp$1$$;
  this.trackContentType = this.trackContentId = null;
  this.type = $trackType$$;
  this.customData = this.subtype = this.language = this.name = null;
};
$goog$exportSymbol$$("chrome.cast.media.Track", chrome.cast.media.$Track$);
chrome.cast.media.$TextTrackStyle$ = function() {
  this.customData = this.fontStyle = this.fontGenericFamily = this.fontFamily = this.fontScale = this.windowRoundedCornerRadius = this.windowColor = this.windowType = this.edgeColor = this.edgeType = this.backgroundColor = this.foregroundColor = null;
};
$goog$exportSymbol$$("chrome.cast.media.TextTrackStyle", chrome.cast.media.$TextTrackStyle$);
chrome.cast.media.$QueueLoadRequest$ = function($items$jscomp$1$$) {
  this.type = "QUEUE_LOAD";
  this.sessionId = this.requestId = null;
  this.items = $items$jscomp$1$$;
  this.startIndex = 0;
  this.repeatMode = chrome.cast.media.$RepeatMode$.OFF;
  this.customData = null;
};
$goog$exportSymbol$$("chrome.cast.media.QueueLoadRequest", chrome.cast.media.$QueueLoadRequest$);
chrome.cast.media.$QueueInsertItemsRequest$ = function($itemsToInsert$$) {
  this.type = "QUEUE_INSERT";
  this.sessionId = this.requestId = null;
  this.items = $itemsToInsert$$;
  this.customData = this.insertBefore = null;
};
$goog$exportSymbol$$("chrome.cast.media.QueueInsertItemsRequest", chrome.cast.media.$QueueInsertItemsRequest$);
chrome.cast.media.$QueueUpdateItemsRequest$ = function($itemsToUpdate$$) {
  this.type = "QUEUE_UPDATE";
  this.sessionId = this.requestId = null;
  this.items = $itemsToUpdate$$;
  this.customData = null;
};
$goog$exportSymbol$$("chrome.cast.media.QueueUpdateItemsRequest", chrome.cast.media.$QueueUpdateItemsRequest$);
chrome.cast.media.$QueueJumpRequest$ = function() {
  this.type = "QUEUE_UPDATE";
  this.customData = this.jump = this.currentItemId = this.sessionId = this.requestId = null;
};
$goog$exportSymbol$$("chrome.cast.media.QueueJumpRequest", chrome.cast.media.$QueueJumpRequest$);
chrome.cast.media.$QueueSetPropertiesRequest$ = function() {
  this.type = "QUEUE_UPDATE";
  this.customData = this.repeatMode = this.sessionId = this.requestId = null;
};
$goog$exportSymbol$$("chrome.cast.media.QueueSetPropertiesRequest", chrome.cast.media.$QueueSetPropertiesRequest$);
chrome.cast.media.$QueueRemoveItemsRequest$ = function($itemIdsToRemove$$) {
  this.type = "QUEUE_REMOVE";
  this.sessionId = this.requestId = null;
  this.itemIds = $itemIdsToRemove$$;
  this.customData = null;
};
$goog$exportSymbol$$("chrome.cast.media.QueueRemoveItemsRequest", chrome.cast.media.$QueueRemoveItemsRequest$);
chrome.cast.media.$QueueReorderItemsRequest$ = function($itemIdsToReorder$$) {
  this.type = "QUEUE_REORDER";
  this.sessionId = this.requestId = null;
  this.itemIds = $itemIdsToReorder$$;
  this.customData = this.insertBefore = null;
};
$goog$exportSymbol$$("chrome.cast.media.QueueReorderItemsRequest", chrome.cast.media.$QueueReorderItemsRequest$);
chrome.cast.media.$Break$ = function($id$jscomp$45$$, $breakClipIds$$, $position$jscomp$1$$) {
  this.id = $id$jscomp$45$$;
  this.breakClipIds = $breakClipIds$$;
  this.position = $position$jscomp$1$$;
  this.duration = void 0;
  this.isWatched = !1;
  this.isEmbedded = void 0;
};
$goog$exportSymbol$$("chrome.cast.media.Break", chrome.cast.media.$Break$);
chrome.cast.media.$BreakClip$ = function($id$jscomp$46$$) {
  this.id = $id$jscomp$46$$;
  this.vastAdsRequest = this.customData = this.hlsSegmentFormat = this.clickThroughUrl = this.posterUrl = this.whenSkippable = this.duration = this.title = this.contentType = this.contentUrl = this.contentId = void 0;
};
$goog$exportSymbol$$("chrome.cast.media.BreakClip", chrome.cast.media.$BreakClip$);
chrome.cast.media.$VastAdsRequest$ = function() {
  this.adsResponse = this.adTagUrl = void 0;
};
$goog$exportSymbol$$("chrome.cast.media.VastAdsRequest", chrome.cast.media.$VastAdsRequest$);
chrome.cast.media.$BreakStatus$ = function() {
  this.whenSkippable = this.breakClipId = this.breakId = this.currentBreakClipTime = this.currentBreakTime = void 0;
};
$goog$exportSymbol$$("chrome.cast.media.BreakStatus", chrome.cast.media.$BreakStatus$);
chrome.cast.media.$LiveSeekableRange$ = function($start$jscomp$14$$, $end$jscomp$8$$, $isMovingWindow$$, $isLiveDone$$) {
  this.start = $start$jscomp$14$$;
  this.end = $end$jscomp$8$$;
  this.isMovingWindow = $isMovingWindow$$;
  this.isLiveDone = $isLiveDone$$;
};
$goog$exportSymbol$$("chrome.cast.media.LiveSeekableRange", chrome.cast.media.$LiveSeekableRange$);
chrome.cast.media.$QueueData$ = function($id$jscomp$47$$, $name$jscomp$85$$, $description$jscomp$4$$, $repeatMode$$, $items$jscomp$2$$, $startIndex$$, $startTime$jscomp$7$$) {
  this.id = $id$jscomp$47$$;
  this.queueType = this.entity = void 0;
  this.name = $name$jscomp$85$$;
  this.description = $description$jscomp$4$$;
  this.repeatMode = $repeatMode$$;
  this.shuffle = !1;
  this.items = $items$jscomp$2$$;
  this.startIndex = $startIndex$$;
  this.startTime = $startTime$jscomp$7$$;
  this.containerMetadata = void 0;
};
$goog$exportSymbol$$("chrome.cast.media.QueueData", chrome.cast.media.$QueueData$);
chrome.cast.media.$UserActionState$ = function($userAction$$) {
  this.userAction = $userAction$$;
  this.customData = void 0;
};
$goog$exportSymbol$$("chrome.cast.media.UserActionState", chrome.cast.media.$UserActionState$);
chrome.cast.media.$VideoInformation$ = function($width$jscomp$26$$, $height$jscomp$25$$, $hdrType$$) {
  this.width = $width$jscomp$26$$;
  this.height = $height$jscomp$25$$;
  this.hdrType = $hdrType$$;
};
$goog$exportSymbol$$("chrome.cast.media.VideoInformation", chrome.cast.media.$VideoInformation$);
chrome.cast.media.$Media$ = function($sessionId$jscomp$5$$, $mediaSessionId$$) {
  this.sessionId = $sessionId$jscomp$5$$;
  this.mediaSessionId = $mediaSessionId$$;
  this.media = null;
  this.videoInfo = this.queueData = void 0;
  this.playbackRate = 1.0;
  this.playerState = chrome.cast.media.$PlayerState$.IDLE;
  this.currentTime = 0.0;
  this.$b$ = -1;
  this.supportedMediaCommands = [];
  this.volume = new chrome.cast.Volume;
  this.items = this.preloadedItemId = this.loadingItemId = this.currentItemId = this.customData = this.activeTrackIds = this.idleReason = null;
  this.repeatMode = chrome.cast.media.$RepeatMode$.OFF;
  this.breakStatus = void 0;
  this.$f$ = !1;
  this.$c$ = [];
  this.liveSeekableRange = void 0;
};
$goog$exportSymbol$$("chrome.cast.media.Media", chrome.cast.media.$Media$);
chrome.cast.media.$Media$.prototype.$getStatus$ = function($getStatusRequest$$, $successCallback$jscomp$32$$, $errorCallback$jscomp$31$$) {
  $getStatusRequest$$ || ($getStatusRequest$$ = new chrome.cast.media.$GetStatusRequest$);
  $mr$cast$ApiInterface$instance$$.$b$(this, "MEDIA_GET_STATUS", $getStatusRequest$$, $successCallback$jscomp$32$$, $errorCallback$jscomp$31$$, chrome.cast.media.timeout.$getStatus$);
};
chrome.cast.media.$Media$.prototype.getStatus = chrome.cast.media.$Media$.prototype.$getStatus$;
chrome.cast.media.$Media$.prototype.play = function($playRequest$$, $successCallback$jscomp$33$$, $errorCallback$jscomp$32$$) {
  this.$playWithContext$($goog$asserts$assert$$($mr$cast$ApiInterface$instance$$), $playRequest$$, $successCallback$jscomp$33$$, $errorCallback$jscomp$32$$);
};
chrome.cast.media.$Media$.prototype.play = chrome.cast.media.$Media$.prototype.play;
chrome.cast.media.$Media$.prototype.$playWithContext$ = function($context$jscomp$1$$, $playRequest$jscomp$1$$, $successCallback$jscomp$34$$, $errorCallback$jscomp$33$$) {
  $playRequest$jscomp$1$$ || ($playRequest$jscomp$1$$ = new chrome.cast.media.$PlayRequest$);
  $context$jscomp$1$$.$b$(this, "PLAY", $playRequest$jscomp$1$$, $successCallback$jscomp$34$$, $errorCallback$jscomp$33$$, chrome.cast.media.timeout.play);
};
chrome.cast.media.$Media$.prototype.playWithContext = chrome.cast.media.$Media$.prototype.$playWithContext$;
chrome.cast.media.$Media$.prototype.pause = function($pauseRequest$$, $successCallback$jscomp$35$$, $errorCallback$jscomp$34$$) {
  this.$pauseWithContext$($goog$asserts$assert$$($mr$cast$ApiInterface$instance$$), $pauseRequest$$, $successCallback$jscomp$35$$, $errorCallback$jscomp$34$$);
};
chrome.cast.media.$Media$.prototype.pause = chrome.cast.media.$Media$.prototype.pause;
chrome.cast.media.$Media$.prototype.$pauseWithContext$ = function($context$jscomp$2$$, $pauseRequest$jscomp$1$$, $successCallback$jscomp$36$$, $errorCallback$jscomp$35$$) {
  $pauseRequest$jscomp$1$$ || ($pauseRequest$jscomp$1$$ = new chrome.cast.media.$PauseRequest$);
  $context$jscomp$2$$.$b$(this, "PAUSE", $pauseRequest$jscomp$1$$, $successCallback$jscomp$36$$, $errorCallback$jscomp$35$$, chrome.cast.media.timeout.pause);
};
chrome.cast.media.$Media$.prototype.pauseWithContext = chrome.cast.media.$Media$.prototype.$pauseWithContext$;
chrome.cast.media.$Media$.prototype.seek = function($seekRequest$$, $successCallback$jscomp$37$$, $errorCallback$jscomp$36$$) {
  $mr$cast$ApiInterface$instance$$.$b$(this, "SEEK", $seekRequest$$, $successCallback$jscomp$37$$, $errorCallback$jscomp$36$$, chrome.cast.media.timeout.seek);
};
chrome.cast.media.$Media$.prototype.seek = chrome.cast.media.$Media$.prototype.seek;
chrome.cast.media.$Media$.prototype.stop = function($stopRequest$$, $successCallback$jscomp$38$$, $errorCallback$jscomp$37$$) {
  $stopRequest$$ || ($stopRequest$$ = new chrome.cast.media.$StopRequest$);
  $mr$cast$ApiInterface$instance$$.$b$(this, "STOP_MEDIA", $stopRequest$$, $successCallback$jscomp$38$$, $errorCallback$jscomp$37$$, chrome.cast.media.timeout.stop);
};
chrome.cast.media.$Media$.prototype.stop = chrome.cast.media.$Media$.prototype.stop;
chrome.cast.media.$Media$.prototype.$setVolume$ = function($volumeRequest$$, $successCallback$jscomp$39$$, $errorCallback$jscomp$38$$) {
  $mr$cast$ApiInterface$instance$$.$b$(this, "MEDIA_SET_VOLUME", $volumeRequest$$, $successCallback$jscomp$39$$, $errorCallback$jscomp$38$$, chrome.cast.media.timeout.$setVolume$);
};
chrome.cast.media.$Media$.prototype.setVolume = chrome.cast.media.$Media$.prototype.$setVolume$;
chrome.cast.media.$Media$.prototype.$editTracksInfo$ = function($editTracksInfoRequest$$, $successCallback$jscomp$40$$, $errorCallback$jscomp$39$$) {
  $mr$cast$ApiInterface$instance$$.$b$(this, "EDIT_TRACKS_INFO", $editTracksInfoRequest$$, $successCallback$jscomp$40$$, $errorCallback$jscomp$39$$, chrome.cast.media.timeout.$editTracksInfo$);
};
chrome.cast.media.$Media$.prototype.editTracksInfo = chrome.cast.media.$Media$.prototype.$editTracksInfo$;
chrome.cast.media.$Media$.prototype.$queueInsertItems$ = function($queueInsertItemsRequest$$, $successCallback$jscomp$41$$, $errorCallback$jscomp$40$$) {
  $mr$cast$ApiInterface$instance$$.$b$(this, "QUEUE_INSERT", $queueInsertItemsRequest$$, $successCallback$jscomp$41$$, $errorCallback$jscomp$40$$, chrome.cast.media.timeout.$queue$);
};
chrome.cast.media.$Media$.prototype.queueInsertItems = chrome.cast.media.$Media$.prototype.$queueInsertItems$;
chrome.cast.media.$Media$.prototype.$queueAppendItem$ = function($item$jscomp$2$$, $successCallback$jscomp$42$$, $errorCallback$jscomp$41$$) {
  $mr$cast$ApiInterface$instance$$.$b$(this, "QUEUE_INSERT", new chrome.cast.media.$QueueInsertItemsRequest$([$item$jscomp$2$$]), $successCallback$jscomp$42$$, $errorCallback$jscomp$41$$, chrome.cast.media.timeout.$queue$);
};
chrome.cast.media.$Media$.prototype.queueAppendItem = chrome.cast.media.$Media$.prototype.$queueAppendItem$;
chrome.cast.media.$Media$.prototype.$queueUpdateItems$ = function($queueUpdateItemsRequest$$, $successCallback$jscomp$43$$, $errorCallback$jscomp$42$$) {
  $mr$cast$ApiInterface$instance$$.$b$(this, "QUEUE_UPDATE", $queueUpdateItemsRequest$$, $successCallback$jscomp$43$$, $errorCallback$jscomp$42$$, chrome.cast.media.timeout.$queue$);
};
chrome.cast.media.$Media$.prototype.queueUpdateItems = chrome.cast.media.$Media$.prototype.$queueUpdateItems$;
chrome.cast.media.$Media$.prototype.$queuePrev$ = function($successCallback$jscomp$44$$, $errorCallback$jscomp$43$$) {
  var $queueJumpRequest$$ = new chrome.cast.media.$QueueJumpRequest$;
  $queueJumpRequest$$.jump = -1;
  $mr$cast$ApiInterface$instance$$.$b$(this, "QUEUE_UPDATE", $queueJumpRequest$$, $successCallback$jscomp$44$$, $errorCallback$jscomp$43$$, chrome.cast.media.timeout.$queue$);
};
chrome.cast.media.$Media$.prototype.queuePrev = chrome.cast.media.$Media$.prototype.$queuePrev$;
chrome.cast.media.$Media$.prototype.$queueNext$ = function($successCallback$jscomp$45$$, $errorCallback$jscomp$44$$) {
  var $queueJumpRequest$jscomp$1$$ = new chrome.cast.media.$QueueJumpRequest$;
  $queueJumpRequest$jscomp$1$$.jump = 1;
  $mr$cast$ApiInterface$instance$$.$b$(this, "QUEUE_UPDATE", $queueJumpRequest$jscomp$1$$, $successCallback$jscomp$45$$, $errorCallback$jscomp$44$$, chrome.cast.media.timeout.$queue$);
};
chrome.cast.media.$Media$.prototype.queueNext = chrome.cast.media.$Media$.prototype.$queueNext$;
chrome.cast.media.$Media$.prototype.$queueJumpToItem$ = function($itemId$$, $successCallback$jscomp$46$$, $errorCallback$jscomp$45$$) {
  if (!(0 > $JSCompiler_StaticMethods_getIndexOfItem_$$(this, $itemId$$))) {
    var $queueJumpRequest$jscomp$2$$ = new chrome.cast.media.$QueueJumpRequest$;
    $queueJumpRequest$jscomp$2$$.currentItemId = $itemId$$;
    $mr$cast$ApiInterface$instance$$.$b$(this, "QUEUE_UPDATE", $queueJumpRequest$jscomp$2$$, $successCallback$jscomp$46$$, $errorCallback$jscomp$45$$, chrome.cast.media.timeout.$queue$);
  }
};
chrome.cast.media.$Media$.prototype.queueJumpToItem = chrome.cast.media.$Media$.prototype.$queueJumpToItem$;
chrome.cast.media.$Media$.prototype.$queueSetRepeatMode$ = function($repeatMode$jscomp$1$$, $successCallback$jscomp$47$$, $errorCallback$jscomp$46$$) {
  var $queueSetPropertiesRequest$$ = new chrome.cast.media.$QueueSetPropertiesRequest$;
  $queueSetPropertiesRequest$$.repeatMode = $repeatMode$jscomp$1$$;
  $mr$cast$ApiInterface$instance$$.$b$(this, "QUEUE_UPDATE", $queueSetPropertiesRequest$$, $successCallback$jscomp$47$$, $errorCallback$jscomp$46$$, chrome.cast.media.timeout.$queue$);
};
chrome.cast.media.$Media$.prototype.queueSetRepeatMode = chrome.cast.media.$Media$.prototype.$queueSetRepeatMode$;
chrome.cast.media.$Media$.prototype.$queueRemoveItems$ = function($queueRemoveItemsRequest$$, $successCallback$jscomp$48$$, $errorCallback$jscomp$47$$) {
  $mr$cast$ApiInterface$instance$$.$b$(this, "QUEUE_REMOVE", $queueRemoveItemsRequest$$, $successCallback$jscomp$48$$, $errorCallback$jscomp$47$$, chrome.cast.media.timeout.$queue$);
};
chrome.cast.media.$Media$.prototype.queueRemoveItems = chrome.cast.media.$Media$.prototype.$queueRemoveItems$;
chrome.cast.media.$Media$.prototype.$queueRemoveItem$ = function($itemId$jscomp$1$$, $successCallback$jscomp$49$$, $errorCallback$jscomp$48$$) {
  0 > $JSCompiler_StaticMethods_getIndexOfItem_$$(this, $itemId$jscomp$1$$) || $mr$cast$ApiInterface$instance$$.$b$(this, "QUEUE_REMOVE", new chrome.cast.media.$QueueRemoveItemsRequest$([$itemId$jscomp$1$$]), $successCallback$jscomp$49$$, $errorCallback$jscomp$48$$, chrome.cast.media.timeout.$queue$);
};
chrome.cast.media.$Media$.prototype.queueRemoveItem = chrome.cast.media.$Media$.prototype.$queueRemoveItem$;
chrome.cast.media.$Media$.prototype.$queueReorderItems$ = function($queueReorderItemsRequest$$, $successCallback$jscomp$50$$, $errorCallback$jscomp$49$$) {
  $mr$cast$ApiInterface$instance$$.$b$(this, "QUEUE_REORDER", $queueReorderItemsRequest$$, $successCallback$jscomp$50$$, $errorCallback$jscomp$49$$, chrome.cast.media.timeout.$queue$);
};
chrome.cast.media.$Media$.prototype.queueReorderItems = chrome.cast.media.$Media$.prototype.$queueReorderItems$;
chrome.cast.media.$Media$.prototype.$queueMoveItemToNewIndex$ = function($itemId$jscomp$2_queueReorderRequest$$, $indexToInsertBefore_newIndex$$, $successCallback$jscomp$51$$, $errorCallback$jscomp$50$$) {
  var $index$jscomp$78$$ = $JSCompiler_StaticMethods_getIndexOfItem_$$(this, $itemId$jscomp$2_queueReorderRequest$$);
  if (!(0 > $index$jscomp$78$$)) {
    if (0 > $indexToInsertBefore_newIndex$$) {
      $errorCallback$jscomp$50$$ && $errorCallback$jscomp$50$$(new chrome.cast.Error(chrome.cast.$ErrorCode$.INVALID_PARAMETER));
    } else {
      if ($index$jscomp$78$$ == $indexToInsertBefore_newIndex$$) {
        $successCallback$jscomp$51$$ && $successCallback$jscomp$51$$();
      } else {
        var $itemToInsertBefore$$ = null;
        $indexToInsertBefore_newIndex$$ = $indexToInsertBefore_newIndex$$ > $index$jscomp$78$$ ? $indexToInsertBefore_newIndex$$ + 1 : $indexToInsertBefore_newIndex$$;
        $indexToInsertBefore_newIndex$$ < this.items.length && ($itemToInsertBefore$$ = this.items[$indexToInsertBefore_newIndex$$]);
        $itemId$jscomp$2_queueReorderRequest$$ = new chrome.cast.media.$QueueReorderItemsRequest$([$itemId$jscomp$2_queueReorderRequest$$]);
        $itemId$jscomp$2_queueReorderRequest$$.insertBefore = $itemToInsertBefore$$ ? $itemToInsertBefore$$.itemId : null;
        $mr$cast$ApiInterface$instance$$.$b$(this, "QUEUE_REORDER", $itemId$jscomp$2_queueReorderRequest$$, $successCallback$jscomp$51$$, $errorCallback$jscomp$50$$, chrome.cast.media.timeout.$queue$);
      }
    }
  }
};
chrome.cast.media.$Media$.prototype.queueMoveItemToNewIndex = chrome.cast.media.$Media$.prototype.$queueMoveItemToNewIndex$;
chrome.cast.media.$Media$.prototype.$supportsCommand$ = function($command$jscomp$1$$) {
  return -1 < this.supportedMediaCommands.indexOf($command$jscomp$1$$);
};
chrome.cast.media.$Media$.prototype.supportsCommand = chrome.cast.media.$Media$.prototype.$supportsCommand$;
chrome.cast.media.$Media$.prototype.$getEstimatedTime$ = function() {
  if (this.playerState == chrome.cast.media.$PlayerState$.PLAYING && 0 <= this.$b$) {
    var $elapsedSeconds_result$jscomp$14$$ = ($goog$now$$() - this.$b$) / 1000;
    $elapsedSeconds_result$jscomp$14$$ = this.currentTime + this.playbackRate * $elapsedSeconds_result$jscomp$14$$;
    this.media && null != this.media.duration && $elapsedSeconds_result$jscomp$14$$ > this.media.duration && -1 != this.media.duration && ($elapsedSeconds_result$jscomp$14$$ = this.media.duration);
    0 > $elapsedSeconds_result$jscomp$14$$ && ($elapsedSeconds_result$jscomp$14$$ = 0);
    return $elapsedSeconds_result$jscomp$14$$;
  }
  return this.currentTime;
};
chrome.cast.media.$Media$.prototype.getEstimatedTime = chrome.cast.media.$Media$.prototype.$getEstimatedTime$;
chrome.cast.media.$Media$.prototype.$getEstimatedBreakTime$ = function() {
  if (this.breakStatus && void 0 !== this.breakStatus.currentBreakTime) {
    return this.playerState == chrome.cast.media.$PlayerState$.PLAYING && 0 <= this.$b$ ? this.breakStatus.currentBreakTime + ($goog$now$$() - this.$b$) / 1000 : this.breakStatus.currentBreakTime;
  }
};
chrome.cast.media.$Media$.prototype.getEstimatedBreakTime = chrome.cast.media.$Media$.prototype.$getEstimatedBreakTime$;
chrome.cast.media.$Media$.prototype.$getEstimatedBreakClipTime$ = function() {
  if (this.breakStatus && void 0 !== this.breakStatus.currentBreakClipTime) {
    return this.playerState == chrome.cast.media.$PlayerState$.PLAYING && 0 <= this.$b$ ? this.breakStatus.currentBreakClipTime + ($goog$now$$() - this.$b$) / 1000 : this.breakStatus.currentBreakClipTime;
  }
};
chrome.cast.media.$Media$.prototype.getEstimatedBreakClipTime = chrome.cast.media.$Media$.prototype.$getEstimatedBreakClipTime$;
chrome.cast.media.$Media$.prototype.$getEstimatedLiveSeekableRange$ = function() {
  if (this.liveSeekableRange && void 0 !== this.liveSeekableRange.start && void 0 !== this.liveSeekableRange.end) {
    if (this.playerState == chrome.cast.media.$PlayerState$.PLAYING && 0 <= this.$b$) {
      var $elapsedSeconds$jscomp$1$$ = ($goog$now$$() - this.$b$) / 1000, $liveSeekableRange$$ = new chrome.cast.media.$LiveSeekableRange$;
      $liveSeekableRange$$.isMovingWindow = this.liveSeekableRange.isMovingWindow;
      $liveSeekableRange$$.isLiveDone = this.liveSeekableRange.isLiveDone;
      $liveSeekableRange$$.start = $liveSeekableRange$$.isMovingWindow ? this.liveSeekableRange.start + $elapsedSeconds$jscomp$1$$ : this.liveSeekableRange.start;
      $liveSeekableRange$$.end = $liveSeekableRange$$.isLiveDone ? this.liveSeekableRange.end : this.liveSeekableRange.end + $elapsedSeconds$jscomp$1$$;
      return $liveSeekableRange$$;
    }
    return this.liveSeekableRange;
  }
};
chrome.cast.media.$Media$.prototype.getEstimatedLiveSeekableRange = chrome.cast.media.$Media$.prototype.$getEstimatedLiveSeekableRange$;
chrome.cast.media.$Media$.prototype.$addUpdateListener$ = function($listener$jscomp$80$$) {
  this.$addUpdateListenerWithContext$($goog$asserts$assert$$($mr$cast$ApiInterface$instance$$), $listener$jscomp$80$$);
};
chrome.cast.media.$Media$.prototype.addUpdateListener = chrome.cast.media.$Media$.prototype.$addUpdateListener$;
chrome.cast.media.$Media$.prototype.$addUpdateListenerWithContext$ = function($context$jscomp$3$$, $listener$jscomp$81$$) {
  $context$jscomp$3$$.$addMediaUpdateListener$(this, $listener$jscomp$81$$);
};
chrome.cast.media.$Media$.prototype.addUpdateListenerWithContext = chrome.cast.media.$Media$.prototype.$addUpdateListenerWithContext$;
chrome.cast.media.$Media$.prototype.$removeUpdateListener$ = function($listener$jscomp$82$$) {
  this.$removeUpdateListenerWithContext$($goog$asserts$assert$$($mr$cast$ApiInterface$instance$$), $listener$jscomp$82$$);
};
chrome.cast.media.$Media$.prototype.removeUpdateListener = chrome.cast.media.$Media$.prototype.$removeUpdateListener$;
chrome.cast.media.$Media$.prototype.$removeUpdateListenerWithContext$ = function($context$jscomp$4$$, $listener$jscomp$83$$) {
  $mr$cast$ApiInterface$instance$$.$removeMediaUpdateListener$(this, $listener$jscomp$83$$);
};
chrome.cast.media.$Media$.prototype.removeUpdateListenerWithContext = chrome.cast.media.$Media$.prototype.$removeUpdateListenerWithContext$;
var $JSCompiler_StaticMethods_getIndexOfItem_$$ = function($JSCompiler_StaticMethods_getIndexOfItem_$self$$, $itemId$jscomp$3$$) {
  return $goog$array$findIndex$$($JSCompiler_StaticMethods_getIndexOfItem_$self$$.items, function($elem$jscomp$5$$) {
    return $elem$jscomp$5$$.itemId == $itemId$jscomp$3$$;
  });
};
var $mr$cast$ApiInterface$instance$$ = null;
var $mr$cast$AppMessage$$ = function($sessionId$jscomp$15$$, $namespaceName$$, $message$jscomp$42$$) {
  this.sessionId = $sessionId$jscomp$15$$;
  this.namespaceName = $namespaceName$$;
  this.message = $message$jscomp$42$$;
};
var $mr$cast$SetVolumeRequest$$ = function($volume$jscomp$1$$, $opt_expectedVolume$$) {
  this.type = "SET_VOLUME";
  this.requestId = 0;
  this.volume = $volume$jscomp$1$$;
  this.expectedVolume = $opt_expectedVolume$$ || null;
};
var $mr$cast$StopSessionRequest$$ = function($opt_sessionId$$) {
  this.type = "STOP";
  this.requestId = 0;
  this.sessionId = $opt_sessionId$$ || null;
};
chrome.cast.$Session$ = function($sessionId$jscomp$16$$, $appId$jscomp$4$$, $displayName$$, $appImages$jscomp$1$$, $receiver$jscomp$1$$) {
  this.sessionId = $sessionId$jscomp$16$$;
  this.appId = $appId$jscomp$4$$;
  this.displayName = $displayName$$;
  this.statusText = null;
  this.appImages = $appImages$jscomp$1$$;
  this.receiver = $receiver$jscomp$1$$;
  this.senderApps = [];
  this.namespaces = [];
  this.media = [];
  this.status = chrome.cast.$SessionStatus$.CONNECTED;
  this.transportId = "";
};
$goog$exportSymbol$$("chrome.cast.Session", chrome.cast.$Session$);
chrome.cast.$Session$.prototype.$setReceiverVolumeLevel$ = function($newLevel$$, $successCallback$jscomp$60$$, $errorCallback$jscomp$59$$) {
  this.$setReceiverVolumeLevelWithContext$($goog$asserts$assert$$($mr$cast$ApiInterface$instance$$), $newLevel$$, $successCallback$jscomp$60$$, $errorCallback$jscomp$59$$);
};
chrome.cast.$Session$.prototype.setReceiverVolumeLevel = chrome.cast.$Session$.prototype.$setReceiverVolumeLevel$;
chrome.cast.$Session$.prototype.$setReceiverVolumeLevelWithContext$ = function($context$jscomp$5$$, $newLevel$jscomp$1_volumeRequest$jscomp$2$$, $successCallback$jscomp$61$$, $errorCallback$jscomp$60$$) {
  $newLevel$jscomp$1_volumeRequest$jscomp$2$$ = new $mr$cast$SetVolumeRequest$$(new chrome.cast.Volume($newLevel$jscomp$1_volumeRequest$jscomp$2$$, null), this.receiver.volume);
  $context$jscomp$5$$.setReceiverVolume(this.sessionId, $newLevel$jscomp$1_volumeRequest$jscomp$2$$, $successCallback$jscomp$61$$, $errorCallback$jscomp$60$$);
};
chrome.cast.$Session$.prototype.setReceiverVolumeLevelWithContext = chrome.cast.$Session$.prototype.$setReceiverVolumeLevelWithContext$;
chrome.cast.$Session$.prototype.$setReceiverMuted$ = function($muted$$, $successCallback$jscomp$62$$, $errorCallback$jscomp$61$$) {
  this.$setReceiverMutedWithContext$($goog$asserts$assert$$($mr$cast$ApiInterface$instance$$), $muted$$, $successCallback$jscomp$62$$, $errorCallback$jscomp$61$$);
};
chrome.cast.$Session$.prototype.setReceiverMuted = chrome.cast.$Session$.prototype.$setReceiverMuted$;
chrome.cast.$Session$.prototype.$setReceiverMutedWithContext$ = function($context$jscomp$6_volumeRequest$jscomp$3$$, $muted$jscomp$1$$, $successCallback$jscomp$63$$, $errorCallback$jscomp$62$$) {
  $context$jscomp$6_volumeRequest$jscomp$3$$ = new $mr$cast$SetVolumeRequest$$(new chrome.cast.Volume(null, $muted$jscomp$1$$), this.receiver.volume);
  $mr$cast$ApiInterface$instance$$.setReceiverVolume(this.sessionId, $context$jscomp$6_volumeRequest$jscomp$3$$, $successCallback$jscomp$63$$, $errorCallback$jscomp$62$$);
};
chrome.cast.$Session$.prototype.setReceiverMutedWithContext = chrome.cast.$Session$.prototype.$setReceiverMutedWithContext$;
chrome.cast.$Session$.prototype.$leave$ = function($successCallback$jscomp$64$$, $errorCallback$jscomp$63$$) {
  $mr$cast$ApiInterface$instance$$.leaveSession(this.sessionId, $successCallback$jscomp$64$$, $errorCallback$jscomp$63$$);
};
chrome.cast.$Session$.prototype.leave = chrome.cast.$Session$.prototype.$leave$;
chrome.cast.$Session$.prototype.stop = function($successCallback$jscomp$65$$, $errorCallback$jscomp$64$$) {
  this.$stopWithContext$($goog$asserts$assert$$($mr$cast$ApiInterface$instance$$), $successCallback$jscomp$65$$, $errorCallback$jscomp$64$$);
};
chrome.cast.$Session$.prototype.stop = chrome.cast.$Session$.prototype.stop;
chrome.cast.$Session$.prototype.$stopWithContext$ = function($context$jscomp$7$$, $successCallback$jscomp$66$$, $errorCallback$jscomp$65$$) {
  $context$jscomp$7$$.$sendApiRequest$(new $mr$cast$StopSessionRequest$$(this.sessionId), $successCallback$jscomp$66$$, $errorCallback$jscomp$65$$, chrome.cast.timeout.stopSession);
};
chrome.cast.$Session$.prototype.stopWithContext = chrome.cast.$Session$.prototype.$stopWithContext$;
chrome.cast.$Session$.prototype.sendMessage = function($namespace$jscomp$11$$, $message$jscomp$43$$, $successCallback$jscomp$67$$, $errorCallback$jscomp$66$$) {
  this.$sendMessageWithContext$($goog$asserts$assert$$($mr$cast$ApiInterface$instance$$), $namespace$jscomp$11$$, $message$jscomp$43$$, $successCallback$jscomp$67$$, $errorCallback$jscomp$66$$);
};
chrome.cast.$Session$.prototype.sendMessage = chrome.cast.$Session$.prototype.sendMessage;
chrome.cast.$Session$.prototype.$sendMessageWithContext$ = function($context$jscomp$8$$, $namespace$jscomp$12$$, $message$jscomp$44$$, $successCallback$jscomp$68$$, $errorCallback$jscomp$67$$) {
  $context$jscomp$8$$.$sendAppRequest$(new $mr$cast$AppMessage$$(this.sessionId, $namespace$jscomp$12$$, $message$jscomp$44$$), $successCallback$jscomp$68$$, $errorCallback$jscomp$67$$);
};
chrome.cast.$Session$.prototype.sendMessageWithContext = chrome.cast.$Session$.prototype.$sendMessageWithContext$;
chrome.cast.$Session$.prototype.$addUpdateListener$ = function($listener$jscomp$94$$) {
  this.$addUpdateListenerWithContext$($goog$asserts$assert$$($mr$cast$ApiInterface$instance$$), $listener$jscomp$94$$);
};
chrome.cast.$Session$.prototype.addUpdateListener = chrome.cast.$Session$.prototype.$addUpdateListener$;
chrome.cast.$Session$.prototype.$addUpdateListenerWithContext$ = function($context$jscomp$9$$, $listener$jscomp$95$$) {
  $context$jscomp$9$$.$addSessionUpdateListener$(this.sessionId, $listener$jscomp$95$$);
};
chrome.cast.$Session$.prototype.addUpdateListenerWithContext = chrome.cast.$Session$.prototype.$addUpdateListenerWithContext$;
chrome.cast.$Session$.prototype.$removeUpdateListener$ = function($listener$jscomp$96$$) {
  this.$removeUpdateListenerWithContext$($goog$asserts$assert$$($mr$cast$ApiInterface$instance$$), $listener$jscomp$96$$);
};
chrome.cast.$Session$.prototype.removeUpdateListener = chrome.cast.$Session$.prototype.$removeUpdateListener$;
chrome.cast.$Session$.prototype.$removeUpdateListenerWithContext$ = function($context$jscomp$10$$, $listener$jscomp$97$$) {
  $context$jscomp$10$$.$removeSessionUpdateListener$(this.sessionId, $listener$jscomp$97$$);
};
chrome.cast.$Session$.prototype.removeUpdateListenerWithContext = chrome.cast.$Session$.prototype.$removeUpdateListenerWithContext$;
chrome.cast.$Session$.prototype.$addMessageListener$ = function($namespace$jscomp$13$$, $listener$jscomp$98$$) {
  this.$addMessageListenerWithContext$($goog$asserts$assert$$($mr$cast$ApiInterface$instance$$), $namespace$jscomp$13$$, $listener$jscomp$98$$);
};
chrome.cast.$Session$.prototype.addMessageListener = chrome.cast.$Session$.prototype.$addMessageListener$;
chrome.cast.$Session$.prototype.$addMessageListenerWithContext$ = function($context$jscomp$11$$, $namespace$jscomp$14$$, $listener$jscomp$99$$) {
  $context$jscomp$11$$.$addAppMessageListener$(this.sessionId, $namespace$jscomp$14$$, $listener$jscomp$99$$);
};
chrome.cast.$Session$.prototype.addMessageListenerWithContext = chrome.cast.$Session$.prototype.$addMessageListenerWithContext$;
chrome.cast.$Session$.prototype.$addMediaListener$ = function($listener$jscomp$100$$) {
  this.$addMediaListenerWithContext$($goog$asserts$assert$$($mr$cast$ApiInterface$instance$$), $listener$jscomp$100$$);
};
chrome.cast.$Session$.prototype.addMediaListener = chrome.cast.$Session$.prototype.$addMediaListener$;
chrome.cast.$Session$.prototype.$addMediaListenerWithContext$ = function($context$jscomp$12$$, $listener$jscomp$101$$) {
  $context$jscomp$12$$.$addMediaListener$(this.sessionId, $listener$jscomp$101$$);
};
chrome.cast.$Session$.prototype.addMediaListenerWithContext = chrome.cast.$Session$.prototype.$addMediaListenerWithContext$;
chrome.cast.$Session$.prototype.$removeMediaListener$ = function($listener$jscomp$102$$) {
  this.$removeMediaListenerWithContext$($goog$asserts$assert$$($mr$cast$ApiInterface$instance$$), $listener$jscomp$102$$);
};
chrome.cast.$Session$.prototype.removeMediaListener = chrome.cast.$Session$.prototype.$removeMediaListener$;
chrome.cast.$Session$.prototype.$removeMediaListenerWithContext$ = function($context$jscomp$13$$, $listener$jscomp$103$$) {
  $context$jscomp$13$$.$removeMediaListener$(this.sessionId, $listener$jscomp$103$$);
};
chrome.cast.$Session$.prototype.removeMediaListenerWithContext = chrome.cast.$Session$.prototype.$removeMediaListenerWithContext$;
chrome.cast.$Session$.prototype.$removeMessageListener$ = function($namespace$jscomp$15$$, $listener$jscomp$104$$) {
  this.$removeMessageListenerWithContext$($goog$asserts$assert$$($mr$cast$ApiInterface$instance$$), $namespace$jscomp$15$$, $listener$jscomp$104$$);
};
chrome.cast.$Session$.prototype.removeMessageListener = chrome.cast.$Session$.prototype.$removeMessageListener$;
chrome.cast.$Session$.prototype.$removeMessageListenerWithContext$ = function($context$jscomp$14$$, $namespace$jscomp$16$$, $listener$jscomp$105$$) {
  $context$jscomp$14$$.$removeAppMessageListener$(this.sessionId, $namespace$jscomp$16$$, $listener$jscomp$105$$);
};
chrome.cast.$Session$.prototype.removeMessageListenerWithContext = chrome.cast.$Session$.prototype.$removeMessageListenerWithContext$;
chrome.cast.$Session$.prototype.$loadMedia$ = function($loadRequest$$, $successCallback$jscomp$69$$, $errorCallback$jscomp$68$$) {
  $loadRequest$$.sessionId = this.sessionId;
  $mr$cast$ApiInterface$instance$$.$B$($loadRequest$$, "LOAD", $successCallback$jscomp$69$$, $errorCallback$jscomp$68$$);
};
chrome.cast.$Session$.prototype.loadMedia = chrome.cast.$Session$.prototype.$loadMedia$;
chrome.cast.$Session$.prototype.$queueLoad$ = function($queueLoadRequest$$, $successCallback$jscomp$70$$, $errorCallback$jscomp$69$$) {
  $queueLoadRequest$$.sessionId = this.sessionId;
  $mr$cast$ApiInterface$instance$$.$B$($queueLoadRequest$$, "QUEUE_LOAD", $successCallback$jscomp$70$$, $errorCallback$jscomp$69$$);
};
chrome.cast.$Session$.prototype.queueLoad = chrome.cast.$Session$.prototype.$queueLoad$;
var $goog$iter$StopIteration$$ = "StopIteration" in $goog$global$$ ? $goog$global$$.StopIteration : {message:"StopIteration", stack:""}, $goog$iter$Iterator$$ = function() {
};
$goog$iter$Iterator$$.prototype.next = function() {
  throw $goog$iter$StopIteration$$;
};
$goog$iter$Iterator$$.prototype.$__iterator__$ = function() {
  return this;
};
var $goog$iter$toIterator$$ = function($iterable$jscomp$3$$) {
  if ($iterable$jscomp$3$$ instanceof $goog$iter$Iterator$$) {
    return $iterable$jscomp$3$$;
  }
  if ("function" == typeof $iterable$jscomp$3$$.$__iterator__$) {
    return $iterable$jscomp$3$$.$__iterator__$(!1);
  }
  if ($goog$isArrayLike$$($iterable$jscomp$3$$)) {
    var $i$jscomp$79$$ = 0, $newIter$$ = new $goog$iter$Iterator$$;
    $newIter$$.next = function() {
      for (;;) {
        if ($i$jscomp$79$$ >= $iterable$jscomp$3$$.length) {
          throw $goog$iter$StopIteration$$;
        }
        if ($i$jscomp$79$$ in $iterable$jscomp$3$$) {
          return $iterable$jscomp$3$$[$i$jscomp$79$$++];
        }
        $i$jscomp$79$$++;
      }
    };
    return $newIter$$;
  }
  throw Error("Not implemented");
}, $goog$iter$forEach$$ = function($iterable$jscomp$4$$, $f$jscomp$39$$) {
  if ($goog$isArrayLike$$($iterable$jscomp$4$$)) {
    try {
      $goog$array$forEach$$($iterable$jscomp$4$$, $f$jscomp$39$$, void 0);
    } catch ($ex$jscomp$2$$) {
      if ($ex$jscomp$2$$ !== $goog$iter$StopIteration$$) {
        throw $ex$jscomp$2$$;
      }
    }
  } else {
    $iterable$jscomp$4$$ = $goog$iter$toIterator$$($iterable$jscomp$4$$);
    try {
      for (;;) {
        $f$jscomp$39$$.call(void 0, $iterable$jscomp$4$$.next(), void 0, $iterable$jscomp$4$$);
      }
    } catch ($ex$4$$) {
      if ($ex$4$$ !== $goog$iter$StopIteration$$) {
        throw $ex$4$$;
      }
    }
  }
};
var $goog$structs$Map$$ = function($opt_map$$, $var_args$jscomp$89$$) {
  this.$b$ = {};
  this.$keys_$ = [];
  this.$f$ = this.$c$ = 0;
  var $argLength$jscomp$2_keys$jscomp$inline_292$$ = arguments.length;
  if (1 < $argLength$jscomp$2_keys$jscomp$inline_292$$) {
    if ($argLength$jscomp$2_keys$jscomp$inline_292$$ % 2) {
      throw Error("Uneven number of arguments");
    }
    for (var $i$jscomp$81_i$jscomp$inline_293_key$jscomp$inline_294$$ = 0; $i$jscomp$81_i$jscomp$inline_293_key$jscomp$inline_294$$ < $argLength$jscomp$2_keys$jscomp$inline_292$$; $i$jscomp$81_i$jscomp$inline_293_key$jscomp$inline_294$$ += 2) {
      this.set(arguments[$i$jscomp$81_i$jscomp$inline_293_key$jscomp$inline_294$$], arguments[$i$jscomp$81_i$jscomp$inline_293_key$jscomp$inline_294$$ + 1]);
    }
  } else {
    if ($opt_map$$) {
      if ($opt_map$$ instanceof $goog$structs$Map$$) {
        for ($JSCompiler_StaticMethods_cleanupKeysArray_$$($opt_map$$), $argLength$jscomp$2_keys$jscomp$inline_292$$ = $opt_map$$.$keys_$.concat(), $i$jscomp$81_i$jscomp$inline_293_key$jscomp$inline_294$$ = 0; $i$jscomp$81_i$jscomp$inline_293_key$jscomp$inline_294$$ < $argLength$jscomp$2_keys$jscomp$inline_292$$.length; $i$jscomp$81_i$jscomp$inline_293_key$jscomp$inline_294$$++) {
          this.set($argLength$jscomp$2_keys$jscomp$inline_292$$[$i$jscomp$81_i$jscomp$inline_293_key$jscomp$inline_294$$], $opt_map$$.get($argLength$jscomp$2_keys$jscomp$inline_292$$[$i$jscomp$81_i$jscomp$inline_293_key$jscomp$inline_294$$]));
        }
      } else {
        for ($i$jscomp$81_i$jscomp$inline_293_key$jscomp$inline_294$$ in $opt_map$$) {
          this.set($i$jscomp$81_i$jscomp$inline_293_key$jscomp$inline_294$$, $opt_map$$[$i$jscomp$81_i$jscomp$inline_293_key$jscomp$inline_294$$]);
        }
      }
    }
  }
};
$goog$structs$Map$$.prototype.$getValues$ = function() {
  $JSCompiler_StaticMethods_cleanupKeysArray_$$(this);
  for (var $rv$jscomp$9$$ = [], $i$jscomp$82$$ = 0; $i$jscomp$82$$ < this.$keys_$.length; $i$jscomp$82$$++) {
    $rv$jscomp$9$$.push(this.$b$[this.$keys_$[$i$jscomp$82$$]]);
  }
  return $rv$jscomp$9$$;
};
$goog$structs$Map$$.prototype.clear = function() {
  this.$b$ = {};
  this.$f$ = this.$c$ = this.$keys_$.length = 0;
};
$goog$structs$Map$$.prototype.remove = function($key$jscomp$85$$) {
  return $goog$structs$Map$hasKey_$$(this.$b$, $key$jscomp$85$$) ? (delete this.$b$[$key$jscomp$85$$], this.$c$--, this.$f$++, this.$keys_$.length > 2 * this.$c$ && $JSCompiler_StaticMethods_cleanupKeysArray_$$(this), !0) : !1;
};
var $JSCompiler_StaticMethods_cleanupKeysArray_$$ = function($JSCompiler_StaticMethods_cleanupKeysArray_$self$$) {
  if ($JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$c$ != $JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$keys_$.length) {
    for (var $srcIndex$$ = 0, $destIndex$$ = 0; $srcIndex$$ < $JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$keys_$.length;) {
      var $key$jscomp$86$$ = $JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$keys_$[$srcIndex$$];
      $goog$structs$Map$hasKey_$$($JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$b$, $key$jscomp$86$$) && ($JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$keys_$[$destIndex$$++] = $key$jscomp$86$$);
      $srcIndex$$++;
    }
    $JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$keys_$.length = $destIndex$$;
  }
  if ($JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$c$ != $JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$keys_$.length) {
    var $seen$jscomp$2$$ = {};
    for ($destIndex$$ = $srcIndex$$ = 0; $srcIndex$$ < $JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$keys_$.length;) {
      $key$jscomp$86$$ = $JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$keys_$[$srcIndex$$], $goog$structs$Map$hasKey_$$($seen$jscomp$2$$, $key$jscomp$86$$) || ($JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$keys_$[$destIndex$$++] = $key$jscomp$86$$, $seen$jscomp$2$$[$key$jscomp$86$$] = 1), $srcIndex$$++;
    }
    $JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$keys_$.length = $destIndex$$;
  }
};
$goog$structs$Map$$.prototype.get = function($key$jscomp$87$$, $opt_val$jscomp$1$$) {
  return $goog$structs$Map$hasKey_$$(this.$b$, $key$jscomp$87$$) ? this.$b$[$key$jscomp$87$$] : $opt_val$jscomp$1$$;
};
$goog$structs$Map$$.prototype.set = function($key$jscomp$88$$, $value$jscomp$135$$) {
  $goog$structs$Map$hasKey_$$(this.$b$, $key$jscomp$88$$) || (this.$c$++, this.$keys_$.push($key$jscomp$88$$), this.$f$++);
  this.$b$[$key$jscomp$88$$] = $value$jscomp$135$$;
};
$goog$structs$Map$$.prototype.$__iterator__$ = function($opt_keys$jscomp$1$$) {
  $JSCompiler_StaticMethods_cleanupKeysArray_$$(this);
  var $i$jscomp$89$$ = 0, $version$jscomp$7$$ = this.$f$, $selfObj$jscomp$5$$ = this, $newIter$jscomp$5$$ = new $goog$iter$Iterator$$;
  $newIter$jscomp$5$$.next = function() {
    if ($version$jscomp$7$$ != $selfObj$jscomp$5$$.$f$) {
      throw Error("The map has changed since the iterator was created");
    }
    if ($i$jscomp$89$$ >= $selfObj$jscomp$5$$.$keys_$.length) {
      throw $goog$iter$StopIteration$$;
    }
    var $key$jscomp$93$$ = $selfObj$jscomp$5$$.$keys_$[$i$jscomp$89$$++];
    return $opt_keys$jscomp$1$$ ? $key$jscomp$93$$ : $selfObj$jscomp$5$$.$b$[$key$jscomp$93$$];
  };
  return $newIter$jscomp$5$$;
};
var $goog$structs$Map$hasKey_$$ = function($obj$jscomp$80$$, $key$jscomp$94$$) {
  return Object.prototype.hasOwnProperty.call($obj$jscomp$80$$, $key$jscomp$94$$);
};
var $mr$cast$PendingRequest$$ = function($requestId$jscomp$1$$, $timeoutMs$$) {
  this.requestId = $requestId$jscomp$1$$;
  this.$g$ = $timeoutMs$$;
  this.$timeoutId$ = null;
};
$mr$cast$PendingRequest$$.prototype.$c$ = function() {
};
var $mr$cast$PendingRequestsManager$$ = function() {
  this.$b$ = new $goog$structs$Map$$;
}, $JSCompiler_StaticMethods_addRequest$$ = function($JSCompiler_StaticMethods_addRequest$self$$, $request$jscomp$15$$) {
  $JSCompiler_StaticMethods_addRequest$self$$.$b$.set($request$jscomp$15$$.requestId, $request$jscomp$15$$);
  $request$jscomp$15$$.$timeoutId$ = setTimeout(function() {
    $JSCompiler_StaticMethods_addRequest$self$$.$b$.remove($request$jscomp$15$$.requestId);
    $request$jscomp$15$$.$c$();
  }, $request$jscomp$15$$.$g$);
}, $JSCompiler_StaticMethods_removeRequest$$ = function($JSCompiler_StaticMethods_removeRequest$self$$, $requestId$jscomp$2$$) {
  var $request$jscomp$16$$ = $JSCompiler_StaticMethods_removeRequest$self$$.$b$.get($requestId$jscomp$2$$);
  if (!$request$jscomp$16$$) {
    return null;
  }
  clearTimeout($request$jscomp$16$$.$timeoutId$);
  $JSCompiler_StaticMethods_removeRequest$self$$.$b$.remove($requestId$jscomp$2$$);
  return $request$jscomp$16$$;
};
var $mr$cast$ApiCallbackInfo$$ = function($sequenceNumber$$, $successCallback$jscomp$71$$, $errorCallback$jscomp$70$$, $opt_timeoutMillis$jscomp$2$$) {
  $mr$cast$PendingRequest$$.call(this, $sequenceNumber$$, $opt_timeoutMillis$jscomp$2$$ || 6E5);
  this.$f$ = $successCallback$jscomp$71$$;
  this.$b$ = $errorCallback$jscomp$70$$;
};
$$jscomp$inherits$$($mr$cast$ApiCallbackInfo$$, $mr$cast$PendingRequest$$);
$mr$cast$ApiCallbackInfo$$.prototype.$c$ = function() {
  this.$b$(new chrome.cast.Error(chrome.cast.$ErrorCode$.TIMEOUT));
};
var $mr$cast$InternalMessage$$ = function($type$jscomp$154$$, $message$jscomp$45$$, $opt_sequenceNumber$$, $opt_timeoutMillis$jscomp$3$$) {
  this.type = $type$jscomp$154$$;
  this.message = $message$jscomp$45$$;
  this.sequenceNumber = void 0 !== $opt_sequenceNumber$$ ? $opt_sequenceNumber$$ : -1;
  this.timeoutMillis = $opt_timeoutMillis$jscomp$3$$ || 0;
  this.clientId = "";
};
var $module$contents$mr$Assertions_AssertionError$$ = function($message$jscomp$46$$) {
  var $$jscomp$tmp$error$$ = Error.call(this);
  this.message = $$jscomp$tmp$error$$.message;
  "stack" in $$jscomp$tmp$error$$ && (this.stack = $$jscomp$tmp$error$$.stack);
  this.name = "AssertionError";
  this.message = void 0 === $message$jscomp$46$$ ? "" : $message$jscomp$46$$;
  Error.captureStackTrace ? Error.captureStackTrace(this, $module$contents$mr$Assertions_AssertionError$$) : this.stack = Error().stack;
};
$$jscomp$inherits$$($module$contents$mr$Assertions_AssertionError$$, Error);
var $mr$Logger$$ = function($name$jscomp$86$$) {
  this.$b$ = $name$jscomp$86$$;
}, $mr$Logger$getInstance$$ = function($name$jscomp$87$$) {
  var $instance$jscomp$1$$ = $mr$Logger$instances_$$.get($name$jscomp$87$$);
  $instance$jscomp$1$$ || ($instance$jscomp$1$$ = new $mr$Logger$$($name$jscomp$87$$), $mr$Logger$instances_$$.set($name$jscomp$87$$, $instance$jscomp$1$$));
  return $instance$jscomp$1$$;
};
$mr$Logger$$.prototype.log = function($level$jscomp$19$$, $message$jscomp$49$$, $exception$jscomp$2$$) {
  if (!(1 > $level$jscomp$19$$)) {
    "function" == typeof $message$jscomp$49$$ && ($message$jscomp$49$$ = $message$jscomp$49$$());
    if ("string" != typeof $message$jscomp$49$$) {
      throw new $module$contents$mr$Assertions_AssertionError$$("Expected message to be a string.");
    }
    var $record$jscomp$1$$ = {$logger$:this.$b$, level:$level$jscomp$19$$, time:Date.now(), message:$message$jscomp$49$$, $exception$:$exception$jscomp$2$$};
    $mr$Logger$handlers_$$.forEach(function($handler$jscomp$10$$) {
      return $handler$jscomp$10$$($record$jscomp$1$$);
    });
  }
};
$mr$Logger$$.prototype.error = function($message$jscomp$50$$, $exception$jscomp$3$$) {
  this.log(3, $message$jscomp$50$$, $exception$jscomp$3$$);
};
var $JSCompiler_StaticMethods_mr_Logger_prototype$info$$ = function($message$jscomp$52$$) {
  $mr$cast$Api$logger_$$.log(1, $message$jscomp$52$$, void 0);
}, $mr$Logger$handlers_$$ = [], $mr$Logger$instances_$$ = new Map;
var $mr$cast$ExtensionMessenger$$ = function($callback$jscomp$351$$) {
  this.$f$ = $callback$jscomp$351$$;
  this.$c$ = String(Date.now()) + String(Math.floor(1e5 * Math.random()));
  this.$b$ = null;
}, $JSCompiler_StaticMethods_sendToBackground$$ = function($JSCompiler_StaticMethods_sendToBackground$self$$, $message$jscomp$55_msg$jscomp$1$$) {
  if (!$JSCompiler_StaticMethods_sendToBackground$self$$.$b$) {
    return $mr$cast$ExtensionMessenger$logger_$$.error("No active session"), "No active session";
  }
  $message$jscomp$55_msg$jscomp$1$$.clientId = $JSCompiler_StaticMethods_sendToBackground$self$$.$c$;
  $message$jscomp$55_msg$jscomp$1$$ = JSON.stringify($message$jscomp$55_msg$jscomp$1$$);
  if (32768 < $message$jscomp$55_msg$jscomp$1$$.length) {
    return $mr$cast$ExtensionMessenger$logger_$$.error("Message length over limit"), "Message length over limit";
  }
  $mr$cast$ExtensionMessenger$logger_$$.log(0, "Send " + $message$jscomp$55_msg$jscomp$1$$, void 0);
  $JSCompiler_StaticMethods_sendToBackground$self$$.$b$.send($message$jscomp$55_msg$jscomp$1$$);
  return null;
};
$mr$cast$ExtensionMessenger$$.prototype.connect = function($connection$$) {
  this.$b$ = $connection$$;
  this.$b$.onmessage = $goog$bind$$(this.$g$, this);
  $JSCompiler_StaticMethods_sendToBackground$$(this, new $mr$cast$InternalMessage$$("client_connect", this.$c$));
};
$mr$cast$ExtensionMessenger$$.prototype.disconnect = function() {
  this.$b$.close();
  this.$b$ = null;
};
$mr$cast$ExtensionMessenger$$.prototype.$g$ = function($e$jscomp$15_message$jscomp$57$$) {
  $mr$cast$ExtensionMessenger$logger_$$.log(0, "Receive " + $e$jscomp$15_message$jscomp$57$$.data, void 0);
  $e$jscomp$15_message$jscomp$57$$ = JSON.parse($e$jscomp$15_message$jscomp$57$$.data);
  if ($e$jscomp$15_message$jscomp$57$$.clientId == this.$c$) {
    this.$f$.onMessage($e$jscomp$15_message$jscomp$57$$);
  }
};
var $mr$cast$ExtensionMessenger$logger_$$ = $mr$Logger$getInstance$$("mr.cast.ExtensionMessenger");
var $module$contents$mr$cast$DialPresentationUrl_DialPresentationUrl$$ = function($dialAppName$$, $dialPostData$$, $clientId$$) {
  this.$f$ = $dialAppName$$;
  this.$c$ = $dialPostData$$;
  this.$b$ = $clientId$$;
}, $JSCompiler_StaticMethods_getPresentationUrl$$ = function($JSCompiler_StaticMethods_getPresentationUrl$self_paramsString$$) {
  var $url$jscomp$64$$ = "cast-dial:" + $JSCompiler_StaticMethods_getPresentationUrl$self_paramsString$$.$f$, $params$jscomp$17$$ = new URLSearchParams;
  $JSCompiler_StaticMethods_getPresentationUrl$self_paramsString$$.$c$ && $params$jscomp$17$$.set("dialPostData", $JSCompiler_StaticMethods_getPresentationUrl$self_paramsString$$.$c$);
  $JSCompiler_StaticMethods_getPresentationUrl$self_paramsString$$.$b$ && $params$jscomp$17$$.set("clientId", $JSCompiler_StaticMethods_getPresentationUrl$self_paramsString$$.$b$);
  ($JSCompiler_StaticMethods_getPresentationUrl$self_paramsString$$ = $params$jscomp$17$$.toString()) && ($url$jscomp$64$$ += "?" + $JSCompiler_StaticMethods_getPresentationUrl$self_paramsString$$);
  return $url$jscomp$64$$;
};
var $mr$cast$PresentationUrl$$ = function($appInfos$$, $opt_clientId$jscomp$1$$, $opt_autoJoinPolicy$jscomp$1$$, $opt_defaultActionPolicy$jscomp$1$$, $opt_launchTimeout$$, $opt_dialAppName$$, $opt_dialPostData$$, $opt_invisibleSender$$, $opt_broadcastNamespace$$, $opt_broadcastMessage$$) {
  this.$l$ = $appInfos$$;
  this.$b$ = $opt_clientId$jscomp$1$$ || null;
  this.$c$ = $opt_autoJoinPolicy$jscomp$1$$ || null;
  this.$h$ = $opt_defaultActionPolicy$jscomp$1$$ || null;
  this.$i$ = void 0 !== $opt_launchTimeout$$ ? $opt_launchTimeout$$ : null;
  this.$j$ = $opt_dialAppName$$ || null;
  this.$o$ = $opt_dialPostData$$ || null;
  this.$m$ = $opt_invisibleSender$$ || !1;
  this.$g$ = $opt_broadcastNamespace$$ || null;
  this.$f$ = $opt_broadcastMessage$$ || null;
}, $JSCompiler_StaticMethods_getPresentationUrls$$ = function($JSCompiler_StaticMethods_getPresentationUrls$self$$) {
  var $urls$$ = $JSCompiler_StaticMethods_getPresentationUrls$self$$.$l$.map(function($appInfo$jscomp$2$$) {
    var $url$jscomp$inline_301$$ = "cast:" + $appInfo$jscomp$2$$.appId, $params$jscomp$inline_302$$ = new URLSearchParams;
    $appInfo$jscomp$2$$.capabilities && 0 < $appInfo$jscomp$2$$.capabilities.length && $params$jscomp$inline_302$$.set("capabilities", $appInfo$jscomp$2$$.capabilities.join(","));
    $JSCompiler_StaticMethods_getPresentationUrls$self$$.$b$ && $params$jscomp$inline_302$$.set("clientId", $JSCompiler_StaticMethods_getPresentationUrls$self$$.$b$);
    $JSCompiler_StaticMethods_getPresentationUrls$self$$.$c$ && $params$jscomp$inline_302$$.set("autoJoinPolicy", $JSCompiler_StaticMethods_getPresentationUrls$self$$.$c$);
    $JSCompiler_StaticMethods_getPresentationUrls$self$$.$h$ && $params$jscomp$inline_302$$.set("defaultActionPolicy", $JSCompiler_StaticMethods_getPresentationUrls$self$$.$h$);
    null != $JSCompiler_StaticMethods_getPresentationUrls$self$$.$i$ && $params$jscomp$inline_302$$.set("launchTimeout", String($JSCompiler_StaticMethods_getPresentationUrls$self$$.$i$));
    $JSCompiler_StaticMethods_getPresentationUrls$self$$.$m$ && $params$jscomp$inline_302$$.set("invisibleSender", "true");
    $JSCompiler_StaticMethods_getPresentationUrls$self$$.$g$ && ($params$jscomp$inline_302$$.set("broadcastNamespace", $JSCompiler_StaticMethods_getPresentationUrls$self$$.$g$), $params$jscomp$inline_302$$.set("broadcastId", String(Math.random())));
    $JSCompiler_StaticMethods_getPresentationUrls$self$$.$f$ && $params$jscomp$inline_302$$.set("broadcastMessage", encodeURIComponent(JSON.stringify($JSCompiler_StaticMethods_getPresentationUrls$self$$.$f$)));
    return $url$jscomp$inline_301$$ + "?" + $params$jscomp$inline_302$$.toString();
  });
  $JSCompiler_StaticMethods_getPresentationUrls$self$$.$j$ && $urls$$.push($JSCompiler_StaticMethods_getPresentationUrl$$(new $module$contents$mr$cast$DialPresentationUrl_DialPresentationUrl$$($JSCompiler_StaticMethods_getPresentationUrls$self$$.$j$, $JSCompiler_StaticMethods_getPresentationUrls$self$$.$o$, $JSCompiler_StaticMethods_getPresentationUrls$self$$.$b$)));
  return $urls$$;
};
var $mr$cast$SessionMediaUpdater$$ = function() {
  this.$b$ = {};
  this.$c$ = {};
}, $JSCompiler_StaticMethods_removeSessionById$$ = function($JSCompiler_StaticMethods_removeSessionById$self$$, $sessionId$jscomp$18$$, $finalSessionStatus$$) {
  var $existingSession$$ = $JSCompiler_StaticMethods_removeSessionById$self$$.$b$[$sessionId$jscomp$18$$];
  return $existingSession$$ ? ($existingSession$$.status = $finalSessionStatus$$, $existingSession$$.media.forEach(function($e$jscomp$16$$) {
    delete $JSCompiler_StaticMethods_removeSessionById$self$$.$c$[$e$jscomp$16$$.sessionId + "#" + $e$jscomp$16$$.mediaSessionId];
  }), delete $JSCompiler_StaticMethods_removeSessionById$self$$.$b$[$sessionId$jscomp$18$$], !0) : !1;
}, $JSCompiler_StaticMethods_createOrUpdateSession$$ = function($JSCompiler_StaticMethods_createOrUpdateSession$self$$, $session$$) {
  var $existingSession$jscomp$1_newSession$$ = $JSCompiler_StaticMethods_createOrUpdateSession$self$$.$b$[$session$$.sessionId];
  if ($existingSession$jscomp$1_newSession$$) {
    return $existingSession$jscomp$1_newSession$$.statusText = $session$$.statusText, $existingSession$jscomp$1_newSession$$.namespaces = $session$$.namespaces || [], $existingSession$jscomp$1_newSession$$.receiver.volume = $session$$.receiver.volume, $existingSession$jscomp$1_newSession$$;
  }
  $existingSession$jscomp$1_newSession$$ = new chrome.cast.$Session$($session$$.sessionId, $session$$.appId, $session$$.displayName, $session$$.appImages, $session$$.receiver);
  for (var $key$jscomp$97$$ in $session$$) {
    "media" == $key$jscomp$97$$ ? $existingSession$jscomp$1_newSession$$.media = $session$$.media.map(function($media$jscomp$4$$) {
      $media$jscomp$4$$ = $JSCompiler_StaticMethods_createOrUpdateMedia$$($JSCompiler_StaticMethods_createOrUpdateSession$self$$, $media$jscomp$4$$);
      $media$jscomp$4$$.$g$ = !1;
      $media$jscomp$4$$.$f$ = !0;
      return $media$jscomp$4$$;
    }) : $session$$.hasOwnProperty($key$jscomp$97$$) && ($existingSession$jscomp$1_newSession$$[$key$jscomp$97$$] = $session$$[$key$jscomp$97$$]);
  }
  return $JSCompiler_StaticMethods_createOrUpdateSession$self$$.$b$[$session$$.sessionId] = $existingSession$jscomp$1_newSession$$;
}, $JSCompiler_StaticMethods_createOrUpdateMedia$$ = function($JSCompiler_StaticMethods_createOrUpdateMedia$self_media$jscomp$inline_304_session$jscomp$1$$, $$jscomp$inline_524_newState$$) {
  var $$jscomp$inline_308_itemIdToIndex$jscomp$inline_522_key$6$jscomp$inline_309_mediaKey$$ = $$jscomp$inline_524_newState$$.sessionId + "#" + $$jscomp$inline_524_newState$$.mediaSessionId, $media$jscomp$5$$ = $JSCompiler_StaticMethods_createOrUpdateMedia$self_media$jscomp$inline_304_session$jscomp$1$$.$c$[$$jscomp$inline_308_itemIdToIndex$jscomp$inline_522_key$6$jscomp$inline_309_mediaKey$$];
  $media$jscomp$5$$ || ($media$jscomp$5$$ = new chrome.cast.media.$Media$($$jscomp$inline_524_newState$$.sessionId, $$jscomp$inline_524_newState$$.mediaSessionId), $JSCompiler_StaticMethods_createOrUpdateMedia$self_media$jscomp$inline_304_session$jscomp$1$$.$c$[$$jscomp$inline_308_itemIdToIndex$jscomp$inline_522_key$6$jscomp$inline_309_mediaKey$$] = $media$jscomp$5$$, ($JSCompiler_StaticMethods_createOrUpdateMedia$self_media$jscomp$inline_304_session$jscomp$1$$ = $JSCompiler_StaticMethods_createOrUpdateMedia$self_media$jscomp$inline_304_session$jscomp$1$$.$b$[$$jscomp$inline_524_newState$$.sessionId]) && 
  $JSCompiler_StaticMethods_createOrUpdateMedia$self_media$jscomp$inline_304_session$jscomp$1$$.media.push($media$jscomp$5$$));
  $JSCompiler_StaticMethods_createOrUpdateMedia$self_media$jscomp$inline_304_session$jscomp$1$$ = $media$jscomp$5$$;
  $JSCompiler_StaticMethods_createOrUpdateMedia$self_media$jscomp$inline_304_session$jscomp$1$$.currentItemId = null;
  $JSCompiler_StaticMethods_createOrUpdateMedia$self_media$jscomp$inline_304_session$jscomp$1$$.loadingItemId = null;
  $JSCompiler_StaticMethods_createOrUpdateMedia$self_media$jscomp$inline_304_session$jscomp$1$$.preloadedItemId = null;
  for (var $$jscomp$inline_307_key$jscomp$inline_306_newItemsWithMediaInfo$jscomp$inline_519$$ in $$jscomp$inline_524_newState$$) {
    "items" != $$jscomp$inline_307_key$jscomp$inline_306_newItemsWithMediaInfo$jscomp$inline_519$$ && $$jscomp$inline_524_newState$$.hasOwnProperty($$jscomp$inline_307_key$jscomp$inline_306_newItemsWithMediaInfo$jscomp$inline_519$$) && ("volume" == $$jscomp$inline_307_key$jscomp$inline_306_newItemsWithMediaInfo$jscomp$inline_519$$ ? ($JSCompiler_StaticMethods_createOrUpdateMedia$self_media$jscomp$inline_304_session$jscomp$1$$.volume.level = $$jscomp$inline_524_newState$$.volume.level, $JSCompiler_StaticMethods_createOrUpdateMedia$self_media$jscomp$inline_304_session$jscomp$1$$.volume.muted = 
    $$jscomp$inline_524_newState$$.volume.muted) : $JSCompiler_StaticMethods_createOrUpdateMedia$self_media$jscomp$inline_304_session$jscomp$1$$[$$jscomp$inline_307_key$jscomp$inline_306_newItemsWithMediaInfo$jscomp$inline_519$$] = $$jscomp$inline_524_newState$$[$$jscomp$inline_307_key$jscomp$inline_306_newItemsWithMediaInfo$jscomp$inline_519$$]);
  }
  $$jscomp$inline_307_key$jscomp$inline_306_newItemsWithMediaInfo$jscomp$inline_519$$ = $$jscomp$makeIterator$$(["idleReason", "extendedStatus"]);
  for ($$jscomp$inline_308_itemIdToIndex$jscomp$inline_522_key$6$jscomp$inline_309_mediaKey$$ = $$jscomp$inline_307_key$jscomp$inline_306_newItemsWithMediaInfo$jscomp$inline_519$$.next(); !$$jscomp$inline_308_itemIdToIndex$jscomp$inline_522_key$6$jscomp$inline_309_mediaKey$$.done; $$jscomp$inline_308_itemIdToIndex$jscomp$inline_522_key$6$jscomp$inline_309_mediaKey$$ = $$jscomp$inline_307_key$jscomp$inline_306_newItemsWithMediaInfo$jscomp$inline_519$$.next()) {
    $$jscomp$inline_308_itemIdToIndex$jscomp$inline_522_key$6$jscomp$inline_309_mediaKey$$ = $$jscomp$inline_308_itemIdToIndex$jscomp$inline_522_key$6$jscomp$inline_309_mediaKey$$.value, $$jscomp$inline_524_newState$$.hasOwnProperty($$jscomp$inline_308_itemIdToIndex$jscomp$inline_522_key$6$jscomp$inline_309_mediaKey$$) || ($JSCompiler_StaticMethods_createOrUpdateMedia$self_media$jscomp$inline_304_session$jscomp$1$$[$$jscomp$inline_308_itemIdToIndex$jscomp$inline_522_key$6$jscomp$inline_309_mediaKey$$] = 
    null);
  }
  "currentTime" in $$jscomp$inline_524_newState$$ && ($JSCompiler_StaticMethods_createOrUpdateMedia$self_media$jscomp$inline_304_session$jscomp$1$$.$b$ = Date.now());
  if ($JSCompiler_StaticMethods_createOrUpdateMedia$self_media$jscomp$inline_304_session$jscomp$1$$.playerState == chrome.cast.media.$PlayerState$.IDLE && null == $JSCompiler_StaticMethods_createOrUpdateMedia$self_media$jscomp$inline_304_session$jscomp$1$$.loadingItemId) {
    $JSCompiler_StaticMethods_createOrUpdateMedia$self_media$jscomp$inline_304_session$jscomp$1$$.currentItemId = null, $JSCompiler_StaticMethods_createOrUpdateMedia$self_media$jscomp$inline_304_session$jscomp$1$$.loadingItemId = null, $JSCompiler_StaticMethods_createOrUpdateMedia$self_media$jscomp$inline_304_session$jscomp$1$$.preloadedItemId = null, $JSCompiler_StaticMethods_createOrUpdateMedia$self_media$jscomp$inline_304_session$jscomp$1$$.items = null;
  } else {
    if ($$jscomp$inline_524_newState$$.hasOwnProperty("items") && $$jscomp$inline_524_newState$$.items) {
      $$jscomp$inline_307_key$jscomp$inline_306_newItemsWithMediaInfo$jscomp$inline_519$$ = [];
      var $$jscomp$inline_525_items$jscomp$inline_521_newItem$jscomp$inline_526$$ = $JSCompiler_StaticMethods_createOrUpdateMedia$self_media$jscomp$inline_304_session$jscomp$1$$.items;
      $$jscomp$inline_308_itemIdToIndex$jscomp$inline_522_key$6$jscomp$inline_309_mediaKey$$ = {};
      if ($$jscomp$inline_525_items$jscomp$inline_521_newItem$jscomp$inline_526$$) {
        for (var $i$jscomp$inline_523_itemId$jscomp$inline_527$$ = 0; $i$jscomp$inline_523_itemId$jscomp$inline_527$$ < $$jscomp$inline_525_items$jscomp$inline_521_newItem$jscomp$inline_526$$.length; $i$jscomp$inline_523_itemId$jscomp$inline_527$$++) {
          $$jscomp$inline_308_itemIdToIndex$jscomp$inline_522_key$6$jscomp$inline_309_mediaKey$$[$$jscomp$inline_525_items$jscomp$inline_521_newItem$jscomp$inline_526$$[$i$jscomp$inline_523_itemId$jscomp$inline_527$$].itemId] = $i$jscomp$inline_523_itemId$jscomp$inline_527$$;
        }
      }
      $$jscomp$inline_524_newState$$ = $$jscomp$makeIterator$$($$jscomp$inline_524_newState$$.items);
      for ($$jscomp$inline_525_items$jscomp$inline_521_newItem$jscomp$inline_526$$ = $$jscomp$inline_524_newState$$.next(); !$$jscomp$inline_525_items$jscomp$inline_521_newItem$jscomp$inline_526$$.done; $$jscomp$inline_525_items$jscomp$inline_521_newItem$jscomp$inline_526$$ = $$jscomp$inline_524_newState$$.next()) {
        $$jscomp$inline_525_items$jscomp$inline_521_newItem$jscomp$inline_526$$ = $$jscomp$inline_525_items$jscomp$inline_521_newItem$jscomp$inline_526$$.value;
        if (!$$jscomp$inline_525_items$jscomp$inline_521_newItem$jscomp$inline_526$$.media) {
          $i$jscomp$inline_523_itemId$jscomp$inline_527$$ = $$jscomp$inline_525_items$jscomp$inline_521_newItem$jscomp$inline_526$$.itemId;
          var $oldItem$jscomp$inline_528$$ = $JSCompiler_StaticMethods_createOrUpdateMedia$self_media$jscomp$inline_304_session$jscomp$1$$.items ? $JSCompiler_StaticMethods_createOrUpdateMedia$self_media$jscomp$inline_304_session$jscomp$1$$.items[$$jscomp$inline_308_itemIdToIndex$jscomp$inline_522_key$6$jscomp$inline_309_mediaKey$$[$i$jscomp$inline_523_itemId$jscomp$inline_527$$]] : null;
          $oldItem$jscomp$inline_528$$ && $oldItem$jscomp$inline_528$$.media ? $$jscomp$inline_525_items$jscomp$inline_521_newItem$jscomp$inline_526$$.media = $oldItem$jscomp$inline_528$$.media : $i$jscomp$inline_523_itemId$jscomp$inline_527$$ == $JSCompiler_StaticMethods_createOrUpdateMedia$self_media$jscomp$inline_304_session$jscomp$1$$.currentItemId && $JSCompiler_StaticMethods_createOrUpdateMedia$self_media$jscomp$inline_304_session$jscomp$1$$.media && ($$jscomp$inline_525_items$jscomp$inline_521_newItem$jscomp$inline_526$$.media = 
          $JSCompiler_StaticMethods_createOrUpdateMedia$self_media$jscomp$inline_304_session$jscomp$1$$.media);
        }
        $$jscomp$inline_307_key$jscomp$inline_306_newItemsWithMediaInfo$jscomp$inline_519$$.push($mr$cast$SessionMediaUpdater$createQueueItem_$$($$jscomp$inline_525_items$jscomp$inline_521_newItem$jscomp$inline_526$$));
      }
      $JSCompiler_StaticMethods_createOrUpdateMedia$self_media$jscomp$inline_304_session$jscomp$1$$.items = $$jscomp$inline_307_key$jscomp$inline_306_newItemsWithMediaInfo$jscomp$inline_519$$;
    }
  }
  return $media$jscomp$5$$;
}, $JSCompiler_StaticMethods_removeMedia$$ = function($JSCompiler_StaticMethods_removeMedia$self_session$jscomp$2$$, $index$jscomp$84_media$jscomp$8$$) {
  delete $JSCompiler_StaticMethods_removeMedia$self_session$jscomp$2$$.$c$[$index$jscomp$84_media$jscomp$8$$.sessionId + "#" + $index$jscomp$84_media$jscomp$8$$.mediaSessionId];
  if ($JSCompiler_StaticMethods_removeMedia$self_session$jscomp$2$$ = $JSCompiler_StaticMethods_removeMedia$self_session$jscomp$2$$.$b$[$index$jscomp$84_media$jscomp$8$$.sessionId]) {
    $index$jscomp$84_media$jscomp$8$$ = $JSCompiler_StaticMethods_removeMedia$self_session$jscomp$2$$.media.indexOf($index$jscomp$84_media$jscomp$8$$), -1 != $index$jscomp$84_media$jscomp$8$$ && $JSCompiler_StaticMethods_removeMedia$self_session$jscomp$2$$.media.splice($index$jscomp$84_media$jscomp$8$$, 1);
  }
}, $mr$cast$SessionMediaUpdater$createQueueItem_$$ = function($newState$jscomp$3$$) {
  var $item$jscomp$3$$ = new chrome.cast.media.$QueueItem$($newState$jscomp$3$$.media), $key$jscomp$99$$;
  for ($key$jscomp$99$$ in $newState$jscomp$3$$) {
    $newState$jscomp$3$$.hasOwnProperty($key$jscomp$99$$) && ($item$jscomp$3$$[$key$jscomp$99$$] = $newState$jscomp$3$$[$key$jscomp$99$$]);
  }
  return $item$jscomp$3$$;
};
var $goog$Disposable$$ = function() {
};
var $goog$userAgent$OPERA$$ = $goog$labs$userAgent$util$matchUserAgent$$("Opera"), $goog$userAgent$GECKO$$ = $goog$labs$userAgent$util$matchUserAgent$$("Gecko") && !(-1 != $goog$labs$userAgent$util$userAgent_$$.toLowerCase().indexOf("webkit") && !$goog$labs$userAgent$util$matchUserAgent$$("Edge")) && !($goog$labs$userAgent$util$matchUserAgent$$("Trident") || $goog$labs$userAgent$util$matchUserAgent$$("MSIE")) && !$goog$labs$userAgent$util$matchUserAgent$$("Edge"), $goog$userAgent$WEBKIT$$ = -1 != 
$goog$labs$userAgent$util$userAgent_$$.toLowerCase().indexOf("webkit") && !$goog$labs$userAgent$util$matchUserAgent$$("Edge");
var $goog$async$Throttle$$ = function($listener$jscomp$130$$, $interval$jscomp$4$$, $opt_handler$jscomp$10$$) {
  this.$g$ = null != $opt_handler$jscomp$10$$ ? $goog$bind$$($listener$jscomp$130$$, $opt_handler$jscomp$10$$) : $listener$jscomp$130$$;
  this.$f$ = $interval$jscomp$4$$;
  this.$c$ = $goog$bind$$(this.$onTimer_$, this);
  this.$b$ = [];
};
$goog$inherits$$($goog$async$Throttle$$, $goog$Disposable$$);
$JSCompiler_prototypeAlias$$ = $goog$async$Throttle$$.prototype;
$JSCompiler_prototypeAlias$$.$shouldFire_$ = !1;
$JSCompiler_prototypeAlias$$.$pauseCount_$ = 0;
$JSCompiler_prototypeAlias$$.$timer_$ = null;
$JSCompiler_prototypeAlias$$.$fire$ = function($var_args$jscomp$91$$) {
  this.$b$ = arguments;
  this.$timer_$ || this.$pauseCount_$ ? this.$shouldFire_$ = !0 : $JSCompiler_StaticMethods_doAction_$$(this);
};
$JSCompiler_prototypeAlias$$.stop = function() {
  this.$timer_$ && ($goog$global$$.clearTimeout(this.$timer_$), this.$timer_$ = null, this.$shouldFire_$ = !1, this.$b$ = []);
};
$JSCompiler_prototypeAlias$$.pause = function() {
  this.$pauseCount_$++;
};
$JSCompiler_prototypeAlias$$.resume = function() {
  this.$pauseCount_$--;
  this.$pauseCount_$ || !this.$shouldFire_$ || this.$timer_$ || (this.$shouldFire_$ = !1, $JSCompiler_StaticMethods_doAction_$$(this));
};
$JSCompiler_prototypeAlias$$.$onTimer_$ = function() {
  this.$timer_$ = null;
  this.$shouldFire_$ && !this.$pauseCount_$ && (this.$shouldFire_$ = !1, $JSCompiler_StaticMethods_doAction_$$(this));
};
var $JSCompiler_StaticMethods_doAction_$$ = function($JSCompiler_StaticMethods_doAction_$self$$) {
  var $JSCompiler_inline_result$jscomp$31_listener$jscomp$inline_400$$ = $JSCompiler_StaticMethods_doAction_$self$$.$c$;
  var $opt_delay$jscomp$inline_401$$ = $JSCompiler_StaticMethods_doAction_$self$$.$f$;
  if ("function" != $goog$typeOf$$($JSCompiler_inline_result$jscomp$31_listener$jscomp$inline_400$$)) {
    if ($JSCompiler_inline_result$jscomp$31_listener$jscomp$inline_400$$ && "function" == typeof $JSCompiler_inline_result$jscomp$31_listener$jscomp$inline_400$$.handleEvent) {
      $JSCompiler_inline_result$jscomp$31_listener$jscomp$inline_400$$ = $goog$bind$$($JSCompiler_inline_result$jscomp$31_listener$jscomp$inline_400$$.handleEvent, $JSCompiler_inline_result$jscomp$31_listener$jscomp$inline_400$$);
    } else {
      throw Error("Invalid listener argument");
    }
  }
  $JSCompiler_inline_result$jscomp$31_listener$jscomp$inline_400$$ = 2147483647 < Number($opt_delay$jscomp$inline_401$$) ? -1 : $goog$global$$.setTimeout($JSCompiler_inline_result$jscomp$31_listener$jscomp$inline_400$$, $opt_delay$jscomp$inline_401$$ || 0);
  $JSCompiler_StaticMethods_doAction_$self$$.$timer_$ = $JSCompiler_inline_result$jscomp$31_listener$jscomp$inline_400$$;
  $JSCompiler_StaticMethods_doAction_$self$$.$g$.apply(null, $JSCompiler_StaticMethods_doAction_$self$$.$b$);
};
var $goog$userAgent$product$SAFARI$$ = $goog$labs$userAgent$util$matchUserAgent$$("Safari") && !(($goog$labs$userAgent$util$matchUserAgent$$("Chrome") || $goog$labs$userAgent$util$matchUserAgent$$("CriOS")) && !$goog$labs$userAgent$util$matchUserAgent$$("Edge") || $goog$labs$userAgent$util$matchUserAgent$$("Coast") || $goog$labs$userAgent$util$matchUserAgent$$("Opera") || $goog$labs$userAgent$util$matchUserAgent$$("Edge") || $goog$labs$userAgent$util$matchUserAgent$$("Edg/") || $goog$labs$userAgent$util$matchUserAgent$$("OPR") || 
$goog$labs$userAgent$util$matchUserAgent$$("Firefox") || $goog$labs$userAgent$util$matchUserAgent$$("FxiOS") || $goog$labs$userAgent$util$matchUserAgent$$("Silk") || $goog$labs$userAgent$util$matchUserAgent$$("Android")) && !($goog$labs$userAgent$util$matchUserAgent$$("iPhone") && !$goog$labs$userAgent$util$matchUserAgent$$("iPod") && !$goog$labs$userAgent$util$matchUserAgent$$("iPad") || $goog$labs$userAgent$util$matchUserAgent$$("iPad") || $goog$labs$userAgent$util$matchUserAgent$$("iPod"));
var $goog$crypt$base64$byteToCharMaps_$$ = {}, $goog$crypt$base64$charToByteMap_$$ = null, $goog$crypt$base64$HAS_NATIVE_ENCODE_$$ = $goog$userAgent$GECKO$$ || $goog$userAgent$WEBKIT$$ && !$goog$userAgent$product$SAFARI$$ || $goog$userAgent$OPERA$$ || "function" == typeof $goog$global$$.btoa, $goog$crypt$base64$encodeString$$ = function($alphabet$jscomp$inline_411_byteToCharMap$jscomp$inline_412_input$jscomp$11$$) {
  if ($goog$crypt$base64$HAS_NATIVE_ENCODE_$$) {
    var $JSCompiler_temp$jscomp$32_output$jscomp$inline_405$$ = $goog$global$$.btoa($alphabet$jscomp$inline_411_byteToCharMap$jscomp$inline_412_input$jscomp$11$$);
  } else {
    $JSCompiler_temp$jscomp$32_output$jscomp$inline_405$$ = [];
    for (var $commonChars$jscomp$inline_532_output$jscomp$inline_413_p$jscomp$inline_406$$ = 0, $i$jscomp$inline_407_i$jscomp$inline_414_specialChars$jscomp$inline_533$$ = 0; $i$jscomp$inline_407_i$jscomp$inline_414_specialChars$jscomp$inline_533$$ < $alphabet$jscomp$inline_411_byteToCharMap$jscomp$inline_412_input$jscomp$11$$.length; $i$jscomp$inline_407_i$jscomp$inline_414_specialChars$jscomp$inline_533$$++) {
      var $c$jscomp$inline_408_haveByte2$jscomp$inline_416_i$jscomp$inline_534$$ = $alphabet$jscomp$inline_411_byteToCharMap$jscomp$inline_412_input$jscomp$11$$.charCodeAt($i$jscomp$inline_407_i$jscomp$inline_414_specialChars$jscomp$inline_533$$);
      255 < $c$jscomp$inline_408_haveByte2$jscomp$inline_416_i$jscomp$inline_534$$ && ($JSCompiler_temp$jscomp$32_output$jscomp$inline_405$$[$commonChars$jscomp$inline_532_output$jscomp$inline_413_p$jscomp$inline_406$$++] = $c$jscomp$inline_408_haveByte2$jscomp$inline_416_i$jscomp$inline_534$$ & 255, $c$jscomp$inline_408_haveByte2$jscomp$inline_416_i$jscomp$inline_534$$ >>= 8);
      $JSCompiler_temp$jscomp$32_output$jscomp$inline_405$$[$commonChars$jscomp$inline_532_output$jscomp$inline_413_p$jscomp$inline_406$$++] = $c$jscomp$inline_408_haveByte2$jscomp$inline_416_i$jscomp$inline_534$$;
    }
    $alphabet$jscomp$inline_411_byteToCharMap$jscomp$inline_412_input$jscomp$11$$ = void 0;
    $goog$asserts$assert$$($goog$isArrayLike$$($JSCompiler_temp$jscomp$32_output$jscomp$inline_405$$), "encodeByteArray takes an array as a parameter");
    void 0 === $alphabet$jscomp$inline_411_byteToCharMap$jscomp$inline_412_input$jscomp$11$$ && ($alphabet$jscomp$inline_411_byteToCharMap$jscomp$inline_412_input$jscomp$11$$ = 0);
    if (!$goog$crypt$base64$charToByteMap_$$) {
      for ($goog$crypt$base64$charToByteMap_$$ = {}, $commonChars$jscomp$inline_532_output$jscomp$inline_413_p$jscomp$inline_406$$ = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), $i$jscomp$inline_407_i$jscomp$inline_414_specialChars$jscomp$inline_533$$ = ["+/=", "+/", "-_=", "-_.", "-_"], $c$jscomp$inline_408_haveByte2$jscomp$inline_416_i$jscomp$inline_534$$ = 0; 5 > $c$jscomp$inline_408_haveByte2$jscomp$inline_416_i$jscomp$inline_534$$; $c$jscomp$inline_408_haveByte2$jscomp$inline_416_i$jscomp$inline_534$$++) {
        var $chars$jscomp$inline_535_haveByte3$jscomp$inline_418$$ = $commonChars$jscomp$inline_532_output$jscomp$inline_413_p$jscomp$inline_406$$.concat($i$jscomp$inline_407_i$jscomp$inline_414_specialChars$jscomp$inline_533$$[$c$jscomp$inline_408_haveByte2$jscomp$inline_416_i$jscomp$inline_534$$].split(""));
        $goog$crypt$base64$byteToCharMaps_$$[$c$jscomp$inline_408_haveByte2$jscomp$inline_416_i$jscomp$inline_534$$] = $chars$jscomp$inline_535_haveByte3$jscomp$inline_418$$;
        for (var $j$jscomp$inline_536_outByte1$jscomp$inline_420$$ = 0; $j$jscomp$inline_536_outByte1$jscomp$inline_420$$ < $chars$jscomp$inline_535_haveByte3$jscomp$inline_418$$.length; $j$jscomp$inline_536_outByte1$jscomp$inline_420$$++) {
          var $byte3$jscomp$inline_419_char$jscomp$inline_537_outByte4$jscomp$inline_423$$ = $chars$jscomp$inline_535_haveByte3$jscomp$inline_418$$[$j$jscomp$inline_536_outByte1$jscomp$inline_420$$], $byte1$jscomp$inline_415_existingByte$jscomp$inline_538_outByte2$jscomp$inline_421$$ = $goog$crypt$base64$charToByteMap_$$[$byte3$jscomp$inline_419_char$jscomp$inline_537_outByte4$jscomp$inline_423$$];
          void 0 === $byte1$jscomp$inline_415_existingByte$jscomp$inline_538_outByte2$jscomp$inline_421$$ ? $goog$crypt$base64$charToByteMap_$$[$byte3$jscomp$inline_419_char$jscomp$inline_537_outByte4$jscomp$inline_423$$] = $j$jscomp$inline_536_outByte1$jscomp$inline_420$$ : $goog$asserts$assert$$($byte1$jscomp$inline_415_existingByte$jscomp$inline_538_outByte2$jscomp$inline_421$$ === $j$jscomp$inline_536_outByte1$jscomp$inline_420$$);
        }
      }
    }
    $alphabet$jscomp$inline_411_byteToCharMap$jscomp$inline_412_input$jscomp$11$$ = $goog$crypt$base64$byteToCharMaps_$$[$alphabet$jscomp$inline_411_byteToCharMap$jscomp$inline_412_input$jscomp$11$$];
    $commonChars$jscomp$inline_532_output$jscomp$inline_413_p$jscomp$inline_406$$ = [];
    for ($i$jscomp$inline_407_i$jscomp$inline_414_specialChars$jscomp$inline_533$$ = 0; $i$jscomp$inline_407_i$jscomp$inline_414_specialChars$jscomp$inline_533$$ < $JSCompiler_temp$jscomp$32_output$jscomp$inline_405$$.length; $i$jscomp$inline_407_i$jscomp$inline_414_specialChars$jscomp$inline_533$$ += 3) {
      $byte1$jscomp$inline_415_existingByte$jscomp$inline_538_outByte2$jscomp$inline_421$$ = $JSCompiler_temp$jscomp$32_output$jscomp$inline_405$$[$i$jscomp$inline_407_i$jscomp$inline_414_specialChars$jscomp$inline_533$$];
      var $byte2$jscomp$inline_417_outByte3$jscomp$inline_422$$ = ($c$jscomp$inline_408_haveByte2$jscomp$inline_416_i$jscomp$inline_534$$ = $i$jscomp$inline_407_i$jscomp$inline_414_specialChars$jscomp$inline_533$$ + 1 < $JSCompiler_temp$jscomp$32_output$jscomp$inline_405$$.length) ? $JSCompiler_temp$jscomp$32_output$jscomp$inline_405$$[$i$jscomp$inline_407_i$jscomp$inline_414_specialChars$jscomp$inline_533$$ + 1] : 0;
      $byte3$jscomp$inline_419_char$jscomp$inline_537_outByte4$jscomp$inline_423$$ = ($chars$jscomp$inline_535_haveByte3$jscomp$inline_418$$ = $i$jscomp$inline_407_i$jscomp$inline_414_specialChars$jscomp$inline_533$$ + 2 < $JSCompiler_temp$jscomp$32_output$jscomp$inline_405$$.length) ? $JSCompiler_temp$jscomp$32_output$jscomp$inline_405$$[$i$jscomp$inline_407_i$jscomp$inline_414_specialChars$jscomp$inline_533$$ + 2] : 0;
      $j$jscomp$inline_536_outByte1$jscomp$inline_420$$ = $byte1$jscomp$inline_415_existingByte$jscomp$inline_538_outByte2$jscomp$inline_421$$ >> 2;
      $byte1$jscomp$inline_415_existingByte$jscomp$inline_538_outByte2$jscomp$inline_421$$ = ($byte1$jscomp$inline_415_existingByte$jscomp$inline_538_outByte2$jscomp$inline_421$$ & 3) << 4 | $byte2$jscomp$inline_417_outByte3$jscomp$inline_422$$ >> 4;
      $byte2$jscomp$inline_417_outByte3$jscomp$inline_422$$ = ($byte2$jscomp$inline_417_outByte3$jscomp$inline_422$$ & 15) << 2 | $byte3$jscomp$inline_419_char$jscomp$inline_537_outByte4$jscomp$inline_423$$ >> 6;
      $byte3$jscomp$inline_419_char$jscomp$inline_537_outByte4$jscomp$inline_423$$ &= 63;
      $chars$jscomp$inline_535_haveByte3$jscomp$inline_418$$ || ($byte3$jscomp$inline_419_char$jscomp$inline_537_outByte4$jscomp$inline_423$$ = 64, $c$jscomp$inline_408_haveByte2$jscomp$inline_416_i$jscomp$inline_534$$ || ($byte2$jscomp$inline_417_outByte3$jscomp$inline_422$$ = 64));
      $commonChars$jscomp$inline_532_output$jscomp$inline_413_p$jscomp$inline_406$$.push($alphabet$jscomp$inline_411_byteToCharMap$jscomp$inline_412_input$jscomp$11$$[$j$jscomp$inline_536_outByte1$jscomp$inline_420$$], $alphabet$jscomp$inline_411_byteToCharMap$jscomp$inline_412_input$jscomp$11$$[$byte1$jscomp$inline_415_existingByte$jscomp$inline_538_outByte2$jscomp$inline_421$$], $alphabet$jscomp$inline_411_byteToCharMap$jscomp$inline_412_input$jscomp$11$$[$byte2$jscomp$inline_417_outByte3$jscomp$inline_422$$] || 
      "", $alphabet$jscomp$inline_411_byteToCharMap$jscomp$inline_412_input$jscomp$11$$[$byte3$jscomp$inline_419_char$jscomp$inline_537_outByte4$jscomp$inline_423$$] || "");
    }
    $JSCompiler_temp$jscomp$32_output$jscomp$inline_405$$ = $commonChars$jscomp$inline_532_output$jscomp$inline_413_p$jscomp$inline_406$$.join("");
  }
  return $JSCompiler_temp$jscomp$32_output$jscomp$inline_405$$;
};
var $goog$structs$getValues$$ = function($col$jscomp$1$$) {
  if ($col$jscomp$1$$.$getValues$ && "function" == typeof $col$jscomp$1$$.$getValues$) {
    return $col$jscomp$1$$.$getValues$();
  }
  if ($goog$isString$$($col$jscomp$1$$)) {
    return $col$jscomp$1$$.split("");
  }
  if ($goog$isArrayLike$$($col$jscomp$1$$)) {
    for (var $res$jscomp$inline_426_rv$jscomp$13$$ = [], $i$jscomp$inline_427_l$jscomp$12$$ = $col$jscomp$1$$.length, $i$jscomp$124_key$jscomp$inline_428$$ = 0; $i$jscomp$124_key$jscomp$inline_428$$ < $i$jscomp$inline_427_l$jscomp$12$$; $i$jscomp$124_key$jscomp$inline_428$$++) {
      $res$jscomp$inline_426_rv$jscomp$13$$.push($col$jscomp$1$$[$i$jscomp$124_key$jscomp$inline_428$$]);
    }
    return $res$jscomp$inline_426_rv$jscomp$13$$;
  }
  $res$jscomp$inline_426_rv$jscomp$13$$ = [];
  $i$jscomp$inline_427_l$jscomp$12$$ = 0;
  for ($i$jscomp$124_key$jscomp$inline_428$$ in $col$jscomp$1$$) {
    $res$jscomp$inline_426_rv$jscomp$13$$[$i$jscomp$inline_427_l$jscomp$12$$++] = $col$jscomp$1$$[$i$jscomp$124_key$jscomp$inline_428$$];
  }
  return $res$jscomp$inline_426_rv$jscomp$13$$;
};
var $goog$structs$Set$$ = function() {
  this.$b$ = new $goog$structs$Map$$;
}, $goog$structs$Set$getKey_$$ = function($val$jscomp$37$$) {
  var $type$jscomp$188$$ = typeof $val$jscomp$37$$;
  return "object" == $type$jscomp$188$$ && $val$jscomp$37$$ || "function" == $type$jscomp$188$$ ? "o" + ($val$jscomp$37$$[$goog$UID_PROPERTY_$$] || ($val$jscomp$37$$[$goog$UID_PROPERTY_$$] = ++$goog$uidCounter_$$)) : $type$jscomp$188$$.substr(0, 1) + $val$jscomp$37$$;
};
$JSCompiler_prototypeAlias$$ = $goog$structs$Set$$.prototype;
$JSCompiler_prototypeAlias$$.add = function($element$jscomp$13$$) {
  this.$b$.set($goog$structs$Set$getKey_$$($element$jscomp$13$$), $element$jscomp$13$$);
};
$JSCompiler_prototypeAlias$$.removeAll = function($col$jscomp$12_values$jscomp$21$$) {
  $col$jscomp$12_values$jscomp$21$$ = $goog$structs$getValues$$($col$jscomp$12_values$jscomp$21$$);
  for (var $l$jscomp$20$$ = $col$jscomp$12_values$jscomp$21$$.length, $i$jscomp$132$$ = 0; $i$jscomp$132$$ < $l$jscomp$20$$; $i$jscomp$132$$++) {
    this.remove($col$jscomp$12_values$jscomp$21$$[$i$jscomp$132$$]);
  }
};
$JSCompiler_prototypeAlias$$.remove = function($element$jscomp$14$$) {
  return this.$b$.remove($goog$structs$Set$getKey_$$($element$jscomp$14$$));
};
$JSCompiler_prototypeAlias$$.clear = function() {
  this.$b$.clear();
};
$JSCompiler_prototypeAlias$$.contains = function($element$jscomp$15_key$jscomp$inline_437$$) {
  $element$jscomp$15_key$jscomp$inline_437$$ = $goog$structs$Set$getKey_$$($element$jscomp$15_key$jscomp$inline_437$$);
  return $goog$structs$Map$hasKey_$$(this.$b$.$b$, $element$jscomp$15_key$jscomp$inline_437$$);
};
$JSCompiler_prototypeAlias$$.$getValues$ = function() {
  return this.$b$.$getValues$();
};
$JSCompiler_prototypeAlias$$.$__iterator__$ = function() {
  return this.$b$.$__iterator__$(!1);
};
var $mr$cast$Api$$ = function() {
  this.$j$ = new $mr$cast$ExtensionMessenger$$(this);
  this.$c$ = null;
  this.$u$ = new $mr$cast$SessionMediaUpdater$$;
  this.$g$ = 0;
  this.$v$ = new $mr$cast$PendingRequestsManager$$;
  this.$l$ = new $goog$structs$Map$$;
  this.$A$ = !1;
  this.$i$ = new $goog$structs$Map$$;
  this.$o$ = new $goog$structs$Map$$;
  this.$s$ = [];
  this.$D$ = this.$createOrUpdateMedia_$.bind(this);
  this.$f$ = null;
  this.$m$ = 0;
  this.$h$ = null;
  this.$C$ = new $goog$async$Throttle$$(this.$F$, 200, this);
  this.$w$ = null;
}, $mr$cast$Api$invokeErrorCallback$$ = function($errorCallback$jscomp$71$$) {
  var $error$jscomp$7$$ = new chrome.cast.Error(chrome.cast.$ErrorCode$.INVALID_PARAMETER, "Already requesting session");
  $errorCallback$jscomp$71$$ && $errorCallback$jscomp$71$$($error$jscomp$7$$);
}, $JSCompiler_StaticMethods_sendToExtension_$$ = function($JSCompiler_StaticMethods_sendToExtension_$self_callback$jscomp$inline_548_callbackInfo$$, $error$jscomp$inline_440_message$jscomp$62$$, $opt_callbackInfo$$, $errorMessage$jscomp$3_opt_sequenceNumber$jscomp$1$$) {
  $opt_callbackInfo$$ && $JSCompiler_StaticMethods_addRequest$$($JSCompiler_StaticMethods_sendToExtension_$self_callback$jscomp$inline_548_callbackInfo$$.$v$, $opt_callbackInfo$$);
  void 0 !== $errorMessage$jscomp$3_opt_sequenceNumber$jscomp$1$$ ? $error$jscomp$inline_440_message$jscomp$62$$.sequenceNumber = $errorMessage$jscomp$3_opt_sequenceNumber$jscomp$1$$ : ($error$jscomp$inline_440_message$jscomp$62$$.sequenceNumber = $JSCompiler_StaticMethods_sendToExtension_$self_callback$jscomp$inline_548_callbackInfo$$.$g$, $JSCompiler_StaticMethods_sendToExtension_$self_callback$jscomp$inline_548_callbackInfo$$.$g$ = ($JSCompiler_StaticMethods_sendToExtension_$self_callback$jscomp$inline_548_callbackInfo$$.$g$ + 
  1) % 9007199254740992);
  $errorMessage$jscomp$3_opt_sequenceNumber$jscomp$1$$ = $JSCompiler_StaticMethods_sendToBackground$$($JSCompiler_StaticMethods_sendToExtension_$self_callback$jscomp$inline_548_callbackInfo$$.$j$, $error$jscomp$inline_440_message$jscomp$62$$);
  $opt_callbackInfo$$ && $errorMessage$jscomp$3_opt_sequenceNumber$jscomp$1$$ && ($JSCompiler_StaticMethods_sendToExtension_$self_callback$jscomp$inline_548_callbackInfo$$ = $JSCompiler_StaticMethods_removeRequest$$($JSCompiler_StaticMethods_sendToExtension_$self_callback$jscomp$inline_548_callbackInfo$$.$v$, $error$jscomp$inline_440_message$jscomp$62$$.sequenceNumber), $error$jscomp$inline_440_message$jscomp$62$$ = new chrome.cast.Error(chrome.cast.$ErrorCode$.INVALID_PARAMETER, $errorMessage$jscomp$3_opt_sequenceNumber$jscomp$1$$), 
  ($JSCompiler_StaticMethods_sendToExtension_$self_callback$jscomp$inline_548_callbackInfo$$ = $JSCompiler_StaticMethods_sendToExtension_$self_callback$jscomp$inline_548_callbackInfo$$.$b$) && $JSCompiler_StaticMethods_sendToExtension_$self_callback$jscomp$inline_548_callbackInfo$$($error$jscomp$inline_440_message$jscomp$62$$));
};
$mr$cast$Api$$.prototype.$initialize$ = function($apiConfig$jscomp$1_request$jscomp$18$$, $successCallback$jscomp$73$$) {
  var $$jscomp$this$jscomp$4$$ = this;
  $mr$cast$ApiInterface$instance$$ = this;
  this.$c$ || (this.$c$ = $apiConfig$jscomp$1_request$jscomp$18$$, $apiConfig$jscomp$1_request$jscomp$18$$.invisibleSender || ($apiConfig$jscomp$1_request$jscomp$18$$ = new PresentationRequest($JSCompiler_StaticMethods_getPresentationUrls_$$(this)), $apiConfig$jscomp$1_request$jscomp$18$$.getAvailability().then(function($availability$$) {
    $availability$$.onchange = function() {
      $$jscomp$this$jscomp$4$$.$A$ = !!$availability$$.value;
      $$jscomp$this$jscomp$4$$.$c$.receiverListener($availability$$.value ? chrome.cast.$ReceiverAvailability$.AVAILABLE : chrome.cast.$ReceiverAvailability$.UNAVAILABLE);
    };
    $availability$$.onchange();
  }, function() {
    $$jscomp$this$jscomp$4$$.$c$.receiverListener(chrome.cast.$ReceiverAvailability$.AVAILABLE);
  }), $apiConfig$jscomp$1_request$jscomp$18$$.onconnectionavailable = function($e$jscomp$43$$) {
    $JSCompiler_StaticMethods_onConnection_$$($$jscomp$this$jscomp$4$$, $e$jscomp$43$$.connection);
  }, this.$w$ = ($goog$global$$.navigator || null).presentation.defaultRequest = $apiConfig$jscomp$1_request$jscomp$18$$, $apiConfig$jscomp$1_request$jscomp$18$$.reconnect(chrome.cast.$AUTO_JOIN_PRESENTATION_ID$).then(function($connection$jscomp$1$$) {
    $JSCompiler_StaticMethods_onConnection_$$($$jscomp$this$jscomp$4$$, $connection$jscomp$1$$);
  }, $goog$nullFunction$$)));
  $successCallback$jscomp$73$$ && $successCallback$jscomp$73$$(void 0);
};
$mr$cast$Api$$.prototype.$setPageContext$ = function($win$jscomp$5$$) {
  $win$jscomp$5$$.navigator.presentation.defaultRequest = this.$w$;
};
var $JSCompiler_StaticMethods_onConnection_$$ = function($JSCompiler_StaticMethods_onConnection_$self$$, $connection$jscomp$2$$, $errorCallback$jscomp$74$$) {
  $errorCallback$jscomp$74$$ = void 0 === $errorCallback$jscomp$74$$ ? null : $errorCallback$jscomp$74$$;
  $connection$jscomp$2$$.onclose = function($e$jscomp$44_error$jscomp$inline_445$$) {
    $JSCompiler_StaticMethods_onConnection_$self$$.$f$ = null;
    switch($e$jscomp$44_error$jscomp$inline_445$$.reason) {
      case "closed":
        $JSCompiler_StaticMethods_removeSessionById_$$($JSCompiler_StaticMethods_onConnection_$self$$, chrome.cast.$SessionStatus$.DISCONNECTED);
        break;
      case "error":
        $errorCallback$jscomp$74$$ && ($e$jscomp$44_error$jscomp$inline_445$$ = new chrome.cast.Error(chrome.cast.$ErrorCode$.SESSION_ERROR), $errorCallback$jscomp$74$$ && $errorCallback$jscomp$74$$($e$jscomp$44_error$jscomp$inline_445$$));
    }
  };
  $connection$jscomp$2$$.onterminate = function() {
    $JSCompiler_StaticMethods_removeSessionById_$$($JSCompiler_StaticMethods_onConnection_$self$$, chrome.cast.$SessionStatus$.STOPPED);
  };
  "connected" == $connection$jscomp$2$$.state ? $JSCompiler_StaticMethods_onConnection_$self$$.$j$.connect($connection$jscomp$2$$) : $connection$jscomp$2$$.onconnect = function() {
    $JSCompiler_StaticMethods_onConnection_$self$$.$j$.connect($connection$jscomp$2$$);
  };
}, $JSCompiler_StaticMethods_broadcastOrSendMessage$$ = function($request$jscomp$19$$) {
  var $JSCompiler_StaticMethods_broadcastOrSendMessage$self$$ = $mr$cast$Api$api$$;
  $mr$cast$Api$ALLOWED_BROADCAST_TYPES_$$.has($request$jscomp$19$$.type) ? $JSCompiler_StaticMethods_broadcastOrSendMessage$self$$.$A$ && ($JSCompiler_StaticMethods_broadcastOrSendMessage$self$$.$h$ ? ($request$jscomp$19$$.sessionId = $JSCompiler_StaticMethods_broadcastOrSendMessage$self$$.$h$, $JSCompiler_StaticMethods_sendMediaRequest_$$($JSCompiler_StaticMethods_broadcastOrSendMessage$self$$, null, $request$jscomp$19$$.type, $request$jscomp$19$$, function() {
    $JSCompiler_StaticMethods_mr_Logger_prototype$info$$("Send Broadcast directly succeeded");
  }, function($error$jscomp$8$$) {
    $mr$cast$Api$logger_$$.error("Send Broadcast directly failed with code " + $error$jscomp$8$$.code);
  })) : $JSCompiler_StaticMethods_broadcastOrSendMessage$self$$.$C$.$fire$($JSCompiler_StaticMethods_getPresentationUrls_$$($JSCompiler_StaticMethods_broadcastOrSendMessage$self$$, void 0, "urn:x-cast:com.google.cast.media", $request$jscomp$19$$))) : $mr$cast$Api$logger_$$.error("Unsupported broadcast message type - " + $request$jscomp$19$$.type);
};
$mr$cast$Api$$.prototype.$F$ = function($p$jscomp$4_urls$jscomp$1$$) {
  $JSCompiler_StaticMethods_mr_Logger_prototype$info$$("Broadcast request " + $p$jscomp$4_urls$jscomp$1$$);
  ($p$jscomp$4_urls$jscomp$1$$ = (new PresentationRequest($p$jscomp$4_urls$jscomp$1$$)).getAvailability()) ? $p$jscomp$4_urls$jscomp$1$$.then(function() {
    $JSCompiler_StaticMethods_mr_Logger_prototype$info$$("Broadcast succeeded");
  }, function() {
    $mr$cast$Api$logger_$$.log(2, "Broadcast failed", void 0);
  }) : $mr$cast$Api$logger_$$.error("presentationRequest.getAvailability return undefined");
};
$mr$cast$Api$$.prototype.requestSession = function($successCallback$jscomp$74$$, $errorCallback$jscomp$75$$, $opt_sessionRequest$jscomp$1_presentationUrls$jscomp$1$$) {
  var $$jscomp$this$jscomp$6$$ = this;
  this.$f$ ? $mr$cast$Api$invokeErrorCallback$$($errorCallback$jscomp$75$$) : ($opt_sessionRequest$jscomp$1_presentationUrls$jscomp$1$$ = $JSCompiler_StaticMethods_getPresentationUrls_$$(this, $opt_sessionRequest$jscomp$1_presentationUrls$jscomp$1$$), this.$f$ = $successCallback$jscomp$74$$, (new PresentationRequest($opt_sessionRequest$jscomp$1_presentationUrls$jscomp$1$$)).start().then(function($connection$jscomp$3$$) {
    $JSCompiler_StaticMethods_onConnection_$$($$jscomp$this$jscomp$6$$, $connection$jscomp$3$$, $errorCallback$jscomp$75$$);
  }).catch(function($err$jscomp$20_error$jscomp$inline_454$$) {
    $$jscomp$this$jscomp$6$$.$f$ = null;
    $err$jscomp$20_error$jscomp$inline_454$$ = new chrome.cast.Error("AbortError" == $err$jscomp$20_error$jscomp$inline_454$$.name || "NotAllowedError" == $err$jscomp$20_error$jscomp$inline_454$$.name ? chrome.cast.$ErrorCode$.CANCEL : chrome.cast.$ErrorCode$.SESSION_ERROR);
    $errorCallback$jscomp$75$$ && $errorCallback$jscomp$75$$($err$jscomp$20_error$jscomp$inline_454$$);
  }));
};
var $JSCompiler_StaticMethods_getPresentationUrls_$$ = function($JSCompiler_StaticMethods_getPresentationUrls_$self$$, $opt_sessionRequest$jscomp$2$$, $opt_broadcastNamespace$jscomp$1$$, $opt_broadcastRequest$$) {
  var $dialName$$ = null, $dialPostData$jscomp$2$$ = null, $sessionRequest$jscomp$1$$ = $opt_sessionRequest$jscomp$2$$ || $JSCompiler_StaticMethods_getPresentationUrls_$self$$.$c$.sessionRequest, $dialRequest$$ = $sessionRequest$jscomp$1$$.dialRequest;
  $dialRequest$$ && ($dialName$$ = $dialRequest$$.appName, ($dialPostData$jscomp$2$$ = $dialRequest$$.launchParameter) && !$dialPostData$jscomp$2$$.match($mr$cast$Api$BASE_64_REG_EX_$$) && ($dialPostData$jscomp$2$$ = $goog$crypt$base64$encodeString$$($dialPostData$jscomp$2$$)));
  var $appInfoArray$$ = [];
  $appInfoArray$$.push({appId:$sessionRequest$jscomp$1$$.appId, capabilities:$sessionRequest$jscomp$1$$.capabilities});
  $opt_sessionRequest$jscomp$2$$ || $goog$array$forEach$$($JSCompiler_StaticMethods_getPresentationUrls_$self$$.$c$.additionalSessionRequests, function($additionalSessionRequest$$) {
    $appInfoArray$$.push({appId:$additionalSessionRequest$$.appId, capabilities:$additionalSessionRequest$$.capabilities});
  });
  return $JSCompiler_StaticMethods_getPresentationUrls$$(new $mr$cast$PresentationUrl$$($appInfoArray$$, $JSCompiler_StaticMethods_getPresentationUrls_$self$$.$j$.$c$, $JSCompiler_StaticMethods_getPresentationUrls_$self$$.$c$.autoJoinPolicy, $JSCompiler_StaticMethods_getPresentationUrls_$self$$.$c$.defaultActionPolicy, $sessionRequest$jscomp$1$$.requestSessionTimeout, $dialName$$, $dialPostData$jscomp$2$$, $JSCompiler_StaticMethods_getPresentationUrls_$self$$.$c$.invisibleSender, $opt_broadcastNamespace$jscomp$1$$, 
  $opt_broadcastRequest$$));
};
$mr$cast$Api$$.prototype.$B$ = function($request$jscomp$21$$, $type$jscomp$189$$, $successCallback$jscomp$75$$, $errorCallback$jscomp$76$$) {
  var $$jscomp$this$jscomp$7$$ = this;
  this.$m$++;
  $JSCompiler_StaticMethods_sendMediaRequest_$$(this, null, $type$jscomp$189$$, $request$jscomp$21$$, function($media$jscomp$10$$) {
    $$jscomp$this$jscomp$7$$.$m$--;
    $media$jscomp$10$$.$f$ = !0;
    $successCallback$jscomp$75$$ && $successCallback$jscomp$75$$($media$jscomp$10$$);
  }, function($error$jscomp$9$$) {
    $$jscomp$this$jscomp$7$$.$m$--;
    $errorCallback$jscomp$76$$($error$jscomp$9$$);
  }, chrome.cast.media.timeout.load);
};
$mr$cast$Api$$.prototype.$b$ = function($media$jscomp$11$$, $type$jscomp$190$$, $request$jscomp$22$$, $successCallback$jscomp$76$$, $errorCallback$jscomp$77$$, $opt_timeoutMillis$jscomp$5$$) {
  var $$jscomp$this$jscomp$8$$ = this;
  $JSCompiler_StaticMethods_sendMediaRequest_$$(this, $media$jscomp$11$$, $type$jscomp$190$$, $request$jscomp$22$$, function($media$jscomp$12$$) {
    $$jscomp$this$jscomp$8$$.$callMediaListeners_$($media$jscomp$12$$);
    $successCallback$jscomp$76$$ && $successCallback$jscomp$76$$(void 0);
  }, $errorCallback$jscomp$77$$, $opt_timeoutMillis$jscomp$5$$);
};
var $JSCompiler_StaticMethods_sendMediaRequest_$$ = function($JSCompiler_StaticMethods_sendMediaRequest_$self$$, $media$jscomp$13$$, $type$jscomp$191$$, $request$jscomp$23$$, $successCallback$jscomp$77$$, $errorCallback$jscomp$78$$, $opt_timeoutMillis$jscomp$6$$) {
  $request$jscomp$23$$.type = $type$jscomp$191$$;
  null != $media$jscomp$13$$ && ($request$jscomp$23$$.mediaSessionId = $media$jscomp$13$$.mediaSessionId, $request$jscomp$23$$.sessionId = $media$jscomp$13$$.sessionId);
  $JSCompiler_StaticMethods_sendMediaRequest_$self$$.$sendApiRequest$($request$jscomp$23$$, function($error$jscomp$inline_457_message$jscomp$63$$) {
    $error$jscomp$inline_457_message$jscomp$63$$.status && 1 == $error$jscomp$inline_457_message$jscomp$63$$.status.length ? $successCallback$jscomp$77$$ && $successCallback$jscomp$77$$($error$jscomp$inline_457_message$jscomp$63$$.status[0]) : ($error$jscomp$inline_457_message$jscomp$63$$ = new chrome.cast.Error(chrome.cast.$ErrorCode$.SESSION_ERROR), $errorCallback$jscomp$78$$ && $errorCallback$jscomp$78$$($error$jscomp$inline_457_message$jscomp$63$$));
  }, $errorCallback$jscomp$78$$, $opt_timeoutMillis$jscomp$6$$);
};
$JSCompiler_prototypeAlias$$ = $mr$cast$Api$$.prototype;
$JSCompiler_prototypeAlias$$.setReceiverVolume = function($sessionId$jscomp$19$$, $volumeRequest$jscomp$4$$, $successCallback$jscomp$78$$, $errorCallback$jscomp$79$$) {
  $volumeRequest$jscomp$4$$.sessionId = $sessionId$jscomp$19$$;
  $JSCompiler_StaticMethods_sendToExtension_$$(this, new $mr$cast$InternalMessage$$("v2_message", $volumeRequest$jscomp$4$$, void 0, chrome.cast.timeout.setReceiverVolume), new $mr$cast$ApiCallbackInfo$$(this.$g$, $successCallback$jscomp$78$$, $errorCallback$jscomp$79$$, chrome.cast.timeout.sendCustomMessage));
};
$JSCompiler_prototypeAlias$$.$requestSessionById$ = function($sessionId$jscomp$20$$) {
  var $$jscomp$this$jscomp$9$$ = this;
  (new PresentationRequest($JSCompiler_StaticMethods_getPresentationUrls_$$(this))).reconnect(chrome.cast.$PRESENTATION_ID_PREFIX$ + $sessionId$jscomp$20$$).then(function($connection$jscomp$4$$) {
    $JSCompiler_StaticMethods_onConnection_$$($$jscomp$this$jscomp$9$$, $connection$jscomp$4$$);
  }, $goog$nullFunction$$);
};
$JSCompiler_prototypeAlias$$.leaveSession = function($sessionId$jscomp$21$$, $successCallback$jscomp$79$$, $errorCallback$jscomp$80$$) {
  $JSCompiler_StaticMethods_sendToExtension_$$(this, new $mr$cast$InternalMessage$$("leave_session", $sessionId$jscomp$21$$, void 0, chrome.cast.timeout.leaveSession), new $mr$cast$ApiCallbackInfo$$(this.$g$, $successCallback$jscomp$79$$, $errorCallback$jscomp$80$$, chrome.cast.timeout.leaveSession));
};
$JSCompiler_prototypeAlias$$.$sendAppRequest$ = function($request$jscomp$25$$, $successCallback$jscomp$80$$, $errorCallback$jscomp$81$$) {
  $JSCompiler_StaticMethods_sendToExtension_$$(this, new $mr$cast$InternalMessage$$("app_message", $request$jscomp$25$$, void 0, chrome.cast.timeout.sendCustomMessage), new $mr$cast$ApiCallbackInfo$$(this.$g$, $successCallback$jscomp$80$$, $errorCallback$jscomp$81$$, chrome.cast.timeout.sendCustomMessage));
};
$JSCompiler_prototypeAlias$$.$sendApiRequest$ = function($request$jscomp$26$$, $successCallback$jscomp$81$$, $errorCallback$jscomp$82$$, $opt_timeoutMillis$jscomp$7$$) {
  $JSCompiler_StaticMethods_sendToExtension_$$(this, new $mr$cast$InternalMessage$$("v2_message", $request$jscomp$26$$, void 0, $opt_timeoutMillis$jscomp$7$$), new $mr$cast$ApiCallbackInfo$$(this.$g$, $successCallback$jscomp$81$$, $errorCallback$jscomp$82$$, $opt_timeoutMillis$jscomp$7$$));
};
var $mr$cast$Api$mapSetAdd_$$ = function($map$jscomp$2$$, $key$jscomp$106$$, $value$jscomp$150$$) {
  var $values$jscomp$23$$ = $map$jscomp$2$$.get($key$jscomp$106$$);
  $values$jscomp$23$$ || ($values$jscomp$23$$ = new $goog$structs$Set$$, $map$jscomp$2$$.set($key$jscomp$106$$, $values$jscomp$23$$));
  $values$jscomp$23$$.add($value$jscomp$150$$);
};
$JSCompiler_prototypeAlias$$ = $mr$cast$Api$$.prototype;
$JSCompiler_prototypeAlias$$.$addSessionUpdateListener$ = function($sessionId$jscomp$22$$, $listener$jscomp$131$$) {
  $mr$cast$Api$mapSetAdd_$$(this.$l$, $sessionId$jscomp$22$$, $listener$jscomp$131$$);
};
$JSCompiler_prototypeAlias$$.$removeSessionUpdateListener$ = function($sessionId$jscomp$23_values$jscomp$inline_462$$, $listener$jscomp$132$$) {
  ($sessionId$jscomp$23_values$jscomp$inline_462$$ = this.$l$.get($sessionId$jscomp$23_values$jscomp$inline_462$$)) && $sessionId$jscomp$23_values$jscomp$inline_462$$.remove($listener$jscomp$132$$);
};
$JSCompiler_prototypeAlias$$.$addReceiverActionListener$ = function($listener$jscomp$133$$) {
  this.$s$.push($listener$jscomp$133$$);
};
$JSCompiler_prototypeAlias$$.$removeReceiverActionListener$ = function($index$jscomp$90_listener$jscomp$134$$) {
  $index$jscomp$90_listener$jscomp$134$$ = this.$s$.indexOf($index$jscomp$90_listener$jscomp$134$$);
  0 <= $index$jscomp$90_listener$jscomp$134$$ && this.$s$.splice($index$jscomp$90_listener$jscomp$134$$, 1);
};
$JSCompiler_prototypeAlias$$.$addAppMessageListener$ = function($listeners$jscomp$1_sessionId$jscomp$24$$, $namespace$jscomp$20$$, $listener$jscomp$135$$) {
  var $namespaceListeners$$ = this.$i$.get($listeners$jscomp$1_sessionId$jscomp$24$$);
  $namespaceListeners$$ || ($namespaceListeners$$ = new $goog$structs$Map$$, this.$i$.set($listeners$jscomp$1_sessionId$jscomp$24$$, $namespaceListeners$$));
  $listeners$jscomp$1_sessionId$jscomp$24$$ = $namespaceListeners$$.get($namespace$jscomp$20$$);
  $listeners$jscomp$1_sessionId$jscomp$24$$ || ($listeners$jscomp$1_sessionId$jscomp$24$$ = new $goog$structs$Set$$, $namespaceListeners$$.set($namespace$jscomp$20$$, $listeners$jscomp$1_sessionId$jscomp$24$$));
  $listeners$jscomp$1_sessionId$jscomp$24$$.add($listener$jscomp$135$$);
};
$JSCompiler_prototypeAlias$$.$removeAppMessageListener$ = function($namespaceListeners$jscomp$1_sessionId$jscomp$25$$, $listeners$jscomp$2_namespace$jscomp$21$$, $listener$jscomp$136$$) {
  ($namespaceListeners$jscomp$1_sessionId$jscomp$25$$ = this.$i$.get($namespaceListeners$jscomp$1_sessionId$jscomp$25$$)) && ($listeners$jscomp$2_namespace$jscomp$21$$ = $namespaceListeners$jscomp$1_sessionId$jscomp$25$$.get($listeners$jscomp$2_namespace$jscomp$21$$)) && $listeners$jscomp$2_namespace$jscomp$21$$.remove($listener$jscomp$136$$);
};
$JSCompiler_prototypeAlias$$.$addMediaListener$ = function($sessionId$jscomp$26$$, $listener$jscomp$137$$) {
  $mr$cast$Api$mapSetAdd_$$(this.$o$, $sessionId$jscomp$26$$, $listener$jscomp$137$$);
};
$JSCompiler_prototypeAlias$$.$removeMediaListener$ = function($sessionId$jscomp$27_values$jscomp$inline_467$$, $listener$jscomp$138$$) {
  ($sessionId$jscomp$27_values$jscomp$inline_467$$ = this.$o$.get($sessionId$jscomp$27_values$jscomp$inline_467$$)) && $sessionId$jscomp$27_values$jscomp$inline_467$$.remove($listener$jscomp$138$$);
};
$JSCompiler_prototypeAlias$$.$addMediaUpdateListener$ = function($media$jscomp$14$$, $listener$jscomp$139$$) {
  -1 == $media$jscomp$14$$.$c$.indexOf($listener$jscomp$139$$) && $media$jscomp$14$$.$c$.push($listener$jscomp$139$$);
};
$JSCompiler_prototypeAlias$$.$removeMediaUpdateListener$ = function($media$jscomp$15$$, $index$jscomp$91_listener$jscomp$140$$) {
  $index$jscomp$91_listener$jscomp$140$$ = $media$jscomp$15$$.$c$.indexOf($index$jscomp$91_listener$jscomp$140$$);
  -1 != $index$jscomp$91_listener$jscomp$140$$ && $media$jscomp$15$$.$c$.splice($index$jscomp$91_listener$jscomp$140$$, 1);
};
$JSCompiler_prototypeAlias$$.$callMediaListeners_$ = function($media$jscomp$17$$) {
  if ($media$jscomp$17$$.$f$) {
    var $isAlive$$ = $media$jscomp$17$$.playerState != chrome.cast.media.$PlayerState$.IDLE || null != $media$jscomp$17$$.loadingItemId;
    $media$jscomp$17$$.$c$.forEach(function($listener$jscomp$142$$) {
      $listener$jscomp$142$$($isAlive$$);
    });
    $isAlive$$ || $JSCompiler_StaticMethods_removeMedia$$(this.$u$, $media$jscomp$17$$);
  } else {
    if (!(0 < this.$m$)) {
      $media$jscomp$17$$.$f$ = !0;
      var $listeners$jscomp$3$$ = this.$o$.get($media$jscomp$17$$.sessionId);
      $listeners$jscomp$3$$ && $goog$iter$forEach$$($listeners$jscomp$3$$.$__iterator__$(), function($listener$jscomp$141$$) {
        $listener$jscomp$141$$($media$jscomp$17$$);
      });
    }
  }
};
$JSCompiler_prototypeAlias$$.$createOrUpdateMedia_$ = function($newState$jscomp$4$$) {
  return $JSCompiler_StaticMethods_createOrUpdateMedia$$(this.$u$, $newState$jscomp$4$$);
};
var $JSCompiler_StaticMethods_removeSessionById_$$ = function($JSCompiler_StaticMethods_removeSessionById_$self$$, $finalSessionStatus$jscomp$1_listeners$jscomp$4$$) {
  if ($JSCompiler_StaticMethods_removeSessionById_$self$$.$h$) {
    var $sessionId$jscomp$28$$ = $JSCompiler_StaticMethods_removeSessionById_$self$$.$h$;
    $JSCompiler_StaticMethods_removeSessionById_$self$$.$h$ = null;
    $JSCompiler_StaticMethods_removeSessionById_$self$$.$j$.disconnect();
    var $isAlive$jscomp$1$$ = $finalSessionStatus$jscomp$1_listeners$jscomp$4$$ != chrome.cast.$SessionStatus$.STOPPED;
    $JSCompiler_StaticMethods_removeSessionById$$($JSCompiler_StaticMethods_removeSessionById_$self$$.$u$, $sessionId$jscomp$28$$, $finalSessionStatus$jscomp$1_listeners$jscomp$4$$) && ($JSCompiler_StaticMethods_removeSessionById_$self$$.$i$.remove($sessionId$jscomp$28$$), $JSCompiler_StaticMethods_removeSessionById_$self$$.$o$.remove($sessionId$jscomp$28$$), $finalSessionStatus$jscomp$1_listeners$jscomp$4$$ = $JSCompiler_StaticMethods_removeSessionById_$self$$.$l$.get($sessionId$jscomp$28$$)) && 
    ($JSCompiler_StaticMethods_removeSessionById_$self$$.$l$.remove($sessionId$jscomp$28$$), $goog$iter$forEach$$($finalSessionStatus$jscomp$1_listeners$jscomp$4$$.$__iterator__$(), function($listener$jscomp$143$$) {
      $listener$jscomp$143$$($isAlive$jscomp$1$$);
    }));
  }
};
$mr$cast$Api$$.prototype.onMessage = function($message$jscomp$70$$) {
  switch($message$jscomp$70$$.type) {
    case "new_session":
    case "update_session":
      $message$jscomp$70$$.message = $JSCompiler_StaticMethods_createOrUpdateSession$$(this.$u$, $message$jscomp$70$$.message);
      break;
    case "v2_message":
      var $callback$jscomp$inline_572_callback$jscomp$inline_575_callbackInfo$jscomp$inline_478_payload_v2Message$jscomp$inline_474$$ = $message$jscomp$70$$.message;
      $callback$jscomp$inline_572_callback$jscomp$inline_575_callbackInfo$jscomp$inline_478_payload_v2Message$jscomp$inline_474$$ && "MEDIA_STATUS" == $callback$jscomp$inline_572_callback$jscomp$inline_575_callbackInfo$jscomp$inline_478_payload_v2Message$jscomp$inline_474$$.type && $callback$jscomp$inline_572_callback$jscomp$inline_575_callbackInfo$jscomp$inline_478_payload_v2Message$jscomp$inline_474$$.status && ($callback$jscomp$inline_572_callback$jscomp$inline_575_callbackInfo$jscomp$inline_478_payload_v2Message$jscomp$inline_474$$.status = 
      $callback$jscomp$inline_572_callback$jscomp$inline_575_callbackInfo$jscomp$inline_478_payload_v2Message$jscomp$inline_474$$.status.map(this.$D$));
  }
  if ($callback$jscomp$inline_572_callback$jscomp$inline_575_callbackInfo$jscomp$inline_478_payload_v2Message$jscomp$inline_474$$ = $JSCompiler_StaticMethods_removeRequest$$(this.$v$, $message$jscomp$70$$.sequenceNumber)) {
    "error" == $message$jscomp$70$$.type ? ($callback$jscomp$inline_572_callback$jscomp$inline_575_callbackInfo$jscomp$inline_478_payload_v2Message$jscomp$inline_474$$ = $callback$jscomp$inline_572_callback$jscomp$inline_575_callbackInfo$jscomp$inline_478_payload_v2Message$jscomp$inline_474$$.$b$) && $callback$jscomp$inline_572_callback$jscomp$inline_575_callbackInfo$jscomp$inline_478_payload_v2Message$jscomp$inline_474$$($message$jscomp$70$$.message) : ($callback$jscomp$inline_572_callback$jscomp$inline_575_callbackInfo$jscomp$inline_478_payload_v2Message$jscomp$inline_474$$ = 
    $callback$jscomp$inline_572_callback$jscomp$inline_575_callbackInfo$jscomp$inline_478_payload_v2Message$jscomp$inline_474$$.$f$) && $callback$jscomp$inline_572_callback$jscomp$inline_575_callbackInfo$jscomp$inline_478_payload_v2Message$jscomp$inline_474$$($message$jscomp$70$$.message);
  }
  if ($callback$jscomp$inline_572_callback$jscomp$inline_575_callbackInfo$jscomp$inline_478_payload_v2Message$jscomp$inline_474$$ = $message$jscomp$70$$.message) {
    switch($message$jscomp$70$$.type) {
      case "receiver_action":
        $JSCompiler_StaticMethods_onReceiverAction_$$(this, $callback$jscomp$inline_572_callback$jscomp$inline_575_callbackInfo$jscomp$inline_478_payload_v2Message$jscomp$inline_474$$);
        break;
      case "new_session":
        this.$h$ = $callback$jscomp$inline_572_callback$jscomp$inline_575_callbackInfo$jscomp$inline_478_payload_v2Message$jscomp$inline_474$$.sessionId;
        this.$f$ ? (this.$f$($callback$jscomp$inline_572_callback$jscomp$inline_575_callbackInfo$jscomp$inline_478_payload_v2Message$jscomp$inline_474$$), this.$f$ = null) : this.$c$ && this.$c$.sessionListener($callback$jscomp$inline_572_callback$jscomp$inline_575_callbackInfo$jscomp$inline_478_payload_v2Message$jscomp$inline_474$$);
        break;
      case "update_session":
        $JSCompiler_StaticMethods_onUpdateSession_$$(this, $callback$jscomp$inline_572_callback$jscomp$inline_575_callbackInfo$jscomp$inline_478_payload_v2Message$jscomp$inline_474$$);
        break;
      case "app_message":
        $JSCompiler_StaticMethods_onAppMessage_$$(this, $callback$jscomp$inline_572_callback$jscomp$inline_575_callbackInfo$jscomp$inline_478_payload_v2Message$jscomp$inline_474$$);
        break;
      case "v2_message":
        "MEDIA_STATUS" == $callback$jscomp$inline_572_callback$jscomp$inline_575_callbackInfo$jscomp$inline_478_payload_v2Message$jscomp$inline_474$$.type && $callback$jscomp$inline_572_callback$jscomp$inline_575_callbackInfo$jscomp$inline_478_payload_v2Message$jscomp$inline_474$$.status.forEach(this.$callMediaListeners_$.bind(this));
        break;
      case "custom_dial_launch":
        $JSCompiler_StaticMethods_onCustomDialLaunchRequest_$$(this, $message$jscomp$70$$.sequenceNumber, $callback$jscomp$inline_572_callback$jscomp$inline_575_callbackInfo$jscomp$inline_478_payload_v2Message$jscomp$inline_474$$);
    }
  }
};
var $JSCompiler_StaticMethods_onUpdateSession_$$ = function($JSCompiler_StaticMethods_onUpdateSession_$self_listeners$jscomp$5$$, $session$jscomp$4$$) {
  ($JSCompiler_StaticMethods_onUpdateSession_$self_listeners$jscomp$5$$ = $JSCompiler_StaticMethods_onUpdateSession_$self_listeners$jscomp$5$$.$l$.get($session$jscomp$4$$.sessionId)) && $goog$iter$forEach$$($JSCompiler_StaticMethods_onUpdateSession_$self_listeners$jscomp$5$$.$__iterator__$(), function($listener$jscomp$144$$) {
    $listener$jscomp$144$$(!0);
  });
}, $JSCompiler_StaticMethods_onReceiverAction_$$ = function($JSCompiler_StaticMethods_onReceiverAction_$self$$, $receiverAction$$) {
  $JSCompiler_StaticMethods_onReceiverAction_$self$$.$s$.forEach(function($listener$jscomp$145$$) {
    $listener$jscomp$145$$($receiverAction$$.receiver, $receiverAction$$.action);
  });
}, $JSCompiler_StaticMethods_onAppMessage_$$ = function($JSCompiler_StaticMethods_onAppMessage_$self_listeners$jscomp$6_namespaceListeners$jscomp$2$$, $message$jscomp$71$$) {
  ($JSCompiler_StaticMethods_onAppMessage_$self_listeners$jscomp$6_namespaceListeners$jscomp$2$$ = $JSCompiler_StaticMethods_onAppMessage_$self_listeners$jscomp$6_namespaceListeners$jscomp$2$$.$i$.get($message$jscomp$71$$.sessionId)) && ($JSCompiler_StaticMethods_onAppMessage_$self_listeners$jscomp$6_namespaceListeners$jscomp$2$$ = $JSCompiler_StaticMethods_onAppMessage_$self_listeners$jscomp$6_namespaceListeners$jscomp$2$$.get($message$jscomp$71$$.namespaceName)) && $goog$iter$forEach$$($JSCompiler_StaticMethods_onAppMessage_$self_listeners$jscomp$6_namespaceListeners$jscomp$2$$.$__iterator__$(), 
  function($listener$jscomp$146$$) {
    $listener$jscomp$146$$($message$jscomp$71$$.namespaceName, $message$jscomp$71$$.message);
  });
}, $JSCompiler_StaticMethods_sendCustomDialLaunchResponse_$$ = function($JSCompiler_StaticMethods_sendCustomDialLaunchResponse_$self$$, $sequenceNumber$jscomp$1$$, $opt_response$$) {
  $JSCompiler_StaticMethods_sendToExtension_$$($JSCompiler_StaticMethods_sendCustomDialLaunchResponse_$self$$, new $mr$cast$InternalMessage$$("custom_dial_launch", $opt_response$$, void 0, chrome.cast.timeout.sendCustomMessage), null, $sequenceNumber$jscomp$1$$);
}, $JSCompiler_StaticMethods_onCustomDialLaunchRequest_$$ = function($JSCompiler_StaticMethods_onCustomDialLaunchRequest_$self$$, $sequenceNumber$jscomp$2$$, $request$jscomp$27$$) {
  $JSCompiler_StaticMethods_onCustomDialLaunchRequest_$self$$.$c$.customDialLaunchCallback ? $JSCompiler_StaticMethods_onCustomDialLaunchRequest_$self$$.$c$.customDialLaunchCallback($request$jscomp$27$$).then(function($response$jscomp$4$$) {
    $JSCompiler_StaticMethods_sendCustomDialLaunchResponse_$$($JSCompiler_StaticMethods_onCustomDialLaunchRequest_$self$$, $sequenceNumber$jscomp$2$$, $response$jscomp$4$$);
  }, function() {
    $JSCompiler_StaticMethods_sendCustomDialLaunchResponse_$$($JSCompiler_StaticMethods_onCustomDialLaunchRequest_$self$$, $sequenceNumber$jscomp$2$$);
  }) : $JSCompiler_StaticMethods_sendCustomDialLaunchResponse_$$($JSCompiler_StaticMethods_onCustomDialLaunchRequest_$self$$, $sequenceNumber$jscomp$2$$);
}, $mr$cast$Api$BASE_64_REG_EX_$$ = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, $mr$cast$Api$ALLOWED_BROADCAST_TYPES_$$ = new Set(["PRECACHE"]), $mr$cast$Api$api$$ = new $mr$cast$Api$$, $mr$cast$Api$logger_$$ = $mr$Logger$getInstance$$("mr.cast.Api");
chrome.cast.$initialize$ = function($apiConfig$jscomp$2$$, $successCallback$jscomp$82$$, $errorCallback$jscomp$83$$) {
  $mr$cast$Api$api$$.$initialize$($apiConfig$jscomp$2$$, $successCallback$jscomp$82$$, $errorCallback$jscomp$83$$);
};
$goog$exportSymbol$$("chrome.cast.initialize", chrome.cast.$initialize$);
chrome.cast.$initializeWithContext$ = function($apiConfig$jscomp$3$$, $successCallback$jscomp$83$$, $errorCallback$jscomp$84$$) {
  var $api$jscomp$16$$ = new $mr$cast$Api$$;
  $api$jscomp$16$$.$initialize$($apiConfig$jscomp$3$$, $successCallback$jscomp$83$$, $errorCallback$jscomp$84$$);
  return $api$jscomp$16$$;
};
$goog$exportSymbol$$("chrome.cast.initializeWithContext", chrome.cast.$initializeWithContext$);
chrome.cast.$setPageContext$ = function($win$jscomp$6$$) {
  $mr$cast$Api$api$$.$setPageContext$($win$jscomp$6$$);
};
$goog$exportSymbol$$("chrome.cast.setPageContext", chrome.cast.$setPageContext$);
chrome.cast.requestSession = function($successCallback$jscomp$84$$, $errorCallback$jscomp$85$$, $opt_sessionRequest$jscomp$3$$) {
  $mr$cast$Api$api$$.requestSession($successCallback$jscomp$84$$, $errorCallback$jscomp$85$$, $opt_sessionRequest$jscomp$3$$);
};
$goog$exportSymbol$$("chrome.cast.requestSession", chrome.cast.requestSession);
chrome.cast.$precache$ = function($data$jscomp$70$$) {
  $JSCompiler_StaticMethods_broadcastOrSendMessage$$(new chrome.cast.media.$PrecacheRequest$($data$jscomp$70$$));
};
$goog$exportSymbol$$("chrome.cast.precache", chrome.cast.$precache$);
chrome.cast.$requestSessionById$ = function($sessionId$jscomp$29$$) {
  chrome.cast.$requestSessionByIdWithContext$($mr$cast$Api$api$$, $sessionId$jscomp$29$$);
};
$goog$exportSymbol$$("chrome.cast.requestSessionById", chrome.cast.$requestSessionById$);
chrome.cast.$requestSessionByIdWithContext$ = function($context$jscomp$18$$, $sessionId$jscomp$30$$) {
  $context$jscomp$18$$.$requestSessionById$($sessionId$jscomp$30$$);
};
$goog$exportSymbol$$("chrome.cast.requestSessionByIdWithContext", chrome.cast.$requestSessionByIdWithContext$);
chrome.cast.$addReceiverActionListener$ = function($listener$jscomp$147$$) {
  $mr$cast$Api$api$$.$addReceiverActionListener$($listener$jscomp$147$$);
};
$goog$exportSymbol$$("chrome.cast.addReceiverActionListener", chrome.cast.$addReceiverActionListener$);
chrome.cast.$removeReceiverActionListener$ = function($listener$jscomp$148$$) {
  $mr$cast$Api$api$$.$removeReceiverActionListener$($listener$jscomp$148$$);
};
$goog$exportSymbol$$("chrome.cast.removeReceiverActionListener", chrome.cast.$removeReceiverActionListener$);
chrome.cast.$logMessage$ = function() {
};
$goog$exportSymbol$$("chrome.cast.logMessage", chrome.cast.$logMessage$);
chrome.cast.$setCustomReceivers$ = function($receivers$$, $successCallback$jscomp$85$$) {
  $successCallback$jscomp$85$$();
};
$goog$exportSymbol$$("chrome.cast.setCustomReceivers", chrome.cast.$setCustomReceivers$);
chrome.cast.$setReceiverDisplayStatus$ = function($receiver$jscomp$2$$, $successCallback$jscomp$86$$) {
  $successCallback$jscomp$86$$();
};
$goog$exportSymbol$$("chrome.cast.setReceiverDisplayStatus", chrome.cast.$setReceiverDisplayStatus$);
chrome.cast.unescape = function($escaped$$) {
  return -1 != $escaped$$.indexOf("&") ? "document" in $goog$global$$ ? $goog$string$unescapeEntitiesUsingDom_$$($escaped$$) : $goog$string$unescapePureXmlEntities_$$($escaped$$) : $escaped$$;
};
$goog$exportSymbol$$("chrome.cast.unescape", chrome.cast.unescape);
chrome.cast.isAvailable = !1;
$goog$exportSymbol$$("chrome.cast.isAvailable", chrome.cast.isAvailable);
chrome.cast.$setupCastApiCalled_$ = !1;
chrome.cast.$setupCastApi_$ = function() {
  if (!chrome.cast.$setupCastApiCalled_$) {
    chrome.cast.$setupCastApiCalled_$ = !0;
    chrome.cast.isAvailable = !0;
    var $callback$jscomp$357$$ = window.__onGCastApiAvailable;
    $callback$jscomp$357$$ && "function" == typeof $callback$jscomp$357$$ && $callback$jscomp$357$$(!0);
  }
};
"complete" == document.readyState ? chrome.cast.$setupCastApi_$() : (window.addEventListener("load", chrome.cast.$setupCastApi_$, !1), window.addEventListener("DOMContentLoaded", chrome.cast.$setupCastApi_$, !1));
}).call(this);
